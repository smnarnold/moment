title: 'GitHub Desktop'
template: page-article
color_scheme: auto
body:
  -
    type: text
    body: 'L''interface en ligne de commande _(CLI)_ de Git est particulièrement réussie! Elle permet aux développeurs de travailler sans interface graphique en tapant des lignes de commandes directement dans un terminal. Cette technique est puissante&thinsp;💪, efficace et ne présente aucun inconvénient, outre qu''elle est intimidante à prime&nbsp;abord.'
  -
    type: image
    image: /assets/articles/git-cli.jpg
  -
    type: note
    intent: tool
    body: 'Pour en savoir plus sur Git CLI [Git Pro de Scott Chacon et Ben Straub&thinsp;📕](https://git-scm.com/book/fr/v2/D%C3%A9marrage-rapide-La-ligne-de-commande).'
  -
    type: text
    body: 'Pour cette raison, [GitHub](./github) a créé l''application gratuite&thinsp;💸 [GitHub Desktop](https://desktop.github.com/) offrant une interface graphique bien structurée, permettant d''éviter le&nbsp;terminal à tous ceux le&nbsp;désirant.'
  -
    type: image
    image: /assets/articles/github-desktop-logo.png
  -
    type: text
    title: Rôle
    level: h2
    body: 'Bien qu''il soit possible d''ajouter ou de modifier des fichiers directement sur GitHub, il est préférable de le faire via GitHub Desktop sur une copie locale. De la sorte, il est possible de voir l''impact de ses changements en temps&nbsp;réel.'
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
      1. Dans le coin en haut à gauche de GitHub Desktop, choisissez l'onglet&nbsp;_File_.
      2. Sélectionnez ensuite _Options_ et son onglet&nbsp;_Accounts_.
      3. Sur la ligne intitulé GitHub.com, cliquer sur le bouton _Sign in_ et entrer les informations de votre&nbsp;compte.
      
      Voilà maintenant votre application GitHub Desktop connectée à votre compte&nbsp;GitHub!✨
  -
    type: text
    title: Anatomie
    level: h2
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
      - `Current Repository` indique le repo courant. Au clique, il est possible de changer de&nbsp;repo.
      - `Current Branch` indique la branche courante. Au clique, il est possible de changer de&nbsp;branche.
      - `Fetch origin`&thinsp;🔄 affiche depuis combien de temps GitHub Desktop a validé si il y avait des changements en ligne à tirer. En cliquant sur cet onglet, il est possible de forcer GitHub à&nbsp;revérifier.
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
      - `History` lorsque sélectionné, indique tous les précédents commits, du plus récent au plus anciens, et permet de voir le détail de chaque fichier&nbsp;modifié.
  -
    type: text
    title: 'Boite de commit'
    level: h3
    body: 'Permet d''inscrire le nom et la description du prochain&nbsp;commit'
  -
    type: image
    image: /assets/articles/github-desktop-commit.png
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
