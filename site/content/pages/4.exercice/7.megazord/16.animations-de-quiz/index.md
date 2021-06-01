body:
  -
    type: text
    body: 'Pour cette étape du projet, nous allons créer les animations qui serviront de rétroactions au quiz que nous créerons un peu plus tard. Puisque ce quiz n''est pas encore disponible, nous allons créer les animations sur [CodePen](https://codepen.io/) pour&nbsp;l''instant.'
  -
    type: text
    title: 'Animation par développeur'
    level: h2
    body: |
      - 🔴 Animation de bonne&nbsp;réponse
      - 🔵 Animation de mauvaise&nbsp;réponse
      - 🟢 Animation de fin de&nbsp;quiz
      
      Aperçu du résultat&nbsp;final:
  -
    type: image
    image: /assets/articles/megazord-quiz-animation.mp4
  -
    type: note
    intent: generic
    body: 'Dans l''optique d''offrir un aperçu du résultat final à tous les élèves peu importe leur rôle, j''ai regroupé mes trois animations dans un même Pen. Cependant, gardez en tête que vous êtes censé n''en avoir qu''une dans votre&nbsp;cas et elle n''est aucunement obligée de ressembler à une de&nbsp;celles-ci.'
  -
    type: note
    intent: warning
    body: 'Attention d''assurer une certaine cohérence visuelle entre vos&nbsp;animations.'
  -
    type: text
    title: Requis
    level: h2
    body: 'Ajoutez un bouton intitulé _"Go"_. Appuyer sur ce bouton doit déclencher votre&nbsp;animation.'
  -
    type: note
    intent: warning
    body: 'Ce bouton doit permettre de jouer l''animation autant de fois que&nbsp;désiré.'
  -
    type: text
    body: |
      - Trois éléments doivent être animés minimalement _(ex:&nbsp;.circle)_.
      - Trois propriétés différentes doivent être animées minimalement _(ex:&nbsp;font-size)_.
      - Au moins une [duration](https://smnarnold.com/cours/gsap/introduction#duration), autre que celle par défaut, doit être&nbsp;spécifiée.
      - Au moins un [delay](https://smnarnold.com/cours/gsap/introduction#delay) doit être&nbsp;spécifié.
      - Au moins un [ease](https://smnarnold.com/cours/gsap/introduction#ease), autre que celui par défaut, doit être&nbsp;spécifié
      - Votre animation doit être invisible par défaut et apparaitre en moins de&nbsp;1.5s.
      - Votre animation doit disparaitre au bout de maximum 3s.
      - Lorsque votre animation est terminée _(disparue)_, écrivez le message _"Fini"_ dans la console de votre&nbsp;navigateur.
  -
    type: text
    title: Remise
    level: h2
    body: 'M''envoyez un message privé sur Teams contenant l''url de votre&nbsp;Pen.'
is_hidden: false
title: 'Animations de quiz'
template: page-exercice
color_scheme: auto
preview_color: '#78db7d'
preview_abbr: ✅
fieldset: page-article
id: 1dbf0a9f-8c42-47a4-b397-b787a2d838c5
