body:
  -
    type: text
    body: 'ScrollTrigger est un plugiciel _(plugin)_ développé par [GreenSock](https://greensock.com/) permettant de déclencher/synchroniser une animation avec le défilement de la&nbsp;page'
  -
    type: text
    title: Installation
    level: h2
    body: |
      Comme pour tout plugiciel _(plugin)_ GreenSock, afin d'avoir accès à ses fonctionnalités, il est nécessaire d'avoir incorporé la librairie GSAP préalablement et d'ajouter ensuite le plugiciel dans le&nbsp;projet.
      
      Pour ce faire, il est&nbsp;possible:
      
      - De le récupérer sur le [Site de GreenSock](https://greensock.com/docs/v3/Installation?checked=core,scrollTrigger#modules)
      - D'utiliser un [CDN](https://cdnjs.com/libraries/gsap)
      
      Une fois chargée, il est conseillé d'indiquer à GSAP que ScrollTrigger est disponible en inscrivant la ligne de code&nbsp;suivante:
  -
    type: code
    lang: js
    body: gsap.registerPlugin(ScrollTrigger);
  -
    type: note
    intent: warning
    body: 'ScrollTrigger n''est compatible qu''avec GSAP 3.3.X et&nbsp;plus.'
  -
    type: note
    intent: warning
    body: 'Il existe une autre librairie utilisant le nom _"ScrollTrigger"_. Si une animation ne se déclenche pas au moment déterminé par ScrollTrigger, il est possible que la mauvaise librairie aille été&nbsp;chargé.'
  -
    type: text
    title: 'Utilisation de base'
    level: h2
    body: |
      Il est possible d'utiliser ScrollTrigger de façon très minimaliste. Pour ce faire, il suffit d'ajouter la propriété `scrollTrigger` à une animation et de lui attribuer comme valeur le sélecteur devant déclencher l'animation _(communément appelé le&nbsp;"trigger")_.
      
      Par exemple, si un carré bleu&thinsp;🟦  possède une animation, mais que le carré n'est visible qu'après avoir fait défiler la page, il est possible que son animation se termine avant même que l'utilisateur puisse la&nbsp;voir. 
      
      Heureusement, l'utilisation de ScrollTrigger permet de retarder le déclenchement de l'animation au moment où la partie supérieure du carré devient&nbsp;visible.
  -
    type: codepen
    id: b8afdb631c9f7c2f8a30c1a2b86eb013
    theme: light
    ratio: 34
    tabs: 'js,result'
  -
    type: text
    title: 'Utilisation d''un objet'
    level: h2
    body: |
      Il est possible de raffiner le comportement d'une animation ScrollTrigger. Pour ce faire, il faut utiliser un objet JavaScript pouvant contenir plusieurs propriétés et valeurs plutôt qu'une valeur texte comme dans l'exemple&nbsp;précédent.
      
      Par exemple, convertissons la valeur textuelle de l'exemple en&nbsp;objet.
  -
    type: codepen
    id: 14887b913cb08021f50ef8b52d36f8e8
    theme: light
    ratio: 34
    tabs: 'js,result'
  -
    type: text
    body: 'On remarque que la propriété permettant de déclencher l''animation est maintenant spécifiée et s''appelle&nbsp;`trigger`.'
  -
    type: text
    title: Markers
    level: h2
    body: |
      La propriété `markers` permet de simplifier le débogage d'une animation en affichant les marqueurs utilisés pour contrôler l'animation. Par défaut, la valeur de cette propriété est à&nbsp;`false`. 
      
      Pour l'activer, il faut lui donner la valeur `true`, comme dans l'exemple&nbsp;suivant:
  -
    type: codepen
    id: cb717536c9d9cadad16a0767f1fa6062
    theme: light
    ratio: 34
    tabs: 'js,result'
  -
    type: text
    body: |
      `scroller-start` et `scroller-end` sont des marqueurs positionnés en lien avec la fenêtre, tandis que `start` et `end` sont des marqueurs positionnés en lien avec le `trigger`&nbsp;spécifié.  
      
      On remarque que l'animation du carré bleu&thinsp;🟦 débute uniquement lorsque le marqueur `start` croise le marqueur&nbsp;`scroll-start`.
  -
    type: text
    title: 'Start et End'
    level: h2
    body: |
      Les propriétés `start` et `end` de l'objet ScrollTrigger sont constituées de deux valeurs. Une première correspondant au marqueur associé au `trigger` et une deuxième au marqueur associé à la fenêtre. 
      
      Il est possible de modifier ces valeurs en passant une chaine de caractères constituée soit de:
      
      - Positions sous forme de texte: `top`, `center`,&nbsp;`bottom`
      - Pourcentage, ex:&nbsp;`50%`
      - Unité absolue, ex:&nbsp;`200px`
      - Unité relative, ex:&nbsp; `+=200`
  -
    type: text
    title: Start
    level: h3
    body: |
      Par défaut la propriété `start` à la valeur `"top bottom"`, indiquant que le marqueur `start` doit être positionné au sommet de l'élément `trigger` et le marqueur `scroller-start`  au bas de la&nbsp;fenêtre.
      
      Par exemple, pour déclencher l'animation non pas quand elle entre dans la fenêtre, mais bien lorsque le milieu de l'élément atteint 75% de la page, il est possible de spécifier `"center 75%"` comme dans l'exemple&nbsp;suivant:
  -
    type: codepen
    id: 900df00be0fe11b27fee9ac057e112af
    theme: light
    ratio: 34
    tabs: 'js,result'
  -
    type: note
    intent: good
    body: 'Pour apprendre plus, voir cet [article GreenSock sur la propriété start](https://greensock.com/docs/v3/Plugins/ScrollTrigger/start)'
  -
    type: text
    title: End
    level: h3
    body: 'La propriété `end` se comporte exactement comme la propriété [start](#start) à la différence bien sur qu''elle contrôle les marqueurs `end` et `scroller-end`.'
  -
    type: note
    intent: good
    body: 'Pour apprendre plus, voir cet [article GreenSock sur la propriété end](https://greensock.com/docs/v3/Plugins/ScrollTrigger/end)'
  -
    type: text
    title: ToggleActions
    level: h2
    body: 'La propriété `toggleActions` permet de spécifier des actions qui seront déclenchées lors de moments&nbsp;précis.'
  -
    type: text
    title: Moments
    level: h3
    body: |
      1. `onEnter`: lorsque la page défile vers le haut&thinsp;⬆️ et que le marqueur `start` croise le marqueur&nbsp;`scroller-start`
      2. `onLeave`: lorsque la page défile vers le haut&thinsp;⬆️  et que le marqueur `end` croise le marqueur&nbsp;`scroller-end`
      3. `onEnterBack`: lorsque la page défile vers le bas&thinsp;⬇️ et que le marqueur `end` croise à nouveau le marqueur&nbsp;`scroller-end`
      4. `onLeaveBack`: lorsque la page défile vers le bas&thinsp;⬇️ et que le marqueur `start` croise à nouveau le marqueur&nbsp;`scroller-start`
  -
    type: text
    title: Actions
    level: h3
    body: |
      - `play`: déclenche l'animation
      - `pause`: met l'animation sur&nbsp;pause
      - `resume`: continue l'animation en fonction de sa progression&nbsp;actuelle
      - `reset`: ramène l'animation à son état de&nbsp;départ
      - `restart`: ramène l'animation à son état de départ et la&nbsp;déclenche
      - `complete`: amène l'animation à son état de fin
      - `reverse`: joue l'animation en sens inverse en à partir de sa progression&nbsp;actuelle
      - `none`: rien ne se&nbsp;produit
      
      Par défaut, toggleAction à une valeur de `"play none none none"`. 
      
      Autrement dit: 
      
      1. `onEnter` l'animation est déclenchée. 
      2. `onLeave` rien ne se&nbsp;produit
      3. `onEnterBack` rien ne se&nbsp;produit
      4. `onLeaveBack` rien ne se&nbsp;produit
      
      Il est possible de modifier ces&nbsp;comportements. 
      
      Par exemple, pour qu'une&nbsp;animation: 
      
      - Se déclenche à chaque fois que le marqueur `start` croise&nbsp;`scroller-start`.
      - Se complète lorsque le marqueur `end` croise&nbsp;`scroller-end`.
      - Joue à l'envers lorsque le marqueur `end` croise `scroller-end` dans la direction&nbsp;opposée.
      - Retourne à son état initial lorsque le marqueur `start` croise `scroller-start` dans la direction&nbsp;opposée. 
      
      il est possible de spécifier `"restart complete reverse reset"` comme dans l'exemple&nbsp;suivant:
  -
    type: codepen
    id: 6bebadc0ffd3397edf286dd3a8b66251
    theme: light
    ratio: 34
    tabs: 'js,result'
  -
    type: note
    intent: good
    body: 'Pour bien visualiser chaque moment et chaque action disponible, je vous suggère de regarder cette [démo CodePen de GreenSock à propos de&nbsp;toggleActions](https://codepen.io/GreenSock/pen/LYVKWGo).'
  -
    type: text
    title: 'Utilisation avec une Timeline'
    level: h2
    body: |
      Il est possible de combiner ScrollTrigger à une [timeline GSAP](./gsap-timeline). Pour ce faire il suffit de passer un objet ScrollTrigger comme propriété dans l'objet de configurations de la timeline en&nbsp;question.
      
      Par exemple:
  -
    type: codepen
    id: 99e31ae79aae73b9d180080ec0d1d1af
    theme: light
    ratio: 34
    tabs: 'js,result'
  -
    type: note
    intent: exercice
    body: '[Exercice Zelda](https://smnarnold.com/exercice/gsap/zelda)&thinsp;🛡️'
  -
    type: note
    intent: good
    body: 'Pour en savoir, voir la [documentation de GreenSock sur&nbsp;ScrollTrigger](https://greensock.com/docs/v3/Plugins/ScrollTrigger).'
is_hidden: false
title: ScrollTrigger
subtitle: 'markers, start, end, toggleActions'
template: page-article
color_scheme: auto
preview_color: '#77c814'
preview: /assets/previews/scrolltrigger2.png
fieldset: page-article
id: 141ee741-9868-446d-aac6-1d788f391b7a
