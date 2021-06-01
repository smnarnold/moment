body:
  -
    type: text
    body: |
      Pour cette section, la [librairie Swiper](https://swiperjs.com/swiper-api) sera utilisée afin de créer un carrousel permettant d'afficher des images promotionnelles du&nbsp;groupe.
      
      Aperçu du résultat final:
  -
    type: image
    image: /assets/articles/megazord-carrousel-promo.mp4
  -
    type: text
    title: Requis
    level: h2
    body: |
      - Commencez par créer une `<section>` dans la zone du contenu principal de votre page. Cette section peut être avant ou après celle des cartes des membres. Ce choix est à votre discrétion.
      - Ajoutez le titre de la section: _"Images promotionnelles"_. Cet élément devra être seul sur une ligne.
      - Insérez votre carrousel swiper sous le titre.
      - Le carrousel doit avoir une direction&nbsp;horizontale.
      - Le carrousel ne doit pas tourner à l'infini. Il doit être possible d'atteindre un début et une&nbsp;fin.
      - Faites en sorte que chaque slide aille un ratio&nbsp;16/9.
      - Ajoutez une image par _slide_. Ces images ne devront pas être une pochette d'album ou le groupe entrain de performer, mais plutôt des images&nbsp;promotionnelles.
      - Faites en sorte que chaque image couvre entièrement sa _slide_ grâce à&nbsp;[object-fit](https://smnarnold.com/cours/css/object-fit).
      - Faites en sorte qu'une navigation avec des points soit présente dans le bas du carrousel. 
      - Inspectez les points afin de découvrir les classes que Swiper leur attribue et servez-vous-en afin de modifier leur apparence. Les points réguliers devront être opaques _(🚫 semi-transparents)_ et devront avoir une couleur de fond autre que&nbsp;noir. 
      - Utilisez les configurations de Swiper afin de modifier la classe attribuée par défaut au point&nbsp;actif.
      - Utilisez la nouvelle classe du point actif pour modifier sa couleur. Elle devra être différente du bleu par&nbsp;défaut.
  -
    type: note
    intent: generic
    body: 'Vous pouvez changer la taille des points, leur forme, ajouter des images d''arrière-plan, etc. N''hésitez pas à être&nbsp;créatif.'
is_hidden: false
title: 'Carrousel - Promo'
template: page-exercice
color_scheme: auto
preview_color: '#56ae8c'
preview: /assets/previews/carrousel.png
fieldset: page-article
id: c10acff3-eddc-4b0b-9bfe-aed17c0c0ccf
