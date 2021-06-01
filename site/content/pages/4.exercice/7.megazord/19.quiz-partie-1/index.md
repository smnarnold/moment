body:
  -
    type: text
    body: |
      Pour cette partie du projet, nous allons créer l'aspect fonctionnel de base de notre&nbsp;quiz.
      
      Aperçu du résultat final:
  -
    type: image
    image: /assets/articles/megazord-quiz-part1.mp4
  -
    type: text
    title: Questions
    body: |
      1. Chaque étudiant doit composer 4 questions à choix de réponses à propos de son&nbsp;groupe. 
      2. Chaque question doit avoir entre 2 à 4 options de réponse. Le nombre d'options ne doit pas être le même pour chaque question _(autrement dit, il est interdit de faire 4 questions vrai ou&nbsp;faux)_.
      3. Chaque question doit prendre la forme d'un objet JavaScript sur ce&nbsp;format:
  -
    type: code
    lang: js
    body: |
      {
        q: "Quel est le premier album de Gorillaz?",
        o1: "Demon Days",
        o2: "Gorillaz",
        ...
        r: 2
      }
  -
    type: note
    intent: generic
    body: '`r` correspond à la bonne réponse. Par exemple, l''option 2 dans l''exemple ci-dessus&thinsp;☝️ est la bonne réponse à la&nbsp;question.'
  -
    type: text
    body: '4. Ces questions/objets JavaScript doivent être regroupées dans un tableau&nbsp;JavaScript.'
  -
    type: text
    title: Préparation
    level: h2
    body: |
      - [Créez un Pen](https://codepen.io/) par équipe.
      
      Afin de bien conceptualiser les prochaines étapes, je vous invite en premier lieu à écrire une version purement HTML votre quiz afin de bien le&nbsp;visualiser. Ceci vous aidera à le recréer en JavaScript par la&nbsp;suite.
      
      Par exemple:
  -
    type: image
    image: /assets/articles/megazord-quiz-html.png
  -
    type: text
    body: 'Aucun CSS n''est nécessaire. Seul les balises `<strong>`, `<br>`, `<label>` et des boutons radio ont étés&nbsp;utilisés.'
  -
    type: note
    intent: warning
    body: 'Afin d''écrire un HTML de base le plus près possible du résultat final, prenez un instant afin de lire les requis&nbsp;suivants.'
  -
    type: text
    body: |
      Nous allons maintenant tentez de recréez le même formulaire à partir d'une classe JavaScript se basant sur votre tableau de&nbsp;questions.
      
      1. Stockez votre tableau de questions dans une&nbsp;variable.
      2. Définissez une nouvelle classe intitulée&nbsp;`Quiz`.
      3. Créez-vous une nouvelle instance de votre classe et passez-lui en paramètre votre tableau de&nbsp;questions.
      4. Dans votre constructeur, créez-vous une propriété contenant les&nbsp;questions.
      5. [Effectuez une boucle](https://smnarnold.com/cours/javascript/boucles) sur chacune des questions de votre tableau. Pour chacune de ces questions, appelez une méthode de votre classe créant le code HTML de chaque&nbsp;question.
      6. Chaque question doit avoir son div avec la classe `.question`. Ajoutez les éléments suivants à l'intérieur de ce&nbsp;bloc.
      7. Affichez dans une balise `<strong>` la question `q`&nbsp;courante.
      8. Vous devez valider la présence de chaque option _(o1, o2, o3 et o4)_. Lorsqu'une option est présente, créez un [bouton radio](https://smnarnold.com/cours/html/champs-de-formulaire#radio) dont l'attribut `name` est `questionX`, `X` correspondants au numéro de question. Par exemple: `name="question3"` pour la 3e&nbsp;question. 
      9. L'attribut `value` de chaque bouton radio doit correspondre à son numéro d'option. Par exemple, pour l'option 2 `o2`, l'attribut sera `value="2"`. 
      10. Affichez sous forme de libellé le texte associé au bouton&nbsp;radio.
    title: 'Création du quiz'
  -
    type: text
    title: 'Interactivité du quiz'
    level: h2
  -
    type: note
    intent: warning
    body: 'Ne commencez cette section que lorsque le formulaire est entièrement créé _(section&nbsp;précédente)_.'
  -
    type: text
    body: |
      1. Créez-vous dans le constructeur de votre classe une propriété intitulée `index` et attribuez-lui comme valeur initiale&nbsp;`0`.
      2. Ajoutez une règle CSS faisant en sorte que toutes les éléments avec la classe `.question` soient à `display: none` et une classe `.is-visible` attribuant `display: block`. _(Toutes vos questions devraient-être invisibles à ce&nbsp;moment)_.
      3. Créez-vous une méthode intitulée `setVisible`. Cet méthode doit pouvoir recevoir un numbre paramètre. À l'aide de [querySelectorAll](https://smnarnold.com/cours/javascript/selecteurs#queryselectorall), accédez à tous les div ayant la classe `.question` que vous avez créé plus tôt. Bouclez sur tous ces div et enlevez leur la classe `.is-visible` _(ainsi nous somme sur qu'uncun de ces div ne l'a)_. Ensuite, sélectionnez parmi tous ces div, celui dont l'index correspond au nombre reçu en paramètre et ajoutez lui la classe `.is-visible` _(de la sorte, lorsque cette méthode est appelée, une seule question devrait-être visible à la&nbsp;fois)_.
      4. Immédiatement après l'appel de la méthode créant le HTML de votre quiz, appelez votre nouvelle méthode `setVisible` et passez lui comme valeur votre propriété `index` valant `0` par défaut _(ainsi seule la première question sera visible à ce&nbsp;stade-ci)_.
      5. Créez-vous dans le constructeur une propriété intitulée `score` et donnez lui comme valeur&nbsp;`0`.
      6. Écoutez l'événement `change` sur chacun des boutons radio. Comparez la `value` du bouton radio cliqué avec celle de la propriété `r` de la question actuelle/affichée. Si les deux sont identiques, la réponse sélectionnée est donc la bonne. Dans ce cas, incrémentez la valeur de `score` et inscrivez le texte suivant dans la console `Bonne réponse: pointage X`. Dans le cas opposé, inscrivez `Mauvaise réponse: pointage X`. Dans les deux cas, `X` correspond à la valeur de&nbsp;`score`. 
      7. Validez ensuite si votre propriété `index` est plus petite que que le nombre de questions que vous avez. Si oui, incrémentez cet `index`et appelez la méthode `setVisible` qui affichera la question&nbsp;suivante.
  -
    type: note
    intent: generic
    body: 'Aucune remise n''est nécessaire pour cette partie du&nbsp;projet.'
is_hidden: false
title: 'Quiz - Partie 1'
template: page-exercice
color_scheme: auto
preview_color: '#f5b56c'
preview_abbr: Q1
fieldset: page-article
id: 706c9b89-a0de-4e33-a004-d6369f1c293e
