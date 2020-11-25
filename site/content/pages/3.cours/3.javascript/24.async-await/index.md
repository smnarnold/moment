title: 'Async & Await'
template: page-article
color_scheme: auto
body:
  -
    type: text
    body: |
      Nous avons vu précédemment comment récupérer des informations sur un serveur distant grâce à&nbsp;[fetch()](./fetch-api). 
      
      Par exemple, pour récupérer les informations d'une personne fictive, il est possible d'effectuer un appel à l'API de [randomuser.me/api](https://randomuser.me/api?results=1)
  -
    type: code
    lang: js
    body: |
      fetch("https://randomuser.me/api?results=1")
        .then(response => response.json())
        .then(data => console.log(data));
  -
    type: text
    body: 'Ce code affiche dans la console un objet contenant les différentes informations d''une personne&nbsp;fictive:'
  -
    type: code
    lang: js
    body: |
      {
        gender: "female",
        name: {
          first: "Eléonore",
          last: "Gonzalez",
          title: "Ms",
        },
        nat: "FR"
      }
  -
    type: text
    body: |
      Imaginons que des informations supplémentaires sur le pays _(FR&thinsp;🇫🇷)_ de cette personne soient demandés. Un appel à un deuxième API [restcountries.eu](https://restcountries.eu/rest/v2/alpha/) spécifiant le pays désiré serait requis afin d'obtenir ces&nbsp;informations.
      
      Le code ressemblerait alors à&nbsp;ceci:
  -
    type: code
    lang: js
    body: |
      function getPeople() { 
        fetch("https://randomuser.me/api?results=1")
          .then(responseUser => responseUser.json())
          .then(dataUser => {
            const user = dataUser.results[0];
              
            fetch(`https://restcountries.eu/rest/v2/alpha/${user.nat}`)
              .then(responseCountry => responseCountry.json())
              .then(dataCountry => {
                console.log({
                  user: user,
                  country: dataCountry
                });
              });
          });
      }
      
      getPeople();
  -
    type: note
    intent: generic
    body: 'Exemple en ligne [codepen.io/smnarnold/pen/MWeREvq](https://codepen.io/smnarnold/pen/MWeREvq?editors=0010)'
  -
    type: text
    body: |
      Ce code n'est pas mauvais. Il fonctionne, mais certains éléments donnent envie de grincer des&nbsp;dents.
      
      Remarquez comment les `.then()` sont imbriqués les uns à la suite des autres. Imaginez qu'avec les informations du pays, vous deviez appeler un autre API supplémentaire et ainsi de suite, vous, vous retrouveriez avec ce que l'on appelle un _callback hell_&thinsp;👿, soit plusieurs _callbacks_ imbriqués les uns dans les autres, rendant la lecture du code et le débogage&nbsp;ardu.
      
      Voici le résultat obtenu dans la&nbsp;console:
  -
    type: code
    lang: js
    body: |
      {
        user: {
          gender: "female",
          name: {
            first: "Eléonore",
            last: "Gonzalez",
            title: "Ms",
          },
          nat: "FR"
        },
        country: {
          capital: "Paris",
          name: "France",
          population: 66710000,
          region: "Europe"
        }
      }
  -
    type: text
    title: 'Async et Await à la rescousse'
    level: h2
    body: |
      Il est heureusement possible de rendre ce code plus lisible et plus facilement&nbsp;déboguable. 
      
      Pour ce faire, une fonction doit retournee un résultat de façon asynchrone, bref que son `return` soit une promesse _(promise)_ et non une valeur&nbsp;directement. 
      
      Le mot-clé `async` préfixant une fonction permet d'effectuer cette conversion. Par exemple, une fonction synchrone de base ressemble à&nbsp;ceci:
  -
    type: code
    lang: js
    body: |
      function demo() {
        return "Résultat";
      }
      
      console.log(demo());
      // Résultat
  -
    type: text
    body: 'Pour la convertir en fonction asynchrone, il suffit de la préfixer avec&nbsp;`async`:'
  -
    type: code
    lang: js
    body: |
      async function demo() {
        return "Résultat";
      }
      
      console.log(demo());
      // [object Promise] {}
  -
    type: note
    intent: warning
    body: 'Remarquez que le retour est une promesse et non une valeur&nbsp;directement.'
  -
    type: text
    body: 'Pour accéder à la valeur dans la promesse _(promise)_, il faut attendre que celle-ci soit complétée. À ce moment, la méthode `.then()` est invoquée et la valeur associée à la fonction lui est passée en paramètre, il est donc finalement possible d''y&nbsp;accéder.'
  -
    type: code
    lang: js
    body: |
      async function demo() {
        return "Résultat";
      }
      
      demo() // 👈 retourne une promesse
        .then(data => { // promesse ✅, voici sont contenu
          console.log(data) // affiche le contenu de la promesse
        });
      // Résultat
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article de MDN🦖 à propos de&nbsp;async](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/async_function).'
  -
    type: text
    body: |
      Contrairement à une fonction synchrone de base, qui tente de répondre immédiatement, cette fonction asynchrone retourne maintenant une promesse _(promise)_ de répondre prochainement. 
      
      Elle peut donc se permettre d'attendre le résultat d'un `.fetch()` grâce à `await` avant de&nbsp;répondre.
      
      Dans l'exemple de l'usager fictif, d'on la nationalité est utilisée en deuxième temps pour allez récupérer des informations supplémentaires sur son pays, pourrait donc être refait ainsi avec `async` et&nbsp;`await`:
  -
    type: code
    lang: js
    body: |
      async function getPeople() { 
        const user = await getUser();
        const country = await getCountry(user.nat);
      
        return {
          user,
          country
        }
      }
      
      function getUser() {
        return fetch("https://randomuser.me/api?results=1")
          .then(response => response.json())
          .then(data => data.results[0]);
      };
      
      function getCountry(country) {
        return fetch(`https://restcountries.eu/rest/v2/alpha/${country}`)
          .then(response => response.json())
          .then(data => data);
      };
      
      getPeople()
        .then(data => {
          console.log(data);
        });
  -
    type: note
    intent: warning
    body: 'Gardez à l''esprit que `await` ne peut être utilisé uniquement qu''à l''intérieur d''une fonction&nbsp;`async`.'
  -
    type: note
    intent: generic
    body: 'Exemple en ligne [codepen.io/smnarnold/pen/GRqLvLJ](https://codepen.io/smnarnold/pen/GRqLvLJ?editors=0010)'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article de MDN🦖 sur&nbsp;await](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/await)'
fieldset: page-article
id: c82b795e-6466-4b3c-9119-af1e183213d7
