body:
  -
    type: text
    body: |
      Pour cette section, la [composante de carte de Bootstrap](https://getbootstrap.com/docs/5.0/components/card/) sera utilisée afin de présenter les membres du&nbsp;groupe.
      
      Aperçu du résultat&nbsp;final:
  -
    type: image
    image: /assets/articles/megazord-video-clip-apercu.jpg
  -
    type: text
    body: |
      - Commencez par créer une `<section>` dans la zone du contenu principal de votre&nbsp;page.
      - Insérez dans cette section une nouvelle rangée Bootstrap vous permettant de gérer le positionnement des éléments qui en feront&nbsp;partie.
    title: Requis
    level: h2
  -
    type: note
    intent: warning
    body: 'Une rangée définit toujours un nouveau contexte de 12 colonnes, peu importe son&nbsp;parent.'
  -
    type: text
    body: |
      - Ajoutez le titre de la section: _"Vidéo-clips"_. Cet élément devra être seul sur une&nbsp;ligne.
      - Faites en sorte qu'une seule carte Bootstrap puisse être affichée par&nbsp;ligne.
  -
    type: text
    title: Carte
    level: h3
    body: |
      Pour l'instant, une seule carte sera créée. Celle-ci servira de gabarit aux autres plus tard.
      
      - La carte doit être entièrement cliquable et pointer vers la page Youtube du vidéo-clip en question. Donc choisissez la bonne&nbsp;balise.
  -
    type: note
    intent: warning
    body: 'Malgré que toute la carte soit cliquable, le texte à l''intérieur ne doit pas être bleu et ne doit pas avoir de ligne en&nbsp;dessous.'
  -
    type: text
    body: |
      - Ajoutez dans le CSS un espace vertical de 10px en haut et en bas de la carte afin d'éviter qu'elles se&nbsp;touchent.
      - Puisque la carte à un affichage vertical et horizontal, il est nécessaire de définir une nouvelle rangée avec deux colonnes à l'intérieur de celle-ci. Par défaut la carte doit afficher en mode vertical, donc chaque colonne doit prendre toute la largeur de la&nbsp;carte.
      - Insérez une image en format carré représentant un vidéo-clip dans la première colonne. Cette image doit prendre toute la largeur de sa&nbsp;colonne.
      - Dans l'entête de la carte, ajoutez le nom du&nbsp;vidéo-clip.
      - Définissez un [list-group](https://getbootstrap.com/docs/5.0/components/card/#list-groups) contenant les informations suivantes:
      	- Album
          - Année de&nbsp;parution
          - Durée
      - Au survole de la carte, celle-ci doit grossir de 2% en l'espace de 0.3s afin de démontrer qu'elle est&nbsp;cliquable.
      
      Aperçu d'une carte en&nbsp;`xs`:
  -
    type: image
    image: /assets/articles/megazord-clip-mobile-(1).jpg
  -
    type: text
    body: |
      - À partir du breakpoint `sm`, la carte doit affichée en format horizontal. La colonne de l'image doit avoir une largeur équivalente à 4 colonnes et celle du contenu de 8&nbsp;colonnes.
      
      Aperçu d'une carte en&nbsp;`sm`:
  -
    type: image
    image: /assets/articles/megazord-clip-desktop.jpg
  -
    type: text
    body: 'Recopiez la carte de base à six reprises afin de créer les cartes des autres vidéo-clips et mettez à jour leurs&nbsp;informations.'
    title: 'Mise en page'
    level: h3
  -
    type: note
    intent: generic
    body: 'N''hésitez pas à ajouter des couleurs de texte, de fond, etc. à vos cartes afin de les&nbsp;personnaliser.'
is_hidden: false
title: 'Cartes - Vidéo-clips'
template: page-exercice
color_scheme: auto
preview_color: '#000'
preview: /assets/previews/megazord-video-clip.jpg
fieldset: page-article
id: 03484f17-6b77-4165-8201-47cd3e5943e7
