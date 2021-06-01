body:
  -
    type: text
    body: |
      Pour cette partie de l'exercice, nous allons transformer notre héros en _Single-Page Application (SPA)_ ou selon le terme francophone: en [Application web&nbsp;monopage](https://fr.wikipedia.org/wiki/Application_web_monopage).
      
      Avant de commencer cette partie, assurez-vous d'avoir bien complété la [troisième partie](https://smnarnold.com/exercice/js/heros-dynamique/heros-acf), car nous partirons des éléments contenus dans&nbsp;celle-ci.
      
      Aperçu du résultat:
  -
    type: image
    image: /assets/articles/heros-spa.mp4
  -
    type: text
    title: Requis
    level: h2
    body: |
      1. Créez-vous un 2<sup>e</sup> article WordPress contenant un autre chapitre de votre série de jeux vidéo. Par exemple: _Sonic the Hedgehog&nbsp;2_, et populer toutes ses informations _(titre, image, couleur,&nbsp;etc.)_
      2. Dans votre code HTML, insérez avant même votre héros un élément avec la classe _.nav_. Cet élément devra prendre toute la largeur de l'écran et avoir un fond noir&thinsp;⚫️.
      3. Au moment de récupérer les articles de votre site via fetch, faites une boucle sur ceux-ci afin de générer des boutons contenant le titre de chaque jeu et un data-attribute ayant comme valeur le `id` du billet courant. Ajustez ensuite les styles de ces boutons afin de retirer leurs bordures et couleurs de&nbsp;fond.
      4. Au clic d'un des nouveaux boutons, récupérez son `id` inscrit dans son `data-id` et faites un appel fetch à l'URL de l'article en question à partir de celui-ci. Par exemple: `/wp-json/wp/v2/posts/8`. 
      5. À partir de cette information et du code que vous avez déjà écrit, repopuler le héros de votre&nbsp;page. Vous devriez obtenir un résultat similaire à la capture ci-dessous&thinsp;👇
  -
    type: image
    image: /assets/articles/sonic-spa-1.mp4
  -
    type: text
    body: |
      6. Créez vous un élément avec la classe `.rideau` dans votre héros, mais par dessus le reste du contenu. Cet élément doit être positionné dans le coin supérieur gauche du héros, prendre toute sa hauteur, mais avoir une largeur de 0 et avoir une couleur de fond de votre&nbsp;choix.
      7. Créez-vous deux nouvelles fonctions. Une 1<sup>re</sup> intitulée `montrerRideau`. À l'intérieur de celle-ci, faites en sorte via GSAP que la largeur du rideau s'anime afin de couvrir entièrement le&nbsp;héros. Une 2<sup>e</sup> nommé `cacherRideau` qui fait l'opposé et anime la largeur du rideau à son point de départ, soit&nbsp;0.
      8. Lorsqu'un bouton est appuyé, avant même de faire votre requête fetch, appelez votre fonction `montrerRideau`. Par la suite, après avoir mis à jour les informations dans votre héros appelez maintenant la fonction `cacherRideau`. Ainsi le changement de contenu se fera plus&nbsp;gracieusement.
  -
    type: text
    title: 'Notes de cours'
    body: |
      - [Boucles JS](https://smnarnold.com/cours/javascript/boucles)
      - [AddEventListener](https://smnarnold.com/cours/javascript/addeventlistener)
      - [GSAP - Introduction](https://smnarnold.com/cours/gsap/introduction)
is_hidden: false
title: 'Héros - Single Page Application'
template: page-exercice
color_scheme: auto
preview_color: '#000'
fieldset: page-article
id: d31b21d0-4d3f-4ac7-bc85-d79042a99f10
