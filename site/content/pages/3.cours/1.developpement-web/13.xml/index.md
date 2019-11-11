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
    type: text
    body: |
      Dans cet exemple, nous avons:
      
      - `<actor>` comme balise parent contenant toutes nos&nbsp;définitions.
      - `<firstname>`, `<lastname>` et `<picture>` contenant des informations sous forme de chaîne de&nbsp;caractères.
      - `<movies>` contenant une collection de&nbsp;de `<movie>`.
      - `<movie>` _(au singulier)_ représentant chacun un film&nbsp;séparé.
      - `<name>` et `<year>` représentant des informations propre à un&nbsp;film sous forme de chaîne de&nbsp;caractères.
  -
    type: text
    title: Structure
    level: h2
    body: |
      - Il ne doit y avoir qu'une balise à la racine du&nbsp;document.
      - Chaque balise ouvrante possède sa balise&nbsp;fermante.
      - Les balises doivent-être correctement&nbsp;imbriquées.
      - Les balises sont sensibles à la casse, donc la balise `<exemple>` n'est pas équivalente à&nbsp;`<EXEMPLE>`.
      - Les noms de balises ne peuvent pas contenir&nbsp;d'espaces.
  -
    type: note
    intent: tool
    body: '[xmlvalidation.com](https://www.xmlvalidation.com/) permet de valider vos fichiers XML.'
  -
    type: text
    title: Utilisation
    level: h2
    body: 'Le XML sert notamment aux fichiers de configurations ou pour dissocier le code du&nbsp;contenu.'
  -
    type: codepen
    id: pooNqbg
    theme: light
    ratio: 56
  -
    type: text
    body: |
      Il est donc possible d'utiliser le même code pour générer deux pages différente simplement en remplaçant la source du&nbsp;XML.
      
      Par exemple, dans la démo précédente, il suffit de remplacer
      [ryan-reynolds.xml](https://i.smnarnold.com/exercices/xml/ryan-reynolds.xml)
      par
      [margot-robbie.xml](https://i.smnarnold.com/exercices/xml/margot-robbie.xml)
      afin d'obtenir une page à l'apparence similaire, mais avec les informations de Margot plutôt que celles de&nbsp;Ryan.
fieldset: page-article
id: 43ad5628-9351-4130-8578-e21bcb90a422
