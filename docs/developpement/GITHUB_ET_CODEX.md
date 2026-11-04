# Travail avec GitHub et Codex

## Choix
- `main` contient la version approuvée.
- Une mission = issue KZR-XXX et branche `agent/aN-description`.
- Préférer des pull requests avec portée réduite et tests documentés.
- Les sous-agents nécessitent une orchestration effective dans l'environnement Codex/Work ; ce dépôt seul ne lance aucun processus autonome.

## Pour lancer un agent
1. Ouvrir la tâche/issue et ses critères d'acceptation.
2. Transmettre `AGENTS.md`, la fiche `agents/A*.md` et les documents communs.
3. Demander un livrable vérifiable dans une branche dédiée.
4. Organiser la revue technique, puis l'approbation du propriétaire avant fusion.

## Conventions
Ne jamais committer de secrets ou configuration Wi-Fi réelle.
Aucune livraison firmware pilotant du secteur ni de la pression sans validation sécurité.
Les builds et tests non exécutés doivent porter l'étiquette **NON TESTÉ**.
