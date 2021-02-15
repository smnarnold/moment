body:
  -
    type: text
    body: 'Le fichier `style.css`est particulier. Wordpress s''attend à trouver un fichier avec ce nom à la racine de chaque&nbsp;thème.'
  -
    type: note
    intent: warning
    body: 'Renommer, déplacer ou supprimer ce fichier rendra votre thème&nbsp;inutilisable'
  -
    type: text
    title: 'Metas du thème'
    level: h2
    body: |
      La première partie de ce fichier contient **en commentaire** les informations de base du thème. Ces informations sont affichées dans le tableau de bord dans la section:
      
      _Apparence_ ➡️ _Thèmes_
      
      Par exemple:
  -
    type: image
    image: /assets/articles/theme-metas.png
  -
    type: text
    body: 'Ces informations proviennent du commentaire suivant:'
  -
    type: code
    lang: css
    body: |
      /*
      Theme Name: Montmorency
      Author: Simon Arnold
      Author URI: https://smnarnold.com
      Description: Thème de base pour apprendre à faire un site Wordpress.
      Version: 1.0
      */
  -
    type: text
    body: 'L''image d''aperçu provient du fichier `screenshot.png` se trouvant à la racine du thème. Ce fichier doit obligatoirement s''appeler `screenshot`, être en format `.png` et idéalement avoir une résolution de&nbsp;1200&nbsp;x&nbsp;900px.'
  -
    type: note
    intent: good
    body: 'Pour plus d''informations sur les metas, voir [developer.wordpress.org/themes/basics/main-stylesheet-style-css](https://developer.wordpress.org/themes/basics/main-stylesheet-style-css/#basic-structure)'
  -
    type: text
    title: 'Injection par défaut'
    level: h2
    body: |
      Wordpress charge cette feuille de style par défaut. Il est donc possible d'ajouter des règles de style à l'intérieur de celle-ci et elles seront appliquées dès le prochain rafraichissement de&nbsp;page.
      
      Sans cette injection, il faudrait passer par le fichier `functions.php` et utiliser la fonction `wp_enqueue_style` pour que la feuille de style soit&nbsp;chargée.
is_hidden: false
title: Style.css
template: page-article
color_scheme: auto
preview_color: '#297bf5'
preview_abbr: '{&nbsp;&nbsp;}'
fieldset: page-article
id: 81255285-8a17-4c40-aac2-1b236823c74a
