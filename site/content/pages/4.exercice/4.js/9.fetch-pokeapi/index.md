body:
  -
    type: text
    body: |
      Pour cet exercice nous allons créez un microsite permettant de déterminer quel Pokémon parmi 1118 choisirait l'usager de façon ludique. Pour ce faire nous aurons recours au service de&nbsp;[PokéAPI](https://pokeapi.co/).
      
      Un [Pen de départ](https://codepen.io/smnarnold/pen/BapMEWp) vous est fourni. Vous n'avez qu'à écrire du JS _(nul besoin de modifier le HTML ou le&nbsp;CSS)_.
      
      Aperçu du résultat:
  -
    type: image
    image: /assets/articles/fetch-pokeapi.mp4
  -
    type: text
    title: Requis
    level: h2
    body: |
      1. Créez-vous une nouvelle classe intitulée&nbsp;_"Pokemon"_.
      2. Lorsque le menu déroulant change de valeur, instanciez un nouveau Pokémon à partir de votre classe et passez-lui en paramètre la valeur du dit menu déroulant. Par exemple:&nbsp;_"grass"_.
      3. Dans le constructeur, retirez la classe `.reveal` du body, effacez le texte à l'intérieur de la balise `.name` et [appelez PokéAPI afin d'obtenir la liste des Pokémons correspondant au type](https://pokeapi.co/docs/v2#types) reçu en&nbsp;paramètre.
  -
    type: note
    intent: generic
    body: 'Faites un console log du résultat reçu afin de vous assurez qu''il retourne bien un objet contenant des propriétés relatives au type de Pokémon&nbsp;sélectionné.'
  -
    type: text
    body: |
      4. Si le résultat de l'état précédent est bon, créez-vous une nouvelle méthode intitulée `getRandomPokemon`. Plutôt que d'effectuer un console log dans l'étape précédente, appelez cette méthode et passez lui en paramètre la propriété du résultat précédent contenant tous les Pokémons du type en&nbsp;question.
      5. Dans la méthode `getRandomPokemon`, déterminez le nombre de Pokémons reçu en paramètre et basez-vous sur ce nombre afin d'en piger un&nbsp;aléatoirement.
  -
    type: note
    intent: generic
    body: 'Faites un console log du Pokémon pigé afin de voir les propriétés que contient son&nbsp;objet.'
  -
    type: text
    body: '6. À partir du Pokémon sélectionné, appelez à nouveau PokéAPI, mais cette fois utilisez l''URL fournie dans l''objet du Pokémon sélectionné lors de l''étape&nbsp;précédente.'
  -
    type: note
    intent: generic
    body: 'Faites un console log du résultat. Vous devriez obtenir un objet JavaScript décrivant en détail le Pokémon&nbsp;sélectionné.'
  -
    type: text
    body: |
      7. Créez-vous une nouvelle méthode intitulée `showPokemon`. Remplacez le console log de l'étape précédente par un appel à cette méthode et passez-lui en paramètre l'objet JavaScript de votre Pokémon.
      8. Dans la classe `showPokemon`, ajoutez la classe `.reveal` au body _(déclenche l'ouverture de la pokéball)_, insérez le nom de votre Pokémon dans la balise avec la classe `.name` et l'image de son sprite par défaut dans l'élément avec la classe&nbsp;`.media`&thinsp;🌄.
  -
    type: text
    title: Bonus
    level: h2
    body: |
      1. Ajoutez un menu déroulant supplémentaire laissant le choix du genre à l'usager _(masculin/féminin)_. Basez-vous ensuite sur cette information afin d'affichez le bon&nbsp;sprite.
      2. Ajoutez un troisième menu déroulant supplémentaire permettant le choix entre les options _"Par défaut"_ et _"Shiny"_. Combinez ce choix à celui du genre afin d'afficher le sprite correspondant du&nbsp;Pokémon.
  -
    type: text
    title: 'Notes de cours'
    level: h2
    body: |
      - [Fetch](https://smnarnold.com/cours/javascript/fetch)
      - [Classes JS](https://smnarnold.com/cours/javascript/class)
is_hidden: false
title: 'Fetch - PokéAPI'
template: page-exercice
color_scheme: auto
preview_color: '#000'
fieldset: page-article
id: a49c56c9-edaa-411c-82db-8ef53a0bb6a1
