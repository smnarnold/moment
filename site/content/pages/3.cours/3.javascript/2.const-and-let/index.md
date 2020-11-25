title: 'Const & Let'
template: page-article
color_scheme: auto
body:
  -
    type: text
    body: '`let` et `const` permettent de stocker une valeur, au même titre que [var](./variables). Cependant, ils sont plus performants et permettent de régler certains problèmes associés à&nbsp;`var`.'
  -
    type: text
    title: Const
    level: h2
    body: 'La variable `const` est une abbréviation du terme _constante_. Par exemple, la variable `const film = "Wayne''s World"` ne pourra jamais être mise à jours. Une redéclaration, par exemple: `film = "Wayne''s World 2"`, entrainerait une&nbsp;erreur.'
  -
    type: code
    lang: js
    body: 'Uncaught SyntaxError: Identifier ''film'' has already been declared'
  -
    type: image
    image: /assets/articles/const-redeclaration.gif
  -
    type: text
    body: |
      Cependant, si une `const` contient un objet, redéclarer la valeur d'une de ses propriétés est&nbsp;valide.
      
      Par&nbsp;exemple:
  -
    type: code
    lang: js
    body: |
      const wayne = {
        ville: "Aurora",
        copine: "Stacy"
      };
  -
    type: text
    body: 'Suivi&nbsp;de:'
  -
    type: code
    lang: js
    body: 'wayne.copine = "Cassandra"'
  -
    type: text
    body: 'N''entraînera aucune&nbsp;erreur, puisque seulement une propriété et non l''objet en entier a été&nbsp;mis à&nbsp;jour.'
  -
    type: note
    intent: warning
    body: 'Si `const wayne = { ville: "Aurora", copine: "Stacy" };` avait été suivi de `wayne = { copine: "Cassandra" };`, une erreur aurait été générée, car l''ensemble de la variable `wayne` aurait été remplacée par un nouvel&nbsp;objet.'
  -
    type: note
    intent: good
    body: 'Pour en savoir, lire cet [article de Mathias Bynens traitant de const](https://mathiasbynens.be/notes/es6-const)'
  -
    type: text
    title: Let
    level: h2
    body: 'Contrairement à [const](#const), la variable `let` est plus permissive et peut être mise à jour sans&nbsp;problème.'
  -
    type: text
    title: 'Contexte (scope)'
    level: h2
    body: |
      `let` et `const` ont un contexte de bloc. Leur contexte est donc toujours limité par les accolades _{}_, que ce soit celles d'une fonction ou encore celles d'un&nbsp;`if`.
      
      Par exemple:
  -
    type: code
    lang: js
    body: |
      let voiture = false;
      let engagement = false;
      
      if (voiture === false) {
        let engagement = true;
        console.log(engagement) // true
      }
      
      console.log(engagement) // false
  -
    type: text
    body: |
      Ceci est possible, car les deux variables `engagement` sont considérées comme étant deux variables différentes, puisqu'elles ont un contexte&nbsp;différent. 
      
      Tandis que [les variables définies avec `var` ont un contexte de fonction](./variables#contexte-scope). Leur contexte est donc global, à moins de se trouver entre les accolades _{}_ d'une fonction.
      
      Le même exemple produirait donc le résultat&nbsp;suivant.
  -
    type: code
    lang: js
    body: |
      var voiture = false;
      var engagement = false;
      
      if (voiture === false) {
        var engagement = true;
        console.log(engagement) // true
      }
      
      console.log(engagement) // true
  -
    type: text
    title: 'Redéfinition d''une variable'
    level: h2
    body: |
      Imaginons la variable suivante `var film = "Wayne's world"` et que plus tard, par manque d'imagination, une nouvelle variable est définie à nouveau avec le même nom: 
      `var film = "Wayne's world 2"`.
      
      Que ce passera&nbsp;t'il?
      
      Il serait logique de croire que JavaScript nous avertira que la variable `film` existe déjà et donc qu'elle ne peut pas être&nbsp;recréée. 
      
      Malheureusement, une variable définie via le mot-clé `var` accepte d'être définie plusieurs fois&thinsp;🤦‍♂️. Chaque nouvelle définition ne fait que mettre à jour la valeur assignée à la variable, ce qui peut engendrer des erreurs difficiles à&nbsp;repérer.
      
      Heureusement, une variable définie avec `let` ou `const` nous avertira si nous tentons de créer une deuxième variable utilisant le même&nbsp;nom.
  -
    type: code
    lang: js
    body: 'Uncaught SyntaxError: Identifier ''film'' has already been declared'
  -
    type: text
    title: 'Choisir entre var, const et let'
    level: h2
    body: |
      Choisir entre `var`, `const` et `let` peut être un&nbsp;dilemme. 
      
      Prenant pour acquis qu'une variable `const` expose la vocation d'une variable plus explicitement, puisqu'elle indique une valeur qui ne devrait jamais changée, contrairement à `let` et `var` et considérant les avantages de `const` et `let` sur `var`, cet ordre d'utilisation ce veut une bonne règle du pouce&thinsp;👍
      
      1. `const` _(par défaut)_
      2. `let` si une variable doit être&nbsp;réassignée
      3. `var` en dernier recours
  -
    type: note
    intent: good
    body: |
      Pour en savoir plus, voir cet [article MDN🦖 traitant de const](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/const) 
      et cet [article traitant de let](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/let).
fieldset: page-article
id: 34b11b20-d84b-4224-af8a-31500a06d9aa
