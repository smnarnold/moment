title: GitHub
template: page-article
color_scheme: auto
body:
  -
    type: text
    body: |
      Comme [mentionné précédemment](./git), lorsqu'un développeur utilise la commande Git `push`, il envoie une sauvegarde de son projet en ligne. Ainsi, lui et ses collègues y ont accès, peu  importe leur emplacement.  Cependant, pour fonctionner cette approche nécessite un **espace en&nbsp;ligne**. 
      
      C'est ici que [GitHub](https://github.com/) entre en&nbsp;jeu!
  -
    type: image
    image: /assets/articles/octocat.png
  -
    type: note
    intent: warning
    body: 'Sans GitHub, il serait possible de faire des `commits` avec Git. Cependant, la portabilité et l''aspect collaboratif serait limité, puisqu''il serait impossible de faire des&nbsp;`push` sans avoir un espace sur un serveur pour les&nbsp;stocker.'
  -
    type: text
    title: 'Esprit de collaboration'
    level: h2
    body: |
      Par défaut, héberger un projet sur GitHub est gratuit et beaucoup de projets sont publics afin de pouvoir être consultés/modifiés au besoin. Parmi ces projets, on retrouve plusieurs librairies connues, telles&nbsp;que: 
      
      - [Bootstrap](https://github.com/twbs/bootstrap)
      - [jQuery](https://github.com/jquery/jquery)
      - [React](https://github.com/facebook/react)
      - Etc.
      
      Et d'organisations d'envergures.
      
      - [La NASA&thinsp;👨‍🚀](https://github.com/nasa)
      - [Microsoft](https://github.com/microsoft)
      - [Google](https://github.com/google)
      - Etc.
      
      L'aspect public peut à priori peut sembler étrange, mais il favorise grandement la collaboration entre développeurs, puisqu'il permet de:
      
      - Faire une copie d'un&nbsp;projet.
      - D'y apporter des&nbsp;modifications.
      - D'utiliser le projet modifié pour ses besoins ou encore de soumettre ses changements au(x) propriétaire(s) du projet. Ce que l'on appelle un&nbsp;[pull request](#pull-request).
  -
    type: text
    title: 'Création d''un répertoire'
    level: h2
    body: 'Pour créer un répertoire, il suffit d''être connecté à GitHub et de se rendre sur la [page d''accueil](https://github.com/). En haut à gauche de l''interface, un bouton _New_ permet d''accéder à la page d''initialisation d''un nouveau&nbsp;repo.'
  -
    type: image
    image: /assets/articles/github-create-repo.png
  -
    type: text
    body: |
      Sur cette page, il suffit d'entrer le nom désiré du _repo_, une brève description et son  statut _(privé ou&nbsp;public)_.
      
      De plus, il est possible de spécifier si un fichier [README](#readme) devrait être créé, de spécifier si l'on souhaite utiliser un [.gitignore](#gitignore) et si une licence devrait être attribuée au&nbsp;projet.
  -
    type: image
    image: /assets/articles/github-create-repository.png
  -
    type: text
    title: README
    level: h2
    body: |
      Le README sert à présenter un projet. Lorsque vous êtes sur la page d'accueil d'un répertoire, vous pouvez voir l'arborescence des fichiers le constituant suivis du README. Voici [un exemple minimaliste](https://github.com/Tim-Momo/wordpress-theme-de-base).
      
      Par défaut, si vous avez coché `Initialize this repository with a README`, un README sera créé avec le titre du _repo_ et la description que vous avez entrée au moment de sa création. Il est possible de modifier ce fichier ultérieurement afin d'y incorporer plus d'informations si&nbsp;désirées.
      
      Ce fichier indique généralement la raison d'être du projet et souvent comment l'utiliser. Sans lui, un projet ne ressemble qu'à une collection de fichiers pour quiconque n'ayant pas travaillé sur le&nbsp;projet.
  -
    type: note
    intent: warning
    body: 'Afin de simplifier/standardiser son affichage, son écriture ne se fait pas en HTML/CSS, mais en [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).'
  -
    type: text
    title: Gitignore
    level: h2
    body: |
      Le fichier _.gitignore_ permet de spécifier à Git des fichiers et/ou dossiers à l'intérieur du _repo_ qu'il ne devrait pas surveiller et pousser vers le serveur&nbsp;_(GitHub)_.
      
      Par exemple, il est possible d'avoir un fichier contenant ses identifications _(nom d'usager et mot de passe)_ à la racine du projet. Cependant, ces informations ne devraient pas être disponibles à tous sur GitHub. Il est donc possible de spécifier d'ignorer ce fichier en ajoutant son nom et son extension dans le `.gitignore`, ex: `identifiants.doc`.
      
      Parfois certains fichiers ne sont simplement pas pertinents au projet en soi. Par exemple, lors de la création d'un site WordPress, seul le thème développé compte réellement. Il est donc préférable de télécharger WordPress sur le [site officiel de WordPress](https://wordpress.org/download/), afin d'avoir la version la récente et à l'intérieur de celui-ci, de télécharger le _repo_ Git contenant le thème seul. Ainsi les mises à jour fréquentes de WordPress ne nécessitent pas de `commits`, `push` et `pull` pour l'équipe de&nbsp;développement.
  -
    type: note
    intent: good
    body: 'Merci à GitHub pour cette [collection de .gitignores](https://github.com/github/gitignore) permettant d''ignorer les fichiers de base de certains projets en fonction de leur&nbsp;nature.'
  -
    type: text
    title: Licenses
    level: h2
    body: |
      Si un _repo_ n'a aucune licence, il est possible d'utiliser son contenu librement. Cependant, certaines licences vont&nbsp;spécifier: 
      
      - de créditer l'auteur.
      - que son usage est réservé aux projets à but non&nbsp;lucratif.
      - de ne pas modifier le&nbsp;contenu.
      - etc.
  -
    type: note
    intent: generic
    body: 'Pour en savoir plus sur les licences, voir [choosealicense.com](https://choosealicense.com/)'
  -
    type: text
    title: Clone
    level: h2
    body: 'Si vous avez créé votre _repo_ en ligne, il est probable que vous désirez éventuellement le modifier sur votre ordinateur. Pour ce faire, il faut repérer le bouton vert ⬇️&thinsp;_Code_ en haut à droite de votre page de&nbsp;répertoire.'
  -
    type: image
    image: /assets/articles/github-code-button.png
  -
    type: text
    body: |
      En cliquant sur celui-ci, vous aurez les options&nbsp;de:
      
      - Copier l'url du répertoire, ce qui peut-être requis par certains logiciels concurrents à GitHub&nbsp;Desktop.
      - Cliquer sur `Open with GitHub Desktop`, l'option la plus facile si vous avez ce logiciel&nbsp;d'installé sur votre&nbsp;ordinateur.
      - Cliquer sur `Download ZIP`. Cependant, cette option ne gardera aucun lien entre votre version en ligne GitHub et la version que vous venez de télécharger. Il est donc préférable d'éviter cette option, dans la majorité des&nbsp;cas.
  -
    type: text
    title: 'Gestion des accès au repo'
    level: h2
    body: |
      Bien qu'un _repo_ puisse être public et que tous puissent le [cloner](#clone), il n'est pas possible pour quiconque de modifier sur GitHub, à moins d'en être l'auteur ou d'avoir obtenu la permission de&nbsp;celui-ci.
      
      Évidemment, dans le cadre d'un projet en équipe, il est primordial de pouvoir donner le droit à ses collègues d'altérer le contenu du _repo_. Pour ce faire, il suffit d'aller sur la page GitHub du repo en question et de cliquer sur ⚙️&thinsp;_Settings_. Ensuite dans l'onglet _Manage access_, il est possible de cliquer sur _Invite a collaborator_ et de rechercher son collègue par&nbsp;son:
      
      - Nom d'usager GitHub
      - Nom complet
      - Courriel
  -
    type: text
    title: Fork
    level: h2
    body: |
      Comme mentionné précédemment, pour modifier un _repo_ en ligne, il faut en être l'auteur ou en avoir obtenu la permission. Néanmoins, il est possible d'être intéressé par un projet et de vouloir s'en servir comme point de départ pour créer son propre&nbsp;projet. 
      
      Pour ce faire, il est possible d'effectuer un `fork`. Cette commande copie le _repo_ GitHub en question vers votre compte GitHub. Puisque cette copie du _repo_ vous appartient, vous n'avez donc plus besoin de permissions afin d'effectuer des `push` sur&nbsp;celui-ci.
      
      Pour ce faire, il faut cliquer sur le bouton `Fork` en au à droite du répertoire que l'on désire&nbsp;copier.
  -
    type: image
    image: /assets/articles/github-fork-button.png
  -
    type: note
    intent: warning
    body: 'Tout l''historique du projet, jusqu''au moment du `fork`, sera copié sur votre repo. De plus, tous les changements effectués après le `fork` sur le _repo d''origine_ seront ignorés sur votre copie du&nbsp;_repo_.'
  -
    type: text
    title: 'Pull request'
    level: h2
    body: |
      Si vous avez effectué un [Fork](#fork) d'un projet et que vous considérez qu'il serait bénéfique pour le propriétaire du _repo d'origine_ d'obtenir vos modifications, vous pouvez lui soumettre une demande de `pull request` ou en français, lui demander de tirer vos changements sur son&nbsp;répertoire.
      
      Le propriétaire du _repo d'origine_ recevra alors une notification lui indiquant votre demande et sera libre d'accepter ou&nbsp;refuser.
      
      Pour ce faire, vous devez cliquer sur l'onglet `Pull request` en haut à gauche de la page de votre répertoire et cliquer sur le bouton vert `New pull request`. Vous devrez alors choisir le répertoire et la branche qui devraient recevoir vos changements et le ceux où vos changements se&nbsp;trouvent.
  -
    type: text
    title: 'Anatomie d''un repo'
    level: h2
  -
    type: text
    title: 'Fil d''Ariane'
    level: h3
    body: 'En haut à gauche se trouve un fil d''Ariane ![](/assets/articles/github-breadcrumb.png) correspondant au projet courant. Il permet d''identifier l''auteur ainsi que le nom du repo en&nbsp;question.'
  -
    type: text
    title: 'Menu d''actions'
    level: h3
    body: |
      En haut à droite se trouve un menu d'actions constitué de trois boutons ![](/assets/articles/github-action.png)
      
      - `Watch/Unwatch`&thinsp;👁️ pour être notifié de tous changements/discussions sur un&nbsp;projet.
      - `Star/Unstar`&thinsp;⭐ pour démontrer son appréciation d'un projet et le sauvegarder dans sa [liste de favoris](https://github.com/stars) sans la partie&nbsp;notifications.
      - `Fork` comme sur CodePen, permets de créer une copie du&nbsp;projet.
  -
    type: text
    title: 'Navigation du projet'
    level: h3
  -
    type: image
    image: /assets/articles/github-navigation-projet.png
  -
    type: text
    body: |
      - `Code`&thinsp;👨🏻‍💻 permet de voir une arborescence des fichiers constituant le&nbsp;projet.
      - `Issues` permet de suivre des tâches, bogues ou encore demandes d'améliorations sur un projet.
      - `Pull requests` liste des corrections suggérées par des tiers au(x) propriétaire(s) du projet. Par exemple, avant de télécharger un projet et d'y effectuer une correction, il est judicieux de valider si un `Pull request` couvrant le problème trouvé n'a pas déjà été&nbsp;ouvert.
      - `Actions` sert à automatiser des tests et des déploiements en ligne. Par exemple, à chaque commit sur une branche spécifique, le code pourrait être envoyé sur un serveur pour mettre à jour le site web&nbsp;correspondant. 
      - `Projects` permet de gérer et de visualiser l'évolution d'un projet de façon similaire à&nbsp;[Trello](./trello).
      - `Wiki` tel Wikipedia, permet de documenter votre projet et de prendre des notes au&nbsp;besoin.
      - `Security`&thinsp;🛡️ liste les vulnérabilités détectées sur un&nbsp;projet.
      - `Insight` permet de voir un rapport d'activité concernant le&nbsp;repo.
      - `Settings`&thinsp;⚙️ permet d'ajuster les configurations de base du projet _(Nom, Onglets disponibles, ajout de collaborateurs,&nbsp;etc.)_
  -
    type: text
    title: Sommaire
    level: h3
  -
    type: image
    image: /assets/articles/github-sommaire.png
  -
    type: text
    body: |
      - `Commits` nombre de commits ayant eux sur le projet. En cliquant sur cet onglet, il est possible d'accéder à l'historique du projet, commit par commit. Chaque commit est identifié par le commentaire laissé par le développeur au moment du commit, d'où l'importance d'inscrire des commentaires&nbsp;significatifs.
      - `Branch(es)` nombre de branches créées sur ce projet. En cliquant sur cet onglet, il est possible de voir un aperçu de l'ensemble des branches rattachées à un&nbsp;projet.
      - `Packages` permet d'établir un pont entre GitHub et&nbsp;[NPM](https://www.npmjs.com/).
      - `Releases` permet d'identifier un commit en particulier pour références ultérieures. Par exemple, le dernier commit avant de mettre un site en ligne pourrait être le release `v1.0` il y aurait probablement plusieurs autres commits par la suite, jusqu'à ce qu'une version deux soit prête qui pourrait à son tour être identifié&nbsp;`v2.0`.
      - `Contributors` qui a contribués au projet, quand et à quel&nbsp;niveau.
  -
    type: text
    title: 'Gestion de branches'
    level: h3
  -
    type: image
    image: /assets/articles/github-gestions-de-branches.png
  -
    type: text
    body: |
      - `Branch` indique la branche courante, par défaut `Master`. Au clic, cet onglet permet de changer la branche&nbsp;courante.
      - `New pull request` dans le cadre d'un projet qui a été `Forké`, permet de sélectionner la branche de du projet que l'on aimerait soumettre comme amélioration au projet&nbsp;d'origine.
  -
    type: text
    title: 'Gestion de fichiers'
    level: h3
  -
    type: image
    image: /assets/articles/github-gestion-de-fichiers.png
  -
    type: text
    body: |
      - `Create a new file`&thinsp;📄 permet de créer un nouveau fichier directement à partir de&nbsp;GitHub.
      - `Upload files`&thinsp;🔼 permet de téléverser des fichiers directement sur&nbsp;GitHub.
      - `Find file`&thinsp;🔍 permet de rechercher par nom un fichier dans le&nbsp;repo.
      - `Clone or download` 
        - Permets d'obtenir l'url du repo pour en faire une copie.
        - Permets via `Open in Desktop` d'ouvrir le projet directement dans&nbsp;[GitHub Desktop](./github-desktop).
        - Permets via `Download ZIP` de télécharger une copie du repo en format&nbsp;zip.
  -
    type: text
    title: Alternatives
    level: h2
    body: |
      Il existe plusieurs alternatives à GitHub, notamment: 
      - [Bitbucket](https://bitbucket.org/)
      - [GitLab](https://about.gitlab.com/)&thinsp;🥼
      
      Néanmoins, GitHub étant le plus grand hébergeur de code source au monde _([50&nbsp;millions d'utilisateurs, + de 100&nbsp;millions de projets](https://fr.wikipedia.org/wiki/GitHub))_, sera l'hébergeur enseigné dans le cadre de ce&nbsp;cours.
fieldset: page-article
id: e7f81fa0-16a4-4de3-a86a-995f83f776c7
