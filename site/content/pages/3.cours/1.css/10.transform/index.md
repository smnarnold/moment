title: Transform
template: page-article
color_scheme: auto
body:
  -
    type: text
    body: |
      La propriété CSS transform accepte plusieurs valeurs. Il est même possible d'effectuer des combinaisons pour accomplir des transformations&nbsp;complexes.
      
      Comparativement aux autres propriétés, par exemple: `top`ou `left`, la propriété `transform` n'a aucun impact sur le positionnement des éléments&nbsp;adjacents.
  -
    type: text
    title: 'Translate ↔️'
    level: h2
    body: |
      Par défaut, cette valeur accepte un ou deux arguments entre parenthèses. Le 1<sup>er</sup> correspond à une translation sur les X&thinsp;↔️ et le 2<sup>e</sup>, _(si présent)_, sur les&nbsp;Y&thinsp;↕️. Les arguments peuvent-être n'importe quelle [unité de mesure CSS](./unites-css) _(px, em, %, etc.)_
      
      Un translate avec seul&nbsp;argument
      `transform: translate(100%);` 
      déplace l'élément sur les&nbsp;X&thinsp;↔️. 
      
      Tandis qu'avec deux arguments <u>séparés par une&nbsp;virgule</u> 
      `transform: translate(100%, 100%);` 
      l'élément se déplace sur les X et&nbsp;Y&thinsp;↘️.
      
      Voir l'exemple ci-dessous:
  -
    type: codepen
    id: YzPoVXm
    theme: light
    ratio: 34
    tabs: result
  -
    type: note
    intent: generic
    body: |
      Dans le cadre d'une translation, les % sont relatifs à la dimension de l'élément en&nbsp;question. 
      100% sur les X = Une largeur de&nbsp;l'élément.  
      100% sur les Y = Une hauteur de&nbsp;l'élément.
  -
    type: text
    body: |
      Il est possible d'effectuer une translation sur un seul axe en spécifiant cet axe dans la nom de la valeur. Par exemple:
      
      - `translateX(...)` uniquement sur les&nbsp;X _(équivaut à_ `translate(...)` _)_
      - `translateY(...)` uniquement sur les&nbsp;Y
      - `translateZ(...)` uniquement sur les&nbsp;Z
  -
    type: note
    intent: warning
    body: 'Pour qu''une transition sur l''axe des Z soit perceptible, il est nécessaire qu''une perspective soit donnée à l''élément ou à l''un de ses&nbsp;parents.'
  -
    type: text
    body: 'Il est également possible de combiner les 3 axes dans une valeur en utilisant `translate3d(...)`.'
  -
    type: note
    intent: good
    body: 'Pour en apprendre plus sur translate3d, voir [MDN🦖](https://developer.mozilla.org/fr/docs/Web/CSS/transform-function/translate3d)'
  -
    type: note
    intent: exercice
    body: 'Exercice: [codepen.io/smnarnold/pen/ExjaMGG](https://codepen.io/smnarnold/pen/ExjaMGG)'
  -
    type: text
    title: 'Rotate 🔄'
    level: h2
    body: |
      Cette valeur accepte comme comme argument les unités de&nbsp;type: 
      
      - `deg` degrés | 360 degrés dans un cercle
      - `turn` turns | 1 turn/tour dans un cercle
      
      Qui plus est, cette valeur&nbsp;peut-être
      
      - Positive pour aller dans le sens horaire des aiguilles d'une&nbsp;montre
      - Négative pour aller dans le sens&nbsp;inverse
      
      Par exemple, une rotation de&nbsp;45<sup>°</sup> dans le sens&nbsp;horaire:
  -
    type: codepen
    id: VwYJbEe
    theme: light
    ratio: 34
    tabs: 'css,result'
  -
    type: note
    intent: generic
    body: 'Remarquez dans l''exemple précédent comment il est possible de combiner deux valeurs de&nbsp;transformation.'
  -
    type: note
    intent: exercice
    body: 'Exercice: [codepen.io/smnarnold/pen/XWbWoNr](https://codepen.io/smnarnold/pen/XWbWoNr)'
  -
    type: text
    body: |
      Il est possible d'effectuer une rotation sur un seul axe en spécifiant cet axe dans la nom de la valeur. Par exemple:
      
      - `rotateZ(...)` uniquement sur les Z _(équivaut à_ `rotate(...)` _)_
      - `rotateX(...)` uniquement sur les X 
      - `rotateY(...)` uniquement sur les Y
      
      Par exemple: RotationX vs RotationY
  -
    type: codepen
    id: abzgwob
    theme: light
    ratio: 34
    tabs: result
  -
    type: note
    intent: good
    body: 'Pour en apprendre plus sur rotate, voir [MDN🦖](https://developer.mozilla.org/fr/docs/Web/CSS/transform-function/rotate)'
  -
    type: note
    intent: exercice
    body: 'Exercice: [codepen.io/smnarnold/pen/jOPEoPo](https://codepen.io/smnarnold/pen/jOPEoPo)'
  -
    type: text
    title: Scale
    level: h2
    body: |
      Par défaut, cette valeur accepte un ou deux arguments entre parenthèses. Si un seul argument est passé, il correspond à un facteur d'agrandissement/réduction. Si un 2<sup>e</sup> argument est ajouté, le premier correspond à un facteur d'agrandissement/réduction sur les X et le deuxième sur les Y. Il est donc possible de déformer un&nbsp;élément.
      
      Voir l'exemple ci-dessous. Le 1<sup>er</sup> est agrandi de façon proportionnel de 50% _(1.5)_ et le 2<sup>e</sup> de 50% _(1.5)_ sur les X et 300%&nbsp;_(3)_.
  -
    type: codepen
    id: mdyZmYW
    theme: light
    ratio: 34
    tabs: result
  -
    type: note
    intent: good
    body: 'Pour en apprendre plus sur scale, voir [MDN🦖](https://developer.mozilla.org/fr/docs/Web/CSS/transform-function/scale)'
  -
    type: note
    intent: exercice
    body: 'Exercice: [codepen.io/smnarnold/pen/BaNyejq](https://codepen.io/smnarnold/pen/BaNyejq)'
  -
    type: text
    title: Skew
    level: h2
    body: |
      Par défaut, cette valeur accepte un ou deux arguments entre parenthèses. Si un seul argument est passé, il correspond à une distorsion sur les X. Si un 2e argument est ajouté, le premier correspond à une distorsion sur les X et le deuxième sur les&nbsp;Y.
      
      Cette valeur accepte comme comme argument les unités de&nbsp;type: 
      
      - `deg` degrés | 360 degrés dans un cercle
      - `turn`turns | 1 turn/tour dans un cercle
      
      Par exemple, une distorsion de&nbsp;45<sup>°</sup> sur les&nbsp;X:
  -
    type: codepen
    id: XWJLgKr
    theme: light
    ratio: 34
    tabs: 'css,result'
  -
    type: text
    body: |
      Il est possible d'effectuer un skew sur un seul axe en spécifiant cet axe dans la nom de la valeur. Par exemple:
      
      - skewX(...) uniquement sur les X _(équivaut à_ `skew(...)` _)_
      - skewY(...) uniquement sur les Y
  -
    type: note
    intent: good
    body: 'Pour en apprendre plus sur skew, voir [MDN🦖](https://developer.mozilla.org/fr/docs/Web/CSS/transform-function/skew)'
  -
    type: note
    intent: exercice
    body: 'Exercice: [codepen.io/smnarnold/pen/BaNyEvx](https://codepen.io/smnarnold/pen/BaNyEvx)'
  -
    type: text
    title: Transform-origin
    level: h2
    body: |
      Toutes les transformations des exemples précédents ont effectuées à partir d'un point d'origine se situant au centre de chaque élément. Soit l'équivalent de&nbsp;`transform-origin: 50% 50%;`
      
      Cependant, il est possible de modifier cette valeur avec n'importe quelle&nbsp;[unité CSS](./unite-css). 
      
      Par exemple, voici la même rotation de&nbsp;45<sup>°</sup>:
      
      - À gauche avec un point de rotation central&nbsp;_(50% 50%)_
      - À droite avec un point de rotation en haut à gauche&nbsp;_(0 0)_.
  -
    type: codepen
    id: qBEzjma
    theme: light
    ratio: 34
    tabs: result
  -
    type: note
    intent: good
    body: 'Pour en apprendre plus sur transform-origin, voir [MDN🦖](https://developer.mozilla.org/fr/docs/Web/CSS/transform-origin)'
  -
    type: note
    intent: exercice
    body: 'Exercice: [codepen.io/smnarnold/pen/poJvmRo](https://codepen.io/smnarnold/pen/poJvmRo)'
fieldset: page-article
id: 5af20d93-a337-4a45-87f5-4fc026885f68
