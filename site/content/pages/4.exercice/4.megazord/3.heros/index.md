body:
  -
    type: text
    body: |
      Pour cette partie du projet, nous allons réaliser des composantes intitulées _héros_. Ces composantes ont pour but de plonger l'utilisateur dans l'ambiance que votre site dès leur&nbsp;arrivé.
      
      Il s'agit normalement, de grands blocs en début de page contenant un élément visuel fort afin de donner le ton ou de mettre de l'avant un élément en&nbsp;particulier. 
      
      Par exemple, voir le site du [Cirque du Soleil](https://www.cirquedusoleil.com/fr), de l'[Igloofest](https://igloofest.ca/) ou encore de [Metallica](https://www.metallica.com/),&nbsp;etc.
  -
    type: text
    title: GitHub
    level: h2
    body: 'Un des membres de votre équipe doit créer une nouvelle branche intitulée `héros` sur votre répertoire GitHub. Vous devez ensuite tous tirer cette branche sur votre poste puisque tout le travail des membres de l''équipe pour cette partie devra être sauvegardé sur cette branche et être visible en&nbsp;ligne _(autrement dit, je dois pouvoir voir la branche et votre travail sur&nbsp;GitHub)_.'
  -
    type: text
    title: Consignes
    level: h2
    body: |
      - Le code HTML de chaque héros doit se trouver sur sa page HTML&nbsp;respective, ex:&nbsp;`discographie.html`.
      - Vous pouvez partager des styles communs dans le fichier CSS `main.css`. Cependant, les styles propres à votre héros doivent se trouver dans la feuille de style de votre page, ex:&nbsp;`discographie.css`.
  -
    type: text
    title: 'Requis globaux'
    level: h2
    body: |
      - Pour définir votre héros, utilisez la [balise sémantique](https://smnarnold.com/cours/html/semantique)&nbsp;appropriée.
      - Faites en sorte que par défaut, le héros prenne la largeur et la hauteur équivalente d'un écran complet, peu importe la dimension de&nbsp;l'écran.
      - Utilisez une [média query](https://smnarnold.com/cours/css/media-queries#caracteristiques-de-media) afin de détecter si l'orientation de l'écran est <u>en mode paysage</u> _(landscape)_. Si tel est le cas, changer la hauteur du héros pour qu'il corresponde à 56.25% de la largeur de l'écran _(ce pourcentage est équivalent à un ratio&nbsp;16/9)_. 
      - À l'intérieur du héros, une [balise picture](https://smnarnold.com/cours/html/picture) doit être&nbsp;insérée.
      - Positionner la balise picture en absolute et faites en sorte qu'elle couvre l'ensemble du héros, autant sur la largeur&thinsp;↔️ que la&nbsp;hauteur&thinsp;↕️.
      - À l'intérieur du héros, mais après la balise picture, insérer un conteneur et une rangée Bootstrap et ajouter leur du CSS afin de sorte qu'elles prennent toute la hauteur du&nbsp;héros.
      - La fonte utilisée pour les titres dans les héros doit être différente de celle utilisée pour le texte&nbsp;régulier.
  -
    type: note
    intent: warning
    body: 'Attention, cette combinaison de fonte doit être la même sur tous les héros du&nbsp;site.'
  -
    type: text
    title: '🔴 Requis rouge'
    level: h2
    body: |
      1. Sélectionner une image où les membres du groupe sont visibles. Cette image doit être en format portrait et être insérée dans la balise&nbsp;picture.
      
      À l'aide [d'object-fit](https://smnarnold.com/cours/css/object-fit), faites en sorte que cette image couvre entièrement le héros, sans pour autant la&nbsp;déformée. Utiliser [object-position](https://smnarnold.com/cours/css/object-fit#object-position) afin de mettre l'accent sur le visage des membres du groupe et éviter qu'ils soient&nbsp;tronqués.
      
      Sélectionner une 2<sup>e</sup> image des membres du groupe, mais cette fois en format paysage _(landscape_). Ajoutez là comme source dans la balise picture. Faites en sorte que cette image soit utilisée plutôt que celle portrait lorsque l'écran est en format paysage&nbsp;_(landscape)_.
      
      2. Après la balise picture, mais avant le conteneur Bootstrap, créer un div. Son rôle sera d'augmenter le contraste entre l'image de fond du héros et son contenu&nbsp;texte. 
      
      Pour ce faire, il doit être lui aussi en position absolute et couvrir l'ensemble du héros. Ajoutez-lui ensuite une couleur de fond et réduisez son opacité entre 15% et 50%, selon vos&nbsp;goûts.
      
      3. Une colonne doit être créée dans la rangée du conteneur Bootstrap du héros afin de contenir un texte. Cette colonne doit avoir une largeur&nbsp;de:
      
      	- 12 colonnes par défaut _(sur&nbsp;mobile)_.
          - 6 colonnes à partir du breakpoint&nbsp;`md`.
          - 4 colonnes à partir du breakpoint&nbsp;`xxl`.
        
      En tout temps cette colonne doit être centrée horizontalement et verticalement dans la rangée&nbsp;Bootstrap. Recherchez dans la documentation officielle comment centrer verticalement et horizontalement à l'aide de classes prédéfinies par&nbsp;Bootstrap.
      
      Comme titre de page, ajoutez le nom de votre groupe, ex:&nbsp;_"Gorillaz"_. Attention de choisir la balise appropriée convenant à cet&nbsp;effet. 
      
      Ajoutez un paragraphe présentant votre groupe, ex: _"Gorillaz est un groupe musical britannique dit « virtuel », formé en 1998 par Damon Albarn et Jamie&nbsp;Hewlett"._
      
      Ajoutez un bouton avec la mention _"En savoir plus"_ sous ce paragraphe. _(Pour l'instant ce bouton n'aura pas de&nbsp;fonctionnalité, mais vous pouvez déjà ajuster son&nbsp;apparence)_
      
      **Référence:**
  -
    type: image
    image: /assets/articles/megazord-hero-accueil.png
  -
    type: text
    title: '🔵  Requis bleu'
    level: h2
    body: |
      1. Sélectionnez une image du premier album du groupe et insérez là dans la balise&nbsp;picture.
      
      À l'aide [d'object-fit](https://smnarnold.com/cours/css/object-fit), faites en sorte que cette image soit entièrement visible et d'aucune façon&nbsp;tronquée. En CSS, ajouter une couleur de fond à la balise picture de votre choix afin de remplir l'espace&nbsp;vide.
      
      Sélectionner une 2e image du deuxième album du groupe cette fois-ci. Ajouter là comme source dans la balise picture. Faites en sorte que cette image soit utilisée plutôt que celle du premier lorsque l'écran est d'une largeur de 1000px ou&nbsp;plus.
      
      2. Après la balise picture, mais avant le conteneur Bootstrap, créer un div. Son rôle sera d'augmenter le contraste entre l'image de fond du héros et son contenu&nbsp;texte. 
      
      Pour ce faire, il doit être lui aussi en position absolute et couvrir l'ensemble du héros. Ajoutez-lui ensuite un [dégradé vertical](https://smnarnold.com/cours/css/linear-gradient) partant du sommet vers le bas&nbsp;⬇️. Le dégradé doit utiliser `transparent` comme première couleur afin de laisser visible l'image d'album et une [couleur RGBA](https://smnarnold.com/cours/css/unites-de-couleur#rgb-et-rgba) de votre choix avec un alpha entre 50% et 100%, à votre guise pour augmenter la lisibilité du&nbsp;texte.
      
      3. Une colonne doit être créée dans la rangée du conteneur Bootstrap du héros afin de contenir un texte. Cette colonne doit avoir une largeur de:
      
      - 12 colonnes par défaut _(sur&nbsp;mobile)_.
      - 8 colonnes à partir du breakpoint&nbsp;`sm`.
      
      En tout temps, cette colonne doit être positionnée dans le coin inférieur gauche de sa rangée&nbsp;Bootstrap. Recherchez dans la documentation officielle comment modifier l'alignement vertical et horizontal à l'aide de classes prédéfinies par&nbsp;Bootstrap.
      
      Comme titre de page, inscrivez _"Discographie"_. Attention de choisir la balise appropriée convenant à cet&nbsp;effet.
      
      Ajoutez un paragraphe présentant sommairement les albums du groupe, ex: _"Gorillaz à jusqu'à présent 7 albums studio répartis entre 2001 et&nbsp;2020."_.
      
      Ajoutez un bouton avec la mention _"En savoir plus"_ sous ce paragraphe. _(Pour l'instant ce bouton n'aura pas de fonctionnalité, mais vous pouvez déjà ajuster son&nbsp;apparence)_
      
      **Référence:**
  -
    type: image
    image: /assets/articles/megazord-hero-discographie.png
  -
    type: text
    title: '🟢 Requis vert'
    level: h2
    body: |
      1. Sélectionnez une image du groupe _"live"_ et insérez là dans la balise&nbsp;picture.
      
      À l'aide [d'object-fit](https://smnarnold.com/cours/css/object-fit), faites en sorte que cette image couvre entièrement le héros, sans pour autant la&nbsp;déformée. Utilisez [object-position](https://smnarnold.com/cours/css/object-fit#object-position) afin de mettre l'accent sur le visage des membres du groupe et éviter qu'ils soient&nbsp;tronqués.
      
      Faites une copie en noir et blanc de l'image sélectionnée. Ajoutez cette version comme source dans la balise picture. Faites en sorte que cette image soit utilisée plutôt que celle en couleur lorsque l'usager spécifie [préféré un thème foncé](https://smnarnold.com/cours/css/media-queries#caracteristiques-de-media) `prefers-color-scheme: dark`.
      
      2. Après la balise picture, mais avant le conteneur Bootstrap, créer un div. Son rôle sera d'augmenter le contraste entre l'image de fond du héros et son contenu&nbsp;texte. 
      
      Pour ce faire, il doit être lui aussi en position absolute et couvrir l'ensemble du héros. Ajoutez-lui ensuite une couleur de fond et réduisez son opacité entre 15% et 50%, selon vos&nbsp;goûts.
      
      3. Une colonne doit être créée dans la rangée du conteneur Bootstrap du héros afin de contenir un texte. Cette colonne doit avoir une largeur&nbsp;de:
      
      	- 12 colonnes par défaut _(sur&nbsp;mobile)_.
          - 8 colonnes à partir du breakpoint&nbsp;`sm`.
          - 4 colonnes à partir du breakpoint&nbsp;`lg`.
        
      Par défaut, cette colonne doit être centrée horizontalement dans sa rangée&nbsp;Bootstrap. Lorsque le breakpoint `lg` est atteint, aligner cette colonne à droite complètement de sa rangée et justifier aussi le texte à droite. Recherchez dans la documentation officielle comment centrer horizontalement à l'aide de classes prédéfinies par&nbsp;Bootstrap.
      
      Comme titre de page, utilisez _"Palmarès"_. Attention de choisir la balise appropriée convenant à cet&nbsp;effet. 
      
      Ajoutez un paragraphe présentant les faits d'armes de votre groupe, ex: _"Gorillaz à jusqu'à présent 7 albums, 31 singles, 28 vidéo-clips et à reçu plus de 51 prix divers au cours de son&nbsp;existence"._
      
      Ajoutez un bouton avec la mention _"En savoir plus"_ sous ce paragraphe. _(Pour l'instant ce bouton n'aura pas de&nbsp;fonctionnalité, mais vous pouvez déjà ajuster son&nbsp;apparence)_.
      
      **Référence:**
  -
    type: image
    image: /assets/articles/palmares.png
is_hidden: false
title: Héros
template: page-exercice
color_scheme: auto
preview_color: '#000'
preview: /assets/previews/megazord-hero.jpg
fieldset: page-article
id: 3d6476e8-eec2-4ec4-8ea9-c95c344e5abf
