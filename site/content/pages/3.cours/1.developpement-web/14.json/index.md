title: Json
template: page-article
color_scheme: auto
body:
  -
    type: text
    body: 'Le JSON, ou **J**avaScript **O**bject **N**otation, tout comme le [XML](./xml), est un format permettant de stocker de l’information structurée. Cependant, contrairement à ce dernier, sa structure est inspiré des objets javascript plutôt que du HTML. Ce qui le rend plus rapide à décoder, lire et écrire que le&nbsp;XML.'
  -
    type: image
    image: /assets/articles/xml-vs-json.jpg
  -
    type: text
    body: 'Reprenons l''exemple de Ryan Reynolds, mais cette fois en&nbsp;JSON.'
  -
    type: code
    lang: js
    body: |
      {
        "firstname": "Ryan",
        "lastname": "Reynolds",
        "picture": "https://bit.ly/2MYKFhO",
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
    body: 'Le JSON s''écrit sour forme de définitions contenant chacune une _clés_ et une _valeurs_.'
  -
    type: text
    title: 'Règles de base'
    level: h3
    body: |
      - Il doit y avoir un objet ou un tableau à la racine du document qui englobe l'ensemble des&nbsp;définitions.
      - Chaque clé doit-être en guillemets doubles. _(ex:&nbsp;"firstname")_
      - Un double point `:` doit séparer chaque clé de sa définition. _(ex:&nbsp;"firstname":&nbsp;"Ryan")_
      - Les valeurs peuvent avoir les forme&nbsp;suivantes:
      	- Une string _(ex:&nbsp;"Ryan")_
          - Un nombre: _(ex:&nbsp;2019)_
          - Un boolean: _(true/false)_
          - Un objet: _{ ... }_
      	- Un tableau _[ ... ]_
      - Chaque déclaration doit se terminé par une virgule `,`, sauf si cette déclaration est la dernière de son&nbsp;bloc.
  -
    type: note
    intent: tool
    body: '[jsonlint.com/](https://jsonlint.com/) permet de valider votre JSON.'
  -
    type: note
    intent: exercice
    body: '[codepen.io/smnarnold/pen/poowGYN](https://codepen.io/smnarnold/pen/poowGYN)'
  -
    type: text
    title: Utilisation
    level: h2
    body: |
      Le JSON peut être utilisé pour différentes raisons, notamment pour stocker des configurations:
      
      Par exemple, des thèmes de couleurs.
      
      <script>
        var demoJson = function() {
          fetch('https://i.smnarnold.com/colors/colors.json')
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
    id: jOOVdOm
    theme: light
    ratio: 56
  -
    type: text
    body: |
      Il est donc possible d'utiliser le même code pour générer deux pages différente simplement en remplaçant la source du json.
      
      Par exemple, dans la démo précédente, il suffit de&nbsp;remplacer
      [ryan-reynolds.json](https://i.smnarnold.com/exercices/json/ryan-reynolds.json)
      par
      [margot-robbie.json](https://i.smnarnold.com/exercices/json/margot-robbie.json)
      afin d'obtenir une page à l'apparence similaire, mais avec les informations de Margot plutôt que celles de&nbsp;Ryan.
  -
    type: note
    intent: generic
    body: 'Le JSON est beaucoup plus facile à manipuler en Javascript puisqu''il ressemble déjà aux objets&nbsp;javascript.'
fieldset: page-article
id: b15313ae-9e9f-4528-82e6-72eab0af421a
