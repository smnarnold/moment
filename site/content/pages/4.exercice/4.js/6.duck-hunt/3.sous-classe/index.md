body:
  -
    type: text
    body: |
      Pour cette partie de l'exercice, nous allons générer une nouvelle sorte de canards en étendant la classe `Duck`&nbsp;actuelle.
      
      Avant de commencer cette partie, assurez-vous d'avoir bien complété la [première](https://smnarnold.com/exercice/js/duck-hunt/game) et [deuxième partie](https://smnarnold.com/exercice/js/duck-hunt/canards), car nous utiliserons des éléments contenus dans celles-ci.
      
      Aperçu du résultat:
  -
    type: image
    image: /assets/articles/duck-hunt-sous-classe.mp4
  -
    type: text
    title: Requis
    level: h2
    body: |
      Quelques ajustements seront nécessaires sur la classe `Duck` avant de&nbsp;commencer.
      
      1. Premièrement, créez une nouvelle méthode `init` sur cette&nbsp;classe.
      2. Déplacez `this.create()` et l'écoute du clic sur le canard&thinsp;🎯 à l'intérieur de votre nouvelle&nbsp;méthode.
  -
    type: note
    intent: generic
    body: 'À ce stade-ci, votre canard devrait arrêté d''être généré, car la méthode `create` n''est plus appelée dans le&nbsp;constructeur.'
  -
    type: text
    body: |
      3. Dans votre classe `Game`, stockez l'instanciation de votre classe `Duck` dans une propriété nommée&nbsp;`duck`.
      4. À partir de cette nouvelle propriété, appelez-la méthode `init` de&nbsp;`Duck`.
  -
    type: note
    intent: generic
    body: 'À partir de ce moment, vous devriez être de retour à votre point de départ., soit votre canard devrait afficher comme&nbsp;avant.'
  -
    type: text
    body: |
      5. Après la classe `Duck`, créez-vous une nouvelle classe JavaScript intitulée `BlueDuck` étendant la classe&nbsp;`Duck`.
      6. Appelez `super` dans son constructeur afin qu'elle génère une instance en appelant sa classe parent&nbsp;`Duck`.
      7. Dans votre classe `Game`, remplacez `new Duck()` par&nbsp;`new BlueDuck()`.
  -
    type: note
    intent: generic
    body: 'Si tout ce passe bien, votre classe `BlueDuck` devrait actuellement être identique à votre classe `Duck` donc aucun changement ne devrait-être&nbsp;perceptible.'
  -
    type: text
    body: '8. Dans le constructeur de `BlueDuck`, définissez la valeur de `speed` à `3` afin de faire en sorte que ce canard vole plus&nbsp;vite.'
  -
    type: note
    intent: warning
    body: 'Lorsque `Super` est utilisé dans un constructeur, il doit toujours être écrit en premier. Votre propriété doit donc être écrite&nbsp;après.'
  -
    type: text
    body: |
      9. Copiez la méthode `init` de votre classe `Duck` et collez là dans votre classe `BlueDuck`. Ainsi, nous pourrons modifier cette méthode sans impacter l'originale dans&nbsp;`Duck`.
      10. À l'intérieur de la méthode `init` de `BlueDuck`, ajoutez la classe `blue` au&nbsp;canard&thinsp;🔵. Cette classe changera l'apparence du&nbsp;canard.
  -
    type: note
    intent: generic
    body: 'À ce stade-ci, votre canard devrait-être bleu plutôt que brun et se déplacer plus rapidement que votre première version du&nbsp;canard.'
  -
    type: text
    body: |
      11. Dans la classe `Game`, remplacez la ligne `this.duck = new BlueDuck();` par la condition suivante. 
      	- Si la propriété `score` à une valeur inférieure à 500, stockez dans votre propriété `duck` une instance de la classe `Duck` _(Canard brun)_. 
          - Si la propriété `score` à une valeur entre 500 et 1000, stockez aléatoirement dans votre propriété `duck` une instance de la classe `Duck` ou de `BlueDuck`. Ainsi, un canard brun ou bleu sera généré durant cette période. 
          - Si la propriété `score` à une valeur supérieure à 1000, stockez dans votre propriété `duck` une instance de la classe `BlueDuck` _(Canard&nbsp;bleu)_.
  -
    type: text
    title: Bonus
    level: h2
    body: '1. Inspirez-vous de la classe CSS `.duck.blue` pour créer la classe `.duck.red` créant ainsi une 3e sorte de canard&thinsp;🔴. Cette sorte devra utiliser l''image&nbsp;suivante:'
  -
    type: code
    lang: html
    body: 'https://ex.smnarnold.com/class-js/duck-hunt/duck-red.png'
  -
    type: text
    body: |
      2. Lorsque le pointage se situe entre 1000 et 1500, pigez entre les canards bleus&thinsp;🔵 et&nbsp;rouges&thinsp;🔴.
      3. Lorsque le pointage dépasse 1500, pigez entre les 3 sortes de&nbsp;canards.
is_hidden: false
title: Sous-classe
template: page-exercice
color_scheme: auto
preview_color: '#000'
preview: /assets/previews/duck-hunt-sous-classe.png
fieldset: page-article
id: 1e19c0b2-3cf5-47dc-b373-f5dc7c765900
