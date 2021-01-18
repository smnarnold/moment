title: Position
template: page-article
color_scheme: auto
body:
  -
    type: text
    body: |
      Le positionnement des éléments en CSS peut sembler facile à priori. Cependant, les choses peuvent se compliquent rapidement lorsqu'un projet évolue. D'où l'importance d'avoir une bonne compréhension de la relation entre les éléments et leurs&nbsp;positions.
      
      La propriété `position` spécifie le type de positionnement utilisé pour un&nbsp;élément:
      
      - static _(par défaut)_
      - relative
      - absolute
      - fixed
      - sticky
      
      Les propriétés `top`, `left`, `bottom`, `right` combinés à la propriété `position` permettent de déplacer un élément dans une direction en particulier. Par exemple, à 10px du haut&nbsp;`top: 10px;`.
  -
    type: note
    intent: warning
    body: |
      Un élément se positionne en fonction de son parent le plus proche ayant une position différente que&nbsp;`static`. 
      
      Si aucun parent ayant une position autre que `static` n'est trouvé, l'élément se positionnera en fonction de la fenêtre du&nbsp;navigateur.
  -
    type: text
    title: 'Static vs Relative'
    level: h2
    body: |
      Par défaut, tous les éléments sont en position static. Ces deux valeurs sont souvent confondues, mais sont pourtant très&nbsp;différentes. 
      
      Par exemple, si deux éléments sont à&nbsp;`left: 25%;`. 
      
      À gauche, l'élément en `position: static;` reste indifférent à la position, tandis qu'à droite l'élément en `position: relative;` se déplace de 25%, comme&nbsp;spécifié.
  -
    type: codepen
    id: JjPmjLN
    theme: light
    ratio: 34
    tabs: result
  -
    type: text
    title: Static
    level: h3
    body: 'Les éléments en `position: static;` respectent à la lettre le _flow de la page_. Il est donc **impossible de modifier leurs positions** avec les propriétés `top`, `left`, `bottom` ou&nbsp;`right`.'
  -
    type: text
    title: Relative
    level: h3
    body: |
      Les éléments en `position: relative;` respectent le _flow de la page_, comme les éléments en `position: static;`, mais contrairement à ceux-ci, ils acceptent les&nbsp;propriétés:
      
      - top
      - bottom
      - left
      - right
      
      Ce qui permet de déplacer un élément à partir de sa position naturelle dans la page _(Son emplacement si aucun style ne lui était&nbsp;attribué)_.
  -
    type: text
    title: 'Relative vs Absolute'
    level: h2
    body: |
      Dans l'exemple ci-dessous, si nous donnons la propriété `top: 0;` à tous nos éléments. 
      
      Ceux dans la partie de gauche, en `position: relative;`, se positionnent un en dessous de l'autre, car il s'agit de leur position naturelle _(Flow de la&nbsp;page)_. 
      
      Tandis qu'à droite, les éléments en `position: absolute;`, ignorent leur position naturelle _(Flow de la&nbsp;page)_ et se positionnent en se basant sur leur parent, donc se superposent un par-dessus&nbsp;l'autre.
  -
    type: codepen
    id: jONeOoE
    theme: light
    ratio: 34
    tabs: result
  -
    type: note
    intent: exercice
    body: 'Hot Space&thinsp;👑 [codepen.io/smnarnold/pen/abmbEaO](https://codepen.io/smnarnold/pen/abmbEaO?editors=0100)'
  -
    type: text
    title: 'Absolute vs Fixed'
    level: h2
    body: |
      Dans l'exemple ci-dessous, l'élément `.no2` est enfant de `.no1` et a la propriété&nbsp;`top: 0;`.
      
      Dans la partie de gauche, alors que `.no2` est en `position: absolute;`, nous remarquons qu'il se positionne en fonction de son parent `.no1`. Il est donc à `0px` du haut de l'élément&nbsp;`.no1`.
      
      Tandis qu'à droite, alors qu'il est en `position: fixed;`, l'élément ignore complètement son parent et se positionne à `0px` du haut de la fenêtre&nbsp;_(viewport)_. L'élément ne bougera donc pas même si la page défile&nbsp;_(scroll)_.
  -
    type: codepen
    id: JjPmoGp
    theme: light
    ratio: 34
    tabs: result
  -
    type: text
    title: Sticky
    level: h2
    body: |
      Par défaut, un élément en `position: sticky;`, se comporte comme un élément en `position: relative;`.
      
      Par exemple, l'élément `.no2` est en `position: sticky;`, à un `top: 0;` et s'affiche en respectant sa position naturelle dans la page _(flow)_, soit en dessous de l'élément&nbsp;`.no1`.
      
      Cependant, lorsque la page défile _(scroll)_ et que la valeur de sa propriété `top` correspond à la position que l'élément aurait si il était en `position: fixed;`, celui-ci cesse de se comporter comme un élément en `position: relative;` pour se mettre à agir comme un élément en `position: fixed;`.
  -
    type: codepen
    id: rNBqawG
    theme: light
    ratio: 34
    tabs: result
  -
    type: note
    intent: generic
    body: 'Remarquez comment l''élément 3 continue de _scroller_ pour passer en dessous de l''élément sticky 2 qui _stick_ à sa position `top: 0;`.'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article MDN🦖 sur les&nbsp;positions](https://developer.mozilla.org/fr/docs/Web/CSS/position)'
fieldset: page-article
id: 3c517074-40f2-4280-83d6-5af1beb1ee8d
