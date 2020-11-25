title: Introduction
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
    body: 'Ainsi, vous pouvez modifier/briser/améliorer votre projet l''esprit tranquille, puisqu''il vous permet de revenir en arrière en cas de&nbsp;besoin.'
  -
    type: text
    title: Répertoire
    level: h2
    body: 'Un répertoire, en anglais _repository_ ou son diminutif _repo_, est le nom donné au dossier&thinsp;📂 devant être surveillé par Git. À chaque `commit`, tous les changements effectués à l''intérieur de celui-ci seront enregistrés par&nbsp;Git.'
  -
    type: image
    image: /assets/articles/git-folder-icon.png
  -
    type: text
    title: Commit
    level: h2
    body: |
      À tout moment, il est possible de sauvegarder en local _(sur son ordinateur)_ l'avancement d'un&nbsp;projet&thinsp;💾. 
      
      Cette étape est appelée&nbsp;`commit`.
  -
    type: codepen
    id: BaKQvNq
    theme: light
    ratio: 34
    tabs: result
  -
    type: text
    body: |
      Idéalement, un `commit` est ensuite poussé vers le _cloud_&thinsp;☁️. 
      
      Ce qu'on appel faire un&nbsp;`push`&thinsp;⬆️.
    title: Push
    level: h2
  -
    type: codepen
    id: WNwoLvm
    theme: light
    ratio: 34
    tabs: result
  -
    type: text
    body: |
      Ainsi, si vous devez changer d'ordinateur pour X&nbsp;raisons: 
      
      - Votre ordinateur a explosé&thinsp;💻💥.
      - Est occupé par quelqu'un&nbsp;d'autre.
      - Vous préférez continuer de travailler ailleurs <em>(de la&nbsp;maison</em>&thinsp;🏠 <em>/ du&nbsp;collège</em>&thinsp;🏫<em>)</em>.
      
      Il sera possible d'y avoir accès à partir d'un autre ordinateur, puisque votre `commit` (_sauvegarde_) est maintenant synchronisé sur un serveur en ligne&nbsp;_(ex: GitHub)_.
  -
    type: text
    title: Pull
    level: h2
    body: |
      De n'importe quel ordinateur, il est possible de tirer la sauvegarde la plus récente d'un&nbsp;_repo_.
      
      Ce que l'on appelle faire un&nbsp;`pull`&thinsp;⬇️.
  -
    type: codepen
    id: gOrLZPj
    theme: light
    ratio: 34
    tabs: result
  -
    type: text
    body: 'Ainsi, il est possible de récupérer les changements les plus récents sur un projet et de continuer son avancement exactement où nous étions&nbsp;rendus.'
  -
    type: note
    intent: generic
    body: 'Pour continuer la métaphore du jeu vidéo, l''équivalent serait de faire une sauvegarde en ligne. Ainsi, même si votre console brise ou si vous êtes en visite, vous pouvez récupérer votre partie et la continuer sur une autre&nbsp;console.'
  -
    type: text
    title: Branches
    level: h2
    body: |
      Par défaut, tous les _repos_ ont une branche appelée _master_. Lorsqu'un `push` est effectué, les changements sont envoyés vers cette branche. 
      
      Cependant, il est parfois préférable de laisser la branche `master` indemne. Par exemple, à l'approche d'une démonstration client où l'on souhaite s'assurer qu'aucun bug ne vienne perturber la présentation. Néanmoins, arrêter de travailler quelques jours avant la présentation, simplement pour éviter un potentiel bug lors d'une présentation représente une perte de temps non négligeable. Il est donc préférable de créer une nouvelle branche à partir de `master` et de travailler sur celle-ci&nbsp;plutôt. 
      
      Ainsi, il est possible de présenter la branche `master` l'esprit en paix sachant qu'aucun bug de dernière minute ne risque de faire son apparition. Lorsque la présentation est passée ou que les changements sur la nouvelle branche sont complétés, il est possible de _merger_ la nouvelle branche vers `master` afin d'y incorporer ses&nbsp;changements.
  -
    type: text
    title: Collaboration
    level: h2
    body: |
      Git permet également de travailler à plusieurs simultanément sur un même projet. Pour ce faire, chaque développeur possède une copie du même _repo_ sur son ordinateur et partage un _repo commun_ en ligne pour pousser ses&nbsp;`commits`.
      
      Ainsi, à chaque fois qu'un développeur&thinsp;👩 effectue un `commit` et le `push` en ligne, son collègue&thinsp;👨 reçoit une notification l'avertissant que de nouveaux changements sont disponibles, bref l'invite à faire un&nbsp;`pull`.
      
      Ce dit collègue&thinsp;👨 peut attendre avant de récupérer les changements et continuer à travailler / `commiter` à sa guise. Cependant, Git bloquera toute tentative de `push` tant qu'il n'aura pas `pullé` les changements disponibles en&nbsp;ligne.
  -
    type: codepen
    id: ZEWLEpm
    theme: light
    ratio: 56
    tabs: result
  -
    type: text
    title: Conflits
    level: h2
    body: 'À moins de toujours travailler en solo, aucun développeur n''échappe à la problématique d''avoir modifié le même fichier que l''un de ses&nbsp;collègues.'
  -
    type: text
    title: 'Gérer un conflit SANS Git'
    level: h3
    body: |
      Deux scénarios sont possibles:
      
      - Personne ne remarque l'incident et les changements effectués par le premier développeur sont écrasés par ceux du&nbsp;deuxième&thinsp;🙍.
      - Les développeurs comparent minutieusement chaque version du fichier afin de repérer les différences et essayer de les combiner, ce qui exige du temps, de la concentration et est malheureusement prône aux&nbsp;erreurs. Bref, cette activité a des allures d'une partie du jeu des 7 différences, alors que personne n'a envie de&nbsp;jouer.
  -
    type: image
    image: /assets/articles/jeux-7-erreurs.png
  -
    type: text
    body: |
      Heureusement, comme mentionné précédemment, Git surveille chaque changement. Ainsi, si deux développeurs ont modifié le même fichier, lorsque le deuxième développeur effectuera un pull, afin de récupérer les changements disponibles, Git validera en premier temps si les lignes modifiées sont&nbsp;différentes.
      
      **Si les lignes sont différentes**: les modifications seront combinées automatiquement comme par magie&thinsp;✨.
      
      **Si certaines lignes sont les mêmes**: 
      
      1. Git informera le deuxième développeur de la présence d'un&nbsp;conflit.
      2. Indiquera le fichier&nbsp;touché.
      3. Ajoutera des commentaires dans le fichier indiquant la zone&nbsp;touchée.
      
      Par&nbsp;exemple:
    title: 'Gérer un conflit AVEC Git'
    level: h3
  -
    type: code
    lang: html
    body: |
      <<<<<<< HEAD
      Texte écrit par le premier développeur
      =======
      Texte écrit par le deuxième développeur
      >>>>>>>
  -
    type: text
    body: 'Ainsi, il pourra facilement comparer les différences et sélectionner quelle version il est préférable de&nbsp;garder.'
  -
    type: note
    intent: generic
    body: 'Dans le but d''éviter autant que possible les conflits, ou du moins de les simplifier, il est conseillé de commiter régulièrement. Minimalement 1x par&nbsp;jour.'
  -
    type: note
    intent: good
    body: 'Pour comprendre en détail le fonctionnement de Git, je vous suggère l''excellent [learngitbranching.js.org](https://learngitbranching.js.org/?locale=fr_FR)'
fieldset: page-article
id: 5ad59fd5-9022-42d2-a6bc-2d468e795c12
