body:
  -
    type: text
    body: |
      Les boucles 🔁 nous permettent de répéter une action plusieurs&nbsp;fois.
      
      Par exemple, pour écrire dans la console les chiffres 2, 4, 6, 8 il est possible d'écrire chaque ligne à la main ✍️ comme&nbsp;suit:
  -
    type: code
    lang: js
    body: |
      console.log(2);
      console.log(4);
      console.log(6);
      console.log(8);
  -
    type: text
    body: 'ou d''utiliser une&nbsp;boucle:'
  -
    type: code
    lang: js
    body: |
      for (let index = 2; index < 9; index += 2) {
        console.log(index);
      }
      
      // 2
      // 4
      // 6
      // 8
  -
    type: text
    title: for
    level: h2
    body: |
      La boucle dans l'exemple précédent est appelée boucle&nbsp;`for()`. Voici ce qui constitue son anatomie.
      
      - `for` déclare la&nbsp;boucle.
      - `let index = 2` initialise une variable servant de compteur. _(cette variable n'est initialisée qu'une seule&nbsp;fois)_
      - `index < 9` cette condition est validée au début de chaque itération de la boucle. Si elle retourne vraie, la boucle se&nbsp;répète.
      - `index += 2` mise à jour de la variable servant de compteur. _(Effectué <u>avant</u> la validation de la condition)_.
  -
    type: image
  -
    type: codepen
    id: ExyMPMr
    theme: light
    ratio: 34
    custom_ratio: '37'
    tabs: chromeless
  -
    type: text
    title: 'For & Tableau'
    level: h3
    body: 'La boucle `for()` peut être utilisée pour boucler sur les éléments d''un&nbsp;tableau:'
  -
    type: code
    lang: js
    body: |
      const employesList = ["Pam", "Jim", "Dwight"];
      
      for (let index = 0; index < employesList.length; index++) {
        const qui = employesList[index];
        console.log(qui);
      }
      
      // Pam
      // Jim
      // Dwight
  -
    type: text
    body: |
      Dans cet exemple, la condition stipule de répéter la boucle tant que la variable `index`, servant de compteur, est inférieure au nombre d'éléments contenus dans le tableau `employesList.length`, soit:&nbsp;3. 
      
      Puisque la variable `index` est incrémentée par la boucle à chaque itération, chaque élément du tableau  est accessible par sa position entre crochets&nbsp;`employesList[index]`.
  -
    type: text
    title: 'For & Index'
    level: h3
    body: |
      Pour obtenir l'index de chaque éléments dans une boucle `for()`, il suffit de faire référence à la variable défini dans la boucle en&nbsp;soit.
      
      Par exemple:
  -
    type: code
    lang: js
    body: |
      const employesList = ["Pam", "Jim", "Dwight"];
      
      for (let index = 0; index < employesList.length; index++) {
        const qui = employesList[index];
        console.log(qui, index); // 👈 index ici
      }
      
      // Pam, 0
      // Jim, 1
      // Dwight, 2
  -
    type: text
    title: 'For & NodeList'
    level: h3
    body: 'Une boucle `for()` est aussi être utile pour itérer sur les éléments retournés par un [querySelectorAll](selectors-api#queryselectorall) _(NodeList)_, comme dans l''exemple&nbsp;suivant:'
  -
    type: code
    lang: js
    body: |
      const elements = document.querySelectorAll('.element');
      
      for (let index = 0; index < elements.length; i++) {
        const element = elements[index];
        console.log(element);
      }
  -
    type: note
    intent: exercice
    body: 'Sélectionner les attaquants du Canadien&thinsp;🏒 [codepen.io/smnarnold/pen/qBBBmwW](https://codepen.io/smnarnold/pen/qBBBmwW?editors=0010)'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article MDN🦖 portant sur&nbsp;for()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/for)'
  -
    type: text
    title: forEach
    level: h2
    body: 'La boucle `forEach()` permet de simplifier une boucle si <u>tous les éléments</u> doivent-être accédés. Il est donc possible de refaire les boucles `for()` précédentes&nbsp;ainsi:'
  -
    type: code
    lang: js
    body: |
      const employesList = ["Pam", "Jim", "Dwight"];
      
      employesList.forEach(qui => {
        console.log(qui);
      });
      
      // Pam
      // Jim
      // Dwight
  -
    type: text
    body: |
      - `employesList` tableau sur lequel l'itération doit avoir&nbsp;lieu.
      - `forEach` déclare que chaque élément du tableau doit-être&nbsp;accédé.
      - `employe => { ... }` déclare une fonction et un nom en paramètre _(employe)_ correspondant à l'item courant dans la&nbsp;boucle _(ce nom est&nbsp;arbitraire)_.
  -
    type: text
    title: 'forEach & Index'
    level: h3
    body: |
      Si désiré, il est possible de spécifier un deuxième paramètre dans une boucle `forEach()`. Ce deuxième paramètre correspond à l'index courant dans la&nbsp;boucle.
      
      Par exemple:
  -
    type: code
    lang: js
    body: |
      const employesList = ["Pam", "Jim", "Dwight"];
      
      employesList.forEach((qui, index) => {
        console.log(qui, index);
      });
      
      // Pam, 0
      // Jim, 1
      // Dwight, 2
  -
    type: text
    title: 'forEach & NodeList'
    level: h3
    body: 'Une boucle `forEach()` est aussi être utile pour itérer sur les éléments retournés par un [querySelectorAll](selectors-api#queryselectorall) _(NodeList)_, comme dans l''exemple&nbsp;suivant:'
  -
    type: code
    lang: js
    body: |
      const elements = document.querySelectorAll('.element');
      
      elements.forEach(element => {
        console.log(element)
      });
  -
    type: note
    intent: exercice
    body: 'Attrapez tous les Pokémons! [codepen.io/smnarnold/pen/jOOOQvd](https://codepen.io/smnarnold/pen/jOOOQvd?editors=0010)'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article MDN🦖 portant sur&nbsp;forEach()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/forEach)'
title: Boucles
subtitle: 'For & ForEach'
template: page-article
color_scheme: auto
description: |
  <p>Les boucles nous permettent de répéter une action plusieurs fois.
  </p>
preview_color: '#04c2b5'
preview_abbr: B
preview: /assets/img/preview-loop.jpg
fieldset: page-article
id: effab56c-b3bd-45b0-8533-e639b8a88dc4
