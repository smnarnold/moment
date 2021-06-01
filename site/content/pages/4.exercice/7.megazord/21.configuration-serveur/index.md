body:
  -
    type: text
    body: 'Lors de cette étape, nous allons configurer le serveur de notre site et remplacer l''objet de questions JavaScript par une requête&nbsp;fetch.'
  -
    type: text
    title: Requis
    body: |
      1. Connectez-vous à votre serveur web et créez trois dossiers dans&nbsp;`public_html`:
      	1. Un dossier nommé&nbsp;`json`&thinsp;📂.
          2. Un dossier nommé `[nom de votre groupe]`&thinsp;📂. 
          Par exemple:&nbsp;`gorillaz`.
          3. Un dossier nommé `[nom de votre groupe]-api`&thinsp;📂. 
          Par exemple: `gorillaz-api`.
      2. Créez un fichier JSON nommé `data.json` contenant les questions de votre&nbsp;quiz.
  -
    type: note
    intent: warning
    body: 'Assurez-vous que votre fichier JSON est valide grâce à&nbsp;[JSONLint](https://jsonlint.com/).'
  -
    type: text
    body: '3. Déposez votre fichier JSON, ainsi que le [fichier contenu dans le zip suivant&thinsp;🗜](https://ex.smnarnold.com/fetch/pour-dossier-json.zip) sur votre serveur dans le dossier intitulé&nbsp;`json`.'
  -
    type: note
    intent: generic
    body: 'Le fichier PHP contenu dans le zip indique à votre serveur que toutes les requêtes faites au fichier `data.json` dans ce dossier sont acceptées. Sans celui-ci, ces requêtes seront&nbsp;bloquées.'
  -
    type: text
    body: |
      À ce stade, vous devriez être en mesure de voir votre JSON en ligne en vous rendant à l'adresse correspondant à votre dossier&nbsp;`json`. 
      Par exemple: `http://monhebergeur.com/json`.
      
      4. Sur Git, créez une nouvelle branche intitulée `quiz-dynamique` qui contiendra les changements relatifs au point 5 de cette&nbsp;étape.
      5. Dans votre fichier JavaScript, effacez le tableau contenant les questions de votre quiz. Faites en sorte de remplacer ce tableau par le résultat d'une requête fetch effectué à votre dossier&nbsp;`json`.
      6. Dans votre dossier `[nom de votre groupe]-api`, installez une instance de&nbsp;[WordPress](https://fr-ca.wordpress.org/download/).
  -
    type: note
    intent: generic
    body: 'Généralement, l''hébergeur offre une option permettant de créer de nouvelles instances de WordPress facilement. Si ce n''est pas le cas, vous pouvez toujours faire l''installation manuellement en téléchargeant le [fichier&nbsp;d''installation](https://fr-ca.wordpress.org/download/).'
  -
    type: text
    body: |
      7. [Créez-vous une instance locale de WordPress](http://smnarnold.com/cours/wordpress/installation-local) sur votre ordinateur. Cette instance sera utilisée lors du prochain&nbsp;cours afin d'effectuer des&nbsp;tests.
      8. Déposez une copie du code de votre site dans le dossier `[nom de votre groupe]` afin de déployer une première version de votre site en&nbsp;ligne.
  -
    type: note
    intent: warning
    body: 'Vérifiez l''affichage de votre site afin de vous assurer que tous les fichiers affichent bien _(CSS, JS, images, etc.)_. Si ce n''est pas le cas, corriger vos&nbsp;liens.'
  -
    type: text
    body: '9. Ajoutez l''URL de votre site dans votre `readme.md`. Ainsi, quiconque visitera votre répertoire GitHub pourra voir où le site est disponible en&nbsp;ligne.'
is_hidden: false
title: 'Configuration serveur'
template: page-exercice
color_scheme: auto
preview_color: '#75e0be'
preview_abbr: S
fieldset: page-article
id: fc62edd4-7ea2-4abd-beaf-96bcb37f32f1
