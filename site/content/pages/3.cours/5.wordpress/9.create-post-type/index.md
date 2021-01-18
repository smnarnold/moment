title: 'Posts personnalisés'
template: page-article
color_scheme: auto
body:
  -
    type: text
    body: |
      Par défaut, WordPress offre différentes&nbsp;collections: 
      
      - Articles
      - Médias
      - Pages
      - Commentaires. 
      
      Bien que pratiques, il est parfois souhaitable d'en créer des&nbsp;nouvelles.
  -
    type: text
    title: 'Déclaration manuelle'
    level: h2
    body: |
      La déclaration d'un nouveau type de posts doit se fait via le fichier&nbsp;`functions.php`.
      
      Par exemple:
  -
    type: code
    lang: php
    body: |
      function create_post_type() {
        register_post_type('superheros', 
          array(
            'labels' => array(
              'name' => _x('Superheros', 'Nom générique'),
              'singular_name' => _x('Superhero', 'Au singulier'),
              'menu_name' => __('Superheros'),
              'all_items' => __('Tous les superheros'),
              'view_item' => __('Voir les superheros'),
              'add_new_item' => __('Ajouter un nouveau superhero'),
              'add_new' => __('Ajouter'),
              'edit_item' => __('Editer le superhero'),
              'update_item' => __('Modifier le superhero'),
              'search_items' => __('Rechercher un superhero'),
              'not_found' => __('Non trouvé'),
              'not_found_in_trash' => __('Non trouvé dans la corbeille'),
            ),
            'supports' => array(
              'title', 
              'editor', 
              'author', 
              'thumbnail', 
              'custom-fields',
            ),
            'show_in_rest' => true,
            'public' => true,
            'has_archive' => true,
          )
        );
      }
      
      add_action('init', 'create_post_type');
  -
    type: text
    body: |
      Dans cet exemple, avec `'labels' => array( ... )` indique à Wordpress comment nommer ce nouveau post dans différents&nbsp;scénarios.
      
      `'supports' => array( ... )` indique les champs disponibles pour ce type de post dans le tableau de&nbsp;bord.
      
      Tandis que `add_action('init', 'create_post_type');` indique à Wordpress d'appeler cette fonction créant le nouveau type de post à son&nbsp;instanciation.
      
      Dès ce moment, la nouvelle collection devrait être disponible dans le tableau de&nbsp;bord.
  -
    type: text
    title: 'Utilisation manuelle'
    level: h2
    body: |
      Pour afficher cette collection, il faudra faire une requête à Wordpress et stocker son résultat dans une&nbsp;variable. 
      
      Par&nbsp;exemple:
  -
    type: code
    lang: php
    body: '$superheros = new WP_Query(''post_type=Superheros'');'
  -
    type: text
    body: 'Ensuite, il faudra boucler parmi les résultats&nbsp;obtenus:'
  -
    type: code
    lang: php
    body: 'while ($superheros->have_posts()) : $superheros->the_post();'
  -
    type: text
    body: 'Les fonctions de base, tel que: `the_title()` ou `the_content()` retourneront dans le contexte de cette boucle les informations associées à notre collection de&nbsp;superhéros.'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir l''[article Register Post Type sur WordPress.org](https://developer.wordpress.org/reference/functions/register_post_type/)'
  -
    type: text
    title: 'Custom Post Type UI'
    level: h2
    body: |
      Est une extension WordPress facilitant grandement la création de nouveaux types de&nbsp;posts. Dans l'onglet extensions _(plugins)_ du tableau de bord, recherchez _Custom Post Type UI_ et repérez l'extension créée par&nbsp;WebDevStudios.
      
      Installez et activez&nbsp;là.
  -
    type: image
    image: /assets/articles/custom-post-type-ui.jpg
  -
    type: text
    title: 'Création de nouveaux types de posts'
    level: h2
    body: |
      Une fois l'extension installée, un onglet _CPT UI_ devrait être visible dans la barre latérale servant de&nbsp;menu.
      
      À partir de cet onglet, il est possible de créer de nouveaux Types de posts en cliquant sur _(Add/Edit Post&nbsp;Type)_.
  -
    type: image
    image: /assets/articles/cpt-ui-preview.jpg
  -
    type: text
    body: |
      Remplissez les trois champs de&nbsp;base:
      
      1. _Slug_ nom pour accéder au post dans le&nbsp;code
      2. _Plural Label_ nom au pluriel des&nbsp;posts
      3. _Singular Label_ nom au singulier des&nbsp;posts
      
      Optionnellement, vous pouvez remplir les différents champs affichés après les trois premiers pour plus de contrôle sur l'affichage de votre nouveau typde de&nbsp;post.
  -
    type: note
    intent: generic
    body: 'Une des option les plus populaires est de changer l''icône du nouveau type de post. Pour ce faire, il faut allez presque à la fin des champs supplémentaire et populer un champ nommé _Menu&nbsp;Icon_.'
  -
    type: text
    body: |
      Cliquez sur _Populate missing labels based on chosen labels_ et appuyez sur <kbd>Add Post&nbsp;Type</kbd>.
      
      Un nouveau type de post devrait automatiquement apparaître dans le menu latéral du tableau de bord de&nbsp;WordPress.
  -
    type: text
    title: 'Affichage dans les menus'
    level: h2
    body: |
      Il est possible d'ajouter les nouveaux types de posts dans un menu personnalisé. Cependant, cette option est désactivée par&nbsp;défaut. 
      
      Pour&nbsp;l'activer:
      
      1. Allez dans `Apparence -> Menus`. 
      2. En haut à droite de la page, repérer le bouton <kbd>Options de l'écran</kbd> et cliquez&nbsp;dessus. 
      3. Dans le panneau ouvrant, cochez les types de posts ayant la permission d'être inclus dans les&nbsp;menus.
  -
    type: text
    title: 'Création de modèle'
    body: |
      Afin de pouvoir sélectionner un modèle _(template)_ pour un type de post personnalisé, il est nécessaire de spécifier un modèle&nbsp;compatible. 
      
      Pour ce faire, dans le fichier PHP d'un modèle, il faut ajouter dans les commentaires de début de page une propriété intitulée `Template Post Type` et lui spécifier les types de posts&nbsp;compatibles.
      
      Par exemple, pour qu'un modèle soit compatible avec les posts de base et les posts personnalisés de type _partenaire_, il faut&nbsp;écrire:
  -
    type: code
    lang: php
    body: |
      /**
       * Template Name: Partenaire
       * Template Post Type: post, page, partenaire
       */
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir la [page de l''extension Custom Post Type UI sur&nbsp;WordPress.org](https://fr.wordpress.org/plugins/custom-post-type-ui/)'
fieldset: page-article
id: 65ec16d5-edb5-4540-ab7c-14d79ffc52cc
