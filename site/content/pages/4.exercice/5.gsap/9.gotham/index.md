body:
  -
    type: text
    body: |
      Pour cet exercice, nous allons créer une synchroniser le générique de l'[émission Gotham](https://www.imdb.com/title/tt3749900/) avec le défilement de la&nbsp;page.
      
      Un [Pen de départ](https://codepen.io/smnarnold/pen/QWdKwYz) incluant GSAP et ScrollTrigger vous est fourni. Vous n'avez qu'à focuser sur l'animation GSAP dans l'onglet JS. Les éléments HTML et CSS ont déjà étés mis en place pour&nbsp;vous.
      
      Aperçu du résultat:
      
      <video src="https://i.imgur.com/p2g0rap.mp4" autoplay loop muted style="width: 100%"></video>
  -
    type: note
    intent: warning
    body: 'Afin de nous assurez du bon fonctionnement de l''animation, tout son code devra êtres inclut dans l''événement _"loadedmetadata"_ afin de nous assurer que la vidéo soit complètement chargée avant d''effectuer quelconques&nbsp;manipulations.'
  -
    type: text
    title: Requis
    level: h2
    body: |
      - Au défilement de la page, faites en sorte que le lecteur vidéo se fige au centre de&nbsp;l'écran.
      - Déplacez la tête de lecture de la vidéo en fonction de la progression du défilement de la page. Lorsque le <u style="color: green">start</u> croise le <u style="color: green">scroller-start</u>, le générique devrait-être au début et lorsque le <u style="color: red">end</u> croise le <u style="color: green">scroller-end</u> être rendu à la&nbsp;fin.
  -
    type: note
    intent: warning
    body: 'Puisque le code est situé dans le _"loadedmetadata"_, il est probable que vous aillez à faire plusieurs rafraichissement de la page afin cde visualiser vos&nbsp;changements.'
is_hidden: false
title: Gotham
template: page-exercice
color_scheme: auto
preview_color: '#000'
fieldset: page-article
id: 74eaa5ee-de8b-47d8-8d98-177a2859b203
