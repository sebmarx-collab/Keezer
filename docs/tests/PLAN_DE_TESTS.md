# Plan de tests initial

| ID | Essai | Critère attendu | Niveau |
|---|---|---|---|
| TEST-01 | Absence voie de pesée | Masse et volume indisponibles, sans faux zéro | Simulation |
| TEST-02 | Fût non calibré | Interface affiche « calibrage requis » | Simulation |
| TEST-03 | Références vide/plein inversées | Calibration refusée, données conservées | Simulation |
| TEST-04 | Pression absente/hors plage | Indication défaut, aucune action sur détendeur | Simulation |
| TEST-05 | Débitmètre impulsions irrégulières | Consommation totale gérée sans dépassement arbitraire | Simulation |
| TEST-06 | Coupure/reprise | Paramètres restaurés sans action dangereuse | Simulation puis banc |
| TEST-07 | Température hors plage | Alarme correcte ; sorties de commande non actives en V0 | Simulation |
| TEST-08 | Perte interface/liaison | Message d'erreur et récupération | Simulation |
| TEST-09 | Mauvaise valeur RGB LED | Valeurs contrôlées et aucune surcharge de puissance | Banc futur |
| TEST-10 | Eau/CO₂/froid | Vérifications pression, fuite, sanitaire, électricité | Après validation physique |

**Statut actuel : aucun de ces essais n'est réputé exécuté.** A6 ajoute procédures, instruments, seuils fondés sur pièces techniques et résultats datés.
