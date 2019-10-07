title: 'Selectors API'
template: page-article
color_scheme: auto
body:
  -
    type: text
    level: h2
    body: 'L''API Selectors permet d''accèder aux différents éléments d''une page HTML.'
  -
    type: text
    title: 'querySelectorAll vs querySelector'
    level: h2
    body: 'C''est deux méthodes permettent de faire une requête basée sur des sélecteurs CSS.'
  -
    type: text
    title: querySelectorAll
    level: h3
    body: 'Retourne tous les éléments correspondant au sélecteur, dans l''ordre qu''ils apparaissent, sous forme de [NodeList](https://developer.mozilla.org/fr/docs/Web/API/NodeList) _(similaire à un tableau)_.'
  -
    type: code
    lang: js
    body: 'var exemples = document.querySelectorAll(''.exemple'');'
  -
    type: text
    body: |
      Dans cet exemple, nous avons une variable `var exemples` dans laquelle nous stockons le résultat de notre notre requête qui se divise à son tour ainsi: 
      
      - `document` indiquant le contexte _(incluant ses enfants)_ à partir du quel commencer la recherche. 
      - `querySelectorAll` le type de requête que nous désirons effectuer.
      - `('.exemple')` le selecteur indiquant les éléments que nous désirons voir nous être retournés.
  -
    type: note
    intent: warning
    body: 'Si aucun élément n''est trouvé, un NodeList vide sera retourné.'
  -
    type: text
    body: 'Pour accèder aux différents éléments retournés, nous utiliserons ensuite une boucle. Par exemple une boucle [forEach](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/forEach):'
  -
    type: code
    lang: js
    body: |
      exemples.forEach(element => {
        console.log(element);
      });
  -
    type: note
    intent: exercice
    body: '[https://codepen.io/smnarnold/pen/vYYBRMj](https://codepen.io/smnarnold/pen/vYYBRMj)'
  -
    type: text
    title: querySelector
    level: h3
    body: 'Retourne directement le premier élément correspondant au sélecteur ou encore `null` si aucun élément n''a pu être trouvé.'
  -
    type: code
    lang: js
    body: 'document.querySelector(''.exemple'');'
  -
    type: note
    intent: exercice
    body: '[https://codepen.io/smnarnold/pen/RwbXOvw](https://codepen.io/smnarnold/pen/RwbXOvw)'
fieldset: page-article
id: 5b3c8a95-bbe1-496e-bd71-3b59f2224685
