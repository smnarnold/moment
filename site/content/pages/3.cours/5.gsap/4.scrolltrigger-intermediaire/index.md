body:
  -
    type: text
    title: Scrub
    level: h2
    body: |
      La propriété `scrub` permet de synchroniser la progression d'une animation avec le défilement de la page _(scroll)_. Ainsi, l'animation débutera lorsque le marqueur <u style="color: green">start</u> croisera <u style="color: green">scroller-start</u> et progressera proportionellement jusqu'à ce que le marqueur <u style="color: red">end</u> croise&nbsp;<u style="color: red">scroller-end</u>. 
      
      Par défaut, la valeur de cette propriété est à `false`. Pour l'activer, il faut lui donner la valeur `true`, comme dans l'exemple&nbsp;suivant:
  -
    type: codepen
    id: 27ae7ecfda89fe046e2882082a153f7e
    theme: light
    ratio: 34
    tabs: 'js,result'
  -
    type: text
    body: |
      Lorsque la roulette d'une souris&thinsp;🖱️ est utilisée pour effectuer un défilement de page _(scroll)_, l'animation est parfois saccadée. Ce comportement est normal, puisque certaines souris incrémentent le défilement en utilisant un très grand intervalle. Cependant, il est possible de remédier à ce problème en spécifiant à la propriété `scrub` une valeur en secondes&thinsp;⏲️ . Ainsi, une interpolation correspondant à la durée est générée entre chaque étape de&nbsp;l'animation.
      
      Par exemple, reprenons le précédent exemple, mais avec une interpolation d'une seconde&nbsp;`scrub: 1`:
  -
    type: codepen
    id: dc5fc6c8b6b6f7682194775eb0166bf5
    theme: light
    ratio: 34
    tabs: 'js,result'
  -
    type: note
    intent: exercice
    body: 'Exercice [droïde BB-8](https://smnarnold.com/exercice/gsap/bb-8)&thinsp;🤖'
  -
    type: note
    intent: exercice
    body: 'Exercice&thinsp;🔵 [codepen.io/smnarnold/pen/abNQMBZ](https://codepen.io/smnarnold/pen/abNQMBZ)'
  -
    type: text
    title: 'Pin 📌'
    level: h2
    body: |
      La propriété `pin` permet de fixer verticalement un élément durant son animation, de sorte qu'elle reste visible tout au long de sa&nbsp;progression.
      
      Par défaut, la valeur de cette propriété est à `false`. Pour l'activer, il faut lui donner la valeur `true`, comme dans l'exemple suivant:
  -
    type: codepen
    id: a845ec94c40005ff400aee7e0a1194c5
    theme: light
    ratio: 34
    tabs: 'js,result'
  -
    type: text
    body: |
      Afin d'effectuer un pin, ScrollTrigger ajoute un div englobant l'élément animé et lui donne temporairement une `position: fixed;` afin d'éviter que le défilement de la page&nbsp;l'affecte.
      
      Afin de visualiser ce comportement, revoici le précédent exemple, mais avec une bordure pointillée autour du div créé par&nbsp;ScrollTrigger:
  -
    type: codepen
    id: 950337597eaa86afc21149a3cfc61ae3
    theme: light
    ratio: 34
    tabs: 'js,result'
  -
    type: text
    title: PinSpacing
    level: h3
    body: |
      Par défaut, la propriété `pin` crée un espace vide afin que l'élément animé reste toujours entre l'élément qui le précède et celui qui le suit. Cependant, la propriété `pinSpacing` permet de contrôler ce comportement, si cet espace est jugé&nbsp;indésirable.
      
      Par défaut, la valeur de cette propriété est a `true`, ce qui crée l'espace mentionné. Pour le désactiver, il faut lui donner la valeur `false`, comme dans l'exemple suivant:
  -
    type: codepen
    id: cec7240c3891efa92ee7df76b245772c
    theme: light
    ratio: 34
    tabs: 'js,result'
  -
    type: note
    intent: exercice
    body: 'Exercice [Marvel](https://smnarnold.com/exercice/gsap/marvel)&thinsp;🦸‍♂️'
  -
    type: text
    title: Callbacks
    body: |
      Les `callbacks` permettent de déclencher une fonction JavaScript à différents moments clés d'une animation synchronisée avec ScrollTrigger et d'obtenir des informations relatives à cette&nbsp;dernière.
      
      Par exemple, pour déclencher un événement lorsque le marqueur <u style="color: green">start</u> croise le marqueur <u style="color: green">scroller-start</u>, il est possible d'utiliser&nbsp;`onEnter`. 
      
      Pour déclencher des événements tant et aussi longtemps que l'animation est en cours, il est possible d'utiliser `onUpdate`, comme dans l'exemple ci-dessous. Dès que l'animation est mise-à-jours _(update)_ la valeur de la propriété `direction` _(1 ou -1)_ est affichée dans le carré&nbsp;bleu&thinsp;🟦
  -
    type: codepen
    id: 782bfd9f82449fc7b9ffc70f6c5b5d50
    ratio: 34
    tabs: 'js,result'
  -
    type: text
    title: 'Callbacks disponibles'
    level: h3
    body: |
      - `onEnter` déclenché lorsque <u style="color: green">start</u> dépasse <u style="color: green">scroller-start</u> en&nbsp;montant&thinsp;⬆️
      - `onLeave`déclenché lorsque <u style="color: red">end</u> dépasse <u style="color: red">scroller-end</u> en&nbsp;montant&thinsp;⬆️
      - `onEnterBack` déclenché lorsque <u style="color: red">end</u> dépasse <u style="color: red">scroller-end</u> en&nbsp;descendant&thinsp;⬇️
      - `onLeaveBack` déclenché lorsque <u style="color: green">start</u> dépasse <u style="color: green">scroller-start</u> en&nbsp;descendant&thinsp;⬇️
      - `onUpdate` déclenché à de multiple reprises, tant que l'animation est en cours de&nbsp;progression.
      - Etc.
  -
    type: text
    title: 'Informations associées aux callbacks'
    level: h3
    body: |
      Il est possible de spécifier un paramètre à un callback ScrollTrigger. Ce paramètre contiendra un objet JavaScript constitué d'informations sur le callback en question.
      
      - `.isActive` retourne `true` si l'animation est en cours et `false` dans le cas&nbsp;contraire.
      - `.direction` retourne `1` si l'animation monte&thinsp;⬆️ et `-1` si l'animation&nbsp;descend&thinsp;⬇️.
      - `.progress` retourne un chiffre entre 0 et 1 correspondant au pourcentage de progression de&nbsp;l'animation.
      - Etc.
  -
    type: note
    intent: exercice
    body: 'Exercice [Link](https://smnarnold.com/exercice/gsap/link)&thinsp;⚔️'
  -
    type: note
    intent: exercice
    body: 'Exercice [Gotham](https://smnarnold.com/exercice/gsap/gotham)&thinsp;🦇'
  -
    type: note
    intent: good
    body: '[Collection CodePen de GreenSock](https://codepen.io/collection/DkvGzg) à propos de réalisations utilisant&nbsp;ScrollTrigger.'
is_hidden: false
title: 'ScrollTrigger Intermédiaire'
subtitle: 'scrub, pin, pinspacing'
template: page-article
color_scheme: auto
preview_color: '#77c814'
preview: /assets/previews/scrolltrigger2.png
fieldset: page-article
id: fc07883e-faa0-455d-8df7-25f0fe38db3a
