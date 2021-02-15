body:
  -
    type: text
    body: |
      <abbr title="GreenSock Animation Platform">[GSAP](https://greensock.com/gsap/)</abbr> est une libraire permettant d'animer tout ce que JavaScript est en mesure de manipuler. Elle permet de de changer la valeur de certaines propriétés plusieurs fois par secondes, ce qui permet de simuler le mouvement et bien d'autres&nbsp;effets.
      
      Pour vous donner une idée, voici une animation GSAP de&nbsp;[Chris&nbsp;Gannon](https://gannon.tv/interactive):
  -
    type: codepen
    id: ZZjgdO
    theme: light
    ratio: 56
    tabs: result
  -
    type: text
    title: Passé
    level: h2
    body: |
      Vous avez peut-être déjà utilisé et/ou entendu parler&nbsp;de:
      
      - TweenLite
      - TweenMax
      - TimelineLite
      - TimelineMax
      
      ou vous tomberez peut-être sur des articles mentionnant ces outils en lisant sur le web. Ce qui est normal, puisqu'ils ont étés des parties importantes de GSAP durant de nombreuses années. Cependant, vers la fin de 2019, ils furent remplacés par l'objet GSAP lors de la sortie de&nbsp;GSAP&nbsp;3. 
      
      Dans ce cours, nous, nous consacrerons à cette plus récente version _(3)_. Faites attentions, si une documentation mentionne ces précédents outils, elle traite donc la version 2 et non&nbsp;3.
  -
    type: text
    title: Installation
    level: h2
    body: |
      Comme pour toute librarie, afin d'avoir accès à ses fonctionnalités, il est nécessaire de l'inclure dans notre&nbsp;projet.
      
      Pour ce faire, il est&nbsp;possible:
      
      - De [Télécharger une copie de la librarie&thinsp;📥](https://greensock.com/docs/v3/Installation)
      - D'[utiliser un CDN](https://cdnjs.com/libraries/gsap)
      - De partir des [gabarits de base CodePen](https://codepen.io/GreenSock/full/23d3979528b262cb07da37f6a7c7dd76), incluant la librairie et parfois certaines de ses&nbsp;extensions.
  -
    type: text
    title: 'Objet GSAP'
    level: h2
    body: |
      L'objet GSAP est le point de départ de toutes les fonctionnalités associées à&nbsp;GSAP.
      
      - Création d'animations
      - Configuration de&nbsp;paramètres
      - Ajout de plugiciels _(plugins)_, d'interpolations _(eases)_ ou&nbsp;d'effets
      - Contrôle des animations
  -
    type: text
    title: 'Interpolations de base'
    level: h2
    body: |
      Les interpolations, ou en anglais: <em>tweenings</em>, permettent de créer des animations similaires à celles réalisées en&nbsp;CSS. 
      
      Pour ce faire, il suffit de&nbsp;spécifier:
      
      - Le ou les éléments à animer avec un sélecteur, ex:&nbsp;`.element`
      - Un objet indiquant la ou les propriétés à animer et les valeurs souhaitées, ex: &nbsp;`{ opacity: 0.5 }`
  -
    type: note
    intent: warning
    body: 'Il est possible d''utiliser la majorité des propriétés&nbsp;CSS. Cependant, il est nécessaire de remplacer les traits-d''union `-` par une nommenclature [camelCase&thinsp;🐫](https://en.wikipedia.org/wiki/Camel_case). Par exemple, `font-size` deviendrait&nbsp;`fontSize`.'
  -
    type: note
    intent: warning
    body: |
      Bien qu'il soit possible d'animer presque toutes les propriétés CSS, il est préférable de se concentrer sur `transform` et `opacity` lorsque possible, puisque ces propriétés bénificies d'une accélération&nbsp;matérielle.
      
      - `opacity`
      - `x` et&nbsp;``y``
      - `rotation`, `rotationX` ou&nbsp;`rotationY`
      - `scale`, `scaleX` ou&nbsp;``scaleY`
      - `skewX` et `skewY`
  -
    type: text
    body: 'Dans l''exemple ci-dessous, un carré est positionné en haut à gauche de son parent. En cliquant sur le bouton ▶️, une animation GSAP le déplace vers la&nbsp;droite.'
    title: To
    level: h3
  -
    type: codepen
    id: dyGEKdp
    theme: light
    ratio: 34
    tabs: 'js,result'
  -
    type: note
    intent: warning
    body: 'Les valeurs sous forme de nombre <em>(qui ne sont pas entre guillemets)</em>, ex: `400`, sont interprétées comme étant des&nbsp;px. Les valeurs entre guillemets, ex `''400%''`, peuvent spécifier une unité de mesure&nbsp;différente, comme dans le cas&nbsp;précédent où un pourcentage a été utilisé&nbsp;<em>(%)</em>.'
  -
    type: text
    level: h3
    body: |
      **Décortiquons l'animation:**
      
      - `gsap` indique que nous désirons utiliser une méthode appartenant à la librairie&nbsp;GSAP.
      - `to()` correspond à la méthode&nbsp;utilisée. Traduisible par <em>"vers"</em>, cette méthode indique qu'un état de fin sera passé et que l'élément doit faire une interpolation vers&nbsp;celui-ci.  
      - `'.element'` le selecteur correspondant à l'élément devant être&nbsp;animé.
      - `{ x: '400%' }` un état de fin sous forme d'objet contenant une propriété <em>(x)</em> et une valeur&nbsp;<em>('400%')</em>.
  -
    type: text
    body: 'L''élément se déplace donc vers la droite&thinsp;➡️ de 4x sa largeur <em>(400%)</em> en l''espace d''une seconde.'
  -
    type: note
    intent: warning
    body: 'L''animation ne fonctionne qu''une fois. Puisque la méthode `to()` indique un état de fin à atteindre et que la première animation a changée les valeurs des propriétés, leurs valeurs de départ est maintenant identique à celle de fin, donc aucune animation n''est exécutée les fois&nbsp;subséquentes.'
  -
    type: note
    intent: good
    body: 'Pour en savoir, voir cet [article de GreenSock à propos de&nbsp;to](https://greensock.com/docs/v3/GSAP/gsap.to()).'
  -
    type: text
    title: From
    level: h3
  -
    type: codepen
    id: VweOVyx
    theme: light
    ratio: 34
    tabs: 'js,result'
  -
    type: text
    body: |
      **Décortiquons une animation avec plus d'une propriété:**
      
      - `from()` correspond à la méthode&nbsp;utilisée. Traduisible par <em>"à partir de"</em>, cette méthode indique qu'un état de départ sera passé et que l'élément doit partir de celui-ci pour faire une interpolation vers ses valeurs&nbsp;initiales.
      - `{ x: '400%', opacity: 0 }` un état de départ sous forme d'objet contenant les propriétés `x` & `opacity` et les valeurs `400%` & `0` <em>(transparent au début de&nbsp;l'animation)</em>.
  -
    type: note
    intent: warning
    body: 'La propriété CSS transform est formulé différement du à ses multiples valeurs possibles. Par exemple, `transform: translateX(400%)` est formulé ici `x: ''400%''`. Pour voir toutes les noms associés à la propriété transform, voir la [liste de Greensock&thinsp;🟩&thinsp;🧦](https://greensock.com/get-started/#2d-and-3d-transforms).'
  -
    type: note
    intent: warning
    body: 'Contrairement à l''animation `to()`, l''animation `from()` peut-être jouée plus d''une fois, puisque l''état de départ fournis ne correspond jamais à l''état de&nbsp;fin.'
  -
    type: note
    intent: good
    body: 'Pour en savoir, voir cet [article de GreenSock à propos de&nbsp;from](https://greensock.com/docs/v3/GSAP/gsap.from()).'
  -
    type: text
    title: FromTo
    level: h3
    body: 'Permet de spécifier un état de départ et de fin d''une animation, contrairement à [from()](#from) et [to()](#to) qui utilisent l''état actuel comme point de départ ou fin. Cette interpolation permet d''avoir un contrôle total sur une animation, en particulier lorsqu''elle est enchaînée avec d''autres&nbsp;animations.'
  -
    type: codepen
    id: ZEWvZaL
    theme: light
    ratio: 34
    tabs: 'js,result'
  -
    type: text
    body: |
      Dans cet exemple, il est important de remarquer la présence de deux objets de propriétés `{ x: '-200%' }` et `{ x: '400%' }` plutôt qu'un seul. Le premier spécifie l'état de départ et le deuxième l'état de fin de&nbsp;l'animation.
      
      Il est possible d'omettre une propriété CSS dans l'état de départ et de la spécifier uniquement dans l'état de&nbsp;fin. 
      
      Par exemple: `{ x: '0%' }, { x: '400%', scale: 2 }` fonctionnerait, puisque GSAP aussumerait que le scale de départ correspond au `scale` naturel de l'élément&nbsp;_(1)_ et donc l'animerait jusqu'à&nbsp;2.
      
      Cependant, spécifier uniquement une propriété dans l'état de départ ne génèrera pas d'animation sur cette dite&nbsp;propriété. 
      
      Par exemple, `{ x: '0%', scale: 2 }, { x: '400%' }` `scale` donnerait un scale initial de 2 et puisqu'aucun scale de fin n'est spécifié, GSAP assumera que le scale de fin doit correspondre au scale de&nbsp;départ.
  -
    type: note
    intent: good
    body: 'Pour en savoir, voir cet [article de GreenSock à propos de&nbsp;fromTo](https://greensock.com/docs/v3/GSAP/gsap.fromTo()).'
  -
    type: text
    title: Timing
    level: h2
    body: 'En plus des propriétés CSS de base, il est possible d''utiliser des propriétés&nbsp;spéciales.'
  -
    type: text
    title: Duration
    level: h3
    body: 'Tout comme la propriété [animation-duration](http://smnarnold.com/cours/css/animation#animation-duration) en CSS, la propriété `duration` de GSAP permet de spécifier la durée d''une&nbsp;animation.'
  -
    type: codepen
    id: YzwbBVG
    theme: light
    ratio: 34
    tabs: 'js,result'
  -
    type: note
    intent: generic
    body: 'Si aucune durée n''est spécifiée, GSAP utilisera une durée d''une demi seconde _(0.5s)_ par&nbsp;défaut.'
  -
    type: text
    title: Repeat
    level: h3
    body: 'Tout comme la propriété [animation-iteration-count](../css/animation#animation-iteration-count) en CSS, la propriété `repeat` de GSAP permet de spécifier le nombre de fois qu''une animation doit-être&nbsp;effectuée.'
  -
    type: codepen
    id: ExKoBZa
    theme: light
    ratio: 56
    tabs: 'js,result'
  -
    type: note
    intent: warning
    body: 'Plutôt que d''utiliser le mot `infinite` pour indiquer qu''une animation doit jouer à l''infinie, GSAP s''attend à recevoir `-1`, comme pour le dernier carré du précédent&nbsp;exemple.'
  -
    type: text
    title: Yoyo
    level: h3
    body: 'De façon similaire à [animation-direction: alternate;](../css/animation#animation-direction) en CSS, la propriété `Yoyo` de GSAP permet d''indiquer à une animation d''alterner de direction à chaque&nbsp;répétition.'
  -
    type: codepen
    id: NWNXZZm
    theme: light
    ratio: 34
    tabs: 'js,result'
  -
    type: text
    title: Delay
    level: h3
    body: 'Tout comme la propriété [animation-delay](http://smnarnold.com/cours/css/animation#animation-delay) en CSS, la propriété `delay` de GSAP permet de spécifier un délais d''attente avant de démarrer une&nbsp;animation.'
  -
    type: codepen
    id: zYqGQXd
    theme: light
    ratio: 34
    tabs: 'js,result'
  -
    type: note
    intent: warning
    body: '`delay` peut être pratique pour synchroniser 2 ou 3 éléments, mais pour une synchronisation plus complexe, il est conseillé d''utiliser une&nbsp;timeline.'
  -
    type: text
    title: Stagger
    level: h3
    body: 'Similaire à [Delay](#delay), Stagger fait en sorte qu''un groupe d''éléments _(.element)_ aillant tous la même animation soient décalés. Ainsi, plutôt que de voir les trois carrés se déplacer en même temps, un délais de 0.2s est ajouté entre chaque&nbsp;animation.'
  -
    type: codepen
    id: VwaLOxx
    theme: light
    ratio: 34
    tabs: 'js,result'
  -
    type: text
    body: |
      Il est aussi possible de passer un objet à `stagger` plutôt qu'un nombre. Dans cet objet, il est possible de spécifier le décalage entre chaque&nbsp;élément. 
      
      Par&nbsp;exemple:
  -
    type: code
    lang: js
    body: |
      gsap.from('.element', { 
        x: '400%',
        stagger: {
          each: 0.2
        }
      });
  -
    type: text
    body: |
      Générerait exactement le même résultat que dans l'exemple précédent. Cependant, il est possible de passer des propriétés et valeurs suplémentaires afin de rafiner l'animation. Notamment, `from`, soit le point dedépart de&nbsp;l'animation.
      
      - `"start"` part du début vers la fin _(par&nbsp;défaut)_
      - `"end"` part de la fin vers le&nbsp;début
      - `"center"` du centre vers les&nbsp;extrémités
      - `"edges"` des extrémités vers le&nbsp;centre
      - `"random"` de façon aléatoire
  -
    type: codepen
    id: abNqomR
    theme: light
    ratio: 34
    tabs: 'js,result'
  -
    type: note
    intent: good
    body: 'Pour mieux comprendre, voir la [démonstration interactive de Stagger faite par&nbsp;GreenSock](https://greensock.com/docs/v3/Staggers)'
  -
    type: text
    title: Ease
    level: h3
    body: 'Permet de dicter le rythme de l''animation, de la même façon que la [animation-timing-function](../css/animation#animation-timing-function) permet de le faire pour les animations/transitions&nbsp;CSS.'
  -
    type: codepen
    id: Bajevbp
    theme: light
    ratio: 34
    tabs: 'js,result'
  -
    type: text
    body: 'Valeurs possibles: `none`, `power1`, `power2`, `power3`, `power4`, `back`, `elastic`, `bounce`, `rough`, `slow`, `steps`, `circ`, `expo`, `sine`'
  -
    type: note
    intent: generic
    body: |
      Il est possible de spécifier si un `ease` doit être effectué au début, à la fin ou au début et à la fin en ajoutant `.in`, `.out` ou `.inOut` après le nom du ease souhaité. Par exemple: `bounce.inOut`;
      
      Si aucune spécification n'est donnée, `.out` sera&nbsp;utilisé.
  -
    type: note
    intent: tool
    body: 'Pour voir toutes les possibilités et visualiser la courbe de bézier associée à chaque easing, voir la [démo Greensock des easings](https://greensock.com/get-started/#easing)'
  -
    type: text
    title: Callbacks
    level: h2
    body: |
      Les `Callbacks` permettent de déclencher une fonction javaScript à différents moments clés d'une&nbsp;animation. 
      
      Par exemple, pour se synchronizer avec son début&thinsp;🏁, il est possible d'utiliser `onStart` ou encore,  avec sa fin&thinsp;🔚 avec `onComplete`, comme dans l'exemple&nbsp;ci-dessous.
  -
    type: codepen
    id: eYZNqdb
    theme: light
    ratio: 34
    tabs: 'js,result'
  -
    type: note
    intent: tool
    body: 'Pour voir, tous les callbacks disponibles, voir&nbsp;[GreenSock.com](https://greensock.com/get-started/#callbacks)'
  -
    type: text
    title: 'Contrôle de l''animation'
    level: h2
    body: 'Pour contrôler le déroulement d''une animation, il faut préalablement se créer une référence vers celle-ci en la stockant dans une variable. À partir de cette variable, il est possible d''appeler différentes&nbsp;fonctions.'
  -
    type: text
    title: 'Play vs Pause vs Reverse'
    level: h3
    body: 'Par exemple, `play()` qui envoit le carré vers la droite, `pause()` qui arrête l''animation sur place ou encore `reverse()` qui joue l''animation à l''envers, soit qui envoit le carré vers la&nbsp;gauche.'
  -
    type: codepen
    id: abNvbJK
    theme: light
    ratio: 34
    tabs: 'js,result'
  -
    type: text
    body: |
      Par défaut, dès qu'une animation est déclarée, elle se déclenche immédiatement. Afin de contourner ce problème, vous pouvez lui passer `paused: true`.
      
      Par exemple:
  -
    type: code
    lang: js
    body: |
      var animation = gsap.to('.element', { 
        duration: 2,
        x: '400%',
        paused: true
      });
  -
    type: text
    title: TimeScale
    level: h3
    body: 'Permet de définir la vitesse de lectrure de l''animation. Par exemple, `timeScale(4)` permet de jouer une animation 4x plus rapidement, tandis que `timeScale(0.5)` permet de ralentir de moitié la dite&nbsp;animation.'
  -
    type: codepen
    id: poyjoKW
    theme: light
    ratio: 34
    tabs: 'js,result'
  -
    type: text
    title: Progress
    level: h3
    body: 'Permet de déplacer la tête de lecture de l''animation à pourcentage de progression précis. Par exemple, `seek(0.25)` positionnerait le carré comme si le quart del''animation avait été jouée, versus à la moitié avec `seek(0.5)` et au trois quart avec&nbsp;`seek(0.75)`.'
  -
    type: codepen
    id: zYqvxwQ
    theme: light
    ratio: 34
    tabs: 'js,result'
  -
    type: text
    title: Seek
    level: h3
    body: 'Tout comme [Progress](#progress), `seek()` permet de déplacer la tête de lecture. Cependant, plutôt que de se basé sur un pourcentage d''avancement, son déplacement est calculé en secondes. Par exemple, une demi-seconde `seek(0.5)`, une seconde `seek(1)`, une seconde et demi&nbsp;`seek(1.5)`.'
  -
    type: codepen
    id: dyMYPJX
    theme: light
    ratio: 34
    tabs: 'js,result'
  -
    type: note
    intent: good
    body: 'Pour vous inspirez, visualiser cette [collection de réalisations utilisant GSAP&nbsp;3](https://codepen.io/collection/ANaOod).'
is_hidden: false
title: Introduction
template: page-article
color_scheme: auto
preview_color: '#77c814'
preview: /assets/previews/gsap-intro.png
fieldset: page-article
id: 5770d4d0-b8f7-4593-ae35-a37697b4b34c
