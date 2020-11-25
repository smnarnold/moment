title: 'Installation local'
template: page-article
color_scheme: auto
body:
  -
    type: text
    title: Téléchargement
    level: h2
    body: 'Pour télécharger la plus récente version de WordPress, rendez-vous sur la [page de téléchargement de WordPress.org](https://fr-ca.wordpress.org/download/)'
  -
    type: note
    intent: warning
    body: 'Attention de ne pas confondre avec WordPress.com qui offre des solutions&nbsp;payantes.'
  -
    type: text
    title: 'Lien avec Apache, MySQL et PHP (AMP)'
    level: h2
    body: '1. Décompresser le .zip&thinsp;🗜️ dans le dossier associé à votre outil AMP.'
  -
    type: note
    intent: generic
    body: 'Dans le cadre de cet exemple, MAMP sera le logiciel AMP utilisé, mais plusieurs variantes similaires sont aussi disponibles: [WampServer](https://www.wampserver.com/), [XAMPP](https://www.apachefriends.org/fr/index.html), etc.'
  -
    type: text
    body: |
      Par exemple, si vous utilisez [MAMP](https://www.mamp.info/fr), dans le dossier _htdocs_&thinsp;📁 et donner lui le nom de votre&nbsp;projet.
      
      2. Ouvrez votre logiciel AMP et démarrez les serveurs. Assurez-vous que l'**Apache Server** et le **MySQL server** soient bien activés. Un indicateur visuel devrait vous indiquer leur&nbsp;statut. 
      
      Par exemple, MAMP affiche un point vert&thinsp;🟢 à leur droite confirmant leur&nbsp;fonctionnement.
  -
    type: image
    image: /assets/articles/mamp-start.jpg
  -
    type: text
    title: 'Création d''une base de données'
    level: h2
    body: '1. Cliquez sur le bouton _Open WebStart page_ situé au milieu du logiciel MAMP, vous serez redirrigé vers la page d''accueil de MAMP où un lien vous permettra d''accèder à&nbsp;phpMyAdmin.'
  -
    type: image
    image: /assets/articles/phpmyadmin-link.jpg
  -
    type: text
    body: '2. À partir du menu à gauche de phpMyAdmin, sélectionner l''option _New_ afin de créer une nouvelle base de&nbsp;données.'
  -
    type: image
    image: /assets/articles/phpmyadmin-new.jpg
  -
    type: text
    body: '3. Donnez ensuite le nom de votre projet à la base de données et appuyez sur le bouton&nbsp;<kbd>Create</kbd>.'
  -
    type: image
    image: /assets/articles/phpmyadmin-form.jpg
  -
    type: note
    intent: warning
    body: 'Notez le nom de la base de données. Vous en aurez besoin plus tard pour configurer&nbsp;WordPress.'
  -
    type: text
    body: 'Félicitation! Vous avez maintenant une base de données vide prête à être populée par&nbsp;WordPress.'
  -
    type: text
    title: 'Configuration de WordPress'
    level: h2
    body: |
      1. Retournez sur la page d'accueil de MAMP, via l'option _Open WebStart page_ et sélectionner l'onglet _My website_. Une liste correspondant aux projets dans le dossier&nbsp;_htdocs_&thinsp;📁 devraient&nbsp;s'afficher. 
      
      Sélectionner votre&nbsp;projet.
  -
    type: note
    intent: warning
    body: |
      Si le message suivant s'affiche:
      
      <blockquote>If you can see this page, your new virtual host was set up successfully. Now, web content can be added and this placeholder page<sup>1</sup> should be replaced or deleted.</blockquote>
      
      Effacez le fichier _index.html_ à la racine du dossier _htdocs_&thinsp;📁.
  -
    type: text
    body: |
      2. Un message de bienvenue de la part de WordPress devrait s'afficher. 
      
      Appuyez sur le bouton <kbd>C'est parti&thinsp;!</kbd>
      
      3. Remplissez les informations de connexion à votre base de données.
      
      - `Nom la base de données` correspond à celui que vous avez donné lorsque [vous avez créé votre base de données](#creation-dune-base-de-donnees) dans&nbsp;phpMyAdmin.
      - `Identifiant`, à moins que vous l'ayez changé, l'identifiant local par défaut est&nbsp;_root_.
      - `Mot de passe`, à moins que vous l'ayez changé, le mot de passe local par défaut est&nbsp;_root_.
      - `Adresse de la base de données` laissez _localhost_.
      - `Préfixe de tables` laissez _wp\__.
      
      Et appuyer sur&nbsp;<kbd>Envoyer</kbd>
  -
    type: image
    image: /assets/articles/wp-db-connexion.jpg
  -
    type: note
    intent: warning
    body: 'Si vous avez une erreur, il est probable que le nom de la base de données entré ne soit pas identique au nom donné dans phpMyAdmin. Revérifiez le nom et&nbsp;recommencez.'
  -
    type: text
    body: |
      4. Entrez ensuite les informations désirées pour votre&nbsp;site. 
      
      - Nom du site
      - Nom d'usager
      - Mot de passe
      - Etc.
fieldset: page-article
id: bef095ff-ae61-4061-add7-7976f9294ea8
