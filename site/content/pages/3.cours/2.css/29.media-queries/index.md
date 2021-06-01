body:
  -
    type: text
    body: |
      Les médias queries permettent d'adapter le contenu d'une page aux caractéristiques de l'appareil de&nbsp;l'utilisateur. 
      
      Par exemple, pour distinguer l'écran d'un cellulaire versus l'écran plus large d'un ordinateur, on pourrait utiliser la media query&nbsp;suivante:
  -
    type: code
    lang: css
    body: '@media screen and (min-width: 1000px) { ... }'
  -
    type: text
    body: |
      Dans ce cas j'ai:
      
      - Une déclaration de media query `@media`
      - Un type de média `screen`
      - Un opérateur logique `and`
      - Une caractéristique `(min-width: 1000px)`
      
      Nous pourrions donc définir la couleur rouge comme couleur de fond de notre&nbsp;page:
  -
    type: code
    lang: css
    body: 'body { background: red; }'
  -
    type: text
    body: 'Et si notre media query est respectée, être un écran et avoir une largeur minimale de 1000px, redéfinir cette couleur à&nbsp;bleu:'
  -
    type: code
    lang: css
    body: |
      @media screen and (min-width: 1000px) { 
        body { background: blue; }
      }
  -
    type: image
    image: /assets/articles/media-query.gif
  -
    type: text
    title: 'Types de média'
    level: h2
    body: |
      Le type de média est optionnel. Il correspond au contexte utilisé pour consulter à la page.
      
      - `all` couvre tous les types de médias de cette liste _(par&nbsp;défaut)_.
      - `screen` Si quelqu'un consulte la page via un&nbsp;écran&thinsp;📱/💻.
      - `print` Si quelqu'un décide d'imprimer la&nbsp;page&thinsp;🖨️.
      - `speech` Si quelqu'un utilise un outil de synthèse vocale&thinsp;🔊.
  -
    type: note
    intent: warning
    body: 'Si le type est omis, les règles s''appliqueront à tous les types d''appareils. Autrement dit, `@media all and (min-width: 1000px) { ... }` et `@media (min-width: 1000px) { ... }` sont&nbsp;équivalent.'
  -
    type: text
    title: 'Caractéristiques de média'
    body: |
      Les caractéristiques média s'écrivent <u>toujours entre parenthèses</u> et testent si une condition spécifique est respectée.
      
      - **min-width/max-width** Basé sur la largeur du viewport _(de la fenêtre)_. Ex: `(min-width: 1000px)`
      - **min-height/max-height**	Basé sur la hauteur du viewport _(de la fenêtre)_. Ex: `(max-height: 600px)`
      - **min-aspect-ratio/max-aspect-ratio** Le rapport largeur/hauteur du viewport _(de la fenêtre)_. Ex: `(min-aspect-ratio: 16/9)`
      - **orientation** `portrait` ou `landscape`
      - **prefers-reduced-motion** `no-preference` ou `reduce`. Certaines personnes sont sensibles aux animations 🤮. D'où pourquoi de plus en plus d'appareils laissent indiquer à l'utilisateur si il préfère un niveau d'animation normal ou réduit. Ex: `(prefers-reduced-motion: reduce)`
      - **prefers-color-scheme** `light` ou `dark` ◻️/◼️. Ex: `(prefers-color-scheme: dark)`
  -
    type: image
    image: /assets/articles/prefer-color-scheme.gif
  -
    type: note
    intent: generic
    body: '[Apple Music](https://www.apple.com/ca/fr/apple-music/) se base sur une media query afin d''ajuster son thème on fonction de la préférence de&nbsp;l''usager.'
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir la [liste exhaustive MDN des caractéristiques supportées dans les média&nbsp;queries](https://developer.mozilla.org/fr/docs/Web/CSS/Requ%C3%AAtes_m%C3%A9dia/Utiliser_les_Media_queries)'
  -
    type: text
    title: 'Opérateurs logiques'
    level: h2
    body: |
      Permettent d'indiquer le lien entre différentes parties de notre média&nbsp;query.
      
      `and` Permet de combiner plusieurs requêtes média en une seule. Pour que la requête soit respectée, il faut que chacune des sous-requêtes soit vraie. ex: `screen and (min-width: 1000px)` s'appliquera sur tous les écrans de minimum 1000px de&nbsp;large.
      
      `not` Retourne le résultat opposé d'une requête média. S'il est utilisé dans une liste de requêtes séparées par des virgules, il ne nie que la requête sur laquelle il est appliqué. ex: `not (orientation: landscape)` s'appliquera sur tous les écrans dont l'orientation est&nbsp;portrait.
      
      `,` _(virgule)_ Permet de combiner plusieurs requêtes. Chaque requête est traitée séparément. Il suffit qu'une seule de ces requêtes soit respectée pour que les styles s'appliquent. ex: `(orientation: landscape), (min-width: 600px)` s'appliquera sur les appareils dont l'orientation est landscape **et/ou** la largeur minimale est de 600px. Donc une tablette en mode portrait serait quand même affectée par les styles même si son orientation ne correspond&nbsp;pas.
  -
    type: note
    intent: exercice
    body: 'Exercice [Minions](https://smnarnold.com/exercice/css/media-queries-minions)&thinsp;🟡'
  -
    type: text
    title: Breakpoints
    level: h2
    body: |
      Même si notre site est parfaitement responsive, il est parfois souhaitable de faire un changement d'affichage dans certains contextes, afin d'éviter que la dimension de certains éléments devienne un&nbsp;enjeu. 
      
      Par exemple, deux sections juxtaposées sur un écran large font du sens. Cependant sur l'écran plus restreint d'un mobile, elles risquent d'être ridiculement coincées. D'où l'utilité à un certain point *(Breakpoint)* de changer les règles d'affichage via une media&nbsp;query.
  -
    type: image
    image: /assets/articles/breakpoints.gif
    source: 'https://blog.froont.com/9-basic-principles-of-responsive-web-design/'
  -
    type: text
    body: 'Ainsi, les sections pourraient passées de&nbsp;demis:'
  -
    type: code
    lang: css
    body: '.section { width: 50%; }'
  -
    type: text
    body: 'À pleines lorsque la largeur de l''écran est inférieur à&nbsp;600px:'
  -
    type: code
    lang: css
    body: |
      @media (max-width: 600px) { 
        .section { width: 100%; } 
      }
  -
    type: note
    intent: exercice
    body: 'Exercice [Où est Charlie?](https://smnarnold.com/exercice/css/media-queries-ou-est-charlie)&thinsp;🔍'
  -
    type: text
    title: 'Où les utiliser?'
    level: h2
    body: |
      Les médias queries peuvent être utilisés à différents endroits:
      
      - Dans les **feuilles de styles**.
      - Directement sur une balise `<link>`. ex: <samp>print.css</samp> ne devrait s'appliquer que lorsque l'utilisateur souhaite imprimer:
  -
    type: code
    lang: html
    body: '<link href="print.css" rel="stylesheet" media="print">'
  -
    type: note
    intent: generic
    body: 'Toutes les notes de cours de ce site utilisent une media query sensible à votre **prefers-color-scheme**.'
is_hidden: false
title: 'Media queries'
subtitle: 'Requêtes média'
template: page-article
color_scheme: auto
preview_color: '#72f6aa'
preview: /assets/previews/media-queries.png
page_template: page-article
fieldset: page-article
id: 72623d91-1b0d-4de1-9bf1-a01953a6f7ea
