title: Video
template: page-article
color_scheme: auto
body:
  -
    type: text
    title: Src/Source
    level: h2
    body: 'Afficher une vidéo peut se faire en une seule ligne, comme&nbsp;suit:'
  -
    type: code
    lang: html
    body: '<video src="video.mp4"></video>'
  -
    type: text
    body: |
      Telle une image&thinsp;🖼️
       
      Il est aussi possible, de l’afficher avec une ou des balises enfants de type `source`, de la&nbsp;sorte:
  -
    type: code
    lang: html
    body: |
      <video>
        <source src=”video.mp4”>
      </video>
  -
    type: text
    body: 'Cette méthode offre l''avantage de définir plusieurs sources. Ainsi, si le navigateur est incapable de lire le premier format, il tentera de lire le deuxième et ainsi de suite. Par&nbsp;exemple:'
  -
    type: code
    lang: html
    body: |
      <video>
        <source src=”video.mp4”>
        <source src=”video.webm”>
      </video>
  -
    type: note
    intent: good
    body: 'Si vous ne désirez pas avoir à fournir plusieurs sources, les **mp4** sont maintenant supportés sur tous les navigateurs majeurs. [caniuse.com/mp4](https://caniuse.com/mp4)'
  -
    type: text
    title: Poster
    level: h2
    body: 'Par défaut, une balise vidéo affichera le premier frame de sa source. Néanmoins, il est possible d’ajouter un attribut `poster` pour définir une image à utiliser à la&nbsp;place.'
  -
    type: code
    lang: html
    body: '<video src="video.mp4" poster=”image.jpg”></video>'
  -
    type: text
    title: Controls
    level: h2
    body: |
      Si présent, cet attribut indique au navigateur d’afficher les contrôles de base de la vidéo. 
      
      - play/pause
      - volume
      - etc.
      
      À moins de définir ses propres boutons, il est préférable dans la majorité des cas d'ajouter cet attribut.
  -
    type: code
    lang: html
    body: '<video src="video.mp4" controls></video>'
  -
    type: text
    title: Loop
    level: h2
    body: 'Indique au navigateur de jouer la vidéo en boucle&thinsp;🔁'
  -
    type: code
    lang: html
    body: '<video src="video.mp4" loop></video>'
  -
    type: text
    title: Muted
    body: 'Indique au navigateur de jouer la vidéo en mode silencieux&thinsp;🔇'
  -
    type: code
    lang: html
    body: '<video src="video.mp4" muted></video>'
  -
    type: text
    title: Autoplay
    level: h2
    body: 'Indique au navigateur de démarrer la vidéo si possible dès le chargement de la page.'
  -
    type: code
    lang: html
    body: '<video src="video.mp4" autoplay></video>'
  -
    type: note
    intent: warning
    body: 'Les navigateurs bloquent presque tous cette option si la vidéo n’est pas en sourdine aka&nbsp;[muted](#muted). Si l''utilisateur a déjà déclenché manuellement d''autres vidéos avec de l''audio sur le site, le navigateur peut choisir d''honnorer&nbsp;l''autoplay.'
  -
    type: image
    image: /assets/articles/video-autoplay.jpg
  -
    type: text
    title: Playsinline
    level: h2
    body: 'Certains appareils, notamment plusieurs mobiles&thinsp;📱, démarrent automatiquement les vidéos en plein écran. Pour contrer ce comportement, il est possible de spécifier de jouer la vidéo dans son cadre d’origine avec&nbsp;`playsinline`.'
  -
    type: code
    lang: html
    body: '<video src="video.mp4" playsinline></video>'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus sur la balise vidéo et ses attributs, voir&nbsp;[MDN🦖](https://developer.mozilla.org/fr/docs/Web/HTML/Element/video)'
fieldset: page-article
id: 796deda2-cc69-454c-a8e4-95b6c48f0185
