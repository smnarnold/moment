title: 'WP Query'
template: page-article
color_scheme: auto
body:
  -
    type: text
    body: |
      Parfois, une page doit afficher des informations contenues dans d'autres posts. Par exemple, une page intitulée _Projets_ pourrait contenir un texte de présentation suivi d'onglets cliquables montrant un aperçu des projets&nbsp;réalisés.
      
      Idéalement, chaque projet aurait sa propre page avec ses propres informations et lorsqu'un projet serait ajouté ou modifié, celui se mettrait à jours automatiquement sur la page _Projets_ sans qu'il ne soit nécessaire d'effectuer d'autres&nbsp;manipulations.
  -
    type: text
    title: 'Récupérer des posts'
    level: h2
    body: |
      Pour récupérer des posts, il faut effectuer une nouvelle requête à WordPress via la fonction `WP_Query` et stocker son résultat dans une&nbsp;variable. 
      
      Par exemple, pour obtenir tous les posts de type _project_ et les stockers dans une variable `$projects`, il est possible de&nbsp;faire:
  -
    type: code
    lang: php
    body: |
      <?php
        $projects = new WP_Query('post_type=project');
      ?>
  -
    type: text
    title: 'Afficher les posts'
    level: h2
    body: 'À partir de cette variable, il est possible d''effectuer une boucle sur les projets retournés et d''accéder au contenu du projet courant comme si nous étions sur cette page directement, tant que le code est inscrit à l''intérieur de la boucle&nbsp;`while`.'
  -
    type: code
    lang: php
    body: |
      <?php
        $projects = new WP_Query('post_type=project');
        while ($projects->have_posts()) : $projects->the_post(); 
      ?>
      <!-- 👆 Début boucle while -->
        ...
      <!-- 👇 Fin boucle while -->
      <?php
        endwhile; 
        wp_reset_postdata(); 
      ?>
  -
    type: text
    body: |
      Par exemple, si le titre de la page actuelle est _Projets_ et que trois posts de type _project_ sont créés avec pour titre respectif: Apollo, Barracuda et&nbsp;Canari. 
      
      La fonction `the_title()` retournera le titre du post courant soit _Projets_ si elle est utilisée à l'extérieur de la boucle ou le titre de chacun des projets si elle est utilisée à l'intérieur de la&nbsp;boucle.
      
      Par exemple:
  -
    type: code
    lang: php
    body: |
      <h1><?php the_title(); ?></h1> <!-- 👈 Titre page -->
      
      <?php
        $projects = new WP_Query('post_type=project');
        while ($projects->have_posts()) : $projects->the_post(); 
      ?>
        <h2><?php the_title(); ?></h2> <!-- 👈 Titre projet -->
      <?php
        endwhile; 
        wp_reset_postdata(); 
      ?>
      
      <!--
      <h1>Projets</h1>
      <h2>Apollo</h2>
      <h2>Barracuda</h2>
      <h2>Canari</h2>
      -->
  -
    type: text
    title: Paramètres
    level: h2
    body: |
      Contrôler plus précisément la requêtes faite à WordPress est parfois nécessaire. Par exemple, spécifier le nombre d'éléments à afficher, le critère de trie _(nom, date)_, leur ordre _(croissant&thinsp;⬆️ décroissant&thinsp;⬆️)_,&nbsp;etc. 
      
      Heureusement, il est possible de spécifier le résultat attendu à WordPress en lui passant un tableau _(array)_ d'arguments plutôt qu'une chaine de caractères comme dans les précédents&nbsp;exemples.
      
      Par exemple, si pour obtenir les posts de type _project_, mais spécifier que trois éléments seulement doivent-être retourné, il est possible de&nbsp;faire:
  -
    type: code
    lang: php
    body: |
      <?php
        $arguments = array( // 👈 Tableau d'arguments
          'post_type' => 'project',
          'posts_per_page' => 3
        );
        $projects = new WP_Query($arguments); // 👈 Utilisation
        while ($projects->have_posts()) : $projects->the_post(); 
      ?>
        ...
      <?php
        endwhile; 
        wp_reset_postdata(); 
      ?>
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article de WordPress sur&nbsp;WP_Query](https://developer.wordpress.org/reference/classes/wp_query/).'
fieldset: page-article
id: 856f8c80-c79e-4c55-bd05-0755498bddc1
