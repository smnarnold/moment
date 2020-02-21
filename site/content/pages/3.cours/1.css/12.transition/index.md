title: Transition
template: page-article
color_scheme: auto
body:
  -
    type: text
    body: 'Les transitions permettent de passer d''un état A à un état B d''une façon&nbsp;élégante.'
  -
    type: text
    title: Transition-property
    level: h2
    body: |
      Définit la ou les propriété(s) affectés par une&nbsp;transition.
      
      Il est possible, d'indiquer que toutes les propriétés capables de transitionner doivent transitionner en utilisant la valeur&nbsp;`all`.
  -
    type: note
    intent: warning
    body: 'Utiliser la valeur `all` avec parcimonie afin d''éviter d''impacter négativement les performances de votre&nbsp;transition.'
  -
    type: text
    body: |
      Il est aussi possible de spécifier un certain nombre de propriétés en les séparant par une&nbsp;virgule.
      
      Par exemple:
      `transition-property: background-color, transform;`
  -
    type: note
    intent: warning
    body: 'Attention, ce ne sont pas toutes les propriétés qui peuvent effectuer une transition. Par exemple, background-image ne peut pas effectuer de transition. Pour connaitre l''ensemble des propriétés capable d''effectuer une transition, voir&nbsp;[MDN🦖](https://developer.mozilla.org/fr/docs/Web/CSS/Liste_propri%C3%A9t%C3%A9s_CSS_anim%C3%A9es)'
  -
    type: note
    intent: good
    body: '[Lea Verou&thinsp;👩‍💻](http://lea.verou.me/) à mis sur pied une page permettant de visualiser rapidement les  différentes [propriétés&nbsp;animables](http://leaverou.github.io/animatable/)'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus sur transition-property, voir [MDN🦖](https://developer.mozilla.org/fr/docs/Web/CSS/transition-property)'
  -
    type: text
    title: Transition-duration
    level: h2
    body: |
      Définit la durée de la transition. Ce nombre peut-être en seconde ou en milliseconde.
      `1s`&nbsp;=&nbsp;`1000ms`.
      
      Par exemple, au survole nous avons trois fois la même transition, mais à avec des durées&nbsp;différentes:
      
      1. 0.5 seconde
      2. 1 seconde
      3. 1.5 secondes
  -
    type: codepen
    id: bGdpeNm
    theme: light
    ratio: 34
    tabs: result
  -
    type: note
    intent: good
    body: 'Pour en savoir plus sur transition-duration, voir [MDN🦖](https://developer.mozilla.org/fr/docs/Web/CSS/transition-duration)'
  -
    type: text
    title: Transition-timing-function
    level: h2
    body: |
      Dicte le rythme de la transition. Par exemple, dans la transition précédente on remarque que chaque carré accélère progressivement avant de ralentir ensuite. Ce rythme est appelé ease et est celui par défaut des&nbsp;transitions.
      
      L'exemple suivant contient six fois la même transition au survole, mais avec des rythmes&nbsp;différents.
      
      1. `linear` n'accélère ou ne ralentis&nbsp;jamais&thinsp;↗️
      2. `ease` accélère progressivement et ralentis en fin de parcours _(Comportement par&nbsp;défaut)_
      3. `ease-in-out` commence lentement et ralentis en fin de&nbsp;parcours.
      4. `ease-in` commence lentement&thinsp;⤴️
      5. `ease-out` ralentis en fin de&nbsp;parcours&thinsp;⤵️
      6. `cubic-bezier` Rythme personnalisable via une courbe de&nbsp;bézier.
  -
    type: codepen
    id: GRJZqRQ
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
    body: 'Pour en savoir plus sur transition-timing-function, voir [MDN🦖](https://developer.mozilla.org/fr/docs/Web/CSS/transition-timing-function)'
  -
    type: text
    title: Transition-delay
    level: h2
    body: |
      Définit la délais d'attente avant de démarrer une transition. Par défaut, cette propriété est à 0s. Si une valeur négative est attribuée, la transition débutera déjà commencée, comme-ci l'équivalent de la valeur s'était déjà écoulée.
      
      Par exemple au&nbsp;survole:
      
      1. Aucun délais
      2. Délais de 0.25s
      3. Délais de -0.25s _(Commence au milieu de&nbsp;l'animation)_
  -
    type: codepen
    id: QWbNNXz
    theme: light
    ratio: 34
    tabs: result
  -
    type: note
    intent: good
    body: 'Pour en savoir plus sur transition-delay, voir [MDN🦖](https://developer.mozilla.org/fr/docs/Web/CSS/transition-delay)'
  -
    type: text
    title: 'Syntaxe courte'
    level: h2
    body: |
      Afin de simplifier l'écriture des transitions, il est possible de regrouper toutes les précédentes propriétés en une seule comme le font les propriétés `margin` et `padding` avec `top`, `right`, `bottom` et&nbsp;`left`.
      
      Pour ce faire, il suffit d'appeler la propriété `transition` et de lui passer au minimum deux valeurs:
      
      1. La ou les propriétés à&nbsp;transitionner
      2. La durée de la&nbsp;transition
      
      Par exemple:
  -
    type: code
    lang: css
    body: |
      transition-property: transform;
      transition-duration: 1s
  -
    type: text
    body: 'Pourrait devenir'
  -
    type: code
    lang: css
    body: 'transition: transform 1s;'
  -
    type: text
    body: |
      Il est aussi possible de spécifier les autres propriété si désiré en les ajoutant à la&nbsp;suite.
      
      Par exemple pour avoir un délais de 0.5s et une transition&nbsp;linéaire:
  -
    type: code
    lang: css
    body: 'transition: transform 1s 0.5s linear;'
fieldset: page-article
id: 956ff1ab-2c61-40de-beb6-4ba4a56da6d4
