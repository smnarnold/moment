title: 'Animation spritesheet'
template: page-article
color_scheme: auto
body:
  -
    type: text
    title: 'Fichier image'
    level: h2
    body: |
      Il est nécessaire d’avoir une spritesheet regroupant toutes les images clés _(keyframes)_ constituant l’animation. Toutes les images clés doivent avoir la même dimension et être placés à une distance équivalente.
       
      Par exemple, chaque image clé constituant l’animation de Donald Trump mesure 250px de large par 250px de haut. Puisque la spritesheet est constituée de dix images clés, elle mesure donc 2500px de large pour une hauteur de 250px.
  -
    type: image
    image: /assets/articles/spritesheet-trump-1.png
  -
    type: note
    intent: warning
    body: 'Il est important que les images clés aient toutes la même dimension et soient placés à des distances équivalentes, sinon un _"glitch"_ sera visible dans&nbsp;l’animation.'
  -
    type: note
    intent: tool
    body: 'Si chaque image clé est un fichier séparé, [responsive-css.spritegen.com](https://responsive-css.spritegen.com/) permet de les combiner en une&nbsp;spritesheet.'
  -
    type: text
    title: Animation
    level: h2
    body: |
      Il faut ensuite créer un élément HTML dont la dimension correspond à celle d’une image clé. Dans cet exemple, 250px par 250px. Et y ajouter notre spritesheet en&nbsp;background-image. 
      
      Ainsi, seul la première image-clé devrait-être&nbsp;visible.
  -
    type: codepen
    id: VwLrJWp
    theme: light
    ratio: 34
    custom_ratio: '40'
    tabs: 'css,result'
  -
    type: text
    body: |
      Il faut ensuite animer la propriété `background-position` de sorte que toutes les images-clés défilent une à la suite de&nbsp;l'autre.
      
      Dans cet exemple, nous déplaçons donc la spritesheet de sa largeur soit&nbsp;`-2500px`.
  -
    type: codepen
    id: ExjbBwV
    theme: light
    ratio: 56
    custom_ratio: '40'
    tabs: 'css,result'
  -
    type: text
    body: |
      Malheureusement, l'effet n'est pas convainquant puisqu'il y a une interpolation sur la propriété&nbsp;`background-position`. 
      
      Il est néanmoins possible d’ajuster la propriété [animation-timing-function](./animation#animation-timing-function) afin de remédier à cette situation. Plutôt que de lui donner une valeur telle que `ease` ou `linear`, il est possible de lui passer la fonction `steps()`. Cette dernière permet de spécifier le nombre d’étapes devant constituer&nbsp;l'animation. 
      
      Par exemple, nous avons dix images-clés constituant l’animation de Donald Trump. Il faudra donc spécifier&nbsp;`steps(10)`.
  -
    type: codepen
    id: xxGPopV
    theme: light
    ratio: 56
    custom_ratio: '40'
    tabs: 'css,result'
fieldset: page-article
id: 0cf0abcb-fdc2-4125-81ba-1b33fe7cbbbe
