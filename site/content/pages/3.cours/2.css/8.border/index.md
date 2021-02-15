body:
  -
    type: text
    body: 'La propriété `border` a une vocation principalement esthétique, permettant d''ajouter une bordure à un&nbsp;élément.'
  -
    type: text
    title: Border-width
    level: h2
    body: |
      La sous-propriété `border-width` permet de définir la taille de la bordure. Cette valeur peut-être n'importe quelle [unité&nbsp;CSS](unites-css).
      
      Par exemple:
  -
    type: codepen
    id: dypBpKb
    theme: light
    ratio: 34
    tabs: chromeless
  -
    type: note
    intent: emmet
    body: 'Raccourci Emmet: bdw'
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos de&nbsp;border-width](https://developer.mozilla.org/fr/docs/Web/CSS/border-width).'
  -
    type: text
    title: Border-style
    level: h2
    body: |
      Comme son nom l'indique, cette propriété permet de définir le style de la&nbsp;bordure.
      
      Styles disponibles:
      
      - `none` _(par défaut)_
      - `solid` ligne standard _(plus commun)_
      - `dotted` pointillé
      - `dashed` hachuré
      - `double` double ligne
      - `groove` bordure 3D donnant l'impression que le bordure a été&nbsp;gravée
      - `ridge` bordure 3D donnant l'impression que la bordure&nbsp;ressort
      - `inset` bordure 3D donnant l'impression que l'élément est&nbsp;enfoncé
      - `outset` bordure 3D donnant l'impression que l'élément&nbsp;ressort
  -
    type: codepen
    id: oNzrYjj
    theme: light
    ratio: 34
    tabs: chromeless
  -
    type: note
    intent: emmet
    body: 'Raccourci Emmet: bds'
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos de&nbsp;border-style](https://developer.mozilla.org/fr/docs/Web/CSS/border-style).'
  -
    type: text
    title: Border-color
    level: h2
    body: |
      Permets de définir la couleur de la&nbsp;bordure.
      
      Par exemple:
  -
    type: codepen
    id: ZEpdBOw
    theme: light
    ratio: 34
    tabs: chromeless
  -
    type: note
    intent: emmet
    body: 'Raccourci Emmet: bdc'
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos de&nbsp;border-color](https://developer.mozilla.org/fr/docs/Web/CSS/border-color).'
  -
    type: text
    title: 'Syntaxe courte'
    level: h2
    body: |
      Il est aussi possible de définir ces trois propriétés avec une syntaxe courte en utilisant simplement la propriété border et en lui passant les différentes valeurs mentionnées&nbsp;précédemment.
      
      Par exemple:
  -
    type: codepen
    id: OJRebpO
    theme: light
    ratio: 34
    tabs: chromeless
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos de&nbsp;border](https://developer.mozilla.org/fr/docs/Web/CSS/border).'
  -
    type: text
    title: Border-radius
    level: h2
    body: 'Permets de définir des coins arrondis sur un&nbsp;élément.'
  -
    type: codepen
    id: RwGzoej
    theme: light
    ratio: 34
    tabs: chromeless
  -
    type: text
    body: 'Si chaque coin d''un élément est arrondi jusqu''à sa moitié, les coins arrondis se rejoignent et créer un ovale. Si l''élément est aussi haut que large, cet ovale devient alors un cercle comme dans l''exemple ci-dessus lorsque la dernière option est&nbsp;sélectionnée.'
  -
    type: note
    intent: warning
    body: 'Cette propriété s''applique qu''une bordure soit visible ou non sur&nbsp;l''élément.'
  -
    type: note
    intent: emmet
    body: 'Raccourci Emmet: bdrs'
  -
    type: text
    title: 'Contrôle des coins individuellement'
    level: h3
    body: |
      Il est possible de contrôler individuellement chaque coin d'un élément afin de créer des formes particulières. Pour ce faire, il est possible d'utiliser les&nbsp;propriétés:
      
      - `border-top-left-radius`
      - `border-top-right-radius`
      - `border-bottom-right-radius`
      - `border-bottom-left-radius`
      
      Ou encore de spécifier les multiples valeurs à même la&nbsp;propriété. Les coins sont spécifiés dans le sens des aiguilles d'une montre&thinsp;⌚️ en commençant à partir du coin supérieur&nbsp;gauche.
      
      Par exemple:
  -
    type: codepen
    id: VwKJmRz
    theme: light
    ratio: 34
    tabs: chromeless
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos de&nbsp;border-radius](https://developer.mozilla.org/fr/docs/Web/CSS/border-radius).'
is_hidden: false
title: Border
subtitle: 'border, border-radius'
template: page-article
color_scheme: auto
preview_color: '#f67272'
preview: /assets/previews/border.png
fieldset: page-article
id: 73926d38-74d4-4edb-98db-b5d3c5d558a3
