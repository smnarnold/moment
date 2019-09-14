title: Flex
template: page-article
body:
  -
    type: text
    body: 'Contrairement aux autres valeurs de display qui influence l''affichage d''un élément par rapport aux autres éléments dans la page, la propriété `display: flex;`, influence l''affichage de ses enfants en modifiant leur largeur/hauteur et leur ordre afin de remplir l''espace disponible le mieux possible.'
  -
    type: text
    title: Flex-direction
    level: h2
    body: |
      Comme son nom l'indique, la valeur de cette propriété définie la direction qu'auront ses enfants. 
      
      Possibilités:
      
      - row _(Par défaut)_
      - row-reverse
      - column
      - column-reverse
  -
    type: text
    title: 'Flex-direction: Row vs Column'
    level: h3
  -
    type: codepen
    id: oNvExqQ
    theme: light
    ratio: 34
  -
    type: text
    title: Flex-wrap
    level: h2
    body: |
      Par défault, flex essait de tout afficher sur une même ligne. Cependant, il est possible de lui dire d'afficher sur plus d'une ligne au besoin grâce à la propriété wrap.
      
      Possibilités:
      
      - nowrap _(Par défaut)_
      - wrap
      - wrap-reverse
  -
    type: text
    title: 'Flex-wrap: Nowrap vs Wrap'
    level: h3
    body: |
      Par exemple, si nous donnons à nos blocks une largeur de 50%, ils devraient être dans l'impossibilité d'afficher tous sur une même ligne. 
      
      Cependant puisque flex force l'affichage sur une ligne par défaut `flex-wrap: nowrap;`, leur largeur est réduite à 33,33% afin de rester juxtaposés. Sauf si on permet à flex d'afficher sur plus d'une ligne via `flex-wrap: wrap;`.
  -
    type: codepen
    id: XWrZKyw
    theme: light
    ratio: 34
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
  -
    type: text
    title: 'Justify-content: Center vs Space-between'
    level: h3
  -
    type: codepen
    id: YzKeGzZ
    theme: light
    ratio: 34
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
  -
    type: text
    title: 'Align-items: Flex-start vs Flex-end'
    level: h3
  -
    type: codepen
    id: rNBJMja
    theme: light
    ratio: 34
  -
    type: text
    title: Order
    level: h2
    body: |
      Défini l'ordre d'affichage d'un enfant dans un parent étant à `display: flex;`.
      La valeur par défaut, est 0.
  -
    type: codepen
    id: BaBYLZO
    theme: light
    ratio: 34
  -
    type: text
    title: Flex-grow
    level: h2
    body: |
      Propriété pouvant être appliquée à un enfant d'on le parent est en `display: flex;`. 
      
      Cette propriété accepte une valeur sans unité indiquant la proportion avec laquelle l'élément devrait grandir en cas de besoin, si flex l'oblige.
      
      Par défaut, cette valeur est à 0.
  -
    type: note
    intent: warning
    body: 'Les unité négatives, ne sont pas permises.'
  -
    type: codepen
    id: xxKYEPR
    theme: light
    ratio: 34
  -
    type: text
    title: Flex-shrink
    level: h2
    body: |
      Propriété pouvant être appliquée à un enfant d'on le parent est en `display: flex;`. 
      
      Cette propriété accepte une valeur sans unité indiquant la proportion avec laquelle l'élément devrait rétrécir en cas de besoin, si flex l'oblige. Bref, elle agit à l'inverse de flex-grow;
      
      Par défaut, cette valeur est à 1.
  -
    type: note
    intent: warning
    body: 'Les unité négatives, ne sont pas permises.'
  -
    type: codepen
    id: qBWxaom
    theme: light
    ratio: 34
  -
    type: text
    title: Flex-basis
    level: h2
    body: |
      Propriété pouvant être appliquée à un enfant d'on le parent est en `display: flex;`. 
      
      Cette propriété accepte une valeur _(ex: 100px, 20%, 5rem, etc.)_ pour indiquer la dimension que devrait prendre un élément avant que l'espace restant soit redistribué.
      
      Par défaut, cette valeur est à _"auto"_.
  -
    type: codepen
    id: RwbQGey
    theme: light
    ratio: 34
  -
    type: note
    intent: good
    body: 'Pour plus d''information, je vous suggère fortement le guide de [*️CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)!'
fieldset: page-article
id: 68c2b759-3710-46f9-9799-a0f5a56eb616
