body:
  -
    type: text
    body: |
      Écrire du HTML est relativement facile. Cependant, cette tâche peut rapidement devenir longue et répétitive. Heureusement, l’extension Emmet permet d’éviter une partie de cette redondance, tout en accélérant le&nbsp;processus.
      
      De plus, cette extension est disponible sur la majorité des éditeurs de texte et vient même préinstallée sur [CodePen](https://codepen.io/) et&nbsp;[VsCode](https://code.visualstudio.com/).
  -
    type: text
    title: 'Gabarit HTML'
    level: h2
    body: 'Une page HTML est toujours constituée d''un doctype, des balises `<html>`, `<head>`, `<body>`, etc. Plutôt que de mémoriser ce gabarit _(boilerplate)_, Emmet propose l''abbréviation `!`&nbsp;+&nbsp;<kbd>tab</kbd> afin d''obtenir un gabarit de base prêt à être&nbsp;utilisé.'
  -
    type: image
    image: /assets/articles/emmet-boilerplate.webp
  -
    type: text
    title: Balise
    level: h2
    body: 'Par exemple, plutôt que de taper au long:'
  -
    type: image
    image: /assets/articles/emmet-strong-1.gif
  -
    type: text
    body: 'Il est possible de simplement taper le nom de la balise désirée, suivi de la touche&nbsp;<kbd>tab</kbd>. Dans ce cas _strong_&nbsp;+&nbsp;<kbd>tab</kbd>'
  -
    type: image
    image: /assets/articles/emmet-strong-2.gif
  -
    type: text
    title: ID
    level: h2
    body: 'Il est aussi possible d''écrire une balise avec un id en préfixant ce dernier par un `#`, comme en CSS, suivi de la touche&nbsp;<kbd>tab</kbd>.'
  -
    type: image
    image: /assets/articles/emmet-id.gif
  -
    type: text
    title: Classe
    level: h2
    body: 'L''équivalent est aussi possible avec une classe, comme&nbsp;suit:'
  -
    type: image
    image: /assets/articles/emmet-classe.gif
  -
    type: text
    title: 'Sans balise'
    level: h2
    body: 'Il est possible d''allez encore plus rapidement en omettant de spécifier une balise. Dans ce scénario, Emmet se basera sur le contexte pour déterminer le type de balise le plus&nbsp;approprié.'
  -
    type: image
    image: /assets/articles/emmet-sans-balise.gif
  -
    type: text
    title: Texte
    level: h2
    body: 'Il est possible de spécifier le contenu texte d''une balise en l''incluant entre&nbsp;`{}`.'
  -
    type: image
    image: /assets/articles/emmet-texte.gif
  -
    type: text
    title: 'Balise enfant'
    level: h2
    body: 'Il est possible d''ajouter une balise enfant à une balise parent en les séparant par le&nbsp;caractère `>`.'
  -
    type: image
    image: /assets/articles/emmet-children.gif
  -
    type: note
    intent: good
    body: 'Emmet se charge même de&nbsp;l''indentation!'
  -
    type: text
    title: Multiplicateur
    level: h2
    body: |
      Pourquoi copier/coller plusieurs lignes, quand Emmet offre d'utiliser le symbole `*` suivi d'un chiffre pour indiquer le nombre de lignes&nbsp;souhaitées.
      
      Par exemple, pour avoir trois `<li>` dans un&nbsp;`<ul>`:
  -
    type: image
    image: /assets/articles/emmet-multiplicateur.gif
  -
    type: text
    title: Index
    level: h2
    body: |
      Le symbole dollar `$` représente l'index courant. Lorsqu'il est combiné avec le symbole multiplicateur `*`, il est remplacé par l'index de l'élément&nbsp;généré.
      
      Par exemple, si nous avons trois&nbsp;`<li>`.
  -
    type: image
    image: /assets/articles/emmet-dollar.gif
  -
    type: text
    body: 'Il est aussi possible de l''utiliser dans le texte d''une&nbsp;balise.'
  -
    type: image
    image: /assets/articles/emmet-dollar-texte.gif
  -
    type: note
    intent: tool
    body: 'Cheat sheet d''Emmet pour voir toutes les possibilités [docs.emmet.io/cheat-sheet](https://docs.emmet.io/cheat-sheet/)'
is_hidden: false
title: Emmet
template: page-article
color_scheme: auto
preview_color: '#000'
preview: /assets/img/emmet.jpg
fieldset: page-article
id: b5f63616-85d4-4c5c-a13d-38ba13f41e22
