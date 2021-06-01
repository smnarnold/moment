body:
  -
    type: text
    body: 'Le Fetch API va chercher une ressource se trouvant sur un autre serveur et nous la ramène afin que l''on puisse y accéder.'
  -
    type: note
    intent: generic
    body: 'Si vous avez déjà joué à _"va chercher"_ avec un chien, ou en anglais à _"fetch"_, vous comprenez déjà un peu le principe de base du Fetch&nbsp;API.'
  -
    type: text
    body: 'Examinons la structure de base d''une requête au fetch API'
  -
    type: code
    lang: js
    body: |
      fetch(url) // L'url de la ressource à aller chercher
      .then(() => { // Attendre que la ressource soit reçue
        // Traiter la ressource
      })
      .catch(() => {
        // Quoi faire si le serveur retourne une erreur
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
      fetch('https://ex.smnarnold.com/json/acteurs/ryan-reynolds.json')
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
    body: 'ou l''équivalent en [fonction&nbsp;fléchée](./fonctions-flechees):'
  -
    type: code
    lang: js
    body: |
      fetch('https://ex.smnarnold.com/json/acteurs/ryan-reynolds.json')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log('Une erreur est survenue'));
  -
    type: note
    intent: warning
    body: 'Remarquez comment avec la fonction fléchée le mot clé `return` n''est pas nécessaire puisque [le retour est&nbsp;implicite](https://smnarnold.com/cours/javascript/fonctions-flechees#retour-implicite).'
  -
    type: text
    body: |
      Dans cet exemple, nous avons:
      
      - `fetch(...)` déclarant que fecth&nbsp;API doit aller chercher le fichier à l'adresse fournie entre parenthèses et nous [retourner une&nbsp;promesse](https://smnarnold.com/cours/javascript/promesses).
      - `.then` ou en français _"ensuite"_ attend que le serveur tienne sa promesse et nous&nbsp;réponde.
      - `response` nom donné à l'objet retourné par fetch _(ce nom est&nbsp;arbitraire)_.
      - `return` indique qu'un élément sera retourné à un prochain&nbsp;`.then`
  -
    type: note
    intent: warning
    body: |
      `return` est nécessaire avec une fonction classique.
       🚫 avec une fonction&nbsp;fléchée.
  -
    type: text
    body: |
      - `.json()` indique que nous souhaitons appeler la méthode _.json()_ de l'objet `response`, afin de convertir son contenu en&nbsp;JSON.
      - `.then` attend que la promesse de conversion du contenu soit&nbsp;respectée.
      - `data` correspond au nom donné au JSON reçu. _(Encore une fois, ce nom est&nbsp;arbitraire)_.
  -
    type: text
    title: Exemples
    level: h3
    body: |
      - [Reddit](https://codepen.io/smnarnold/pen/ExxZapQ?editors=0010)
      - [Giphy](https://codepen.io/smnarnold/pen/KKKZByK?editors=0010)
  -
    type: note
    intent: exercice
    body: 'Exercice d''[interface Zoom](https://smnarnold.com/exercice/js/fetch-interface-zoom)&thinsp;👨‍👩‍👧‍👦'
  -
    type: text
    title: Post
    level: h2
    body: |
      Similaire à la méthode [GET](#get), la méthode POST se différencie par la présence d'un deuxième paramètre sous forme d'un objet JavaScript après&nbsp;l'url. 
      
      L'utilisation d'un objet, nous permet de ne pas exposer directement dans l'url certaines informations plus sensibles. Par exemple, une clé&nbsp;d'identification.
      
      Par exemple:
  -
    type: code
    lang: js
    body: |
      const token = '123456';
      const request = { ... }
      
      const settings = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify({ query: request })
      }
      
      fetch(url, settings)
      .then(() => {
          // Traiter la ressource
      })
      .catch(() => {
          // Indique quoi faire si le serveur retourne une erreur
      });
  -
    type: codepen
    id: 945ced3c5a8073639abc718fc7ec4c45
    theme: light
    ratio: 56
    tabs: result
  -
    type: text
    title: 'Conversion de réponses'
    level: h2
  -
    type: text
    body: |
      `.blob()` converti la réponse en blob _(utile pour les&nbsp;images)_
      `.text()` converti la réponse en texte _(utile pour le&nbsp;XML)_
      `.json()` converti la réponse en&nbsp;JSON
  -
    type: note
    intent: generic
    body: 'Dans la majorité des cas, nous utiliserons la méthode&nbsp;`.json()`'
  -
    type: note
    intent: exercice
    body: '[Exercice PokéAPI](https://smnarnold.com/exercice/js/fetch-pokeapi)'
  -
    type: note
    intent: tool
    body: '[Collection d''APIs publiques](https://github.com/public-apis/public-apis)'
is_hidden: false
title: Fetch
subtitle: 'get, post'
template: page-article
color_scheme: auto
preview_color: '#f6c972'
preview: /assets/previews/fetch.png
fieldset: page-article
id: d6e79bae-b3e3-4668-ba53-929510944d5d
