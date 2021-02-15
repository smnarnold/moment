title: 'SetTimeout & SetInterval'
template: page-article
color_scheme: auto
body:
  -
    type: text
    body: 'Le code JavaScript s''exécute normalement dès qu''il lu par le navigateur. Cependant, il est parfois préférable de retarder son exécution, d''où l''utilité des fonctions de minuterie&thinsp;⏲️ `setTimeout()` et&nbsp;`setInterval()`.'
  -
    type: text
    title: setTimeout
    level: h2
    body: |
      La fonction `setTimeout()` est utilisée afin de déclencher une fonction à un moment précis spécifié en&nbsp;millisecondes. 
      
      La fonction prend deux&nbsp;paramètres:
      
      1. La fonction à&nbsp;exécuter.
      2. Le délai à respecter avant d'exécuter ladite&nbsp;fonction.
      
      Par exemple, pour afficher ⏰ dans la console après 1 seconde, il serait possible&nbsp;d'écrire:
  -
    type: code
    lang: js
    body: |
      const afficherMsg = function() {
        console.log("⏰");
      }
      
      setTimeout(afficherMsg, 1000); // 1s = 1000ms
  -
    type: text
    body: 'ou l''équivalent avec une fonction&nbsp;anonyme:'
  -
    type: code
    lang: js
    body: |
      setTimeout(function() {
        console.log("⏰");
      }, 1000); // 1s = 1000ms
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article MDN🦖 à propos de&nbsp;setTimeout()](https://developer.mozilla.org/fr/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout).'
  -
    type: text
    title: clearTimeout
    level: h3
    body: 'La fonction `setTimeout()` retourne une référence d''elle-même. Il est donc possible de stocker cette référence dans une variable afin d''y faire référence plus&nbsp;tard.'
  -
    type: code
    lang: js
    body: 'const timer = setTimeout(afficherMsg, 1000);'
  -
    type: text
    body: 'Cette option est particulièrement utile afin d''annuler le déclenchement d''un setTimeout via&nbsp;`clearTimeout()`.'
  -
    type: code
    lang: html
    body: clearTimeout(timer);
  -
    type: text
    body: |
      Par exemple, sur un site de billeterie un usager à un temps limite _(5&nbsp;mins)_ afin de remplir un formulaire confirmant l'achat de ses billets&thinsp;🎟️ . Si le temps limite est dépassé, l'usager est retourné à la page de sélection de&nbsp;billets. Si l'usager soumet son formulaire dans les temps, l'action est annulée afin qu'il reste sur la page&nbsp;courante.
      
      Un `setTimeout()` pourrait donc être utilisé afin de retourner l'usager sur la page de sélection de billets après un certain temps et si l'usager soumet son formulaire un `clearTimeout()` pourrait annuler cette&nbsp;action.
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article MDN🦖 à propos de&nbsp;clearTimeout()](https://developer.mozilla.org/fr/docs/Web/API/WindowOrWorkerGlobalScope/clearTimeout).'
  -
    type: text
    title: SetInterval
    level: h2
    body: |
      La fonction `setInterval()` ressemble à [SetTimeout](#settimeout) puisqu'elle appelle aussi une fonction après un certain laps de temps. Mais contrairement à celle-ci, plutôt que de l'appeler une seule fois, elle l'appelle à interval&nbsp;régulier.
      
      La fonction prend deux&nbsp;paramètres:
      
      1. La fonction à&nbsp;exécuter.
      2. L'interval à respecter entre chaque exécution de ladite&nbsp;fonction.
      
      Par exemple, pour afficher ⏱️ dans la console toutes les 5 secondes, il serait possible&nbsp;d'écrire:
  -
    type: code
    lang: js
    body: |
      const afficherMsg = function() {
        console.log("⏱️");
      }
      
      setInterval(afficherMsg, 5000); // 5s = 5000ms
  -
    type: text
    body: 'ou l''équivalent avec une fonction anonyme:'
  -
    type: code
    lang: js
    body: |
      setInterval(function() {
        console.log("⏱️");
      }, 5000); // 5s = 5000ms
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article MDN🦖 à propos de&nbsp;setInterval()](https://developer.mozilla.org/fr/docs/Web/API/WindowOrWorkerGlobalScope/setInterval).'
  -
    type: text
    title: ClearInterval
    level: h3
    body: 'La fonction `setInterval()` retourne une référence d''elle-même. Il est donc possible de stocker cette référence dans une variable afin d''y faire référence plus&nbsp;tard.'
  -
    type: code
    lang: js
    body: 'const timer = setInterval(afficherMsg, 5000);'
  -
    type: text
    body: 'Cette option est utile afin de mettre un terme aux répétitions déclenchées par un setInterval via&nbsp;`clearInterval()`.'
  -
    type: code
    lang: js
    body: clearInterval(timer);
  -
    type: note
    intent: exercice
    body: 'Chronomètre&thinsp;🏃‍♂️ [codepen.io/smnarnold/pen/bGejyWE](https://codepen.io/smnarnold/pen/bGejyWE?editors=0010)'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article MDN🦖 à propos de&nbsp;clearInterval()](https://developer.mozilla.org/fr/docs/Web/API/WindowTimers/clearInterval).'
fieldset: page-article
id: 8f0f94fb-2af5-4ecb-9bd8-63645ceb291d
