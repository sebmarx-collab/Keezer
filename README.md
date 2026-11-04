# Keezer connecté

Projet de **keezer connecté** : deux fûts Ecofass avec suivi de niveau par pesée, supervision de température, pression CO₂ basse pression, indicateur de filtre à eau et LED configurables au-dessus des robinets, avec interface tactile.

**État : conception et préparation.** Les choix électroniques, l'écran, les raccords et la stratégie de régulation thermique restent à valider. Aucun firmware ni matériel complet n'a encore été déclaré testé.

## Comment faire avancer le projet

Le développement est réalisé **sur demande dans le projet ChatGPT**, sans clé API payante et sans agents lancés automatiquement.

Exemple de message : **« Continue le projet Keezer : prépare l'architecture électronique complète, fais relire la sécurité, crée une pull request et mets les documents à jour. »**

ChatGPT coordonne les rôles spécialisés A0–A6 décrits dans [AGENTS.md](AGENTS.md), prépare des livrables et les propose dans GitHub. **Tu valides les choix matériels, les achats et les modifications sensibles.**

- [Organisation et missions à la demande](docs/developpement/EXECUTION_A_LA_DEMANDE.md)
- [Cahier des charges](docs/exigences/CAHIER_DES_CHARGES.md)
- [Contexte et décisions actées](docs/gouvernance/CONTEXTE.md)
- [Décisions à arbitrer](docs/gouvernance/DECISIONS.md)
- [Feuille de route](docs/missions/FEUILLE_DE_ROUTE.md)
- [Missions initiales des 7 agents](docs/missions/MISSIONS_INITIALES.md)
- [Sécurité du projet](docs/securite/POLITIQUE_SECURITE.md)
- [Sauvegarde Drive facultative](docs/automatisation/INSTALLATION.md)

## Répartition

- `firmware/` : futur logiciel embarqué ;
- `interface/` : interface tactile ;
- `docs/` : choix techniques, plans, budget et essais ;
- `agents/` : consignes par spécialité ;
- `tests/` : tests et procédures.

GitHub est la source de vérité du code. Les documents et sauvegardes sont conservés dans le dossier Drive personnel prévu pour le projet. Les sauvegardes automatiques sont **facultatives** et doivent être activées séparément.

**Les rôles A0–A6 sont une organisation de travail : le dépôt ne fait pas fonctionner sept agents autonomes tout seul.**
