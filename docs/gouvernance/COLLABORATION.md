# Règles de collaboration des agents

## Cycle d'une mission
1. A0 rédige une issue avec objectif, dépendances, fichiers concernés et critère d'acceptation.
2. Agent de spécialité propose une solution, travaille sur une branche dédiée et documente hypothèses/tests.
3. A6 vérifie les aspects sécurité/qualité ; A2 et A3 relisent ensemble tout contrat partagé.
4. A0 vérifie cohérence des décisions, budget et dépendances.
5. Le propriétaire valide achats, choix structurants et fusion vers `main`.

## Nommage
Issues : `[A1][J1] Comparatif architectures électriques`.
Branches : `agent/a1-comparatif-architecture`.
Commits : `docs(a1): comparer deux schémas blocs`.
Décisions : `DEC-XXX` dans `DECISIONS.md`.
Exigences : `EX-XX` et renvoi dans tests `TEST-XX`.

## Conflits
Ne pas écraser les fichiers des autres : ouvrir discussion dans l'issue et demander arbitrage à A0. Toute révision d'exigence confirmée requiert accord humain.

## Accès et sécurité
Dépôt public : aucun secret, identifiant, clé, donnée personnelle ni information de réseau local. Pas de flash ou commande d'équipement réel sans intervention humaine contrôlée. Le stockage Google Drive du propriétaire contient les sauvegardes documentaires ; GitHub reste la source du code.
