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
    level: h2
    body: 'Les unités absolues gardent leurs dimensions, peu importe leur contexte. Ces unités sont pratiques pour des éléments que l''on souhaite&nbsp;immuables.'
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
    level: h2
    body: |
      Contrairement aux unités absolues, les unités relatives se basent sur la dimension d'un parent pour déterminer leur dimension, ce qui les rend particulièrement utiles pour créer un site web&nbsp;responsive.
      
      Ces unités peuvent paraîtres plus complexes de prime abord, mais leur utilisation permet souvent d'éviter de redéfinir des valeurs en fonctions des multiples résolutions d'écrans&nbsp;supportées.
      
      - **%** -&nbsp;Relatif au parent
      - **em** - Relatif à la taille fonte&nbsp;courante
      - **rem** - Relatif à la taille à la racine du document `<html>`
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
  -
    type: text
    title: 'En résumé'
    level: h2
    body: |
      Pour choisir la bonne unité CSS vous devrez vous poser les questions suivantes:
      
      - Est-ce que cet élément devrait toujours avoir une taille fixe?
      - Si non, quel élément devrait le faire varier? La dimension de son parent, la taille de la fonte courante ou celle à la base du document,&nbsp;etc.
  -
    type: note
    intent: generic
    body: '`0`, peu importe l''unité de mesure, reste `0`. Il n''est donc pas nécessaire de spécifier l''unité de mesure: `0px`, `0em`, `0%` =&nbsp;`0`.'
  -
    type: note
    intent: good
    body: 'Big up à **Jess Mitchell** et son article sur [Alligator.io](https://alligator.io/css/css-units-explained/) qui a fortement inspiré cet&nbsp;article.'
is_hidden: false
title: 'Unités de mesure'
subtitle: 'px, %, em, rem'
template: page-article
color_scheme: auto
preview_color: '#f6f472'
preview: /assets/previews/unite-de-mesure.png
fieldset: page-article
id: 6b88ecf4-f8ec-4fab-8004-6155c7c5903f
