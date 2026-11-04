# AGENTS.md — Projet Keezer connecté

Ce fichier est le point d'entrée de tous les agents IA intervenant sur ce dépôt. **Un fichier de consignes ne lance pas automatiquement les agents.**

## Lire avant toute mission
1. [Contexte vérifié](docs/gouvernance/CONTEXTE.md)
2. [Cahier des charges](docs/exigences/CAHIER_DES_CHARGES.md)
3. [Décisions](docs/gouvernance/DECISIONS.md)
4. [Règles de collaboration](docs/gouvernance/COLLABORATION.md)
5. [Contrat de données provisoire](docs/architecture/CONTRAT_DONNEES.yaml)
6. Sa fiche `agents/A*.md`, puis l'issue GitHub assignée.

## Agents
- A0 : Chef de projet — arbitrages, cohérence, dépendances.
- A1 : Électronique — capteurs, choix de carte et câblage basse tension.
- A2 : Firmware — logiciel embarqué, acquisition, calculs et tests simulés.
- A3 : Interface — écrans tactiles, états, calibration, couleur des LED.
- A4 : Mécanique et fluides — intégration fûts, robinets, eau, CO₂, froid.
- A5 : Achats et budget — références, compatibilité, comparatifs sourcés.
- A6 : Qualité et sécurité — gestion des risques et stratégie de validation.

## Règles non négociables
- Distinction systématique : **CONFIRMÉ**, **PROPOSÉ**, **À VÉRIFIER**, **REJETÉ**.
- Ne jamais inventer des caractéristiques de composants, résultats d'essais ou prix.
- Le propriétaire valide les décisions matérielles, le budget, les branchements et les changements de sécurité.
- Pas d'asservissement de pression CO₂ ou d'eau ; détendeurs manuels.
- Capteur CO₂ 0–5 bar **sur circuit basse pression en aval du détendeur**, jamais directement sur la bouteille haute pression.
- Pas de commande de puissance réelle, ni relais de compresseur actif, avant revue de sécurité électrique et validation de la stratégie de protection.
- Ne jamais publier de mot de passe Wi-Fi, clé API, secret ou donnée privée dans ce dépôt public.
- Valeur capteur manquante = `null` + statut, jamais zéro inventé.
- Une mission = une issue, branche dédiée, livrable, tests déclarés, revue.
- Toute modification du contrat de données doit être relue par A2, A3 et A0.
- Pas d'achat ni d'action sur le matériel réel sans autorisation humaine.

## Définition de terminé
Livrables traçables, hypothèses indiquées, cas normaux et cas dégradés décrits, tests effectués avec résultats, revue A6 sur les aspects sécurité, approbation humaine si décision structurante.

## Rapport de fin d'activité
Utiliser `docs/developpement/MODELE_DE_RAPPORT_AGENT.md`.
