body:
  -
    type: text
    level: h2
    body: |
      Pour cette étape, nous allons déclencher une animation d'entrée sur chacune des `<section>` du&nbsp;projet.
      
      Pour ce faire, nous allons préalablement nous créer une nouvelle branche intitulée `sections - animation` qui contiendra tous les changements relatifs à cette&nbsp;étape.
      
      Aperçu du résultat final:
  -
    type: image
    image: /assets/articles/megazord-animation-section.mp4
  -
    type: text
    title: Requis
    level: h2
    body: |
      - Incorporez GSAP et ScrollTrigger sur votre site.
      - Utilisez ScrollTrigger afin de déclencher une animation lorsque chaque `<section>` de votre page entre dans la zone visible de la&nbsp;fenêtre.
      - L'animation doit être une timeline et animer minimalement deux éléments par `<section>`. _(ex: la section en soit, le titre, les éléments avec la balise img,&nbsp;etc.)_
      - L'animation doit-pouvoir être jouée dans les deux sens. Autrement dit, les `<section>` doivent apparaitre lorsque la page défile vers le bas et les `<section>` doivent disparaitre lorsque l'on défile vers le&nbsp;haut.
      - Les outils `markers` et le GSDevTools ne doivent pas être visible lors de la remise.
  -
    type: note
    intent: generic
    body: 'N''hésitez pas à être plus original que l''exemple&nbsp;fourni.'
is_hidden: false
title: 'Animations de section'
template: page-exercice
color_scheme: auto
preview_color: '#669cff'
fieldset: page-article
id: a98200a3-4c41-4c72-ad21-f06dfd8f435f
