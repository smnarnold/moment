body:
  -
    type: text
    body: |
      La `Timeline`de [GSAP](../gsap) permet d'organiser un groupe d'animations. Par exemple, pour enchaîner trois animations une à la suite de l'autre, afin de créer une animation complexe, il serait nécessaire d'appliquer un délai sur chacune d'entre&nbsp;elles. 
      
      Cependant, avec une timeline, il suffit d'enchainer les animations une à la suite de l'autre pour quelles se déclenches&nbsp;successivement.
      
      Par&nbsp;exemple:
  -
    type: codepen
    id: a5ee280e840d58b81cac30120aa4cc78
    theme: light
    ratio: 34
    tabs: 'js,result'
  -
    type: note
    intent: generic
    body: 'Afin de faciliter la lecture de l''animation, il est conseillé de séparer chaque étape sur une ligne&nbsp;différente.'
  -
    type: text
    body: 'Si cette animation avait été conçue avec des délai et que pour une raison quelconque la durée d''une des animations devait être modifiée, le délai de chacune des animations la suivant aurait dû être recalculé et changé à la main. Tandis qu''avec une timeline, cette modification se fait automatiquement.'
  -
    type: text
    title: 'Paramètres de position'
    level: h2
    body: 'Il est parfois souhaitable qu''une animation se déclenche plus tôt ou plus tard et non immédiatement après l''animation précédente. Pour ce faire, il est possible de passer un 3<sup>e</sup> paramètre à une animation se trouvant dans une `timeline`.'
  -
    type: text
    title: 'Position relative'
    level: h3
    body: |
      Il est possible de spécifier un délai _(positif ou négatif)_ à une animation en lien avec l'animation&nbsp;précédente. 
      
      Par exemple, pour attendre une demi-seconde avant de déclencher la prochaine animation, il est possible de spécifier `"+=0.5"`. Pour qu'une animation commence une demi-seconde plus tôt `"-=0.5"` comme dans l'exemple&nbsp;suivant, où le 3<sup>e</sup> carré&thinsp;🟥 débute maintenant en même temps que le 2<sup>e</sup>&thinsp;🟦.
  -
    type: codepen
    id: 39ac4c03e8f0377a673d073a809a4cb9
    theme: light
    ratio: 34
    tabs: 'js,result'
  -
    type: text
    body: |
      Cependant, si l'objectif est de démarrer l'animation en même temps que la précédente, il existe une position plus efficace encore pouvant se synchroniser avec le début de l'animation précédente, et ce même si la durée de celle-ci venait à&nbsp;changer.
      
      Pour ce faire, il faut utiliser `"<"` comme&nbsp;ceci:
  -
    type: codepen
    id: 0909fe8d0fc5ef3d1a037416e25bd289
    theme: light
    ratio: 34
    tabs: 'js,result'
  -
    type: note
    intent: generic
    body: 'Il est même possible d''ajouter une valeur après le symbole `"<"` si sa position doit être basée sur le début de l''animation précédente, mais être légèrement différente. Par exemple&nbsp;`"<0.25"`.'
  -
    type: note
    intent: exercice
    body: 'Exercice [The Incredible&nbsp;Machine](https://smnarnold.com/exercice/gsap/the-incredible-machine)&thinsp;🎳🐁'
  -
    type: text
    title: 'Position absolue'
    level: h3
    body: |
      Les paramètres de positions absolues permettent de spécifier un temps précis en secondes correspondant au moment déterminé pour le déclenchement de&nbsp;l'animation.
      
      Par exemple, si le 2<sup>e</sup>&thinsp;🟦 devait commencer après une seconde _(créant ainsi un léger délai)_, il serait possible d'utiliser&nbsp;`1`.
  -
    type: codepen
    id: 0e264b208a6b6f8f6ba8bdf2dcf701d5
    theme: light
    ratio: 34
    tabs: 'js,result'
  -
    type: note
    intent: generic
    body: 'Remarquez comment le 3<sup>e</sup> carré&thinsp;🟥 reste synchronisé avec l''animation précédente même si elle à un paramètre de position&nbsp;absolue.'
  -
    type: text
    title: Labels
    level: h2
    body: |
      Sauter rapidement à une position précise dans une animation peut s'avérer pratique. Surtout lorsqu'une animation devient longue et que seule la fin nécessite des ajustements. Dès lors, regarder le début de l'animation devient redondant et une perte de&nbsp;temps.
      
      Par exemple:
  -
    type: codepen
    id: 4b6e245c0d4f1ca77a162166afdf5727
    theme: light
    ratio: 34
    tabs: 'js,result'
  -
    type: text
    body: 'Un label est défini grâce à `.add(''red'')`. Il est ensuite possible de sauter directement à cette position dans la timeline en appelant `animation.play(''red'')`'
  -
    type: text
    title: Defaults
    level: h2
    body: |
      Certaines propriétés peuvent être partagées par plusieurs animations dans une&nbsp;`timeline`.
      
      Si tous les éléments ont une translation de `x: '400%'` et un `ease` identique. Plutôt que de répéter cette combinaison sur chaque élément, il est possible de définir des propriétés/valeurs par défaut. Ainsi, toutes les animations enfants de cette `timeline` partageront ces propriétés, à moins de la redéfinir à l'intérieur d'une animation&nbsp;spécifiquement. 
      
      Par&nbsp;exemple:
  -
    type: codepen
    id: 6164cfdb42fdb8f603a42150c1baf437
    theme: light
    ratio: 34
    tabs: 'js,result'
  -
    type: text
    title: GSDevTools
    level: h2
    body: |
      GreenSock offre des plugiciels payants, réservés aux membres du [Club GreenSock](https://greensock.com/club/). Parmi ceux-ci, GSDevTools est particulièrement utile pour peaufiner ses animations. Heureusement, GreenSock offre la possibilité de l'utiliser gratuitement et légalement via la plateforme&nbsp;CodePen.
      
      Pour ce faire, il suffit d'incorporer l'url du plugiciel désiré dans les _Settings_ de&nbsp;CodePen.
      
      [Voir les plugiciels&nbsp;disponibles](https://codepen.io/GreenSock/full/23d3979528b262cb07da37f6a7c7dd76)
      
      Lorsque GSDevTools est ajouté à un pen, la ligne `GSDevTools.create();` suffis à l'initialiser. Dès lors, un lecteur permettant de manipuler son animation devient&nbsp;disponible.
      
      Ce lecteur permet de:
      
      - Jouer une animation en&nbsp;boucle
      - Changer sa vitesse _(ralentir/accélérer)_
      - Isoler certaines sections de&nbsp;l'animation
  -
    type: codepen
    id: 62eb6f268030d83ff0e4262e3d2e0311
    theme: light
    ratio: 34
    tabs: 'js,result'
  -
    type: note
    intent: generic
    body: 'Créer une animation peut se faire rapidement. Cependant, la peaufiner pour que tous les _timings_ soient parfaits requiert du temps. Prenez le temps d''observer vos _timings_ et de les&nbsp;ajuster.'
  -
    type: note
    intent: exercice
    body: '[Exercice Excitebike](https://smnarnold.com/exercice/gsap/excitebike)&thinsp;🏍'
is_hidden: false
title: Timeline
template: page-article
color_scheme: auto
preview_color: '#77c814'
preview: /assets/previews/gsap-timeline.png
fieldset: page-article
id: 285a6559-47d8-4cda-ab36-6d4e49276065
