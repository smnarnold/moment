body:
  -
    type: text
    title: 'width et height'
    body: 'Les propriétés `width` et `height` permettent de définir respectivement la largeur et la hauteur d''un élément. Par défaut leur valeur est à&nbsp;`auto`.'
  -
    type: note
    intent: emmet
    body: 'Raccourcis Emmet: w pour `width` et h pour&nbsp;`height`.'
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article sur MDN à propos de width](https://developer.mozilla.org/fr/docs/Web/CSS/width) et cet [article à propos de&nbsp;height](https://developer.mozilla.org/fr/docs/Web/CSS/height).'
  -
    type: text
    title: 'min-width et min-height'
    body: |
      Les propriétés `min-width` et `min-height` permettent de définir une <u>largeur et une hauteur minimale</u> à un&nbsp;élément.
      
      Par exemple, pour s'assurer qu'un élément ne soit jamais plus petit que 400px, il est possible d'utiliser:
  -
    type: code
    lang: css
    body: |
      .element {
        width: 50%;
        min-width: 400px;
      }
  -
    type: text
    body: |
      Puisque `min-width` a préséance sur `width`, l'élément adoptera alors sa&nbsp;largeur.
      
      Si l'élément est dans un parent ayant un `width`&nbsp;de:
      
      - `1000px`: 400px < 500px _(50%)_ ➡️ 500px
      - `500px`: 400px > 250px _(50%)_ ➡️ 400px
  -
    type: note
    intent: emmet
    body: 'Raccourcis Emmet: mw pour `min-width` et mh pour&nbsp;`min-height`.'
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article sur MDN à propos de min-width](https://developer.mozilla.org/fr/docs/Web/CSS/min-width) et cet [article à propos de&nbsp;min-height](https://developer.mozilla.org/en-US/docs/Web/CSS/min-height).'
  -
    type: text
    title: 'max-width et max-height'
    level: h2
    body: |
      Les propriétés `max-width` et `max-height` permettent de définir une <u>largeur et une hauteur maximale</u> à un&nbsp;élément.
      
      Par exemple, pour s'assurer qu'un élément ne soit jamais plus grand que 400px, il est possible&nbsp;d'utiliser:
  -
    type: code
    lang: css
    body: |
      .element {
        width: 50%;
        max-width: 400px;
      }
  -
    type: text
    body: |
      Puisque `max-width` a préséance sur `width`, l'élément adoptera alors sa&nbsp;largeur.
      
      Si l'élément est dans un parent ayant un `width`&nbsp;de:
      
      - `1000px`: 400px < 500px _(50%)_ ➡️ 400px
      - `500px`: 400px > 250px _(50%)_ ➡️ 250px
  -
    type: note
    intent: generic
    body: '`max-width: 100%` est régulièrement appliqué aux imagea sans qu''un `width` leur soit défini. Ainsi, l''image prend sa largeur normale, mais ne dépasse jamais de&nbsp;l''écran.'
  -
    type: note
    intent: emmet
    body: 'Raccourcis Emmet: maw pour `max-width` et mah pour&nbsp;`max-height`.'
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article sur MDN à propos de max-width](https://developer.mozilla.org/fr/docs/Web/CSS/max-width) et cet [article à propos de&nbsp;max-height](https://developer.mozilla.org/en-US/docs/Web/CSS/max-height).'
is_hidden: false
title: 'Width et height'
subtitle: 'min-width/height, max-width/height'
template: page-article
color_scheme: auto
preview_color: '#72c9f6'
preview: /assets/previews/width-et-height.png
fieldset: page-article
id: 3cd1b6ab-5e37-4d61-8dee-faaf2a854e45
