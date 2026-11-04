# Automatisation Keezer — installation (proposition v1)

Ce dossier contient **deux mécanismes séparés** :
1. une sauvegarde automatique quotidienne des **fichiers de main** vers le Google Drive privé du propriétaire, via Google Apps Script ;
2. sept rapports IA spécialisés via **GitHub Actions + Codex** (hebdomadaires ou lancement manuel).

⚠️ **Attention : les configurations dans le dépôt ne suffisent pas à activer les services.** Le propriétaire doit autoriser le script Google et, s'il veut l'IA API, configurer la facturation/une clé API. Aucune exécution matérielle ni fusion automatique.

## A — Sauvegarde Github → Drive (sans clé API)

Dossier déjà créé : « Projet Keezer - Sauvegardes », dans le compte Google personnel du propriétaire.
Cette solution fonctionne parce que **le dépôt Keezer est public** ; elle ne convient pas telle quelle si celui-ci redevient privé.

1. Ouvrir [Google Apps Script](https://script.google.com/home/projects/create) en étant connecté au **bon compte Drive**.
2. Créer un projet nommé « Keezer — sauvegarde GitHub ». Remplacer le contenu du fichier `Code.gs` par le contenu de `scripts/drive-backup/Code.gs`.
3. Dans **Paramètres du projet → Propriétés du script**, ajouter :
   - clé : `KEEZER_DRIVE_FOLDER_ID`
   - valeur : **l'ID du dossier Google Drive de sauvegarde**. Il correspond au morceau situé après `/folders/` dans l'adresse du dossier. Ne pas insérer cet ID dans le dépôt GitHub public.
4. Exécuter `sauvegarderKeezer` dans Apps Script, consentir aux autorisations Google (Drive + requêtes externes) et vérifier qu'un ZIP est créé dans le dossier.
5. Exécuter **une seule fois** `installerSauvegardeQuotidienne` pour installer le déclencheur. Il effectuera ensuite une vérification quotidienne vers 03 h, heure de Paris (l'heure exacte est approximative côté Google).
6. Contrôler les éventuelles erreurs depuis **Exécutions** et **Déclencheurs** dans Apps Script.

### Comportement de sauvegarde
- Le script lit le SHA du dernier commit de `main`.
- Il récupère le ZIP correspondant et crée `Keezer-main-<12 premiers caractères du SHA>.zip` dans le Drive.
- Si ce SHA est déjà sauvegardé, il **n'ajoute pas de doublon**.
- Il **ne supprime jamais** les anciennes archives ; surveiller la place disponible.
- Il arrête l'opération si l'archive dépasse 20 Mo (seuil configurable).
- **C'est un instantané de fichiers**, pas une synchronisation bidirectionnelle, ni une sauvegarde des Issues, PR, commentaires ou de l'historique Git complet. Le dépôt GitHub reste la source du code.

### Contrôle recommandé
Après la première installation, vérifier manuellement la première archive et son contenu. Si le dépôt passe en privé, cette méthode cessera de fonctionner et un mécanisme authentifié sera nécessaire.

## B — Agents IA automatiques via GitHub Actions

Le workflow est `.github/workflows/keezer-agents.yml`.

### Ce qu'il fait
- Le lundi, à 07:17 UTC, il peut lancer **7 analyses parallèles** : A0 à A6.
- Il peut aussi être lancé à la demande via l'onglet **Actions**, avec choix de A0…A6 ou `all`.
- Chaque agent consulte les consignes du dépôt, sa fiche et l'issue GitHub correspondante (#1 à #7).
- Il produit un rapport de proposition dans les **logs de son job GitHub Actions**. Son fichier de sortie sur le runner est temporaire : **aucune publication de rapport dans le dépôt ou le Drive n'est automatique**.
- Le workflow Codex fonctionne en **lecture seule**, sans droit d'écriture GitHub ; il ne fusionne, n'achète ni ne pilote rien.

### Activation (seulement après acceptation des coûts API)
1. Prévoir un compte OpenAI Platform avec facturation API et limite de dépenses adaptée. **ChatGPT Plus n'inclut pas les appels API du workflow.**
2. Créer une clé API *de projet* et ajouter dans GitHub : **Settings → Secrets and variables → Actions → New repository secret**, nom : `OPENAI_API_KEY`. Ne jamais coller la valeur dans une issue, un fichier public ou un message.
3. Ajouter une **Repository variable** nommée `ENABLE_AI_AGENTS` et valeur `true`.
4. Depuis **Actions → Keezer — agents IA**, exécuter d'abord un lancement manuel avec `agent = A0`. Examiner le résultat, la durée et les frais.
5. Si satisfaisant, conserver la variable à `true` pour le rendez-vous hebdomadaire des 7 agents. Pour suspendre la consommation, mettre la variable à `false`.

### Sécurité et validation
- Déclenchements limités aux événements planifiés et `workflow_dispatch`.
- Chaque job a seulement accès en lecture aux **contents/issues**.
- Les textes d'Issues sont des données non fiables ; ils ne doivent pas se substituer aux consignes de sécurité.
- L'action officielle `openai/codex-action@v1` exécute Codex avec `permission-profile: :read-only` et `safety-strategy: drop-sudo`.
- Les agents **ne génèrent pas automatiquement de pull requests** dans cette version. Une phase suivante pourra produire des PR de code proposées, avec contrôle d'accès séparé et relecture humaine.
- Les coûts ne sont pas connus à l'avance : fréquence, volume du dépôt, modèle et taille des instructions font varier la consommation.

## C — Comment les deux éléments fonctionnent ensemble

- GitHub : dépôt officiel, versions et missions.
- Drive : sauvegardes ZIP privées, actualisées à la création d'un nouveau commit.
- GitHub Actions / Codex : rapports de spécialité, lorsque l'exécution API est autorisée.
- Propriétaire : arbitrages, dépenses, choix des composants, sécurité et approbation des pull requests.

### État d'activation
| Élément | État initial |
|---|---|
| Dossier Drive | EXISTANT |
| Script backup Google | À INSTALLER/AUTORISER |
| Premier ZIP automatique | NON EXÉCUTÉ |
| Workflow GitHub Actions | PROPOSÉ, à fusionner |
| Clé API / variable d'activation | À CONFIGURER |
| Rapports AI planifiés | NON EXÉCUTÉS |

**Aucune partie de cette documentation ne prouve qu'une sauvegarde programmée ou une génération Codex s'est déjà déroulée avec succès.**
