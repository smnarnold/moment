body:
  -
    type: text
    title: Src/Source
    level: h2
    body: 'Afficher un lecteur audio peut se faire en une seule ligne, comme suit:'
  -
    type: code
    lang: html
    body: '<audio src="audio.mp3"></audio>'
  -
    type: text
    body: |
      Telle une image&thinsp;🖼️
      
      Il est aussi possible, de l’afficher avec une ou des balises enfants de type source, de la&nbsp;sorte:
  -
    type: code
    lang: html
    body: |
      <audio>
        <source src="audio.mp3">
        <source src="audio.flac">
      </audio>
  -
    type: note
    intent: generic
    body: 'Si vous ne désirez pas avoir à fournir plusieurs sources, les **mp3** sont supportés sur tous les navigateurs modernes.&nbsp;[caniuse.com/mp3](https://caniuse.com/#feat=mp3)'
  -
    type: text
    title: Controls
    level: h2
    body: |
      Si présent, cet attribut indique au navigateur d’afficher les contrôles de base du lecteur&nbsp;audio.
      
      - play/pause
      - volume
      - etc.
      
      À moins de définir ses propres boutons, il est préférable dans la majorité des cas d'ajouter cet&nbsp;attribut.
  -
    type: code
    lang: html
    body: '<audio src="audio.mp3" controls></audio>'
  -
    type: note
    intent: warning
    body: 'Sans cet attribut, le lecteur audio sera&nbsp;invisible.'
  -
    type: text
    title: Loop
    level: h2
    body: 'Indique au navigateur de jouer l''udio en boucle&thinsp;🔁'
  -
    type: code
    lang: html
    body: '<audio src="audio.mp3" loop></audio>'
  -
    type: text
    title: Autoplay
    level: h2
    body: 'Indique au navigateur de démarrer l''audio si possible dès le chargement de la&nbsp;page.'
  -
    type: code
    lang: html
    body: '<audio src="audio.mp3" autoplay></audio>'
  -
    type: note
    intent: warning
    body: 'Les navigateurs bloquent presque tous cette option à moins qu''ils aient détecté un engagement de la part de l''utilisateur. Par exemple: avoir déjà déclenché manuellement un son,&nbsp;etc.'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article MDN🦖 sur la balise audio et ses&nbsp;attributs](https://developer.mozilla.org/fr/docs/Web/HTML/Element/audio)'
title: Audio
template: page-article
color_scheme: auto
preview_color: '#000'
preview: /assets/previews/audio.jpg
fieldset: page-article
id: a0b65bee-9dc1-481f-ad46-aa5bef461b89
