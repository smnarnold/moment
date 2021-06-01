body:
  -
    type: text
    body: |
      Pour cette étape, nous allons incorporer notre quiz dans un modal Bootstrap de notre site et y ajouter nos animations de réponses faite à partir de&nbsp;GSAP.
      
      Aperçu du résultat final:
  -
    type: image
    image: /assets/articles/megazord-quiz-partie2.mp4
  -
    type: note
    intent: generic
    body: 'L''animation de fin de quiz ne s''applique qu''à l''équipe de&nbsp;trois.'
  -
    type: text
    title: Requis
    level: h2
    body: |
      1. Créez une nouvelle branche intitulée `quiz-statique` qui contiendra tous les changements relatifs à cette&nbsp;étape.
      2. Ajoutez dans votre barre de navigation de toutes vos pages un lien intitulé&nbsp;_"Quiz"_.
      3. Lorsque le lien _"Quiz"_ est cliqué, ouvrez un [modal Bootstrap](https://smnarnold.com/cours/bootstrap/modal). Vous devrez personnaliser sa barre de titre afin que celle-ci s'harmonise avec votre&nbsp;site.
      4. Récupérez vos [animations GSAP de quiz](https://smnarnold.com/exercice/megazord/animations-de-quiz) et incorporez-le dans votre modal. Faites en sorte en CSS qu'elles s'affichent en plein centre de votre modal _(lorsqu'elles sont&nbsp;visibles)_. 
      5. Récupérez-le [code de votre quiz sur CodePen](https://smnarnold.com/exercice/megazord/quiz-partie-1) et incorporer le dans votre site. Cependant, plutôt que de générer le quiz dans la balise `<body>`, générez-le à l'intérieur du body de votre&nbsp;modal.
      6. Créez-vous deux méthodes supplémentaires dans votre classe de quiz: `goodAnswer` et&nbsp;`wrongAnswer`.
      7. Lorsqu'un usager sélectionne la bonne réponse, plutôt que d'incrémenter directement le pointage et d'afficher un message dans la console, appelez la méthode `goodAnswer`. Incrémentez dans celle-ci le pointage et incorporez votre code GSAP déclenchant votre animation de bonne&nbsp;réponse.
      8. Plutôt que d'afficher un message dans la console lorsqu'un usager sélectionne la mauvaise réponse, appelez la méthode `wrongAnswer` et incorporez votre code GSAP déclenchant votre animation de mauvaise réponse dans&nbsp;celle-ci.
      9. S'il ne reste plus de question à afficher, ajoutez un texte indiquant "Pointage:" et en dessous de celui-ci le pointage cumulé par l'usager séparé par une barre oblique et le nombre de questions total. Par exemple: _"6/8"_. Ce texte doit-être en gras et avoir une taille de&nbsp;40px.
      
      **Équipe de trois seulement**
      
      10. Lors du dernier point, s'il ne reste plus de questions à afficher, déclencher votre animation de fin de&nbsp;quiz.
is_hidden: false
title: 'Quiz - Partie 2'
template: page-exercice
color_scheme: auto
preview_color: '#f5b56c'
preview_abbr: Q2
fieldset: page-article
id: 84f280a5-5340-47fc-9a54-614e60427f1d
