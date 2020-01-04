title: 'Fetch API'
template: page-article
color_scheme: auto
body:
  -
    type: text
    body: 'Le Fetch API va chercher une ressource se trouvant sur un autre serveur et nous la ramène afin que l''on puisse y accéder.'
  -
    type: note
    intent: generic
    body: 'Si vous avez déjà joué à _"va chercher"_ avec un chien, ou en anglais à _"fetch"_, vous comprenez déjà le principe de base du Fetch API.'
  -
    type: text
    body: 'Examinons la structure de base d''une requête au fetch API'
  -
    type: code
    lang: js
    body: |
      fetch(url) // L'url de la ressource à aller chercher
      .then(function() { // Attendre que la ressource soit reçue
          // Traiter la ressource
      })
      .catch(function() {
          // Indique quoi faire si le serveur retourne une erreur
      });
  -
    type: text
    title: Get
    level: h2
    body: |
      Par défaut, le fetch API utilise la méthode GET, ce qui nous permet de simplement déclarer l'url de la ressource que nous désirons obtenir.
      
      Par exemple:
  -
    type: code
    lang: js
    body: |
      fetch('https://i.smnarnold.com/exercices/json/ryan-reynolds.json')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);
      })
      .catch(function(error) {
        console.log('Une erreur est survenue')
      })
  -
    type: text
    body: |
      Dans cet exemple, nous avons:
      
      - `fetch(...)` déclare que nous souhaitons utiliser le fecth API pour aller chercher le fichier json à l'adresse fournie entre&nbsp;parenthèses.
      - `.then` ou en français _"ensuite"_ attend que le serveur nous&nbsp;réponde.
      - `response` nom donné à l'objet retourné par fetch _(Ce nom est arbitraire, nous aurions pu lui en donner un autre nom si nous le&nbsp;souhaitions)_.
      - `return` indique qu'un élément sera retourné à un prochain&nbsp;`.then`.
      - `.json()` indique que nous souhaitons appeler la méthode _.json()_ de l'objet `response`, afin de convertir son contenu en&nbsp;Json.
      - `.then` attend que la conversion soit&nbsp;terminée
      - `data` indique le nom donné au Json reçu. _(Encore une fois, ce nom est&nbsp;arbitraire)_.
  -
    type: text
    title: Exemples
    level: h3
    body: |
      - [Reddit](https://codepen.io/smnarnold/pen/ExxZapQ)
      - [Giphy](https://codepen.io/smnarnold/pen/KKKZByK)
  -
    type: note
    intent: exercice
    body: '[codepen.io/smnarnold/pen/GRREbKb](https://codepen.io/smnarnold/pen/GRREbKb)'
  -
    type: text
    title: Post
    level: h2
    body: |
      Similaire à la méthode [GET](#get), la méthode POST se différencie par la présence d'un deuxième paramètre sous forme d'un objet javascript après&nbsp;l'url. 
      
      L'utilisation d'un objet, nous permet de ne pas exposer directement dans l'url certaines informations plus sensible. Par exemple, une clé&nbsp;d'identification.
      
      Exemple:
  -
    type: code
    lang: js
    body: |
      var token = '123456';
      var request = { ... }
      
      var settings = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify({ query: request })
      }
      
      fetch(url, settings)
      .then(function() {
          // Traiter la ressource
      })
      .catch(function() {
          // Indique quoi faire si le serveur retourne une erreur
      });
  -
    type: codepen
    id: BaBzvVe
    theme: light
    ratio: 56
  -
    type: text
    title: Réponses
    level: h2
  -
    type: text
    body: |
      `.blob()` pour convertir la réponse en blob _(utile pour le traitement d'une&nbsp;image)_.
      `.text()` pour convertir la réponse en texte _(utile pour le traitement du&nbsp;XML)_
      `.json()` pour convertir la réponse en&nbsp;Json
  -
    type: note
    intent: generic
    body: 'Dans la grande majorité des cas, nous utiliserons la méthode `.json`'
fieldset: page-article
id: d6e79bae-b3e3-4668-ba53-929510944d5d
