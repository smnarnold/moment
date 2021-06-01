body:
  -
    type: text
    level: h2
    body: |
      Plusieurs raisons peuvent empêcher une personne de naviguer à l'aide d'une&nbsp;souris:
      
      **Temporaire**
      
      - Une tendinite.
      - Un bras dans le plâtre suite à un&nbsp;accident.
      - Etc.
      
      **Permanent**
      
      - Une difficulté à faire des mouvements fins en raison d'une maladie _(Parkinson, sclérose en plaque, AVC, etc.)_
      - Impossibilité d'utiliser son bras _(problème de développement, amputation, etc.)_.
      - Un problème de vision créant une difficulté à distinguer le curseur sur&nbsp;l'écran.
      - Etc.
      
      Heureusement, le navigateur offre une alternative native aux personnes aux prises avec ces difficultés via la navigation par&nbsp;clavier.
      
      Plutôt que de déplacer son curseur et de cliquer sur un bouton avec sa souris, un utilisateur peut déplacer le focus de son navigateur d'un élément à l'autre _(effet de surbrillance autour d'un élément)_ et déclencher son action via le clavier avec les touches&nbsp;suivantes:
      
      - <kbd>Tab</kbd> pour focuser sur le prochain élément&nbsp;interactif.
      - <kbd>Shift</kbd> + <kbd>Tab</kbd> pour revenir à l'élément&nbsp;précédent.
      - <kbd>⏎</kbd> ou <kbd>Espace</kbd> pour interagir avec l'élément&nbsp;focusé.
      
      Par défaut, les éléments reçoivent le focus en fonction de leur ordre dans le&nbsp;code.
      
      Par exemple, remarquez sur Chrome l'effet de surbrillance bleu&thinsp;🔵 entourant le bouton ayant le focus et comment cet effet se déplace lorsque la navigation clavier est utilisée. On remarque aussi que le _bouton 3_ devient légèrement plus pâle lorsqu'il a le focus et que la touche <kbd>Espace</kbd> est utilisée afin de le&nbsp;déclencher.
  -
    type: image
    image: /assets/articles/accessibility-keyboard-focus.mp4
  -
    type: note
    intent: warning
    body: 'L''effet de surbrillance peut varier d''un navigateur à&nbsp;l''autre.'
  -
    type: text
    body: |
      À priori, seules les balises prévues pour l'interaction peuvent recevoir le focus du navigateur. Par exemple, les balises: `<button>`, `<a>`, `<input>`, `<details>`, etc. D'où l'importance d'utiliser les bonnes balises, aux bons&nbsp;endroits. 
      
      Par exemple, dans le cas où un alert est déclenché en JavaScript lorsqu'un élément est cliqué. Si cet élément est un `<span>`, qui est une balise prévue à des fins de mise en page et non d'interaction, cette interactivité ne sera pas accessible aux individus navigants avec leur clavier, puisque cette balise ne recevra jamais le focus du navigateur.
      
       👌
  -
    type: code
    lang: html
    body: '<button>Afficher un alert</button>'
  -
    type: text
    body: 🚫
  -
    type: code
    lang: html
    body: '<span>Afficher un alert</span>'
  -
    type: note
    intent: generic
    body: 'L''apparence d''une balise peut être modifiée en CSS. Ainsi, le choix d''une balise ne devrait pas être effectué en fonction de son apparence de base, mais en fonction de sa valeur&nbsp;sémantique.'
  -
    type: text
    title: Tabindex
    level: h2
    body: |
      Il est parfois impossible d'utiliser la balise appropriée pour diverses raisons. Heureusement, il est quand même possible d'indiquer au navigateur qu'un élément devrait être en mesure de recevoir le focus, autrement dit d'être _"tabé"_, en lui donnant l'attribut&nbsp;`tabindex`.
      
      Par exemple:
  -
    type: code
    lang: html
    body: '<span tabindex="0">Afficher un alert</span>'
  -
    type: text
    body: 'Ainsi, la balise `<span>`est à même de recevoir le focus, comme dans l''exemple ci-dessous:'
  -
    type: image
    image: /assets/articles/accessibilite-tabindex.mp4
  -
    type: text
    body: |
      **Pourquoi 0&thinsp;?**
      
      0 correspond à la priorité de focus par défaut de tous les éléments interactif. Puisqu'ils sont tous à 0, le navigateur les considères égaux et donc leur attribut le focus l'un après l'autre selon leur ordre d'apparition dans le code.
      
      Attribuer `tabindex="0"` à un élément lui permet de recevoir le focus, mais le place au même niveau d'importance que les autres éléments interactif. Bref, l'élément recevra le focus en fonction de son ordre d'apparition dans le code, comme tout autre élément et son ordre de sélection sera intuitif/prévisible pour&nbsp;l'utilisateur.
      
      Le concept initial de `tabindex` était de modifier la priorité de focus des éléments afin de contrôler leur ordre de sélection. Ainsi, un élément pouvait apparaitre au milieu du code et quand même recevoir le focus en premier s'il était doté d'un attribut `tabindex` avec une valeur supérieure à 0. Cependant, cette approche est maintenant fortement déconseillée, puisqu'elle génère beaucoup de confusion. Le navigateur saute directement à l'élément avec le tabindex le plus élevé, ignorant souvent plusieurs éléments interactifs au passage, et ensuite continue son ordre de sélection normal. Ainsi, plusieurs éléments peuvent sembler inaccessibles à&nbsp;l'utilisateur.
      
      Par exemple:
  -
    type: image
    image: /assets/articles/accessibilite-tabindex-ordre.mp4
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos de tabindex](https://developer.mozilla.org/fr/docs/Web/HTML/Global_attributes/tabindex).'
  -
    type: text
    title: Focus
    body: |
      Par défaut, la majorité des navigateurs vont utiliser la [propriété CSS outline](../css/outline) afin de créer l'effet de surbrillance de l'élément ayant le focus. Si pour des raisons esthétiques le outline cause un problème il est conseillé de simplement le modifier en CSS plutôt que de le retirer&nbsp;complètement.
      
      Par exemple:
  -
    type: image
    image: /assets/articles/accessibilite-tab-outline.mp4
  -
    type: quote
    body: 'Enlever le outline indiquant le focus est l''équivalent d''enlever une rampe d''accès pour personne à mobilité réduite dans une école, parce que ça ne "fit pas" avec le design.'
    firstname: David
    lastname: Gilbertson
    title: Auteur
    picture: /assets/persons/david-gilbertson.jpeg
    source: 'https://medium.com/hackernoon/removing-that-ugly-focus-ring-and-keeping-it-too-6c8727fefcd2'
is_hidden: false
title: 'Navigation clavier'
template: page-article
color_scheme: auto
preview_color: '#8872f6'
preview: /assets/previews/navigation-clavier.png
fieldset: page-article
id: 6a24588c-6e4a-44e6-8c35-51d4d4c3a618
