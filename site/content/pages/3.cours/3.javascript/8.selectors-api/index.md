title: 'Selectors API'
template: page-article
color_scheme: auto
body:
  -
    type: text
    level: h2
    body: 'L''API Selectors permet d''accéder aux différents éléments d''une page&nbsp;HTML.'
  -
    type: text
    title: 'querySelector vs querySelectorAll'
    level: h2
    body: 'Ces méthodes permettent d''effectuer des requêtes afin d''accéder à un ou plusieurs éléments du DOM. Ces requêtes utilisent les mêmes sélecteurs que ceux utilisés en&nbsp;CSS.'
  -
    type: text
    title: querySelector
    level: h3
    body: 'Retourne le premier élément correspondant au sélecteur ou encore `null` si aucun élément n''a pu être&nbsp;trouvé.'
  -
    type: code
    lang: js
    body: 'document.querySelector(''.exemple'');'
  -
    type: text
    body: |
      Décortiquons l'exemple précédent:
      
      - `document` indique où effectuer la recherche _(dans ce cas, dans l'ensemble du&nbsp;document)_.
      - `querySelector()` type de requête indiquant qu'un seul élément devra être&nbsp;retourné.
      - `.exemple` sélecteur indiquant que l'élément recherché possède la classe&nbsp;exemple.
  -
    type: note
    intent: exercice
    body: 'Queen&thinsp;👑 [codepen.io/smnarnold/pen/RwbXOvw](https://codepen.io/smnarnold/pen/RwbXOvw?editors=0010)'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article sur MDN🦖 à propos de querySelector()](https://developer.mozilla.org/fr/docs/Web/API/Element/querySelector).'
  -
    type: text
    title: querySelectorAll
    level: h3
    body: 'Retourne tous les éléments correspondant au sélecteur, dans l''ordre qu''ils apparaissent, sous forme de [NodeList](https://developer.mozilla.org/fr/docs/Web/API/NodeList) _(similaire à un tableau)_.'
  -
    type: code
    lang: js
    body: 'const exemplesList = document.querySelectorAll(''.exemple'');'
  -
    type: text
    body: |
      Dans cet exemple, nous avons une variable `const exemplesList` contenant le résultat de la requête. Examinons ce qui constitue cette&nbsp;requête.
      
      - `document` indique où effectuer la recherche _(dans ce cas, dans l'ensemble du&nbsp;document)_.
      - `querySelectorAll()` type de requête indiquant qu'un tableau d'éléments devra être&nbsp;retourné.
      - `.exemple` sélecteur indiquant que l'élément recherché possède la classe&nbsp;exemple.
  -
    type: note
    intent: warning
    body: 'Si aucun élément n''est trouvé, un NodeList vide sera&nbsp;retourné.'
  -
    type: text
    body: 'Pour accéder aux différents éléments retournés, nous utiliserons ensuite une boucle. Par exemple, une boucle [forEach](./boucles#foreach):'
  -
    type: code
    lang: js
    body: |
      exemplesList.forEach(element => {
        console.log(element);
      });
  -
    type: note
    intent: exercice
    body: 'Schtroumpfs&thinsp;💙 [codepen.io/smnarnold/pen/vYYBRMj](https://codepen.io/smnarnold/pen/vYYBRMj?editors=0010)'
  -
    type: note
    intent: exercice
    body: 'Star Wars&thinsp;⭐ [codepen.io/smnarnold/pen/jOrwdqr](https://codepen.io/smnarnold/pen/jOrwdqr?editors=0010)'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article sur MDN🦖 à propos de querySelectorAll()](https://developer.mozilla.org/fr/docs/Web/API/Document/querySelectorAll).'
fieldset: page-article
id: 5b3c8a95-bbe1-496e-bd71-3b59f2224685
