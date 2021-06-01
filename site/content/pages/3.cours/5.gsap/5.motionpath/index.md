body:
  -
    type: text
    body: |
      MotionPath est un plugiciel _(plugin)_ développé par [GreenSock](https://greensock.com/) permettant de déplacer un élément ou une animation sur un&nbsp;tracé.
      
      Voici par exemple une animation de [Chris Dyer](https://codepen.io/cdyer) utilisant MotionPath afin de déplacer l'hélicoptère&thinsp;🚁 de façon&nbsp;réaliste.
  -
    type: codepen
    id: xxGVbVj
    theme: light
    ratio: 56
    tabs: result
  -
    type: text
    title: Passé
    level: h2
    body: |
      Vous tomberez peut-être sur des articles ou de la documentation mentionnant le plugiciel _(plugin)_ [Bezier](https://greensock.com/bezierplugin-js/) de GSAP en lisant sur le&nbsp;web. 
      
      Ce plugin était le prédécesseur de MotionPath et fut remplacé vers la fin de 2019 avec la sortie de&nbsp;GSAP&nbsp;3. Faites attention de ne pas confondre les&nbsp;deux.
  -
    type: text
    title: Installation
    level: h2
    body: |
      Comme pour tout plugiciel _(plugin)_ GreenSock, afin d'avoir accès à ses fonctionnalités, il est nécessaire d'avoir incorporé la librairie GSAP préalablement et d'ajouter ensuite le plugiciel dans le&nbsp;projet.
      
      Pour ce faire, il est&nbsp;possible:
      
      - De le récupérer sur le [Site de&nbsp;GreenSock](https://greensock.com/docs/v3/Installation?checked=core,scrollTrigger#modules)
      - D'utiliser un&nbsp;[CDN](https://cdnjs.com/libraries/gsap)
      
      Une fois chargé, il est conseillé d'indiquer à GSAP que MotionPath est disponible en inscrivant la ligne de code&nbsp;suivante:
  -
    type: code
    lang: js
    body: gsap.registerPlugin(MotionPathPlugin);
  -
    type: note
    intent: warning
    body: 'MotionPath n''est compatible qu''avec GSAP 3 et&nbsp;plus.'
  -
    type: text
    title: 'Utilisation de base'
    level: h2
    body: 'La façon la plus simple d''utiliser MotionPath est à partir d''un tracé dans un&nbsp;SVG.'
  -
    type: note
    intent: good
    body: '[Adobe Illustrator](https://www.adobe.com/ca_fr/products/illustrator.html) permet de dessiner des courbes et de les exporter en&nbsp;SVG.'
  -
    type: text
    body: |
      Pour ce faire, il suffit d'ajouter la propriété MotionPath à une animation et de lui attribuer comme valeur le sélecteur correspondant au tracé&nbsp;désiré.
      
      Par exemple, le path&nbsp;`#courbe`:
  -
    type: codepen
    id: 94b89f59512457a287411ac4a2890446
    theme: light
    ratio: 56
    custom_ratio: '45'
    tabs: 'js,result'
  -
    type: text
    body: |
      GSAP applique une transformation CSS équivalente aux positions inscrites dans le tracé passé en&nbsp;référence.
      
      Dans notre exemple, le carré bleu&thinsp;🟦 se déplace sur le tracé, car les deux éléments sont superposés dans le coin supérieur gauche de la fenêtre. Cependant, même si le SVG était positionné différemment, l'animation serait restée identique, puisque l'élément animé ignore la position du SVG de référence. Il ne fait que se décaler en fonction des positions dans le&nbsp;tracé.
      
      Par exemple, revoici la même animation, mais avec le SVG positionné à droite. Remarquez comment le parcours du carré bleu&thinsp;🟦 reste&nbsp;inchangé.
  -
    type: codepen
    id: 8e02f5e0328e4d487bfa6ebd29c6e441
    theme: light
    ratio: 56
    custom_ratio: '45'
    tabs: 'js,result'
  -
    type: note
    intent: warning
    body: 'Les animations réalisées avec MotionPath ne sont pas&nbsp;responsives!'
  -
    type: text
    title: 'Utilisation d''un objet'
    level: h2
    body: |
      Il est possible de raffiner le comportement d'une animation MotionPath. Pour ce faire, il faut utiliser un objet JavaScript pouvant contenir plusieurs propriétés et valeurs plutôt qu'une valeur texte comme dans les exemples&nbsp;précédents.
      
      Par exemple, convertissons la valeur textuelle de l'exemple en&nbsp;objet.
  -
    type: codepen
    id: 2bc2debd5ae30c3e34ccfe6cf934babf
    theme: light
    ratio: 56
    custom_ratio: '45'
    tabs: 'js,result'
  -
    type: text
    body: 'On remarque que la propriété permettant de définir le tracé est maintenant spécifiée et s''appelle&nbsp;`path`.'
  -
    type: text
    title: Align
    level: h2
    body: |
      Comme mentionné précédemment, l'élément animé ne se superpose pas automatiquement à son tracé. Il ne fait qu'effectuer un déplacement équivalent aux coordonnées inscrites dans ledit tracé. Cependant, il est possible de remédier à ce problème via la propriété `align` qui permet de spécifier un élément de base sur lequel notre élément animé doit&nbsp;s'aligner.
      
      Par exemple:
  -
    type: codepen
    id: 7dbb787be6846206dcd0f71c09be99e0
    theme: light
    ratio: 56
    custom_ratio: '45'
    tabs: 'js,result'
  -
    type: note
    intent: exercice
    body: 'Basketball SVG&thinsp;🏀 [codepen.io/smnarnold/pen/rNegVWj](https://codepen.io/smnarnold/pen/rNegVWj?editors=0010)'
  -
    type: text
    title: 'Start et End'
    level: h3
    body: |
      Les propriétés `start` et `end` de l'objet MotionPath permettent de spécifier la position de départ et de fin de l'animation sur le tracé. `0` correspondant au début et `1` à la&nbsp;fin. 
      
      Il est donc possible de débuter une animation à mi-chemin par exemple en utilisant&nbsp;`start: 0.5`:
  -
    type: codepen
    id: 15fe03355a0d5d1b554edd5f90acfda5
    theme: light
    ratio: 56
    custom_ratio: '45'
    tabs: 'js,result'
  -
    type: text
    body: 'Ou encore de jouer une animation dans la direction&nbsp;opposée:'
  -
    type: codepen
    id: 85d126f696003b43fa42cde5c55401a4
    theme: light
    ratio: 56
    custom_ratio: '45'
    tabs: 'js,result'
  -
    type: text
    title: 'Animation par coordonnées'
    level: h2
    body: |
      Puisque MotionPath ne fait qu'appliquer des transformations CSS équivalentes aux positions inscrites dans un tracé, il est possible de lui passer des coordonnées sous forme d'un tableau et de le laisser calculer des courbes entre les différents&nbsp;points.
      
      Par exemple:
  -
    type: codepen
    id: f4d7fbcbc126dbafc9cda1bef68d8529
    theme: light
    ratio: 56
    custom_ratio: '45'
    tabs: 'js,result'
  -
    type: text
    body: 'L''élément part de son point d''origine et se dirige vers les premières coordonnées inscrites dans la tableau. Il peut y avoir autant de coordonnées que&nbsp;désiré.'
  -
    type: text
    title: Curviness
    level: h3
    body: |
      Il est possible de modifier la courbe produite d'une animation par coordonnée an lui spécifiant la propriété `curviness`. Par défaut, cette propriété à la valeur de `1`. Ce qui créer la courbe dans l'exemple&nbsp;précédent.
      
      Cependant, il serait possible de retirer l'aspect courbe en entier en attribuant la valeur `curviness: 0` à notre&nbsp;animation:
  -
    type: codepen
    id: 13dbb25c39674ba539b307c183a80234
    theme: light
    ratio: 56
    custom_ratio: '45'
    tabs: 'js,result'
  -
    type: text
    body: 'ou encore de rendre la courbe plus prononcée en augmentant sa&nbsp;valeur:'
  -
    type: codepen
    id: 1f9e14cb6b56022b557006494750005c
    theme: light
    ratio: 56
    custom_ratio: '45'
    tabs: 'js,result'
  -
    type: text
    title: Autorotate
    level: h2
    body: |
      La propriété `autorotate` permet de spécifier à l'élément animé d'effectuer une rotation correspondant au tracé lors de son animation. Par défaut, la valeur de cette propriété est à&nbsp;`false`.
      
      Pour l'activer, il faut lui donner la valeur `true`, comme dans l'exemple&nbsp;suivant:
  -
    type: codepen
    id: cde687ce395afc78bb3346c09a1a2e78
    theme: light
    ratio: 56
    custom_ratio: '45'
    tabs: 'js,result'
  -
    type: note
    intent: warning
    body: 'Attention à la majuscule auto<u>R</u>otate!'
  -
    type: text
    title: 'Point de référence'
    level: h2
    body: |
      Par défaut, l'élément animé se déplace sur le tracé à partir de sont point de référence, le coin supérieur&nbsp;gauche. 
      
      Cependant, il est possible de déplacer le point de référence de l'élément en utilisant les propriétés `xPercent` et `yPercent` qui déplacent en pourcentage le point de référence de l'élément&nbsp;animé.
      
      Par exemple:
  -
    type: codepen
    id: 41def42d5a52d1bfd609e05088cc495a
    theme: light
    ratio: 56
    custom_ratio: '45'
    tabs: 'js,result'
  -
    type: text
    body: 'Remarquez que ces propriétés ne sont pas propres à MotionPath, mais elles peuvent s''avérer particulièrement utile avec&nbsp;celui-ci.'
  -
    type: note
    intent: exercice
    body: 'Basketball coordonnées&thinsp;🏀 [codepen.io/smnarnold/pen/ExKzjbw](https://codepen.io/smnarnold/pen/ExKzjbw?editor=0010)'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article de GreenSock sur&nbsp;MotionPath](https://greensock.com/docs/v3/Plugins/MotionPathPlugin).'
is_hidden: false
title: MotionPath
template: page-article
color_scheme: auto
preview_color: '#77c814'
preview: /assets/previews/motion-path.png
fieldset: page-article
id: e59b0ca9-8c47-4b38-86e1-4be4ec3b7022
