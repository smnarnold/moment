title: Timeline
template: page-article
color_scheme: auto
body:
  -
    type: text
    body: |
      La `Timeline`de [GSAP](./gsap) permet d'organiser un groupe d'animations. Par exemple, pour enchaîner trois animations une à la suite de l'autre, afin de créer une animation complexe, il serait nécessaire d'appliquer un délais sur chacune d'entre&nbsp;elles. 
      
      Cependant, avec une timeline, il suffit d'enchainer les animations une à la suite de l'autre pour quelles se déclenches&nbsp;successivement.
      
      Par&nbsp;exemple:
  -
    type: codepen
    id: dyMdyaz
    theme: light
    ratio: 34
    tabs: 'js,result'
  -
    type: note
    intent: generic
    body: 'Afin de facilité la lecteur de l''animation, il est conseillé de séparer chaque étape sur une ligne&nbsp;différente.'
  -
    type: text
    body: 'Si cette animation avait été conçue avec des délais et que pour une raison quelconque la durée d''une des animations devait-être modifiée, le délais de chacune des animations la suivant aurait du être recalculé et changé à la main. Tandis qu''avec une timeline, cette modification se fait automatiquement.'
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
      Il est possible de spécifier un délais _(positif ou négatif)_ à une animation en lien avec l'animation&nbsp;précédente. 
      
      Par exemple, pour attentre une demi seconde avant de déclencher la prochaine animation, il est possible de spécifier `"+=0.5"`. Pour qu'une animation commence une demi-seconde plus tôt `"-=0.5"` comme dans l'exemple&nbsp;suivant, où le 3<sup>e</sup> carré&thinsp;🟥 débute maintenant en même temps que le 2<sup>e</sup>&thinsp;🟦.
  -
    type: codepen
    id: abNqzvW
    theme: light
    ratio: 34
    tabs: 'js,result'
  -
    type: text
    body: |
      Cependant, si l'objectif est de démarrer l'animation en même temps que la précédente, il existe une position plus efficace encore pouvant se synchroniser avec le début de l'animation précédente et ce, même si la durée de celle-ci venait à&nbsp;changer.
      
      Pour ce faire, il faut utiliser `"<"` comme&nbsp;ceci:
  -
    type: codepen
    id: GRZQgZY
    theme: light
    ratio: 34
    tabs: 'js,result'
  -
    type: note
    intent: generic
    body: 'Il est même possible d''ajouter une valeur après le symbole `"<"` si sa position doit être basé sur le début de l''animation précédente, mais être légèrement différente. Par exemple&nbsp;`"<0.25"`.'
  -
    type: text
    title: 'Position absolue'
    level: h3
    body: |
      Les paramètres de positions absolues permettent de spécifier un temps précis en secondes correspondant au moment déterminé pour le déclenchement de&nbsp;l'animation.
      
      Par exemple, si le 2<sup>e</sup>&thinsp;🟦 devait commencer après une seconde _(créant ainsi un léger délais)_, il serait possible d'utiliser&nbsp;`1`.
  -
    type: codepen
    id: VwaQYKx
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
      Sauter rapidement à une position précise dans une animation peut s'avérer pratique. Surtout lorsqu'une animation devient longue et que seul la fin nécessite des ajustements. Dès lors, regarder le début de l'animation devient redondant et une perte de&nbsp;temps.
      
      Par exemple:
  -
    type: codepen
    id: PoNQwyM
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
      Certaines propriétés peuvent-être partagés par plusieurs animations dans une&nbsp;`timeline`.
      
      Si tous les éléments ont une translation de `x: '400%'` et un `ease` identique. Plutôt que de répéter cette combinaison sur chaque élément, il est possible de définir des propriétés/valeurs par défaut. Ainsi, toutes les animations enfants de cette `timeline` partageront ces propriétés, à moins de la redéfinir à l'intérieur d'une animation&nbsp;spécifiquement. 
      
      Par&nbsp;exemple:
  -
    type: codepen
    id: ZEWrYgX
    theme: light
    ratio: 34
    tabs: 'js,result'
  -
    type: text
    title: GSDevTools
    level: h2
    body: |
      GreenSock offre des plugiciels payant, réservés aux membres du [Club GreenSock](https://greensock.com/club/). Parmi ceux-ci, GSDevTools est particulièrement utile pour peaufiner ses animations. Heureusement, GreenSock offre la possibilité de l'utiliser gratuitement et légalement via la plateforme&nbsp;CodePen.
      
      Pour ce faire, il suffit d'incorporer l'url du plugiciel désiré dans les _Settings_ de&nbsp;CodePen.
      
      [Voir les plugiciels&nbsp;disponibles](https://codepen.io/GreenSock/full/23d3979528b262cb07da37f6a7c7dd76)
      
      Lorsque GSDevTools est ajouté à un pen, la ligne `GSDevTools.create();` suffit à l'initialisé. Dès lors, un lecteur permettant de manipuler son animation devient&nbsp;disponible.
      
      Ce lecteur permet de:
      
      - Jouer une animation en&nbsp;boucle
      - Changer sa vitesse _(ralentir/accélérer)_
      - Isoler certaines sections de&nbsp;l'animation
  -
    type: codepen
    id: jOqZPEB
    theme: light
    ratio: 34
    tabs: 'js,result'
  -
    type: note
    intent: generic
    body: 'Créer une animation peut se faire rapidement. Cependant, la peaufiner pour que tous les _timmings_ soient parfaits requière du temps. Prenez le temps d''observer vos _timmings_ et de les&nbsp;ajuster.'
fieldset: page-article
id: 285a6559-47d8-4cda-ab36-6d4e49276065
