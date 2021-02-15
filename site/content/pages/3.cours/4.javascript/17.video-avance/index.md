body:
  -
    type: text
    title: 'Fullscreen API'
    level: h2
    body: 'Le Fullscreen API permet de mettre un élément _(div, iframe, video, etc.)_ en plein écran, masquant ainsi momentanément tous les autres éléments de&nbsp;l''écran.'
  -
    type: text
    title: Activation
    level: h3
    body: 'Pour demander au navigateur de mettre un élément en plein écran, il suffit de lui indiquer l''élément en question et d''appeler la méthode&nbsp;`.requestFullscreen()`'
  -
    type: codepen
    id: vYXLemL
    theme: light
    ratio: 34
    tabs: result
  -
    type: note
    intent: exercice
    body: 'Netflix&thinsp;📺 [codepen.io/smnarnold/pen/wvzKNQj](https://codepen.io/smnarnold/pen/wvzKNQj?editors=0010)'
  -
    type: note
    intent: warning
    body: 'Attention, si vous tentez d''activer le mode plein-écran dans un contexte qui n''est pas lié à une action de l''utilisateur, par exemple au chargement de la page, le navigateur bloquera la&nbsp;demande.'
  -
    type: text
    title: Désactivation
    level: h3
    body: |
      Par défaut, l'utilisateur peut sortir par lui-même du mode plein-écran en appuyant sur la touche <kbd>esc</kbd> ou encore&nbsp;<kbd>f11</kbd>.
      
      Il est aussi possible de désactiver le mode plein écran en appelant la méthode `document.exitFullscreen()`.
  -
    type: text
    title: Apparence
    level: h3
    body: 'Pour modifier l''apparence d''un élément en plein écran, par exemple sa couleur d''arrière-plan, il est possible de le cibler grâce à la pseudo-classe `:fullscreen`.'
  -
    type: note
    intent: exercice
    body: 'Biggie Smalls&thinsp;🤴🏿 [codepen.io/smnarnold/pen/vYXLQyJ](https://codepen.io/smnarnold/pen/vYXLQyJ?editors=0110)'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article de MDN🦖 sur l''API&nbsp;Fullscreen](https://developer.mozilla.org/fr/docs/Web/Guide/DOM/Using_full_screen_mode)'
  -
    type: text
    title: 'Picture-in-Picture API'
    level: h2
    body: 'Le Picture-in-Picture API permet de détacher la vidéo de la page. Ainsi, l''utilisateur peut continuer à naviguer tout en continuant de regarder du coin de l''oeil une&nbsp;vidéo.'
  -
    type: text
    title: Activation
    level: h3
    body: 'Pour demander au navigateur de mettre une vidéo en mode Picture-in-Picture _(pip)_, il suffit de lui indiquer l''élément en question et d''appeler la méthode `.requestPictureInPicture()`'
  -
    type: codepen
    id: gOwMMPW
    theme: light
    ratio: 34
    tabs: result
  -
    type: text
    title: Désactivation
    level: h3
    body: |
      Par défaut, l'utilisateur peut sortir par lui-même du mode picture-in-picture en appuyant sur les options supplémentaires surimposées par-dessus la&nbsp;vidéo.
      
      Il est aussi possible de désactiver ce mode en appelant la méthode `.exitPictureInPicture()`.
  -
    type: text
    title: Événements
    level: h3
    body: |
      Il est possible d'écouter des événements en lien avec le mode&nbsp;Picture-in-Picture.
      
      - `enterpictureinpicture` déclenché lorsqu'une vidéo <u>entre</u> en mode picture-in-picture.
      - `leavepictureinpicture` déclenché lorsqu'une vidéo <u>quitte</u> en mode picture-in-picture.
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article de MDN🦖 sur picture-in-picture](https://developer.mozilla.org/en-US/docs/Web/API/Picture-in-Picture_API)'
is_hidden: false
title: 'Vidéo avancé'
template: page-article
color_scheme: auto
preview_color: '#000'
preview: /assets/previews/video.jpg
fieldset: page-article
id: dde19124-0614-416c-bc72-6a97f11eaac9
