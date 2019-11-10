title: Json
template: page-article
color_scheme: auto
body:
  -
    type: image
    image: /assets/articles/xml-vs-json.jpg
  -
    type: code
    lang: js
    body: |
      {
        firstname: "Ryan",
        lastname: "Reynolds",
        picture: "https://bit.ly/2MYKFhO",
        movies: [
          {
            name: "Pokémon Detective Pikachu",
            year: "2019"
          },
          {
            name: "Deadpool 2",
            year: "2018"
          },
          {
            name: "Deadpool",
            year: "2016"
          }
        ]
      }
  -
    type: codepen
    id: jOOVdOm
    theme: light
    ratio: 56
  -
    type: note
    intent: exercice
    body: '[codepen.io/smnarnold/pen/poowGYN](https://codepen.io/smnarnold/pen/poowGYN)'
  -
    type: note
    intent: tool
    body: '[jsonlint.com/](https://jsonlint.com/) permet de valider votre Json.'
fieldset: page-article
id: b15313ae-9e9f-4528-82e6-72eab0af421a
