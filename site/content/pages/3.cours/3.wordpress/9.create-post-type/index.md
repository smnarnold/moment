title: 'Posts personnalisés'
template: page-article
color_scheme: auto
body:
  -
    type: text
    body: |
      Par défaut, Wordpress offre différentes&nbsp;collections: 
      
      - Articles
      - Médias
      - Pages
      - Commentaires. 
      
      Ces collections sont pratiques, mais il est parfois souhaitable d'en créer des&nbsp;nouvelles.
  -
    type: text
    title: Déclaration
    level: h2
    body: |
      Pour déclarer un nouveau type de posts, il faut le faire via le fichier `functions.php`.
      
      Par exemple, si nous voulions
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
    title: Utilisation
    level: h2
    body: |
      Pour afficher cette collection, il faudra faire une requête à Wordpress et stocker son résultat dans une variable. Par&nbsp;exemple:
      
      `$superheros = new WP_Query('post_type=Superheros');`
      
      Ensuite, il faudra boucler parmi les résultats&nbsp;obtenu:
      
      `while ($superheros->have_posts()) : $superheros->the_post();`
      
      Les fonctions de base, tel que: `the_title()` ou `the_content()` retournerons dans le contexte de cette boucle les informations associés à à notre collection de&nbsp;superhéros.
  -
    type: note
    intent: good
    body: |
      Pour plus d'informations
      [developer.wordpress.org/reference/functions/register_post_type](https://developer.wordpress.org/reference/functions/register_post_type/)
fieldset: page-article
id: 65ec16d5-edb5-4540-ab7c-14d79ffc52cc
