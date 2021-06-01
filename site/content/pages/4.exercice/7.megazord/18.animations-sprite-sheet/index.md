body:
  -
    type: text
    body: |
      Pour cette étape, nous allons incorporer les animations sprite sheet que vous avez réalisé dans le cours de&nbsp;3D.
      
      Aperçu du résultat final:
      
      <video src="https://i.imgur.com/7SKsA6y.mp4" autoplay muted loop style="width: 100%;"></video>
  -
    type: text
    title: Requis
    level: h2
    body: |
      1. Créez une nouvelle branche intitulée `sprite-sheet` qui contiendra tous les changements relatifs à cette&nbsp;étape.
      2. Utilisez le site [tinypng.com](https://tinypng.com/) afin d'optimiser votre ou vos images de sprite&nbsp;sheet.
  -
    type: note
    intent: warning
    body: 'Une image de grande dimension contenant de la transparence peut réduire considérablement la performance de votre site. Pensez à&nbsp;l''optimiser.'
  -
    type: text
    body: |
      3. Créez un Pen par sprite sheet et animez en CSS chaque état _(descendant, montant, au repos, etc.)_.
      4. L'[animation sprite sheet](https://smnarnold.com/cours/css/animation-spritesheet) devra être contenu dans un div prenant toute la largeur de la page. Configurez la propriété background-position en pourcentage de sorte que l'animation puisse être responsive, peu importe sa&nbsp;dimension.
      5. Ajoutez dans le fichier `readme.md` de votre projet un bloc intitulé _"Animations Sprite sheet"_, suivi de votre nom et des liens vers vos&nbsp;Pens. 
      
      Par&nbsp;exemple:
  -
    type: image
    image: /assets/articles/megazord-spritesheet-readme.png
  -
    type: note
    intent: generic
    body: 'Mon compte GitHub utilise un thème foncé. Le vôtre sera peut-être similaire, mais sous un fond blanc. Ce n''est aucunement un&nbsp;problème.'
  -
    type: text
    body: |
      6. Remplacez l'image d'animation temporaire dans votre site par un bloc HTML contenant votre animation sprite&nbsp;sheet.
      7. Faites en sorte que la position sur les Y de votre bloc HTML contenant votre animation se fige à partir de 50% en lui attribuant la bonne&nbsp;[position](https://smnarnold.com/cours/css/position#sticky).
      8. Utilisez GSAP afin de déterminer si la page défile et sa direction pour afficher la bonne animation CSS dans votre bloc&nbsp;d'animation.
  -
    type: note
    intent: generic
    body: 'N''hésitez pas à ajouter différents éléments se déclenchant en fonction du défilement de la page par-dessus votre site afin de bonifier l''expérience&nbsp;usager.'
is_hidden: false
title: 'Animations sprite sheet'
template: page-exercice
color_scheme: auto
preview_color: '#fb8aff'
preview_abbr: S
fieldset: page-article
id: 721270ff-7ed2-4cd3-aa4a-57f9560cf1a8
