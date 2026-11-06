# Cahier des charges consolidé — Keezer connecté V0.4

**Date de consolidation : 6 novembre 2026**  
**Statut : exigences fonctionnelles consolidées à la demande du propriétaire ; choix de matériels et validation de sécurité restant ouverts.**  
**Source de référence : échanges du projet + cahier des charges V0.1.**

## 1. Objectif et périmètre

Réaliser un keezer connecté **clé en main**, utilisable localement, à partir d'un congélateur coffre prévu pour **100 €**, comprenant :
- **2 robinets de bière**, chacun raccordé à un fût **Ecofass 20 L** prêté par le brasseur ;
- **1 robinet d'eau plate filtrée et réfrigérée**, avec circuit indépendant de l'installation bière ;
- **3 indicateurs LED RGB indépendants** : un au-dessus de chacun des trois robinets ;
- un **Raspberry Pi** avec **écran tactile** pour la supervision et les réglages ;
- un **Arduino** pour l'acquisition de capteurs, les LED et la **régulation autonome du froid** ;
- la température, les stocks, la pression basse CO₂ et le filtre d'eau supervisés sur l'écran.

Le propriétaire est électricien, mais le système doit rester facile à câbler, exploiter et maintenir, avec plans, schémas, nomenclature exacte, logiciel et procédures de vérification.

**Sans clé API OpenAI payante ni agents IA autonomes planifiés.** Développement demandé à ChatGPT lorsque nécessaire. **Sauvegardes GitHub et Drive seulement à la consolidation des étapes**, sur demande ; pas de synchronisation temporelle obligatoire.

## 2. Matériel existant, fourni et à acquérir

### Confirmé par le propriétaire
- Congélateur coffre : coût annoncé **100 €** ; modèle, puissance et dimensions intérieures **à relever**.
- Deux fûts **Ecofass 20 L** : prêtés par un brasseur ; **aucun achat de fûts**.
- Matériel de tirage bière **fourni par le brasseur** : détails et quantités à inventorier avant toute commande.
- **3 robinets** : bière 1, bière 2, eau plate réfrigérée.
- **3 LED RGB**, chacune au-dessus d'un robinet.
- Pression de soutirage CO₂ et pression d'eau **réglées manuellement**, non pilotées par le logiciel.

### Architecture fonctionnelle arrêtée
- **Une carte Arduino + un Raspberry Pi** seulement comme unités programmables de commande et de supervision.
- **Raspberry Pi** : interface tactile, noms des boissons, paramètres, historisation et messages d'alarme.
- **Arduino** : balances, température, débit d'eau, pression CO₂ basse, pilotage des LED, sortie de demande de froid ; **régulation locale maintenue en cas de perte du Raspberry Pi**.
- **Liaison USB série** entre les deux cartes proposée. Aucun cloud ni Internet nécessaire pour l'exploitation.
- Compresseur du congélateur commandé par une **interface relais/contacteur adaptée au moteur**, avec protections indépendantes. Le choix exact et le schéma 230 V ne sont pas encore validés.

### Références candidates, non achetées et non validées en montage
- Raspberry Pi 4 Model B (4 Go) + Raspberry Pi Touch Display 2 (7 pouces).
- Arduino UNO R4 Minima : vérifier **nombre de broches, entrées, temporisations et mémoire** avant validation.
- 2 cellules de charge de capacité nominale à confirmer (option 50 kg) + 2 amplificateurs HX711 et plateaux.
- Sonde(s) de température DS18B20 pour mesure ; prévoir une protection indépendante du froid.
- 3 modules RGB adressables/NeoPixel + alimentation et adaptation de niveau électrique si nécessaire.
- 1 capteur de pression basse CO₂ **0–5 bar souhaités**, compatible fluide et surpression ; interface électrique adaptée à Arduino.
- 1 débitmètre compatible eau potable, débit, pression et sorties électriques ; filtre Everpure 4C + tête compatible **proposés**.
- Serpentin inox alimentaire/réservoir bain froid **proposé** : conception définitive non choisie.
- Interface de commande isolée pour relais/contacteur compresseur, coffret et protections.

**Aucune référence commerciale, aucune cote et aucun coût autre que ceux confirmés ne doivent être considérés définitivement figés.**

## 3. Distribution bière : 2 fûts Ecofass 20 L

### Mesures, calculs et écran
Chaque fût possède sa **balance indépendante**. Les informations par fût sont : nom du produit, brasserie, style, capacité nominale, masse brute, tarage, références de masse fût vide et plein, coefficient d'étalonnage, masse et **litres estimés restants**, pourcentage, date de mise en place, seuils d'alerte, état de capteur/calibration.

- Calibration depuis l'écran : zéro du plateau puis **références vide et plein** ; paramètres indépendants pour chaque fût et persistants.
- Calcul des litres à partir de masses réelles ; valeur dépendant de la masse des accessoires pesés et de la densité (paramétrable ou estimation signalée).
- Détection de charge hors plage, dérive/instabilité, masse incohérente et capteur débranché.
- Tuyaux souples et supports de fûts conçus pour ne pas perturber la pesée ; vérification à charge réelle.
- Les deux robinets de bière et leurs coupleurs sont **à inventorier auprès du brasseur** ; type de tête Ecofass à confirmer avant d'acheter des raccords.

## 4. Eau plate filtrée et réfrigérée : troisième robinet

Chemin fonctionnel : **arrivée d'eau potable → vanne/protection de réseau appropriées → filtration → débitmètre → échangeur/serpentin refroidi → robinet eau**. L'ordre de certains sous-ensembles est à valider avec les préconisations fabricants, l'hygiène et les raccords.

- Mesure du **volume écoulé** par impulsions ; débit instantané, cumul depuis remplacement, compteur total.
- Capacité nominale du filtre réglable, pourcentage théorique utilisé, volume restant estimé, date de changement et échéance calendaire éventuelle.
- Remise à zéro du compteur avec confirmation et historisation du remplacement.
- Eau **plate**, refroidissement dans le keezer ; température servie et débit soutenu à vérifier par essais.
- Les raccords, matériaux, protection du réseau, nettoyage, purge, stagnation d'eau et étanchéité doivent respecter l'usage eau potable.
- Débitmètre : prévoir que « absence d'impulsions » n'est pas toujours une panne ; diagnostiquer avec prudence.

## 5. Régulation du congélateur

### Architecture
- Consigne de température **réglable depuis l'écran du Raspberry Pi**, transmise à l'Arduino et enregistrée de façon persistante côté Arduino.
- **Arduino autonome** : acquisition de la sonde, hystérésis, temporisation anti-court-cycle, état de sortie relais, alarmes, réaction à perte de capteur.
- Valeurs de démarrage **proposées**, et non contractuelles : consigne 3 °C, hystérésis 1 °C, démarrage à 4 °C et arrêt à 3 °C ; temporisation anti-redémarrage proposée de 5 minutes **à confirmer** selon le compresseur.
- Écran affiche température réelle, consigne, demande de froid, état connu du contacteur si retour câblé, durées de marche, cycles, températures extrêmes, défauts et historique.
- **Perte du Raspberry Pi** : la régulation Arduino doit continuer avec dernière consigne sûre enregistrée.
- **Défaut sonde Arduino** : interdiction de demande de froid, alarme ; au retour secteur, temporisation de redémarrage.
- **Protections indépendantes indispensables** contre gel/sur-refroidissement, contacteur collé, surcharge, défauts d'isolation et fonctionnement dangereux. À dimensionner selon caractéristiques du congélateur et les vérifications électriques.

### Partie puissance
L'Arduino n'est **jamais connecté directement au 230 V**. Il commande un étage isolé vers un relais/contacteur **dimensionné pour le courant de démarrage d'un compresseur**, avec maintien des protections d'origine du congélateur et montage dans coffret approprié. **Aucun choix de contacteur ni schéma d'exécution validé sans plaque du congélateur et relevé de puissance.**

## 6. CO₂ : mesure sans actionnement

- Pression **basse** en aval du détendeur mesurée en bar, plage de capteur souhaitée **0–5 bar**.
- Affichage valeur, seuils réglables, alarmes basse/haute, valeurs min/max et défaut de capteur.
- **Aucune régulation automatique de pression**, ni vanne commandée.
- Capteur jamais raccordé à la haute pression bouteille ; matériaux, compatibilité CO₂, étanchéité et pression maximale autorisée du fût à confirmer avec le matériel exact.

## 7. LED RGB : 3 robinets

**Décision validée : une LED RGB indépendante par robinet, y compris le robinet d'eau.**

### Mode par défaut obligatoire : IDENTIFICATION DU PRODUIT
- Chaque LED affiche une **couleur fixe configurée depuis l'écran**, uniquement pour **identifier le produit distribué**.
- Robinet 1 = bière 1, robinet 2 = bière 2, robinet 3 = eau plate filtrée/réfrigérée.
- Couleur, intensité et marche/arrêt indépendants ; mémorisation après redémarrage.
- Les couleurs d'exemple ne sont pas imposées : elles sont choisies par l'utilisateur.

### Modes facultatifs, sur activation volontaire dans les paramètres
Pour **chaque LED séparément**, l'utilisateur peut remplacer le mode « produit » par un mode basé sur **une mesure existante** et ses seuils configurables :
- niveau du fût 1 ou 2 (%, L) ;
- taux d'utilisation du filtre à eau (%) ;
- température mesurée (°C) ;
- pression CO₂ mesurée (bar), si capteur disponible ;
- autres mesures intégrées plus tard, après validation de leur sens.
La source, les seuils, couleurs associées et comportement si mesure absente doivent être sélectionnables, bornés et explicitement décrits. Aucun changement automatique de mode sans décision de l'utilisateur. En cas de donnée indisponible, éviter tout signal visuel trompeur ; indiquer l'erreur sur l'écran.

## 8. Écran tactile / ergonomie

Écrans : **Accueil**, **Fût 1**, **Fût 2**, **Température**, **Pression CO₂**, **Eau/Filtre**, **3 LED**, **Historique**, **Alarmes**, **Paramètres**, **Calibration** et **Maintenance**.

Les paramètres utilisateur doivent couvrir : noms et identités des produits, références de calibration, consigne frigorifique, hystérésis autorisée, seuils d'alerte, filtre eau, coefficients capteurs, LED, luminosité et veille écran, unités, date/heure, export/restauration et versions logicielles.

Les paramètres dangereux (commande compresseur, protection, calibrations critiques) seront réservés au menu technique, avec confirmations et limites logicielles.

## 9. Alarmes, diagnostic, historisation

- Alertes température haute/basse, sonde défectueuse, longue durée compresseur, cycles anormaux, perte de communication, défaut de sortie/retour contacteur si disponible.
- Capteurs de pesée indisponibles, tare/calibration incorrectes, stocks faibles/vides.
- Pression CO₂ hors seuil ou capteur indisponible ; filtre eau proche échéance/dépassé ; anomalie débitmètre détectable.
- Journal horodaté, acquittement, gravité (info/avertissement/critique), état actuel et traces de défauts.
- Historique local de température, consommations estimées, pression, eau, cycles compresseur et maintenance.
- Affichage de **« indisponible »** pour une mesure absente, jamais remplacement silencieux par zéro ou donnée de simulation.
- Perte du Raspberry Pi ou de l'USB : Arduino conserve fonctions critiques et consigne ; au rétablissement, synchronisation contrôlée.

## 10. Paramètres et propriété des données

- **Mesurés (M)** : 2 masses, température(s), pression CO₂, impulsions/débit eau, retour d'état facultatif.
- **Calculés (C)** : niveaux fûts, litres, %, cumul consommation, filtre restant, seuils dérivés, durées et historiques.
- **Réglables (R)** : consigne, hystérésis autorisée, calibres/calibrations, noms produits, modes et couleurs LED, alertes, filtre et affichage.
- **États (E)** : demande froid, relais, capteur, défaut, liaison, version, stockage, calibration.
- **Options (O)** : sonde eau servie, surveillance fuite, porte ouverte, notification téléphone, compteur bière direct.

Un **registre des paramètres** est maintenu séparément dans `docs/exigences/REGISTRE_PARAMETRES_V0_4.md`, à enrichir jusqu'au repérage précis des E/S et du protocole USB.

## 11. Livrables attendus pour une réalisation clé en main

1. Architecture de câblage et schémas électriques basse tension/puissance avec protections.
2. Liste de matériel avec fabricant, référence, quantité, disponibilité, prix, compatibilité et fournisseur ; exclusion des éléments fournis par le brasseur.
3. Implantation mécanique avec dimensions des fûts, pesées, trois robinets, serpentin et coffrets.
4. Programme Arduino documenté ; communication série avec Raspberry ; gestion des erreurs et mémoire persistante.
5. Interface Raspberry Pi tactile entièrement exploitable, démarre au boot, sans Internet.
6. Calibration, procédures de tests logiciels, tests d'intégration et documentation de maintenance.
7. Dossier final de validation, relevés d'essais électriques, pression et hygiène.
8. Sauvegardes GitHub + Google Drive **lors des jalons consolidés**, sur demande.

## 12. Points ouverts avant la nomenclature définitive

- Modèle et **plaque signalétique du congélateur**, dimensions libres, protections existantes et courant de démarrage.
- Inventaire des pièces **effectivement fournies par le brasseur** : robinets, coupleurs, détendeur, CO₂, tuyaux et raccords.
- Dimensions réelles et masse des Ecofass 20 L avec coupleur ; montage des balances sans efforts parasites.
- Références définitives du Raspberry Pi, écran et Arduino (capacités E/S suffisantes), alimentation, coffret et répartition des signaux.
- Sondes de température et sécurité indépendante contre sur-refroidissement.
- Capteur 0–5 bar compatible CO₂ et signal Arduino, pression de service des fûts.
- Filtre à eau, débitmètre, raccords potables, solution de refroidissement de l'eau, performances et hygiène.
- Modèles et dimensions des LED et leur intégration sur les trois robinets.
- Budget plafond et planning d'achat après validation des références.

## 13. Décisions et sauvegarde

**Validé fonctionnellement :** 3 robinets (2 bières, 1 eau), 2 Ecofass 20 L prêtés, matériel de tirage fourni, eau plate filtrée et réfrigérée, 3 LED RGB affichant le type de produit par défaut, choix facultatif d'une autre mesure depuis les réglages, Raspberry Pi + Arduino, consigne thermique sur écran, réglage manuel des pressions, suivi par pesée et débitmètre, sauvegarde sur demande au jalon consolidé.

**À valider techniquement :** choix exact des cartes, des capteurs et relais/contacteurs, implantation, gamme de température, seuils, performances, raccords et budget.

**Version V0.4 : sauvegarde de cadrage, pas attestation de conformité ni notice de câblage définitive.**
