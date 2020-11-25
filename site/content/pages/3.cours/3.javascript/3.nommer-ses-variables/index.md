title: 'Nommer ses variables'
template: page-article
color_scheme: auto
body:
  -
    type: text
    body: |
      Soyons honnête, la programmation peut être ardue par moment. Un bon moyen de se simplifier la vie et d'éviter des erreurs de base est de bien nommer ses&nbsp;variables.
      
      Idéalement un nom de variable devrait-être descriptif de ce qu'il contient. Quitte à le rendre plus&nbsp;long.
  -
    type: note
    intent: generic
    body: 'En règle générale, le temps sauvé en racourcissant de quelques lettres un nom de variable ne vaut pas le temps perdu en compréhension/explications.'
  -
    type: text
    body: |
      À éviter:
      
      - 🚫 noms d'une seule lettre
      - 🚫 acronymes
      - 🚫 abréviations
      - 🚫 noms vides de sens
      - 🚫 métaphores
      - 🚫 mix de langues
  -
    type: code
    lang: js
    body: |
      // Noms d'une seule lettre
      const a; // Qu'est-ce que a? 😱 
      
      // Acronymes
      const arc; // Agence du revenu du 🇨🇦, vous auriez deviné?
      
      // Abréviations
      const cat; // Comme dans 🐈 ou catégorie?
      
      // Noms vides de sens
      const thing; // Mais encore...
      
      // Métaphores
      const killSwitch; // Reset du formulaire ou X du popup? 🧐
      
      // Mix de langues
      const flecheBlue; // Ou est-ce bleuArrow déjà? 🤦‍♂️
  -
    type: text
    title: Booléen
    level: h2
    body: 'Une variable de type booléen est facilement identifiable lorsqu''elle est préfixée par un statut se répondant par vrai ou faux. Par exemple: `is`, `has` ou&nbsp;`can`.'
  -
    type: code
    lang: js
    body: |
      // 🚫 À éviter
      let person = true;
      let access = true;
      let move = true;
      
      // 👌 Avec un préfix
      let isPerson = true;
      let hasAccess = true;
      let canMove = true;
  -
    type: text
    body: 'Il est aussi important d''éviter les négations pour diminuer la charge cognitive requise afin de comprendre la variable. Par&nbsp;exemple:'
  -
    type: code
    lang: js
    body: |
      // Négation
      let isNotActive = false
      
      // Sans négation
      let isActive = true
  -
    type: text
    title: Tableau
    level: h2
    body: |
      Une variable de type tableau est facilement identifiable lorsqu'elle contient un suffixe reflétant son contenu. Par exemple: `arr` ou&nbsp;`list`.
      
      Utiliser le terme pluriel afin d'identifier qu'il s'agit d'un tableau est une approche valide, mais risqué. Une seule lettre de différence entre deux variables offre un contraste faible, les rendant propices à être&nbsp;interverties. 
      
      Qui plus est, certains mots sont immuables au pluriel, rendant cette approche étrange&nbsp;parfois.
  -
    type: code
    lang: js
    body: |
      // 🚫 À éviter
      const news; // Contient une ou plusieurs nouvelles?
      
      const item; // Singulier 
      const items;  // Pluriel (Facile à confondre)
      
      // 👌 Avec un suffixe
      const newsArr;
      const newsList;
      
      const item; // Singulier
      const itemsList;  // Pluriel (Facile à différencier)
  -
    type: text
    title: Fonction
    level: h2
    body: 'Une fonction est facilement identifiable lorsqu''elle contient un verbe impliquant qu''une action est commise. Par exemple: `show`, `create` ou&nbsp;`open`.'
  -
    type: code
    lang: js
    body: |
      // 🚫 À éviter
      const popup() => {...};
      const user() => {...};
      const menu() => {...};
      
      // 👌 Avec un préfix
      const showPopup() => {...};
      const createUser() => {...};
      const openMenu() => {...};
  -
    type: note
    intent: good
    body: 'Ce billet est fortement inspiré de celui de [Samantha Ming - Better Boolean Variable Names](https://www.samanthaming.com/tidbits/34-better-boolean-variable-names/)&thinsp;👏'
fieldset: page-article
id: 23203c6a-0ac8-46e1-acb7-f95233f22adb
