title: Pseudo-classes
template: page-article
color_scheme: auto
body:
  -
    type: text
    level: h2
    body: |
      Les pseudo-classes sont matière courantes sur le web, il est probable que vous en aillez déjà utilisés sans même le savoir. L'un des exemples les plus fréquent est&nbsp;`:hover`.
      
      Leur utilité principale est de permettre d'ajouter ou de redéfinir des styles à un élément lorsqu'il respect une condition&nbsp;particulière.
      
      Par exemple, si un élément est survolé par la souris, sa condition est&nbsp;`:hover`
  -
    type: codepen
    id: xxbPWMv
    theme: light
    ratio: 34
    tabs: 'css,result'
  -
    type: note
    intent: generic
    body: 'Remarquez comment les deux points `:` servent à séparer le sélecteur de base de la&nbsp;pseudo-classe.'
  -
    type: text
    title: Liens
    level: h2
    body: |
      Les pseudo-classes sont particulièrement utiles pour gérer l'apparence des&nbsp;liens en fonction de leur&nbsp;état. 
      
      Par exemple, voici les états d'un lien sur&nbsp;[Wikipedia](https://fr.wikipedia.org/wiki/(274301)_Wikip%C3%A9dia) 
      
      - `:link` lorsque le lien n'a pas encore été&nbsp;visité ![](/assets/articles/pseudo-link-1578083525.png)
      - `:hover` lorsque qu'il est&nbsp;survolé ![](/assets/articles/pseudo-hover.png)
      - `:active` lorsque le bouton de la souris est&nbsp;enfoncé ![](/assets/articles/pseudo-active.png)
      - `:visited` lorsque qu'il a déjà été&nbsp;visité ![](/assets/articles/pseudo-visited.png)
      - `:focus` lorsque le lien reçoit le focus ![](/assets/articles/pseudo-focus.png)
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet article sur&nbsp;[MDN🦖](https://developer.mozilla.org/fr/docs/Learn/CSS/Styling_text/Mise_en_forme_des_liens)'
  -
    type: text
    title: Contexte
    level: h2
    body: 'Certaines pseudo-classes sont relative au contexte. Il est donc possible d''attribuer des styles différents à un élément en fonction de sa position dans son&nbsp;parent.'
  -
    type: text
    title: 'First-child vs Last-child'
    level: h3
    body: |
      Il est possible d'afficher en bleu 🔵 le premier ou le dernier élément avec `:first-child` et&nbsp;`:last-child`. 
      
      Par exemple, `:first-child` valide si l'élément est bel et bien le premier enfant de son parent et si son sélecteur concorde, il lui applique les styles&nbsp;établis.
  -
    type: codepen
    id: XWJzYpM
    theme: light
    ratio: 34
    tabs: result
  -
    type: text
    title: 'First-of-type vs Last-of-type'
    level: h3
    body: |
      Contrairement à [first-child ou last-child](#first-child-vs-last-child) qui appliquent des styles uniquement au premier et au dernier enfant d'un parent, `:first-of-type` et `last-of-type` parcours tous les enfants d'un parent à la recherche de la première/dernière occurence du&nbsp;sélecteur.
      
      Dans cet exemple, tous nos éléments sont identiques ou presque. Certains sont des `<div>` <em>(1, 2, 6)</em> tandis que d'autres sont des `<span>` <em>(3, 4, 5)</em>. En utilisant le sélecteur `span:first-child{...}` rien ne se produit, puisque le premier élément est un `<div>`. Cependant, en utilisant `span:first-of-type{...}`, le 3<sup>e</sup> élément devient bleu, puisqu'il est le premier de type&nbsp;`<span>`.
  -
    type: codepen
    id: abzVKLV
    theme: light
    ratio: 34
    tabs: result
  -
    type: text
    title: Nth-child
    level: h3
    body: 'La pseudo-classe `:nth-child` permet de sélectionner un certain groupe d''elements dans un&nbsp;parent.'
  -
    type: image
    image: /assets/articles/ralph-wiggum-selectionne.gif
  -
    type: text
    body: 'Par exemple, il est possible de sélectionner tous les éléments impairs via `:nth-child(odd)` ou tout ceux pairs avec&nbsp;`:nth-child(even)`.'
  -
    type: codepen
    id: vYEWayB
    theme: light
    ratio: 34
    tabs: result
  -
    type: text
    body: 'Il est aussi possible de faire des sélections plus avancées. Par exemple, sélectionner un élément sur 3 <em>(3, 6, 9)</em> avec `.element:nth-child(3n)`. Dans ce cas, `n` indique que le chiffre précédent est un interval et `3` l''interval en&nbsp;question.'
  -
    type: codepen
    id: JjoOZmZ
    theme: light
    ratio: 34
    tabs: result
  -
    type: note
    intent: warning
    body: 'Sans le `n`, seulement le 3<sup>e</sup> élément serait&nbsp;sélectionné.'
  -
    type: text
    body: 'Il est aussi possible d''utiliser les symboles `+`et `-` pour effectuer un décalage dans l''interval. Dans l''exemple précédent, `:nth-child(3n)` sélectionnait les éléments 3, 6 et 9. Cependant, si nous désirions avoir un interval de 3, mais commencer dès le premier élément <em>(1, 4, 7)</em>, il serait possible d''utiliser&nbsp;`:nth-child(3n-2)`.'
  -
    type: codepen
    id: eYmeKae
    theme: light
    ratio: 34
    tabs: result
  -
    type: note
    intent: tool
    body: 'Pour expérimenter avec nth-child [css-tricks.com/examples/nth-child-tester](https://css-tricks.com/examples/nth-child-tester/)'
  -
    type: note
    intent: good
    body: 'Pour avoir la liste complête des pseudo-classes disponibles, voir cet article sur&nbsp;[MDN🦖](https://developer.mozilla.org/fr/docs/Web/CSS/Pseudo-classes#index)'
fieldset: page-article
id: ac069b9b-e847-45cb-ad11-cbdf0c9f7fb3
