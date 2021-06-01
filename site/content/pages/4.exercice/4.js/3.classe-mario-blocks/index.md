body:
  -
    type: text
    body: |
      Pour cet exercice nous allons créer une _"map"_ de blocs basée sur le premier jeu [Super Mario Bros](https://fr.wikipedia.org/wiki/Super_Mario_Bros.) du Nintendo qui popularisa plusieurs principes majeurs du jeux vidéo, tel que le défilement horizontal, les boss et les raccourcis&nbsp;secrets.
      
      Un [Pen de départ](https://codepen.io/smnarnold/pen/oNBwbOJ) vous est fourni. Vous n'avez qu'à écrire du JS _(nul besoin de modifier le HTML ou le&nbsp;CSS)_.
      
      Aperçu du résultat _(plusieurs rafraichissements de page sont visibles dans cet&nbsp;aperçu)_:
  -
    type: image
    image: /assets/articles/classe-js-mario-blocks.mp4
  -
    type: text
    title: Requis
    level: h2
    body: |
      1. Créez une classe JavaScript intitulée _"Block"_. Pour l'instant, n'instancier qu'un seul élément à partir de cette&nbsp;classe.
      2. Lorsque la classe est appelée, pigez un numéro de 0 à 5 et sauvegardez-le dans l'instance de votre nouvel objet. Ce numéro correspond à la texture attribuée à votre bloc _(brique, boite&nbsp;?, pièce de monnaie,&nbsp;etc.)_.
      3. Créez-vous un div et ajoutez-lui les classes _"block"_ et _"noX"_ _(X équivaut au numéro de texture que vous avez pigé précédemment, ex: no3)_. L'apparence du div sera gérée en CSS en fonction de ces&nbsp;classes.
      4. Insérez-le div que vous venez de créer dans l'élément avec la classe&nbsp;_.level_.
      5. Lorsque les étapes précédentes fonctionnent comme désiré _(un bloc devrait être visible)_, créez-vous une boucle de 0 à 100 créant une nouvelle instance de votre classe à chaque&nbsp;itération.
  -
    type: note
    intent: warning
    body: 'La boucle doit vivre à l''extérieur de la classe puisqu''elle instancie plusieurs élément basé sur la classe en&nbsp;question.'
  -
    type: text
    title: 'Notes de cours'
    level: h2
    body: |
      - [Classes JavaScript](https://smnarnold.com/cours/javascript/class)
      - [Math](https://smnarnold.com/cours/javascript/math)
      - [ClassList](https://smnarnold.com/cours/javascript/classlist)
      - [Modification du DOM](https://smnarnold.com/cours/javascript/modification-du-dom)
      - [Boucles](https://smnarnold.com/cours/javascript/boucles)
is_hidden: false
title: 'Classe - Mario Blocks'
template: page-exercice
color_scheme: auto
preview_color: '#000'
fieldset: page-article
id: 886f8461-d5a4-451c-bc5b-41d7c9b2e211
