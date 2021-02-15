body:
  -
    type: text
    body: |
      Les champs _Titre_ et _Contenu_ sont efficaces pour afficher les contenus texte de base d'une page ou d'un article, mais il arrive que certains projets requièrent plus de deux&nbsp;champs pour réaliser certaines mise en&nbsp;page.
      
      Par exemple, si l'éditeur exige de pouvoir choisir la couleur de fond de chacune de ses pages, comment lui donner cette possibilité? Un nouveau champ dédié à la couleur de la page sera&nbsp;nécessaire.
  -
    type: text
    title: 'Advanced Custom Fields'
    level: h2
    body: |
      Souvent abrégé **ACF**, [Advanced Custom Fields](https://www.advancedcustomfields.com/) est l'une des extensions les plus utiles aux développeurs&nbsp;WordPress.
      
      Elle permet d'ajouter plusieurs types de champs et d'en créer autant que&nbsp;désiré. Pour reprendre l'exemple précédent, il serait possible d'ajouter un champs de sélection de couleur _(color&nbsp;picker)_.
  -
    type: text
    title: Installation
    level: h2
    body: |
      Dans l'onglet extensions _(plugins)_ du tableau de bord, recherchez _Advanced Custom Fields_ et repérez l'extension créée par Elliot&nbsp;Condon.
      
      Installez et activez&nbsp;là.
  -
    type: image
    image: /assets/articles/acf-peview.jpg
  -
    type: text
    title: 'Création de champs'
    level: h2
    body: |
      Une fois installée, un onglet `ACF` (ou en anglais _Custom Fields_) devrait être visible dans la barre latérale servant de&nbsp;menu. 
      
      À partir de cet onglet, il est possible de créer des nouveaux `Groupes de champs` _(New Field Group)_ en cliquant sur `Ajouter` _(Add&nbsp;New)_.
  -
    type: image
    image: /assets/articles/acf-menu.jpg
  -
    type: text
    body: |
      1. Nommez votre nouveau groupe de&nbsp;champs.
      2. Le bouton <kbd>+Ajouter des champs</kbd> permet d'ajouter autant de champs que&nbsp;désiré.
      3. Pour chaque champs créé, populez les informations&nbsp;requises: titre, nom, type,&nbsp;etc.
      
      Par exemple, il serait possible de créer un groupe de champ _Apparence de la&nbsp;page_ et de lui ajouter un champs intitulé _Couleur de fond_ constitué d'un sélecteur de&nbsp;couleur.
  -
    type: image
    image: /assets/articles/acf-fields-group.jpg
  -
    type: text
    body: |
      4. La boite _Emplacement_ permet de spécifier où ce nouveau groupe de champs devrait-être&nbsp;visible.
      
      Par exemple, afficher uniquement le groupe de champs _Apparence de la page_ sur les pages de type&nbsp;article.
  -
    type: image
    image: /assets/articles/acf-emplacement.jpg
  -
    type: text
    body: |
      5. Ajuster les _Réglages_ si désiré pour configurer l'apparence du groupe de champs dans la&nbsp;page.
      6. Appuyez sur le bouton&nbsp;<kbd>Publier</kbd>.
  -
    type: text
    title: 'Récupération de valeurs'
    level: h2
    body: |
      Comme nous avons vu, créer un champ permet à l'éditeur d'ajouter de nouvelles informations sur ses pages, mais pour que ces informations soient utilent, il faut ensuite les récupérer afin de les&nbsp;afficher.
      
      Deux fonctions permettent de les récupérer:
      
      1. `the_field()`qui retourne une chaine de&nbsp;caractère.
      2. `get_field()` qui retourne un objet contenant de multiples&nbsp;valeurs.
  -
    type: text
    title: Couleur
    level: h3
    body: |
      Les valeurs provenant d'un champ de type _Sélecteur de couleur_ sont sauvegardés sous forme d'une chaine de caractères. Il est sonc possible de les récupérer via la fonction&nbsp;`the_field(...)`.
      
      Par exemple:
  -
    type: code
    lang: php
    body: |
      <body style="background: <?php the_field('couleur_de_fond'); ?>;">
        ...
      </body>
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article d''ACF sur les sélecteurs de&nbsp;couleur](https://www.advancedcustomfields.com/resources/color-picker/).'
  -
    type: text
    title: Texte
    level: h3
    body: |
      Un champ texte peut être créé pour stocker des informations supplémentaires. Ce type de champs est, entre autre, utile lorsqu'une information doit être séparée visuellement du reste du&nbsp;contenu. 
      
      Prenons par exemple la [page Wikipedia d'un groupe de musique](https://fr.wikipedia.org/wiki/The_Offspring). Si cette page était construite à l'aide de WordPress, le champ `titre` contiendrait le texte _The Offspring_ et le champs `contenu` l'ensemble du texte dans la colonne de gauche. Cependant, les éléments dans la colonne de droite proviendraient de champs ACF&nbsp;supplémentaires. 
      
      Par exemple, un champ `autre nom` associé aux pages de type _Groupe de musique_ permettrait à l'éditeur de spécifier si un groupe fut précédemment connu sous un autre&nbsp;nom.
  -
    type: code
    lang: php
    body: |
      <strong>Autre nom</strong>
      <?php the_field('autre_nom'); ?>
  -
    type: note
    intent: generic
    body: 'Manic Subsidal??? 🤷‍♂️'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article d''ACF sur les champ texte](https://www.advancedcustomfields.com/resources/text/).'
  -
    type: text
    title: 'Liste déroulante'
    level: h3
    body: |
      Il est parfois prérérable d'offrir à l'éditeur une liste de choix préétablis plutôt qu'un champ texte offrant trop de&nbsp;liberté.
      
      Par exemple, pour ce qui est du pays d'origine, quel devrait-être la valeur pour The Offpring? USA, États-Unis, États Unis d'Amérique, etc. Une liste de choix préétablis règle cette question et offre une cohérence entre les différentes&nbsp;pages.
      
      Il suffit de créer un champ de type _Sélection_ et de lui donner les choix disponibles en format: 
      `Valeur affiché sur le site : Valeur afficher dans l'admin`
      
      Par exemple:
      
      `🇨🇦 Canada : Canada`
      `🇺🇸 États-Unis : États-Unis`
      `🇫🇷 France : France`
      
      Comme pour un champ texte, la valeur peut-être ensuite récupérée via `the_field(...)`.
  -
    type: code
    lang: php
    body: |
      <strong>Pays d'origine</strong>
      <?php the_field('pays_dorigine'); ?>
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article d''ACF sur les champs de sélection](https://www.advancedcustomfields.com/resources/select/).'
  -
    type: text
    title: Image
    level: h3
    body: |
      Un champ image permet de stocker des images&nbsp;supplémentaires. 
      
      Pour continuer avec la précédente métaphore, le champ d'image par défaut de WordPress, _Image mise de l'avant_, ou en anglais _Preview_, servirait à afficher l'image du&nbsp;groupe dans le haut de la colonne de&nbsp;droite.
  -
    type: image
    image: /assets/articles/the_offspring.jpg
  -
    type: text
    body: 'Cependant, un champ d''image supplémentaire serait requis afin d''afficher le logo du groupe un peu plus&nbsp;bas.'
  -
    type: image
    image: /assets/articles/the-offspring-logo.jpeg
  -
    type: text
    body: |
      Un champs ACF _Logo_ serait donc créé. Il y aurait ensuite deux façons d'afficher son&nbsp;contenu. 
      
      La façon simple avec _the_field(...)_ retournant un&nbsp;url. 
      
      Par&nbsp;exemple:
  -
    type: code
    lang: php
    body: '<img src="<?php the_field(''logo''); ?>" class="logo">'
  -
    type: text
    body: |
      ou la version plus avancée avec _get_field(...)_ permettant d'obtenir toutes les informations relatives à&nbsp;l'image:
      
      - url
      - size
      - title
      - alt
      - caption
      - etc.
      
      Ces informations sont enregistrées sour forme d'objet. Il est donc préférable de stocker cet objet dans une variable afin d'accèder à ses&nbsp;sous-propriétés au&nbsp;besoin. 
      
      Par exemple, stockons cet objet dans la variable&nbsp;`$logo` et recréons l'exemple précédent, mais avec l'attribut alt de&nbsp;populé.
  -
    type: code
    lang: php
    body: |
      <?php 
        $logo = get_field('logo');
        $url = $logo['url'];
        $alt = $logo['alt'];
      ?>
      <img src="<?php echo $url; ?>" class="logo" alt="<?php echo $alt; ?>">
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article d''ACF sur les champs de type image](https://www.advancedcustomfields.com/resources/image/).'
title: 'Advanced Custom Fields'
subtitle: ACF
template: page-article
color_scheme: auto
preview_color: '#000'
preview: /assets/previews/acf.jpg
fieldset: page-article
id: fbca55c4-350a-4312-b382-d9d76ae044be
