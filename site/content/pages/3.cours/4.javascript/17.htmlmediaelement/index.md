body:
  -
    type: text
    body: 'Pour personnaliser un lecteur audio/vidéo, il faut recréer soi-même les boutons en HTML/CSS et les rendre fonctionnels en&nbsp;JavaScript.'
  -
    type: note
    intent: warning
    body: 'N''oubliez pas de retirer l’attribut `controls` de votre lecteur audio ou vidéo si vous ne désirez pas avoir vos boutons en&nbsp;double.'
  -
    type: text
    body: |
      Afin de contrôler un lecteur, il faut premièrement stocker une référence lui correspondant dans une&nbsp;variable. 
      
      Par exemple, si nous avons une&nbsp;vidéo:
  -
    type: code
    lang: html
    body: '<video src=”video.mp4” class=”video”>'
  -
    type: text
    body: 'Il serait possible de faire'
  -
    type: code
    lang: js
    body: 'const video = document.querySelector(''.video'');'
  -
    type: note
    intent: warning
    body: 'Attention de ne pas confondre la balise et le nom de&nbsp;classe.'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article MDN🦖 sur les&nbsp;HTMLMediaElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLMediaElement)'
  -
    type: text
    title: 'Play/Pause ⏯️'
    level: h2
    body: 'Les fonctions `play` et `pause` permettent de démarrer et d’arrêter la lecture&nbsp;via:'
  -
    type: code
    lang: js
    body: video.play();
  -
    type: text
    body: ou
  -
    type: code
    lang: js
    body: video.pause();
  -
    type: text
    body: 'Il est donc possible de déclencher ces actions au moment souhaité. Par exemple, lorsqu’un bouton est&nbsp;appuyé.'
  -
    type: codepen
    id: 76fda436e8b90cf2ef5ebc574247b081
    theme: light
    ratio: 34
    tabs: result
  -
    type: note
    intent: warning
    body: 'Attention, les navigateurs remarqueront si vous tentez de démarrer une vidéo en JavaScript au chargement de la page pour recréer le comportement `autoplay` et bloqueront cette&nbsp;action.'
  -
    type: text
    body: |
      Une bonne pratique de garder le statut de la vidéo dans une variable afin de pouvoir y faire référence au besoin. Par exemple, pour déterminer quels boutons&nbsp;afficher&thinsp;▶️⏸️ 
      
      Si pour quelconque raison, cette information n’est pas disponible via une variable, il est possible de vérifier le statut de la vidéo&nbsp;via
  -
    type: code
    lang: js
    body: video.paused
  -
    type: text
    body: 'qui retournera un boolean `true` ou `false` en fonction de si la vidéo est arrêtée ou en train de&nbsp;jouer.'
  -
    type: codepen
    id: 4582ecf85b623cf648a23202d99bffbd
    theme: light
    ratio: 34
    tabs: result
  -
    type: note
    intent: exercice
    body: 'Ninja Rap&thinsp;🐢🟧 [codepen.io/smnarnold/pen/LYpRJrK](https://codepen.io/smnarnold/pen/LYpRJrK?editors=0010)'
  -
    type: text
    title: 'CurrentTime ⌛'
    level: h2
    body: |
      Utilisé simplement `video.currentTime` retourne la position actuelle de la vidéo en secondes. Par exemple, si l’utilisateur a écouté dix secondes au moment ou cette fonction est appelée, elle retournera&nbsp;`10`.
      
      Si une valeur lui est attribuée `video.currentTime = 0` elle déplacera la position courante de la vidéo à la position correspondante au chiffre en secondes attribué. Dans ce cas-ci, la vidéo retournera au début, puisque le temps attribué est&nbsp;`0`.
  -
    type: codepen
    id: 34cf2aacc716b5c57965d913d05d7ebf
    theme: light
    ratio: 34
    tabs: result
  -
    type: note
    intent: generic
    body: 'Cette technique, combiné à la fonction [pause](#playpause) est particulièrement utile pour recréer le comportement&nbsp;"stop"&thinsp;⏹️.'
  -
    type: note
    intent: exercice
    body: 'Nana Nana Batman! [codepen.io/smnarnold/pen/XWmjpBe](https://codepen.io/smnarnold/pen/XWmjpBe?editors=0010)'
  -
    type: text
    title: Duration
    level: h2
    body: 'La fonction `video.duration` retourne la durée de la vidéo en secondes. Donc si une vidéo dure dix secondes, cette fonction retournera&nbsp;`10`.'
  -
    type: codepen
    id: 2b10c719810db40d05001788985d76be
    theme: light
    ratio: 34
    tabs: result
  -
    type: note
    intent: generic
    body: 'Diviser le [currentTime](#currenttime) par la `duration` est particulièrement utile afin d''obtenir une fraction correspondant à l''avancement de la vidéo. Ainsi, il est possible de synchroniser des animations, par exemple une barre de progrès, avec la&nbsp;vidéo.'
  -
    type: text
    title: PlaybackRate
    level: h2
    body: |
      Utilisé simplement `video.playbackRate` retourne le vitesse de lecture de la vidéo sous forme d’un chiffre allant de 0 à 16. Par exemple, si l’utilisateur écoute sa vidéo à la vitesse normale, son playback rate est des&nbsp;`1`.
      
      Si une valeur lui est attribuée `video.playbackRate = 5` elle ajustera la vitesse de lecture en fonction de cette nouvelle valeur. Dans ce cas-ci, la vidéo jouera 5x plus&nbsp;rapidement.
  -
    type: codepen
    id: b5e2a027989cbd7d5a585d8ff5cef840
    theme: light
    ratio: 34
    tabs: result
  -
    type: note
    intent: exercice
    body: 'Numéro&thinsp;8️⃣&thinsp;🦅 [codepen.io/smnarnold/pen/MWjgReZ](https://codepen.io/smnarnold/pen/MWjgReZ?editors=0010)'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article de MDN🦖 sur playbackRate](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/playbackRate)'
  -
    type: text
    title: 'Volume 🎚️'
    level: h2
    body: |
      Utilisé simplement `video.volume` retourne le volume actuel de la vidéo sous forme d’un chiffre allant de 0 à 1. Par exemple, si l’utilisateur écoute sa vidéo à la moitié du volume, cette fonction retournera&nbsp;`0.5`.
      
      Si une valeur lui est attribuée `video.volume = 1` elle ajustera le volume en fonction de cette nouvelle valeur. Dans ce cas-ci, la vidéo jouera le plus fort&nbsp;possible.
  -
    type: codepen
    id: da3c5f0eb712a6bd1f04ce3d83f94d82
    theme: light
    ratio: 34
    tabs: result
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article MDN🦖 sur l''option&nbsp;volume](https://developer.mozilla.org/fr/docs/Web/API/HTMLMediaElement/volume)'
  -
    type: text
    title: Événements
    level: h2
    body: |
      Il est possible d'écouter plusieurs événements sur les lecteurs audio/vidéo. 
      
      Notamment:
      
      - `canplay` déclenché lorsque le lecteur est prêt à&nbsp;jouer.
      - `pause` déclenché lorsque le lecteur arrête de&nbsp;jouer.
      - `play` déclenché lorsque le lecteur commence à&nbsp;jouer.
      - `timeupdate` déclenché à chaque fois que la valeur de currentTime&nbsp;change.
      - `ended` déclenché lorsque la lecture du média est&nbsp;complétée.
  -
    type: note
    intent: generic
    body: 'Les exemples des sections [currentTime](#currenttime) et [duration](#duration) utilisent l''événement `timeupdate` afin de se déclencher à chaque fois que la vidéo&nbsp;progresse.'
  -
    type: note
    intent: exercice
    body: 'Moonwalk&thinsp;🌖🚶 [codepen.io/smnarnold/pen/YzWpGWm](https://codepen.io/smnarnold/pen/YzWpGWm?editors=0010)'
  -
    type: note
    intent: good
    body: 'Pour connaître tous les événements liés aux lecteurs audio et vidéo, voir cet [article sur&nbsp;MDN🦖](https://developer.mozilla.org/fr/docs/Web/Guide/DOM/Events/evenement_medias)'
  -
    type: text
    title: Audio
    level: h2
    body: 'L''élément audio peut-être créé directement en JavaScript sans avoir de balise HTML associée de la&nbsp;sorte:'
  -
    type: code
    lang: js
    body: 'const audio = new Audio(''audio.mp3'');'
  -
    type: codepen
    id: b5a2e7ca2d74dad04576261516733feb
    theme: light
    ratio: 34
    tabs: 'js,result'
  -
    type: text
    body: 'Cette approche est  particulièrement utile pour gérer les sons ponctuels.'
  -
    type: note
    intent: exercice
    body: 'Toasty! [codepen.io/smnarnold/pen/abOpzPJ](https://codepen.io/smnarnold/pen/abOpzPJ?editors=001)'
is_hidden: false
title: 'Audio & Vidéo'
subtitle: HTMLMediaElement
template: page-article
color_scheme: auto
preview_color: '#000'
fieldset: page-article
id: dda33b4f-6a79-45f6-8415-d0439c6b9d95
