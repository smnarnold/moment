body:
  -
    type: text
    body: |
      La balise `<figure>` permet d'associer un élément _(image, vidéo, diagramme, etc.)_ à une légende `<figcaption>`. Ainsi, les moteurs de recherche comprennent le lien étroit unissant les deux&nbsp;éléments.
      
      Par exemple:
  -
    type: codepen
    id: f0cffd35ff7b4bd67e95818947675912
    ratio: 34
    tabs: 'html,result'
  -
    type: text
    body: |
      La balise `<figcaption>` peut être avant ou après l'élément quelle décrit, tant qu'elle est enfant direct de la balise `<figure>`.
      
       👌
  -
    type: code
    lang: html
    body: |
      <figure>
        <img src="image.png">
        <figcaption>...</figcaption>
      </figure>
  -
    type: text
    body: 🚫
  -
    type: code
    lang: html
    body: |
      <figure>
        <img src="image.png">
        <div>
          <figcaption>...</figcaption>
        </div>
      </figure>
  -
    type: note
    intent: warning
    body: 'Si un espace indésirable affiche entre une image et sa légende _(figcaption)_, il est probable que cet espace soit créé par le `display: inline` de l''image. Pour s''en débarrasser, il suffit de changer son display à&nbsp;`block`.'
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos de&nbsp;figure](https://developer.mozilla.org/fr/docs/Web/HTML/Element/figure) et celui-ci à propos de [figcaption](https://developer.mozilla.org/fr/docs/Web/HTML/Element/figcaption).'
is_hidden: false
title: 'Légende de média'
subtitle: 'figure, figcaption'
template: page-article
color_scheme: auto
preview_color: '#f672a7'
preview: /assets/previews/figure.png
fieldset: page-article
id: e5325e92-03cc-4b99-88d9-e28f0bb9e884
