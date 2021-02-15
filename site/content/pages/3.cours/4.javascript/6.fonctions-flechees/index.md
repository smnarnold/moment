body:
  -
    type: text
    body: |
      Les fonctions fléchées, aussi appelées _fat arrow functions_ en anglais, sont l'une des fonctionnalités les plus populaires de ES6. Elles permettent, entre autres, d'écrire des fonctions de façon plus&nbsp;concises.
      
      Voici par exemple une fonction écrite avec la syntaxe&nbsp;ES5:
  -
    type: code
    lang: js
    body: |
      const calculerTaxes = function(montant) {
        return montant * 1.15;
      }
      
      calculerTaxes(5); // 5.75
  -
    type: text
    body: 'Et revoici la même fonction, mais en fonction&nbsp;fléchée:'
  -
    type: code
    lang: js
    body: |
      const calculerTaxes = montant => montant * 1.15;
      
      calculerTaxes(5); // 5.75
  -
    type: text
    body: 'On remarque que le résultat est plus court grâce à l''omission du mot-clé `function`, des parenthèses `()`, des accolades `{}` et du mot-clé `return` qui peut être omis en cas de [retour implicite](#retour-implicite).'
  -
    type: text
    title: 'Les paramètres'
    level: h2
  -
    type: text
    title: 'Aucun paramètre'
    level: h3
    body: 'Dans le cas où aucun paramètre n''est requis, une fonction fléchée est déclarée avec des parenthèses vides suivis de&nbsp;`=>`'
  -
    type: code
    lang: js
    body: '() => ''exemple'''
  -
    type: text
    title: 'Un seul paramètre'
    level: h3
    body: 'Lorsqu''un seul paramètre est requis, les parenthèses _()_ sont&nbsp;optionnelles:'
  -
    type: code
    lang: js
    body: 'x => ''exemple'''
  -
    type: text
    body: 'est l''équivalent&nbsp;de:'
  -
    type: code
    lang: js
    body: '(x) => ''exemple'''
  -
    type: text
    title: 'Multiples paramètres'
    level: h3
    body: 'Dans ce cas, les parenthèses _()_ sont&nbsp;requises:'
  -
    type: code
    lang: js
    body: '(x, y) => ''exemple'''
  -
    type: text
    title: 'Retour implicite'
    level: h2
    body: |
      Lorsqu'une fonction ne contient qu'une seule ligne et retourne une valeur, il est possible d'omettre les accolades&nbsp;_{}_. 
      
      Cette syntaxe est appelée un retour&nbsp;implicite.
      
      Par exemple:
  -
    type: code
    lang: js
    body: '() => ''exemple'';'
  -
    type: text
    body: 'est l''équivalent&nbsp;de:'
  -
    type: code
    lang: js
    body: |
      () => {
        return 'exemple'
      }
  -
    type: text
    body: 'Dès qu''une fonction contient plus d''une ligne, il est nécessaire d''utiliser les accolades _{}_. Dès lors, pour retourner une valeur, il faudra utiliser le mot-clé&nbsp;`return`.'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article MDN🦖 sur les fonctions fléchées](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es).'
is_hidden: false
title: 'Fonctions fléchées'
template: page-article
color_scheme: auto
preview_color: '#71d189'
preview_abbr: ⟹
preview: /assets/img/arrow-function-1611248905.jpg
fieldset: page-article
id: 242aeff6-d4d0-4b5e-89b2-a25495e4d3c4
