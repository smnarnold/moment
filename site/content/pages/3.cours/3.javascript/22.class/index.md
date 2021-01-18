title: Classes
template: page-article
color_scheme: auto
body:
  -
    type: text
    body: |
      La programmation orientée objet, ou en anglais _Object-oriented programming (OOP)_, est une structure de code dans laquelle chaque élément est un objet. Chaque donnée est une propriété et chaque action est une méthode sur l’objet correspondant à son&nbsp;élément. 
       
      Cette approche peut sembler intimidante de prime abord, mais en fait, elle s’apparente à la façon dont l’être humain pense&thinsp;🧠
       
      Par exemple, chaque item sur une liste d’épicerie pourrait être un objet avec différentes propriétés, telles&nbsp;que: 
      
      - Un nom
      - Un statut indiquant si l'item est dans le panier ou&nbsp;non
      - Etc.
       
      La liste d’épicerie pourrait contenir plusieurs éléments, mais ils partageraient tous les mêmes propriétés de&nbsp;base.
       
      Par exemple:
  -
    type: code
    lang: js
    body: |
      const tacos = {
        nom: “🌮”,
        dansLePanier: false,
      } 
       
      const tomate = {
        nom: “🍅”,
        dansLePanier: false,
      }
  -
    type: text
    body: |
      Chaque objet partage les mêmes propriétés _(nom et dansLePanier)_, mais a des valeurs différentes. Ainsi, il est possible d’interroger chaque élément afin de savoir s’il est `dansLePanier` ou&nbsp;non.
       
      À l’heure actuelle, la meilleure façon de programmer en orienté objet est d’utiliser des classes. Chaque classe permet de créer un certain type d’objet. Tous les objets créés à partir d’une même classe partagent les mêmes propriétés et méthodes, ce qui assure une cohérence entre chacun de ces&nbsp;objets.
       
      Une classe de base ressemble à&nbsp;ceci:
  -
    type: code
    lang: js
    body: |
      class NomDeMaClasse {
        constructor() {
        }
      }
  -
    type: text
    body: |
      - Le mot `class` indique qu'une classe s'apprête à être&nbsp;définie.
      - `NomDeMaClasse` correspond au nom donné à la&nbsp;classe.
      - `constructor` est une méthode spéciale appelée automatiquement lorsqu'un nouvel objet est créé à partir de la classe. Il permets de définir les propriétés de base du nouvel&nbsp;objet.
  -
    type: note
    intent: generic
    body: 'Remarquez comment par convention un nom de classes commence toujours par une&nbsp;majuscule'
  -
    type: text
    level: h2
    body: 'Par exemple, si une classe devait permettre de créer des items dans une liste d’épicerie, elle ressemblerait probablement à quelque chose comme&nbsp;ceci:'
  -
    type: code
    lang: js
    body: |
      class ItemEpicerie {
        constructor(nom) {
          this.nom = nom;
          this.dansLePanier = false;
        }
      }
  -
    type: text
    body: |
      - La classe à un nom représentatif du type d’objet qu’elle crée&nbsp;`ItemEpicerie`.
      - Le constructeur s’attend à recevoir en paramètre un élément intitulé&nbsp;`nom`.
      - Le constructeur définit que le nom de l’objet créé `this.nom` doit correspondre à l’élément `nom` reçu en&nbsp;paramètre. 
      - Finalement, la propriété `dansLePanier` est initialisée avec la valeur par défaut&nbsp;`false`.
  -
    type: note
    intent: generic
    body: 'Dans le contexte d’une classe, `this` fait référence à l’objet qui est&nbsp;créé.'
  -
    type: text
    title: Instanciation
    level: h2
    body: |
      Pour créer un objet à partir d’une classe, il faut l’instancier. Autrement dit, il faut utiliser le mot réservé `new` pour annoncer qu’un nouvel élément s’apprête à être déclaré. Il faut ensuite spécifier le nom de la classe à utiliser pour créer l’élément et optionnellement, lui fournir des paramètres à&nbsp;utiliser.
       
      Par exemple, il est possible de recréer l’élément tacos&nbsp;ainsi:
  -
    type: code
    lang: js
    body: 'new ItemEpicerie(“🌮”);'
  -
    type: note
    intent: generic
    body: 'Remarquez comment le nom “🌮” est passé en paramètre. Si un ou des paramètres sont définis lors de l''instanciation d’un objet, ils sont automatiquement passés au&nbsp;constructeur.'
  -
    type: text
    level: h2
    body: 'Cette instanciation retournera l’objet suivant&thinsp;👇.'
  -
    type: code
    lang: js
    body: |
      {
        nom: “🌮”,
        dansLePanier: false,
      }
  -
    type: text
    body: 'Si l’objet doit être accessible après sa création, il est nécessaire de le stocker dans une variable. Par&nbsp;exemple:'
  -
    type: code
    lang: js
    body: 'const tacos = new ItemEpicerie(“🌮”);'
  -
    type: text
    body: 'Ainsi, il est possible d''accéder au statut l’objet comme&nbsp;suit:'
  -
    type: code
    lang: js
    body: 'console.log(tacos.dansLePanier); // false'
  -
    type: text
    title: Méthodes
    level: h2
    body: |
      Pour ajouter une action à un objet, on définit ce que l’on appel une une méthode. Les méthodes sont des fonctions au même titre que le constructeur. Cependant, contrairement au constructeur, elles ne sont pas appelés automatiquement. Il faut donc les appeler manuellement au moment&nbsp;désiré.
       
      Par exemple, pour créer un élément HTML correspondant notre l’item d’épicerie, il serait possible de créer une&nbsp;méthode.
  -
    type: code
    lang: js
    body: |
      class ItemEpicerie {
        constructor(nom) {
          this.nom = nom;
          this.dansLePanier = false;
        }
        
        creerHTML() {
          this.el = document.createElement('div');
          this.el.innerText = this.nom;
          document.body.appendChild(this.el);
        }
      }
  -
    type: text
    body: |
      Cette méthode se créée premièrement une propriété el qui contiendra un div.
      Le div, via sa référence `this.el`, se fait ensuite insérer un texte. Ce texte correspond au nom de l’élément. Par exemple:&nbsp;“🌮”.
  -
    type: note
    intent: warning
    body: 'Les classes ne requièrent pas de `,` pour séparer leurs&nbsp;méthodes.'
  -
    type: text
    body: 'Par elle-même, cette méthode ne fait rien, puisqu’elle n’est pas appelée. Il faut donc définir un appel. Cet appel pourrait être fait à différents&nbsp;endroits.'
  -
    type: text
    title: 'À l’extérieur de la classe'
    level: h3
  -
    type: code
    lang: js
    body: |
      const tacos = new ItemEpicerie(“🌮”);
      tacos.creerHTML();
  -
    type: codepen
    id: yLJJaXQ
    theme: light
    ratio: 34
    custom_ratio: '42'
    tabs: 'js,result'
  -
    type: text
    title: 'À l’intérieur de la classe'
    level: h3
    body: 'Par exemple, dans le constructeur si l’on souhaite que cette méthode soit appelée à chaque fois qu’un élément est&nbsp;créé.'
  -
    type: codepen
    id: WNxxGyg
    theme: light
    ratio: 34
    custom_ratio: '42'
    tabs: 'js,result'
  -
    type: text
    title: 'À partir d’un événement défini dans la classe'
    level: h3
    body: 'Par exemple, lorsque l’élément `el` est cliqué, appeler une méthode permettant de faire alterner la valeur de la propriété `dansLePanier` de `true` à `false` et vice-versa.'
  -
    type: note
    intent: generic
    body: 'Afin de rendre le changement perceptible, ajoutons/retirons la classe `barre` sur l''élément en fonction de la valeur&nbsp;`dansLePanier`.'
  -
    type: codepen
    id: XWKKNBM
    theme: light
    ratio: 56
    custom_ratio: '45'
    tabs: 'js,result'
  -
    type: note
    intent: good
    body: 'Voir cet [article pour réviser&nbsp;toggle](./classlist-api#toggle)'
  -
    type: text
    title: 'Multiples instances'
    level: h2
    body: |
      Concevoir son code en orienté objet offre la flexibilité de créer rapidement et facilement plusieurs objets&nbsp;similaires. 
      
      Par exemple, il serait possible de créer plusieurs éléments d'une liste d’épicerie à partir d’un champ texte et d’un bouton, en créant un nouvel item à partir de la valeur dans le champ texte lorsque le bouton est&nbsp;appuyé.
  -
    type: codepen
    id: ExyyZed
    theme: light
    ratio: 56
    custom_ratio: '45'
    tabs: 'js,result'
  -
    type: text
    title: Sous-classe
    level: h2
    body: |
      Une sous-classe est en quelque sorte un remix d’une autre classe. On part d’une classe existante et on lui apporte des&nbsp;modifications.&thinsp;🎛️
       
      Par exemple, il est possible de partir de la classe `ItemEpicerie` pour créer la classe `ItemEpicerieEpice` en utilisant le mot réservé `extends` comme&nbsp;suit:
  -
    type: code
    lang: js
    body: |
      class ItemEpicerieEpice extends ItemEpicerie {
        constructor(nom) {
          super(`🌶️ 🔥 ${nom}`);
        }
      }
  -
    type: text
    body: '`super(''🌶️ 🔥 ${nom}'')` indique de créer l’objet à partir de la classe originale. L’objet possède donc toutes les mêmes propriétés et méthodes qu’un objet créé avec `ItemEpicerie`, mais peut être bonifié, comme dans cet exemple où le nom est préfixé par des émojis indiquant que la nourriture est&nbsp;épicé.'
  -
    type: codepen
    id: gOMMBvB
    theme: light
    ratio: 56
    custom_ratio: '45'
    tabs: 'js,result'
  -
    type: note
    intent: exercice
    body: 'Créer des 😺 à partir d''une classe JS [codepen.io/smnarnold/pen/GRqjjJo](https://codepen.io/smnarnold/pen/GRqjjJo?editors=001)'
fieldset: page-article
id: e3ab2092-1b3b-4e2a-8e71-50a4e141bfaf
