body:
  -
    type: text
    body: 'Les sélecteurs CSS permettent de cibler des éléments dans une page afin de leur appliquer des styles. Ainsi il est possible d''améliorer leur lisibilité ou de leur donner une&nbsp;personnalité.'
  -
    type: text
    title: Type
    level: h2
    body: |
      Les sélecteurs de type ciblent les éléments en fonction d'une&nbsp;**balise**.
      
      Par exemple, la règle&nbsp;suivante:
  -
    type: code
    lang: css
    body: 'em { ... }'
  -
    type: text
    body: 'Permet de sélectionner les éléments utilisant la balise&nbsp;`<em>`.'
  -
    type: codepen
    id: bfc799e4b4ee8c9c429b869f94113a44
    theme: light
    ratio: 56
    custom_ratio: '15'
    tabs: 'html,result'
  -
    type: note
    intent: warning
    body: 'Bien que cette méthode est fonctionnelle et peut paraître simple et efficace, il est déconseillé de styler un élément en fonction de sa balise, afin de garder une distinction entre son rôle sémantique et son&nbsp;apparence.'
  -
    type: text
    title: ID
    level: h2
    body: |
      Les sélecteurs d'identifiant unique ou ID, permettent de cibler un élément en fonction de son&nbsp;id.
      
      Par exemple, la règle&nbsp;suivante:
  -
    type: code
    lang: css
    body: '#no1 { ... }'
  -
    type: text
    body: 'Permet de modifier l''apparence de l''élément ayant l''id&nbsp;`no1`.'
  -
    type: codepen
    id: 35c8b75486508a40e544429b4537d18e
    theme: light
    ratio: 56
    custom_ratio: '15'
    tabs: 'html,result'
  -
    type: note
    intent: warning
    body: 'Styler un élément en fonction de son id est généralement une mauvaise idée. Même si un élément est unique actuellement, rien ne garantit qu''il le restera dans le&nbsp;futur.'
  -
    type: text
    title: Classe
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
    body: 'Permet de sélectionner tous les éléments partageant la classe&nbsp;`element`.'
  -
    type: codepen
    id: 5d001f24b32c46ccef2f71fcc4437556
    theme: light
    ratio: 56
    custom_ratio: '15'
    tabs: 'html,result'
  -
    type: note
    intent: good
    body: 'Les classes existent spécifiquement pour styliser des&nbsp;éléments. Elles sont performantes, flexibles et réutilisables. Utilisez-les!'
  -
    type: text
    title: Combinaisons
    level: h2
    body: |
      Lorsque deux sélecteurs sont **collés** _(sans espace entre eux)_, seuls les éléments possédant **les deux sélecteurs** sont&nbsp;retournés.
      
      Par exemple, la règle&nbsp;suivante:
  -
    type: code
    lang: css
    body: 'span.element { ... }'
  -
    type: text
    body: 'Permet de sélectionner les éléments avec la classe `.element`, mais uniquement si la classe est appliquée sur un&nbsp;`<span>`.'
  -
    type: codepen
    id: 9f5d6e02d6e0f72263a259abdf621229
    theme: light
    ratio: 56
    custom_ratio: '15'
    tabs: 'html,result'
  -
    type: note
    intent: generic
    body: 'Un élément peut avoir plusieurs classes. <br>Par exemple, `<div class="msg important">` cet élément possède la classe `.msg`, ainsi que la classe `.important`. Il est donc possible de sélectionner uniquement les messages qui possèdent ces deux classes avec `.msg.important { ... }`'
  -
    type: text
    title: Descendants
    level: h2
    body: |
      À l'opposée des [combinaisons](#combinaisons), les descendants ont un **espace entre les sélecteurs** permettant ainsi d'indiquer que seuls les descendants du premier sélecteur devraient être&nbsp;ciblés.
      
      Par exemple, la règle&nbsp;suivante:
  -
    type: code
    lang: css
    body: '.group .element { ... }'
  -
    type: text
    body: 'Permet de sélectionner les éléments avec la classe `.element`, mais uniquement s''ils sont enfants d''une balise possédant la classe&nbsp;`.group`.'
  -
    type: codepen
    id: 815352cee8af466f36637330e67eb6dd
    theme: light
    ratio: 56
    custom_ratio: '15'
    tabs: 'html,result'
  -
    type: text
    body: |
      Dans l'exemple précédent, `.group` est ce que l'on appel le parent de&nbsp;`.element`. 
      
      Cependant, plusieurs balises auraient pu séparer `.group` de ses descendants `.element` sans problème. Tout comme plusieurs générations peuvent séparer une personne de ses ancètres, elle n'en reste pas moins  sa&nbsp;descendance.
  -
    type: note
    intent: tool
    body: '[Selectors explained](https://kittygiraudel.github.io/selectors-explained/): traduire ses sélecteurs CSS en texte humainement lisible afin de valider leur&nbsp;portée.'
  -
    type: note
    intent: exercice
    body: 'Complétez les 8 premiers niveaux de [CSS Diner&thinsp;🍎](https://flukeout.github.io/)'
is_hidden: false
title: Sélecteurs
subtitle: 'balise, #, ., combinaison, descendant'
template: page-article
color_scheme: auto
preview_color: '#35c9d6'
preview: /assets/previews/selecteurs.png
fieldset: page-article
id: 4ad471d7-d09e-4f29-b525-027ff2c8faf7
