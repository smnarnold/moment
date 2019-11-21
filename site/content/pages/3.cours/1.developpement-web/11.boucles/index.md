title: Boucles
template: page-article
color_scheme: auto
body:
  -
    type: text
    body: |
      Les boucles 🔁 nous permettent de répéter une action plusieurs&nbsp;fois.
      
      Par exemple, si je désire écrire dans la console les chiffres de 1 à 10, je pourrais écrire chaque ligne à la main ✍️ comme&nbsp;suit:
  -
    type: code
    lang: js
    body: |
      console.log(1);
      console.log(2);
      console.log(3);
      console.log(4);
      ...
      console.log(10);
  -
    type: text
    body: 'Ou je pourrais utiliser une boucle'
  -
    type: code
    lang: js
    body: |
      for(var i=0; i<10; i++) {
        console.log(i + 1);
      }
  -
    type: note
    intent: warning
    body: 'Puisque l''index commence à 0 et se termine à 9, j''y additionne **+1** avant de l''inscrire dans la console.'
  -
    type: text
    title: for
    level: h2
    body: |
      Dans l'exemple précédent, nous avons vu une boucle for en action.
      
      - `for` déclare la boucle.
      - `var i=0` initialise l'index de part et le stock dans une&nbsp;variable. 
      - `i<10` condition validant si l'index est plus petit que la limite que nous désirons&nbsp;atteindre.
      - `i++` incrémente l'index, si la précédente condition est&nbsp;vraie.
      
      Plus concrètement, nous pourrions utiliser une boucle pour itérer sur chacun des éléments d'une collection et leurs ajouter un [écouteur&nbsp;d'évènement](https://smnarnold.com/cours/developpement-web/addeventlistener).
      
      **Par exemple:**
  -
    type: code
    lang: js
    body: |
      var elements = document.querySelectorAll('.element');
      
      for(var i=0; i<elements.length; i++) {
        elements[i].addEventListener('click', function() { ... })
      }
  -
    type: text
    body: |
      Dans cet exemple, la limite à atteindre correspond au nombre d'éléments dans notre collection `elements.length`. 
      
      Puisque la variable `i` est incrémenté par la boucle à chaque tour, nous accédons à chaque élément de la collection via sa position entre crochets&nbsp;`elements[i]`.
  -
    type: note
    intent: exercice
    body: '[https://codepen.io/smnarnold/pen/qBBBmwW](https://codepen.io/smnarnold/pen/qBBBmwW)'
  -
    type: text
    title: forEach
    level: h2
    body: 'La boucle `forEach` nous permet de simplifier le tout en assumant que que chaque élément sera accédé. Il est donc possible de refaire la précédente boucle ainsi:'
  -
    type: code
    lang: js
    body: |
      var elements = document.querySelectorAll('.element');
      
      elements.forEach(function(element)) {
        element.addEventListener('click', function() { ... })
      }
  -
    type: text
    body: |
      - `elements` indique la collection à laquelle nous souhaitons&nbsp;accéder.
      - `forEach` déclare que nous souhaitons accéder à chaque élément de la dite&nbsp;collection.
      - `function(element) { ... }` déclare une fonction callback avec un paramètre correspondant au nom que nous aimerions donner à l'item courant dans la&nbsp;boucle _(ce nom est arbitraire)_.
  -
    type: note
    intent: exercice
    body: '[https://codepen.io/smnarnold/pen/jOOOQvd](https://codepen.io/smnarnold/pen/jOOOQvd)'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus sur **forEach**, voir [MDN 🦖](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/forEach)'
fieldset: page-article
id: effab56c-b3bd-45b0-8533-e639b8a88dc4
