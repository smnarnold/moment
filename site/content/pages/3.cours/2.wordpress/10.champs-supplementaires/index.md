title: 'Champs supplémentaires'
template: page-article
color_scheme: auto
body:
  -
    type: text
    body: 'Les champs _Titre_ et _Contenu_ sont efficaces pour afficher les informations de base d''une page ou d''un article, mais il arrive que certains projets requièrent plus que deux&nbsp;champs.'
  -
    type: text
    title: 'Advanced Custom Fields'
    level: h2
    body: 'Souvent abrégé **ACF**, [Advanced Custom Fields](https://www.advancedcustomfields.com/) est l''une des extensions les plus utiles aux développeurs Wordpress.'
  -
    type: text
    title: 'Tableau de bord'
    level: h3
    body: |
      Une fois installée, un onglet _ACF_ devrait être visible dans la barre latérale servant de menu au tableau de bord. À partir de cet onglet, il est possible de créer de nouveau _groupe de champs_ en cliquant sur&nbsp;_Ajouter_.
      
      1. La première option, _Saisissez le titre_, correspond au libellé affiché dans les pages et articles indiquant le début de votre nouveau groupe de&nbsp;champs.
      2. _+Ajouter des champs_ permet d'ajouter autant de champs que désiré dans un groupe. Texte, nombre, bouton radio, boîte à cocher, image,&nbsp;etc. 
      3. _Emplacement_ correspond aux règles dictant où ce groupe de champs devrait-être disponible. Par exemple: Uniquement sur les&nbsp;articles.
      
      Par exemple, si je créais un champ _Super power_ permettant d'inscrire le super pouvoir de chaque super héro.
  -
    type: image
    image: /assets/articles/wp-custom-field-1574022986.jpg
  -
    type: text
    title: 'Dans le code'
    level: h2
    body: |
      Pour faire référence au champs créer dans le code, il suffit d'appeler les fonctions 
      
      - _the_field()_ pour afficher directement la valeur d'un champs.
      - _get_field()_ pour obtenir la valeur d'un champs prêt à être stocker dans une&nbsp;variable.
      
      Par exemple:
  -
    type: code
    lang: php
    body: '<?php the_field(''super_power''); ?>'
  -
    type: text
    body: 'Dans dans le contexte d''un post, si le champs _super_power_ existe, sa valeur sera affiché à l''endroit où ce code est&nbsp;inscrit.'
  -
    type: note
    intent: good
    body: 'Pour plus d''information sur les fonctions disponibles, voir [advancedcustomfields.com/resources/#functions](https://www.advancedcustomfields.com/resources/#functions/)'
fieldset: page-article
id: fbca55c4-350a-4312-b382-d9d76ae044be
