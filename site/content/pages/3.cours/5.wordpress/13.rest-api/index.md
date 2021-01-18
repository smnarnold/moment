title: 'Rest API'
template: page-article
color_scheme: auto
body:
  -
    type: text
    body: |
      Le Rest API de WordPress est la fonctionnalité préférée des développeurs WordPress n'affectionnant pas particulièrement&nbsp;WordPress&thinsp;🖤. 
      
      Elle permet aux éditeurs de continuer d'entrer/modifier du contenu dans le tableau de bord de Wordpress, comme dans tout site WordPress classique. Tout en permettant aux développeurs d'accéder aux contenus en JavaScript via des JSON plutôt que d'avoir à utiliser les templates PHP de&nbsp;WordPress.
  -
    type: text
    title: 'Utilisation de base'
    level: h2
    body: |
      Par défaut, le Rest API est déjà présent sur tout site WordPress. Pour y avoir accès, il suffit d'ajouter `/wp-json/wp/v2/` à la fin de l'url du site en&nbsp;question.
      
      Par exemple:
  -
    type: code
    lang: js
    body: 'https://site.com/wp-json/wp/v2/'
  -
    type: text
    body: 'Le page retourné ressemble probablement à un mur de texte illisible. Il s''agit en fait d''un fichier JSON minifié contenant tous les contenus du site, affichés sur une seule&nbsp;ligne.'
  -
    type: note
    intent: tool
    body: 'Afin de rendre ce contenu plus facilement lisible, des extensions permettent d''afficher les JSON minifiés en format non minifiés. Par exemple, [JSON View sur Chrome](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=fr) ou [JSON View sur Firefox&thinsp;🦊](https://addons.mozilla.org/fr/firefox/addon/jsonview/)'
  -
    type: text
    title: Routes
    level: h2
    body: |
      Pour des raisons de performance et de facilité de traitement, il est généralement préférable de ne charger que les informations qui seront utilisées. Pour ce faire, il est possible d'utiliser ce que l'on appelle des&nbsp;routes.
      
      Par exemple, si seulement les pages sont requises, il est possible de spécifier la&nbsp;route
  -
    type: code
    lang: js
    body: 'https://site.com/wp-json/wp/v2/pages'
  -
    type: text
    body: |
      Qui retournera un JSON ne contenant que les pages&nbsp;publiées. 
      
      Dans cet exemple, la partie `https://site.com/wp-json/wp/v2` correspond à l'URL de base de l'API. Tandis que `/pages` est la route spécifiant que seuls les contenus de type _page_ doivent-être&nbsp;retourné.
      
      Si un autre type de publication doit être retourné. Par exemple, les articles, ou en anglais _posts_, il suffit de spécifier une route&nbsp;différente. 
      
      Par exemple: `/posts`.
  -
    type: code
    lang: js
    body: 'https://site.com/wp-json/wp/v2/posts'
  -
    type: text
    body: |
      Il est possible de spécifier des routes encore plus précises. Notamment en spécifiant l'ID de la publication&nbsp;désirée. 
      
      Par exemple, si seulement la page avec le ID 10 est requis, il est possible de spécifier la route&nbsp;`/pages/10`.
  -
    type: code
    lang: js
    body: 'https://site.com/wp-json/wp/v2/pages/10'
  -
    type: text
    title: 'Compatibilité ACF'
    level: h2
    body: 'Par défaut, les informations stockées dans des champs [ACF](./acf) ne sont pas retournées par le Rest&nbsp;API de WordPress. Heureusement, il est possible de les inclure facilement en ajoutant l''extension _ACF to REST&nbsp;API_ de Aires&nbsp;Gonçalves.'
  -
    type: image
    image: /assets/articles/acf-to-rest-api.jpg
  -
    type: text
    body: 'Aussi tôt l''extension installée, les champs ACF seront visibles dans le JSON retourné dans une propriété nommée&nbsp;_ACF_.'
  -
    type: text
    title: Affichage
    level: h2
    body: |
      Une fois les JSONs désirés identifiés, il ne reste plus qu'à afficher leurs&nbsp;informations! 
      
      Par exemple, dans la page _single.php_ servant à afficher les articles, il serait possible de déclarer une balise `<script>` et d'effectuer un [fetch](../javascript/fetch-api) afin de récupérer les informations de l'article&nbsp;courant:
  -
    type: code
    lang: php
    body: |
      fetch("/wp-json/wp/v2/posts/<?php the_ID(); ?>")
        .then(response => response.json())
        .then(data => console.log(data));
  -
    type: note
    intent: good
    body: 'Pour en savoir, voir cet [article de WordPress à propos du Rest&nbsp;API](https://developer.wordpress.org/rest-api/using-the-rest-api/global-parameters/).'
fieldset: page-article
id: dc92d6fc-58f9-4694-a232-102fcd34c78d
