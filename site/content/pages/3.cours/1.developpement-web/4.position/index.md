title: Position
template: page-article
color_scheme: auto
body:
  -
    type: text
    title: 'Static vs Relative'
    level: h2
    body: |
      Par défaut, tous les éléments sont en position static. Ces deux valeurs sont souvent confondues, mais sont pourtant très&nbsp;différentes. 
      
      Par exemple, si deux éléments sont à `left: 25%;`. À gauche, l'élément en `position: static;` reste indifférent, tandis qu'à droite l'élément en `position: relative;` se déplace de 25%, comme&nbsp;demandé.
  -
    type: codepen
    id: JjPmjLN
    theme: light
    ratio: 34
  -
    type: text
    title: Relative
    level: h3
    body: |
      Les éléments en `position: relative;` acceptent les&nbsp;propriétés
      
      - top
      - bottom
      - left
      - right
      
      et déplace l'élément à partir de sa position naturelle dans&nbsp;l'espace.
  -
    type: text
    title: 'Relative vs Absolute'
    level: h2
    body: 'Dans l''exemple ci-dessous, si nous donnons la propriété `top: 0;` à tous nos éléments. Ceux dans la partie de gauche, en `position: relative;`, se positionnent un en dessous de l''autre, car il s''agit de leur position naturelle. Tandis qu''à droite, les éléments en `position: absolute;`, se positionnent en en se basant sur leur parent et donc se superposent un par dessus&nbsp;l''autre.'
  -
    type: codepen
    id: jONeOoE
    theme: light
    ratio: 34
  -
    type: text
    title: 'Absolute vs Fixed'
    level: h2
    body: 'Dans l''exemple ci-dessous, si nous donnons la propriété `top: 0;` à l''élément no.2. Nous remarquons que lorsqu''il est en `position: absolute;` comme dans la partie de gauche, il se positionne en fonction de son parent no.1. Tandis qu''à droite, alors qu''il est en `position: fixed;`, il ignore complètement son parent et se positionne en fonction du viewport _(de la fenêtre)_.'
  -
    type: codepen
    id: JjPmoGp
    theme: light
    ratio: 34
  -
    type: text
    title: Sticky
    level: h2
    body: |
      Toujours en `top: 0;`, l'élément no.2 en `position: sticky;`, se comporte comme un élément en `position: relative;`. 
      
      Du moins, jusqu'à ce que l'on _scroll_ et que sa position **top** corresponde à ce qu'elle serait si l'élément était en `position: absolute;`. 
      
      Dès lors, il cesse de se comporter comme un élément en `position: relative;` pour se mettre à agir comme un élément en `position: absolute;`.
  -
    type: codepen
    id: rNBqawG
    theme: light
    ratio: 34
  -
    type: note
    intent: generic
    body: 'Remarquer comment l''élément no.3 continue de _scroller_ pour passer en dessous de l''élément sticky no.2 qui _stick_ à sa potion `top: 0;`.'
fieldset: page-article
id: 3c517074-40f2-4280-83d6-5af1beb1ee8d
