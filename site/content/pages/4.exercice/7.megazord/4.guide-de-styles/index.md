body:
  -
    type: text
    body: 'Avant de commencer votre guide de styles, je vous suggère de faire une premier passe sur vos [héros](heros). Puisque cette composante sert à donner le ton à une page, elle vous permettera de tester rapidement si vos pistes créatives s''appliquent bien à votre&nbsp;projet.'
  -
    type: text
    title: Couleurs
    level: h2
    body: |
      Déterminez six couleurs de base qui devraient être utilisées sur votre site et créez-vous des [variables CSS](https://smnarnold.com/cours/css/variables) dans le fichier `main.css` pour y faire&nbsp;référence:
      
      - `--bg` couleur de fond.
      - `--text` couleur du texte&nbsp;régulier.
      - `--primary` couleur d'accent permettant de faire ressortir certains&nbsp;éléments.
      - `--primary-alt` variation de la couleur d'accent _(normalement plus pâle ou&nbsp;foncée)_. 
      - `--secondary` couleur complémentant bien la couleur&nbsp;d'accent.
      - `--secondary-alt` variation de la couleur complémentaire _(normalement plus pâle ou&nbsp;foncée)_. 
      
      Par exemple:
  -
    type: image
    image: /assets/articles/megazord-palette.png
  -
    type: text
    body: |
      En utilisant ces variables, votre projet bénéficiera d'une grande flexibilité en cas de changements et d'une cohérence visuelle&nbsp;robuste.
      
      Par exemple, si vous décidez de changer la couleur `--primary` en cours de projet de rose à orange, vous n'aurez qu'à la changer dans `main.css` et le changement se reflètera partout instantanément, plutôt que de chercher dans chacun des fichiers CSS et d'espérer avoir bien remplacé toutes les&nbsp;occurrences.
  -
    type: note
    intent: tool
    body: 'Si vous êtes en panne d''inspiration, l''[outil Coolors.co](https://coolors.co/generate) peut vous aider à trouver des couleurs complétant bien celles que vous avez déjà.'
  -
    type: text
    title: Typographie
    level: h2
    body: |
      Déterminez deux [fontes Google](https://fonts.google.com/). Une première, normalement plus sobre, servira au texte régulier, tandis qu'une deuxième, plus stylisé, servira aux éléments plus _"punchés"_, tels que les&nbsp;titres.
      
      Créez-vous ensuite deux variables CSS dans le fichier `main.css` pour y faire&nbsp;référence:
      
      - `--title` fonte pour les&nbsp;titres.
      - `--regular` fonte pour les textes&nbsp;réguliers.
      
      Par exemple:<style>@import url('https://fonts.googleapis.com/css2?family=Finger+Paint&family=Roboto:wght@200&display=swap');</style>
      
      - <span style="font-family: 'Finger Paint', cursive;">Finger Paint</span>
      - <span style="font-family: 'Roboto', sans-serif;">Roboto</span>
      
      
      Toujours dans le fichier `main.css` déterminer la taille de base de vos textes et celle de vos `h1`, `h2` et&nbsp;`h3`.
is_hidden: false
title: 'Guide de styles'
template: page-exercice
color_scheme: auto
preview_color: '#d2e8f7'
preview: /assets/previews/megazord-style-guide.jpg
fieldset: page-article
id: a4d16089-d447-48e8-a1c8-8beaa3b82955
