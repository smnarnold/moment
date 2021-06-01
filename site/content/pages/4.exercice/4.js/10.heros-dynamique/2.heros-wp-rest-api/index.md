body:
  -
    type: text
    body: |
      Pour cette partie de l'exercice, nous allons populer le héros à partir d'informations contenues dans une instance de&nbsp;WordPress.
      
      Avant de commencer cette partie, assurez-vous d'avoir bien complété la [première partie](https://smnarnold.com/exercice/js/heros-dynamique/heros-mise-en-page), car nous partirons des éléments contenus dans celle-ci.
      
      Aperçu du résultat:
  -
    type: image
    image: /assets/articles/heros-wp-rest-api.png
  -
    type: text
    title: Requis
    level: h2
    body: |
      1. Choisissez une série de jeux vidéo. Cette série servira de thème pour la suite de l'exercice. Par exemple: _Sonic the&nbsp;Hedgehog_.
      2. Dans le tableau de bord de WordPress effacez les articles _(posts)_ présents et créez-en un nouveau. Ce article devra contenir trois&nbsp;informations:
      	- Le titre d'un des jeux de votre série, ex: _Sonic the&nbsp;Hedgehog_.
          - Une description du jeu, ex: _Jeux vidéo de plates-formes développé par&nbsp;Sega..._
          - Une image d'aperçu _(featured&nbsp;image)_&thinsp;🏙.
      3. Accédez à la page d'accueil de votre site&nbsp;WordPress.
  -
    type: note
    intent: generic
    body: 'Vous devriez voir une page avec un thème par défaut&nbsp;s''afficher.'
  -
    type: text
    body: '4. Ajoutez `/wp-json/wp/v2/posts` à son URL afin d''accédez aux articles de votre site en format&nbsp;JSON.'
  -
    type: note
    intent: generic
    body: 'Un JSON devrait être visible dans votre&nbsp;navigateur.'
  -
    type: text
    body: '5. Utilisez fetch et cette URL en JavaScript afin d''avoir accès à vos articles dans votre&nbsp;code.'
  -
    type: note
    intent: generic
    body: 'Faites un console log du résultat afin d''inspecter les données&nbsp;reçues.'
  -
    type: text
    body: '6. Récupérez l''identifiant numérique de votre image d''aperçu `featured_media` et effectuez une nouvelle requête fetch à l''adresse média de votre API. Par exemple, `/wp-json/wp/v2/media/8`. Cette requête devrait vous permettre d''avoir accès aux informations de&nbsp;l''image.'
  -
    type: note
    intent: generic
    body: 'Faites à nouveau un console log du résultat afin d''inspecter les données&nbsp;reçues.'
  -
    type: text
    body: '7. En JavaScript, remplacez la source de l''image `.bg`, le titre `.title` et le contenu `.content` par les informations adéquates contenues dans vos deux requêtes&nbsp;fetch.'
  -
    type: note
    intent: generic
    body: 'Théoriquement le contenu et le contenant de votre site sont maintenant parfaitement séparés. Si bien que vous pourriez brancher votre contenant sur un contenu différent et il devrait continuer à fonctionner. Par exemple, remplacer l''URL de votre site par celle-ci `https://wordpress.urbania.ca/`. Vous devriez maintenant vois le contenu d''[Urbania](https://urbania.ca/) afficher dans votre&nbsp;héros.'
  -
    type: text
    title: 'Notes de cours'
    level: h2
    body: |
      - [WP Fetch API](https://smnarnold.com/cours/wordpress/rest-api)
      - [Fetch JS](https://smnarnold.com/cours/javascript/fetch)
      - [Modification du DOM](https://smnarnold.com/cours/javascript/modification-du-dom)
is_hidden: false
title: 'Héros - WP Rest API'
template: page-exercice
color_scheme: auto
preview_color: '#000'
fieldset: page-article
id: 65d75686-2dc5-4cd1-919c-e0a126af449e
