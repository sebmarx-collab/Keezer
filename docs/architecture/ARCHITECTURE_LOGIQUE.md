# Architecture logique proposée

## Séparer les blocs
1. **Capteurs** : 2 voies de pesée, température, pression CO₂ basse, volume eau.
2. **Acquisition** : interfaces électriques adaptées, déparasitage, validation des lectures.
3. **Métier** : calcul du niveau restant, cumul eau, alarmes et calibration.
4. **Stockage** : paramètres persistants (technologie non déterminée).
5. **Interface** : écran tactile et paramètres utilisateur.
6. **Indication** : LED au-dessus des robinets.
7. **Supervision / transport** : liaison locale choisie après arbitrage (écran directement connecté ou protocole réseau).
8. **Thermique** : gestion indépendante du système de sécurité frigorifique, architecture non validée.

## Flux proposés
`Capteurs -> acquisition -> validation -> télémétrie -> écran`
`Écran -> commande autorisée et validée -> configuration -> acquittement`
`Configuration -> stockage persistant -> restitution après redémarrage`

## Restrictions initiales
Pas de pilotage de la pression, pas de GPIO réel défini, pas de commande directe du secteur. Le contrat `CONTRAT_DONNEES.yaml` est **provisoire** ; A2/A3/A0 doivent le revoir ensemble.

## Risques à analyser
Condensation et corrosion, pesée sous contrainte de tuyauterie, surpression, fuites, débitmètre hors spécification, précision/horodatage, perte de capteur, risque compresseur.
