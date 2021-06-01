body:
  -
    type: text
    body: |
      La propriété object-fit définit comment le contenu d'un média, par exemple une image ou une vidéo, réagit lorsqu’une largeur et une hauteur _(width/height)_ lui sont attribuées. Ainsi, il est possible de contrôler s'il est préférable que son contenu soit étiré et/ou&nbsp;rogné.
       
      Pour ce faire, il existe cinq valeurs possibles&thinsp;✋
      
      - none
      - fill _(par défaut)_
      - contain
      - cover
      - scale-down
      
      Afin de démontrer le comportement associé à chacune de ces valeurs, la même image et les mêmes dimensions seront utilisées dans les exemples&nbsp;suivants.
  -
    type: image
    image: /assets/articles/square-1582418465.png
  -
    type: text
    title: 'Fill vs None'
    level: h2
    body: |
      À gauche, l'élément avec `object-fit: fill;` étire le contenu de l'image, sans tenir compte de son ratio initial, afin de couvrir la dimension définie. Cette valeur déforme le contenu du&nbsp;média _(Comportement par&nbsp;défaut)_.
      
      À l’opposé à droite, `object-fit: none;` ne redimensionne aucunement le contenu de l'image, peu importe la dimension&nbsp;définie. L'image est donc identique à notre image&nbsp;témoin.
  -
    type: codepen
    id: 2fa1b57035b7138804828e1dc5c333e1
    theme: light
    ratio: 34
    tabs: result
  -
    type: text
    title: 'Contain vs Cover'
    level: h2
    body: |
      À gauche, `object-fit: contain;` garde le ratio du contenu de l'image intact et le redimensionne de sorte qu'il soit entièrement&nbsp;visible. 🚫&nbsp;rognage.
       
      À droite, `object-fit: cover;` garde aussi le ratio du contenu de l'image intact, mais le redimensionne de sorte que la dimension définie soit entièrement recouverte par celui-ci. Quitte à rogner certaines parties du contenu du&nbsp;média.
  -
    type: codepen
    id: 7a986c2ca3919e01eb81c17d90e6c1f4
    theme: light
    ratio: 34
    tabs: result
  -
    type: text
    body: 'Cover est utilisé régulièrement pour les héros de site _(Blocs en entête de page avec une image ou vidéo en&nbsp;arrière-plan)_.'
  -
    type: text
    title: Scale-down
    level: h2
    body: 'Redimensionne le contenu du média avec `object-fit: none;` et `object-fit: contain;` et retourne le plus petit résultat des&nbsp;deux.'
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN sur&nbsp;object-fit](https://developer.mozilla.org/fr/docs/Web/CSS/object-fit).'
  -
    type: text
    title: Object-position
    level: h2
    body: |
      Indique comment positionner sur les X et Y le contenu d'un media ayant la propriété&nbsp;`object-fit`.
      
      Par défaut, le contenu du média est centré `object-position: 50% 50%;`, comme dans les exemples&nbsp;précédents.
      
      Il est néanmoins possible d'aligner le contenu du média à gauche avec `object-position: 0% 50%;` ou à droite avec `object-position: 100% 50%;`.
  -
    type: codepen
    id: 72d77faf85276f0af8f6d60da0ca2706
    theme: light
    ratio: 34
    tabs: result
  -
    type: text
    body: |
      Dans le cadre d'un media ayant la propriété `object-fit: contain;` ceci déplace le contenu de notre image horizontalement&thinsp;↔️ dans la zone&nbsp;définie.
      
      Ou encore, d'aligner le contenu du média en haut avec `object-position: 50% 0%;` ou en bas avec `object-position: 50% 100%;`.
  -
    type: codepen
    id: d9866982503d8bceb894669bd64c87fe
    theme: light
    ratio: 34
    tabs: result
  -
    type: text
    body: 'Dans le cadre d''un media ayant la propriété `object-fit: cover;` ceci indique quelle partie devrait garder le focus et donc éviter d''être&nbsp;rognée.'
  -
    type: note
    intent: exercice
    body: 'Exercice [McDo](https://smnarnold.com/exercice/css/object-fit-mcdo)&thinsp;🍔'
  -
    type: note
    intent: mdn
    body: 'Pour en savoir, voir cet [article MDN sur&nbsp;object-position](https://developer.mozilla.org/fr/docs/Web/CSS/object-position).'
is_hidden: false
title: Object-fit
subtitle: 'contain, cover, fill'
template: page-article
color_scheme: auto
preview_color: '#000'
fieldset: page-article
id: fc56a2bc-8c5c-4880-a242-d7bcc9c5361f
