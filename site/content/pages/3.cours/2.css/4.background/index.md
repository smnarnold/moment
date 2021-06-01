body:
  -
    type: text
    body: 'La propriété `background` est ses différentes sous-propriétés permettent de contrôler l''apparence de l''arrière-plan d''un&nbsp;élément.'
  -
    type: text
    title: Background-color
    level: h2
    body: |
      La propriété `background-color` permet de définir la couleur d'arrière-plan d'un élément. Cette propriété accepte différents formats de valeurs de&nbsp;couleur. 
      
      Par&nbsp;exemple:
      
      - Nom, ex: `green`
      - Code hexadécimal _(hex)_, ex: `#3FC774`
      - RGB, ex: `rgb(63, 199, 116)`
      - RGBA, ex: `rgba(63, 199, 116, 1)`
      - HSL, ex: `hsl(143, 55%, 51%)`
  -
    type: note
    intent: generic
    body: 'Tous ces exemples _(à l''exception de celui utilisant un nom de couleur)_  correspondent au vert utilisé dans l''exemple ci-dessous, mais écrit dans des formats&nbsp;différents.'
  -
    type: codepen
    id: d04cd5c260aca2e1861d2066fdf800b3
    theme: light
    ratio: 34
    tabs: 'css,result'
  -
    type: note
    intent: emmet
    body: 'Raccourci Emmet: bgc'
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article de MDN sur&nbsp;background-color](https://developer.mozilla.org/fr/docs/Web/CSS/background-color)'
  -
    type: text
    title: Background-image
    level: h2
    body: |
      La propriété `background-image` permet de définir une image d'arrière-plan à un élément. Elle accepte une ou plusieurs images et des fonctions permettant de générer un&nbsp;dégradé. 
      
      Afin d'illustrer les différents comportements associés aux images d'arrière-plan, l'image ci-dessous&thinsp;👇 sera utilisée dans les exemples&nbsp;suivants.
  -
    type: image
    image: /assets/articles/square-1582418465.png
  -
    type: text
    title: Image
    level: h3
  -
    type: codepen
    id: fe175639aa0cd7082d1b95d7bea24169
    theme: light
    ratio: 34
    tabs: 'css,result'
  -
    type: text
    title: Dégradés
    level: h3
    body: |
      À gauche, `background-image: linear-gradient(#3FC774, #3C38BA);` génère un dégradé linéaire de vert à&nbsp;bleu.
      
      À droite, `background-image: radial-gradient(#3FC774, #3C38BA);` génère aussi un dégradé de vert à bleu, mais sous forme&nbsp;circulaire.
  -
    type: codepen
    id: 1ea0686e31020a92f530a72ef4bb677a
    theme: light
    ratio: 34
    tabs: result
  -
    type: note
    intent: emmet
    body: 'Raccourci Emmet: bgi'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir ce [billet sur les&nbsp;dégradés](linear-gradient).'
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir ces articles MDN sur [linear-gradient](https://developer.mozilla.org/fr/docs/Web/CSS/linear-gradient) et sur [radial-gradient](https://developer.mozilla.org/fr/docs/Web/CSS/radial-gradient).'
  -
    type: text
    title: Combinaisons
    level: h3
    body: |
      Il est possible de donner plus d'une valeur d'image d'arrière-plan. Pour ce faire, il est nécessaire de séparer chaque valeur avec une&nbsp;virgule.
      
      À gauche par exemple, deux images <img src="/assets/articles/square-1582418465.png" class="carré" height="20px"> & <img src="/assets/articles/circle.png" class="cercle" height="20px"> sont passés en arrière-plan et se superposent.
  -
    type: codepen
    id: f45cf8a780e7114f76995fbfb25f12ad
    theme: light
    ratio: 34
    tabs: result
  -
    type: note
    intent: warning
    body: 'La première valeur passée à la propriété background-image correspond à l''élément sur le dessus et ainsi de&nbsp;suite.'
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos de background-image](https://developer.mozilla.org/fr/docs/Web/CSS/background-image).'
  -
    type: text
    title: Background-repeat
    level: h2
    body: |
      La propriété `background-repeat` définit la façon dont une image en arrière-plan est&nbsp;répétée. Cette valeur accepte plusieurs valeurs:
      
      - `repeat` _(par défaut)_
      - `no-repeat`
      - `repeat-x`
      - `repeat-y`
      - Etc.
  -
    type: text
    title: 'Repeat vs No-repeat'
    level: h3
    body: |
      À gauche, `background-repeat: repeat;` indique de répéter l'image d'arrière-plan aussi souvent que nécessaire afin de couvrir l'ensemble de&nbsp;l'élément.
      
      À droite, `background-repeat: no-repeat;` indique au contraire de ne pas répéter l'image&nbsp;d'arrière-plan.
  -
    type: codepen
    id: bb8cb09c8bd0eb92a1d84704ddc99d2d
    theme: light
    ratio: 34
    tabs: result
  -
    type: text
    title: 'Repeat-x vs Repeat-y'
    level: h3
    body: |
      À gauche, `background-repeat: repeat-x;` indique de répéter l'image d'arrière-plan sur l'axe des X&nbsp;uniquement&thinsp;↔️.
      
      Tandis qu'à droite, `background-repeat: repeat-y;` indique à l'opposé de répéter l'image d'arrière-plan sur l'axe des Y&nbsp;uniquement&thinsp;↕️.
  -
    type: codepen
    id: 7981adbcdb63b552d0330045a87f1e0d
    theme: light
    ratio: 34
    tabs: result
  -
    type: note
    intent: emmet
    body: 'Raccourci Emmet: bgr'
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos de background-repeat](https://developer.mozilla.org/fr/docs/Web/CSS/background-repeat).'
  -
    type: text
    title: Background-position
    level: h2
    body: |
      La propriété `background-position` permet de définir la position d'un arrière-plan. Il est possible de définir deux valeurs correspondant à la position X et Y dudit arrière-plan dans son élément. Ces valeurs peuvent-être n'importe quelle unité CSS _(px, %, em, etc.)_, ainsi que certains mots-clés&nbsp;_(top, bottom, left, right)_.
      
      À gauche, `background-position: 75% 25%;` positionne l'arrière-plan à 75% horizontalement et 25%&nbsp;verticalement.
      
      Tandis qu'à droite, `background-position: center bottom;` positionne l'arrière-plan au centre et au bas de son&nbsp;élément.
  -
    type: codepen
    id: 5d64b16db6e78257c7dece339719b76f
    theme: light
    ratio: 34
    tabs: result
  -
    type: note
    intent: emmet
    body: 'Raccourci Emmet: bgp'
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos de background-position](https://developer.mozilla.org/fr/docs/Web/CSS/background-position).'
  -
    type: text
    title: Background-size
    level: h2
    body: 'Par défaut, une image en arrière-plan affichera en fonction de sa dimension réelle. Cependant, la propriété `background-size` permet de contrôler la dimension de ladite&nbsp;image.'
  -
    type: text
    title: 'Unités CSS'
    level: h3
    body: |
      Il est possible de définir deux valeurs, correspondant à la largeur et la hauteur de l'arrière-plan utilisé. Ces valeurs peuvent-être n'importe quelle unité CSS _(px, %, em, etc.)_
      
      À gauche par exemple, `background-size: 80px 40px;` déforme l'arrière-plan qui normalement est carré. Tandis qu'à droite, `background-size: 50% auto` indique à l'image d'arrière-plan de prendre une demi-largeur et de s'ajuster automatiquement sur la hauteur afin de garder le ratio original de&nbsp;l'image.
  -
    type: codepen
    id: 43a16e26041b3cc4034a13079631a4fc
    theme: light
    ratio: 34
    tabs: result
  -
    type: text
    title: 'Contain vs Cover'
    level: h3
    body: |
      À gauche, `background-size: contain;` garde le ratio de l'image d'arrière-plan intact et la redimensionne de sorte qu'elle soit entièrement visible dans l'élément. 🚫&nbsp;rognage.
      
      À droite, `background-size: cover;` garde aussi le ratio de l'image d'arrière-plan intact, mais la redimensionne de sorte que l'élément soit entièrement recouverte par elle. Quitte à rogner certaines parties de&nbsp;l'image.
  -
    type: codepen
    id: 59f11ff05812b35f5bac29b76497b7d3
    theme: light
    ratio: 34
    tabs: result
  -
    type: note
    intent: emmet
    body: 'Raccourci Emmet: bgs'
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos de background-size](https://developer.mozilla.org/fr/docs/Web/CSS/background-size).'
  -
    type: text
    title: 'Syntaxe courte'
    level: h2
    body: 'La propriété `background` permet de définir toutes les propriétés précédemment mentionnées en une seule ligne. Si la valeur d''une sous-propriété est omise, elle est alors considérée comme étant définie avec sa valeur par&nbsp;défaut.'
  -
    type: note
    intent: emmet
    body: 'Raccourci Emmet: bg'
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos de&nbsp;background](https://developer.mozilla.org/fr/docs/Web/CSS/background).'
  -
    type: note
    intent: good
    body: '[Lea Verou 👩‍💻](https://lea.verou.me/) a mis sur pied une [collection d''arrière-plans CSS](http://projects.verou.me/css3patterns/) réalisés à partir de dégradés pouvant être utilisés sur des projets ou servir de source d''inspiration.'
  -
    type: text
  -
    type: note
    intent: exercice
    body: '[Exercice Candy Crush&thinsp;🍬](https://smnarnold.com/exercice/css/background-candy-crush)'
is_hidden: false
title: Background
subtitle: 'color, image, gradient'
template: page-article
color_scheme: auto
preview_color: '#72f6e8'
preview: /assets/previews/background.png
fieldset: page-article
id: 16114484-7d3a-48b0-b2a1-a4a6ced3bea0
