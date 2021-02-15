body:
  -
    type: text
    title: 'vw et vh'
    level: h2
    body: |
      Les unitées `vw` et `vh` sont des unités relatives à la fenêtre _(viewport)_. Leur nom est en fait un acronyme:
      
      - `vw`: viewport width _(largeur de&nbsp;fenêtre)_
      - `vh`: viewport height _(hauteur de&nbsp;fenêtre)_
      
      Elles fonctionnent sur le même principe que les pourcentages _(%)_, mais plutôt que de se baser sur la dimension de leur parent, elles se basent plutôt sur la dimension de la&nbsp;fenêtre.
      
      Par exemple, pour qu'un élément prenne la moitié de la largeur de la fenêtre, il est possible d'utiliser:
  -
    type: code
    lang: css
    body: '.element { width: 50vw; } // Demi-largeur de fenêtre'
  -
    type: text
    body: 'À priori, le résultat peut sembler identique&nbsp;à:'
  -
    type: code
    lang: css
    body: '.element { width: 50%; } // Demi-largeur du parent'
  -
    type: text
    body: |
      Car si les deux éléments sont enfants de body _(body prenant par défaut toute la largeur de la fenêtre)_ les deux auront la même&nbsp;dimension. 
      
      Afin de bien illustrer la différence. Imaginons que nous avons une fenêtre d'une largeur de&nbsp;1000px. À l'intérieur de celle-ci, un élément de 200px de large contenant deux&nbsp;enfants. 
      
      - Un premier avec une largeur de&nbsp;`50vw`
      - Un deuxième avec une largeur de&nbsp;`50%`
      
      Le premier se basant sur la dimension de la fenêtre mesurera donc&nbsp;500px. Tandis que le deuxième se basant sur son parent mesurera&nbsp;100px.
  -
    type: text
    title: 'vmin et vmax'
    level: h2
    body: |
      Tout comme [vw et vh](#vw-et-vh), `vmin` et `vmax` sont des unités relatives à la fenêtre _(viewport)_. Leur nom correspond à:
      
      - `vmin`: viewport minimum _(plus petit côté de la&nbsp;fenêtre)_
      - `vmax`: viewport maximum _(plus grand côté de la&nbsp;fenêtre)_
      
      Plutôt que de se baser directement sur un axe spécifique, la largeur ou la hauteur _(width/height)_, ces unités alternent entre les deux selon le&nbsp;contexte.
      
      `vmin` calcule donc l'équivalent du `vw` et `vh` et **retourne le plus petit&nbsp;résultat**. Tandis que `vmax` fait l'opposé et retourne le plus grand&nbsp;résultat.
      
      Par exemple, pour créer un élément carré couvrant un maximum de la fenêtre, mais ne dépassant pas de celle-ci, il serait possible&nbsp;d'utiliser:
  -
    type: code
    lang: css
    body: |
      .element {
        width: 100vmin;
        height: 100vmin;
      }
  -
    type: text
    title: calc()
    level: h2
    body: |
      Plutôt que de spécifier une mesure directement, il est possible d'utiliser la fonction CSS `calc()` afin de combiner différentes mesures et d'en retourner le résultat. Cette approche est particulièrement utile pour combiner des mesures relatives&nbsp;_(%,&nbsp;vw,&nbsp;etc.)_ avec des mesures absolues&nbsp;_(px)_.
      
      Par exemple, si un élément doit couvrir toute la largeur de son parent, moins 50px, il est impossible d'y arriver avec une unité de base. Cependant, il est possible d'y arriver en combinant l'unité relative&nbsp;`100%` et l'unité absolue&nbsp;`50px`.
  -
    type: codepen
    id: mdrZWEb
    theme: light
    ratio: 34
    tabs: 'css,result'
  -
    type: text
    body: 'Les opérateurs mathématiques de base _(+, -, *, /)_ sont permis entre les parenthèses de&nbsp;`calc()`'
  -
    type: note
    intent: warning
    body: |
      Attention de laisser un espace vide avant et après les opérateurs mathématiques afin que le calcul fonctionne.
      ❌ `calc(100%-50px)`;
      ✅ `calc(100% - 50px)`;
  -
    type: note
    intent: mdn
    body: 'Pour en savoir, voir cet [article MDN à propos de&nbsp;calc()](https://developer.mozilla.org/fr/docs/Web/CSS/calc()).'
  -
    type: text
    title: 'min() et max()'
    level: h2
    body: |
      Les fonctions CSS `min()` et `max()` permettent de retourner le plus petit ou le plus grand résultat parmi différentes&nbsp;valeurs.
      
      Par exemple, pour s'assurer qu'un texte ne soit jamais plus petit que 12px, afin qu'il reste toujours lisible, il est possible&nbsp;d'utiliser:
  -
    type: code
    lang: css
    body: '.element { font-size: max(12px, 0.5em); }'
  -
    type: text
    body: |
      La fonction valide donc laquelle de ces 2 untiés retourne le plus grand résultat et ne garde que cette valeur. 
      
      Si l'élément est dans un parent ayant un `fonte-size`&nbsp;de: 
      
      - `50px`: 12px < 0.5em _(25px)_ ➡️ 25px
      - `20px`: 12px > 0.5em _(10px)_ ➡️ 12px
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article de MDN à propos de&nbsp;min()](https://developer.mozilla.org/fr/docs/Web/CSS/min()) et cet [article à propos de&nbsp;max()](https://developer.mozilla.org/fr/docs/Web/CSS/max()).'
  -
    type: text
    title: clamp()
    level: h2
    body: |
      La fonction CSS `clamp()` ressemble aux fonctions [min() et max()](#min-et-max), mais contrairement à celles-ci, elle offre à la fois une valeur minimale et&nbsp;maximale.
      
      Par exemple, pour qu'un texte ne soit jamais plus petit que 12px, ni plus grand que 20px, il est possible&nbsp;d'utiliser:
  -
    type: code
    lang: css
    body: '.element { font-size: max(12px, 0.5em, 20px); }'
  -
    type: text
    body: |
      La fonction retourne la valeur centrale _(0.5em)_ jusqu'à concurrence de sa valeur plancher&nbsp;_(12px)_ ou sa valeur plafond&nbsp;_(20px)_.
      
      Si l'élément est dans un parent ayant un `fonte-size`&nbsp;de:
      
      - `50px`: 12px < 0.5em _(25px)_ = 25px > 20px ➡️ 20px
      - `20px`: 12px > 0.5em _(10px)_ = 12px < 20px ➡️ 12px
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos de&nbsp;clamp()](https://developer.mozilla.org/fr/docs/Web/CSS/clamp()).'
  -
    type: note
    intent: good
    body: '[min(), max() et clamp() plus en détail sur&nbsp;web.dev](https://web.dev/min-max-clamp).'
is_hidden: false
title: 'Unités de mesure avancées'
subtitle: 'vw, vh, vmin, vmax, calc, min, max, clamp'
template: page-article
color_scheme: auto
preview_color: '#f6f472'
preview: /assets/previews/unite-de-mesure.png
fieldset: page-article
id: 65f2c1cf-131a-4971-b002-d4c004dd1ed7
