# Keezer — fonctionnement à la demande (sans API payante)

## Objectif
Obtenir progressivement un **keezer complet et utilisable**, pas seulement une organisation d'agents.

Les rôles A0 à A6 dans `agents/` sont des **spécialités de travail**. Ils ne sont pas sept comptes IA qui tournent seuls. Dans le projet ChatGPT « Projet keezer », l'assistant peut prendre successivement ces rôles pour préparer un livrable concret, vérifier la cohérence entre spécialités, puis publier les fichiers sur GitHub avec les connecteurs autorisés.

**Aucune clé `OPENAI_API_KEY`, aucun workflow Codex API facturé, aucune exécution hebdomadaire.**

## Sur simple demande dans la conversation

Exemple : « Continue le projet Keezer : fais travailler les agents A1, A2 et A6 sur le choix et les essais des capteurs, puis propose une PR GitHub et mets la documentation sur Drive. »

Cycle :
1. A0 relit les décisions, issues et versions disponibles.
2. Les spécialités concernées produisent des résultats concrets : schéma, BOM, code, maquette, tests simulés.
3. A6 vérifie les risques, tests et données inconnues.
4. L'assistant crée une **branche et une pull request** dans `sebmarx-collab/Keezer`, lorsque les droits du connecteur le permettent.
5. L'utilisateur examine et décide de la fusion, des achats et des modifications physiques.
6. Sur demande, l'assistant exporte les livrables dans le dossier Drive de sauvegarde.

Tous ces travaux se déroulent **quand l'utilisateur écrit dans ChatGPT** ; pas de déclencheur temporel. Plusieurs points de vue peuvent être coordonnés dans une mission, mais cela ne constitue pas une exécution indépendante en arrière-plan.

## Livrables attendus pour un vrai produit clé en main

| Étape | Livrable concret | Responsable |
|---|---|---|
| P1 — Architecture | Plan électrique de principe, options contrôleur/capteurs, schéma E/S, BOM sourcée, revue sécurité | A1, A4, A5, A6 |
| P2 — Prototype logiciel | Firmware modularisé pour ESP32 ou autre carte validée ; jeu de données simulées et tests | A2, A6 |
| P3 — Interface | Écrans utilisables pour fûts, pression, température, filtre, LED et calibrations | A3, A2 |
| P4 — Préparation assemblage | Plan d'implantation et câblage détaillé selon matériel réellement choisi | A1, A4, A6 |
| P5 — Essais | Procédures de mise au point, étalonnages, résultats des tests réalisés physiquement | Tous |
| P6 — Livraison | Guide d'installation, exploitation, maintenance, liste des pièces et version de firmware | A0 et tous |

**Un code écrit ou un écran simulé n'est pas considéré comme prêt pour le matériel tant que les références, branchements et essais ne sont pas validés.**

## Questions matérielles à résoudre en premier
- Modèle/dimensions du congélateur et des deux Ecofass.
- Nombre de robinets, emplacement physique des LED.
- Contrôleur et écran tactile.
- Caractéristiques des capteurs de pesée et de pression basse 0–5 bar.
- Débitmètre et modèle/capacité du filtre à eau.
- Solution sûre de gestion du froid.

## Dépôts et sauvegardes
- **GitHub** : source officielle du code, des versions, des missions et des documentations techniques.
- **Google Drive** : copies de livrables, tableaux de coûts et archives à partager.
- **Sauvegarde Drive automatique** : option gratuite préparée dans `scripts/drive-backup/Code.gs`, à installer volontairement depuis Google Apps Script. Une autorisation Google est nécessaire. Sans cette installation, l'assistant peut faire les sauvegardes **à la demande** depuis ChatGPT en utilisant les connexions disponibles.
- **Contrôles GitHub Actions** : vérifications documentaires / syntaxiques, sans appel API OpenAI ni agent autonome.

## Exemples de demandes utiles
- « Continue le Keezer et prépare l'architecture électronique à valider. »
- « Conçois le programme de mesure des deux balances et ses tests simulés. »
- « Construis l'interface tactile complète avec des valeurs simulées. »
- « Vérifie les risques et prépare un plan de câblage pour les composants validés. »
- « Sauvegarde la version actuelle et le dossier technique sur mon Drive. »

## Ce que le propriétaire valide
Modèle et achat des composants, modifications mécaniques, électricité secteur, raccordements CO₂ et eau potable, mise en service et fusion de toute version qu'il souhaite contrôler.
