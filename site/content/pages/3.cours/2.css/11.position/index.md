body:
  -
    type: text
    body: |
      Le flux normal, ou ce que les anglophones appellent le _“flow”_, est la façon dont les éléments sont affichés dans une page web lorsqu’aucun style ne leur est&nbsp;appliqué.
      
      Dans le flux normal, les éléments block _(div, p, section, etc.)_ sont positionnés un à la suite de l’autre, tandis que les éléments inline _(span, strong, em, etc.)_, sont positionnés un à côté de l’autre en fonction de leur ordre d’apparition dans le code HTML.
      
      À titre de base comparative, chaque exemple sur cette page utilise le gabarit suivant&thinsp;👇 composé d'éléments en `display: blocks;` placés un en dessous de l’autre. Seule la propriété `position` de ces boites fluctue d'un exemple à l'autre afin d'illustrer la différence engendrée par cette&nbsp;propriété. Un `top: 15vmin;` a aussi été attribué à la boite&thinsp;🟦 afin de mettre en évidence l'impact de&nbsp;`position`.
  -
    type: codepen
    id: f5d3d9faf54a0dee81045135a3eb4c4a
    theme: light
    ratio: 34
    tabs: 'html,result'
  -
    type: text
    title: Static
    level: h2
    body: |
      Par défaut, le navigateur attribue la position static à tous les éléments. La particularité principale de cette position est que les propriétés `top`, `right`, `bottom`, `left` ou encore `z-index` n’ont <u>aucun impact</u> sur ces éléments&thinsp;🚫. 
      
      Cette valeur de position à pour objectif de positionner les éléments comme le ferait le code HTML sans l’intervention du&nbsp;CSS. On remarque donc que la propriété `top` n'affecte aucunement la boite&thinsp;🟦.
  -
    type: codepen
    id: bGwZJav
    theme: light
    ratio: 34
    tabs: 'css,result'
  -
    type: note
    intent: emmet
    body: 'Raccourci Emmet: poss'
  -
    type: text
    title: Relative
    level: h2
    body: |
      Les éléments en `position: relative;` se positionnent d'abord en fonction du flux normal de la page. Ils sont ensuite déplacés relativement à cet emplacement, d'où leur nom `position: relative;`.
      
      On remarque donc dans l'exemple ci-dessous que la boite&thinsp;🟦 est décalée d'une demi-hauteur de boite par rapport à sa position normale dans le&nbsp;flux.
  -
    type: codepen
    id: XWjQrMK
    theme: light
    ratio: 34
    tabs: 'css,result'
  -
    type: note
    intent: emmet
    body: 'Raccourci Emmet: posr'
  -
    type: text
    title: Absolute
    level: h2
    body: |
      Les éléments en `position: absolute;` ignorent complètement le flux de la page et se positionnent en fonction du parent le plus près aillant une position autre que&nbsp;static.
      
      On remarque dans l'exemple ci-dessous que les éléments respectant le flux se positionnent exactement comme si la boite&thinsp;🟦 n'existait pas _(aucun espace vide entre la boite&thinsp;🟩 et la&thinsp;🟥)_. La boite&thinsp;🟦 quant à elle se positionne par rapport au `<body>` qui en l'absence de parent avec une position devient sont point de&nbsp;référence.
  -
    type: codepen
    id: qBawWJp
    theme: light
    ratio: 34
    tabs: 'css,result'
  -
    type: note
    intent: emmet
    body: 'Raccourci Emmet: posa'
  -
    type: text
    title: Fixed
    level: h2
    body: |
      Les éléments en `position: fixed;` ressemblent aux éléments en [position absolute](#absolute). Tout comme eux, ils ignorent le flux de la page. Cependant, plutôt que de se positionner en fonction d'un parent, ils se positionnent en fonction de la fenêtre&nbsp;_(viewport)_.
      
      On remarque dans l'exemple ci-dessous que les éléments respectant le flux se positionnent exactement comme si la boite 🟦 n'existait pas _(aucun espace vide entre la boite 🟩 et la 🟥)_. La boite&thinsp;🟦 quant à elle se positionne par rapport à la fenêtre, donc même si la page défile, la boite reste&nbsp;fixe.
  -
    type: codepen
    id: yLarNJB
    theme: light
    ratio: 34
    tabs: 'css,result'
  -
    type: note
    intent: emmet
    body: 'Raccourci Emmet: posf'
  -
    type: text
    title: Sticky
    level: h2
    body: |
      Les éléments en `position: sticky;` ressemblent aux éléments en [position static](#static). Tout comme eux, ils se positionnent d'abord en fonction du flux normal de la page. Cependant, lorsqu'une de leurs propriétés `top`, `right`, `bottom` ou `left` correspond au défilement de la page, l'élément devient&nbsp;fixe.
      
      Dans l'exemple ci-dessous, la boite&thinsp;🟦 n'est à priori pas affectée par la propriété `top`. Cependant, lorsque la page défile et que la boite se trouve à une distance du sommet équivalente à la valeur de sa propriété `top`, celle-ci devient fixe et arrête de défiler avec le reste de la&nbsp;page.
  -
    type: codepen
    id: bGwJdBz
    theme: light
    ratio: 34
    tabs: 'css,result'
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos des&nbsp;positions](https://developer.mozilla.org/fr/docs/Web/CSS/position).'
  -
    type: note
    intent: exercice
    body: 'Pratiquez vos positions&thinsp;😺 [codepen.io/smnarnold/full/ZEpZWPB](https://codepen.io/smnarnold/full/ZEpZWPB)'
is_hidden: false
title: Position
subtitle: 'static, relative, absolute, fixed, sticky'
template: page-article
color_scheme: auto
preview_color: '#f672a6'
preview: /assets/img/position.png
fieldset: page-article
id: 28760055-809a-49e6-8580-45c12e4d05f3
