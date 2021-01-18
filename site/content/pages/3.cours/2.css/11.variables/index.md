title: Variables
template: page-article
color_scheme: auto
body:
  -
    type: text
    body: |
      L'arrivée des variables CSS a été une grande avancée permettant d'éviter des répétitions inutiles, de faciliter la lisibilité du code et d'ajouter une couche de flexibilité au&nbsp;CSS.
      
      Voici un exemple de répétitions&nbsp;_(red)_:
  -
    type: code
    lang: css
    body: |
      .spider-man .head { background-color: red; }
      .spider-man .eye { background-color: white; }
      .spider-man .body { background-color: red; }
      .spider-man .leg { background-color: red; }
  -
    type: text
    body: 'Ce code fonctionne. Cependant, si pour X raisons il est décidé de passer de la version Spider-man&thinsp;🕷️ Peter Parker&thinsp;🟥 vers celle Miles Morales&thinsp;🟦, il faudra modifier chacune des valeurs `red` pour les mettre à `blue`. Ce qui requiert du temps et représentera un risque&nbsp;d''erreurs.'
  -
    type: image
    image: /assets/articles/var-css-spider-man.png
  -
    type: text
    title: Définition
    level: h2
    body: 'Pour définir une variable globale à la racine du document _(ou en anglais root)_, il suffit&nbsp;d''écrire:'
  -
    type: code
    lang: css
    body: |
      :root {
        --nom-de-la-variable: valeur;
      }
  -
    type: text
    body: 'Puisque les variables sont héritées, tous les éléments de la page y ont accès, puisqu''ils sont tous enfants de la racine du&nbsp;document.'
  -
    type: note
    intent: warning
    body: 'Remarquez-le `:` avant le mot-clé `root`, ainsi que les `--` avant le nom de la&nbsp;variable.'
  -
    type: text
    body: 'Pour accéder à une variable, on&nbsp;écrit:'
  -
    type: code
    lang: css
    body: var(--nom-de-la-variable)
  -
    type: text
    body: 'Pour reprendre l''exemple de Spider-man, il serait possible&nbsp;d''écrire:'
  -
    type: code
    lang: css
    body: |
      :root { --costume: red; }
      
      .spider-man .head { background-color: var(--costume); }
      .spider-man .eye { background-color: white; }
      .spider-man .body { background-color: var(--costume); }
      .spider-man .leg { background-color: var(--costume); }
  -
    type: text
    body: 'Ainsi, simplement en changeant la valeur de la variable `--costume` de `:root { --costume: red; }` à `:root { --costume: blue; }` il serait possible de changer la couleur de Spider-man en entier rapidement et sans risque&nbsp;d''erreur.'
  -
    type: text
    title: 'Contexte (scope)'
    level: h2
    body: |
      Dans l'exemple précédent, notre variable CSS était définie au `root` du document. Cependant, il est possible de définir une variable à l'intérieur d'un sélecteur CSS, de sorte que cette variable ne soit disponible uniquement qu'à l'intérieur du sélecteur et de ses&nbsp;enfants.
      
      Par&nbsp;exemple:
  -
    type: code
    lang: css
    body: |
      .spider-man { --costume: red; }
      
      .spider-man .head { background-color: var(--costume); }
      .spider-man .eye { background-color: white; }
      .spider-man .body { background-color: var(--costume); }
      .spider-man .leg { background-color: var(--costume); }
  -
    type: text
    body: 'Ainsi, la variable `--costume` n''existe que dans le contexte du sélecteur `.spider-man`. Si elle était utilisée dans un autre sélecteur, par exemple: `.green-goblin`, elle ne retournerait aucune valeur et donc serait ignorée par le&nbsp;navigateur.'
  -
    type: text
    title: 'Écraser une variable'
    level: h3
    body: |
      En donnant un contexte plus spécifique, il est possible d'écraser la valeur d'une&nbsp;variable.
      
      Par&nbsp;exemple:
  -
    type: code
    lang: css
    body: |
      :root { --costume: red; }
      
      .spider-man .head { background-color: var(--costume); }
      .spider-man .eye { background-color: white; }
      .spider-man .body { background-color: var(--costume); }
      .spider-man .leg { background-color: var(--costume); }
      
      .green-goblin { --costume: green; }
      .green-goblin .head { background-color: var(--costume); }
      .green-goblin .eye { background-color: white; }
      .green-goblin .body { background-color: var(--costume); }
      .green-goblin .leg { background-color: var(--costume); }
  -
    type: text
    body: 'Dans cet exemple, la variable `--costume` à la valeur `red` dans le contexte globale des styles. Ainsi, si un personnage n''écrase pas cette variable, son costume sera automatiquement rouge&thinsp;🟥. Tandis que le sélecteur `.green-goblin` redéfinit la valeur de cette variable dans son propre contexte à `green`&thinsp;🟩.'
  -
    type: note
    intent: warning
    body: 'Même si un personnage est défini après `.green-goblin`, si il utilise la variable `--costume`, celle-ci retournera `red`, car la valeur `green` n''est retournée qu''à l''intérieur du contexte du sélecteur&nbsp;`.green-goblin`.'
  -
    type: image
    image: /assets/articles/css-var-green-goblin.jpg
  -
    type: text
    title: 'Différence avec les variables de préprocesseur'
    level: h2
    body: |
      À priori, les variables CSS peuvent ressembler aux variables des préprocesseurs tels que: [Sass](https://sass-lang.com/) et [Less](http://lesscss.org/). Cependant, elles diffèrent sur un point important. Les variables des préprocesseurs sont calculées lors de la compilation. Bref, une fois compilé, il ne reste aucune trace de la variable en soi. Chaque occurrence de la variable a été remplacée par sa valeur. Il est donc impossible de mettre à jour une variable lorsqu'elle est affichée dans le&nbsp;navigateur.
      
      En revanche, les variables CSS font partie du DOM et n'ont pas besoin d'être compilées. Il est donc possible de les manipuler à même le navigateur ou encore en&nbsp;JavaScript. 
      
      Par exemple, si vous inspecter la balise `<html>` de cette page. Vous remarquerez que plusieurs variables CSS sont définies. Vous pouvez remplacer leurs valeurs et voir les changements s'appliquer&nbsp;immédiatement.
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article MDN🦖 sur les variables CSS](https://developer.mozilla.org/fr/docs/Web/CSS/Using_CSS_custom_properties)'
  -
    type: note
    intent: generic
    body: 'Pour visualiser le [support des variables CSS sur les différents navigateurs, voir Can I use](https://caniuse.com/css-variables)'
fieldset: page-article
id: c31fb022-23fc-43dd-89e6-096d1d3ccbdb
