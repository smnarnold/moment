body:
  -
    type: text
    body: |
      Pour cette partie, la [librairie Swiper](https://swiperjs.com/swiper-api) sera utilisée afin de créer un carrousel permettant d'afficher les différents albums du groupe dans le héros de votre&nbsp;page.
      
      Aperçu du résultat final:
  -
    type: image
    image: /assets/articles/megazord-carrousel-albums.mp4
  -
    type: text
    title: Requis
    level: h2
    body: |
      - Créez ou récupérer la branche GitHub intitulée `Carrousel` _(tout dépendant si un membre de l'équipe l'a déjà créée ou non)_. Cette branche contiendra tous les carrousels de votre&nbsp;équipe.
      - Retirez l'élément `<picture>` de votre&nbsp;héro.
      - Insérez à sa place un carrousel Swiper. Faites en sorte que ce carrousel prenne toute la largeur et hauteur du héros, qu'il soit affiché derrière votre dégradé de couleur et votre contenu&nbsp;texte.
      - Dans chacune des _slides_ du carrousel, insérez une image d'un album. Cette image doit afficher de façon identique à l'ancienne. C'est à dire utiliser [object-fit](https://smnarnold.com/cours/css/object-fit) afin d'être entièrement visible et d'aucune façon tronqué.
      - Vous devez en ajouter minimalement quatre&nbsp;albums.
  -
    type: note
    intent: generic
    body: 'N''hésitez pas à dépasser le nombre minimal. Plus il y aura d''albums, plus votre héros sera riche&nbsp;visuellement.'
  -
    type: text
    title: Paramètres
    level: h2
    body: |
      - Puisque votre carrousel se trouve derrière d'autres éléments _(dégradé et textes)_, il est impossible d'y accéder afin de changer manuellement la _slide_ affichée. Vous devez donc faire en sorte que votre carrousel change de _slide_ automatiquement à toute les 2&nbsp;secondes.
      - Votre carrousel doit tourner en boucle à&nbsp;l'infini.
      - La direction de votre carrousel doit être&nbsp;verticale.
      - Vous devez choisir un effet de transition de _slides_&nbsp;parmi: 
      	- `fade` 
          - `cube`
          - `coverflow`
          - `flip`
is_hidden: false
title: 'Carrousel - Albums'
template: page-exercice
color_scheme: auto
preview_color: '#56ae8c'
preview: /assets/previews/carrousel.png
fieldset: page-article
id: 75d2eb34-e638-4d80-96ff-7c5fe9990386
