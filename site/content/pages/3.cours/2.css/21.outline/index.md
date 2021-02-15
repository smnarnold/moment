body:
  -
    type: text
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
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos de&nbsp;outline](https://developer.mozilla.org/fr/docs/Web/CSS/outline).'
  -
    type: text
    title: Outline-offset
    level: h2
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
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos de&nbsp;outline-offset](https://developer.mozilla.org/fr/docs/Web/CSS/outline-offset).'
  -
    type: text
    title: 'Différences notables avec border'
    level: h2
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
is_hidden: false
title: Outline
template: page-article
color_scheme: auto
preview_color: '#000'
fieldset: page-article
id: 0c96f794-3066-4097-a867-6f8af0f67d1c
