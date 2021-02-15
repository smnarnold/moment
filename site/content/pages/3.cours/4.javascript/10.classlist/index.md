body:
  -
    type: text
    body: |
      Permet d'accéder et de manipuler les classes d'un&nbsp;élément.
      
      Afin d'alléger les exemples à venir, prenons pour acquis qu'une variable `element` est populée pour chaque&nbsp;exemple.
  -
    type: code
    lang: js
    body: 'const element = document.querySelector(''.element'');'
  -
    type: text
    title: add
    level: h2
    body: 'Permet d''ajouter une ou plusieurs classes comme&nbsp;suit:'
  -
    type: code
    lang: js
    body: |
      // Ajoute une classe
      element.classList.add('maClasse')
      
      // Ajoute deux classes
      element.classList.add('maClasse1', 'maClasse2')
  -
    type: note
    intent: exercice
    body: 'Artistes mystère&thinsp;🧑‍🎤 [codepen.io/smnarnold/pen/MWWWZdp](https://codepen.io/smnarnold/pen/MWWWZdp?editors=0010)'
  -
    type: text
    title: remove
    level: h2
    body: 'À l''opposé d''[add](#add), `remove` retire une ou plusieurs classes comme&nbsp;suit:'
  -
    type: code
    lang: js
    body: |
      // Retire une classe
      element.classList.remove('maClasse');
      
      // Retire deux classes
      element.classList.remove('maClasse1', 'maClasse2');
  -
    type: text
    title: contains
    level: h2
    body: 'Retourne un booléen _(true/false)_ validant si une classe est présente ou non sur un&nbsp;élément.'
  -
    type: code
    lang: js
    body: |
      element.classList.contains('element');
      // true
      
      element.classList.contains('gluten');
      // false
  -
    type: text
    title: toggle
    level: h2
    body: 'Retire la classe si elle est déjà présente et l''ajoute si elle ne l''est&nbsp;pas.'
  -
    type: code
    lang: js
    body: 'element.classList.toggle(''element'');'
  -
    type: text
    body: 'Elle permet donc de simplifier le scénario&nbsp;suivant:'
  -
    type: code
    lang: js
    body: |
      if (element.classList.contains('element')) {
        element.classList.remove('element');
      } else {
        element.classList.add('element');
      }
  -
    type: text
    body: |
      `classList.toggle` accepte aussi un deuxième paramètre forçant l'ajout ou le retrait de la&nbsp;classe. 
      
      Par exemple:
  -
    type: code
    lang: js
    body: |
      // Force l'ajout la classe
      element.classList.toggle('element', true); 
      
      // Force le retrait de la classe
      element.classList.toggle('element', false);
  -
    type: note
    intent: exercice
    body: '👍 ou 👎 [codepen.io/smnarnold/pen/pobLbRo](https://codepen.io/smnarnold/pen/pobLbRo?editors=0010)'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article MDN🦖 sur&nbsp;classList](https://developer.mozilla.org/fr/docs/Web/API/Element/classList).'
is_hidden: false
title: ClassList
template: page-article
color_scheme: auto
preview_color: '#000'
fieldset: page-article
id: ec427edb-f6d3-4cfe-9266-d79343104ca7
