body:
  -
    type: text
    body: |
      Pour cet exercice nous allons créer un générateur d'extra-terrestres inspiré d'un des jeux les plus célèbres et influents de l'histoire, l'archétype du _shoot them up_: [Space Invaders](https://fr.wikipedia.org/wiki/Space_Invaders)&thinsp;👾.
      
      Un [Pen de départ](https://codepen.io/smnarnold/pen/YzNQGmM?editors=0010) vous est fourni. Vous n'avez qu'à écrire du JS _(nul besoin de modifier le HTML ou le CSS)_.
      
      Aperçu du résultat:
  -
    type: image
    image: /assets/articles/classes-js-space-invaders.mp4
  -
    type: text
    level: h2
    body: 'Le but de cet exercice est de créer des _invaders_ qui partageront les mêmes caractéristiques de base, mais qui auront de légères variations _(forme et couleur)_ en fonction de l''objet JavaScript qui leur sera&nbsp;passé.'
  -
    type: text
    title: Requis
    level: h2
    body: |
      1. Créez-vous une nouvelle classe JavaScript intitulée _Invader_.
      2. Écoutez le clic sur les boutons. Au clic, créez une nouvelle instance de la classe _Invader_ et passez au constructeur l'objet correspondant dans le array `invadersList`. Par exemple, le premier bouton devrait passer le premier objet, le deuxième bouton, le deuxième objet et ainsi de&nbsp;suite.
      3. Dans votre constructeur, sauvegardez dans une propriété l'objet reçu en paramètre afin de pouvoir y accéder plus&nbsp;tard.
      4. Pigez une couleur parmi les couleurs fournies dans l'objet et sauvegardez-la.
      5. Créez un div et attribuez-lui les classes `.invader` pour lui attribuer les styles communs à tous les invaders, ainsi que la classe `.invader-X` où `X` correspond au type dans l'objet&nbsp;reçu. 
      
      Par exemple:&nbsp;`.invader-1` affichera une image noire avec en transparence le forme de l'invader numéro&nbsp;1.
      <img src="https://ex.smnarnold.com/class-js/space-invaders/1.png" style="display: block; width: 100px; margin: 20px auto;">
      
      6. Ajoutez la couleur sauvegardée comme couleur de fond du div, ainsi l'espace transparent dans l'image prendra la couleur en&nbsp;question.
      7. Faites en sorte d'ajouter la classe `.exploded` aux invaders lorsqu'ils se font cliquer dessus. Ceci déclenchera une animation d'explosion déjà réalisée pour vous en&nbsp;CSS.
  -
    type: text
    title: 'Notes de cours'
    level: h2
    body: |
      - [Classes JavaScript](https://smnarnold.com/cours/javascript/class)
      - [Math](https://smnarnold.com/cours/javascript/math)
      - [ClassList](https://smnarnold.com/cours/javascript/classlist)
      - [Modification du DOM](https://smnarnold.com/cours/javascript/modification-du-dom)
is_hidden: false
title: 'Classe - Space Invaders'
template: page-exercice
color_scheme: auto
preview_color: '#000'
fieldset: page-article
id: c26ec638-f01e-4b6f-bb5e-d9fd8108777a
