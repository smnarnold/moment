title: Git
template: page-article
color_scheme: auto
body:
  -
    type: text
    body: 'Git est un outil qui vous protège, vous et les autres, de vous-même et des autres. Il permet en quelque sorte de faire des _"checkpoints"_ ou en français, des points de sauvegarde&thinsp;💾, dans un&nbsp;projet.'
  -
    type: image
    image: /assets/articles/dark-soul-bonefire-1579307595.gif
  -
    type: text
    body: |
      Ainsi, vous pouvez modifier/briser/améliorer votre projet l'esprit tranquille, puisqu'il vous permet de revenir en arrière en cas de&nbsp;besoin.
      
      Pour ce faire, git monitore tous les changements effectués dans le dossier&thinsp;📂 de votre projet. À tout moment, vous pouvez choisir de faire une sauvegarde de son état actuel. Cette étape est appelé un&nbsp;`commit`. 
      
      Idéalement, ce `commit` est ensuite poussé vers le _cloud_&thinsp;☁️. 
      Ce qu'on appel faire un&nbsp;`push`. 
      
      Ainsi, si vous devez changer de poste pour X&nbsp;raisons: 
      
      - Votre ordinateur a explosé&thinsp;💥.
      - Votre poste est occupé par quelqu'un&nbsp;d'autre.
      - Vous décidez de continuer de travailler de la&nbsp;maison.
      
      Vous pouvez, via votre nouveau poste, tirer une copie de la plus récente version de votre&nbsp;projet. Bref, faire un&nbsp;`pull`.
  -
    type: note
    intent: generic
    body: 'Pour continuer la métaphore du jeux vidéo, l''équivalent serait de faire une sauvegarde en ligne. Ainsi, même si votre console brise ou si vous êtes en visite chez un ami, vous pouvez continuer votre&nbsp;partie.'
  -
    type: text
    title: 'Travail d''équipe'
    level: h2
    body: 'À moins de toujours travailler en solo, aucun développeur n''échappe à la problématique d''avoir édité le même fichier qu''un de ses collègues. Dans le pire des cas, personne ne remarque l''incident et les changements effectués par le premier sont effacés par ceux du deuxième. Dans le meilleur, les développeurs doivent relire ligne par ligne chaque copie du fichier afin de repérer les différences et essayer de les combiner, ce qui est souvent long et propice aux&nbsp;erreurs.'
  -
    type: image
    image: /assets/articles/jeux-7-erreurs.png
  -
    type: text
    body: |
      Heureusement, comme mentionné précédemment, Git monitore chaque changement. Ainsi, si deux développeurs éditent le même fichier, voici ce qui devrait normalement se&nbsp;produire:
      
      1. Le premier développeur sauvegarde ses changements en effectuant un&nbsp;`commit`.
      2. Il pousse ensuite ses changements en ligne avec la commande&nbsp;`push`.
      3. De son côté, le deuxième sauvegarde aussi ses changements en effectuant un&nbsp;`commit`.
      4. Lorsqu'il tente de pousser ses changements via la commande `push`, Git l'avise qu'il doit préalablement tirer une sauvegarde plus récente. Pour se faire, il effectue un&nbsp;`pull`.
      5. Dès lors, Git compare les modifications des fichiers. Si elles affectent des zones différentes, elles sont automatiquement combinées ensemble. Dans le cas plus complexe où des zones identiques ont étés modifiés, Git signalera alors un _conflit_ au deuxième développeur. Ce dernier se verra attribué la tâche de sélectionner les changements à&nbsp;garder.
  -
    type: note
    intent: good
    body: 'Dans le but d''éviter autant que possible les conflits, ou du moins de les simplifier, il est conseillé de commiter régulièrement. Minimalement 1x par&nbsp;jour.'
fieldset: page-article
id: 5ad59fd5-9022-42d2-a6bc-2d468e795c12
