body:
  -
    type: text
    body: |
      La balise `<img>` permet d'afficher une image. Seul son attribut `src` est obligatoire puisqu'il spécifie [le chemin](https://smnarnold.com/cours/autres/chemin-de-fichiers) vers l'image à&nbsp;afficher.
      
      Par exemple:
  -
    type: codepen
    id: b3c11e171f2c1fe6f3d0f49b691289a4
    ratio: 34
    tabs: 'html,result'
  -
    type: text
    title: Alt
    level: h2
    body: |
      L'attribut `alt`, bien que non obligatoire, est fortement recommandé puisqu'il permet de fournir une description alternative dans le cas où l'image ne puisse être chargée _(chemin&nbsp;brisé)_. 
      
      Par exemple:
  -
    type: codepen
    id: 6e2d529de24d791c057e9234146949c3
    ratio: 34
    custom_ratio: '15'
    tabs: 'html,result'
  -
    type: text
    body: |
      Il permet aussi aux lecteurs ayant recours à un assistant vocal d'avoir une brève description du contenu de l'image. Il est donc conseillé d'être concis et d'éviter les termes&nbsp;vagues.
      
      👌
  -
    type: code
    lang: html
    body: '<img src="image.png" alt="carré vert, bleu et rouge">'
  -
    type: text
    body: 🚫
  -
    type: code
    lang: html
    body: '<img src="image.png" alt="image">'
  -
    type: note
    intent: generic
    body: 'Si l''image ne contient pas de contenu informatif, mais uniquement esthétique, par exemple une image d''une ligne diagonale utilisée entre deux blocs de contenu, il est suggéré d''inscrire `alt=""` afin d''indiquer que l''image est purement&nbsp;décorative.'
  -
    type: text
    title: 'Width & Height'
    level: h2
    body: |
      Les attributs `width` et `height` permettent de spécifier la dimension intrinsèque de l'image. C'est à dire sa dimension d'origine si celle-ci n'était pas manipulée en CSS. Ces attributs ne doivent pas spécifier d'unité de mesure. Le navigateur assumera automatiquement que ces valeurs sont exprimées en pixels&nbsp;_(px)_.
      
      Par exemple:
  -
    type: codepen
    id: 087868df3cfb67db7a62aaca43288f04
    ratio: 34
    tabs: 'html,result'
  -
    type: text
    body: |
      Spécifier la dimension intrinsèque d'une image permet au navigateur d'afficher une page plus rapidement. Sans ces attributs, le navigateur doit attendre que l'image ait terminé de charger afin d'obtenir ses dimensions et ensuite calculer l'espace à y allouer. Si ces informations sont déjà fournies via des attributs, le navigateur peut calculer le rendu de la page de façon&nbsp;ininterrompu.
      
      👌
  -
    type: code
    lang: html
    body: '<img src="image.png" width="100" height="100">'
  -
    type: text
    body: 🚫
  -
    type: code
    lang: html
    body: '<img src="image.png" width="100px" height="100px">'
  -
    type: text
    title: 'Classe et ID'
    level: h2
    body: 'Comme toute balise HTML, il est possible d''attribuer une classe ou un id à une image afin de pouvoir la manipuler en CSS ou JavaScript par la&nbsp;suite.'
  -
    type: text
    title: Loading
    level: h2
    body: |
      L'attribut `loading` permet d'indiquer la priorité de chargement d'une image. Par défaut, le navigateur tente de charger toutes images en accordant une légère priorité à celles visibles au chargement de la page dans la fenêtre. Cependant il est possible de lui spécifier différentes valeurs:
      
      - `auto` comportement normal, soit l'équivalent de ne pas mettre&nbsp;l'attribut.
      - `lazy` attendre que l'image soit sur le point d'être visible avant de la chargée. Donc si un usager ne fait jamais défiler la page jusqu'à celle-ci, l'image ne sera jamais chargée. Cette option permet d'accélérer le chargement de la&nbsp;page&thinsp;🏁.
      - `eager` indique de charger l'image le plus rapidement possible, peu importe sa position dans la&nbsp;page.
      
      Par exemple, pour faire du _"lazy-loading"_:
  -
    type: codepen
    id: 4d725bc95df38a90b2d0b47a2571c2f5
    ratio: 34
    tabs: 'html,result'
  -
    type: note
    intent: warning
    body: 'Si une image est visible au chargement de la page, il est recommandé de ne pas lui ajouter l''attribut `loading="lazy"` afin de forcer son chargement le plus rapidement&nbsp;possible.'
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos de la balise&nbsp;img](https://developer.mozilla.org/fr/docs/Web/HTML/Element/Img).'
is_hidden: false
title: Image
template: page-article
color_scheme: auto
preview_color: '#72b6f6'
preview: /assets/previews/img-1618940435.png
fieldset: page-article
id: cc9d5630-a41e-40d1-bb08-aee207bd8cc0
