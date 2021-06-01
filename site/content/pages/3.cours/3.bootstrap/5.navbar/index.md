body:
  -
    type: text
    body: |
      La navbar de Bootstrap permet de simplifier la navigation d'un site en offrant plusieurs options de&nbsp;configurations.
      
      Pour définir une navbar, il faut ajouter la classe Bootstrap `.navbar` à une balise HTML. Idéalement une balise `<nav>`, afin de maximiser l'aspect sémantique de cette&nbsp;composante.
      
      Par exemple:
  -
    type: code
    lang: html
    body: '<nav class="navbar">...</nav>'
  -
    type: note
    intent: warning
    body: 'Pour fonctionner, cette composante a besoin du fichier JS de&nbsp;Bootstrap.'
  -
    type: text
    title: 'Thème de couleur'
    level: h2
    body: |
      L'une de ces configurations consiste à sélectionner le thème de couleur de la navbar en fonction de la couleur de fond attribuée en CSS _(si une couleur a été&nbsp;attribuée)_.
      
      Si par exemple la couleur de fond est pâle, la classe `.navbar-light` doit être utilisée. À l'opposée, `.navbar-dark` sera la meilleure option si cette couleur est&nbsp;foncée.
      
      Cette classe change la couleur des éléments de la navbar afin de maximiser leur contraste avec la couleur de&nbsp;fond. Si aucune couleur n'a été attribuée, la meilleure option est `.navbar-light` afin de contraster avec le fond de page blanc par&nbsp;défaut.
      
      Par exemple:
  -
    type: code
    lang: html
    body: '<nav class="navbar navbar-light">...</nav>'
  -
    type: note
    intent: warning
    body: 'Si la couleur de fond de la navbar est blanche et que la classe `.navbar-dark` est utilisée, le contenu de la navbar sera invisible, puisqu''il sera blanc sur fond&nbsp;blanc.'
  -
    type: note
    intent: good
    body: 'Pour en savoir, voir ce billet sur les [thèmes de couleur des navbar Bootstrap](https://getbootstrap.com/docs/5.0/components/navbar/#color-schemes).'
  -
    type: text
    title: 'Changement d''affichage'
    level: h2
    body: |
      Une autre des configurations importantes consiste à spécifier à quel breakpoint la navbar doit passer de son affichage compact, en menu hamburger&nbsp;☰, à l'affichage étendu, en barre de navigation&nbsp;complète.
      
      Ce changement d'affichage est spécifier grâce à une classe ayant le format suivant `.navbar-expand-[breakpoint]`. Bref, l'affichage étendu deviendra actif lorsque ce breakpoint sera&nbsp;atteint.
      
      Par exemple, pour afficher une barre de navigation complète à partir de&nbsp;`lg`:
  -
    type: code
    lang: html
    body: '<nav class="navbar navbar-light navbar-expand-lg">...</nav>'
  -
    type: text
    body: 'Afin de gérer adéquatement la position des éléments dans la navbar, il faut ajouter un [conteneur Bootstrap](grille#conteneurs) dans celle-ci, soit `container` ou `container-fluid`, selon la largeur&nbsp;désirée.'
    title: Conteneur
    level: h2
  -
    type: code
    lang: html
    body: |
      <nav class="navbar navbar-light navbar-expand-lg">
        <div class="container">...</div>
      </nav>
  -
    type: text
    title: 'Hamburger 🍔'
    level: h2
    body: 'Pour que la navbar puisse masquer les éléments de navigation lorsque le menu hamburger&thinsp;☰ est affiché, il faut regrouper ces éléments dans une balise avec les classes `.collapse.navbar-collapse` comme&nbsp;suit:'
  -
    type: code
    lang: html
    body: |
      <nav class="navbar navbar-light navbar-expand-lg">
        <div class="container-fluid">
          <div id="mainNav" class="collapse navbar-collapse">
            ...
          </div>
        </div>
      </nav>
  -
    type: note
    intent: warning
    body: 'Remarquez l''identifiant unique `#mainNav` sur la balise. Il permettra de contrôler l''affichage de cet&nbsp;élément.'
  -
    type: text
    level: h2
    body: |
      Évidemment pour être en mesure d'ouvrir/masquer la navigation, un bouton est nécessaire, le fameux _hamburger button_&thinsp;☰. 
      
      Bootstrap nomme cet élément le: _"Toggler"_. Il faut donc insérer un _toggler_ dans la navbar et lui spécifier, via ses attributs, la navigation qu'il doit&nbsp;ouvrir/masquer.
      
      Dans l'exemple ci-dessous, les attributs `data-bs-target` et `aria-controls` indiquent à Bootstrap que ce bouton contrôle l'élément avec le id&nbsp;`mainNav`.
  -
    type: code
    lang: html
    body: |
      <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Affichage/masquage de la navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
  -
    type: note
    intent: generic
    body: 'Le span `.navbar-toggler-icon` ne sert qu''à afficher l''icône ☰. Si vous le désirez, vous pouvez le remplacer par autre&nbsp;chose.'
  -
    type: text
    title: Navigation
    level: h2
    body: |
      Il faut maintenant ajouter la liste de liens constituant la navigation en&nbsp;soi. 
      
      Pour ce faire, il faut&nbsp;créer:
      
      1. Une liste `<ul>` avec la classe `.navbar-nav` dans la balise `.collapse.navbar-collapse`.
      2. Des items de liste `<li>` avec la classe `.nav-item`.
      3. Des liens `<a>` dans chaque item avec la classe `.nav-link`.
      
      Par exemple:
  -
    type: code
    lang: html
    body: |
      <nav class="navbar navbar-light navbar-expand-lg">
        <div class="container">
          <!-- Hamburger button -->
          <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Affichage/masquage de la navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          
          <!-- Navigation -->
          <div id="mainNav" class="collapse navbar-collapse">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a href="page-1.html" class="nav-link">Page 1</a>
              </li>
              <li class="nav-item">
                <a href="page-2.html" class="nav-link">Page 2</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  -
    type: text
    body: |
      Afin de différencier la page courante des autres, il est possible d'ajouter la classe `.active` au lien correspondant à cette page.
      
      Par exemple:
  -
    type: code
    lang: html
    body: '<a href="page-1.html" class="nav-link active">Page 1</a>'
  -
    type: note
    intent: good
    body: 'Pour en savoir, voir ce [billet à propos de la navigation&nbsp;Bootstrap](https://getbootstrap.com/docs/5.0/components/navbar/#nav).'
  -
    type: text
    title: 'Menu déroulant'
    level: h2
    body: |
      Pour obtenir un menu déroulant, communément appelé _"dropdown"_, il faut bonifier un `li.nav-item` avec la classe `.dropdown`, ainsi que le `a.nav-link` à l'intérieur de celui-ci avec la classe `.dropdown-toggle` et l'attribut `data-bs-toggle="dropdown"`.
      
      Le lien maintenant converti, il faut ajouter les éléments du menu déroulant grâce à une liste `ul.dropdown-menu` contenant les différents liens souhaités `dropdown-item`.
      
      Par exemple:
  -
    type: code
    lang: html
    body: |
      <li class="nav-item dropdown">
        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Page 1</a>
      
        <ul class="dropdown-menu">
          <li>
            <a href="page-1.html" class="dropdown-item">Sous-menu 1</a>
          </li>
          <li>
            <a href="page-2.html" class="dropdown-item">Sous-menu 2</a>
          </li>
        </ul>
      </li>
  -
    type: text
    title: Logo
    level: h2
    body: |
      Les navbars offrent la possibilité d'ajouter un logo sous forme de texte ou d'image dans la barre de navigation. Cette option est appelée `Brand`. Pour ce faire, il suffit d'ajouter la classe `.navbar-brand` sur une balise HTML à l'extérieur du `.collapse.navbar-collapse`.
      
      Par exemple:
  -
    type: code
    lang: html
    body: '<a class="navbar-brand" href="index.html">Nom de mon site</a>'
  -
    type: note
    intent: good
    body: 'Pour en savoir, voir ce [billet à propos des Brands&nbsp;Bootstrap](https://getbootstrap.com/docs/5.0/components/navbar/#brand).'
  -
    type: text
    title: Positionnement
    level: h2
    body: |
      Bootstrap offre des utilitaires de positionnement qui ne sont pas limités qu'à la composante de navbar, mais qui peuvent s'avérer très utiles avec celle-ci. Pour les utiliser, il suffit d'ajouter la classe désirée à la&nbsp;navbar.
      
      - `fixed-top` fige la navbar au sommet de la&nbsp;page.
      - `fixed-bottom` fige la navbar au bas de la&nbsp;page.
      - `sticky-top` laisse la navbar défiler avec la page jusqu'à ce que celle-ci atteigne le sommet de la&nbsp;page.
      
      Par exemple pour une navbar figée au haut de la&nbsp;page.
  -
    type: code
    lang: html
    body: '<nav class="navbar navbar-light fixed-top">...</nav>'
  -
    type: note
    intent: good
    body: 'Pourt en savoir plus, voir ce [billet sur le positionnement de la navbar&nbsp;Bootstrap](https://getbootstrap.com/docs/5.0/components/navbar/#placement).'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus sur les multitudes d''autres options offertes, voir ce [billet Bootstrap sur les navbars](https://getbootstrap.com/docs/5.0/components/navbar/).'
is_hidden: false
title: Navbar
template: page-article
color_scheme: auto
preview_color: '#7356ae'
fieldset: page-article
id: cee20295-a229-4e65-822d-19f00007de75
