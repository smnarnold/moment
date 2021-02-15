body:
  -
    type: text
    body: 'L''objet global Array, grâce à ses multiples méthodes, permet de manipuler les tableaux _(array)_. Dans cet article, nous allons regarder les manipulations de bases les plus&nbsp;courantes.'
  -
    type: text
    title: isArray
    level: h2
    body: |
      Retourne un booléen _(true/false)_ indiquant si l'élément spécifié est bel et bien un&nbsp;tableau.
      
      Par exemple:
  -
    type: code
    lang: js
    body: |
      const yearsList = [1990, 2010, 1980, 2020];
      Array.isArray(yearsList);
      // true
      
      const ex1 = "Chaine de caractère";
      Array.isArray(ex1);
      // false
      
      const ex2 = 2010;
      Array.isArray(ex2);
      // false
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article de MDN🦖 sur&nbsp;isArray()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/isArray).'
  -
    type: text
    title: Includes
    level: h2
    body: |
      Retourne un booléan _(true/false)_ indiquant si un élément est présent ou non dans un&nbsp;tableau.
      
      Par exemple:
  -
    type: code
    lang: js
    body: |
      const yearsList = [1990, 2010, 1980, 2020];
      
      yearsList.includes(2010);
      // true
      
      yearsList.includes(1995);
      // false
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article de MDN🦖 sur&nbsp;includes()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/includes).'
  -
    type: text
    title: Find
    level: h2
    body: |
      Retourne le premier élément dans le tableau correspondant à une condition spécifique. Si aucun élément n'est trouvé, `undefined` sera&nbsp;retourné.
      
      Par exemple:
  -
    type: code
    lang: js
    body: |
      const yearsList = [1990, 2010, 1980, 2020];
      
      yearsList.find(year => year > 2000);
      // 2010
      
      yearsList.find(year => year > 2020);
      // undefined
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article de MDN🦖 sur&nbsp;find()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/find).'
  -
    type: text
    title: FindIndex
    level: h2
    body: |
      Retourne la position du premier élément dans le tableau correspondant à une condition spécifique. Si aucun élément n'est trouvé, `-1` sera&nbsp;retourné.
      
      Par exemple:
  -
    type: code
    lang: js
    body: |
      const yearsList = [1990, 2010, 1980, 2020];
      
      yearsList.findIndex(1990);
      // 0
      
      yearsList.findIndex(2010);
      // 1
      
      yearsList.findIndex(1995);
      // -1
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article de MDN🦖 sur&nbsp;findIndex()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/findIndex).'
  -
    type: text
    title: Sort
    level: h2
    body: |
      Trie les éléments d'un tableau en ordre&nbsp;croissant.
      
      Par exemple:
  -
    type: code
    lang: js
    body: |
      const yearsList = [1990, 2010, 1980, 2020];
      yearsList.sort();
      // [1980, 1990, 2010, 2020];
  -
    type: text
    body: |
      Si désiré, il est aussi possible de passer en paramètre une fonction à `sort()` afin de changer la méthode de&nbsp;triage.
      
      Par exemple, pour trier en ordre décroissant, il serait possible de&nbsp;faire:
  -
    type: code
    lang: js
    body: |
      const yearsList = [1990, 2010, 1980, 2020];
      
      yearsList.sort((a, b) => b - a);
      // [2020, 2010, 1990, 1980]
  -
    type: note
    intent: exercice
    body: 'Pizza&thinsp;🍕🐟 [codepen.io/smnarnold/pen/MWeqgvo](https://codepen.io/smnarnold/pen/MWeqgvo?editors=0010)'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article de MDN🦖 sur&nbsp;sort()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/sort).'
  -
    type: text
    title: Shift
    level: h2
    body: |
      Retire le premier élément du tableau et le&nbsp;retourne.
      
      Par exemple:
  -
    type: code
    lang: js
    body: |
      const yearsList = [1990, 2010, 1980, 2020];
      
      const firstYear = yearsList.shift();
      
      console.log(firstYear) // 1990
      console.log(yearsList) // [2010, 1980, 2020]
  -
    type: note
    intent: warning
    body: 'Si le tableau est vide, `shift()` retournera&nbsp;`undefined`'
  -
    type: note
    intent: exercice
    body: 'Pizza&thinsp;🍕🥓 [codepen.io/smnarnold/pen/MWeqgrv](https://codepen.io/smnarnold/pen/MWeqgrv?editors=0010)'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article de MDN🦖 sur&nbsp;shift()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/shift).'
  -
    type: text
    title: Pop
    level: h2
    body: |
      À l'opposé de [Shift](#shift), `pop()` retire le dernier élément du tableau et le&nbsp;retourne.
      
      Par exemple:
  -
    type: code
    lang: js
    body: |
      const yearsList = [1990, 2010, 1980, 2020];
      
      const lastYear = yearsList.pop();
      
      console.log(lastYear) // 2020
      console.log(yearsList) // [1990, 2010, 1980]
  -
    type: note
    intent: warning
    body: 'Si le tableau est vide, `pop()` retournera&nbsp;`undefined`'
  -
    type: note
    intent: exercice
    body: 'Pizza&thinsp;🍕⚜️ [codepen.io/smnarnold/pen/MWeqgep](https://codepen.io/smnarnold/pen/MWeqgep?editors=0010)'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article de MDN🦖 sur&nbsp;pop()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/pop).'
  -
    type: text
    title: Slice
    level: h2
    body: |
      Retourne un nouveau tableau constitué des éléments se trouvant entre un index de départ et un index de fin _(optionnel)_.
      
      Par exemple, si seulement un index de départ est spécifié, le nouveau tableau sera constitué de l'élément à cet index et de tous ceux le&nbsp;suivant:
  -
    type: code
    lang: js
    body: |
      const yearsList = [1990, 2010, 1980, 2020];
      
      yearsList.slice(2);
      // [1980, 2020]
  -
    type: text
    body: 'Si l''index de départ et de fin est spécifié, le nouveau tableau sera constitué des éléments entre ces deux&nbsp;index:'
  -
    type: code
    lang: js
    body: |
      const yearsList = [1990, 2010, 1980, 2020];
      
      yearsList.slice(1, 3);
      // [2010, 1980]
  -
    type: note
    intent: exercice
    body: 'Pizza&thinsp;🍕🍄 [codepen.io/smnarnold/pen/pobOzeR](https://codepen.io/smnarnold/pen/pobOzeR?editors=0010)'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article de MDN🦖 sur&nbsp;slice()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/slice).'
  -
    type: text
    title: Concat
    level: h2
    body: |
      Retourne un nouveau tableau constitué des éléments d'un premier tableau et de ceux d'un&nbsp;deuxième.
      
      Par exemple:
  -
    type: code
    lang: js
    body: |
      const yearsList = [1990, 2010, 1980, 2020];
      const yearsExtra = [2000, 2030];
      
      yearsList.concat(yearsExtra);
      // [1990, 2010, 1980, 2020, 2000, 2030]
  -
    type: note
    intent: exercice
    body: 'Pizza&thinsp;🍕🍍 [codepen.io/smnarnold/pen/OJXwKeY](https://codepen.io/smnarnold/pen/OJXwKeY?editors=0010)'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article de MDN🦖 sur&nbsp;concat()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/concat).'
title: Array
template: page-article
color_scheme: auto
preview_color: '#00ccdd'
preview_abbr: '[&nbsp;&nbsp;]'
fieldset: page-article
id: fcae7bf1-0b85-4e21-a1c3-6d034863660f
