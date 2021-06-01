body:
  -
    type: text
    body: 'Les balises `<détails>` et `<summary>` permettent d''afficher/masquer un contenu en fonction du clique de l''utilisateur, le tout sans même avoir recours à du JavaScript. Ces balises sont utilisées notamment pour créer des FAQ, des questions quiz,&nbsp;etc.'
  -
    type: text
    body: |
      La balise `<détails>` sert à englober le contenu devant être affiché/masqué. Par défaut, le contenu est masqué et au clic de l'utilisateur, il se&nbsp;révèle.
      
      Par exemple:
    title: Details
    level: h2
  -
    type: codepen
    id: 1299d8176a70c28f699bcbc5b4d8b4cb
    ratio: 34
    tabs: 'html,result'
  -
    type: text
    body: |
      Lorsque la balise `<details>` est ouverte, le navigateur lui ajoute l'attribut `open`. Ainsi, il est possible de spécifier qu'une balise `<details>` devrait être ouverte par défaut en lui ajoutant cet&nbsp;attribut.
      
      Par exemple:
  -
    type: codepen
    id: ba51e3093538244d195bf4dcde383b67
    ratio: 34
    tabs: 'html,result'
  -
    type: text
    body: |
      Il est aussi possible de se baser sur cet attribut afin de spécifier des styles différents selon si la balise `<details>` est ouverte ou&nbsp;fermée.
      
      Par exemple, lui spécifier un fond vert, mais uniquement lorsque la balise est ouverte:
  -
    type: codepen
    id: ebed10118435f50cff9f8707c87ae24d
    ratio: 34
    tabs: 'css,result'
  -
    type: text
    title: Summary
    level: h2
    body: |
      La balise `<summary>` placée à l'intérieur de la balise `<details>` permet de spécifier le texte affiché par défaut plutôt que la mention&nbsp;_"Details"_.
      
      Par exemple:
  -
    type: codepen
    id: 8ae861f2c8b8cb9772ab1e26ca64af8c
    ratio: 34
    tabs: 'html,result'
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos de details et&nbsp;summary](https://developer.mozilla.org/fr/docs/Web/HTML/Element/details).'
is_hidden: false
title: 'Details & Summary'
template: page-article
color_scheme: auto
preview_color: '#f6ee72'
preview: /assets/previews/details.png
fieldset: page-article
id: b1a9518a-e7ee-4ca2-9b8b-6a68ce93df6d
