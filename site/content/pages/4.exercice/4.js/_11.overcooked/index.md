body:
  -
    type: text
    body: |
      Pour cet exercice nous allons rendre dynamique un mini-jeu basé sur la populaire franchise [Overcooked!](https://fr.wikipedia.org/wiki/Overcooked) intitulé _Mini overcooked! - Édition Hamburger_&thinsp;🍔
      
      Un [dossier de départ](https://t.smnarnold.com/overcooked/overcooked.zip) vous est fourni. Vous n'avez qu'à écrire du HTML et du JavaScript _(nul besoin de modifier le CSS)_. La librairie GSAP est aussi déjà incorporée pour&nbsp;vous.
      
      Aperçu du résultat:
  -
    type: image
    image: /assets/articles/overcook-apercu.mp4
  -
    type: text
    title: 'Affichage des instructions'
    level: h2
    body: '1. Importez Bootstrap dans votre&nbsp;projet.'
  -
    type: note
    intent: generic
    body: 'Le bouton _Instructions_ devrait alors changer&nbsp;d''apparence.'
  -
    type: text
    body: |
      2. Ajoutez la classe Bootstrap nécessaire afin de centrer le bouton _Instructions_&nbsp;horizontalement&thinsp;↔️.
      3. Faites en sorte que ce bouton déclenche un modal Bootstrap avec le titre `Instructions` et contenant le texte&nbsp;suivant:
      
      `Pour débuter une partie, appuyez sur le bouton "Go!". Cliquez ensuite sur chacun des ingrédients afin d'assembler le hamburger commandé.`
      
      4. Faites en sorte que le modal soit étroit, s'affiche au centre de la page _(autant horizontalement que verticalement)_ et apparaisse en&nbsp;fondu.
  -
    type: image
    image: /assets/articles/overcooked-modal.jpg
  -
    type: text
    title: 'Animation du chef'
    level: h2
    body: |
      1. Créez une animation GSAP utilisant une timeline afin de déplacer le chef de 375px vers la droite en l'espace de 3&nbsp;secondes.
      2. Lorsque cette animation est terminée, ajoutez la classe `.flip` au chef afin de le faire changer de&nbsp;direction&thinsp;⬅️. 
      3. Faites revenir le chef à sa position initiale en l'espace de 3&nbsp;secondes.
      4. Lorsque cette animation est terminée, retirez la classe `.flip` au chef afin de le faire changer de direction à&nbsp;nouveau&thinsp;➡️. 
      5. Répétez cette animation à&nbsp;l'infini.
  -
    type: note
    intent: generic
    body: 'Votre chef devrait se déplacer de droite à gauche à l''infini au travers de la cuisine à ce&nbsp;stade.'
  -
    type: text
    body: '6. Mettez votre animation sur pause par défaut et déclenchez là lorsque l''usager appuie sur le bouton _GO! (le&nbsp;four)_.'
  -
    type: image
    image: /assets/articles/overcooked-chef-marche.mp4
  -
    type: text
    title: 'Création de la classe de base et des ingrédients'
    level: h2
    body: |
      1. Créez une nouvelle classe intitulée _Game_.
      2. Lorsque le bouton _GO!_ est enfoncé, créez une nouvelle instance de votre classe et passez-lui en paramètre la variable `recette` contenant un objet JavaScript correspondant au hamburger de&nbsp;base&#8239;🍔.
  -
    type: note
    intent: generic
    body: 'Cet objet JavaScript vous est déjà&nbsp;fourni.'
  -
    type: text
    body: |
      3. Créez une méthode intitulée `createFood` et appelée là dans votre constructeur. À l'intérieur de cette méthode, bouclez sur chacun des ingrédients inclus dans la recette reçue en paramètre. Pour chaque ingrédient, créez un div avec les classes `.ingredient`, ainsi que le nom de l'ingrédient en&nbsp;question. 
      
      Par exemple: `<div class="ingredient pain"></div>`
      
      4. Insérez ce div dans l'élément avec la classe `.espace-de-travail`.
  -
    type: note
    intent: generic
    body: 'Des classes CSS déjà en place se chargeront de styliser les ingrédients que vous&nbsp;insérerez.'
  -
    type: image
    image: /assets/articles/overcooked-ingredients.png
  -
    type: text
    title: 'Gestion du clic des ingrédients'
    level: h2
    body: |
      1. Créez une méthode intitulée `bindEvents` appelée dans votre constructeur immédiatement après la méthode&nbsp;`createFood`.
      2. À l'intérieur de cette méthode, écoutez le clic sur les ingrédients que vous avez créé précédemment. Lorsqu'un élément est cliqué, ajoutez-lui la classe&nbsp;`.pret`.
  -
    type: note
    intent: generic
    body: 'L''ingrédient devrait alors disparaitre et être remplacé par une assiette&nbsp;vite.'
  -
    type: text
    body: |
      3. Si le nombre d'ingrédients avec la classe `.pret` correspond au nombre total d'ingrédients dans la recette:
      	- Mettez sur pause l'animation du&nbsp;chef.
          - Supprimez tous les ingrédients dans l'élément `.espace-de-travail` et remplacez-les par un div avec les classes `.burger` ainsi que le nom de la&nbsp;recette.
      
      Par exemple: `<div class="burger hamburger"></div>`
  -
    type: image
    image: /assets/articles/overcooked-ingedient-clic.mp4
  -
    type: text
    title: 'Animation du hamburger 🍔'
    level: h2
    body: |
      1. Créez une animation GSAP pour le hamburger que vous venez de créer. Cette animation devra se déclencher une demi-seconde après la création du dit&nbsp;hamburger&thinsp;⏱.
      2. Faites monter votre hamburger de 270px en l'espace de 4 secondes et demie à vitesse constante&thinsp;⬆️. Par la suite, faites-le disparaitre en fondu en l'espace d'une&nbsp;demi-seconde.
      3. Lorsque cette animation est terminée, supprimez tous les éléments se trouvant dans l'élément `.espace-de-travail`.
  -
    type: image
    image: /assets/articles/overcooked-hamburger-animation.mp4
  -
    type: text
    title: 'Fetch des recettes alternatives'
    level: h2
    body: |
      1. Dans votre code écoutant le clic du bouton _Go! (le four)_, pigez un nombre de 1 à&nbsp;4.
      2. Faites une requête fetch à l'adresse suivante avec le nombre que vous avez&nbsp;pigé. 
      
      Par exemple:
  -
    type: code
    lang: html
    body: 'https://t.smnarnold.com/overcooked/1/'
  -
    type: note
    intent: warning
    body: 'Attention de ne pas oublier le `/` à la&nbsp;fin. Sans lui, aucune réponse ne vous sera&nbsp;retournée.'
  -
    type: text
    body: |
      3. Lorsque la réponse de la requête fetch est reçue, créez une nouvelle instance de votre classe _Game_ et passez-lui en paramètre la&nbsp;réponse.
      4. Retirez l'instanciation de la classe _Game_ avec la recette de base afin d'éviter de doubler votre&nbsp;instanciation.
  -
    type: note
    intent: generic
    body: 'Appuyez sur le bouton _Go!_ devrait maintenant afficher 4 recettes de hamburgers différents&nbsp;aléatoirement&thinsp;🔀🍅🥬🧀🥓'
  -
    type: text
    body: '5. Au début de votre constructeur, videz tous les éléments présents dans `.espace-de-travail` afin d''éviter tout doublon si le bouton _GO!_ est enfoncé avant la fin du cycle complet des&nbsp;animations.'
  -
    type: text
    title: Remise
    level: h2
    body: |
      M'envoyer un message privé sur Teams contenant un fichier zip&thinsp;🗜 sous le format suivant:
      
      `[prénom]-[nom de famille].zip`
      ex: simon-arnold.zip
is_hidden: false
title: Overcooked!
template: page-exercice
color_scheme: auto
preview_color: '#000'
preview: /assets/previews/overcooked.png
fieldset: page-article
id: 43f46e89-9468-43b4-acf2-2768c6bda3c2
