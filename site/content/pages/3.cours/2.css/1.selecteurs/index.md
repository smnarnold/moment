title: Sélecteurs
template: page-article
color_scheme: auto
body:
  -
    type: text
    body: 'Les sélecteurs CSS permettent de cibler des éléments dans une page afin de leur appliquer des styles. Ainsi il est possible d''améliorer leur lisibilité ou de leur donner une&nbsp;personnalité.'
  -
    type: text
    title: 'Sélecteur universel'
    level: h2
    body: |
      Le sélecteur universel cible **tous les éléments** d'une page sans&nbsp;distinction.
      
      Par exemple, la règle&nbsp;suivante:
  -
    type: code
    lang: css
    body: '* { ... }'
  -
    type: text
    body: 'Permet de sélectionner les trois éléments, ainsi que la balise `<body>` et de leur appliquer une&nbsp;bordure.'
  -
    type: codepen
    id: ExKMvjK
    theme: light
    ratio: 34
    custom_ratio: '15'
    tabs: 'css,result'
  -
    type: note
    intent: generic
    body: 'N''est utile que dans certains cas particuliers précis ou encore pour&nbsp;déboguer.'
  -
    type: text
    title: 'Sélecteur de type'
    level: h2
    body: |
      Les sélecteurs de type ciblent les éléments en fonction d'une&nbsp;**balise**.
      
      Par exemple, la règle&nbsp;suivante:
  -
    type: code
    lang: css
    body: 'div { ... }'
  -
    type: text
    body: 'Permet de modifier l''apparence de tous les éléments _(les 2 premiers)_ utilisant la balise&nbsp;`<div>`.'
  -
    type: codepen
    id: XWdGaXm
    theme: light
    ratio: 56
    custom_ratio: '15'
    tabs: 'css,result'
  -
    type: note
    intent: warning
    body: 'Bien que cette méthode est fonctionnelle et peut paraître simple et efficace, il est déconseillé de styler un élément en fonction de sa balise, afin de garder une distinction nette entre son rôle sémantique et son&nbsp;apparence.'
  -
    type: text
    title: 'Sélecteur de classe'
    level: h2
    body: |
      Les sélecteurs de classe ciblent les éléments partageant une **classe**&nbsp;commune.
      
      Par exemple, la règle&nbsp;suivante:
  -
    type: code
    lang: css
    body: '.element { ... }'
  -
    type: text
    body: 'Permet de modifier l''apparence de tous les éléments partageant la classe&nbsp;`element`.'
  -
    type: codepen
    id: abNMyNm
    theme: light
    ratio: 56
    custom_ratio: '15'
    tabs: 'css,result'
  -
    type: note
    intent: good
    body: 'Les classes existent spécifiquement pour styliser des&nbsp;éléments. Elles sont performantes, flexibles et réutilisables. Utilisez-les!'
  -
    type: text
    title: 'Sélecteur d''attribut'
    level: h2
    body: |
      Les sélecteurs d'attribut ciblent les éléments possédant un même attribut ou une même valeur&nbsp;d'attribut.
      
      Par exemple, la règle&nbsp;suivante:
  -
    type: code
    lang: css
    body: '[title] { ... }'
  -
    type: text
    body: 'Permet de modifier l''apparence de tous les éléments ayant l''attribut `title` _(les 2 derniers&nbsp;éléments)_.'
  -
    type: codepen
    id: WNwmEwm
    theme: light
    ratio: 56
    custom_ratio: '15'
    tabs: 'css,result'
  -
    type: text
    body: 'ou encore:'
  -
    type: code
    lang: css
    body: '[title="2"] { ... }'
  -
    type: text
    body: 'Pour spécifier uniquement l''élément ayant l''attribut `title` et la valeur&nbsp;`2`.'
  -
    type: codepen
    id: KKzEvMj
    theme: light
    ratio: 56
    custom_ratio: '15'
    tabs: 'css,result'
  -
    type: text
    title: 'Sélecteur d''ID'
    level: h2
    body: |
      Les sélecteurs d'identifiant unique ou ID, ciblent un élément en fonction de leur&nbsp;id.
      
      Par exemple, la règle&nbsp;suivante:
  -
    type: code
    lang: css
    body: '#un { ... }'
  -
    type: text
    body: 'Permet de modifier l''apparence de l''élément ayant l''id&nbsp;`un`.'
  -
    type: codepen
    id: oNxVeYe
    theme: light
    ratio: 56
    custom_ratio: '15'
    tabs: 'css,result'
  -
    type: note
    intent: warning
    body: |
      Styler un élément en fonction de son id est une fausse bonne idée. Même si un élément est unique aujourd'hui, rien ne garantit qu'il le sera&nbsp;demain. 
      
      Par exemple, si un 2<sup>e</sup> élément `#un` devait-être ajouté dans un autre groupe, que se passerait-il? Un id est théoriquement unique, il faudrait donc créer un deuxième id `#un-2` et recopier ses&nbsp;styles...🤢
  -
    type: text
    title: Descendants
    level: h2
    body: |
      L'espace ` `&nbsp;entre deux sélecteurs permet d'indiquer que seuls les éléments se trouvant à l'intérieur du&nbsp;premier sélecteur devraient être&nbsp;ciblés.
      
      Par exemple, la règle&nbsp;suivante:
  -
    type: code
    lang: css
    body: '.element span { ... }'
  -
    type: text
    body: 'Affecterait ces&nbsp;éléments:'
  -
    type: code
    lang: html
    body: |
      <div class="element">
        <span>1</span> ✅
        <div>
          <span>2</span> ✅
        </div>
      </div>
  -
    type: text
    body: |
      Permet de sélectionner les éléments avec la balise `<span>`, mais uniquement si ces éléments sont à l'intérieur d'un élément possédant la classe&nbsp;`.element`. 
      
      Ainsi, les chiffres dans les éléments `.no1` et `.no3` sont ignorés, puisqu'ils ne sont pas à l'intérieur d'un&nbsp;`<span>`.
  -
    type: codepen
    id: gOrEZEq
    theme: light
    ratio: 56
    custom_ratio: '15'
    tabs: 'css,result'
  -
    type: text
    title: 'Descendants directs'
    level: h2
    body: |
      Similaire au [sélecteur de descendants](#descendants), le sélecteur de descendants direct permet d'indiquer que seuls les éléments à l'intérieur du premier sélecteur devraient être ciblés, mais aussi que ces éléments doivent être des enfants directs du sélecteur en&nbsp;question.
      
      Par exemple, la règle suivante:
  -
    type: code
    lang: css
    body: '.element > span { ... }'
  -
    type: text
    body: 'Affecterait ces&nbsp;éléments:'
  -
    type: code
    lang: html
    body: |
      <div class="element">
        <span>1</span> ✅
        <div>
          <span>2</span> ❌
        </div>
      </div>
  -
    type: codepen
    id: jOqjBRd
    theme: light
    ratio: 56
    custom_ratio: '45'
    tabs: 'css,result'
  -
    type: note
    intent: exercice
    body: 'Complétez les 24 niveaux de [CSS Diner&thinsp;🍎](https://flukeout.github.io/)'
fieldset: page-article
id: 4ad471d7-d09e-4f29-b525-027ff2c8faf7
