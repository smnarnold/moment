body:
  -
    type: text
    body: 'Plusieurs propriétés CSS permettent de contrôler l''apparence d''un texte. Voici quelques-unes des propriétés les plus&nbsp;courantes.'
  -
    type: text
    title: font-family
    level: h2
    body: |
      La propriété `font-family` permet de spécifier la police de caractères pour afficher du texte dans un&nbsp;élément. 
      
      Cette propriété accepte le nom d'une&nbsp;police:
  -
    type: code
    lang: css
    body: 'font-family: Helvetica;'
  -
    type: text
    body: 'Ou encore une liste de&nbsp;polices:'
  -
    type: code
    lang: css
    body: 'font-family: Helvetica, Arial, sans-serif;'
  -
    type: text
    body: |
      Cette dernière possibilité présente deux&nbsp;avantages:
      
      1. Fournir une police de substitution si une police est indisponible. Par exemple, les appareils Windows n'ayant pas la fonte Helvetica par défaut, ces appareils utiliseront la prochaine police dans la liste compatible, soit&nbsp;Arial.
      2. Si un caractère est manquant dans la police _("é", "ë", "ç", etc.)_ le navigateur utilisera un caractère de la prochaine police afin de le&nbsp;remplacer.
  -
    type: codepen
    id: 421f7fb683df08cd36d400cbc3e0b84e
    ratio: 34
    custom_ratio: '15'
    tabs: chromeless
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos de&nbsp;font-family](https://developer.mozilla.org/fr/docs/Web/CSS/font-family).'
  -
    type: text
    title: font-weight
    level: h2
    body: |
      La propriété `font-weight` permet de définir la graisse d'un&nbsp;texte.
      
      Par exemple:
  -
    type: code
    lang: css
    body: 'font-weight: bold;'
  -
    type: text
    body: |
      Plusieurs graisses sont généralement disponibles. Ces graisses peuvent être spécifiées via leur valeur numérique ou encore leur&nbsp;nom.
      
      | Numérique     | Nom           |
      | ------------- | ------------- |
      | 100           | thin          |
      | 200           | extra light   |
      | 300           | light         |
      | 400           | normal        |
      | 500           | medium        |
      | 600           | semi-bold     |
      | 700           | bold          |
      | 800           | extra bold    |
      | 900           | black         |
      
      Par défaut, si aucune graisse n'est spécifiée, le texte est en normal&nbsp;_(400)_. Il est aussi possible de spécifier au texte d'être légèrement plus fin que sont texte courant grâce au mot-clé `lighter` ou encore plus gras, grâce à&nbsp;`bolder`.
  -
    type: codepen
    id: b7091cbfe4d07ecdce71e919bf128526
    ratio: 34
    custom_ratio: '15'
    tabs: chromeless
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDM à propos de&nbsp;font-weight](https://developer.mozilla.org/fr/docs/Web/CSS/font-weight).'
  -
    type: text
    title: font-size
    level: h2
    body: 'La propriété `font-size` permet de définir la taille du texte. Bien que l''unité la plus courante soit les pixels, toutes les [unités de mesure](unites-de-mesure) sont&nbsp;acceptées.'
  -
    type: code
    lang: css
    body: 'font-size: 16px;'
  -
    type: text
    body: |
      Par défaut, si aucune taille n'est spécifiée, la majorité des navigateurs lui attribueront la taille de 16px. Il est aussi possible de spécifier à un texte d'être légèrement plus petite que sont texte courant grâce au mot-clé `smaller` ou encore plus gros, grâce à&nbsp;`larger`.
      
      Bien que les px soient très répandus, il ne faut pas sous-estimer les avantages offerts par les `rem` et&nbsp;`em`.
  -
    type: codepen
    id: 9fb5018a466491fdc33b0837edf6e984
    ratio: 34
    custom_ratio: '15'
    tabs: chromeless
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos de&nbsp;font-size](https://developer.mozilla.org/fr/docs/Web/CSS/font-size).'
  -
    type: text
    title: line-height
    level: h2
    body: |
      La propriété `line-height` indique la hauteur de chacune des lignes de texte. Bien que cette propriété accepte les valeurs en pixel, la valeur la plus répandue et la plus polyvalente consiste en un ratio basé sur la taille du&nbsp;texte.
      
      Par exemple:
  -
    type: code
    lang: css
    body: 'line-height: 1.5;'
  -
    type: text
    body: |
      Définit une hauteur de ligne de 24px si la taille de texte est de 16px, puisque: 16px * 1.5 =&nbsp;24px.
      
      Généralement, un `line-height` de base est définie sur la balise `<body>`. Ainsi il affecte tous les éléments de la&nbsp;page.
  -
    type: codepen
    id: 7372f085419a3516252249c02097166e
    ratio: 56
    custom_ratio: '15'
    tabs: chromeless
  -
    type: note
    intent: mdn
    body: 'Pour en savoir, voir cet [article MDN à propos de&nbsp;line-height](https://developer.mozilla.org/fr/docs/Web/CSS/line-height).'
  -
    type: text
    title: font-style
    level: h2
    body: |
      La propriété `font-style` permet de définir si un texte devrait apparaitre en italique ou&nbsp;non, grâce aux&nbsp;valeurs:
      
      - normal _(par défaut)_
      - italic
  -
    type: codepen
    id: 99e5409c89f8256876e5d4d18c323808
    ratio: 34
    custom_ratio: '15'
    tabs: chromeless
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos de&nbsp;font-style](https://developer.mozilla.org/fr/docs/Web/CSS/font-style).'
  -
    type: text
    title: color
    level: h2
    body: 'La propriété `color` permet de définir la couleur du texte. Cette propriété accepte toutes les [unités de couleur](unites-de-couleur).'
  -
    type: codepen
    id: d050be8ad3919249a1a2b276e103cb53
    ratio: 34
    custom_ratio: '15'
    tabs: chromeless
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos de&nbsp;color](https://developer.mozilla.org/fr/docs/Web/CSS/color).'
  -
    type: text
    title: text-align
    level: h2
    body: |
      La propriété `texte-align`, comme son nom l'indique, sert à déterminer l'alignement horizontal du texte. Différentes options sont&nbsp;disponibles:
      
      - `left` _(par défaut)_
      - `right`
      - `center`
      - `justify`
  -
    type: codepen
    id: 016fbebf219f5f1c9fcb0e2a5b220a55
    ratio: 34
    custom_ratio: '15'
    tabs: chromeless
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos de&nbsp;text-align](https://developer.mozilla.org/fr/docs/Web/CSS/text-align).'
  -
    type: text
    title: text-decoration
    level: h2
    body: |
      La propriété `text-decoration` est une propriété raccourcie permettant d'ajouter ou de retirer une ligne à un texte. Par exemple, les navigateurs utilisent cette propriété afin de différencier les liens des textes normaux en les&nbsp;soulignant.
      
      Cette propriété accepte plusieurs arguments, tel que le type de ligne, sa couleur et son&nbsp;style.
  -
    type: codepen
    id: 0f02798b8a4e11f0fec8da29bdaf3648
    ratio: 34
    custom_ratio: '15'
    tabs: chromeless
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos de&nbsp;text-decoration](https://developer.mozilla.org/fr/docs/Web/CSS/text-decoration).'
  -
    type: text
    title: text-transform
    level: h2
    body: |
      La propriété `text-transform` permet de modifier un texte. Cette propriété accepte diverses&nbsp;valeurs:
      
      - `none` n'a aucun impact _(par&nbsp;défaut)_.
      - `lowercase` transforme le texte en&nbsp;minuscules.
      - `uppercase` transforme le texte en&nbsp;majuscules.
      - `capitalize` transform en majuscule la première lettre de chaque&nbsp;mot.
  -
    type: codepen
    id: 33bd3cc1778d84b171507a6badc3c514
    ratio: 34
    custom_ratio: '15'
    tabs: chromeless
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos de&nbsp;text-transform](https://developer.mozilla.org/fr/docs/Web/CSS/text-transform).'
  -
    type: text
    title: text-stroke
    level: h2
    body: 'La propriété `-webkit-text-stroke` bien que non standard, d''où sont préfix `-webkit`, est supportée par tous les navigateurs majeurs. Cette propriété accepte deux valeurs. L''épaisseur du trait entourant le le texte et la couleur du trait en&nbsp;question.'
  -
    type: codepen
    id: 5a63da85b35af624ff901adea41a72aa
    ratio: 34
    custom_ratio: '15'
    tabs: chromeless
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos de&nbsp;text-stroke](https://developer.mozilla.org/fr/docs/Web/CSS/-webkit-text-stroke).'
  -
    type: text
    title: text-shadow
    level: h2
    body: |
      La propriété `text-shadow` permet d'ajouter une ombre à un texte. Cette propriété nécessite un décalage sur les X ou Y afin d'être visible par défaut. Une 3<sup>e</sup> valeur peut être ajoutée afin de spécifier le niveau de flou souhaité pour l'ombre. Finalement, une 4<sup>e</sup> valeur permet d'indiquer la couleur de l'ombre qui par défaut est de la même couleur que le&nbsp;texte.
      
      Il est possible d'ajouter plusieurs ombres à un même texte si&nbsp;désiré.
  -
    type: codepen
    id: bb8a0b46ce36834dc817d6b319d6362c
    ratio: 34
    custom_ratio: '15'
    tabs: chromeless
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos de&nbsp;text-shadow](https://developer.mozilla.org/fr/docs/Web/CSS/text-shadow).'
is_hidden: false
title: Fonte
subtitle: 'family, weight, size, style, line-height'
template: page-article
color_scheme: auto
preview_color: '#f4f672'
preview: /assets/previews/fonte.png
fieldset: page-article
id: c178b22b-d368-4df4-b3da-e1ca6647ca05
