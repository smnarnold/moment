title: 'Unités CSS'
template: page-article
color_scheme: auto
body:
  -
    type: text
    level: h2
    body: |
      L'unité CSS permet de dire au navigateur l'échelle à utiliser pour une valeur de taille&nbsp;donnée.
            
      Par exemple, si je souhaite donner une marge à mes paragraphes, je pourrais utiliser le code&nbsp;suivant:
            
      `p { margin: 20px; }`
            
      Dans ce cas, j'ai:
      
      - Un sélecteur: `p`
      - Une propriété: `margin`
      - Une valeur: `20px`
            
      Cette valeur est à son tour composé de deux éléments: une taille&nbsp;`20` et une unité CSS&nbsp;`px`. Combiné, ce code permet de dire au navigateur d'appliquer une marge de 20px à tous mes paragraphes. Bien que l'unité `px` soit la plus fréquente, elle n'est pas toujours la mieux adaptée à toutes les&nbsp;situations.
      
      Voyons voir pourquoi ✨
  -
    type: text
    title: 'Les unités relatives vs absolues'
    level: h2
    body: 'Sont les deux grandes familles d''unités CSS&nbsp;existantes.'
  -
    type: image
    image: /assets/articles/relatives-vs-absolues.gif
    source: 'http://blog.froont.com/9-basic-principles-of-responsive-web-design/'
  -
    type: text
    title: Absolues
    level: h3
    body: |
      Les unités absolues gardent leurs dimensions, peu importe leur contexte, par exemple: la grandeur de leur parent ou encore celle du viewport *(de la&nbsp;fenêtre)*.
      
      Ces unités sont pratiques pour des éléments que l'on souhaite&nbsp;immuables.
  -
    type: note
    body: 'Les unités absolues peuvent causer des enjeux lorsque l''on souhaite créer des sites responsives.'
    Intention: warning
    intent: warning
  -
    type: text
    body: |
      Les pixels *(px)* sont l'unité absolue la plus répandue, ce qui fait du sens puisque la majorité des codes CSS sont écrits pour gérer l'affichage sur un écran. Néanmoins, il existe plusieurs autres valeurs&nbsp;absolues:
      
      - **cm** - Centimètres
      - **mm** - Millimètres
      - **in** - Pouces
  -
    type: text
    title: Relatives
    level: h3
    body: |
      Contrairement aux unités absolues, les unités relatives se basent sur la dimension d'un parent ou de l'écran pour déterminer leur dimension, ce qui les rend particulièrement utiles pour créer un site web&nbsp;responsive.
      
      Ces unités peuvent paraîtres plus complexes de prime abord, mais leur utilisation permet souvent d'éviter de redéfinir des valeurs en fonctions des multiples résolutions d'écrans&nbsp;supportées.
      
      - **%** -&nbsp;Relatif au parent
      - **em** - Relatif à la taille fonte&nbsp;courante
      - **rem** - Relatif à la taille à la racine du document `<html>`
      - **ch** - Relatif à la taille du caractère "0" dans la police courante
      - **ex** - Relatif à la hauteur du "x" minuscule dans la police courante
      - **vh** - Relatif à la hauteur du viewport. Ex: 1vh = 1% de la hauteur du viewport&nbsp;*(de la fenêtre)*.
      - **vw** - Relatif à la largeur du viewport. Ex: 1vw = 1% de la largeur du viewport&nbsp;*(de la fenêtre)*.
      - **vmin** - Relatif à la plus petite valeur entre vh et&nbsp;vw.
      - **vmax** - Relatif à la plus grande valeur entre vh et&nbsp;vw.
  -
    type: text
    title: 'Quand utiliser quelle unité?'
    level: h2
    body: |
      Il n'est pas toujours facile de s'y retrouver et de choisir la bonne unité. Pourtant, elles ont toutes une raison d'être et s'avèrent particulièrement utiles dans certains cas&nbsp;précis.
      
      En voici quelques-uns:
      
      **%** `.element { width: 50%; }`
      Pour qu'un élément prenne la moitié de la largeur de son&nbsp;parent.
      
      **em** `.small { font-size: 0.5em; }`
      Pour qu'un texte ayant la classe `.small` ait une taille équivalente à la moitié du texte&nbsp;courant.
      
      **rem** `.title { font-size: 2rem; }`
      Pour que nos éléments de titre affichent toujours de la même taille, soit 2x celle de notre texte de base, peu importe la taille du texte&nbsp;courant.
      
      **ch** `.serial-number { width: 10ch; }`
      Permets qu'un élément aille la largeur de 10 caractères&nbsp;précisément.
  -
    type: note
    intent: warning
    body: 'Cette unité ne fonctionne que si elle est combinée à une police *"mono-space"* (d''on tous les caractères sont de la même&nbsp;dimension)'
  -
    type: text
    body: |
      **ex** `.title { line-height: 2ex; }`
      Par exemple, si nous voulons un interlignage équivalent à 2x la hauteur de la lettre minuscule "x".
  -
    type: note
    intent: generic
    body: 'Rares sont les utilisations pratiques de cette&nbsp;unité.'
  -
    type: text
    body: |
      **vh** `.slide { height: 100vh; }`
      Pour qu'un élément ayant la classe `.slide` couvre toute la hauteur du viewport&nbsp;*(de la&nbsp;fenêtre)*.
      
      **vw** `.slide { width: 50vw; }`
      Pour qu'un élément ayant la classe `.slide` couvre une demi-largeur du viewport&nbsp;*(de la&nbsp;fenêtre)*.
      
      **vmin** `.picture { height: 100vmin; }`
      Pour qu'un élément ayant la classe `.picture` aille une hauteur équivalente à la plus **petite** dimension entre le **vh** et le **vw**.&nbsp;
      
      **vmax** `.picture { height: 100vmax; }`
      Pour qu'un élément ayant la classe `.picture` aille une hauteur équivalente à la plus **grande** dimension entre le **vh** et&nbsp;**vw**.
  -
    type: text
    title: Calc
    level: h2
    body: |
      Combiner des valeurs peut s'avérer très utile. Particulièrement dans le cas de valeurs relatives et absolues. D'où l'existence de&nbsp;`calc()`.
      
      Par exemple, comment faire si un premier élément&#8239;🟩 à une hauteur de 40px et que nous souhaitons qu'un deuxième élément&#8239;🟦 couvre l'espace restant en dessous de lui, et ce, peu importe la hauteur dudit&nbsp;espace? 
      
      Spécifier une hauteur de `100%` fera dépasser le deuxième élément&#8239;🟦. Tandis qu'avec `height: calc(100% - 40px);`, il s'ajustera à l'espace&nbsp;restant.
  -
    type: codepen
    id: oNvEzrE
    theme: light
    ratio: 34
    tabs: result
  -
    type: text
    body: 'Créant ainsi, une mise en page parfaitement&nbsp;adaptée.'
  -
    type: image
    image: /assets/articles/simpsons-carl.gif
  -
    type: text
    title: 'En résumé'
    level: h2
    body: |
      Pour choisir la bonne unité CSS vous devrez vous poser les questions suivantes:
      
      - Est-ce que cet élément devrait toujours avoir une taille fixe?
      - Si non, quel élément devrait le faire varier?&nbsp; La dimension du viewport *(de la fenêtre)* ou de son parent, la taille de la fonte courante ou celle à la base du document, etc.
  -
    type: note
    intent: good
    body: 'Big up à **Jess Mitchell** et son article sur [Alligator.io](https://alligator.io/css/css-units-explained/) qui a fortement inspiré cet&nbsp;article.'
fieldset: page-article
id: 6b88ecf4-f8ec-4fab-8004-6155c7c5903f
