body:
  -
    type: text
    body: |
      Pour cette partie de l'exercice, nous allons ajouter des informations supplémentaires à notre héros à partir de champs ACF dans&nbsp;WordPress.
      
      Avant de commencer cette partie, assurez-vous d'avoir bien complété la [deuxième partie](https://smnarnold.com/exercice/js/heros-dynamique/heros-wp-rest-api), car nous partirons des éléments contenus dans&nbsp;celle-ci.
      
      Aperçu du résultat:
  -
    type: image
    image: /assets/articles/heros-acf.png
  -
    type: text
    title: Requis
    level: h2
    body: |
      1. Installez l'extension Advanced Custom Fields _(ACF)_ d'Elliot&nbsp;Condon. 
      2. Dans le menu ACF du tableau de bord de votre instance WordPress, créez-vous un nouveau groupe de champs. Celui ne devra être visible que sur les articles _(posts)_ et non les&nbsp;pages.
      3. Ajoutez un champ nommé _Année_. Ce champ devra être de type nombre. Allez ensuite populer l'année de publication de votre jeu dans son&nbsp;article. Par exemple: _1991_. 📅
      4. Ajoutez un champ nommé _Couleur_. Ce champ devra être un sélecteur de couleur permettant de choisir la couleur du masque affiché par-dessus l'image de votre jeu. Par exemple:&nbsp;_bleu_&thinsp;🔵
      5. Finalement, ajoutez un 3<sup>e</sup> champ nommé _Plateforme_. Ce champ devra être de type image&thinsp;🏙. Toujours dans votre article, populez ce champ avec une image représentant la plateforme de ce jeu. Par exemple: _le logo du Sega&nbsp;Genesis_.
  -
    type: note
    intent: warning
    body: 'Attention de configurer l''option de format retourné à _Image URL_ si vous désirez avoir accès facilement à votre image dans votre&nbsp;requête.'
  -
    type: text
    body: |
      6. Dans le code HTML de votre héros, ajoutez un élément avec la classe `.annee` positionné à 30px du bas et de la droite de votre&nbsp;héros&thinsp;↘️ ainsi qu'un élément avec la classe `.plateforme` ayant un fond blanc, une taille de 60x60px, des coins arrondis et étant positionné à 30px du haut et de la droite du&nbsp;héros&thinsp;↗️.
      7. Malheureusement, l'information contenue dans vos nouveaux champs n'est pas disponible par défaut dans le Rest API de WordPress. Prenez donc un instant pour ajouter l'extension _ACF to REST API_ d'Aires Gonçalves afin de les rendre&nbsp;disponibles.
  -
    type: note
    intent: generic
    body: 'Si vous faite un console log du résultat de la requête fetch de votre page, vous devriez maintenant voir une propriété intitulée _acf_ contenant les nouveaux champs&nbsp;créés.'
  -
    type: text
    body: '8. Au même endroit où vous populer l''image, le titre et le contenu de votre héros, changer la couleur de votre masque par celle reçue dans votre champ `couleur`, insérez la date de publication dans l''élément `.annee` et ajoutez en arrière-plan l''image de votre plateforme à l''élément avec la classe&nbsp;`.plateforme`.'
  -
    type: text
    title: 'Notes de cours'
    level: h2
    body: |
      - [Advanced Custom Fields](https://smnarnold.com/cours/wordpress/acf)
      - [WP Rest API](https://smnarnold.com/cours/wordpress/rest-api)
      - [Modification du DOM](https://smnarnold.com/cours/javascript/modification-du-dom)
is_hidden: false
title: 'Héros - ACF'
template: page-exercice
color_scheme: auto
preview_color: '#000'
fieldset: page-article
id: 853ead35-37af-41b7-8d81-48529eb9adb0
