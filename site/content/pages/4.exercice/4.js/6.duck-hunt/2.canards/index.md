body:
  -
    type: text
    body: |
      Pour cette partie de l'exercice, nous allons générer les canards&thinsp;🦆 qui feront office de cibles dans le cadre du&nbsp;jeu.
      
      Avant de commencer cette partie, assurez-vous d'avoir bien complété la [première&nbsp;partie](https://smnarnold.com/exercice/js/duck-hunt/game), car nous partirons des éléments contenus dans&nbsp;celle-ci.
      
      Aperçu du résultat:
  -
    type: image
    image: /assets/articles/duck-hunt-canards.mp4
  -
    type: text
    title: Requis
    level: h2
    body: |
      1. Il faudra générer plusieurs canards, nous commencerons donc par créer une nouvelle classe JavaScript intitulée `Duck` et nous la placerons avant la classe `Game` afin qu'elle existe en&nbsp;premier.
      2. Créez une première méthode intitulée `randomY`. Lorsqu'appelée, cette méthode devrait retourner un nombre sans décimales entre 0 et&nbsp;250.
  -
    type: note
    intent: generic
    body: |
      Si votre méthode est bien implémentée, vous devriez être en mesure de l'appeler dans la console CodePen via les commandes suivantes: `var duck = new Duck();` afin de créer une instance de votre classe et ensuite `duck.randomY()` afin d'appeler votre méthode à partir de votre nouvelle&nbsp;instance. 
      
      À ce stade-ci, un nombre entre 0 et 250 devrait afficher dans votre&nbsp;console.
  -
    type: text
    body: |
      3. Créez-vous maintenant différentes propriétés dans le&nbsp;constructeur:
      	- `alive` ayant la valeur `true`, puisqu'au départ chaque canard devrait être&nbsp;vivant.
          - `speed` ayant la valeur `4`. Cette valeur correspond au nombre de secondes nécessaires au canard afin de traverser le&nbsp;jeu&#8201;⏲.
          - `game` correspondant à l'élément HTML ayant la classe `.game` afin de pouvoir faire référence à cet élément au&nbsp;besoin.
          - `el` et `animation` ayant la valeur `null` pour l'instant. _(Nous leur donnerons une vraie valeur plus&nbsp;tard.)_
      	- `y` ayant comme valeur un objet JavaScript ayant les propriétés enfants `start` et `end`. Chacune de ces propriétés devraient appeler la méthode `randomY` afin de contenir un nombre aléatoire. Ces nombres correspondront à la position de départ et de fin du canard sur l'axe des&nbsp;Y&#8201;↕️.
      4. Créez une nouvelle méthode intitulée `create` et à partir du constructeur appeler cette&nbsp;méthode. 
      5. À l'intérieur de la méthode `create`, créez un nouveau div et stockez-le dans la propriété `el`. Ainsi, vous pourrez y faire référence au&nbsp;besoin.
      6. Ajoutez à cet élément la classe `.duck`. Cette classe lui donnera l'apparence d'un&nbsp;canard&#8201;🦆.
      7. Finalement, pour que votre nouvel élément soit visible, insérez-le dans l'élément&nbsp;`.game`.
  -
    type: note
    intent: generic
    body: 'À ce stade-ci, si vous inscrivez la commande `var duck = new Duck()` dans la console, vous devriez voir un canard apparaitre en haut à gauche de votre&nbsp;jeu.'
  -
    type: text
    body: |
      8. Dans votre classe `Game`, allez dans la méthode `newRound` et créez une nouvelle instance de votre classe&nbsp;`Duck`. Ainsi, au début de chaque nouvelle ronde un canard sera&nbsp;généré.
      9. De retour dans la classe `Duck`, créez une animation GSAP `fromTo` dans la méthode `create` et stockez-la dans la propriété `animation` afin de pouvoir y faire référence au&nbsp;besoin. 
      10. Au départ de votre animation, déplacez votre canard l'extérieur du jeu _(-72px)_&thinsp;⬅️ et attribuez lui une valeur de Y correspondant à la valeur contenue dans la propriété&nbsp;`y.start`. À la fin de l'animation, déplacez le canard sur l'axe des X d'une largeur équivalente à la largeur du jeu&nbsp;_(512px)_&thinsp;➡️ et attribuez-lui une valeur de Y correspondant à la valeur contenue dans la propriété&nbsp;`y.end`. La durée de l'animation doit correspondre à la propriété `speed` et qu'aucun easing ne doit être&nbsp;présent.
      11. Créez maintenant une méthode intitulée `win` qui sera appelée lorsque le canard réussira à traverser le jeu sans se faire tirer dessus. Lorsque cette méthode est appelée, effacez l'élément HTML stocké dans la propriété `el` et à partir de votre variable `game` appelez la méthode `fail` afin d'indiquer à l'usager qu'il a&nbsp;échoué.
      12. Créez une méthode `lose`. Cette méthode sera appelée lorsque le canard se fait tirer dessus. Toutes les actions contenues dans cette méthode devront s'effectuer uniquement si le canard est toujours vivant _(alive)_ au moment de se faire tirer&nbsp;dessus.
      	- Modifiez la valeur de la propriété `alive` à `false` afin que le canard ne puisse plus se faire tirer une 2<sup>e</sup>&nbsp;fois. 
          - Mettez l'animation GSAP stockée dans la propriété `animation` sur pause afin que le canard arrête&nbsp;d'avancer.
          - Ajoutez la classe `lose` au canard afin que son animation sprite sheet se mette à&nbsp;jour.
          - Créez une nouvelle animation GSAP sur le canard lui donnant une nouvelle position sur les Y de 350 afin de simuler sa chute. Cette animation doit durer une seconde et s'effectuer sans&nbsp;easing. 
          - Lorsque cette animation est terminée, le canard devrait être caché derrière l'herbe, effacez alors l'élément HTML stocké dans la propriété `el` et à partir de votre variable `game` appelez la méthode `success` afin d'indiquer à l'usager qu'il a&nbsp;réussi.
      13. À la fin du constructeur, écouter si le canard se fait cliquer dessus. Si tel est le cas, appelez la méthode&nbsp;`lose` que vous venez de&nbsp;créer.
      14. Ajoutez propriété CSS nécessaire afin que le canard ne soit pas visible lorsqu'il dépasse du&nbsp;jeu.
  -
    type: text
    title: Bonus
    level: h2
    body: |
      Vous avez fini rapidement? Pourquoi ne pas en profitez pour bonifier votre&nbsp;jeu!
      
      1. Dans le constructeur de la classe `Duck`, pigez si le canard doit commencer à gauche ou à droite. S'il commence à droite, ajoutez-lui une classe faisant en sorte que sa tête pointe dans la bonne direction et modifiez son animation de sorte qu'il traverse le jeu de droite à gauche&thinsp;⬅️.
      2. Lorsque la méthode `lose` est appelée, déclenchez le son suivant afin de reproduire le son associé à la chute du canard&thinsp;🔊:
  -
    type: code
    lang: html
    body: 'https://ex.smnarnold.com/class-js/duck-hunt/sounds/fall.mp3'
is_hidden: false
title: Canards
template: page-exercice
color_scheme: auto
preview_color: '#000'
preview: /assets/previews/duck-hunt-canard.png
fieldset: page-article
id: b228eb3f-f91d-42d1-b8f6-72186bee4872
