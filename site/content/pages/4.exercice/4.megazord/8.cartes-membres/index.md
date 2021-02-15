body:
  -
    type: text
    body: |
      Pour cette section, la [composante de carte de Bootstrap](https://getbootstrap.com/docs/5.0/components/card/) sera utilisée afin de présenter les membres  du&nbsp;groupe.
      
      Aperçu du résultat&nbsp;final:
  -
    type: image
    image: /assets/articles/megazord-membres-apercu.jpg
  -
    type: text
    title: Requis
    level: h2
    body: |
      - Commencez par créer une `<section>` dans la zone du contenu principal de votre&nbsp;page.
      - Insérez dans cette section une nouvelle rangée Bootstrap vous permettant de gérer le positionnement des éléments qui en feront&nbsp;partie.
  -
    type: note
    intent: warning
    body: 'Une rangée définit toujours un nouveau contexte de 12 colonnes, peu importe son&nbsp;parent.'
  -
    type: text
    body: |
      - Ajoutez le titre de la section: _"Membres du groupe"_. Cet élément devra être seul sur une&nbsp;ligne.
      - Faites en sorte qu'une seule carte Bootstrap puisse être affichée par ligne par&nbsp;défaut.
  -
    type: text
    title: Carte
    level: h3
    body: |
      Pour l'instant, une seule carte sera créée. Celle-ci servira de gabarit aux autres plus&nbsp;tard.
      
      - Ajoutez dans le CSS un espace vertical de 10px en haut et en bas de la carte afin d'éviter qu'elles se&nbsp;touchent.
      - Insérez une image du premier musicien dans la carte. Cette image doit prendre toute la largeur de la&nbsp;carte.
      - Dans le corps de la carte, ajouter le nom du musicien, son rôle au sein du groupe et une brève&nbsp;description.
      - Dans le pied de la carte, ajoutez un lien _"En savoir plus"_ ayant l'apparence d'un bouton vers un site externe donnant plus d'information sur le musicien. Attention, ce bouton doit prendre toute la largeur de la&nbsp;carte.
      
      Aperçu d'une&nbsp;carte:
  -
    type: image
    image: /assets/articles/megazrd-membre-mobile.jpg
  -
    type: text
    title: 'Mise en page'
    level: h3
    body: |
      - Déclinez toutes les cartes des membres à partir de la première carte que vous avez&nbsp;réalisée.
      - Faites en sorte qu'à partir du breakpoint `sm` deux cartes des membres du groupe affichent par&nbsp;ligne.
      
      Aperçu des cartes à partir de&nbsp;`sm`:
  -
    type: image
    image: /assets/articles/megazrd-membres-sm.jpg
  -
    type: note
    intent: generic
    body: 'N''hésitez pas à ajouter des couleurs de texte, de fond, etc. à vos cartes afin de les&nbsp;personnaliser.'
is_hidden: false
title: 'Cartes - Membres'
template: page-exercice
color_scheme: auto
preview_color: '#7aedff'
preview_abbr: 👨‍🎤
fieldset: page-article
id: 51573897-bde5-49cb-afd2-635c448dc799
