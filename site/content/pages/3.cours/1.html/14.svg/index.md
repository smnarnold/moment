body:
  -
    type: text
    body: 'Le SVG _(Scalable Vector Graphic)_ est un format d''image vectorielle. Afin de comprendre son utilité et ses avantages, il est nécessaire de saisir la différence entre le format vectoriel et&nbsp;matriciel.'
  -
    type: text
    body: 'Comme leur nom l''indique, les images vectorielles sont constituées de vecteurs. Ces vecteurs peuvent prendre la forme d''un rectangle, d''un cercle, d''un polygone, bref, de toutes formes géométriques pouvant être définies avec des coordonnées, des lignes droites ou des courbes de&nbsp;Béziers.'
    title: Vectoriel
    level: h2
  -
    type: image
    image: /assets/articles/vector.png
  -
    type: text
    body: |
      Ces images sont produites à l'aide des&nbsp;logiciels:
      
      - Illustrator
      - Sketch
      - Figma
      - etc.
  -
    type: note
    intent: tool
    body: 'Afin de simplifier le code généré par ces logiciels, il est possible d''utiliser l''[outil&nbsp;SVGOMG](https://jakearchibald.github.io/svgomg/).'
  -
    type: text
    body: 'À l''opposée les images dites matricielles _(jpg, png, gif, webp, etc.)_ sont constituées d''une matrice de pixels permettant de reproduire une&nbsp;image.'
    title: Matriciel
    level: h2
  -
    type: image
    image: /assets/articles/bitmap.png
  -
    type: text
    body: 'Plus une image est en haute définition, plus elle contient de pixels dans un même&nbsp;espace.'
  -
    type: image
    image: /assets/articles/batman.jpg
  -
    type: text
    body: |
      Ces images sont produites à l'aide des&nbsp;logiciels:
      
      - Photoshop
      - Gimp
      - Paint
      - etc.
  -
    type: note
    intent: generic
    body: 'Le nom `Pixels` est la contraction des abréviations `Pics` _(picture)_ et `el`&nbsp;_(elements)_.'
  -
    type: text
    title: Importation
    body: 'Par exemple pour importer l''image suivante:'
  -
    type: image
    image: /assets/articles/square-1582418465.png
  -
    type: text
    title: 'Importation classique'
    level: h3
    body: 'Tout comme une image matricielle régulière _(jpg, png, etc.)_, une image SVG peut être importée via la balise&nbsp;`<img>`.'
  -
    type: code
    lang: html
    body: '<img src="dossier/image.svg">'
  -
    type: text
    title: 'Importation en ligne'
    level: h3
    body: 'Puisqu''une image SVG est constituée de formes écrites dans un format de balises, il est possible d''insérer son code directement dans une page&nbsp;HTML.'
  -
    type: code
    lang: html
    body: |
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <rect width="100" height="100" fill="red"/>
        <polygon points="0,0 50,0 50,50 0,80" fill="green"/>
        <polygon points="100,0 100,80 50,50 50,0" fill="blue"/>
      </svg>
  -
    type: text
    body: |
      Remarquez l'attribut `viewbox`. Les 4 chiffres à l'intérieur définissent les dimensions de base de l'image. Les deux premiers représentent la largeur et la hauteur minimale de l'image _(généralement, ces chiffres ont une valeur de&nbsp;0)_. Les deux suivants représentent la largeur et la hauteur de référence utilisée afin de positionnement les éléments de&nbsp;l'image.
      
      Tous les éléments à l'intérieur de la balise `<svg>` sont des formes à afficher dans&nbsp;l'image.
      
      1. La première est un rectangle rouge&thinsp;🔴 de 100 par 100, donc couvrant l'ensemble de la surface de&nbsp;l'image.
      2. La deuxième est un polygone vert&thinsp;🟢 affiché par-dessus le carré rouge. L'attribut `points` correspond à la position des points X et Y constituant la forme à afficher. Par exemple, `0,0` indique que le 1<sup>er</sup> point est positionné à la position X:0 et Y:0. Le 2<sup>e</sup> à la position X:50 et Y:0 et ainsi de&nbsp;suite.
      3. La troisième est aussi un polygone, cette fois-ci bleu&thinsp;🔵, assez similaire au polygone&nbsp;précédent.
  -
    type: text
    title: 'Manipulation CSS et JS'
    level: h2
    body: 'Lorsqu''une image SVG est [importée en ligne](#importation-en-ligne), il est possible de manipuler ses formes en CSS et JavaScript, comme toute autre balise&nbsp;HTML.'
  -
    type: text
    title: CSS
    level: h3
    body: |
      Plusieurs propriétés CSS de base sont compatibles avec les formes SVG. Cependant, certaines propriétés leur sont&nbsp;propres:  
      
      - `fill` contrôlant la couleur de fond _(équivalent de&nbsp;`background-color`)_.
      - `stroke` contrôlant la bordure _(équivalent de&nbsp;`border`)_.
      
      Par exemple, la propriété `fill` de la forme verte est modifiée lorsque la forme est&nbsp;survolée.
  -
    type: codepen
    id: 79b70314f62568afc649d61efeb0346e
    ratio: 34
    tabs: 'css,result'
  -
    type: text
    body: 'Ou encore d''animer la position de certains points'
  -
    type: codepen
    id: mdONxvJ
    ratio: 56
    tabs: 'css,result'
  -
    type: text
    title: Redimensionnement
    level: h2
    body: |
      Les images matricielles et vectorielles peuvent produire des résultats similaires dans conditions optimales, comme dans l'exemple&nbsp;ci-dessous.
      
      - À gauche&thinsp;⬅️, vectoriel&nbsp;_(png)_ 
      - À droite&thinsp;➡️, matriciel&nbsp;_(svg)_.
  -
    type: codepen
    id: 9811d6c5eaf48149bc6d28ef35665311
    ratio: 34
    tabs: chromeless
  -
    type: text
    body: |
      Cependant, lorsque ces images sont redimensionnées _(passez votre souris sur les images)_, remarquez comment les lignes diagonales réagissent. Sur l'image vectorielle, aucune perte de qualité n'est perceptible tandis que sur l'image matricielle, elles deviennent pixélisées et&nbsp;floues. 
      
      Cette particularité rend l'usage d'images vectorielles avantageuses pour des éléments polyvalents pouvant être utilisés à toutes les sauces, telles que des logos ou&nbsp;signatures.
  -
    type: note
    intent: tool
    body: '[Glyphs.fyi](https://glyphs.fyi/dir?i=handHorns&v=path&w=3): une collection d''icônes SVG de haute&nbsp;qualité'
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos des&nbsp;SVG](https://developer.mozilla.org/fr/docs/Web/SVG/Element/svg).'
is_hidden: false
title: SVG
template: page-article
color_scheme: auto
preview_color: '#f6a772'
preview: /assets/previews/svg.png
fieldset: page-article
id: 64af9f1f-ea15-47c4-9ca5-fde48c813e17
