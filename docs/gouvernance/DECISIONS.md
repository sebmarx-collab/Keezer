# Décisions et arbitrages — V0.4, 6 novembre 2026

## Décisions validées pour le cahier des charges

| ID | Sujet | Statut | Décision |
|---|---|---|---|
| DEC-001 | Congélateur | VALIDÉ FONCTIONNELLEMENT | Congélateur coffre, prix annoncé 100 € |
| DEC-002 | Bières | VALIDÉ | 2 fûts Ecofass de 20 L prêtés par le brasseur ; aucun achat de fûts |
| DEC-003 | Matériel bière | VALIDÉ EN PRINCIPE | Fourniture des équipements de tirage par le brasseur, inventaire exact à faire |
| DEC-004 | Robinets | VALIDÉ | **3 robinets** : bière 1, bière 2, eau plate filtrée/réfrigérée |
| DEC-005 | Eau | VALIDÉ | Eau plate, filtrée, réfrigérée, circuit dédié et débitmètre |
| DEC-006 | Stocks | VALIDÉ | 2 balances indépendantes, calibration vide/plein, affichage litres et % |
| DEC-007 | Pression | VALIDÉ | Détendeurs CO₂ et eau manuels, pas d'asservissement |
| DEC-008 | CO₂ | VALIDÉ EN PRINCIPE | Mesure basse pression, capteur plage 0–5 bar souhaitée |
| DEC-009 | Architecture | VALIDÉ FONCTIONNELLEMENT | **Un Arduino et un Raspberry Pi**, liaison série proposée ; références exactes à vérifier |
| DEC-010 | Température | VALIDÉ FONCTIONNELLEMENT | Consigne réglable sur écran tactile ; régulation autonome Arduino |
| DEC-011 | Commande puissance | VALIDÉ EN PRINCIPE | Relais/contacteur moteur 230 V dimensionné, protections indépendantes et maintien protections d'origine |
| DEC-012 | Indicateurs LED | VALIDÉ | **3 LED RGB**, une par robinet |
| DEC-013 | LED défaut | VALIDÉ | **Couleur fixe selon type de produit**, paramétrable depuis écran |
| DEC-014 | LED option | VALIDÉ | Possibilité de choisir dans les paramètres **une mesure alternative** par LED, sans activation automatique |
| DEC-015 | Interface | VALIDÉ FONCTIONNELLEMENT | Écran tactile Raspberry, supervision, calibration, réglages, historiques et alarmes |
| DEC-016 | Développement | VALIDÉ | Sur demande dans ChatGPT ; aucune API payante ni agents hebdomadaires |
| DEC-017 | Sauvegardes | VALIDÉ | GitHub + Google Drive **uniquement aux jalons consolidés**, sur demande |

## Décisions techniques restant à arbitrer

- Modèle, puissance, compresseur, dimensions et protections du congélateur.
- Carte Arduino et Raspberry exacts, écran, alimentation et interface USB ; bilan d'entrées/sorties.
- Modèles des cellules et balances, capteurs de température, CO₂ et eau ; interface de conditionnement.
- Contacteur/relais et sécurité thermique indépendante.
- Filtre eau, tuyaux, serpentin, méthode de refroidissement, robinets/raccords réels fournis.
- Seuils d'alarme, horaires des historiques et protocoles de test.
- Budget plafond et nomenclature vérifiée avant achat.

Une décision fonctionnelle validée ne constitue pas une approbation de montage secteur, fluide ou mise en service.

Voir `docs/exigences/CAHIER_DES_CHARGES.md` et `docs/exigences/REGISTRE_PARAMETRES_V0_4.md`.
