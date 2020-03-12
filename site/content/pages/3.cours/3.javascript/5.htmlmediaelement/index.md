title: HTMLMediaElement
template: page-article
color_scheme: auto
body:
  -
    type: text
    body: 'Pour personnaliser un lecteur audio/vidéo, il faut recréer soi-même les boutons en HTML/CSS et les rendre fonctionnels en&nbsp;javascript.'
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
    body: 'var video = document.querySelector(''.video'');'
  -
    type: note
    intent: warning
    body: 'Attention de ne pas confondre la balise et le nom de&nbsp;classe.'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus sur les `HTMLMediaElement`, voir&nbsp;[MDN🦖](https://developer.mozilla.org/fr/docs/Web/API/HTMLMediaElement)'
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
    type: note
    intent: warning
    body: 'Attention, les navigateurs remarqueront si vous tentez de démarrer une vidéo en javascript au chargement de la page pour recréer le comportement `autoplay` et bloquerons cette&nbsp;action.'
  -
    type: text
    body: |
      Il est bonne pratique de garder le statut de la vidéo dans une variable pour pouvoir y faire référence au besoin. Par exemple, pour déterminer quels boutons&nbsp;afficher&thinsp;▶️⏸️ 
      
      Si pour quelconque raison, cette information n’est pas disponible via une variable, il est possible de vérifier le statut de la vidéo&nbsp;via
  -
    type: code
    lang: js
    body: video.paused
  -
    type: text
    body: 'qui retournera un boolean `true` ou `false` en fonction de si la vidéo est arrêtée ou en train de&nbsp;jouer.'
  -
    type: text
    title: 'CurrentTime ⌛'
    level: h2
    body: |
      Utilisé simplement `video.currentTime` retourne la position actuelle de la vidéo en secondes. Par exemple, si l’utilisateur a écouté dix secondes au moment ou cette fonction est appelée, elle retournera&nbsp;`10`.
      
      Si une valeur lui est attribuée `video.currentTime = 0` elle déplacera la position courante de la vidéo à la position correspondante au chiffre en secondes attribué. Dans ce cas-ci, la vidéo retournera au début, puisque le temps attribué est&nbsp;`0`.
  -
    type: note
    intent: generic
    body: 'Cette technique, combiné à la fonction [pause](#playpause) est particulièrement utile pour recréer le comportement&nbsp;"stop"&thinsp;⏹️.'
  -
    type: text
    title: Duration
    level: h2
    body: 'La fonction `video.duration` retourne la durée de la vidéo en secondes. Donc si une vidéo dure dix secondes, cette fonction retournera&nbsp;`10`.'
  -
    type: text
    title: 'Volume 🎚️'
    level: h2
    body: |
      Utilisé simplement `video.volume` retourne le volume actuel de la vidéo sous forme d’un chiffre allant de 0 à 1. Par exemple, si l’utilisateur écoute sa vidéo à la moitié du volume, cette fonction retournera&nbsp;`0.5`.
      
      Si une valeur lui est attribuée `video.volume = 1` elle ajustera le volume en fonction de cette nouvelle valeur. Dans ce cas-ci, la vidéo jouera le plus fort&nbsp;possible.
  -
    type: note
    intent: good
    body: 'Pour en savoir plus sur l''option `volume`, voir&nbsp;[MDN🦖](https://developer.mozilla.org/fr/docs/Web/API/HTMLMediaElement/volume)'
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
  -
    type: text
    title: Audio
    level: h2
    body: 'L''élément audio peut-être créer directement en javascript sans avoir de balise HTML associée de la sorte:'
  -
    type: code
    lang: js
    body: 'var audio = new Audio(''audio.mp3'');'
  -
    type: text
    body: 'Cette approche est  particulièrement utile pour gérer les sons ponctuels.'
fieldset: page-article
id: dda33b4f-6a79-45f6-8415-d0439c6b9d95
