body:
  -
    type: text
    body: 'Pensez au cinéma&thinsp;📽️. Une pellicule contient de nombreuses images&thinsp;🎞️. Chaque image représente une étape dans un&nbsp;mouvement.'
  -
    type: image
    image: /assets/articles/spritesheet-horse.png
  -
    type: text
    body: 'Pour voir un mouvement continu, ces 24 images doivent s''afficher dans  un interval régulier. Plus le nombre d''images est élevé, plus le mouvement est&nbsp;fluide.'
  -
    type: image
    image: /assets/articles/spritesheet-horse-animated.gif
  -
    type: text
    body: 'Les animations de type sprite sheet fonctionnent sur le même&nbsp;principe.'
  -
    type: text
    title: 'Fichier image'
    level: h2
    body: 'Il est nécessaire d’avoir une sprite sheet regroupant toutes les images clés _(keyframes)_ constituant l’animation. Toutes les images clés doivent avoir la même dimension et être placées à une distance&nbsp;équivalente.'
  -
    type: image
    image: /assets/articles/spritesheet-trump-1.png
  -
    type: text
    body: 'Par exemple, chaque image clé constituant l’animation de Donald Trump mesure 250px de large par 250px de haut. Puisque la sprite sheet est constituée de dix images clés, elle mesure donc 2500px de large pour une hauteur de&nbsp;250px.'
  -
    type: image
    image: /assets/articles/spritesheet-trump-2.png
  -
    type: note
    intent: warning
    body: 'Il est important que les images clés aient toutes la même dimension et soient placés à des distances équivalentes, sinon un _"glitch"_ sera visible dans&nbsp;l’animation.'
  -
    type: note
    intent: tool
    body: 'Si chaque image clé est un fichier séparé, [responsive-css.spritegen.com](https://responsive-css.spritegen.com/) permet de les combiner en une&nbsp;sprite&nbsp;sheet.'
  -
    type: text
    body: 'Les images sources ont parfois besoin d''être redimensionnées et/ou recadrées avant d''être utilisées pour générer une sprite sheet, dans ce cas l''option la plus efficace est d''utiliser une [Action Photoshop](../autres/action-photoshop).'
  -
    type: text
    title: Animation
    level: h2
    body: |
      Si nous pouvions _"flasher"_ chaque image à interval régulier, nous pourrions voir l'animation. 
      
      Il faut d'abord créer un élément HTML dont la dimension correspond à celle d’une image clé. Dans cet exemple, 250px par 250px. Et y ajouter notre sprite sheet en&nbsp;background-image. 
      
      Ainsi, seule la première image clé devrait-être&nbsp;visible.
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
      Il faut ensuite animer la propriété `background-position` de sorte que la sprite sheet se déplace vers la gauche et que toutes les images-clés défilent une à la suite de&nbsp;l'autre.
      
      Dans cet exemple, nous déplaçons donc la sprite sheet de sa largeur soit&nbsp;`-2500px`.
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
      Malheureusement, l'effet n'est pas convaincant puisqu'il y a une interpolation sur la propriété&nbsp;`background-position`. 
      
      Il est néanmoins possible d’ajuster la propriété [animation-timing-function](./animation#animation-timing-function) afin de remédier à cette situation. Plutôt que de lui donner une valeur telle que `ease` ou `linear`, il est possible de lui passer la fonction `steps()`. Cette dernière permet de spécifier le nombre d’étapes devant constituer&nbsp;l'animation. 
      
      Par exemple, nous avons dix images clés constituant l’animation de Donald Trump. Il faudra donc spécifier&nbsp;`steps(10)`.
  -
    type: codepen
    id: xxGPopV
    theme: light
    ratio: 56
    custom_ratio: '40'
    tabs: 'css,result'
  -
    type: note
    intent: good
    body: 'Shout out/Crédit à Denys Almaral et Jose Sinchicay pour l''[animation de Donald&nbsp;Trump](https://denysalmaral.com/2017/02/joining-images-to-create-sprite-sheet-update-to-px-spritesrender-script.html)!'
  -
    type: note
    intent: exercice
    body: 'Animer Knuckles [codepen.io/smnarnold/pen/MWaeRWO](https://codepen.io/smnarnold/pen/MWaeRWO?editors=110)'
  -
    type: text
    title: 'Démonstration vidéo'
    level: h2
  -
    type: vimeo
    video: 'https://vimeo.com/409249798'
    ratio: 56
    custom_ratio: '62.5'
  -
    type: note
    intent: generic
    body: 'Pour visualiser le résultat&nbsp;[codepen.io/smnarnold/pen/JjYKJMZ](https://codepen.io/smnarnold/pen/JjYKJMZ)'
  -
    type: note
    intent: good
    body: 'Si vous n''avez pas de sprite sheet, vous pouvez vous amuser à créer un personnage ici [sanderfrenken.github.io/Universal-LPC-Spritesheet-Character-Generator](https://sanderfrenken.github.io/Universal-LPC-Spritesheet-Character-Generator)'
is_hidden: false
title: 'Animation Sprite Sheet'
template: page-article
color_scheme: auto
preview_color: '#000'
preview: /assets/img/mario-bros.jpg
fieldset: page-article
id: 0cf0abcb-fdc2-4125-81ba-1b33fe7cbbbe
