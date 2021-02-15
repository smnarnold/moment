body:
  -
    type: text
    level: h2
    body: 'La propriété `background-image` accepte la fonction `linear-gradient()`. Comme son nom l''indique, celle-ci permet de définir un dégradé. Pour générer un dégradé, il faut minimalement attribuer deux couleurs en paramètre à la&nbsp;fonction.'
  -
    type: note
    intent: generic
    body: 'Toutes [les unités de couleurs](unites-de-couleur) sont supportées.'
  -
    type: text
    body: 'Par exemple, pour définir un dégradé de vert à bleu:'
  -
    type: code
    lang: css
    body: 'background-image: linear-gradient(#00c774, #3c38ba);'
  -
    type: codepen
    id: 7437a9ae59c7408a09dc5cb0894a6021
    ratio: 34
    tabs: chromeless
  -
    type: text
    title: Orientation
    level: h2
  -
    type: text
    title: Mots-clés
    level: h3
    body: |
      Par défaut, les dégradés sont verticaux. Cependant, il est possible de spécifier une direction particulière en le spécifiant dans le premier paramètre de la fonction `linear-gradient()`. 
      
      Le plus simple est d'utiliser en début de fonction des mots-clés indiquant la&nbsp;direction.
      
      Par exemple:
      
      - `to top`
      - `to right`
      - `to bottom` _(Par défaut)_
      - `to left`
  -
    type: codepen
    id: b7c1ac35750f2c7e61ce681d04035cef
    ratio: 34
    tabs: chromeless
  -
    type: text
    body: |
      Pour créer des dégradés diagonaux, il est possible de spécifier une deuxième direction dans le mot-clé.
      
      Par exemple:
      
      - `to top left`
      - `to top right`
      - `to bottom left`
      - `to bottom right`
  -
    type: codepen
    id: 83f9958abb7d856c9a6fe7359e1554c1
    ratio: 34
    tabs: chromeless
  -
    type: text
    title: Degrés
    level: h3
    body: |
      Il est aussi possible de spécifier une rotation en termes de degrés pour plus de&nbsp;précision.
      
      Par exemple:
  -
    type: code
    lang: css
    body: 'background-image: linear-gradient(90deg, #00c774, #3c38ba);'
  -
    type: text
    body: 'Serait l''équivalent de&nbsp;`to right`. Donc il serait possible de spécifier au degré prêt l''axe du dégradé&nbsp;souhaité.'
  -
    type: text
    title: 'Points d''arrêt'
    level: h2
    body: |
      Par défaut, lorsqu'aucun point d'arrêt n'est spécifié, les couleurs sont distribuées de façon&nbsp;égale. 
      
      Par exemple un dégradé à trois&nbsp;couleurs, sans point d'arrêt, donc égales,&nbsp;génère de 0 à 50% une fusion du vert vers le bleu et de 50% à 100% une fusion de bleu vert le&nbsp;rouge.
  -
    type: code
    lang: css
    body: 'background: linear-gradient(to right, #00c774, #3c38ba, #ff8487);'
  -
    type: codepen
    id: c4cb3b2ad3c87b57652def746b0b55b6
    ratio: 34
    tabs: chromeless
  -
    type: text
    body: |
      Il est cependant possible de définir un point d'arrêt après une couleur afin de spécifier à partir de quel point cette couleur doit commencer à fusionner avec la&nbsp;suivante.
      
      Par exemple, pour contrôler la distribution du&nbsp;vert:
  -
    type: codepen
    id: 31b34ee780f867f8ab928c91fd69013e
    ratio: 34
    tabs: chromeless
  -
    type: note
    intent: good
    body: '[uiGradients propose une collection de dégradés](https://uigradients.com/) prêts à être&nbsp;utilisés.'
  -
    type: note
    intent: tool
    body: '[CSSGradient.io propose un générateur de&nbsp;dégradés](https://cssgradient.io/).'
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN sur linear-gradient()](https://developer.mozilla.org/fr/docs/Web/CSS/linear-gradient()).'
is_hidden: false
title: Linear-gradient
template: page-article
color_scheme: auto
preview_color: '#72f6aa'
preview: /assets/previews/gradient.jpg
fieldset: page-article
id: ff1042a5-0992-44b5-9fb5-c91208ab7f7d
