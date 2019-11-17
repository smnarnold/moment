title: 'Modèles (Templates)'
template: page-article
color_scheme: auto
body:
  -
    type: text
    body: |
      Les modèles, ou en anglais _templates_, sont certains des fichiers `.php` se trouvant à la racine d'un thème.
      
      Ces fichiers permettent de changer l'apparence de vos pages.
  -
    type: text
    title: Création
    level: h2
    body: |
      Pour créer un modèle, il suffit de créer un fichier `.php` à la racine du thème. Dans ce fichier, immédiatement après la déclaration `<?php`, un commentaire permet d'indiquer à Wordpress le nom du&nbsp;modèle.
      
      Par exemple:
  -
    type: code
    lang: html
    body: |
      /**
       * 	Template Name: Nom du template
       */
  -
    type: text
    body: |
      Wordpress sera ainsi en mesure de détecter ce fichier. Par la suite, lors de l'édition d'une page, dans la barre latérale de droite, dans la&nbsp;section:
      
      _Attributs de page_ ➡️ _Modèle_ 
      
      Le nom donné au modèle dans le commentaire apparaitra comme option de modèle dans le menu&nbsp;déroulant.
  -
    type: image
    image: /assets/articles/attributs-de-page.png
  -
    type: note
    intent: generic
    body: 'Idéalement, un nom similaire entre le modèle et le fichier `.php` permet de simplifier le&nbsp;débuggage.'
  -
    type: text
    title: Hiérarchie
    level: h2
    body: 'Wordpress tente de déterminer quel modèle afficher lors de l''appel d''une page en suivant une hierarchie particulière 👑.'
  -
    type: text
    title: 'Pages 📄'
    level: h3
    body: |
      Par exemple, avec l'url `exemple.com/portfolio`
      
      Wordpress tentera de valider en ordre si:
      
      1. Un modèle a été attribué via le <span title="admin">tableau de&nbsp;bord</span>.
      2. `page-portfolio.php` existe à la racine du&nbsp;thème.
      3. `page-7.php` existe. _(Si l'id de la page est&nbsp;`7`)_.
      4. Le fichier générique `page.php` est&nbsp;présent.
      5. `singular.php` existe.
      6. `index.php` existe.
  -
    type: text
    title: Accueil
    level: h4
    body: |
      La page d'accueil est particulière. Par défaut, WordPress lui attribut son propre modèle affichant normallement les plus récents articles. Il est néanmoins possible de changer cette configuration dans le tableau de bord via: 
      
      _Réglage_&nbsp;➡️&nbsp;_Lecture_
      
      - home.php
      - index.php
  -
    type: text
    title: '404'
    level: h4
    body: |
      1. 404.php
      2. index.php
  -
    type: text
    title: 'Articles (Posts)'
    level: h3
    body: |
      Les articles suivent une hiérarchie légèrement différente.
      
      Par exemple, avec l'url `exemple.com/bonjour-tout-le-monde`
      
      Wordpress tente de valider en ordre&nbsp;si:
      
      1. `single-post-bonjour-tout-le-monde.php` existe. <br>Ce nom de fichier&nbsp;provient:
      	- du prefix `single`.
          - du **type de post**, dans cet exemple celui par défault&nbsp;`post`.
          - et du slug de l'article `bonjour-tout-le-monde`
      2. `single-post.php` existe. Ce nom, comme le précédent, provient du préfix `single` et du type de post. Par exemple: si ce type avait été `superhero`, le fichier appelé aurait été&nbsp;`single-superhero.php`.
      3. `single.php` si aucun modèle spécifique n'est&nbsp;trouvé.
      4. ensuite `singular.php`
      5. et finalement&nbsp;`index.php`
  -
    type: note
    intent: warning
    body: 'Le fichier `index.php` est en quelque sorte le fichier de la dernière chance.'
  -
    type: note
    intent: good
    body: 'Pour plus d''informations sur toutes les hiérarchies de Wordpress, consulter [developer.wordpress.org/themes/basics/template-hierarchy](https://developer.wordpress.org/themes/basics/template-hierarchy/)'
fieldset: page-article
id: 94a61c8c-cff2-49ec-a709-8f7ed3eccb2c
