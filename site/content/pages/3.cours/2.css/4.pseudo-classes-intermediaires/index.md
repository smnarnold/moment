title: 'Pseudo-classes intermédiaires'
template: page-article
color_scheme: auto
body:
  -
    type: text
    title: 'First-child & Last-child'
    level: h2
    body: |
      Comme leurs noms l'indiquent, `:first-child` et `:last-child` permettent de sélectionner le premier et dernier élément dans un groupe s'ils correspondent au sélecteur passé avant le&nbsp;`:`.
      
      Par exemple, la règle suivante:
  -
    type: code
    lang: css
    body: '.element:first-child { ... }'
  -
    type: text
    body: |
      Valide à l'intérieur de chaque groupe d'éléments si le premier enfant à la classe `.element`. Si tel est le cas, l'élément est&nbsp;sélectionné.
      
      Ci-dessous à gauche `:first-child` est utilisé afin de rendre bleu&thinsp;🟦 le premier enfant du groupe, tandis qu'à droite `:last-child` fait la même chose, mais pour le&nbsp;dernier.
  -
    type: codepen
    id: XWJzYpM
    theme: light
    ratio: 34
    tabs: result
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article MDN🦖 sur first-child](https://developer.mozilla.org/fr/docs/Web/CSS/:first-child), ainsi que cet [article sur&nbsp;last-child](https://developer.mozilla.org/fr/docs/Web/CSS/:last-child).'
  -
    type: text
    title: Only-child
    level: h2
    body: |
      Sélectionne un élément lorsqu'il est enfant unique de son élément parent. Bref, lorsque l'élément est à la fois le `:first-child` et le `:last-child` de son&nbsp;groupe.
      
      Par exemple, la règle&nbsp;suivante:
  -
    type: code
    lang: css
    body: '.element:only-child { ... }'
  -
    type: text
    body: |
      Valide à l'intérieur de chaque groupe d'éléments si un seul enfant est présent et si celui-ci possède la classe `.element`. Si tel est le cas, l'élément est&nbsp;sélectionné.
      
      Dans l'exemple ci-dessous, tous les carrés ont la classe `.element`. Cependant, à gauche, plusieurs enfants sont présents, donc aucun d'entre eux n'est sélectionné. Tandis qu'à droite, un seul enfant est présent, donc `:only-child` le sélectionne et le rend bleu&thinsp;🟦.
  -
    type: codepen
    id: abmPMLr
    theme: light
    ratio: 34
    tabs: result
  -
    type: text
    body: 'Ce type de pseudo-classe peut être pratique pour exemple pour retirer la puce • d''un élément de liste s''il est le seul élément présent dans sa&nbsp;liste.'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article de MDN🦖 à propos de&nbsp;only-child](https://developer.mozilla.org/fr/docs/Web/CSS/:only-child).'
  -
    type: text
    title: Nth-child
    level: h2
    body: 'La pseudo-classe `nth-child` permet de sélectionner un ou plusieurs éléments selon leur index dans un groupe. Afin de spécifier quels éléments devraient être sélectionnés, il faut spécifier une formule entre&nbsp;parenthèses.'
  -
    type: image
    image: /assets/articles/ralph-wiggum-selectionne.gif
  -
    type: text
    title: 'Nth-child et index'
    level: h3
    body: |
      L'option la plus simple est de sélectionner un élément à partir de son index tout simplement. Pour ce faire, il suffit de spécifier directement l'index désiré entre&nbsp;parenthèses.
      
      Par exemple, la règle&nbsp;suivante:
  -
    type: code
    lang: css
    body: '.element:nth-child(2) { ... }'
  -
    type: text
    body: 'Sélectionne le deuxième élément si celui-ci à la classe&nbsp;`.element`.'
  -
    type: codepen
    id: mdraoxO
    theme: light
    ratio: 34
    tabs: 'css,result'
  -
    type: note
    intent: warning
    body: 'En JavaScript les index commencent à 0, mais en CSS à&nbsp;1.'
  -
    type: text
    title: 'Nth-child pair et impair'
    level: h3
    body: |
      Nth-child permet grâce aux mots-clés `even` et `odd` de sélectionner tous les éléments **pairs ou impairs** qui correspondent au sélecteur avant le&nbsp;`:`. 
      
      Par exemple, à gauche tous les éléments pairs sont sélectionnés grâce à `nth-child(even)`. Tandis qu'à droite tous ceux impairs sont sélectionnés via&nbsp;`nth-child(odd)`.
  -
    type: codepen
    id: vYEWayB
    theme: light
    ratio: 34
    tabs: result
  -
    type: text
    title: 'Nth-child et les occurrences'
    level: h3
    body: |
      En ajoutant à un index le suffixe&nbsp;`n`, il est possible d'indiquer que toutes les N occurrences devraient être&nbsp;sélectionnées.
      
      Par exemple, la règle suivante:
  -
    type: code
    lang: css
    body: '.element:nth-child(3n) { ... }'
  -
    type: text
    body: |
      Spécifie un interval de&nbsp;3. Si les éléments à ces index ont la classe `.element`, ceux-ci sont alors&nbsp;sélectionnés.
      
      Dans l'exemple suivant, puisque tous les éléments ont la classe `.element`, ceux aux index 3, 6 et 9 sont donc&nbsp;sélectionnés.
  -
    type: codepen
    id: JjoOZmZ
    theme: light
    ratio: 34
    tabs: 'css,result'
  -
    type: note
    intent: warning
    body: 'Sans le n, seulement le 3<sup>e</sup> élément serait&nbsp;sélectionné.'
  -
    type: text
    title: 'Nth-child et décalage'
    level: h3
    body: |
      Sélectionner par [N occurrences](#nth-child-et-les-occurrences) est pratique et puissant, mais il est parfois nécessaire de sélectionner à partir d'un index de départ différent, d'où les options de&nbsp;décalage.
      
      Par exemple, la règle&nbsp;suivante:
  -
    type: code
    lang: css
    body: '.element:nth-child(3n-2) { ... }'
  -
    type: text
    body: 'Spécifie un interval de 3, comme dans l''exemple précédent, mais indique de décaler chaque sélection de 2 en&nbsp;amount&thinsp;⬅.'
  -
    type: codepen
    id: eYmeKae
    theme: light
    ratio: 34
    tabs: result
  -
    type: text
    body: 'L''inverse aurait aussi été possible en utilisant `:nth-child(3n+2)` pour sélectionner en aval&thinsp;➡ plutôt qu''en&nbsp;amont.'
  -
    type: note
    intent: tool
    body: 'Pour expérimenter avec nth-child [css-tricks.com/examples/nth-child-tester](https://css-tricks.com/examples/nth-child-tester/)'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article MDN🦖 à propos de&nbsp;nth-child](https://developer.mozilla.org/fr/docs/Web/CSS/:nth-child).'
  -
    type: text
    title: Nth-last-child
    level: h2
    body: |
      Cette pseudo-classe fonctionne sur le même principe que [nth-child](#nth-child) à la différence que **les sélections se font à partir de la fin** et non du&nbsp;début.
      
      Par exemple, la règle&nbsp;suivante:
  -
    type: code
    lang: css
    body: '.element:nth-last-child(2) { ... }'
  -
    type: text
    body: 'Sélectionne l''avant-dernier élément si celui-ci à la classe&nbsp;`.element`.'
  -
    type: codepen
    id: VwKqRom
    theme: light
    ratio: 34
    tabs: 'css,result'
  -
    type: text
    body: 'Les mots-clés `even` et `odd`, les occurences `n` et les décalages `-/+` sont tous aussi disponibles avec cette&nbsp;pseudo-classe.'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article MDN🦖 à propos de&nbsp;nth-last-child](https://developer.mozilla.org/fr/docs/Web/CSS/:nth-last-child).'
  -
    type: note
    intent: exercice
    body: 'Complétez les niveaux de 15 à 19 de [CSS Diner&nbsp;🍎](https://flukeout.github.io/)'
fieldset: page-article
id: 52854621-61f0-470d-bb3b-5d2aa9c172a4
