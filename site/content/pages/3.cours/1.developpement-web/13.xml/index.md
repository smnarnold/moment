title: XML
template: page-article
color_scheme: auto
body:
  -
    type: text
    body: |
      Le XML, ou e**X**tensible **M**arkup **L**anguage, permet de stocker des données structurées dans un fichier. Il s'agit d'un langage balisé, au même titre que le HTML. Cependant, contrairement à ce dernier, les balises XML ne sont pas prédéfinies. 
      
      Par exemple:
  -
    type: code
    lang: html
    body: |
      <actor>
        <firstname>Ryan</firstname>
        <lastname>Reynolds</lastname>
        <picture>https://bit.ly/2MYKFhO</picture>
        <movies>
          <movie>
            <name>Pokémon Detective Pikachu</name>
            <year>2019</year>
          </movie>
          <movie>
            <name>Deadpool 2</name>
            <year>2018</year>
          </movie>
          <movie>
            <name>Deadpool</name>
            <year>2016</year>
          </movie>
        </movies>
      </actor>
  -
    type: note
    intent: tool
    body: '[xmlvalidation.com](https://www.xmlvalidation.com/) permet de valider vos fichiers XML.'
  -
    type: codepen
    id: pooNqbg
    theme: light
    ratio: 56
fieldset: page-article
id: 43ad5628-9351-4130-8578-e21bcb90a422
