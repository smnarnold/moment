body:
  -
    type: text
    body: |
      Il existe une multitude d'évènements qui peuvent se produire sur une page&nbsp;web.
      
      Par exemple:
      
      - Un élément cliqué ou encore&nbsp;survolé.
      - Une touche enfoncée.
      - Une fenêtre redimensionnée.
      - La fin du chargement d'une&nbsp;page.
      - L'envoi d'un formulaire.
      - Le démarrage d'une vidéo.
      - Etc.
      
      Heureusement, il est possible d'écouter ces évènements et de leur attacher des actions personnalisées lorsqu'ils sont&nbsp;déclenchés.
  -
    type: text
    title: Syntaxe
    level: h2
    body: 'Par exemple, pour écouter un événement de type&nbsp;`click` avec une fonction&nbsp;classique:'
  -
    type: code
    lang: js
    body: 'document.addEventListener(''click'', function() { ... });'
  -
    type: text
    body: 'Avec une fonction fléchée:'
  -
    type: code
    lang: js
    body: 'document.addEventListener(''click'', () => { ... });'
  -
    type: text
    body: |
      Dans ce cas-ci, nous&nbsp;avons:
      
      - `document` soit l'élément sur lequel nous désirons écouter un&nbsp;évènement.
      - `addEventListener` la commande qui indique que nous désirons ajouter un écouteur d'événement au précédent&nbsp;élément.
      - `'click'` le nom de l'événement que nous désirons&nbsp;écouter.
      - `function() { ... }` une fonction, _dans ce cas-ci anonyme_, devant être exécutée lorsque l'évènement est&nbsp;déclenché.
      
      Il aurait aussi été possible d'appeler directement une fonction plutôt qu'une fonction anonyme, en lui passant le nom de ladite&nbsp;fonction.
      
      Par exemple:
    level: h2
  -
    type: code
    lang: js
    body: |
      const maFonction = function() { ... };
      
      document.addEventListener('click', maFonction);
  -
    type: note
    intent: exercice
    body: 'Appuyer sur le bouton [codepen.io/smnarnold/pen/LYYYMNj](https://codepen.io/smnarnold/pen/LYYYMNj?editors=0010)'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article de MDN🦖 à propros de&nbsp;addEventListener()](https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener)'
  -
    type: text
    title: Événements
    level: h2
    body: |
      Un écouteur d'événement `addEventListener` retourne à la fonction qui lui est passée un objet détaillant l'événement qui vient de se produire. 
      
      Cet objet peut être nommé comme désiré. Cependant, vous le verrez généralement sous le nom `event` ou encore simplement&nbsp;`e`.
      
      Affichez l'exemple ci-dessous dans CodePen et ouvrez la console de votre navigateur. Vous remarquerez que la fonction reçoit un paramètre nommé `event`. Lorsque ce paramètre est affiché dans la console, il est possible de voir qu'il s'agit d'un objet `MouseEvent` détaillant l'événement `click` venant de se&nbsp;produire.
  -
    type: codepen
    id: 97d13be59e3f0458fba1cfdd7b293d71
    theme: light
    ratio: 34
    tabs: 'js,result'
  -
    type: text
    body: 'Revoici le même exemple, mais avec une fonction&nbsp;anonyme:'
  -
    type: codepen
    id: d9357263051391b8dc7356e8b86a10e0
    theme: light
    ratio: 34
    tabs: 'js,result'
  -
    type: text
    title: 'Type d''évènements'
    level: h2
    body: 'Il existe plusieurs types d''événements. Voyons les plus&nbsp;courants:'
  -
    type: text
    title: Souris
    level: h3
    body: |
      - `click` clic gauche de la&nbsp;souris&thinsp;👆🖱️
      - `contextmenu` clic droit de la&nbsp;souris&thinsp;🖱️👆
      - `dblclick` double clic gauche de la&nbsp;souris&thinsp;👆👆
      - `mouseup` lorsque le clic de la souris est&nbsp;relâché
      - `mouseover` dès que la souris commence à survoler un&nbsp;élément
      - `mousemove` à chaque fois que la souris se déplace au dessus d'un&nbsp;élément
      - `mouseout` quand la souris cesse de survoler un&nbsp;élément
  -
    type: note
    intent: generic
    body: 'Notez que les événements de souris sont aussi déclenchés sur les appareils à écrans tactiles qui n''ont pas de&nbsp;souris.'
  -
    type: text
    title: Touche
    level: h3
    body: |
      Pour les appareils tactiles, _sans souris_, tels que les cellulaires&thinsp;📱 et&nbsp;tablettes. 
      
      - `touchstart` lors du contact initial avec&nbsp;l'écran 
      - `touchmove` à chaque fois qu'un doigt se déplace sur&nbsp;l'écran
      - `touchend` lorsque le contact avec l'écran est&nbsp;rompu
      - `touchcancel` quand un contact doit être annulé. Par exemple, si trop de doigts touchent en même temps à&nbsp;l'écran.
  -
    type: text
    title: Clavier
    level: h3
    body: |
      - `keydown` lorsqu'une touche est&nbsp;enfoncée
      - `keyup` lorsqu'une touche est&nbsp;relâchée
      - `input` lorsqu'une touche est enfoncée et que le contenu du champ associé est&nbsp;modifié
  -
    type: note
    intent: generic
    body: 'Les événements retournés par les écouteurs d''événements de type clavier sont particulièrement utiles pour définir quelle touche a été&nbsp;activé.'
  -
    type: note
    intent: exercice
    body: 'Why, Y ou ✌️ [codepen.io/smnarnold/pen/pobLJbO](https://codepen.io/smnarnold/pen/pobLJbO?editors=0010)'
  -
    type: text
    title: Formulaire
    level: h3
    body: |
      - `focus` lorsqu'un champ reçoit le focus. _Par exemple, un champ cliqué obtient le focus_.
      - `blur` quand un champ perd le&nbsp;focus.
      - `change` si la valeur d'un champ est différent au moment de perdre le focus qu'au moment de&nbsp;l'obtenir.
      - `submit` lorsqu'un formulaire est&nbsp;soumis.
  -
    type: text
    title: Fenêtre
    level: h3
    body: |
      - `load` la page et ses ressources ont fini de&nbsp;charger
      - `scroll` la fenêtre est défilée&nbsp;_(scrollé)_
      - `resize` la fenêtre est&nbsp;redimensionnée
  -
    type: note
    intent: good
    body: 'Pour une liste plus exhaustive, voir la [liste des événements sur MDN🦖](https://developer.mozilla.org/fr/docs/Web/Events)'
  -
    type: text
    title: removeEventListener
    level: h2
    body: 'Il est aussi possible de retirer un écouteur d''évènement grâce à&nbsp;`removeEventListener`.'
  -
    type: note
    intent: warning
    body: 'Pour ce faire, il est important que la fonction soit nommée et non&nbsp;anonyme.'
  -
    type: text
    body: 'Par exemple:'
  -
    type: code
    lang: js
    body: 'document.removeEventListener(''click'', nomDeLaFonction);'
  -
    type: note
    intent: good
    body: 'Pour plus d''infos, voir l''[article de Davide Rama sur removeEventListener](https://medium.com/@DavideRama/removeeventlistener-and-anonymous-functions-ab9dbabd3e7b) publié sur&nbsp;Medium.com'
is_hidden: false
title: AddEventListener
template: page-article
color_scheme: auto
preview_color: '#000'
fieldset: page-article
id: 3dd4f184-ae68-4ad7-a218-08b4c46998a4
