title: 'Événements liés aux Animations/Transitions CSS'
template: page-article
color_scheme: auto
body:
  -
    type: text
    body: |
      Pour le meilleur et pour le pire, le CSS et le Javascript se comportent comme deux entités&nbsp;séparées. 
       
      Par exemple, au clique d’un bouton, il est possible de vouloir déclencher une animation CSS d’une seconde, ainsi qu’un événement javascript devant s’exécuter à la fin de celle-ci, il est alors tentant d’utiliser `setTimout(function() {...}, 1000)`. Cependant, puisque le CSS et le Javascript sont distinct, il est probable qu’ils n’arrivent pas tout à fait en même temps au décompte d’une&nbsp;seconde.
  -
    type: note
    intent: generic
    body: |
      Imaginez un instant que vous et un de vos amis tentiez de faire un&nbsp;décompte: 
      1 milliseconde,
      2 millisecondes… 
      Ainsi de suite jusqu’à 1000&nbsp;millisecondes.
       
      Il est probable que vous terminiez dans un délais similaire, mais peu probable que vous terminiez exactement en même&nbsp;temps.
  -
    type: text
    body: 'Heureusement, il est possible d''écouter en javascript des événements liés aux animations et transitions&nbsp;CSS.'
  -
    type: text
    title: 'animationend & transitionend'
    level: h2
    body: |
      Déclenché lorsqu’une animation/transition est&nbsp;terminée. 
      
      Si l’animation ou transition est cancellée, l’événement n’est pas déclenché. Par exemple, si un élément est animé lorsqu’il est survolé et que l’utilisateur cesse de le survoler avant la fin de la dite&nbsp;animation.
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
    title: 'animationrun & transitionrun'
    level: h2
    body: 'Déclenché lorsqu’une animation/transition commence. Contrairement à animationstart & transitionstart, animationrun & transitionrun sont déclenché immédiatement, même si une propriété animation-delay est présente sur&nbsp;l’animation.'
  -
    type: note
    intent: good
    body: |
      Pour en savoir plus sur transitionrun, voir [MDN🦖]
      https://developer.mozilla.org/fr/docs/Web/API/HTMLElement/transitionrun_event
fieldset: page-article
id: 43a4f5d2-51a7-4dc7-b061-7d87d4a9bb86
