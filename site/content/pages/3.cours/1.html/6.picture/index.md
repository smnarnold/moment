body:
  -
    type: text
    body: |
      La balise `<picture>` permet de définir plusieurs sources à une balise `<img>`. Cet fonctionnalité permet de spécifier certaines sources d'images mieux adaptées à l'écran de&nbsp;l'utilisateur.
      
      Par exemple, une balise `<img>` de base est utilisée à gauche. Remarquez comment le sujet perd de son importance lorsqu'il est affiché dans un format étroit. Tandis qu'à droite, une balise `<picture>` permet de changer la source de ladite image afin d'afficher une version au cadrage plus serré sur le sujet lorsque l'écran est&nbsp;étroit.
  -
    type: codepen
    id: yLVLEzz
    ratio: 34
    tabs: chromeless
  -
    type: text
    body: |
      Pour définir une `<picture>` de base, il suffit de spécifier une balise `<img>` à l'intérieur de&nbsp;celle-ci.
      
      Par exemple:
  -
    type: code
    lang: html
    body: |
      <picture>
        <img src="img.jpg">
      </picture>
  -
    type: text
    body: 'Cet exemple minimaliste affichera toujours la balise `<img>` avec sont contenu original inclut dans l''attribut&nbsp;`src`. Bref, l''incorporation de la balise `<picture>` n''aura aucun&nbsp;effet.'
  -
    type: text
    title: 'Sources et conditions'
    level: h2
    body: |
      Il est possible de spécifier une ou plusieurs sources alternatives grâce à la balise `<source>`.
      
      Par exemple:
  -
    type: code
    lang: html
    body: |
      <picture>
        <source srcset="img-large.jpg" media="(min-width: 1000px)">
        <img src="img.jpg">
      </picture>
  -
    type: text
    body: |
      Lorsque des `<source>` sont présentes, le navigateur les parcours une à la suite de l'autre et dès qu'une d'entre elles voit sa condition être respectée, la valeur de son `srcset` est attribuée au `src` de la balise `<img>`&nbsp;voisine.
      
      Bref, si l'écran à une largeur équivalente ou supérieure à 1000px, _img-large.jpg_ sera affichée, sinon _img.jpg_ sera&nbsp;utilisée.
      
      Il est possible d'utiliser l'ensemble des conditions offertes dans les [média queries&nbsp;CSS](../css/media-queries).
  -
    type: text
    title: Utilité
    level: h2
    body: |
      - Recadrer une image selon l'espace&nbsp;disponible.
      - Afficher une image dans une résolution correspondant à celle de l'écran de&nbsp;l'utilisateur.
      - Afficher des images mieux agencées au thème de l'utilisateur foncé ou&nbsp;clair.
      - Éviter d'afficher des GIFs animés aux individus ayant spécifier préféré éviter autant que possible les&nbsp;animations.
      - Fournir une image optimisée pour&nbsp;l'impression.
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos de&nbsp;picture](https://developer.mozilla.org/fr/docs/Web/HTML/Element/picture).'
is_hidden: false
title: Picture
template: page-article
color_scheme: auto
preview_color: '#6b14e0'
preview: /assets/previews/picture.png
fieldset: page-article
id: 225767a3-c28b-4789-affc-585719cb77ab
