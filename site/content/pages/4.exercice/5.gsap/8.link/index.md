body:
  -
    type: text
    body: |
      Pour cet exercice, nous allons synchroniser des animations CSS de type sprite sheet de Link, le protagoniste de la franchise Zelda, avec GSAP&nbsp;ScrollTrigger.
      
      Un [Pen de départ](https://codepen.io/smnarnold/pen/RwKRMmR?editors=1100), incluant GSAP et ScrollTrigger, vous est fourni. Vous n'avez qu'à focuser sur les animations CSS et sur leur déclenchement via GSAP. La majorité des éléments HTML et CSS ont déjà étés mis en place pour&nbsp;vous.
      
      Aperçu du résultat:
  -
    type: image
    image: /assets/articles/link-scrolltrigger.mp4
  -
    type: text
    title: Requis
    level: h2
    body: '- Créez-vous une animation GSAP sur l''élément correspondant au niveau _(level)_. Cette animation devra être synchronisée avec le défilement de la page. Aussi étrange que cela puisse paraitre, aucune propriété de l''animation ne devra être animée. Cette animation ne servira que de référence afin de synchroniser certains&nbsp;événements.'
  -
    type: text
    title: 'Lorsque l''animation en en cours de progression'
    level: h3
    body: |
      - Ajoutez la classe `.is-scrolling` au body de la&nbsp;page.
      - Après 250ms sans progression, retirez la classe `.is-scrolling` du body de la&nbsp;page.
  -
    type: note
    intent: warning
    body: 'Tant que l''animation continue de progresser, la classe `.is-scrolling` ne doit pas être retirée. Uniquement après 250ms sans&nbsp;progression.'
  -
    type: text
    body: |
      - Si la direction de l'animation monte&thinsp;⬆️, ajoutez la classe `.direction-up` et retirez la classe `.direction-down` du&nbsp;body. 
      - Si la direction de l'animation descend&thinsp;⬇️, ajoutez la classe `.direction-down` et retirez la classe `.direction-up` du&nbsp;body.
  -
    type: text
    title: CSS
    level: h3
    body: |
      - Lorsque la page défile et que sa direction est vers le haut _(remonte)_, ajoutez l'animation CSS `walk-back` à Link afin de donner l'impression qu'il marche dos à&nbsp;nous.
      
      <p>À titre de référence, voici la sprite sheet utilisée pour les animations de&nbsp;Link.</p>
      <img src="https://ex.smnarnold.com/gsap/link/spritesheet.webp" width="1200" height="520" style="width: 100%; height: auto;">
is_hidden: false
title: Link
template: page-exercice
color_scheme: auto
preview_color: '#000'
fieldset: page-article
id: 6e1a4a46-103a-40f8-a369-0af2206118ac
