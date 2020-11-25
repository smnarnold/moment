title: Menu
template: page-article
color_scheme: auto
body:
  -
    type: text
    body: 'Les menus sont gérés en trois étapes dans Wordpress.'
  -
    type: text
    title: Déclaration
    level: h2
    body: 'Pour déclarer un menu, il faut ouvrir le fichier `function.php` et repérer la fonction `register_nav_menus( ... )`.'
  -
    type: code
    lang: php
    body: |
      register_nav_menus( 
        array(
          'main-menu' => __('Menu principal', 'Menu principal du site'), 
        )
      );
  -
    type: text
    body: |
      Dans cet exemple, il n'y a qu'un menu de déclaré.
      
      - `main-menu` nom de référence dans le&nbsp;code.
      - `Menu principal` nom affiché dans le tableau de&nbsp;bord.
      - `Menu principal du site` description affichée dans le tableau de&nbsp;bord.
      
      Pour en déclarer un deuxième, il suffit d'ajouter une ligne à la suite de la première. Par exemple, si nous désirions créer un menu de commanditaires, il serait possible de faire:
  -
    type: code
    lang: php
    body: |
      register_nav_menus( 
        array(
          'main-menu' => __('Menu principal', 'Menu de base'), 
          'sponsors-menu' => __('Menu commanditaires', 'Menu des commanditaires du site'), 
        )
      );
  -
    type: text
    title: Emplacement
    level: h2
    body: |
      Il faut ensuite indiquer l'endroit où ce menu peut être affiché. Pour ce faire, il faut aller dans un [modèle](./templates) ou [partiel](./parts) et ajouter un script permettant de&nbsp;l'inclure.
      
      Par exemple, pour inclure le menu des commanditaires, il faudra&nbsp;faire:
  -
    type: code
    lang: php
    body: |
      <?php 
        wp_nav_menu(array('theme_location' => 'sponsors-menu'));
      ?>
  -
    type: note
    intent: good
    body: |
      Pour avoir plus d'informations sur les options disponibles
      [developer.wordpress.org/reference/functions/wp_nav_menu](https://developer.wordpress.org/reference/functions/wp_nav_menu/)
  -
    type: text
    title: Contenu
    level: h2
    body: |
      Il faut maintenant créer un menu dans le tableau de bord. Pour ce faire, il faut aller&nbsp;dans:
      
      _Apparence_ ➡️ _Menus_
      
      Et commencer par lui donner un&nbsp;nom
  -
    type: image
    image: /assets/articles/wp-nom-menu.png
  -
    type: text
    body: 'Ensuite, à partir du menu de gauche, il est possible de sélectionner les éléments qui devraient constituer le&nbsp;menu.'
  -
    type: image
    image: /assets/articles/wp-menu-ajouter-contenu-1573597412.png
  -
    type: text
    body: 'Dans la section de droite, il est possible de contrôler l''ordre des éléments, ainsi que d''ajuster certains réglages, mais surtout de sélectionner l''emplacement où affichera le&nbsp;menu.'
  -
    type: image
    image: /assets/articles/wp-emplacement-menu.png
fieldset: page-article
id: 4a2429ca-26b5-43c2-a78f-861c6985a190
