title: 'Array avancé'
template: page-article
color_scheme: auto
body:
  -
    type: text
    body: 'L''objet global Array, grâce à ses multiples méthodes, permet de manipuler les tableaux _(array)_. Dans cet article, nous allons regarder les manipulations un peu plus avancées les plus&nbsp;populaires.'
  -
    type: text
    title: Some
    level: h2
    body: 'Retourne un booléen _(true/false)_ indiquant si <u>au moins un élément</u> dans un tableau respecte une&nbsp;condition.'
  -
    type: text
    title: 'Some - Tableau de base'
    level: h3
    body: 'Par exemple, pour savoir si au moins un des films de la saga Infinity a franchi X&nbsp;millions de&nbsp;profits:'
  -
    type: code
    lang: js
    body: |
      const moviesList = [623.3, 678.8, 459];
      
      moviesList.some(movie => movie > 500);
      // true
      
      moviesList.some(movie => movie > 700);
      // false
  -
    type: text
    title: 'Some - Tableau d''objets'
    level: h3
    body: 'Reprenons l''exemple précédent, mais sous forme d''un tableau&nbsp;d''objets:'
  -
    type: code
    lang: js
    body: |
      const moviesList = [
        {
          name: "The Avengers",
          $: 623.3
        },
        {
          name: "Infinity War",
          $: 678.8
        },
        {
          name: "Age of Ultron",
          $: 459
        },
      ];
      
      moviesList.some(movie => movie.$ > 500);
      // true
      
      moviesList.some(movie => movie.$ > 700);
      // false
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article de MDN🦖 sur&nbsp;some()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/some).'
  -
    type: text
    title: Every
    level: h2
    body: 'Retourne un booléen _(true/false)_ indiquant si <u>tous les éléments</u> dans un tableau respectent une&nbsp;condition.'
  -
    type: text
    title: 'Every - Tableau de base'
    level: h3
    body: 'Par exemple, pour savoir si tous les films de la saga Infinity ont franchi X&nbsp;millions de&nbsp;profits:'
  -
    type: code
    lang: js
    body: |
      const moviesList = [623.3, 678.8, 459];
      
      moviesList.every(movie => movie > 500);
      // false
      
      moviesList.every(movie => movie > 400);
      // true
  -
    type: text
    title: 'Every - Tableau d''objets'
    level: h3
    body: 'Reprenons l''exemple précédent, mais sous forme d''un tableau&nbsp;d''objets:'
  -
    type: code
    lang: js
    body: |
      const moviesList = [
        {
          name: "The Avengers",
          $: 623.3
        },
        {
          name: "Infinity War",
          $: 678.8
        },
        {
          name: "Age of Ultron",
          $: 459
        },
      ];
      
      moviesList.every(movie => movie.$ > 500);
      // false
      
      moviesList.every(movie => movie.$ > 400);
      // true
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article de MDN🦖 sur&nbsp;every()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/every).'
  -
    type: text
    title: Filter
    level: h2
    body: 'Permets de filtrer un tableau afin d''en retourner un nouveau tableau contenant uniquement les éléments respectant une&nbsp;condition.'
  -
    type: text
    title: 'Filter - Tableau de base'
    level: h3
    body: 'Par exemple, pour obtenir un tableau des films inclut dans la saga Infinity se terminant avant 2020 uniquement:'
  -
    type: code
    lang: js
    body: |
      const moviesList = [2012, 2022, 2018, 2015];
      
      moviesList.filter(movie => movie < 2020);
      // [2012, 2018, 2015]
  -
    type: text
    title: 'Filter - Tableau d''objets'
    level: h3
    body: 'Par exemple, pour obtenir un tableau des films ayant dépassé la barre des 500&nbsp;millions:'
  -
    type: code
    lang: js
    body: |
      const moviesList = [
        {
          name: "The Avengers",
          $: 623.3
        },
        {
          name: "Infinity War",
          $: 678.8
        },
        {
          name: "Age of Ultron",
          $: 459
        },
      ];
      
      moviesList.filter(movie => movie.$ > 500);
      // [{name:"The Avengers", $:623.3},{name:"Infinity War", $:678.8}]
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article de MDN🦖 sur&nbsp;filter()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/filter).'
  -
    type: text
    title: Map
    level: h2
    body: 'Permets de créer un nouveau tableau à partir d''un tableau existant, tout en lui apportant des&nbsp;modifications.'
  -
    type: text
    title: 'Map - Tableau de base'
    level: h3
    body: 'Par exemple, si le coût de production de chaque film était de 200&nbsp;millions et que nous désirions obtenir le profit net de chaque film, soit: profits bruts - coûts de&nbsp;production:'
  -
    type: code
    lang: js
    body: |
      const moviesList = [623.3, 678.8, 459];
      
      moviesList.map(movie => movie - 200);
      // [423.3, 478.8, 259]
  -
    type: text
    title: 'Map - Tableau d''objets'
    level: h3
    body: 'Reprenons l''exemple précédent, mais sous forme d''un tableau&nbsp;d''objets:'
  -
    type: code
    lang: js
    body: |
      const moviesList = [
        {
          name: "The Avengers",
          $: 623.3
        },
        {
          name: "Infinity War",
          $: 678.8
        },
        {
          name: "Age of Ultron",
          $: 459
        },
      ];
      
      moviesList.map(movie => movie.$ - 200);
      // [423.3, 478.8, 259]
  -
    type: text
    body: |
      `map` effectue une opération sur chaque entrée du tableau et retourne le résultat qui est ensuite inséré dans le nouveau&nbsp;tableau.
      
      Dans l'exemple précédent, `map` boucle sur chaque film et retourne le résultat de la propriété `$` moins `200` qui est ensuite inséré dans le nouveau&nbsp;tableau.
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article de MDN🦖 sur&nbsp;reduce()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/map).'
  -
    type: text
    title: Reduce
    level: h2
    body: 'Permets de cumuler la valeur de plusieurs éléments d''un&nbsp;tableau.'
  -
    type: text
    title: 'Reduce - Tableau de base'
    level: h3
    body: 'Par exemple, pour obtenir le total des profits engendrés par les films de la saga&nbsp;Infinity&thinsp;💰:'
  -
    type: code
    lang: js
    body: |
      const moviesList = [623.3, 678.8, 459];
      
      moviesList.reduce((total, movie) => total + movie);
      // 1761.1
  -
    type: text
    title: 'Reduce - Tableau d''objets'
    level: h3
    body: 'Reprenons l''exemple précédent, mais sous forme d''un tableau&nbsp;d''objets:'
  -
    type: code
    lang: js
    body: |
      const moviesList = [
        {
          name: "The Avengers",
          $: 623.3
        },
        {
          name: "Infinity War",
          $: 678.8
        },
        {
          name: "Age of Ultron",
          $: 459
        },
      ];
      
      moviesList.reduce((total, movie) => total + movie.$, 0);
      // 1761.1
  -
    type: text
    body: |
      Remarquez, le paramètre `0`. Ce paramètre correspond à la valeur de départ donnée à&nbsp;total. 
      
      `Reduce` additionne chacun des éléments du tableau un à&nbsp;un, en partant de cette valeur pour finalement arrivé au total de&nbsp;`1761.1`
  -
    type: code
    lang: js
    body: |
      0 + 623.3 // 623.3
      623.3 + 678.8 // 1302.1
      1302.1 + 459 // 1761.1
  -
    type: text
    body: |
      Si désiré, il aurait été possible de débuter avec une autre valeur que&nbsp;`0`. 
      
      Par exemple: `1040` si les profits générés par la série Iron&nbsp;Man devaient être inclus, ce qui aurait donné&nbsp;`2801.1`&thinsp;💰
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article de MDN🦖 sur&nbsp;reduce()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/reduce).'
fieldset: page-article
id: 64ea8485-f0e7-4dbf-a52d-cbccfe8f3a07
