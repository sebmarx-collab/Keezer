# Cahier des charges initial — Keezer connecté

**Version 0.1, document de cadrage, pas plan de câblage exécutable.**

## Objectif fonctionnel
- Superviser température du coffre et condition de fonctionnement.
- Estimer le volume restant dans deux fûts Ecofass par pesée continue et références de masses vide/plein.
- Afficher pression CO₂ basse pression (cible capteur 0–5 bar), sans la réguler électroniquement.
- Suivre le volume d'eau passé dans un filtre et afficher l'utilisation estimée selon capacité nominale renseignée.
- Permettre l'affichage et la personnalisation de l'indicateur LED au-dessus de chaque robinet.
- Prévoir interface tactile pour suivi, réglages non dangereux et calibration.

## Contraintes
- 2 fûts prêtés, pas d'achat de fûts ; congélateur annoncé à 100 €.
- Pression CO₂ / eau réglée manuellement ; affichage seul dans l'interface.
- Les mesures de masse doivent permettre une tare et deux références par fût. Convertir masse en volume demande de connaître la différence de masse et la densité approximative du liquide (à paramétrer/documenter).
- Capteur de pression uniquement compatible avec fluide, plage de travail et raccordement basse pression ; vérifier alimentation, précision, surpression admissible.
- Toute installation hydraulique destinée à l'eau potable doit respecter les matériaux et conditions sanitaires adaptés.
- Toute partie électrique secteur ou frigorifique nécessite conception, protections et contrôle adaptés.

## Qualité et sécurité
- États de capteur : ok / indisponible / non calibré / alerte / défaut.
- Jamais de données fictives non signalées comme simulation.
- Échec de capteur ou de communication : interface indique « donnée indisponible ».
- Paramètres importants persistants avec stratégie de récupération.
- Validation des choix matériels et des mises sous tension par le propriétaire, puis mesures réelles documentées.

## Déploiement par étapes
J0 dossier de cadrage ; J1 comparaison des architectures ; J2 validation et simulations ; J3 prototypage basse tension ; J4 intégration sous contrôle.
