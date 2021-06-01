body:
  -
    type: text
    body: |
      Pour cet exercice, vous allez devoir animer le premier niveau du jeu [The Incredible Machine](https://fr.wikipedia.org/wiki/The_Incredible_Machine), aussi surnommé TIM&thinsp;😉 à partir d'un [Pen&nbsp;existant](https://codepen.io/smnarnold/pen/ZEBdvdY). 
      
      Classique de 1992, ce jeu consiste à positionner des éléments afin de générer des réactions en chaine permettant d'arriver à un résultat précis, dans ce cas, lancer le ballon de basket dans le&nbsp;panier.
      
      Aperçu du résultat:
  -
    type: image
    image: /assets/articles/incredible-machine.mp4
  -
    type: text
    body: |
      Vous n'avez qu'à ajouter du JS _(nul besoin de modifier le HTML ou le CSS)_. La librairie GSAP a aussi été ajoutée afin de vous laisser vous concentrer sur l'animation. Celle-ci n'aura pas à être 100% identique à celle de l'exemple ci-dessus, puisqu'une animation se conçoit beaucoup en se fiant à son instinct. L'important est que l'animation produite recrée le fonctionnement logique de la&nbsp;machine.
      
      Puisque tous les éléments sont positionnés avec l'[unité vmin](https://smnarnold.com/cours/css/unites-de-mesure-avancees#vmin-et-vmax), il vous sera nécessaire d'utiliser cette unité à chaque fois que vous désirerez déplacer un&nbsp;élément.
      
      Puisque le but de l'exercice est d'expérimenter la [Timeline GSAP](https://smnarnold.com/cours/gsap/timeline), il est interdit d'utiliser la propriété&nbsp;`delay`. Utilisez plutôt [les paramètres de position de la&nbsp;timeline](https://smnarnold.com/cours/gsap/timeline#parametres-de-position).
  -
    type: text
    title: Consignes
    level: h2
    body: |
      1. Par défaut, faites en sorte que votre animation soit sur pause tant que le bouton _"Démarrer"_ n'est pas&nbsp;appuyé.
      2. Faites chuter la boule de quilles&thinsp;🎳 sur la cage de la souris&nbsp;🐁. Faites attention à choisir [le ease adéquat](https://greensock.com/get-started/#easing) afin de créer l'effet de rebondissement&nbsp;souhaité.
      3. Démarrez l'animation de la souris _(mouse)_ qui court à l'infini un peu avant la fin de l'animation de la boule de&nbsp;quilles.
      4. En même temps que l'animation de la souris, faites tourner le roue _(wheel)_ à&nbsp;l'infini.
      5. En même temps que l'animation précédente, faites tourner la roue _(wheel)_ du premier tapis roulant _(treadmill)_ à&nbsp;l'infini.
      6. Déclenchez en même temps l'animation de la 2<sup>e</sup> boule de quilles. Celle-ci doit: 
      	- Se déplacer pour aller frapper sur la 2<sup>e</sup> cage à&nbsp;souris.
          - Tourner à&nbsp;l'infini.
      7. Assurez-vous de bien peaufiner les étapes 3 à 6 de votre&nbsp;animation.
      8. Récupérez les animations des étapes 3 à 6 et appliquez-les aux cages à souris, tapis roulants et boule de quilles&nbsp;restants.
      9. Combinez différentes animations afin de faire:
      	- Rouler le ballon de&nbsp;basket&thinsp;🏀
          - Le déplacer dans le&nbsp;panier.
          - Le faire rebondir au&nbsp;sol.
          - L'amené dans le coin inférieur droit de la&nbsp;scène&thinsp;↘️
is_hidden: false
title: 'The Incredible Machine'
template: page-exercice
color_scheme: auto
preview_color: '#1e1f26'
preview: /assets/previews/incredible-machine.jpg
fieldset: page-article
id: 99f999e3-8118-4112-91ef-4181ae4692e0
