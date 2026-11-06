# Registre des paramètres V0.4 — Keezer connecté

**Statut : base fonctionnelle consolidée, repérage E/S et valeurs exactes à fixer après choix des composants.**  
Colonnes : ID / paramètre / catégorie / unité / gestionnaire / portée / valeur initiale ou remarque.  
M = mesure ; C = calcul ; R = réglage écran ; E = état ; O = option.

## Configuration générale

| ID | Paramètre | Type | Unité | Source / gestionnaire | Défaut ou remarque |
|---|---|---|---|---|---|
| SYS-001 | Nom du keezer | R | texte | Raspberry | Keezer |
| SYS-002 | Date et heure | E | ISO 8601 | Raspberry | Heure locale |
| SYS-003 | Version logiciel interface | E | version | Raspberry | Lecture seule |
| SYS-004 | Version firmware automate | E | version | Arduino | Lecture seule |
| SYS-005 | Langue interface | R | langue | Raspberry | Français |
| SYS-006 | Luminosité écran | R | % | Raspberry | À définir |
| SYS-007 | Veille écran | R | min | Raspberry | À définir |
| SYS-008 | Thème | R | clair/sombre | Raspberry | À définir |
| SYS-009 | Liaison USB disponible | E | état | Les deux | Surveillance bidirectionnelle |
| SYS-010 | Dernier échange reçu | E | timestamp | Les deux | Afficher une panne de liaison |
| SYS-011 | Mode maintenance | R/E | marche/arrêt | Les deux | Contrôle d'accès recommandé |
| SYS-012 | État du stockage paramètres | E | état | Les deux | Erreurs visibles |
| SYS-013 | Export des réglages | R | action | Raspberry | Confirmation |
| SYS-014 | Restauration réglages | R | action | Raspberry | Validation, sauvegarde locale |
| SYS-015 | État alimentation/redémarrage | E | évènement | Arduino | Sans inventer coupure historique |

## Fûts de bière (appliqué séparément aux fûts 1 et 2)

| ID | Paramètre | Type | Unité | Gestionnaire | Défaut ou remarque |
|---|---|---|---|---|---|
| KEG-x-001 | Identifiant du fût | R/E | 1 ou 2 | Raspberry | x=1 ou 2 |
| KEG-x-002 | Nom de bière | R | texte | Raspberry | À renseigner |
| KEG-x-003 | Brasserie | R | texte | Raspberry | Facultatif |
| KEG-x-004 | Style | R | texte | Raspberry | Facultatif |
| KEG-x-005 | Alcool | R | % vol | Raspberry | Facultatif |
| KEG-x-006 | Capacité nominale | R | L | Raspberry/Arduino | 20 L |
| KEG-x-007 | Masse brute | M | kg | Arduino | Cellule de charge |
| KEG-x-008 | Masse tare plateau | R | kg | Arduino | Calibration |
| KEG-x-009 | Masse référence vide | R | kg | Arduino | Calibration |
| KEG-x-010 | Masse référence plein | R | kg | Arduino | Calibration |
| KEG-x-011 | Facteur cellule | R | unité HX711 | Arduino | Calibration |
| KEG-x-012 | Correction zéro | R | kg | Arduino | Calibration |
| KEG-x-013 | Densité bière | R | kg/L | Raspberry/Arduino | Déterminée ou estimation annoncée |
| KEG-x-014 | Masse liquide restante | C | kg | Arduino | Référence et capteur valides |
| KEG-x-015 | Litres restants estimés | C | L | Arduino | Indisponible si non calibré |
| KEG-x-016 | Pourcentage restant | C | % | Arduino | 0–100 si références valides |
| KEG-x-017 | Volume consommé estimé | C | L | Raspberry | Dérivé des pesées |
| KEG-x-018 | Stock faible | R | % | Raspberry/Arduino | À définir |
| KEG-x-019 | Stock critique | R | % | Raspberry/Arduino | À définir |
| KEG-x-020 | Date changement fût | R/E | date | Raspberry | Journal |
| KEG-x-021 | État calibration | E | enum | Arduino | non calibré/ok/défaut |
| KEG-x-022 | État stabilité de masse | E | enum | Arduino | stable/instable |
| KEG-x-023 | Défaut cellule / HX711 | E | enum | Arduino | Signalé à l'écran |
| KEG-x-024 | Filtrage des mesures | R | — | Arduino | Borné, à étudier |

## Régulation frigorifique

| ID | Paramètre | Type | Unité | Gestionnaire | Défaut ou remarque |
|---|---|---|---|---|---|
| TMP-001 | Température du coffre | M | °C | Arduino | Sonde principale |
| TMP-002 | Consigne | R | °C | Arduino + écran | Ex. 3 °C proposé |
| TMP-003 | Hystérésis | R | °C | Arduino + écran | Ex. 1 °C proposé |
| TMP-004 | Seuil démarrage | C | °C | Arduino | Consigne + hystérésis |
| TMP-005 | Seuil arrêt | C | °C | Arduino | Selon logique validée |
| TMP-006 | Anti-court-cycle | R | min | Arduino | Ex. 5 min proposé, à valider |
| TMP-007 | Temps minimum marche | R | min | Arduino | À valider |
| TMP-008 | Temps minimum arrêt | R | min | Arduino | À valider |
| TMP-009 | Temps marche maximal | R | min | Arduino | Alerte/arrêt suivant analyse de risques |
| TMP-010 | Demande de froid | E | booléen | Arduino | Commande logique |
| TMP-011 | Sortie contacteur | E | booléen | Arduino | État commandé, pas état physique |
| TMP-012 | Retour contacteur | M/O | booléen | Arduino | Si câblé |
| TMP-013 | Temps de marche cumulé | C | h | Arduino/Raspberry | Mesuré ou estimé selon retour |
| TMP-014 | Nombre de cycles | C | nombre | Arduino/Raspberry | Journal |
| TMP-015 | Température minimum | C | °C | Raspberry | Historique |
| TMP-016 | Température maximum | C | °C | Raspberry | Historique |
| TMP-017 | Alarme haute | R | °C | Arduino + écran | À définir |
| TMP-018 | Alarme basse | R | °C | Arduino + écran | À définir |
| TMP-019 | Délai alarme | R | min | Arduino + écran | À définir |
| TMP-020 | Défaut de sonde | E | enum | Arduino | Arrêt demande de froid |
| TMP-021 | Mode maintenance | R/E | booléen | Arduino + écran | Sécurisé |
| TMP-022 | Défaut froid prolongé | E | enum | Arduino | Temporisé |
| TMP-023 | Consigne mémorisée | E | °C | Arduino | Autonome sans écran |
| TMP-024 | Défaut sécurité indépendante | M/E/O | état | Câblage/Arduino | Selon architecture réelle |

## Pression CO₂ — mesure seulement

| ID | Paramètre | Type | Unité | Gestionnaire | Défaut ou remarque |
|---|---|---|---|---|---|
| CO2-001 | Pression ligne basse | M | bar | Arduino | Capteur 0–5 bar souhaité |
| CO2-002 | État capteur | E | enum | Arduino | Indisponible si défaut |
| CO2-003 | Seuil d'alerte bas | R | bar | Arduino + écran | À déterminer |
| CO2-004 | Seuil d'alerte haut | R | bar | Arduino + écran | Respect limite du fût |
| CO2-005 | Temporisation alarme | R | s | Arduino | À déterminer |
| CO2-006 | Minimum mémorisé | C | bar | Raspberry | Historique |
| CO2-007 | Maximum mémorisé | C | bar | Raspberry | Historique |
| CO2-008 | Coefficient étalonnage | R | — | Arduino | Selon documentation |
| CO2-009 | Fréquence acquisition | R | Hz | Arduino | Bornée selon matériel |
| CO2-010 | Pression réglée électriquement | E | non | Aucun | **Non prévue** |

## Eau plate filtrée et réfrigérée

| ID | Paramètre | Type | Unité | Gestionnaire | Défaut ou remarque |
|---|---|---|---|---|---|
| WTR-001 | Impulsions débitmètre | M | impulsions | Arduino | Entrée adaptée |
| WTR-002 | Débit instantané | C | L/min | Arduino | Si signal mesurable |
| WTR-003 | Total général | C | L | Arduino/Raspberry | Persistant |
| WTR-004 | Volume depuis changement filtre | C | L | Arduino/Raspberry | Persistant |
| WTR-005 | Capacité nominale filtre | R | L | Écran | Selon modèle définitif |
| WTR-006 | Filtre utilisé | C | % | Raspberry | Volume + calendrier |
| WTR-007 | Volume filtre restant estimé | C | L | Raspberry | Pas mesure de qualité |
| WTR-008 | Date changement filtre | R | date | Écran | Historisé |
| WTR-009 | Durée maximale cartouche | R | jours | Écran | Selon fabricant |
| WTR-010 | Alerte usure filtre | R | % | Écran | À définir |
| WTR-011 | Seuil délai cartouche | R | jours | Écran | Selon fabricant |
| WTR-012 | Coefficient impulsions/L | R | imp/L | Arduino | Selon référence |
| WTR-013 | État compteur | E | enum | Arduino | Indisponible si incohérent |
| WTR-014 | Date du dernier reset | E | date | Raspberry | Après remplacement |
| WTR-015 | Température eau servie | M/O | °C | Arduino | Sonde optionnelle |
| WTR-016 | Température bain froid | M/O | °C | Arduino | Sonde optionnelle |
| WTR-017 | Débit anormal | E/O | état | Arduino | Dépend de surveillance additionnelle |
| WTR-018 | Remplacement filtre | R | action | Écran | Confirmation nécessaire |

## LED des 3 robinets (paramétrage indépendant)

| ID | Paramètre | Type | Unité | Gestionnaire | Défaut ou remarque |
|---|---|---|---|---|---|
| LED-x-001 | Robinet lié | E | 1/2/3 | Raspberry/Arduino | 1 bière 1, 2 bière 2, 3 eau |
| LED-x-002 | Activation | R | booléen | Écran → Arduino | Oui par défaut proposé |
| LED-x-003 | Couleur produit | R | RGB | Écran → Arduino | Choisie librement |
| LED-x-004 | Intensité | R | % | Écran → Arduino | Réglable |
| LED-x-005 | Mode | R | produit/mesure | Écran → Arduino | **produit par défaut** |
| LED-x-006 | Mesure alternative | R/O | ID mesure | Écran → Arduino | Choix manuel |
| LED-x-007 | Seuil bas mesure | R/O | selon mesure | Écran → Arduino | Borné |
| LED-x-008 | Seuil haut mesure | R/O | selon mesure | Écran → Arduino | Borné |
| LED-x-009 | Couleur basse mesure | R/O | RGB | Écran → Arduino | Si mode mesure |
| LED-x-010 | Couleur moyenne mesure | R/O | RGB | Écran → Arduino | Si mode mesure |
| LED-x-011 | Couleur haute mesure | R/O | RGB | Écran → Arduino | Si mode mesure |
| LED-x-012 | Comportement mesure indisponible | R/E | enum | Arduino | Ne jamais feindre une mesure |
| LED-x-013 | État commande LED | E | état | Arduino | Ne prouve pas émission de lumière |

## Alarmes et maintenance

| ID | Paramètre | Type | Unité | Gestionnaire | Défaut ou remarque |
|---|---|---|---|---|---|
| ALM-001 | Priorité de l'alarme | E | info/avertissement/critique | Les deux | Catalogue d'alarmes |
| ALM-002 | Date/heure apparition | E | date/heure | Raspberry | Journal local |
| ALM-003 | Alarme active | E | booléen | Les deux | Affichage |
| ALM-004 | Acquittement utilisateur | R | action | Écran | Historisé |
| ALM-005 | Diagnostic liaison | E | état | Les deux | Autonomie Arduino |
| ALM-006 | Test des entrées | R | action | Maintenance | Pas de manoeuvre secteur dangereuse |
| ALM-007 | Test des LED | R | action | Maintenance | Borné en courant |
| ALM-008 | Calibration température | R | action | Maintenance | Référence étalonnée |
| ALM-009 | Calibration pression | R | action | Maintenance | Manomètre de référence |
| ALM-010 | Calibration débit | R | action | Maintenance | Volume de référence |
| ALM-011 | Journal maintenance | C | évènements | Raspberry | Local |
| ALM-012 | Export historique | R | action | Raspberry | Fichier |

## Contraintes d'implémentation
1. Les IDs marqués `-x-` se déclinent en `1`, `2` ou `3` selon la famille ; **LED : x = 1,2,3 ; KEG : x = 1,2**.
2. Propriétaire du paramètre, sens de synchronisation USB, plage, précision, persistance et type numérique seront spécifiés dans le contrat de données final.
3. Une mesure manquante vaut `null` et comporte un état explicite.
4. La base des alarmes critiques doit rester fonctionnelle côté Arduino indépendamment du Raspberry Pi.
5. Le mode LED **« produit »** est le comportement par défaut validé ; `mesure` est un choix explicite de l'utilisateur.
6. Les références commerciales restent à vérifier dans la nomenclature avant tout achat.
