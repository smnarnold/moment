body:
  -
    type: text
    body: 'Le JSON, ou **J**avaScript **O**bject **N**otation, tout comme le [XML](./xml), est un format permettant de stocker de l’information structurée. Cependant, contrairement à ce dernier, sa structure est inspirée des objets JavaScript plutôt que du HTML. Ce qui le rend plus rapide à décoder, lire et écrire que le&nbsp;XML.'
  -
    type: image
    image: /assets/articles/xml-vs-json.jpg
  -
    type: text
    body: 'Par exemple, les informations relatives à la carrière de Ryan Reynolds en format JSON pourrait ressembler à&nbsp;ceci.'
  -
    type: code
    lang: js
    body: |
      {
        "firstname": "Ryan",
        "lastname": "Reynolds",
        "picture": "https://ex.smnarnold.com/json/acteurs/ryan-reynolds.jpg",
        "movies": [
          {
            "name": "Pokémon Detective Pikachu",
            "year": 2019
          },
          {
            "name": "Deadpool 2",
            "year": 2018
          },
          {
            "name": "Deadpool",
            "year": 2016
          }
        ]
      }
  -
    type: text
    title: Structure
    level: h2
    body: |
      Le JSON s'écrit sous forme de définitions contenant chacune une _clé_ et une _valeur_.
      
      par exemple: `clé` : `valeur`
  -
    type: text
    title: 'Règles de base'
    level: h3
    body: '- Il doit y avoir un objet `{...}` ou un tableau `[...]` à la racine du document englobant l''ensemble des&nbsp;définitions.'
  -
    type: note
    intent: warning
    body: '[Il ne peut n''y en avoir&nbsp;qu''un](https://www.youtube.com/watch?v=sqcLjcSloXs).'
  -
    type: text
    body: |
      - Chaque clé doit-être entre guillemets&nbsp;doubles. 
      Par exemple: `"firstname"`.
      
      - Un double point `:` doit séparer chaque clé de sa&nbsp;définition. 
      Par exemple: `"firstname": "Ryan"`.
      
      - Les valeurs peuvent avoir les formes&nbsp;suivantes:
      	- Une string `"Ryan"`
          - Un nombre: `2019`
          - Un boolean: `true` ou&nbsp;`false`
          - Un objet: `{...}`
      	- Un tableau `[...]`
      - Chaque déclaration doit se terminer par une virgule `,`, sauf si cette déclaration est la dernière de son&nbsp;bloc.
  -
    type: note
    intent: tool
    body: |
      Extensions permettant de visualiser du JSON dans son navigateur:
      [JSONView Chrome/Edge](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=fr) et [JSONView Firefox](https://addons.mozilla.org/fr/firefox/addon/jsonview/)
  -
    type: note
    intent: tool
    body: 'Validateur de JSON: [jsonlint.com](https://jsonlint.com/)'
  -
    type: note
    intent: exercice
    body: 'Exercice [Pizzeria JSON](https://smnarnold.com/exercice/js/json-pizzeria)&thinsp;🍕'
  -
    type: text
    title: Utilisation
    level: h2
    body: |
      Le JSON peut être utilisé pour différentes raisons, notamment pour stocker des configurations:
      
      Par exemple, des thèmes de couleurs.
      
      <script>
        var demoJson = function() {
          fetch('//i.smnarnold.com/colors/colors.json')
          .then(response => response.json())
          .then(result => {
            const index = Math.round(Math.random() * result.length);
            document.documentElement.style.setProperty('--primary', `#${result[index][0]}`);
            document.documentElement.style.setProperty('--secondary', `#${result[index][1]}`);
          }); 
        }
      </script>
      
      <button style="background: var(--secondary); color: var(--primary); font-size: 1em; border-radius: 100px; border: 0; padding: 0.5em 1em;" onclick="demoJson()">Configuration de couleurs</button>	
      
      Ou pour permettre de séparer le code du contenu.
  -
    type: codepen
    id: c3adcea0e397998087f34382d47b8809
    theme: light
    ratio: 56
    tabs: result
  -
    type: text
    body: |
      Il est donc possible d'utiliser le même code pour générer deux pages différentes simplement en remplaçant la source du&nbsp;json.
      
      Par exemple, dans la démo précédente&thinsp;☝️, il suffit de remplacer `ryan-reynolds.json` par `margot-robbie.json` afin d'obtenir une page à l'apparence similaire, mais avec les informations de Margot plutôt que celles de&nbsp;Ryan.
  -
    type: note
    intent: generic
    body: 'Le JSON est beaucoup plus facile à manipuler en JavaScript puisqu''il ressemble déjà aux objets&nbsp;JavaScript.'
is_hidden: false
title: JSON
template: page-article
color_scheme: auto
preview_color: '#000'
preview: /assets/previews/json.jpg
fieldset: page-article
id: b15313ae-9e9f-4528-82e6-72eab0af421a
