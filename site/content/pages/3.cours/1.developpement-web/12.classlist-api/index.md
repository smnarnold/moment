title: 'ClassList API'
template: page-article
color_scheme: auto
body:
  -
    type: text
    body: |
      Permet d'accéder et de manipuler les classes d'un&nbsp;éléments.
      
      Prenons pour acquis que j'ai populé la variable _element_ via le code suivant: `var element = document.querySelector('.element');`
  -
    type: text
    title: add
    level: h2
    body: |
      Permet d'ajouter une ou plusieurs classes comme&nbsp;suit:
      
      `element.classList.add('nomDeMaClasse')`
      `element.classList.add('premiereClasse', 'deuxiemeClasse')`
  -
    type: text
    title: remove
    level: h2
    body: |
      À l'opposé d'[add](#add), remove retire une ou plusieurs classes comme suit:
      
      `element.classList.remove('nomDeMaClasse')`
      `element.classList.remove('premiereClasse', 'deuxiemeClasse')`
  -
    type: text
    title: contains
    level: h2
    body: |
      Valide si une classe est présente sur un élément.
      
      `element.classList.contains('element')` retournera `true`. _(🤷‍♂️&nbsp;évidemment)_
      tandis que `element.classList.contains('gluten')` retournera `false`.
  -
    type: text
    title: toggle
    level: h2
    body: |
      Permet de retirer une classe si elle est présente ou de l'ajouter si elle est absente. `element.classList.toggle('element')`
      
      Elle permet donc de simplifier le scénario suivant:
  -
    type: code
    lang: js
    body: |
      if (element.classList.contains('element')) {
        element.classList.remove('element');
      } else {
        element.classList.add('element');
      }
  -
    type: text
    body: |
      `classList.toggle` accepte aussi un deuxième paramêtre pouvant être passé après le nom de la classe, forçant ainsi l'ajout ou le retrait de la dite classe. 
      
      Par exemple:
      
      `element.classList.toggle('element', true)` 
      force l'ajoute la classe _element_, tandis que
      `element.classList.toggle('element', false)` 
      force sont retrait.
fieldset: page-article
id: ec427edb-f6d3-4cfe-9266-d79343104ca7
