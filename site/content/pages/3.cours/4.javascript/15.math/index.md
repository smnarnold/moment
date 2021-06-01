body:
  -
    type: text
    body: 'L''objet `Math` de JavaScript permet de réaliser plusieurs opérations mathématiques. Voyons quelques-unes de ses méthodes les plus couramment&nbsp;utilisées.'
  -
    type: text
    title: 'Min & Max'
    body: |
      `Math.min()`permet de retourner le <u>plus petit</u> nombre parmi une sélection, tandis qu'à l'opposé, `Math.max()` permet de retourner le <u>plus&nbsp;grand</u>.
      
      Par exemple:
    level: h2
  -
    type: code
    lang: js
    body: |
      Math.min(60, -10, 110, 85); // -10 
      
      Math.max(60, -10, 110, 85); // 110
  -
    type: text
    body: |
      Ces deux fonctions sont souvent combinées afin de s'assurer qu'un nombre est compris dans un certain interval&nbsp;_(treshold)_.
      
      Par exemple, pour une note d'examen, un résultat pourrait être limité à 0 et 100. Ainsi, malgré de potentielles pénalités de retard ou bonus, la note d'un étudiant ne pourrait jamais être négative ou supérieure&nbsp;à&nbsp;100%.
  -
    type: code
    lang: js
    body: |
      let 🥺 = 60;
      🥺 = Math.max(0, 🥺); // 60
      🥺 = Math.min(🥺, 100); // 60
      
      let 😱 = -10;
      😱 = Math.max(0, 😱); // 0
      😱 = Math.min(😱, 100); // 0
      
      let 😎 = 110;
      😎 = Math.max(0, 😎); // 110
      😎 = Math.min(😎, 100); // 100
  -
    type: text
    body: 'ou l''équivalent sur une&nbsp;ligne:'
  -
    type: code
    lang: js
    body: |
      let 🤓 = 85;
      🤓 = Math.min(Math.max(0, 🤓), 100); // 85
  -
    type: note
    intent: warning
    body: 'Remarquez comme l''objet `Math` prend obligatoirement une&nbsp;majuscule.'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article MDN🦖 sur Math.min()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/min) et cet [article sur&nbsp;Math.max()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/max).'
  -
    type: text
    title: Round
    level: h2
    body: 'Permets d''arrondir un nombre à son entier le plus&nbsp;près.'
  -
    type: code
    lang: js
    body: |
      Math.round(75.2) // 75
      Math.round(75.5) // 76
      Math.round(75.7) // 76
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article MDN🦖 sur Math.round()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/round)'
  -
    type: text
    title: 'Floor & Ceil'
    level: h2
    body: 'La méthode `Math.floor()` arrondie <u>vers le bas</u>&thinsp;⬇️, tandis que la méthode `Math.ceil()` arrondie <u>vers le&nbsp;haut</u>&thinsp;⬆️.'
  -
    type: code
    lang: js
    body: |
      Math.floor(75.2) // 75
      Math.floor(75.5) // 75
      Math.floor(75.7) // 75
      
      Math.ceil(75.2) // 76
      Math.ceil(75.5) // 76
      Math.ceil(75.7) // 76
  -
    type: note
    intent: generic
    body: 'Rappelez vous qu''en anglais, le terme _"floor"_ veut dire plancher et _"ceiling"_&nbsp;plafond.'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article MDN🦖 sur Math.floor()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/floor) et cet [article sur&nbsp;Math.ceil()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/ceil)'
  -
    type: text
    title: Random
    level: h2
    body: |
      La méthode `Math.random()` retourne un nombre aléatoire entre 0 et&nbsp;1.
      
      Par exemple, cliquez sur le bouton 🔀 dans l'exemple ci-dessous pour obtenir un nombre aléatoire entre 0 et&nbsp;1.
  -
    type: codepen
    id: 31c76ecb1ba83b1bbd161eeea370d5ec
    theme: light
    ratio: 34
    tabs: 'js,result'
  -
    type: text
    body: |
      Ce nombre peut ensuite être utilisé comme ratio afin d'obtenir une valeur aléatoire entre 0️⃣ et un chiffre particulier.
      
      Par exemple, pour obtenir une valeur entre 0️⃣ et 🔟, il serait possible de&nbsp;faire:
  -
    type: codepen
    id: 96a4d1f5892ccc0995db1bed6faf301b
    theme: light
    ratio: 34
    tabs: 'js,result'
  -
    type: note
    intent: generic
    body: 'Il serait possible d''utiliser [Math.round()](#round) sur le résultat si les décimales ne sont pas&nbsp;désirées.'
  -
    type: note
    intent: exercice
    body: 'Pile ou face [codepen.io/smnarnold/pen/LYZBgoK](https://codepen.io/smnarnold/pen/LYZBgoK?editors=0010)'
  -
    type: note
    intent: exercice
    body: '🌻🍄⭐️🍂 [codepen.io/smnarnold/pen/jOrpRwj](https://codepen.io/smnarnold/pen/jOrpRwj?editors=0010)'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article MDN🦖 sur Math.random()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/random)'
  -
    type: text
    title: Trunc
    level: h2
    body: '`Math.trunc` retourne un nombre sans ses&nbsp;décimales.'
  -
    type: code
    lang: js
    body: |
      Math.trunc(75.2) // 75
      Math.trunc(75.5) // 75
      Math.trunc(75.7) // 75
  -
    type: note
    intent: warning
    body: 'Cette méthode est identique à [Math.floor](#floor). Cependant, son nom permet parfois d''indiquer plus clairement le type de traitement&nbsp;souhaité.'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article MDN🦖 sur Math.trunc()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/trunc)'
is_hidden: false
title: Math
subtitle: 'min, max, round, floor, ceil, random, trunc'
template: page-article
color_scheme: auto
preview_color: '#000'
fieldset: page-article
id: c324134d-af54-4b8e-8e96-ef535f618128
