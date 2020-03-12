title: GitHub
template: page-article
color_scheme: auto
body:
  -
    type: text
    body: |
      Comme [mentionné précédemment](./git), lorsqu'un développeur utilise la commande Git `push`, il envoie une sauvegarde de son projet en ligne. Ainsi, lui et ses collègues y ont accès, peu  importe leur emplacement.  Cependant, pour fonctionner cette approche nécessite un **espace en&nbsp;ligne**. 
      
      C'est ici que [GitHub](https://github.com/) entre en&nbsp;jeux!
  -
    type: image
    image: /assets/articles/octocat.png
  -
    type: note
    intent: warning
    body: 'Sans GitHub, il serait quand même possible de faire des sauvegardes locales avec Git. Cependant, la portabilité et l''aspect collaboratif serait sérieusement&nbsp;limité.'
  -
    type: text
    title: 'Esprit de collaboration'
    level: h2
    body: |
      Par défaut, héberger un projet sur GitHub est gratuit&thinsp;💸 tant qu'il est publique. Cette approche permet à tous de consulter/copier un projet existant. Parmi ces projets, on retrouve plusieurs librairies connues, tel&nbsp;que: 
      
      - [Bootstrap](https://github.com/twbs/bootstrap)
      - [jQuery](https://github.com/jquery/jquery)
      - [React](https://github.com/facebook/react)
      - Etc.
      
      Et d'organisations d'envergures.
      
      - [La NASA&thinsp;👨‍🚀](https://github.com/nasa)
      - [Microsoft](https://github.com/microsoft)
      - [Google](https://github.com/google)
      - Etc.
      
      Cette particularité, qui à priori peut sembler étrange, tant à favoriser la collaboration entre développeurs, puisqu'elle permet de:
      
      - Faire une copie d'un&nbsp;projet.
      - D'y apporter des&nbsp;modifications.
      - D'utiliser le projet modifié pour ses besoins ou encore de soumettre ses changements au(x) propriétaire(s) du&nbsp;projet.
  -
    type: text
    title: 'Anatomie d''un repo'
    level: h2
  -
    type: text
    title: 'Fil d''Ariane'
    level: h3
    body: 'En haut à gauche, se trouve un fil d''ariane ![](/assets/articles/github-breadcrumb.png) correspondant au projet courant. Il permet d''identifier l''auteur ainsi que le nom du repo en&nbsp;question.'
  -
    type: text
    title: 'Menu d''actions'
    level: h3
    body: |
      En haut à droite, se trouve un menu d'actions constitué de trois boutons ![](/assets/articles/github-action.png)
      
      - `Watch/Unwatch`&thinsp;👁️ pour être notifié de tous changements/discussions sur un&nbsp;projet.
      - `Star/Unstar`&thinsp;⭐ pour démontrer son appréciation d'un projet et le sauvegarder dans sa [liste de favoris](https://github.com/stars) sans la partie&nbsp;notifications.
      - `Fork` comme sur CodePen, permet de créer une copie du&nbsp;projet.
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
      - `Pull requests` liste des corrections suggérés par des tiers au propriétaire(s) du projet. Par exemple, avant de télécharger un projet et d'y effectuer une correction, il est judicieux de valider si un `Pull request` couvrant le problème trouvé n'a pas déjà été&nbsp;ouvert.
      - `Actions` sert à automatiser des tests et des déploiements en ligne. Par exemple, à chaque commit sur une branche spécifique, le code pourrait être envoyé sur un serveur pour mettre à jour le site web&nbsp;correspondant. 
      - `Projects` permet de gérer et de visualiser l'évolution d'un projet de façon similaire à&nbsp;[Trello](./trello).
      - `Wiki` Tel Wikipedia, permet de documenter votre projet et de prendre des notes au&nbsp;besoin.
      - `Security`&thinsp;🛡️ liste les vulnérabilités détecté sur un&nbsp;projet.
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
      - `Commits` nombre de commits ayant eux sur le projet. En cliquant sur cette onglet, il est possible d'accéder à l'historique du projet, commit par commit. Chaque commit est identifié par le commentaire laissé par le développeur au moment du commit, d'où l'importance d'inscrire des commentaires&nbsp;significatifs.
      - `Branch(es)` nombre de branches créées sur ce projet. En cliquant sur cette onglet, il est possible de voir un aperçu de l'ensemble des branches rattachées à un&nbsp;projet.
      - `Packages` permet d'établir un pont entre GitHub et&nbsp;[NPM](https://www.npmjs.com/).
      - `Releases` permet d'identifier un commit en particulier pour références ultérieures. Par exemple, le dernier commit avant de mettre un site en ligne pourrait être le release `v1.0` il y aurait probablement plusieurs autre commits par la suite, jusqu'à ce qu'une version deux soit prête qui pourrait à son tour être identifié&nbsp;`v2.0`.
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
      - `Branch` indique la branche courante, par défaut `Master`. Au clique, cet onglet permet de changer la branche&nbsp;courante.
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
        - Permet d'obtenir l'url du repo pour en faire une copie.
        - Permet via `Open in Desktop` d'ouvrir le projet directement dans&nbsp;[GitHub Desktop](./github-desktop).
        - Permet via `Download ZIP` de télécharger une copie du repo en format&nbsp;zip.
  -
    type: text
    title: Alternatives
    level: h2
    body: |
      Il existe plusieurs alternatives à GitHub, notamment: 
      - [Bitbucket](https://bitbucket.org/)
      - [GitLab](https://about.gitlab.com/)&thinsp;🥼
      
      Néanmoins, GitHub étant le plus grand hébergeur de code source au monde _(37 millions d'utilisateurs, + de 100 millions de projets)_, sera l'hébergeur enseigné dans le cadre de ce&nbsp;cours.
fieldset: page-article
id: e7f81fa0-16a4-4de3-a86a-995f83f776c7
