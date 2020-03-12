title: Animation
template: page-article
color_scheme: auto
body:
  -
    type: text
    title: 'Animation-name / Keyframes'
    level: h2
    body: 'Nom de référence de l''animation, indiquant quel `@keyframes`&nbsp;appliquer.'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus sur animation-name, voir&nbsp;[MDN🦖](https://developer.mozilla.org/fr/docs/Web/CSS/animation-name)'
  -
    type: text
    body: |
      Les keyframes indiques les étapes qui constituant une&nbsp;animation. 
      
      Dans son expression la plus simple, il est possible de spécifier un état de départ `from` _(0%)_ et un état de fin `to`&nbsp;_(100%)_ .
  -
    type: code
    lang: css
    body: |
      @keyframes anim { 
        from { transform: translateX(0%) } 
        to { transform: translateX(400%) }  
      }
  -
    type: text
    body: |
      Une interpolation sera effectué entre ces deux&nbsp;états.
      
      Pour une animation plus élaboré, il est possible de spécifier plusieurs états avec des&nbsp;pourcentages.
  -
    type: code
    lang: css
    body: |
      @keyframes anim { 
        0%, 100% { transform: translate(0%, 0%) } 
        25% { transform: translate(400%, 0%) }  
        50% { transform: translate(400%, 200%) }  
        75% { transform: translate(0%, 200%) }  
      }
  -
    type: codepen
    id: poJyyVQ
    theme: light
    ratio: 34
    tabs: result
  -
    type: note
    intent: exercice
    body: 'Recréer cette animation de yo-yo [codepen.io/smnarnold/pen/GRJZvao](https://codepen.io/smnarnold/pen/GRJZvao)'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus sur @keyframes, voir&nbsp;[MDN🦖](https://developer.mozilla.org/fr/docs/Web/CSS/@keyframes)'
  -
    type: text
    title: Animation-duration
    body: |
      Défini la durée d'une animation. Ce nombre peut-être en seconde ou en milliseconde. 
      `1s`&nbsp;=&nbsp;`1000ms`.
      
      Par exemple, nous avons trois fois la même animation `animation-name: left-to-right`, mais à des durées différentes:
      
      1. 1 seconde
      2. 2 secondes
      3. 3 secondes
  -
    type: codepen
    id: ExjKVpm
    theme: light
    ratio: 34
    tabs: result
  -
    type: note
    intent: exercice
    body: 'Animer le fantôme&thinsp;👻 [codepen.io/smnarnold/pen/jOPqvvB](https://codepen.io/smnarnold/pen/jOPqvvB)'
  -
    type: note
    intent: good
    body: 'Pour en apprendre plus sur animation-duration, voir [MDN🦖](https://developer.mozilla.org/fr/docs/Web/CSS/animation-duration)'
  -
    type: text
    title: Animation-timing-function
    level: h2
    body: |
      Dicte à l'animation son rythme. Par exemple, dans l'animation précédente on remarque que chaque carré accélère progressivement avant de ralentir ensuite. Ce rythme est appelé `ease` et est celui par défaut des&nbsp;animations.
      
      L'exemple suivant contient six fois la même animation, mais avec des rythmes&nbsp;différents
      
      1. `linear` vitesse constante, n'accélère ou ne ralentis&nbsp;jamais&thinsp;↗️
      2. `ease` accélère progressivement et ralentis en fin de parcours _(Comportement par&nbsp;défaut)_
      3. `ease-in-out` commence lentement et ralentis en fin de&nbsp;parcours.
      4. `ease-in` commence lentement&thinsp;⤴️
      5. `ease-out` ralentis en fin de&nbsp;parcours&thinsp;⤵️
      6. `cubic-bezier` Rythme personnalisable via une courbe de&nbsp;bézier.
  -
    type: codepen
    id: PoqNPdL
    theme: light
    ratio: 34
    tabs: result
  -
    type: note
    intent: tool
    body: 'Pour créer et visualiser facilement des courbes de bézier [cubic-bezier.com](https://cubic-bezier.com/)'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus sur Animation-timing-function, voir&nbsp;[MDN🦖](https://developer.mozilla.org/fr/docs/Web/CSS/animation-timing-function)'
  -
    type: text
    title: Animation-delay
    level: h2
    body: |
      Définit la délais d'attente avant de démarrer une animation. Par défaut, cette propriété est à `0s`. Si une valeur négative est attribuée, l'animation débutera déjà commencé, comme-ci l'équivalent de la valeur s'était déjà&nbsp;écoulée.
      
      Par exemple:
      
      1. Aucun délais
      2. Délais de 0.5s
      3. Délais d'une seconde
  -
    type: codepen
    id: bGdpEYe
    theme: light
    ratio: 34
    tabs: result
  -
    type: note
    intent: warning
    body: 'Le délais n''est effectif qu''au démarage d''une animation. Si celle-ci joue plus d''une fois, le délais ne sera pas effectif à chaque&nbsp;itération.'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus sur animation-delay, voir&nbsp;[MDN🦖](https://developer.mozilla.org/fr/docs/Web/CSS/animation-delay)'
  -
    type: text
    title: Animation-iteration-count
    level: h2
    body: |
      Indique le nombre de fois qu'une animation doit-être joué _(Par défaut&nbsp;1)_. Ce nombre peut-être compris entre 0 et &infin; et accepte les fractions. Il est aussi possible de spécifier `infinite` pour qu'elle joue à&nbsp;l'infinie.
      
      Par exemple:
      
      1. Joue 1x
      2. Joue 2x
      3. Joue à l'infinie&thinsp;♾️
  -
    type: codepen
    id: vYOGGBN
    theme: light
    ratio: 34
    tabs: result
  -
    type: note
    intent: good
    body: 'Pour en savoir plus sur animation-iteration-count, voir&nbsp;[MDN🦖](https://developer.mozilla.org/fr/docs/Web/CSS/animation-iteration-count)'
  -
    type: text
    title: Animation-direction
    level: h2
    body: |
      Indique la direction dans laquelle une animation doit-être joué.
      
      Valeurs possibles:
      
      - `normal` du début vers la fin _(par&nbsp;défaut)_
      - `reverse` de la fin vers le début
      - `alternate` alterne entre normal et reverse à chaque itération de&nbsp;l'animation.
      - `alternate-reverse` alterne entre reverse et normal à chaque itération de&nbsp;l'animation.
      
      Par exemple:
      
      1. Normal
      2. Renversé
      3. Alterné
  -
    type: note
    intent: good
    body: 'Pour en savoir plus sur Animation-direction, voir&nbsp;[MDN🦖](https://developer.mozilla.org/fr/docs/Web/CSS/animation-direction)'
  -
    type: codepen
    id: NWqNNRw
    theme: light
    ratio: 34
    tabs: result
  -
    type: text
    title: Animation-fill-mode
    level: h2
    body: |
      Indique l'apparence que doit prendre l'élément lorsque l'animation est&nbsp;terminée.
      
      Valeurs possibles:
      
      - `none` redeviend tel qu'avant l'animation _(par&nbsp;défaut)_
      - `forwards` garde l'apparence donné par l'animation à la&nbsp;fin
      - `backwards` garde l'apparence donné par l'animation au &nbsp;début
      - `both` combine l'apparence donné par l'animation au &nbsp;début et à la&nbsp;fin
      
      Par exemple:
      
      1. None
      2. Forwards
  -
    type: codepen
    id: dyoMMWG
    theme: light
    ratio: 34
    tabs: result
  -
    type: note
    intent: good
    body: 'Pour en savoir plus sur animation-fill-mode, voir&nbsp;[MDN🦖](https://developer.mozilla.org/fr/docs/Web/CSS/animation-fill-mode)'
  -
    type: text
    title: animation-play-state
    level: h2
    body: |
      Indique si une animation doit jouer ou être en&nbsp;pause.
      
      Valeurs possibles et&nbsp;exemple:
      
      1. `running` l'animation&nbsp;joue
      2. `paused` l'animation est en&nbsp;pause
  -
    type: codepen
    id: BaNKKZw
    theme: light
    ratio: 34
    tabs: result
  -
    type: note
    intent: exercice
    body: 'Animer le fantôme&thinsp;👻 avec Mario [codepen.io/smnarnold/pen/LYVNJeX](https://codepen.io/smnarnold/pen/LYVNJeX)'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus sur animation-play-state, voir&nbsp;[MDN🦖](https://developer.mozilla.org/fr/docs/Web/CSS/animation-play-state)'
fieldset: page-article
id: 2240997b-8c23-4105-8192-b0f794c792fe
