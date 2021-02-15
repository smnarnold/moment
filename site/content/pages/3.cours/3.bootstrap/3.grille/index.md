body:
  -
    type: text
    body: 'La grande force de Bootstrap, _(son coeur&thinsp;❤️)_, est sans contre dit sa grille. Cette dernière est constituée de 12 colonnes. Ce nombre peut paraître arbitraire _(pourquoi pas 10?)_, mais il est parfaitement logique puisqu''il est facilement divisible.'
  -
    type: codepen
    id: e6635892c9c560eccf58f136cbe1acfd
    ratio: 56
    custom_ratio: '15'
    tabs: chromeless
  -
    type: text
    body: 'Lors de la phase de design d''un site web, plusieurs types de divisions peuvent être utilisées. Par exemple, séparer un écran en deux parties égales. Dans ce cas, une grille de 12 ou de 10 colonnes fonctionne tout aussi bien, puisque le résultat donne 2x 6 colonnes ou 2x 5&nbsp;colonnes.'
  -
    type: codepen
    id: 53099261a89ddd95a81519b77e89c141
    ratio: 34
    custom_ratio: '15'
    tabs: chromeless
  -
    type: text
    body: |
      Cependant, la majorité des divisions populaires ne sont pas compatibles avec 10&nbsp;colonnes. 
      
      Par exemple, dans le cas où le contenu principal doit prendre 75% de la largeur et laisser 25% à une barre latérale. Ce ratio est impossible à réaliser avec 10 colonnes puisqu'il faudrait avoir recours à des fractions de colonnes&thinsp;🤢. Cependant, avec 12 colonnes il suffit d'allouer les 9 premières au contenu principal et les 3 dernières à la barre&nbsp;latérale.
      
      Un ratio deux tiers, un tiers? Aucun problème, il suffit d'allouer les 8 premières colonnes au contenu et les 4 dernières à la barre&nbsp;latérale.
  -
    type: codepen
    id: 624e0f56e6aa22b06b6af8640933c759
    ratio: 34
    custom_ratio: '15'
    tabs: chromeless
  -
    type: note
    intent: tool
    body: 'Afin de simplifier la transition des maquettes vers le web, plusieurs [gabarits XD incluant la grille Bootstrap](https://www.danrodney.com/downloads/adobe-xd-bootstrap4-template.zip)&nbsp;exisent.'
  -
    type: text
    body: |
      Pour bien comprendre la grille Bootstrap, il est important de connaitre ses trois composantes, soit les:
      
      - [Conteneurs](#conteneurs) _(container)_
      - [Rangées](#rangees) _(row)_ 
      - [Colonnes](#colonnes) _(column)_
  -
    type: text
    title: Conteneurs
    level: h2
    body: |
      Les conteneurs ou en anglais, _containers_, sont en fait des balises HTML de bases auxquelles une classe CSS définie par Bootstrap est ajoutée. Cette classe se charge de définir une largeur maximale aux [rangées](#rangees) qui se retrouveront à l'intérieur de&nbsp;celle-ci.
      
      Bien qu'il existe trois types de conteneurs Bootstrap, nous, nous concentrerons uniquement sur les deux plus&nbsp;fréquents.
  -
    type: text
    title: Container
    level: h3
    body: 'Pour définir un conteneur Bootstrap, il suffit d''ajouter la classe `.container` à une balise comme&nbsp;suit:'
  -
    type: code
    lang: html
    body: '<div class="container">...</div>'
  -
    type: text
    body: |
      Cette balise sera maintenant centrée horizontalement dans la page et aura une largeur différente en fonction de la dimension de l'écran et des différents [breakpoints Bootstrap](breakpoints). Créant ainsi une [mise en page adaptive](../css/responsive#adaptive).
      
      Par exemple:
      
      | Largeur d'écran  | breakpoint | Largeur de .container |
      | ---------------- | :--------: | --------------------: |
      | - de&nbsp;576px  | -          | 100%                  |
      | 576px et&nbsp;+  | `sm`       | 540px                 |
      | 768px et&nbsp;+  | `md`       | 720px                 |
      | 992px et&nbsp;+  | `lg`       | 960px                 |
      | 1200px et&nbsp;+ | `xl`       | 1140px                |
      | 1400px et&nbsp;+ | `xxl`      | 1320px                |
  -
    type: text
    title: 'Container fluid'
    level: h3
    body: |
      Les conteneurs fluides, comme leur nom l'indique, sont fluides. Autrement dit, peu importe la dimension de l'écran, le conteneur prendra toujours toute la largeur&nbsp;disponible.
      
      Pour définir un conteneur fluide, il suffit d'ajouter une classe, comme suit à une&nbsp;balise:
  -
    type: code
    lang: html
    body: '<div class="container-fluid">...</div>'
  -
    type: text
    body: 'Afin d''illustrer la différence entre `.container` et `.container-fluid`, voici un [exemple minimaliste](https://codepen.io/smnarnold/full/d375c1afaf3bbfb34953a5b85818b552) _(redimensionner la fenêtre afin de voir la différence de comportement entre les&nbsp;deux)_.'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir ce [billet Bootstrap à propos des&nbsp;containers](https://getbootstrap.com/docs/5.0/layout/containers/).'
  -
    type: text
    title: Rangées
    body: |
      Les rangées, ou en anglais _rows_, servent à gérer le positionnement des colonnes se trouvant à l'intérieur de&nbsp;celles-ci.
      
      Pour définir une nouvelle rangée, il suffit d'ajouter la classe `.row` à une balise&nbsp;quelconque.
      
      Par exemple:
  -
    type: code
    lang: html
    body: |
      <div class="container">
        <div class="row">...</div>
      </div>
  -
    type: text
    title: Alignements
    level: h3
    body: |
      Le fonctionnement des rangées est basé sur&nbsp;[flexbox](../css/flexbox). Ainsi, plusieurs noms de classes utilitaires permettant de gérer l'alignement des colonnes ressemblent aux noms de différentes sous-propriétés de&nbsp;flexbox.
      
      - `justify-content-start` aligne les colonnes à&nbsp;gauche.
      - `justify-content-center` aligne les colonnes au&nbsp;centre.
      - `justify-content-end` aligne les colonnes à&nbsp;droite.
      - `justify-content-between` distribue l'espace également entre les colonnes, mais ignore les&nbsp;extrémités.
      - `justify-content-around` distribue l'espace entre les colonnes et les&nbsp;extrémités.
      - `justify-content-evenly` distribue l'espace entre les colonnes et les extrémités, mais s'assure que chaque espace soit d'une largeur&nbsp;équivalente.
      
      Par exemple, pour centrer le contenu d'une rangée, il suffit d'ajouter la classe `justify-content-center`:
  -
    type: code
    lang: html
    body: |
      <div class="container">
        <div class="row justify-content-center">...</div>
      </div>
  -
    type: codepen
    id: eedb43f61dc5cbad8aa0cae1d26e0f3b
    ratio: 34
    custom_ratio: '15'
    tabs: result
  -
    type: text
    title: Restrictions
    level: h3
    body: |
      - Les rangées doivent toujours être utilisées à l'intérieur d'un conteneur Bootstrap, puisque des marges négatives sur celles-ci sont annulées par le&nbsp;conteneur. 
      - Seules des colonnes Bootstrap devraient-être enfant direct d'une rangée afin d'assurer le fonctionnement optimal d'une&nbsp;rangée.
  -
    type: note
    intent: warning
    body: 'Malgré ce que son nom pourrait laisser croire, il est possible d''avoir des colonnes sur plusieurs rangées à l''intérieur d''un élément avec la classe `.row` sans&nbsp;problème.'
  -
    type: text
    title: Colonnes
    level: h2
    body: |
      Les colonnes ou en anglais _columns_ sont les composantes les plus importantes de la grille&nbsp;Bootstrap! Elle permettent de définir la dimension allouée aux différents éléments sur la&nbsp;page.
      
      Pour définir une colonne de base, il suffit d'ajouter la classe `.col` à une balise, comme&nbsp;suit:
  -
    type: code
    lang: html
    body: |
      <div class="container">
        <div class="row">
          <div class="col"></div>
        </div>
      </div>
  -
    type: text
    body: |
      Par défaut, si une seule `.col` est définie, elle prendra toute la largeur disponible dans sa rangée. Cependant, si d'autres `.col`sont ajoutées, celles-ci se distribueront l'espacenbsp;également.
      
      Par exemple, avec 2&nbsp;colonnes:
  -
    type: codepen
    id: 168a3709b7615aa465d640440ae94a02
    ratio: 34
    custom_ratio: '15'
    tabs: result
  -
    type: text
    body: |
      Le tout devient encore plus intéressant, lorsque l'on comprend qu'il est possible de spécifier sur 12 la largeur d'une colonne simplement en lui ajoutant un tiret suivi du nombre de colonnes&nbsp;désirées.
      
      Par exemple, pour avoir un élément d'une largeur de 3&nbsp;colonnes:
  -
    type: code
    lang: html
    body: '<div class="col-3">...</div>'
  -
    type: codepen
    id: 5beb19dd86e353d524f3c29266d7f3f5
    ratio: 34
    custom_ratio: '15'
    tabs: chromeless
  -
    type: text
    body: 'Toutes les options de largeur de 1 à 12 sont&nbsp;disponibles.'
  -
    type: image
    image: /assets/articles/bootstrap-columns.png
  -
    type: text
    body: |
      Il est possible de spécifier plusieurs colonnes de largeurs différentes à l'intérieur d'une même rangée sans problème. Si le total de ces colonnes excède 12, un retour à la ligne est simplement&nbsp;effectué.
      
      Par exemple:
  -
    type: code
    lang: html
    body: |
      <div class="col-8">1</div>
      <div class="col-4">2</div>
      <div class="col-6">3</div>
  -
    type: codepen
    id: 0808e31079c28a4abcb5ff598ba39bd5
    ratio: 34
    custom_ratio: '15'
    tabs: chromeless
  -
    type: text
    body: |
      La grande force des colonnes Bootstrap est leur aspect responsive. Jusqu'à présent, les colonnes définies gardaient toujours le même ratio, peu importe la dimension de l'écran de l'usager. Cependant, il est possible de définir un ratio à partir d'un [breakpoints](breakpoints) spécifique, en insérant l'abréviation du breakpoint en question avant le nombre de colonnes&nbsp;désirées. Ainsi, la colonne tentera de prendre l'ensemble de la largeur disponible si la dimension de l'écran est inférieure au breakpoint défini et respectera la largeur définie si le breakpoint est&nbsp;atteint.
      
      [Par exemple](https://codepen.io/smnarnold/pen/00b9312d5ea45dcd7f692a49430106fc), des colonnes prenant toute la largeur sur mobile pourrait n'avoir qu'une demi-largeur à partir d'une taille d'écran égale ou supérieur à&nbsp;`md`.
  -
    type: note
    intent: good
    body: 'Pour voir des [exemples de grille&nbsp;Bootstrap](https://getbootstrap.com/docs/5.0/examples/grid/).'
  -
    type: note
    intent: good
    body: 'Pour en savoir, voir ce [billet sur la multitude d''options de colonne Bootstrap](https://getbootstrap.com/docs/5.0/layout/columns/)&nbsp;disponibles.'
  -
    type: note
    intent: exercice
    body: '[Recréez une collection de grilles Bootstrap](https://smnarnold.com/exercice/bootstrap/grille).'
is_hidden: false
title: Grille
template: page-article
color_scheme: auto
preview_color: '#7356ae'
fieldset: page-article
id: 63e0ca91-e641-40d6-a800-3ac740a8120c
