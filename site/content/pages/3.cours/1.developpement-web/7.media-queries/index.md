title: 'Media queries (Requêtes média)'
template: page-article
color_scheme: auto
body:
  -
    type: text
    body: |
      Les médias queries permettent d'adapter le contenu d'une page aux caractéristiques de l'appareil de&nbsp;l'utilisateur. 
      
      Par exemple, pour distinguer l'écran d'un cellulaire versus l'écran plus large d'un ordinateur, on pourrait utiliser la media query&nbsp;suivante:
      
      `@media screen and (min-width: 1000px) { ... }`
      
      Dans ce cas j'ai:
      
      - Une déclaration de media query `@media`
      - Un type de média `screen`
      - Un opérateur logique `and`
      - Une caractéristique de média `(min-width: 1000px)`
      
      Nous pourrions donc définir la couleur saumon comme couleur de base de notre page `body { background: salmon; }` et si notre media query est respectée _(être un écran et avoir une largeur minimale de 1000px)_ redéfinir cette couleur à bleu `@media screen and (min-width: 1000px) { background: blue; }`
  -
    type: image
    image: /assets/articles/media-query.gif
  -
    type: text
    title: 'Types de média'
    level: h2
    body: |
      Le type de média est optionnel. Il correspond au contexte utilisé pour consulter à la page.
      
      - **all** Par défaut, couvre tous les types de medias de cette liste.
      - **screen** Si quelqu'un consulte la page via un écran 📱/💻.
      - **print** Si quelqu'un décide d'imprimer la page 🖨️.
      - **speech** Si quelqu'un utilise un outil de synthèse vocale 🔊.
  -
    type: text
    title: 'Caractéristiques de média'
    body: |
      Les caractéristiques média s'écrivent toujours entre parenthèses et testent si une condition spécifique est respectée.
      
      - **min-width/max-width** Basé sur la largeur du viewport _(de la fenêtre)_. Ex: `(min-width: 1000px)`
      - **min-height/max-height**	Basé sur l'hauteur du viewport _(de la fenêtre)_. Ex: `(max-height: 600px)`
      - **min-aspect-ratio/max-aspect-ratio** Le rapport largeur/hauteur du viewport _(de la fenêtre)_. Ex: `(min-aspect-ratio: 16/9)`
      - **orientation** `portrait` ou `landscape`
      - **prefers-reduced-motion** `no-preference` ou `reduce`. Certaines personnes sont sensibles aux animations 🤮. D'où pourquoi de plus en plus d'appareils laissent indiquer à l'utilisateur si il préfère un niveau d'animation normal ou réduit.
      - **prefers-color-scheme** `light` ou `dark` ◻️/◼️
  -
    type: image
    image: /assets/articles/prefer-color-scheme.gif
  -
    type: note
    intent: good
    body: 'Par exemple le nouveau [Apple Music](https://www.apple.com/ca/fr/apple-music/) se base sur une media query pour ajuster son theme on fonction de la préférence de l''usager.'
  -
    type: note
    intent: generic
    body: 'Il existe plusieurs autres caractéristiques moins fréquentes. Pour une liste plus exhaustive, je vous invite à consulter: [MDN🦖](https://developer.mozilla.org/fr/docs/Web/CSS/Requ%C3%AAtes_m%C3%A9dia/Utiliser_les_Media_queries)'
  -
    type: text
    title: 'Opérateurs logiques'
    level: h2
    body: |
      Permettent d'indiquer le lien entre différentes parties de notre média query.
      
      **and** Permet de combiner plusieurs requêtes média en une seule. Pour que la requête soit respectée, il faut que chacune des sous-requêtes soit vraies. ex: `screen and (min-width: 1000px)` s'appliquera sur tous les écrans de minimum 1000px de large.
      
      **not** Retourne le résultat opposé d'une requête média. S'il est utilisé dans une liste de requêtes séparées par des virgules, il ne nie que la requête sur laquelle il est appliqué. ex: `not (orientation: landscape)` s'sappliquera sur tous les écrans d'on l'orientation est portrait.
      
      **virgule (,)** Permet de combiner plusieurs requêtes. Chaque requête est traitée séparément. Il suffit qu'une seule de ces requêtes soit respectée pour que les styles s'appliquent. ex: `(orientation: landscape), (min-width: 600px)`s'appliquera sur les appareils d'on l'orientation est landscape **et/ou** la largeur minimale est de 600px. Donc une tablette en mode portrait serait quand même affectée par les styles même si son orientation ne correspond pas.
  -
    type: text
    title: Breakpoints
    level: h2
    body: |
      Même si notre site est parfaitement responsive, il est parfois souhaitable de faire un changement de règle d'affichage dans certains contextes, afin d'éviter que la dimensions de certains éléments deviennent un enjeux. 
      
      Par exemple, deux sections juxtaposées sur un écran large fait du sens. Cependant sur l'écran plus restreint d'un mobile, elles risquent d'être ridiculement coincées. D'où l'utilité à un certain point *(Breakpoint)* de changer les règles d'affichage via une média query.
  -
    type: image
    image: /assets/articles/breakpoints.gif
    source: 'https://blog.froont.com/9-basic-principles-of-responsive-web-design/'
  -
    type: text
    body: 'Ainsi, les sections pourraient passées de demis `.section { width: 50%; }` à pleines lorsque la largeur de l''écran est inférieur à 600px `@media (max-width: 600px) { width: 100%; }`'
  -
    type: text
    title: 'Où les utiliser?'
    level: h2
    body: |
      Les médias queries peuvent être utiliser à différents endroits:
      
      - Dans les **feuilles de styles**.
      - Directement sur une balise `<link>`. ex: <samp>print.css</samp> ne devrait s'appliquer que lorsque l'utilisateur souhaite imprimer `<link href="print.css" rel="stylesheet" media="print">`
      - Sur la balise enfant `<source>` de certaines balises. Notamment&nbsp;`<picture>`.
  -
    type: code
    body: |
      <picture>
        <source srcset="image-landscape.jpg" media="(orientation: landscape)">
        <img src="image-portrait.jpg">
      </picture>
  -
    type: note
    intent: generic
    body: 'Les pages d''articles de ce site ont une média query sensible à votre **prefers-color-scheme**  si vous désirez tester cette fonctionnalité sur un site.'
page_template: page-article
fieldset: page-article
id: 72623d91-1b0d-4de1-9bf1-a01953a6f7ea
