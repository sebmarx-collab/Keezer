# Automatisation Keezer — version sans API payante

## Configuration retenue

Le travail des agents IA est **déclenché uniquement à la demande du propriétaire dans le projet ChatGPT**. Aucun déclencheur hebdomadaire, aucune clé OpenAI API, aucune facturation API additionnelle.

À chaque demande :
- l'assistant relit le contexte et les instructions A0 à A6 ;
- coordonne les spécialités utiles ;
- produit de vrais livrables (code, documentation, tests, maquettes, nomenclature) ;
- propose les changements dans une branche/PR GitHub, sans fusion automatique ;
- sauvegarde sur Google Drive si demandé.

Mode d'emploi et feuille de route : [`docs/developpement/EXECUTION_A_LA_DEMANDE.md`](../developpement/EXECUTION_A_LA_DEMANDE.md).

## Contrôle GitHub gratuit
Le workflow `.github/workflows/keezer-structure.yml` vérifie la présence des fichiers indispensables et la syntaxe JavaScript du script Drive lors des PR et modifications de main. Il **ne lance aucun agent IA**. GitHub Actions reste soumis aux quotas/conditions du compte GitHub.

## Sauvegarde GitHub → Google Drive

Le dépôt étant public, un script Google Apps Script peut enregistrer chaque nouvelle version de `main` dans le dossier privé :
**Projet Keezer - Sauvegardes**.

### Pour activer la sauvegarde automatique quotidienne (facultatif)
1. Se connecter au compte Google qui possède le dossier Drive.
2. Ouvrir https://script.google.com/home/projects/create
3. Remplacer le contenu de `Code.gs` avec le script du dépôt `scripts/drive-backup/Code.gs`.
4. Dans **Paramètres du projet > Propriétés du script**, définir `KEEZER_DRIVE_FOLDER_ID` sur l'ID du dossier voulu, sans l'ajouter dans le dépôt public.
5. Dans l'éditeur Apps Script, lancer `sauvegarderKeezer` et accepter les permissions Google.
6. Contrôler qu'une archive ZIP apparaît bien dans le dossier Drive, puis lancer une seule fois `installerSauvegardeQuotidienne`.

Ce déclencheur quotidien concerne **uniquement les sauvegardes** (pas les agents). Il peut être supprimé dans les **Déclencheurs** Apps Script. Il ne nécessite pas d'API OpenAI payante, mais utilise les quotas Apps Script du compte Google.

### Limites
- Le script crée une archive du contenu de `main` pour chaque nouveau SHA et conserve les anciennes archives.
- Il n'effectue pas de synchronisation bidirectionnelle et ne sauvegarde pas les Issues/PR/commentaires ni l'historique Git complet.
- Si le dépôt devient privé, le script doit être adapté à une authentification sécurisée.
- Le script n'est **pas installé dans le compte Google** simplement parce que ce fichier existe sur GitHub.
- Sans ce script, des sauvegardes peuvent être demandées à l'assistant via ChatGPT, avec les connexions autorisées.

## État au 4 novembre 2026
- Dossier Drive : créé.
- Organisation A0 à A6 : présente dans main.
- Suivi ChatGPT hebdomadaire A0 : désactivé à la demande du propriétaire.
- Workflow automatique Codex/API : retiré de la proposition.
- Sauvegarde Drive quotidienne : facultative, non activée.
- Exécution à la demande des missions : retenue.
