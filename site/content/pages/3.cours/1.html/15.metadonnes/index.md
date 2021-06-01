body:
  -
    type: text
    body: |
      Il existe plusieurs types de balises `<meta>`. Certaines servent à définir le comportement d'une page, tandis que d'autres permettent de bonifier la page avec certaines&nbsp;informations.
      
      Voyons quelques-unes des balises `<meta>` les plus&nbsp;communes.
  -
    type: text
    title: Charset
    level: h2
    body: |
      Cette balise définit l'encodage des caractères du document. Autrement dit, les caractères supportés sur une page. De nos jours, la valeur `UTF-8` est pratiquement toujours attribuée à cet élément puisqu'elle offre un jeu de caractères universels, incluant la majorité des caractères spéciaux des différentes langues _(accents, cédille,&nbsp;etc.)_.
      
      Par exemple:
  -
    type: code
    lang: html
    body: '<meta charset="utf-8">'
  -
    type: text
    body: 'Si un plus ancien encodage ne supportant pas les accents était utilisé, comme le `ASCII`, les mots accentués, tel que: _"Québec"_, afficheraient alors&nbsp;ainsi:'
  -
    type: code
    lang: html
    body: QuÃ©bec
  -
    type: note
    intent: generic
    body: 'ASCII a été inventé en 1968 par des anglophones. UTF-8 est arrivé en 1996, soit 28&nbsp;ans plus&nbsp;tard.'
  -
    type: note
    intent: warning
    body: 'Cette balise doit être placée au tout début de la balise `<head>` afin de spécifier l''encodage des caractères avant l''apparition d''une première valeur textuelle _(title, description,&nbsp;etc.)_'
  -
    type: text
    title: Viewport
    level: h2
    body: 'Cette balise spécifie la dimension de référence de la fenêtre _(viewport)_ sur les appareils mobiles&thinsp;📱. Par défaut, cette balise est généralement initialisée avec les valeurs&nbsp;suivantes:'
  -
    type: code
    lang: html
    body: '<meta name="viewport" content="width=device-width, initial-scale=1">'
  -
    type: text
    body: |
      Dans ce code, la partie `width=device-width` indique que la largeur de la fenêtre doit correspondre à la largeur de la fenêtre de l'appareil&nbsp;lui-même. 
      
      Sans cette valeur, l'appareil mobile tentera de déterminer la largeur du site par lui-même afin de le rendre entièrement visible dans la page, quite à faire un zoom avant ou arrière sur&nbsp;celui-ci.
      
      Par exemple, voici site contenant une image de 450px de large et un `max-width: 100%` suivis d'un texte sans largeur de défini. Ce même site est affiché sur desktop à gauche, sur mobile sans viewport au centre et avec un viewport à&nbsp;droite.
    title: Width
    level: h3
  -
    type: image
    image: /assets/articles/meta-viewport.png
  -
    type: text
    body: |
      L'image étant plus large que le cadre des appareils mobiles _(375px)_ et le texte n'ayant pas de largeur spécifiée, l'affichage variera en fonction de l'absence ou la présence du meta viewport.
      
      Au centre, le navigateur tente de déterminer par lui-même la largeur de fenêtre _(viewport)_ optimale et donc fait un zoom arrière. Tandis qu'à gauche, la largeur de la fenêtre _(viewport)_ est configurée afin de correspondre à la largeur du cadre de l'appareil. L'image respecte donc sa propriété `max-width: 100%` afin de prendre une largeur de&nbsp;375px.
  -
    type: text
    title: Initial-scale
    level: h3
    body: 'La partie `initial-scale=1` contenu dans la valeur de cette balise indique que la page ne doit pas être agrandie ou rapetissée au chargement initial de la page. Si désiré, il serait possible de faire un zoom avant grâce à `initial-scale=2` ou encore un zoom arrière avec `initial-scale=0.5`.'
  -
    type: text
    title: 'Minimum-scale et maximum-scale'
    level: h3
    body: 'Ces parties permettent de définir le zoom minimal ou maximal permis sur une&nbsp;page.'
  -
    type: text
    title: User-scalable
    level: h3
    body: 'Lorsque cette partie est présente et qu''elle est définie à `no`, par exemple `user-scalable: no`, il est impossible pour l''usager d''agrandir ou de rapetisser la page en utilisant les fonctionnalités de&nbsp;zoom.'
  -
    type: note
    intent: warning
    body: 'L''utilisation du `user-scalable=no`est déconseillé puisqu''elle peut causer des problèmes&nbsp;d''accessibilité.'
  -
    type: text
    title: Description
    level: h2
    body: |
      La balise `<meta name="description">` permet de fournir une brève description d'approximativement 155 caractères qui sera affichée sur les moteurs de recherche et qui sera utilisée par les navigateurs au moment de la création d'un favoris.
      
      Par exemple:
  -
    type: code
    lang: html
    body: '<meta name="description" content="Programme de Techniques d''intégration multimédia du Collège Montmorency situé à Laval, Québec.">'
  -
    type: text
    body: 'Génèrera l''aperçu suivant sur Google:'
  -
    type: image
    image: /assets/articles/google-tim-montmorency.png
  -
    type: text
    title: Keywords
    level: h2
    body: |
      La balise `<meta name="keywords">` permet de définir des mots-clés associés à la page&nbsp;courante.
      
      Par exemple:
  -
    type: code
    lang: html
    body: '<meta property="keywords" content="Audio, Vidéo, Animation, Programmation, 3D">'
  -
    type: text
    title: Langage
    level: h2
    body: |
      la balise `<meta name="langage">` permet de spécifier la langue de la page affichée sous un [format ISO 639-1](https://fr.wikipedia.org/wiki/Liste_des_codes_ISO_639-1) _(2&nbsp;caractères)_.
      
      Par exemple pour un site en&nbsp;français:
  -
    type: code
    lang: html
    body: '<meta name="langage" content="FR">'
  -
    type: note
    intent: warning
    body: 'De plus en plus ce meta est abandonné et la langue est spécifiée sur la balise `<html>` elle-même grâce à l''attribut `lang`. Par exemple, `<html lang="fr">`.'
  -
    type: text
    title: Copyright
    level: h2
    body: |
      Comme son nom l'indique, la balise `<meta name="copyright">` permet de spécifier que les médias et textes contenus sur une page appartiennent à une personne ou une&nbsp;entité.
      
      Par exemple:
  -
    type: code
    lang: html
    body: '<meta name="copyright" content="Collège Montmorency">'
  -
    type: text
    title: Author
    level: h2
    body: |
      La balise `<meta name="author">` permet de donner le crédit à la personne ou la compagnie aillant réaliser une page&nbsp;web.
      
      Par exemple:
  -
    type: code
    lang: html
    body: '<meta name="author" content="Simon Arnold">'
  -
    type: text
    title: Robots
    level: h2
    body: |
      La balise `<meta name="robots">` permet d'indiquer aux robots d'exploration des moteurs de recherche _(Google, Bing, Yahoo)_ comment une page devrait être&nbsp;indexée. 
      
      Voici quelques-unes des valeurs&nbsp;possibles:
      
      - `index` indexer la page _(par défaut, autrement dit, même si ce meta est omis, la page sera&nbsp;indexée)_.
      - `noindex` ne pas indexer la&nbsp;page.
      - `nofollow` na pas indexer aucun&nbsp;lien.
      - `noimageindex` ne pas indexer les&nbsp;images.
      
      Par exemple:
  -
    type: code
    lang: html
    body: '<meta name="robots" content="noindex">'
is_hidden: false
title: Métadonnées
subtitle: 'charset, viewport, description, robots, etc.'
template: page-article
color_scheme: auto
preview_color: '#003a99'
preview: /assets/previews/metadonnees.png
fieldset: page-article
id: 734314fe-0950-4f6f-9d5d-7e6b3d92557c
