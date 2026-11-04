/**
 * Keezer — sauvegarde quotidienne du dépôt GitHub public dans un Drive privé.
 * Exécution sous le compte Google qui autorise ce projet Apps Script.
 *
 * Configuration sans secret dans le dépôt public :
 * Propriétés du script => KEEZER_DRIVE_FOLDER_ID = identifiant du dossier de sauvegarde.
 * Le script ne supprime aucun fichier du Drive.
 */
const KEEZER_REPO = 'sebmarx-collab/Keezer';
const KEEZER_TZ = 'Europe/Paris';
const KEEZER_MAX_BYTES = 20 * 1024 * 1024; // arrêter plutôt que remplir le Drive

function sauvegarderKeezer() {
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(30000)) {
    throw new Error('Une autre sauvegarde Keezer est déjà en cours.');
  }
  try {
    const folderId = PropertiesService.getScriptProperties()
      .getProperty('KEEZER_DRIVE_FOLDER_ID');
    if (!folderId || !/^[A-Za-z0-9_-]+$/.test(folderId)) {
      throw new Error('Définir KEEZER_DRIVE_FOLDER_ID dans les propriétés du script.');
    }
    const folder = DriveApp.getFolderById(folderId);
    const requestOptions = {
      muteHttpExceptions: true,
      followRedirects: true,
      headers: {
        'User-Agent': 'Keezer-Drive-Backup/1.0',
        'Accept': 'application/vnd.github+json'
      }
    };

    const commitResponse = UrlFetchApp.fetch(
      'https://api.github.com/repos/' + KEEZER_REPO + '/commits/main',
      requestOptions
    );
    if (commitResponse.getResponseCode() !== 200) {
      throw new Error('GitHub commit HTTP ' + commitResponse.getResponseCode());
    }
    const sha = JSON.parse(commitResponse.getContentText()).sha;
    if (!/^[a-f0-9]{40}$/.test(sha || '')) {
      throw new Error('SHA GitHub inattendu, sauvegarde annulée.');
    }

    const fileName = 'Keezer-main-' + sha.substring(0, 12) + '.zip';
    if (folder.getFilesByName(fileName).hasNext()) {
      console.log('Version déjà sauvegardée : ' + fileName);
      return fileName;
    }

    const response = UrlFetchApp.fetch(
      'https://codeload.github.com/' + KEEZER_REPO + '/zip/' + sha,
      requestOptions
    );
    if (response.getResponseCode() !== 200) {
      throw new Error('Téléchargement ZIP GitHub HTTP ' + response.getResponseCode());
    }
    const blob = response.getBlob().setName(fileName);
    const size = blob.getBytes().length;
    if (size === 0 || size > KEEZER_MAX_BYTES) {
      throw new Error('Archive vide ou supérieure à 20 Mo : ' + size + ' octets.');
    }
    blob.setContentType('application/zip');
    const file = folder.createFile(blob);
    file.setDescription('Keezer / main / SHA ' + sha + ' / snapshot de fichiers, sans historique Git ni Issues');
    console.log('Sauvegarde créée : ' + file.getUrl());
    return file.getUrl();
  } finally {
    lock.releaseLock();
  }
}

/** À lancer UNE SEULE FOIS manuellement après autorisation dans Apps Script. */
function installerSauvegardeQuotidienne() {
  const folderId = PropertiesService.getScriptProperties()
    .getProperty('KEEZER_DRIVE_FOLDER_ID');
  if (!folderId) {
    throw new Error('Configurer KEEZER_DRIVE_FOLDER_ID avant l’installation.');
  }
  // Remplace uniquement les anciens déclencheurs de CETTE fonction.
  ScriptApp.getProjectTriggers()
    .filter(t => t.getHandlerFunction() === 'sauvegarderKeezer')
    .forEach(t => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger('sauvegarderKeezer')
    .timeBased()
    .everyDays(1)
    .atHour(3)
    .inTimezone(KEEZER_TZ)
    .create();
  console.log('Déclencheur quotidien créé (environ 03 h, heure de Paris).');
}
