title: 'Pseudo-classes avancées'
template: page-article
color_scheme: auto
body:
  -
    type: text
    title: 'First-of-type & Last-of-type'
    level: h2
    body: |
      Comme leurs noms l'indiquent, `:first-of-type` et `:last-of-type` permettent de sélectionner le premier et dernier élément dans un groupe correspondant au sélecteur passé avant le&nbsp;`:`. 
      
      Contrairement à [first-child et last-child](pseudo-classes-intermediaires#first-child-last-child) qui ne sélectionnent uniquement un élément que s'il correspond au sélecteur ET qu'il est au premier ou dernier index de son groupe, `:first-of-type` et `:last-of-type` sélectionnent le premier élément correspondant au sélecteur à partir du début et à partir de la fin, même s'il n'est pas exactement au premier ou dernier&nbsp;index.
      
      Par exemple, la règle&nbsp;suivante:
  -
    type: code
    lang: css
    body: 'span:first-of-type { ... }'
  -
    type: text
    body: |
      Recherche dans un groupe le premier élément de type `span`. Si un élément est trouvé, il est&nbsp;sélectionné.
      
      Dans les exemples ci-dessous, tous les carrés ont la classe `.element`. Cependant, seuls les carrés 3, 4 et 5 sont des `<span>`, les autres étant des `<div>`. Donc à gauche `span:first-of-type` sélectionne le carré #3 et le rend bleu&thinsp;🟦, tandis qu'à droite `span:last-of-type` sélectionne le carré&nbsp;#5.
  -
    type: codepen
    id: abzVKLV
    theme: light
    ratio: 34
    tabs: result
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article MDN🦖 à propos de first-of-type](https://developer.mozilla.org/fr/docs/Web/CSS/:first-of-type), ainsi que cet [article à propos de last-of-type](https://developer.mozilla.org/fr/docs/Web/CSS/:last-of-type).'
  -
    type: text
    title: Only-of-type
    level: h2
    body: |
      Sélectionne un élément lorsqu'il est le seul de son type dans un groupe. Bref, lorsque l'élément est à la fois le `:first-of-type` et le `:last-of-type` de son&nbsp;groupe.
      
      Par exemple, la règle&nbsp;suivante:
  -
    type: code
    lang: css
    body: 'span.element:only-of-type { ... }'
  -
    type: text
    body: |
      Valide à l'intérieur de chaque groupe d'éléments si un seul enfant à la classe `.element` et est de type `span`. Si tel est le cas, l'élément est&nbsp;sélectionné.
      
      Dans l'exemple ci-dessous, tous les carrés ont la classe `.element`. Cependant, à gauche, plusieurs enfants _(3, 4 et 5)_ sont des `<span>`, donc aucun d'entre eux n'est sélectionné. Tandis qu'à droite, un seul enfant _(4)_ est un `<span>`, donc `:only-of-type` le sélectionne et le rend bleu&thinsp;🟦.
  -
    type: codepen
    id: KKgJzGa
    theme: light
    ratio: 34
    tabs: result
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article de MDN🦖 à propos d''only-of-type](https://developer.mozilla.org/fr/docs/Web/CSS/:only-of-type).'
  -
    type: text
    title: 'Nth-of-type & Nth-last-of-type'
    level: h2
    body: |
      Ces pseudo-classe fonctionnent sur le même principe que [nth-child](pseudo-classes-intermediaires#nth-child) et [nth-last-child](pseudo-classes-intermediaires#nth-last-child) à la différence que les sélections sont basées sur l'index des éléments correspondant au sélecteur et non à l'index réel de l'élément dans son&nbsp;groupe.
      
      Par exemple, la règle&nbsp;suivante:
  -
    type: code
    lang: css
    body: 'span.element:nth-of-type(2) { ... }'
  -
    type: text
    body: 'Sélectionne le carré #4 puisqu''il est le 2<sup>e</sup> élément de type span à avoir la classe&nbsp;`.element`.'
  -
    type: codepen
    id: gOwqMZW
    theme: light
    ratio: 34
    tabs: 'css,result'
  -
    type: text
    body: 'Les mots-clés `even` et `odd`, les occurrences `n` et les décalages `-/+` sont tous aussi disponibles avec ces&nbsp;pseudo-classes.'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article MDN🦖 à propos de nth-of-type](https://developer.mozilla.org/fr/docs/Web/CSS/:nth-of-type), ainsi que cet [article à propos de nth-last-of-type](https://developer.mozilla.org/fr/docs/Web/CSS/:nth-last-of-type).'
  -
    type: text
    title: Empty
    level: h2
    body: |
      Comme son nom l'indique, `:empty` permet de sélectionner les éléments vides s'ils correspondent au sélecteur passé avant le&nbsp;`:`.
      
      Par exemple, la règle&nbsp;suivante:
  -
    type: code
    lang: css
    body: '.element:empty { ... }'
  -
    type: text
    body: 'Valide si un ou plusieurs éléments avec la classe `.element` sont&nbsp;vides.'
  -
    type: note
    intent: warning
    body: 'Dès qu''un enfant est présent à l''intérieur de la balise, l''élément n''est plus vide. **Un simple espace compte comme un enfant**, même si rien n''est visible à&nbsp;l''écran.'
  -
    type: text
    body: 'Dans l''exemple ci-dessous, les carrés #2 et #5 n''ont plus de contenu. Cependant, le carré #2 contient toujours un espace. Il n''est donc pas sélectionné puisqu''il n''est pas à proprement parler vide. Le carré #5 ne contient absolument rien, ce dernier est donc&nbsp;sélectionné.'
  -
    type: codepen
    id: bGwzeyL
    theme: light
    ratio: 34
    tabs: 'html,result'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article MDN🦖 à propos de empty](https://developer.mozilla.org/fr/docs/Web/CSS/:empty).'
  -
    type: text
    title: Not
    level: h2
    body: |
      La pseudo-classe `:not()` permet de sélectionner tous les éléments ne correspondant pas au sélecteur passé entre&nbsp;parenthèses.
      
      Par exemple, la règle&nbsp;suivante:
  -
    type: code
    lang: css
    body: ':not(span)'
  -
    type: text
    body: |
      Sélectionne tous les éléments qui ne sont pas des&nbsp;`<span>`.
      
      Il est aussi possible de raffiner un sélecteur de base en lui ajoutant la pseudo-classe `:not()` pour ainsi ne garder que les éléments qui correspondent au premier sélecteur et non au&nbsp;deuxième.
      
      Par exemple, la règle&nbsp;suivante:
  -
    type: code
    lang: css
    body: '.element:not(span) { ... }'
  -
    type: text
    body: 'Sélectionne tous les éléments `.element` à l''exception des carrés 3, 4 et 5, puisqu''ils sont de type&nbsp;span.'
  -
    type: codepen
    id: mdrvreM
    theme: light
    ratio: 34
    tabs: 'html,result'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article MDN🦖 à propos de&nbsp;not.](https://developer.mozilla.org/fr/docs/Web/CSS/:not)'
  -
    type: note
    intent: exercice
    body: 'Complétez les niveaux de 20 à 32 de [CSS Diner&thinsp;🍎](https://flukeout.github.io/)'
fieldset: page-article
id: 68402619-ac82-48c8-a2f1-d91254cb61ef
