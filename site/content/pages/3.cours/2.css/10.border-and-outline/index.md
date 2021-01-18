title: 'Border & Outline'
template: page-article
color_scheme: auto
body:
  -
    type: text
    body: 'Les propriétés `border` et `outline` permettent toutes deux d''afficher un cadre autour d''un élément. Cependant, leurs comportements et rôles&nbsp;diffèrent.'
  -
    type: text
    title: Border
    level: h2
    body: 'La propriété `border` a une vocation principalement esthétique, permettant d''ajouter une bordure à un&nbsp;élément.'
  -
    type: text
    title: Border-width
    level: h3
    body: |
      La sous-propriété `border-width` permet de définir la taille de la bordure. Cette valeur peut-être n'importe quelle [unité&nbsp;CSS](unites-css).
      
      Par exemple:
  -
    type: code
    lang: css
    body: 'border-width: 2px;'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article MDN🦖 sur `border-width`](https://developer.mozilla.org/fr/docs/Web/CSS/border-width)'
  -
    type: text
    title: Border-style
    level: h3
    body: |
      Comme son nom l'indique, cette propriété permet de définir le style de la bordure.
      
      Styles disponibles:
      
      - `none` _(par défaut)_
      - `hidden` identique à `none`, sauf si une image d'arrière plan est&nbsp;définie
      - `dotted` pointillé
      - `dashed` hachuré
      - `solid` ligne standard
      - `double` double ligne
      - `groove` bordure 3D donnant l'impression que le bordure a été&nbsp;gravée
      - `ridge` bordure 3D donnant l'impression que la bordure&nbsp;ressort
      - `inset` bordure 3D donnant l'impression que l'élément est&nbsp;enfoncé
      - `outset` bordure 3D donnant l'impression que l'élément&nbsp;ressort
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article MDN🦖 sur `border-style`](https://developer.mozilla.org/fr/docs/Web/CSS/border-style)'
  -
    type: text
    title: Border-color
    level: h3
    body: |
      Permets de définir la couleur de la&nbsp;bordure.
      
      Par exemple:
  -
    type: code
    lang: css
    body: 'border-color: green;'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article MDN🦖 sur `border-color`](https://developer.mozilla.org/fr/docs/Web/CSS/border-color)'
  -
    type: text
    title: 'Syntaxe courte border'
    level: h3
    body: |
      Il est aussi possible de définir ces trois propriétés avec une syntaxe courte en utilisant simplement la propriété `border` et en lui passant les différentes valeurs mentionnées&nbsp;précédemment.
      
      Par exemple:
  -
    type: code
    lang: css
    body: 'border: 2px solid green;'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article MDN🦖 sur `border`](https://developer.mozilla.org/fr/docs/Web/CSS/border)'
  -
    type: text
    title: Outline
    level: h2
    body: |
      La propriété `outline` est surtout connue comme étant la propriété utilisée par les navigateurs afin de faire ressortir l'élément ayant le focus dans une page. Cette utilisation permet de naviguer via son clavier&thinsp;⌨️ plutôt que la&nbsp;souris&thinsp;🖱️.
      
      Par exemple, appuyez sur la touche <kbd>tab</kbd> de votre clavier et remarquerez le cadre s'affichant autour de l'élément recevant le&nbsp;focus.
  -
    type: note
    intent: warning
    body: 'Si vous enlever le outline par défaut des navigateurs, par exemple: `* { outline: 0; }` pensez à le remplacer par un autre style permettant d''identifier quel élément dans la page à le&nbsp;focus.'
  -
    type: text
    body: |
      `outline` partage les mêmes sous-propriétés que [border](#border),&nbsp;soit:
      
      - `outline-width`
      - `outline-style`
      - `outline-color`
      
      Et la même syntaxe courte. Par&nbsp;exemple:
  -
    type: code
    lang: css
    body: 'outline: 2px solid green;'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article MDN🦖 sur `outline`](https://developer.mozilla.org/fr/docs/Web/CSS/outline)'
  -
    type: text
    title: Outline-offset
    level: h3
    body: |
      Il est aussi possible de créer un espace entre le cadrage et son élément en utilisant la propriété&nbsp;`outline-offset`.
      
      Par&nbsp;exemple:
  -
    type: codepen
    id: dyMqggV
    theme: light
    ratio: 34
    tabs: 'css,result'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article MDN🦖 sur `outline-offset`](https://developer.mozilla.org/fr/docs/Web/CSS/outline-offset)'
  -
    type: text
    title: 'Différences notables'
  -
    type: text
    title: 'Effet sur la dimension des éléments'
    level: h3
    body: |
      La propriété `border` fait partie de l'élément. Elle génère donc un cadre à l'intérieur de celui-ci, affectant sa dimension et donc potentiellement son positionnement. Contrairement à&nbsp;`outline`, qui ne fait pas partie de l'élément et donc vit à l'extérieur de&nbsp;celui-ci. 
      
      Par exemple, les deux carrés verts&thinsp;🟩 si dessous ont la même dimension et un cadre d'une même taille. Le premier utilise `border` et le deuxième `outline`. On remarque que le premier réduit la dimension à l'intérieur du carré, tandis que le deuxième la laisse&nbsp;indemne.
  -
    type: codepen
    id: JjXaBZZ
    theme: light
    ratio: 34
    tabs: 'css,result'
  -
    type: note
    intent: generic
    body: |
      Le fait qu'`outline` n'affecte pas la dimension et le positionnement des éléments rend cette propriété particulièrement utile pour déboguer ou comprendre une mise en&nbsp;page. 
      
      Par exemple, dans l'inspecteur, dans le panneau des styles, cliquez sur le bouton ➕ afin de définir une nouvelle règle de styles et inscrivez `* { outline: 2px solid red; }` pour afficher un cadre rouge autour de tous les éléments de la&nbsp;page.
  -
    type: text
    title: 'Combinaison avec Border-radius'
    level: h3
    body: 'Puisque `border` fait partie de l''élément, cette propriété épouse la forme son élément et donc respecte ses coins arrondis. Contrairement à `outline` qui vit à l''extérieur de l''élément et donc garde une forme&nbsp;rectangulaire.'
  -
    type: codepen
    id: rNeZZqP
    theme: light
    ratio: 34
    tabs: 'css,result'
  -
    type: text
    title: 'Définition d''un côté'
    level: h3
    body: |
      La propriété `border` accepte de définir chaque côté séparément du cadrage. Il est donc possible de donner un style particulier à la bordure du haut, un autre à celle du bas et ainsi de&nbsp;suite. 
      
      Pour ce faire, il faut spécifier le côté de la bordure après le mot&nbsp;`border`.
      
      Par exemple:
  -
    type: code
    lang: css
    body: 'border-right: dotted 2px green;'
  -
    type: text
    body: 'Contrairement à `outline` qui affecte tous les côtés de façon&nbsp;identique.'
fieldset: page-article
id: 0c96f794-3066-4097-a867-6f8af0f67d1c
