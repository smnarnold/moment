body:
  -
    type: text
    body: 'Nous allons maintenant créer la zone en charge du contenu de chaque page. Pour ce faire nous aurons recours à la [grille Bootstrap](https://smnarnold.com/cours/bootstrap/grille) afin de créer un conteneur et une rangée qui contiendrons les deux zones importantes de nos&nbsp;pages.'
  -
    type: text
    title: 'Barre latérale'
    body: |
      Chaque page devra avoir une barre latérale. Par défaut, celle-ci ne devra pas être affichée tant que le breakpoint `md` n'est pas&nbsp;atteint. 
      
      Lorsque ce breakpoint est atteint, la barre latérale devrait avoir une largeur équivalente au 1/4 de son conteneur Bootstrap. Pour vous aider à de passer d'un état à l'autre, référez-vous à l'[utilitaire de&nbsp;display](http://smnarnold.com/cours/bootstrap/utilitaires#display).
      
      Éventuellement, cette barre latérale servira à accueillir votre animation 3D. En attendant que celle-ci soit prête, insérez [cette image](https://i.imgur.com/maLPGgu.png) à l'intérieur de la barre latérale afin de la visualiser&nbsp;adéquatement.
  -
    type: note
    intent: warning
    body: 'Utilisez l''[utilitaire Bootstrap](http://smnarnold.com/cours/bootstrap/utilitaires#image-responsive) approprié afin que cette image ne dépasse pas de la barre&nbsp;latérale.'
  -
    type: text
    body: 'Vous avez le choix d''afficher la barre latérale à gauche ou à droite sur votre page. Cependant, cet affichage devra être différent entre les deux pages de votre site. _(Une page devra avoir sa barre latérale à gauche et l''autre à&nbsp;droite)_.'
  -
    type: image
    image: /assets/articles/megazord-sidebar.png
  -
    type: text
    body: 'Pour les équipes de trois, la position de la barre latérale de la page de discographie et de palmarès devra obligatoirement être&nbsp;différente.'
  -
    type: text
    title: 'Contenu principal'
    level: h2
    body: |
      Chaque page aura une zone correspondant au contenu principal de la page. Par défaut, cette zone devra prendre toute la largeur d'un conteneur Bootstrap. Cependant, lorsque le breakpoint `md` est atteint, cette zone devra avoir une largeur équivalente au 3/4 de son conteneur afin de laisser une place à la barre&nbsp;latérale.
      
      Le contenu de cette zone vous sera fourni dans un exercice séparé en fonction de la couleur de développeur vous étant&nbsp;attribuée.
  -
    type: image
    image: /assets/articles/megazord-main-content.png
  -
    type: text
    title: 'Lien à partir du héros'
    body: 'Ajoutez le id `main` au conteneur que vous avez créé dans cet exercice et dans le héros de votre page, ajoutez un lien pointant vers ce id sur la mention _"En savoir plus"_.'
  -
    type: note
    intent: generic
    body: 'Pour que la page défile doucement vers votre conteneur, vous pouvez contrôler le [scroll-behavior](https://smnarnold.com/cours/html/ancre#vers-une-section-de-la-page-courante) de votre&nbsp;page.'
is_hidden: false
title: Main
template: page-exercice
color_scheme: auto
preview_color: '#7356ae'
preview: /assets/previews/megard-main.png
fieldset: page-article
id: bae7ee9d-5169-4b5d-b4c6-de27860b3973
