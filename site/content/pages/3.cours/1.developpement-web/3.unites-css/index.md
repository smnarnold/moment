title: 'Unités CSS'
template: page-article
body:
  -
    type: text
    level: h2
    body: |
      L'unité CSS permet de dire au navigateur l'échelle à utiliser pour une valeur de taille donnée.
            
      Par exemple, si je souhaite donner une marge à mes paragraphes, je pourrais utiliser le code suivant:
            
      `p { margin: 20px; }`
            
      Dans ce cas, j'ai:
      
      - Un sélecteur: `p`
      - Une propriété: `margin`
      - Une valeur: `20px`
            
      Cette valeur est à son tour composer de deux éléments: Une taille&nbsp;`20` et une unité CSS&nbsp;`px`. Combiné, ce code permet de dire au navigateur d'appliquer une marge de 20px à tous mes paragraphes. Bien que l'unité `px` soit la plus fréquente, elle n'est pas toujours la mieux adaptée à toutes les situations.
      
      Voyons voir pourquoi ✨
  -
    type: text
    title: 'Les unités relatives vs absolues'
    level: h2
    body: 'Sont les deux grandes familles d''unités CSS existantes.'
  -
    type: image
    image: /assets/articles/relatives-vs-absolues.gif
    source: 'http://blog.froont.com/9-basic-principles-of-responsive-web-design/'
  -
    type: text
    title: Absolues
    level: h3
    body: |
      Les unités absolues gardent leur dimension peut importe leur contexte, par exemple: la grandeur de leur parent ou encore celle du viewport *(de la fenêtre)*.
      
      Ces unités sont pratique pour des éléments que l'on souhaite immuables.
  -
    type: note
    body: 'Les unités absolues peuvent causer des enjeux lorsque l''on souhaite créer des sites responsives.'
    Intention: warning
    intent: warning
  -
    type: text
    body: |
      Les pixels *(px)* sont l'unité absolue la plus répandue, ce qui fait du sens puisque la majorité des codes CSS sont écrit pour gérer l'affichage sur un écran. Néanmoins ils existe plusieurs autres valeurs absolut:
      
      - **cm** - Centimères
      - **mm** - Millimètres
      - **in** - Pouces
  -
    type: text
    title: Relatives
    level: h3
    body: |
      Contrairement aux unités absolues, les unités relatives se basent sur la dimension d'un parent ou de l'écran pour déterminer leur dimenssion, ce qui les rend particulièrement utiles pour créer un site web responsive.
      
      Ces unités peuvent paraîtrent plus complexe à prime abord, mais leur utilisation permet souvent d'éviter de redéfinir des valeurs en fonctions des multiples résolutions d'écrans supportés.
      
      - **%** -&nbsp;Relatif au parent
      - **em** - Relatif à la taille fonte courante
      - **rem** - Relatif à la taille à la racine du document `<html>`
      - **ch** - Relatif à la taille du caractère "0" dans la police courante
      - **ex** - Relatif à la hauteur du "x" minuscule dans la police courante
      - **vh** - Relatif à la hauteur du viewport. Ex: 1vh = 1% de la hauteur du viewport&nbsp;*(de la fenêtre)*.
      - **vw** - Relatif à la largeur du viewport. Ex: 1vw = 1% de la largeur du viewport&nbsp;*(de la fenêtre)*.
      - **vmin** - Relatif à la plus petite valeur entre vh et vw.
      - **vmax** - Relatif à la plus grande valeur entre vh et vw.
  -
    type: text
    title: 'Quand utiliser quelle unité?'
    level: h2
    body: |
      Il n'est pas toujours facile de s'y retrouver et de choisir la bonne unité. Pourtant, elles ont toutes une raison d'être et s'avèrent particulièrement utiles dans certains cas précis.&nbsp;
      
      En voici quelques un:
      
      **%** `.element { width: 50%; }`
      Pour qu'un élément prenne la moitié de la largeur de son parent.
      
      **em** `.small { font-size: 0.5em; }`
      Pour qu'un texte aillant la classe `.small` aille une taille équivalente à la moitié du texte courant.
      
      **rem** `.title { font-size: 2rem; }`
      Pour que nos éléments de titre affichent toujours de la même taille, soit 2x celle de notre texte de base, peu importe la taille du texte courant.
      
      **ch** `.serial-number { width: 10ch; }`
      Permet qu'un élément aille la largeur de 10 caratères précisement.&nbsp;
  -
    type: note
    intent: warning
    body: 'Cette unité ne fonctionne que si elle est combinée à une police *"mono-space"* (D''on tous les caractères sont de la même dimension)'
  -
    type: text
    body: |
      **ex** `.title { line-height: 2ex; }`
      Par exemple, si nous voulons un interlignage équivalent à 2x la hauteur de la lettre minuscule "x".
  -
    type: note
    intent: generic
    body: 'Rare sont les utilisations pratique de cette unité.'
  -
    type: text
    body: |
      **vh** `.slide { height: 100vh; }`
      Pour qu'un élément aillant la classe `.slide` couvre toute la hauteur du viewport&nbsp;*(de la fenêtre)*.
      
      **vw** `.slide { width: 50vw; }`
      Pour qu'un élément aillant la classe `.slide` couvre une demi largeur du viewport&nbsp;*(de la fenêtre)*.
      
      **vmin** `.picture { height: 100vmin; }`
      Pour qu'un élément aillant la classe `.picture` aille une hauteur équivalente à la plus **petite** dimension entre le **vh** et le **vw**.&nbsp;
      
      **vmax** `.picture { height: 100vmax; }`
      Pour qu'un élément aillant la classe `.picture` aille une hauteur équivalente à la plus **grande** dimension entre le **vh** et **vw**.
  -
    type: text
    title: Calc
    level: h2
    body: |
      La fonction `calc()` nous permet de calculer des valeurs.
      
      Par exemple, Si nous voudrions qu'un élément prenne toute la hauteur _(100%)_ moins celle d'un élément précédent ayant une hauteur absolue _(40px)_. Nous pourrions donner une valeur de hauteur à `height: calc(100% - 40px);` à notre deuxième élément.
      
      Sans ce calcul, notre deuxième élément dépasserait de notre zone.
  -
    type: codepen
    id: oNvEzrE
    theme: light
    ratio: 34
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
    body: 'Big up à **Jess Mitchell** et son article sur [Alligator.io](https://alligator.io/css/css-units-explained/) qui ont fortement inspirés cet article.'
fieldset: page-article
id: 6b88ecf4-f8ec-4fab-8004-6155c7c5903f
