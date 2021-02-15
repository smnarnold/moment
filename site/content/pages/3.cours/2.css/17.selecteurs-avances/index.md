body:
  -
    type: text
    title: Groupes
    level: h2
    body: |
      Lorsque des sélecteurs sont séparés par une virgule `,` les éléments correspondant à **l'un ou l'autre des sélecteurs** sont&nbsp;retournés.
      
      Par exemple, la règle&nbsp;suivante:
  -
    type: code
    lang: css
    body: '#no1, #no2 { ... }'
  -
    type: text
    body: 'Permet de sélectionner les éléments avec l''id&nbsp;`#no1` et `#no2` afin de leur appliquer un style&nbsp;commun.'
  -
    type: codepen
    id: 520a65c8b179fc6032f20d24028dfa87
    theme: light
    ratio: 56
    custom_ratio: '18'
    tabs: 'html,result'
  -
    type: note
    intent: generic
    body: 'Cette méthode est parfois pratique pour éviter d''ajouter une classe supplémentaire dans le code HTML, mais attention de ne pas en&nbsp;abuser.'
  -
    type: text
    title: Universel
    level: h2
    body: |
      Le sélecteur universel cible **tous les éléments** sans&nbsp;distinction.
      
      Par exemple, la règle suivante:
  -
    type: code
    lang: css
    body: '* { ... }'
  -
    type: text
    body: 'Permet de sélectionner les trois éléments avec la classe `.element`, mais aussi l''élément `.group` ainsi que les balises `<html>` et&nbsp;`<body>`.'
  -
    type: codepen
    id: e075667a284c84dd61ddaad5f350b17b
    theme: light
    ratio: 56
    custom_ratio: '18'
    tabs: 'html,result'
  -
    type: note
    intent: generic
    body: 'Le sélecteur universel peut être utilisé afin de sélectionner tous les éléments à l''intérieur d''un autre sélecteur ou encore pour simplifier le débogage en mettant en évidence tous éléments sur une page,&nbsp;etc.'
  -
    type: text
    title: 'Descendants directs'
    level: h2
    body: |
      Similaire aux [sélecteurs de descendants](selecteurs#descendants), lorsque le symbole plus grand que `>` est inséré entre les deux sélecteurs, seul les descendants direct, soit les enfants, sont&nbsp;sélectionnés.
      
      Par exemple, la règle&nbsp;suivante:
  -
    type: code
    lang: css
    body: 'body > .element { ... }'
  -
    type: text
    body: 'Permet de sélectionner les éléments avec la classe `.element`, mais uniquement si `<body>` est leur parent. Si une ou des balises les sépares, comme c''est le cas avec ceux dans `.group`, ils sont&nbsp;ignorés.'
  -
    type: codepen
    id: 8e36615f85992d02ed035836f37544d0
    theme: light
    ratio: 56
    custom_ratio: '18'
    tabs: 'html,result'
  -
    type: text
    title: Voisins
    level: h2
    body: |
      Le symbole `~` indique qu'il s'agit d'un sélecteur de voisins. Si un ou plusieurs éléments correspondent au 2<sup>e</sup> sélecteur et qu'ils apparaissent dans le DOM au même niveau, mais après un élément correspondant au 1<sup>er</sup> sélecteur, ces éléments doivent être&nbsp;sélectionnés.
      
      Par exemple, la règle&nbsp;suivante:
  -
    type: code
    lang: css
    body: '#no1 ~ .element { ... }'
  -
    type: text
    body: 'Sélectionne tous les éléments avec la classe `.element` précédés par une balise avec le id `#no1`.'
  -
    type: codepen
    id: 5255be9e6731a58a552d1622d521becb
    theme: light
    ratio: 56
    custom_ratio: '18'
    tabs: 'html,result'
  -
    type: note
    intent: warning
    body: 'Si l''élément `#no0` avait existé, il n''aurait pas été sélectionné, même s''il avait été à l''intérieur de `.group`, car il aurait été avant l''élément&nbsp;`#no1` et que seuls les éléments **suivants** peuvent être&nbsp;sélectionnés.'
  -
    type: text
    title: 'Voisin direct'
    body: |
      Le symbole `+` indique qu'il s'agit d'un sélecteur de voisin direct. Si un élément correspond au 2<sup>e</sup> sélecteur et qu'il apparait dans le DOM immédiatement après un élément correspondant au 1<sup>er</sup> sélecteur, autrement dit s'ils sont voisins, l'élément doit-être&nbsp;sélectionné.
      
      Par exemple, la règle&nbsp;suivante:
  -
    type: code
    lang: css
    body: '#no1 + .element { ... }'
  -
    type: text
    body: 'Sélectionne l''élément avec la classe `.element` seulement s''il est immédiatement précédé par une balise avec le id&nbsp;`#no1`.'
  -
    type: codepen
    id: 7527065353fd54772476c37777a4fd9d
    theme: light
    ratio: 56
    custom_ratio: '18'
    tabs: 'html,result'
  -
    type: text
    title: Attribut
    level: h2
    body: |
      Les sélecteurs d'attribut, comme leur nom l'indique, ciblent les éléments en fonction d'un attribut en particulier. Il est possible de sélectionner des éléments en fonction de la présence d'un attribut ou même de raffiner la sélection en spécifiant la valeur que devrait avoir&nbsp;l'attribut.
      
      Par exemple, la règle&nbsp;suivante:
  -
    type: code
    lang: css
    body: '[title="demo"] { ... }'
  -
    type: text
    body: 'Sélectionne tous les éléments aillant un attribut `title`, d''on la valeur correspond à&nbsp;_"demo"_.'
  -
    type: codepen
    id: 5ed877380f682cdaa944171c5f36314b
    theme: light
    ratio: 56
    custom_ratio: '18'
    tabs: 'html,result'
  -
    type: text
    body: 'Pour sélectionner tous les éléments aillant un attribut title, il aurtait été possible de faire simplement `[title]`, sans spécifier de&nbsp;valeur.'
  -
    type: note
    intent: exercice
    body: 'Complétez les niveaux de 9 à 14 de [CSS&nbsp;Diner&thinsp;🍎](https://flukeout.github.io/)'
is_hidden: false
title: 'Sélecteurs avancés'
subtitle: 'groupes, *, >, ~, +, [attr]'
template: page-article
color_scheme: auto
preview_color: '#35c9d6'
preview: /assets/previews/selecteurs-avances.png
fieldset: page-article
id: 6ec491b9-4a26-46a0-866e-477b5c438e79
