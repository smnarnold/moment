body:
  -
    type: text
    body: 'Bootstrap est truffés de classes utilitaires permettant de simplifier/accélérer le développement. Afin de vous familiariser avec ce concept, nous allons examiner quelques-unes d''entre&nbsp;elles.'
  -
    type: text
    title: 'Image responsive'
    level: h2
    body: 'Comme son nom le laisse sous-entendre, la classe `.img-fluid` sert à rendre une image fluid/responsive en lui appliquant les propriétés CSS&nbsp;suivantes:'
  -
    type: code
    lang: css
    body: |
      max-width: 100%;
      height: auto;
  -
    type: text
    body: |
      La propriété `max-width` fait en sorte que l'image affichera selon sa taille normale, à moins que l'espace soit insuffisant. Dans ce cas, elle sera limitée à la largeur disponible. De son côté, `height: auto;` s'assure que l'image ne soit jamais&nbsp;déformée. 
      
      Pour activer cette classe, il suffit de l'ajouter à une image ainsi:
  -
    type: code
    lang: html
    body: '<img src="image.jpg" class="img-fluid">'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir ce [billet Bootstrap à propos de&nbsp;img-fluid](https://getbootstrap.com/docs/5.0/content/images/).'
  -
    type: text
    title: 'Alignements de texte'
    level: h2
    body: |
      Pour aligner un texte à gauche, au centre ou à droite, il est possible d'utiliser les classes utilitaires&nbsp;suivantes:
      
      - `text-start` à gauche
      - `text-center` au centre
      - `text-end` à droite
      
      Toutes ces options d'alignements sont compatibles avec l'ajout d'un breakpoint afin d'indiquer quand leur comportement devrait devenir&nbsp;actif.
      
      Par exemple, pour centrer un texte lorsque le breakpoint `lg` est atteint, il serait possible de&nbsp;faire:
  -
    type: code
    lang: html
    body: '<p class="text-lg-center">Texte centré en lg</p>'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir ce [billet Bootstrap à propos des utilitaires&nbsp;texte](https://getbootstrap.com/docs/5.0/utilities/text/).'
  -
    type: text
    title: Display
    level: h2
    body: |
      Pour donner une valeur de `display` particulière à un élément, il est possible d'utiliser les classes utilitaires&nbsp;suivantes:
      
      - `d-block` pour display block.
      - `d-inline` pour display inline.
      - `d-inline-block` pour display inline-block.
      - `d-flex` pour display flex.
      - `d-none` pour display none.
      - etc.
      
      Toutes ces options de display sont compatibles avec l'ajout d'un breakpoint afin d'indiquer le moment où l'affichage un affichage devrait&nbsp;changer.
      
      Par exemple, pour qu'un élément soit invisible par défaut, mais devienne en `display: block` lorsque le breakpoint `lg` est atteint, il serait possible de&nbsp;faire:
  -
    type: code
    lang: html
    body: '<div class="d-none d-lg-block">...</div>'
is_hidden: false
title: Utilitaires
template: page-article
color_scheme: auto
preview_color: '#7356ae'
fieldset: page-article
id: 9962f937-cfbf-4643-88ba-1e4a054a5d06
