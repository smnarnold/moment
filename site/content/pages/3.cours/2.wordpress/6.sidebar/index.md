title: 'Barre latérale (Sidebar)'
template: page-article
color_scheme: auto
body:
  -
    type: text
    body: |
      La barre latérale, ou en anglais _sidebar_, est une zone dans laquelle il est possible d’insérer des widgets. Par&nbsp;exemple: 
      
      - Un champ de recherche
      - Des liens vers les articles les plus&nbsp;récents
      - Un formulaire d’inscription à une&nbsp;infolettre
      - Des publicités
      - Etc.
      
      Il est possible d'en avoir autant que désiré. Par exemple, une dans le contenu principale, une dans le pied de page, etc.
  -
    type: text
    title: Déclaration
    level: h2
    body: 'Pour déclarer une barre latérale, il faut ouvrir le fichier `function.php` et repérer la fonction `register_sidebar( ... )`.'
  -
    type: code
    lang: php
    body: |
      register_sidebar(array(
        'name' => __('Barre laterale principale', 'Barre latérale principale du site'), 
      ));
  -
    type: text
    body: |
      Dans cet exemple, il n'y a qu'une barre latérale de déclarée.
      
      - `name` indique que nous allons déclarer un nom.
      - `'Barre laterale principale'` nom affiché dans le tableau de&nbsp;bord.
      - `'Barre latérale principale du site'` description affichée dans le tableau de&nbsp;bord.
      
      Après cette déclaration, la barre latérale devrait être visible dans le tableau de&nbsp;bord.
  -
    type: note
    intent: good
    body: |
      Pour en savoir plus sur les options de déclaration de la barre&nbsp;latérale
      [developer.wordpress.org/reference/functions/register_sidebar](https://developer.wordpress.org/reference/functions/register_sidebar/)
  -
    type: text
    title: Emplacement
    level: h2
    body: |
      Il faut ensuite indiquer l'endroit où cette barre latérale peut être affichée. Pour ce faire, il faut aller dans un [modèle](./templates) ou [partiel](./parts) et ajouter un script permettant de&nbsp;l'inclure.
      
      Par exemple, pour inclure `sidebar.php` il faudra&nbsp;faire:
      
      `<?php get_sidebar(); ?>`
      
      Si par exemple, une variante `sidebar-commanditaires.php` existait, elle serait inclure avec le&nbsp;script:
      
      `<?php get_sidebar('commanditaires'); ?>`
  -
    type: text
    title: Contenu
    level: h2
    body: |
      Pour ajouter du contenu, il faut aller&nbsp;dans:
      
      _Apparence_ ➡️ _Widgets_
      
      Dans le tableau de bord, sélectionner les widgets désirés dans la colonne de gauche et les glisser sur une barre latérale ou cliquer sur _Ajouter le&nbsp;widget_.
  -
    type: image
    image: /assets/articles/wp-widget.jpg
fieldset: page-article
id: 8c83f742-1a8f-4165-80c5-a26c16f42000
