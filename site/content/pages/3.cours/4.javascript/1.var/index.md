title: Var
template: page-article
color_scheme: auto
body:
  -
    type: text
    body: 'Une variable est un conteneur&thinsp;📦 permettant de stocker une valeur afin d''y accéder plus tard. Cette valeur peut-être une chaîne de caractères <em>(string)</em>, un nombre, un booléen <em>(boolean)</em>,&nbsp;etc.'
  -
    type: text
    title: Définition
    level: h2
    body: |
      Pour en définir une, il suffit d'utiliser le mot réservé `var` suivi du nom que nous souhaitons lui attribuer. <em>(Ce nom sera ensuite utilisé pour y faire&nbsp;référence)</em>.
      
      Par&nbsp;exemple:
  -
    type: code
    lang: js
    body: 'var astronaute;'
  -
    type: text
    body: |
      - `var` indique qu'une variable s'apprête à être déclarée.
      - `astronaute` correspond au nom donné à la variable.
      
      Sur cette page&thinsp;📄, ouvrez l'inspecteur&thinsp;🕵️ de votre navigateur. Pour ce faire, faite un clic droit et sélectionner l'option `Inspecter` ou utiliser le raccourcis clavier <kbd>ctrl</kbd>+<kbd>i</kbd>. Ensuite, via la console, créer la variable `astronaute` comme dans l'exemple de code&nbsp;ci-dessus&thinsp;☝️.
      
      À partir de ce moment, la variable `astronaute` est définie globalement. Il est donc possible d'y accéder en l'appelant par son nom `astronaute`. La console du navigateur retournera alors la valeur qui lui est attribuée, soit: `undefined` puisqu'aucune valeur n'a encore été définie.
  -
    type: note
    intent: warning
    body: |
      La valeur `undefined` indique que la variable a été trouvée, mais qu'aucune valeur ne lui a encore été attribuée. Si la variable n'existait pas, un message d'erreur serait&nbsp;retourné.
      
      `ReferenceError: astronaute is not defined`
  -
    type: text
    title: Initialisation
    level: h2
    body: |
      Afin de stocker une valeur dans une variable, il faut séparer son nom de sa valeur en utilisant le symbole&nbsp;`=`.
      
      Par&nbsp;exemple, tapez la ligne suivante dans votre&nbsp;console.
  -
    type: code
    lang: js
    body: 'var astronaute = "Chris Hadfield";'
  -
    type: text
    body: 'Dès lors, si vous appelez la variable `astronaute`, elle vous retournera désormais la chaine de caractères: <em>"Chris&nbsp;Hadfield"</em>.'
  -
    type: text
    title: Modification
    level: h2
    body: |
      Une fois initialisée, il est possible de modifier la valeur d'une variable en l'appelant et en lui donnant une nouvelle&nbsp;valeur.
      
      Par exemple, encore dans la console,&nbsp;tapez:
  -
    type: code
    lang: js
    body: 'astronaute = "🇨🇦👨🏻‍🚀"'
  -
    type: text
    body: 'Si vous appelez la variable `astronaute`, elle ne vous retournera plus <em><del>"Chris Hadfield"</del></em>, mais bien: "🇨🇦👨🏻‍🚀".'
  -
    type: text
    title: 'Contexte (scope)'
    level: h2
    body: |
      Par défaut, si une variable n'est pas définie dans une fonction, son contexte est global. Il est donc possible d'y accéder partout simplement en l'appelant par son nom <em>(`astronaute`)</em> ou encore en utilisant l'objet window <em>(`window.astronaute`)</em>. 
      
      Les deux commandes retourneront "🇨🇦👨🏻‍🚀", puisqu'elles sont&nbsp;équivalentes.
      
      Cependant, le contexte d'une variable définie à l'intérieur d'une fonction se limite à celle-ci. Donc si vous tapez la fonction&nbsp;suivante
  -
    type: code
    lang: js
    body: |
      function creerStation() {
        var station = "Station spatiale internationale";
        console.log(station);
      }
      
      creerStation();
  -
    type: text
    body: 'Vous obtiendrez <em>"Station spatiale internationale"</em> comme attendu. Cependant, si vous&nbsp;tapez:'
  -
    type: code
    lang: js
    body: |
      function creerStation() {
        var station = "Station spatiale internationale";
      }
      
      creerStation();
      
      console.log(station);
  -
    type: text
    body: 'Vous obtiendrez un message d''erreur vous informant que la variable `station` n''existe pas. Ce qui est normal, puisqu''elle a été définie dans la fonction `creerStation() {...}` et que vous tentez d''y accéder à l''extérieur de celle-ci. Il s''agit donc d''une variable dite <strong>locale</strong>, d''on le contexte est limité à sa&nbsp;fonction.'
  -
    type: note
    intent: generic
    body: 'Les accolades d''une fonction <em>{}</em> sont en quelque sorte des barrières retenant les variables définies à l''intérieur&nbsp;prisonnières.'
  -
    type: text
    body: |
      Si une variable est définie à l'extérieur d'une fonction, il est quand même possible d'y accéder à partir de la fonction et de la&nbsp;modifier.
      
      Par exemple, si vous tapez les lignes suivantes dans la&nbsp;console:
  -
    type: code
    lang: js
    body: |
      var station;
      
      function creerStation() {
        station = "Station spatiale internationale";
      }
      
      creerStation();
      
      console.log(station);
  -
    type: text
    body: 'Vous obtiendrez quand même <em>"Station spatiale internationale"</em>, puisque la variable a été initialisée à l''extérieur de la fonction. Son contexte est donc global et non&nbsp;local.'
  -
    type: text
    title: 'Fuite (leak)'
    level: h2
    body: 'Comme [mentionné précédemment](#portee-scope), les variables ont un contexte global si elles ne sont pas définies à l''intérieur d''une fonction. Donc si vous tapez les lignes suivantes dans la&nbsp;console:'
  -
    type: code
    lang: js
    body: |
      var poidsISS = 420000; // kg
      var poidsVoiture = 1400; // kg
      
      if (poidsISS > poidsVoiture) {
        var comparable = poidsISS / poidsVoiture; 
        console.log(`Le poids de l'ISS = ${comparable} 🚘`);
      }
  -
    type: text
    body: |
      Vous obtiendrez <em>"Le poids de l'ISS = 300 🚘"</em>. Cependant, si vous tapez dans la console `comparable`, vous obtiendrez <em>300</em> et non un message d'erreur&thinsp;🤔. 
      
      On pourrait croire à tort que le contexte de la variable est limité aux accolades du `if {...}`. Cependant, le contexte d'une variable se trouvant à l'intérieur ne se trouve aucunement affecté par celle-ci. Donc dans le cas présent, la variable est quand même&nbsp;globale.
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article MDN🦖 portant sur les variables](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/var)'
fieldset: page-article
id: 569f62ef-2051-4c49-ab67-cec2509b5350
