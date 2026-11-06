# Contexte de référence — Keezer connecté V0.4

**Cahier des charges consolidé le 6 novembre 2026.**

Le projet est un keezer avec **3 robinets** : deux pour de la bière issue de **2 fûts Ecofass 20 L prêtés**, et un pour l'**eau plate filtrée et réfrigérée**.

Le congélateur coffre est annoncé à **100 €** et le matériel de tirage de bière est fourni par le brasseur, sous réserve d'inventaire. Les **2 balances** servent au calcul des litres restants après calibration vide/plein. Le circuit d'eau comprend un débitmètre pour estimer l'utilisation du filtre. La pression CO₂ est **mesurée uniquement sur circuit basse pression** (capteur 0–5 bar souhaité) et les pressions de service restent réglées manuellement.

L'architecture choisie comme orientation : **un Raspberry Pi avec écran tactile et un Arduino**. Le Raspberry héberge l'interface, les réglages et les historiques ; l'Arduino acquiert les mesures, commande les **3 LED RGB**, régule le froid de manière autonome avec une demande de commande vers un relais/contacteur approprié.

**Les LED servent par défaut à identifier le type de produit par une couleur fixe choisie sur l'écran**. L'utilisateur peut, dans les paramètres, affecter une mesure alternative à chacune de ces LED. Ce mode reste facultatif et ne s'active pas de lui-même.

Le propriétaire est électricien et souhaite un système complet et documenté. Le travail des agents A0–A6 est déclenché uniquement **à la demande**, **sans API payante**. Les sauvegardes dans GitHub et le dossier Google Drive sont réalisées **lorsqu'une étape est consolidée**, et non selon une fréquence automatique.

**Informations encore absentes :** modèle et plaque du congélateur, inventaire exact du matériel fourni, implantation mécanique, référence des cartes/capteurs, sécurité 230 V, nomenclature définitive, budget arrêté et essais.

Les références commerciales antérieurement évoquées ne valent pas validation d'achat.

Voir `docs/exigences/CAHIER_DES_CHARGES.md`, `docs/gouvernance/DECISIONS.md` et `docs/exigences/REGISTRE_PARAMETRES_V0_4.md`.
