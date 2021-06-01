body:
  -
    type: text
    body: 'Peu importe le langage utilisé _(HTML, CSS, JavaScript)_, la façon d''écrire un chemin vers un fichier externe _(image, police, stylesheet ou JS)_ reste la&nbsp;même.'
  -
    type: text
    title: Absolu
    level: h2
    body: 'Un chemin est absolu lorsqu''il commence par un protocole&nbsp;_(ex:&nbsp;https://)_.'
  -
    type: code
    lang: html
    body: '<img src="https://site.com/image.png">'
  -
    type: text
    title: Relatif
    level: h2
    body: |
      À l'opposé, un chemin est considéré comme étant relatif lorsqu'il <u>ne commence pas</u> par un protocol&nbsp;_(ex:&nbsp;https://)_.
      
      Afin d'illustrer les différentes possibilités de chemin relatif, imaginons que nous sommes actuellement dans le fichier `index.html` dans l'arborescence&nbsp;ci-dessous&thinsp;👇
  -
    type: image
    image: /assets/articles/chemin-fichiers.png
  -
    type: text
    title: 'Même dossier'
    level: h3
    body: |
      Il est possible d'accéder à un fichier au même niveau que le fichier dans lequel nous sommes, simplement en spécifiant son&nbsp;nom. 
      
      Par exemple, pour accéder à l'image `b.png`&thinsp;🌄 à partir du fichier&nbsp;`index.html` il est possible de&nbsp;faire:
  -
    type: code
    lang: html
    body: '<img src="b.png">'
  -
    type: text
    title: Sous-dossier
    level: h3
    body: |
      Il est possible d'accéder à un fichier dans un sous-dossier en spécifiant le nom du sous-dossier en question suivi du nom du&nbsp;fichier.
      
      Par exemple, pour accéder à l'image `c.png`&thinsp;🌄 à partir du fichier&nbsp;`index.html`, il est possible de&nbsp;faire:
  -
    type: code
    lang: html
    body: '<img src="dossier-1.1/c.png">'
  -
    type: text
    title: 'Dossier parent'
    level: h3
    body: |
      Il est possible d'accéder à un fichier dans un dossier parent en indiquant qu'il faut remonter d'un dossier via la mention `../` suivi du nom du&nbsp;fichier.
      
      Par exemple, pour accéder à l'image `a.png`&thinsp;🌄 à partir du fichier&nbsp;`index.html` il est possible de&nbsp;faire:
  -
    type: code
    lang: html
    body: '<img src="../a.png">'
  -
    type: text
    body: |
      Il est possible de remonter de plusieurs dossiers en enchainant les mentions&nbsp;`../`.
      
      Par exemple, pour remonter de deux&nbsp;dossiers:
  -
    type: code
    lang: html
    body: '<img src="../../a.png">'
  -
    type: note
    intent: exercice
    body: '[Affichez les Pokémons](https://smnarnold.com/exercice/autres/chemin-de-fichiers-pokemons)'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article de CSS-Tricks à propos des chemins de&nbsp;fichiers](https://css-tricks.com/quick-reminder-about-file-paths/).'
  -
    type: text
    title: 'CSS et Scripts externes'
    level: h2
    body: |
      Les fichiers CSS ou scripts externes sont des outils vous aidant à réaliser vos projets. Pour les utiliser convenablement, il est important d'allez les chercher <u>avant d'inclure ses fichiers</u> CSS ou scripts. Tout comme un charpentier va chercher son marteau <u>avant de débuter sa journée de travail</u> et non&nbsp;après&thinsp;🔨.
      
      🚫
  -
    type: code
    lang: html
    body: |
      <link rel="stylesheet" href="styles.css">
      <link rel="stylesheet" href="https://site.com/librairie.css">
  -
    type: text
    body: 👌
  -
    type: code
    lang: html
    body: |
      <link rel="stylesheet" href="https://site.com/librairie.css">
      <link rel="stylesheet" href="styles.css">
  -
    type: text
    body: 🚫
  -
    type: code
    lang: html
    body: |
      <script src="scripts.js"></script>
      <script src="https://site.com/librairie.js"></script>
  -
    type: text
    body: 👌
  -
    type: code
    lang: html
    body: |
      <script src="https://site.com/librairie.js"></script>
      <script src="scripts.js"></script>
is_hidden: false
title: 'Chemin de fichiers'
template: page-article
color_scheme: auto
preview_color: '#000'
fieldset: page-article
id: 49acf5ff-6e06-47f3-9555-6e0c690b0fc5
