# Contexte partagé — v0.1

## Objectif
Keezer connecté pour la distribution de bière et d'eau avec mesures, supervision tactile et maintenance facilitée.

## Éléments établis lors des échanges
| ID | Élément | Statut |
|---|---|---|
| EX-01 | Congélateur coffre, coût annoncé 100 € | CONFIRMÉ |
| EX-02 | Deux fûts Ecofass fournis par un brasseur, aucun achat de fûts | CONFIRMÉ |
| EX-03 | Deux balances distinctes sous fûts | CONFIRMÉ |
| EX-04 | Calibration références fût vide / plein pour estimer stock | CONFIRMÉ |
| EX-05 | Capteur CO₂ nominal 0–5 bar, installation basse pression | CONFIRMÉ EN PRINCIPE |
| EX-06 | Réglage des pressions CO₂ et eau manuel : détendeurs, manomètres | CONFIRMÉ |
| EX-07 | LED configurable au-dessus de chaque robinet | CONFIRMÉ |
| EX-08 | Écran pour température, stocks, pression, filtre et paramètres | CONFIRMÉ EN PRINCIPE |
| EX-09 | Suivi du filtre à eau par volume cumulé au débitmètre | CONFIRMÉ EN PRINCIPE |

## À décider
- Modèle exact de congélateur, dimensions disponibles, nombre et configuration des robinets.
- Carte ESP32 ou autre, alimentation, modèles de capteurs et schémas de câblage.
- Type d'écran, choix de plateforme et liaison avec contrôleur.
- Architecture sûre de régulation thermique et interface avec équipement frigorifique.
- Diamètres/raccords du circuit eau et CO₂, compatibilité alimentaire.
- Capacité nominale du filtre et modalités de remise à zéro.

## Hypothèses à ne pas confondre avec une décision
Le nom ESP32 n'est pas une carte sélectionnée. Une pression CO₂ mesurée en un point ne représente pas plusieurs branches régulées indépendamment. Un débitmètre n'est pas une analyse chimique de la qualité du filtre.
