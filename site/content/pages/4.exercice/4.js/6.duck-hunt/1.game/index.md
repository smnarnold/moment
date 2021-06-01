body:
  -
    type: text
    body: |
      Pour cet exercice nous allons recréer les commandes de base du célèbre jeu de tir [Duck Hunt](https://fr.wikipedia.org/wiki/Duck_Hunt).
      
      Un [Pen de base](https://codepen.io/smnarnold/pen/zYNJpNK) contenant GSAP ainsi que la majorité des éléments HTML et CSS vous est fourni afin de vous laissez vous concentrer sur le&nbsp;JavaScript.
      
      Aperçu du résultat:
  -
    type: image
    image: /assets/articles/duck-hunt-game.png
  -
    type: text
    title: Requis
    level: h2
    body: |
      1. Commencez par vous créer une classe JavaScript intitulée&nbsp;`Game`. 
      2. Créez-vous ensuite une variable nommée `game` et stockez-y une nouvelle instance de votre&nbsp;classe.
  -
    type: note
    intent: warning
    body: 'Attention à la casse. La classe doit avoir un `G` majuscule et la variable un `g`&nbsp;minuscule.'
  -
    type: text
    body: |
      3. Créez-vous différentes propriétés dans le constructeur de votre&nbsp;classe:
      	- `round` et `score`: ayant tous deux la valeur initiale&nbsp;`0`.
          - Ainsi que des propriétés permettant de faire référence aux éléments HTML ayant les classes `.dog`, `.round-value` et&nbsp;`.score-value`.
      4. Créez-vous une méthode intitulée `newRound`. Dans cette méthode, augmentez la valeur de la propriété `round` de `1` et remplacer le texte dans l'élément `.round-value` par la nouvelle valeur de la propriété&nbsp;`round`.
  -
    type: note
    intent: generic
    body: 'Si votre méthode est bien implémentée, vous devriez être en mesure de l''appeler dans la console CodePen via la commande `game.newRound()`. Le tout devrait mettre à jour le nombre de rondes affichées dans le&nbsp;jeu.'
  -
    type: text
    body: '5. Créez-vous une méthode intitulée `updateScore`. Dans cette méthode, augmentez la valeur de la propriété `score` de `100` et remplacer le texte dans l''élément `.score-value` par la nouvelle valeur de&nbsp;`score`.'
  -
    type: note
    intent: generic
    body: 'Si votre méthode est bien implémentée, vous devriez être en mesure de l''appeler dans la console CodePen via la commande `game.updateScore()`. Le tout devrait mettre à jour le pointage affiché dans le&nbsp;jeu.'
  -
    type: text
    body: '6. Créez-vous une nouvelle méthode intitulée `success`. À l''intérieur de celle-ci, créez-vous une animation GSAP utilisant une timeline afin d''animer le chien&thinsp;🐕. Ce dernier a été déplacé vers le bas d''une hauteur équivalente à lui-même afin de le cacher derrière les herbes. Faite le remonter en une demi-seconde à sa position normale sur les Y. Attendez 1 seconde complète et faite le redescendre à sa position initiale afin de le cacher à nouveau. Ceci devrait permettre de voir le chien apparaitre avec un canard&thinsp;🦆 à la main, prendre une légère pause et disparaitre à&nbsp;nouveau.'
  -
    type: image
    image: /assets/articles/duck-hunt-success.mp4
  -
    type: note
    intent: generic
    body: 'Testez via la console CodePen que vous êtes en mesure d''appeler cette méthode et de déclencher votre&nbsp;animation.'
  -
    type: text
    body: |
      7. Lorsque l'animation du chien est terminée, appelez-les méthodes `updateScore` et `newRound`. Ainsi, dorénavant lorsque vous appellerez la méthode `success`, celle-ci devrait déclencher l'animation du chien, mais aussi incrémenter le nombre de rondes et le pointage du&nbsp;jeu.
      8. Créez-vous une nouvelle méthode intitulée `fail`. À l'intérieur de celle-ci, ajoutez la classe `.laughing` au chien&thinsp;🐕 et créez-vous une animation GSAP utilisant une timeline afin d'animer ce dernier. Comme dans l'animation de l'étape `success`, faites remonter le chien, prenez une pause d'une seconde et faites-le redescendre. L'ajout de la classe `.laughing` fera en sorte que le chien se moquera du joueur plutôt que de tenir un canard à la&nbsp;main.
  -
    type: image
    image: /assets/articles/duck-hund-dog-laughing.mp4
  -
    type: note
    intent: generic
    body: 'Testez via la console CodePen que vous êtes en mesure d''appeler cette méthode et de déclencher votre&nbsp;animation.'
  -
    type: text
    body: '9. Lorsque l''animation du chien est terminée dans la méthode `fail`, retirez la classe `laughing` au chien et appelez la méthode&nbsp;`newRound`.'
  -
    type: note
    intent: warning
    body: 'Puisque l''usager a échoué sa mission et que le chien se moque de lui, nous n''augmentons pas son pointage contrairement à la méthode&nbsp;`success`.'
  -
    type: text
    body: '10. Appelez-la méthode `newRound` à partir de votre constructeur de sorte qu''une première ronde soit déclenchée au chargement de la&nbsp;page.'
  -
    type: text
    title: Bonus
    level: h2
    body: |
      Vous avez fini rapidement? Pourquoi ne pas en profitez pour bonifier votre&nbsp;jeu!
      
      Voici trois effets sonores à&nbsp;ajouter&thinsp;🔊:
      
      1. Lorsque la méthode `success` est appelée, déclenchez le son confirmant la&nbsp;réussite:
  -
    type: code
    lang: html
    body: 'https://ex.smnarnold.com/class-js/duck-hunt/sounds/success.mp3'
  -
    type: text
    body: '2. Lorsque la méthode `fail` est appelée, déclenchez le rire du&nbsp;chien:'
  -
    type: code
    lang: html
    body: 'https://ex.smnarnold.com/class-js/duck-hunt/sounds/fail.mp3'
  -
    type: text
    body: '3. Finalement, écoutez le clic sur l''élément `.game`. À chaque fois que l''usager clique sur cet élément, déclenchez un effet sonore de&nbsp;fusil&thinsp;🔫:'
  -
    type: code
    lang: html
    body: 'https://ex.smnarnold.com/class-js/duck-hunt/sounds/shot.mp3'
  -
    type: note
    intent: generic
    body: 'Vous pouvez arrêter les sons si vous ne voulez plus les entendre en effectuant un clic droit sur l''onglet de CodePen dans votre navigateur et en sélectionnant l''option _"Couper le son du&nbsp;site"_&thinsp;🔇'
is_hidden: false
title: Game
template: page-exercice
color_scheme: auto
preview_color: '#000'
preview: /assets/previews/duck-hunt-game-preview.png
fieldset: page-article
id: 3d3550e7-69c2-44cf-b020-9f11439501ab
