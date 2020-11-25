title: Console
template: page-article
color_scheme: auto
body:
  -
    type: text
    body: 'La console du navigateur est l''une des armes les plus utiles du développeur. Elle permet, entre autre, d''afficher des messages&thinsp;💬 à des moments précis, ce qui permet au développeur de traquer les  bugs&thinsp;🐞 qu''il rencontre afin de remonter jusqu''à leurs&nbsp;origines.'
  -
    type: quote
    body: 'Déboguer, c''est comme être le détective dans un _thriller_... et le meutrier en même temps!'
    firstname: Filipe
    lastname: Fortes
    title: Développeur
    picture: /assets/persons/filipe-fortes.jpg
    source: 'https://twitter.com/fortes/status/399339918213652480'
  -
    type: text
    body: |
      Pour afficher la console, il faut ouvrir l'inspecteur du navigateur. 
      
      - Windows: <kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>i</kbd> ou <kbd>F12</kbd>
      - Mac: <kbd>command</kbd>+<kbd>option</kbd>+<kbd>i</kbd> ou <kbd>F12</kbd>
      
      Et sélectionner l'onglet&nbsp;_Console_.
  -
    type: text
    title: Log
    level: h2
    body: |
      La méthode `log` est la façon générique d'écrire _(ou en anglais de logger)_ un message dans la&nbsp;console. 
      
      Par exemple, pour inscrire _Bonjour_, il suffit&nbsp;d'écrire:
  -
    type: code
    lang: js
    body: 'console.log("Bonjour");'
  -
    type: text
    body: 'Contrairement à `alert("...")`, qui stop l''execution de la page afin d''afficher un message, `console.log("...")` laisse la page s''exécuter normalement et affiche les messages à l''intérieur de la&nbsp;console.'
  -
    type: image
    image: /assets/articles/drake-console.jpg
  -
    type: text
    body: |
      <script>window.demo = "🤘 Félicitation, vous avez réussi à afficher la valeur de la variable démo!"</script>
      `console.log()` permet d'afficher différents types&nbsp;d'informations:
      
      - Chaine de caractères
      - Booléan
      - Tableau
      - Objet
      - Etc.
      
      Par exemple, sur cette page ouvrez la console et faites afficher le contenu de la variable&nbsp;_demo_.
  -
    type: note
    intent: generic
    body: 'Un `console.log()` placé au début d''une fonction permet de valider rapidement si elle est exécutée ou si une erreur en amont empêche son&nbsp;exécution.'
  -
    type: text
    title: '❌ Error'
    level: h2
    body: |
      La méthode `error` de la console permet d'afficher un message d'erreur sur fond rouge avec le préfix&thinsp;❌.
      
      Lorsqu'une erreur survient, un message constitué d'une brève description du problème et d'un lien contenant le nom du fichier et le numéro de la ligne où il se trouve est affiché dans la console. En cliquant sur ce lien, un aperçu de la ligne fautive sera affichée afin de fournir une piste de&nbsp;recherche.
      
      Par exemple, si une fonction JavaScript appelle la variable `demo` dans le fichier `main.js` à la ligne 20, mais que cette variable n'est pas définit, un message d'erreur semblable à celui ci-dessous&thinsp;👇 sera retourné dans la&nbsp;console:
  -
    type: image
    image: /assets/articles/console-error.jpg
  -
    type: text
    body: 'Si désiré, il est possible de générer ses propres messages d''erreur. Pour ce faire, il faut utiliser la commande&nbsp;suivante:'
  -
    type: code
    lang: js
    body: 'console.error("...");'
  -
    type: text
    title: '⚠️ Warn'
    level: h2
    body: |
      Similaire à [log](#log) et [error](#error), la méthode `warn` permet d'afficher un message d'avertissement sur fond jaune avec le préfix&thinsp;⚠️. 
      
      Cette fonctionnalité est généralement utilisée afin d'avertir les développeurs d'un risque potentiel. Par exemple, lorsqu'une librairie s'apprête à effectuer une mise à jours pouvant avoir des répercussions négatives si certaines actions ne sont pas effectuées, il est probable qu'elle inclut un&nbsp;avertissement.
      
      Si désiré, il est possible de générer ses propres messages d'avertissement. Pour ce faire, il faut utiliser la commande&nbsp;suivante:
  -
    type: code
    lang: js
    body: 'console.warn("...");'
  -
    type: text
    title: Table
    level: h2
    body: |
      <script>const albums = ["Licensed to Ill","Paul's Boutique","Check Your Head","Ill Communication","Hello Nasty","To the 5 Boroughs","The Mix-Up","Hot Sauce Committee Part Two"]</script>
      La méthode `console.table` permet d'afficher les données d'un tableau _(array)_ ou d'un objet _(object)_ dans un tableau similaire à l'affichage de données dans un fichier Excel ou une Google Spreadsheet.
fieldset: page-article
id: 4c17d370-137e-4da7-a5de-5e63f7496ff9
