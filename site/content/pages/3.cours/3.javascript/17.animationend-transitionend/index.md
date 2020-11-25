title: 'AnimationEnd & TransitionEnd'
template: page-article
color_scheme: auto
body:
  -
    type: text
    body: |
      Pour le meilleur et pour le pire, le CSS et le JavaScript se comportent comme deux entités&nbsp;séparées. 
       
      Par exemple, au survole il est possible de déclencher une transition CSS d’une demi-seconde, ainsi qu’un événement JavaScript devant s’exécuter à la fin de celle-ci, il est alors tentant d’utiliser `setTimeout(function() {...}, 500)`. Cependant, puisque le CSS et le JavaScript sont distincts, il est probable qu’ils n’arrivent pas tout à fait en même temps au décompte d’une&nbsp;demi-seconde&thinsp;⏱️.
  -
    type: note
    intent: generic
    body: |
      Imaginez un instant que vous et un de vos amis tentiez de faire un&nbsp;décompte: 
      1 milliseconde,
      2 millisecondes… 
      Ainsi de suite jusqu’à 500&nbsp;millisecondes.
       
      Il est probable que vous terminiez dans un délai similaire, mais peu probable que vous terminiez exactement en même&nbsp;temps.
  -
    type: text
    body: |
      Heureusement, il est possible d'écouter en JavaScript des événements liés aux animations et transitions&nbsp;CSS.
      
      À gauche, l'événement CSS lié à la transition CSS est écouté, tandis qu'à droite le même résultat a été recréé avec&nbsp;setTimeout.
  -
    type: codepen
    id: qBOdwKX
    theme: light
    ratio: 34
    tabs: result
  -
    type: text
    title: 'animationend & transitionend'
    level: h2
    body: |
      Déclenché lorsqu’une animation/transition est&nbsp;terminée. 
      
      Si l’animation est cancellée, l’événement n’est pas déclenché. Par exemple, si un élément est animé lorsqu’il est survolé et que l’utilisateur cesse de le survoler avant la fin de ladite&nbsp;animation.
  -
    type: note
    intent: warning
    body: 'Une transition CSS n''est jamais réellement cancellée, car lorsqu''une transition est entamée, peut importe ce qui ce produit, elle transitionnera soit vers son objectif où son point de&nbsp;départ.'
  -
    type: codepen
    id: GRpJLrd
    theme: light
    ratio: 34
    tabs: 'js,result'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus sur transitionend, voir [MDN🦖](https://developer.mozilla.org/fr/docs/Web/Events/transitionend)'
  -
    type: note
    intent: exercice
    body: 'Exercice sur transitionend [codepen.io/smnarnold/pen/JjdaLWy](https://codepen.io/smnarnold/pen/JjdaLWy)'
  -
    type: text
    title: 'animationstart & transitionstart'
    level: h2
    body: 'Déclenché lorsqu’une animation/transition commence. Par exemple, si un élément possède une propriété animation-delay, il est pratique de pouvoir synchroniser avec le début réel de&nbsp;l’animation.'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus sur transitionstart, voir [MDN🦖](https://developer.mozilla.org/fr/docs/Web/Events/transitionstart)'
  -
    type: note
    intent: exercice
    body: 'Exercice sur transitionstart [codepen.io/smnarnold/pen/LYVJdzQ](https://codepen.io/smnarnold/pen/LYVJdzQ)'
  -
    type: text
    title: 'animationcancel & transitioncancel'
    level: h2
    body: 'Déclenché lorsqu’une animation/transition est annulée avant sa fin. Par exemple, si un élément est animé lorsqu’il est survolé et que l’utilisateur cesse de survoler l’élément avant la fin de l’animation. Malheureusement, sur certains navigateurs, cet événement se déclenche aussi lorsqu’une animation/transition se termine. Il est donc conseillé de comparer la propriété elapsedTime de l’objet event retourné et de ne déclencher l’action que si elapsedTime est inférieur à la durée normale de&nbsp;l’animation.'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus sur transitioncancel, voir [MDN🦖](https://developer.mozilla.org/fr/docs/Web/Events/transitioncancel)'
  -
    type: note
    intent: exercice
    body: 'Exercice sur transitioncancel [codepen.io/smnarnold/pen/NWqLeWx](https://codepen.io/smnarnold/pen/NWqLeWx)'
  -
    type: text
    title: 'animationrun & transitionrun 🏃'
    level: h2
    body: 'Déclenché lorsqu’une animation/transition commence. Contrairement à animationstart & transitionstart, animationrun & transitionrun sont déclenchés immédiatement, même si une propriété animation-delay est présente sur&nbsp;l’animation.'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus sur transitionrun, voir [MDN🦖](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement/transitionrun_event)'
fieldset: page-article
id: 43a4f5d2-51a7-4dc7-b061-7d87d4a9bb86
