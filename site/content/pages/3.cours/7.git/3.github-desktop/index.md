title: 'GitHub Desktop'
template: page-article
color_scheme: auto
body:
  -
    type: text
    body: 'L''interface en ligne de commande _(CLI)_ de Git est très réussie! Elle permet aux développeurs de travailler sans interface graphique en tapant des lignes de commandes directement dans un terminal. Cette technique est puissante&thinsp;💪, efficace et ne présente aucun inconvénient, outre qu''elle peut paraître intimidante de prime&nbsp;abord.'
  -
    type: image
    image: /assets/articles/git-cli.jpg
  -
    type: note
    intent: tool
    body: 'Pour en savoir plus sur Git CLI [Git Pro de Scott Chacon et Ben Straub&thinsp;📕](https://git-scm.com/book/fr/v2/D%C3%A9marrage-rapide-La-ligne-de-commande).'
  -
    type: text
    body: 'Pour cette raison, [GitHub](./github) a créé l''application gratuite [GitHub Desktop](https://desktop.github.com/) offrant une interface graphique, permettant d''utiliser des boutons plutôt que d''entrer des lignes de commande sous forme de&nbsp;texte.'
  -
    type: image
    image: /assets/articles/github-desktop-logo.png
  -
    type: text
    title: Rôle
    level: h2
    body: |
      Bien qu'il soit possible de modifier un fichier directement sur GitHub, il est préférable  d'effectuer la modification en local et de passer par GitHub&nbsp;Desktop ensuite pour pousser le changement sur&nbsp;GitHub. 
      
      Ainsi, il est possible de visualiser les changements apportés dans un navigateur et de s'assurer qu'ils correspondent aux résultats attendus avant de les _"sauvegarder"_ en&nbsp;ligne.
  -
    type: text
    title: Prérequis
    level: h2
    body: |
      - Un compte&nbsp;[GitHub](https://github.com/).
      - Avoir l'application [GitHub Desktop](https://desktop.github.com/).
  -
    type: text
    title: Authentification
    level: h2
    body: |
      1. Dans le coin en supérieur gauche de GitHub Desktop, choisissez l'onglet&nbsp;_File_.
      2. Sélectionnez ensuite _Options_ et son onglet&nbsp;_Accounts_.
      3. Sur la ligne intitulée GitHub.com, cliquer sur le bouton _Sign in_ et entrer les informations de votre&nbsp;compte.
      
      Voilà, maintenant votre application GitHub Desktop connectée à votre compte&nbsp;GitHub!✨
  -
    type: text
    title: 'Création d''un répertoire'
    level: h2
    body: 'Pour créer un répertoire, il suffit d''être connecté à GitHub et de cliquer sur le bouton `add`, situé dans le coin supérieur gauche de l''application. Un menu contextuel offrira l''option `Create New Repository...`. En cliquant sur celui-ci, une fenêtre d''initialisation de _repo_ devrait&nbsp;s''afficher.'
  -
    type: image
    image: /assets/articles/github-desktop-add-repository.png
  -
    type: text
    body: |
      Dans cette fenêtre, il suffit d'entrer le nom désiré du _repo_, une brève description et l'emplacement sur votre ordinateur où vous désirez que le dossier du projet&thinsp;📁 soit&nbsp;créé.
      
      De plus, il est possible de spécifier si un fichier [README](github#readme) devrait être créé, de spécifier si l'on souhaite utiliser un [.gitignore](github#gitignore) et si une [licence](github#licences) devrait être attribuée au&nbsp;projet.
  -
    type: image
    image: /assets/articles/github-dektop-create-repo.png
  -
    type: text
    title: Clone
    level: h2
    body: 'Pour `cloner` un répertoire précédemment créé sur [GitHub.com](https://github.com/) ou encore `cloner` le répertoire d''un collègue vous ayant [donné accès à son répertoire](github#gestion-des-acces-au-repo), il faut cliquer sur le bouton `add` dans le coin supérieur gauche de l''application. Un menu contextuel offrira alors l''option `Clone Repository...`.'
  -
    type: image
    image: /assets/articles/github-desktop-add-repository.png
  -
    type: text
    body: |
      En cliquant sur celui-ci, une fenêtre devrait vous offrir de choisir parmi 3&nbsp;onglets:
      
      - `GitHub.com` pour vos répertoires existants sur&nbsp;[GitHub.com](https://github.com/)
      - `GitHub Entreprise Server` si votre employeur bénéficie de ce type de&nbsp;compte. 
      - `URL` pour entrer l'adresse d'un _repo_ créé par un&nbsp;collègue.
  -
    type: text
    title: Anatomie
    level: h2
  -
    type: text
    title: 'Accès rapides'
    level: h3
    body: |
      - `Open in...` ouvre le projet courant dans votre éditeur de&nbsp;texte.
      - `Show in Finder` ouvre le dossier du projet courant dans votre explorateur de&nbsp;fichiers.
      - `GitHub` ouvre dans votre navigateur la page GitHub du projet&nbsp;courant.
  -
    type: image
    image: /assets/articles/github-desktop-acces-rapide.png
  -
    type: text
    title: 'Menu principal'
    level: h3
  -
    type: image
    image: /assets/articles/github-desktop-nav.png
  -
    type: text
    level: h2
    body: |
      - `Current Repository` indique le répertoire/projet sur lequel vous, vous trouver. Au clic, il vous permet de passer d'un projet à un&nbsp;autre.
      - `Current Branch` indique la branche courante. Au clic, il est possible de changer de&nbsp;branche.
      - `Fetch origin`&thinsp;🔄 indique quand GitHub Desktop a vérifié pour la dernière fois si de nouveaux changements étaient disponibles en ligne. Cliquer sur cet onglet forcera GitHub à effectuer une nouvelle&nbsp;vérification.
  -
    type: text
    title: 'États des fichiers'
    level: h3
  -
    type: image
    image: /assets/articles/github-desktop-fichiers.png
  -
    type: text
    body: |
      - `Changes` indique le nombre de fichiers modifiés depuis le dernier commit et les affiches, sous forme de&nbsp;liste.
      - `History` lorsque sélectionné, indique tous les précédents commits, du plus récent aux plus anciens, et permet de voir le détail de chaque fichier&nbsp;modifié.
  -
    type: text
    title: 'Boite de commit'
    level: h3
  -
    type: image
    image: /assets/articles/github-desktop-commit.png
  -
    type: text
    body: 'Permets d''inscrire le nom et la description du prochain&nbsp;commit'
  -
    type: text
    title: Revert
    level: h2
    body: |
      L'option `revert` permet de revenir à une ancienne version de son&nbsp;code&thinsp;🔙.
      
      Pour ce faire, il faut allez dans l'onglet `History` et effectuer un clique droit sur le commit désiré. La première option du menu contextuel sera `Revert this Commit`. En la sélectionnant, votre copie locale retournera à cette précédente&nbsp;sauvegarde.
  -
    type: image
    image: /assets/articles/github-desktop-revert.png
  -
    type: text
    title: Alternatives
    level: h2
    body: |
      Il existe plusieurs alternatives à GitHub Desktop, notamment:
      
      - [Sourcetree](https://www.sourcetreeapp.com/)
      - [GitKraken](https://www.gitkraken.com/git-client)&thinsp;🦑
      - [Git CLI](https://git-scm.com/book/en/v2/Getting-Started-The-Command-Line) _(La ligne de commande)_
      - Etc.
fieldset: page-article
id: b8096a6f-7c18-48f2-8a55-f527b87f4d71
