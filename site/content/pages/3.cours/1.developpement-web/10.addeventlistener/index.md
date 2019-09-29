title: AddEventListener
template: page-article
color_scheme: auto
body:
  -
    type: text
    body: |
      Il existe une multitude d'évènements qui peuvent se produires sur une page&nbsp;web.
      
      **Par exemple:**
      
      - Un élément cliqué ou encore&nbsp;survolé.
      - Une touche enfoncée.
      - Une fenêtre redimensionnée.
      - La fin du chargement d'une&nbsp;page.
      - L'envois d'un formulaire.
      - Le démarrage d'une vidéo.
      - Etc.
      
      Heureusement, il est possible d'écouter ces évènements et de leur attacher des actions personnalisés lorsqu'ils sont&nbsp;déclenchés.
  -
    type: text
    title: Syntaxe
    level: h2
  -
    type: code
    lang: js
    body: 'document.addEventListener(''click'', function() { ... });'
  -
    type: text
    body: |
      Dans ce cas-ci, nous&nbsp;avons:
      
      - `document` soit l'élément sur lequel nous désions écouter un&nbsp;évènement.
      - `addEventListener` la commande qui indique que nous désirons ajouter un écouteur d'évènement au précédent&nbsp;élément.
      - `'click'` le nom de l'évènement que nous désirons&nbsp;écouter.
      - `function() { ... }` une function, _dans ce cas-ci anonyme_, devant être exécutée lorsque l'évènement est&nbsp;déclenché.
      
      Il aurait aussi été possible d'appeler directement une fonction plutôt qu'une fonction anonyme, en lui passant le nom de la dite fonction.
      
      **Par exemple:**
    level: h2
  -
    type: code
    lang: js
    body: |
      var nomDeLaFonction = function() { ... };
      document.addEventListener('click', nomDeLaFonction);
  -
    type: text
    title: Évènements
    level: h2
    body: 'Il existe plusieurs type d''évènement. Voyons les plus courants:'
  -
    type: image
    image: /assets/articles/javascripts-events.jpeg
  -
    type: text
    title: Souris
    level: h3
    body: |
      - **click** se déclenche au clique gauche de la&nbsp;souris
      - **contextmenu** se déclenche au clique droit de la&nbsp;souris
      - **dblclick** se déclenche au double clique gauche de la&nbsp;souris
      - **mouseup** se déclenche lorsque le clique de la souris est&nbsp;relaché
      - **mouseover** se déclenche dès que la souris commence à survoler un&nbsp;élément
      - **mousemove** se déclenche à chaque fois que la souris bouge et qu'elle survole&nbsp;l'élément
      - **mouseout** se déclenche quand la souris arrête de survoler un&nbsp;élément
  -
    type: note
    intent: generic
    body: 'Notez que les évènement de souris sont aussi déclencher sur les appareils à écran tactiles qui non pas de&nbsp;souris.'
  -
    type: text
    title: Touche
    level: h3
    body: |
      Pour les appareils tacticles, _sans souris_, tel que les cellulaire et&nbsp;tablettes. 
      
      - **touchstart** se déclenche lors du contact initial avec&nbsp;l'écran 
      - **touchmove** se déclenche à chaque fois qu'un doigt se déplace sur&nbsp;l'écran
      - **touchend** se déclenche lorsque le contact avec l'écran est&nbsp;rompu
      - **touchcancel** se déclenche quand un contact doit être annulé. Par exemple, si trop de doigts touchent en même temps à&nbsp;l'écran.
  -
    type: text
    title: Clavier
    level: h3
    body: |
      - **keydown** se déclenche lorsqu'une touche est enfoncée
      - **keyup** se déclenche lorsqu'une touche est relâchée
      - **input** se déclenche lorsqu'une touche est enfoncée et que le contenu du champ associé est modifié
  -
    type: text
    title: Formulaire
    level: h3
    body: |
      - **focus** se déclenche lorsqu'un champs reçoit le focus. _Par exemple, quand on clique sur un champs, il obtient le focus_.
      - **blur** se déclenche quand un champs perd le focus.
      - **change** se déclenche si la valeur d'un champs est différent au moment de perdre le focus qu'au moment de l'obtenir
      - **submit** se déclenche lorsqu'un formulaire est soumis
  -
    type: text
    title: Fenêtre
    level: h3
    body: |
      - **load** la page et ses ressources ont fini de charger
      - **scroll** la fenêtre est défilée _(scrollé)_
      - **resize** la fenêtre est redimensionnée
  -
    type: note
    intent: good
    body: 'Pour une liste plus exaustive des **évènements**, je vous suggère de voir la liste officielle de [MDN 🦖](https://developer.mozilla.org/fr/docs/Web/Events)'
  -
    type: text
    title: removeEventListener
    level: h2
    body: 'Il est aussi possible de retirer un écouteur d''évènement grâce à `removeEventListener`.'
  -
    type: note
    intent: warning
    body: 'Pour ce faire, il est important que la fonction soit nommée et non anonyme.'
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
    body: 'Pour plus d''infos sur **removeEventListener**, je vous suggère cet article de Davide Rama sur [Medium.com ](https://medium.com/@DavideRama/removeeventlistener-and-anonymous-functions-ab9dbabd3e7b)'
fieldset: page-article
id: 3dd4f184-ae68-4ad7-a218-08b4c46998a4
