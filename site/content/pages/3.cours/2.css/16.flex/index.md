title: Flex
template: page-article
color_scheme: auto
body:
  -
    type: text
    body: 'Contrairement aux autres valeurs de [display](./display) qui influencent l''affichage d''un élément par rapport aux autres éléments dans la page, la propriété `display: flex;`, influence l''affichage de ses enfants en modifiant leur largeur/hauteur et leur ordre, afin de remplir l''espace disponible le plus adéquatement&nbsp;possible.'
  -
    type: text
    title: Flex-direction
    level: h2
    body: |
      Comme son nom l'indique, la valeur de cette propriété définit la direction qu'auront ses&nbsp;enfants. 
      
      Valeurs possibles:
      
      - row&thinsp;➡️ _(Par défaut)_
      - row-reverse&thinsp;⬅️
      - column&thinsp;⬇️
      - column-reverse&thinsp;⬆️
  -
    type: text
    title: 'Flex-direction: Row vs Column'
    level: h3
  -
    type: codepen
    id: oNvExqQ
    theme: light
    ratio: 34
    tabs: result
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article MDN🦖 sur&nbsp;flex-direction](https://developer.mozilla.org/fr/docs/Web/CSS/flex-direction).'
  -
    type: text
    title: Flex-wrap
    level: h2
    body: |
      Par défaut, flex essaie de tout afficher sur une même&nbsp;ligne. 
      
      Cependant, il est possible de lui spécifier d'afficher sur plus d'une ligne au besoin grâce à la propriété `flex-wrap`.
      
      Valeurs possibles:
      
      - nowrap _(Par défaut)_ 
      🟩&#8239;🟦&#8239;🟥
      - wrap 
      🟩&#8239;🟦
      🟥
      - wrap-reverse
      🟥
      🟦&#8239;🟩
  -
    type: text
    title: 'Flex-wrap: Nowrap vs Wrap'
    level: h3
    body: |
      Par exemple, si un parent est en `display: flex;` et possède trois enfants ayant une largeur de 50%, il est impossible à la base qu'ils puissent tous s'afficher sur une même&nbsp;ligne. 
      
      Cependant, puisqu'un élément en `display: flex;` à la propriété et la valeur `flex-wrap: nowrap;` par défaut, ses enfants sont obligés de s'afficher sur une même ligne. La largeur des enfants est donc réajustée automatiquement à 33,33% afin de les garder&nbsp;juxtaposés.
      
      Néanmoins, grâce à `flex-wrap: wrap;`, il est possible de spécifier à un élément en `display: flex;` d'afficher ses enfants sur plus d'une ligne si l'espace alloué n'est pas suffisant afin de les garder juxtaposés sans avoir à les&nbsp;redimensionner.
  -
    type: codepen
    id: XWrZKyw
    theme: light
    ratio: 34
    tabs: result
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article MDN🦖 sur&nbsp;flex-wrap](https://developer.mozilla.org/fr/docs/Web/CSS/flex-wrap).'
  -
    type: text
    title: Justify-content
    level: h2
    body: |
      Un peu comme Word ou Google Doc ![justify-content](/assets/articles/justify-content.png), flex vous permet de justifier votre contenu horizontalement afin atteindre l'affichage désiré.
      
      Possibilités:
      
      - flex-start _(Par défaut)_
      - flex-end
      - center
      - space-between
      - space-around
      - space-evenly
      - etc
  -
    type: text
    title: 'Justify-content: Flex-start vs Flex-end'
    level: h3
  -
    type: codepen
    id: OJLQRLz
    theme: light
    ratio: 34
    tabs: result
  -
    type: text
    title: 'Justify-content: Center vs Space-between'
    level: h3
  -
    type: codepen
    id: YzKeGzZ
    theme: light
    ratio: 34
    tabs: result
  -
    type: text
    title: 'Justify-content: Space-around vs Space-evenly'
    level: h3
  -
    type: codepen
    id: QWNEzXg
    theme: light
    ratio: 34
    tabs: result
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article MDN🦖 sur&nbsp;justify-content](https://developer.mozilla.org/fr/docs/Web/CSS/justify-content).'
  -
    type: text
    title: Align-items
    level: h2
    body: |
      Dans la même lignée que [Justify-content](#justify-content), mais cette fois à la verticale.
      
      Possibilités:
      
      - stretch _(Par défaut)_
      - flex-start
      - flex-end
      - center
      - etc
  -
    type: text
    title: 'Align-items: Stretch vs Center'
    level: h3
  -
    type: codepen
    id: bGbLwpj
    theme: light
    ratio: 34
    tabs: result
  -
    type: text
    title: 'Align-items: Flex-start vs Flex-end'
    level: h3
  -
    type: codepen
    id: rNBJMja
    theme: light
    ratio: 34
    tabs: result
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article MDN🦖 sur&nbsp;align-items](https://developer.mozilla.org/fr/docs/Web/CSS/align-items),'
  -
    type: note
    intent: generic
    body: '`justify-content` et `align-items` sont l''équivalent de brancher une clé USB en CSS. Deux ou trois tentatives sont toujours requises avant d''obtenir le résultat&nbsp;espéré.'
  -
    type: note
    intent: exercice
    body: 'Let it be&thinsp;🎸 [codepen.io/smnarnold/pen/WNGNXRG](https://codepen.io/smnarnold/pen/WNGNXRG?editors=0100)'
  -
    type: note
    intent: tool
    body: 'Pour visualiser rapidement l''effet les différentes propriétés associées à flex, je vous invite à explorer cette [démo Flex de&nbsp;Scotch.io&thinsp;🥃](https://demos.scotch.io/visual-guide-to-css3-flexbox-flexbox-playground/demos/)'
  -
    type: text
    title: Order
    level: h2
    body: |
      Définis l'ordre d'affichage d'un enfant dans un parent étant à `display: flex;`.
      
      Par défaut, cette valeur est à&nbsp;`0`.
  -
    type: codepen
    id: BaBYLZO
    theme: light
    ratio: 34
    tabs: 'css,result'
  -
    type: note
    intent: exercice
    body: 'Exercice TMNT&thinsp;🐢 [codepen.io/smnarnold/pen/XWdOdaP](https://codepen.io/smnarnold/pen/XWdOdaP?editors=110)'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article MDN🦖 sur&nbsp;order](https://developer.mozilla.org/fr/docs/Web/CSS/order).'
  -
    type: text
    title: Flex-grow
    level: h2
    body: |
      Propriété pouvant être appliquée à un enfant d'on le parent est en `display: flex;`. 
      
      Cette propriété accepte une valeur sans unité indiquant la proportion avec laquelle l'élément devrait grandir en cas de besoin _(si&nbsp;flex&nbsp;l'oblige)_.
      
      Par défaut, cette valeur est à&nbsp;`0`.
  -
    type: note
    intent: warning
    body: 'Les unités négatives, ne sont pas&nbsp;permises.'
  -
    type: codepen
    id: xxKYEPR
    theme: light
    ratio: 34
    tabs: result
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article MDN🦖 sur&nbsp;flex-grow](https://developer.mozilla.org/fr/docs/Web/CSS/flex-grow).'
  -
    type: text
    title: Flex-shrink
    level: h2
    body: |
      Propriété pouvant être appliquée à un enfant dont le parent est en `display: flex;`. 
      
      Cette propriété accepte une valeur sans unité indiquant la proportion avec laquelle l'élément devrait rétrécir en cas de besoin _(si flex l'oblige)_. Bref, elle agit à l'inverse de&nbsp;[flex-grow](#flex-grow);
      
      Par défaut, cette valeur est à&nbsp;`1`.
  -
    type: note
    intent: warning
    body: 'Les unités négatives, ne sont pas&nbsp;permises.'
  -
    type: codepen
    id: qBWxaom
    theme: light
    ratio: 34
    tabs: result
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article MDN🦖 sur&nbsp;flex-shrink](https://developer.mozilla.org/fr/docs/Web/CSS/flex-shrink).'
  -
    type: text
    title: Flex-basis
    level: h2
    body: |
      Propriété pouvant être appliquée à un enfant dont le parent est en `display: flex;`. 
      
      Cette propriété accepte une valeur _(ex: 100px, 20%, 5rem, etc.)_ pour indiquer la dimension que devrait prendre un élément avant que l'espace restant soit redistribué.
      
      Par défaut, cette valeur est à _"auto"_.
  -
    type: codepen
    id: RwbQGey
    theme: light
    ratio: 34
    tabs: 'css,result'
  -
    type: note
    intent: good
    body: 'Pour plus d''information, je vous suggère fortement le [guide de *️CSS-Tricks sur&nbsp;flex](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)!'
  -
    type: note
    intent: exercice
    body: '[flexboxfroggy.com](https://flexboxfroggy.com/#fr)&thinsp;🐸 compléter les 24 étapes pour maitriser vos propriétés&nbsp;flex.'
  -
    type: note
    intent: exercice
    body: '[flexboxdefense.com](http://www.flexboxdefense.com/)&thinsp;🗼 protéger votre territoire de vos ennemis en sélectionnant les bonnes configurations Flex&nbsp;_(anglais)_.'
  -
    type: note
    intent: exercice
    body: 'Devenez un maître flex en jouant à [Flexbox&nbsp;Zombies&thinsp;🧟](https://mastery.games/flexboxzombies/) _(anglais)_'
fieldset: page-article
id: 68c2b759-3710-46f9-9799-a0f5a56eb616
