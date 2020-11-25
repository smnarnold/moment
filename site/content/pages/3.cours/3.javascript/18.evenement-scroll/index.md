title: 'Événement lié au défilement de page (scroll)'
template: page-article
color_scheme: auto
body:
  -
    type: text
    body: 'Il est possible d''écouter l''événement déclenché par le défilement d''un élément ou de la page grâce à [addEventListener](./addeventlistener#fenetre).'
  -
    type: code
    lang: js
    body: 'window.addEventListener(''scroll'', function() {...});'
  -
    type: text
    body: |
      Cet événement permet ensuite de déclencher d'autres événements au moment&nbsp;opportun.
      
      Par exemple: 
      
      -[ Afficher/masquer un menu](https://video.tva.ca/) en fonction de la direction du&nbsp;scroll.
      - Une [barre de progrès](https://ordrecrha.org/ressources/technologies/2020/01/gestion-ressources-humaines-ere-intelligence-artificielle?source=94f137a78ce0426680d642ca3214dded) indiquant le pourcentage d'avancement d'un&nbsp;article.
      - Un personnage animé uniquement lorsque la page&nbsp;défile.
      - L'apparition d'un <em>"popup"</em> vers la fin d'un&nbsp;article.
      - Etc.
  -
    type: text
    title: Défilement
    level: h2
    body: |
      Il est possible d'obtenir le nombre de pixels ayant étés défilés sur un axe _(X ou Y)_ d'un élément grâce aux propriétés `scrollX` et&nbsp;`scrollY`.
      
      Par exemple, afin obtenir le nombre de pixels ayant étés défilés verticalement sur la page, il est possible&nbsp;d'utiliser:
  -
    type: code
    lang: js
    body: window.scrollY
  -
    type: text
    title: Progression
    level: h2
    body: |
      Il faut préalablement obtenir le [nombre de pixels ayant étés défilés](#defilement)
      
      Il faut ensuite comparer cette valeur à une référence. Par exemple, la largeur ou la hauteur du&nbsp;document.
  -
    type: code
    lang: js
    body: |
      document.body.clientWidth
      // ou
      document.body.clientHeight
  -
    type: text
    body: 'Diviser la première valeur _(px défilés)_ par la deuxième _(référence)_ retournera une fraction entre 0&nbsp;et&nbsp;1 correspondant au pourcentage de défilement&nbsp;effectué.'
  -
    type: note
    intent: exercice
    body: '[codepen.io/smnarnold/pen/MWaKyJe](https://codepen.io/smnarnold/pen/MWaKyJe)'
  -
    type: text
    title: Direction
    level: h2
    body: |
      Afin déterminer la direction du défilement, il faut préalablement obtenir le [nombre de pixel actuellement défilés](#défilement). 
      
      Il faut ensuite comparer cette valeur à une&nbsp;précédente&nbsp;version. 
      
      Par exemple, dans le cas d'un défilement vertical, si la valeur actuelle&nbsp;est:
      
      - Plus petite, le défilement ce fait vers le&nbsp;haut&thinsp;⏫.
      - Plus grande, le défilement ce fait vers le&nbsp;bas&thinsp;⏬.
  -
    type: note
    intent: exercice
    body: '[codepen.io/smnarnold/pen/KKpxOZv](https://codepen.io/smnarnold/pen/KKpxOZv)'
fieldset: page-article
id: 9fa373a3-c2d6-4748-8b66-70775e0c9d19
