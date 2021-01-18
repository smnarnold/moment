title: Inspecteur
template: page-article
color_scheme: auto
body:
  -
    type: text
    body: |
      <style>
        .demo-inspecteur {
          display: inline-block;
          border: dotted 1px #00c774;
          padding: 1em;
        }
      </style>
      L'inspecteur&thinsp;🕵️‍♂️ est un outil précieux, présent dans tous les navigateurs modernes. Il permet de trouver la source d'un problème et de tester rapidement différentes pistes de &nbsp;solutions.
  -
    type: note
    intent: generic
    body: 'Dans le cadre de cet exemple, l''inspecteur de Chrome sera utilisé, mais la majorité des inspecteurs offrent les mêmes options de&nbsp;base.'
  -
    type: text
    body: |
      Pour afficher l'inspecteur, vous&nbsp;pouvez:
      
      - Faire un clic droit sur la souris&thinsp;🖱️ et choisir l'option&nbsp;_Inspecter_.
      - Utiliser le raccourci clavier&thinsp;⌨️
      	- **Windows**: <kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>i</kbd> **ou** <kbd>F12</kbd>
          - **Mac**: <kbd>command</kbd>+<kbd>option</kbd>+<kbd>i</kbd> **ou** <kbd>F12</kbd>
          
      Dans le coin supérieur droit&thinsp;↗️, vous remarquerez l'icône ⋮ permettant d'accéder aux paramètres d'affichage de l'inspecteur. La première option, _Dock side_, vous permettra de sélectionner où l'inspecteur devrait&nbsp;afficher.
  -
    type: image
    image: /assets/articles/dock-side.jpg
  -
    type: text
    body: |
      1. Dans une fenêtre séparée
      2. À gauche
      3. En bas
      4. À droite _(Par défaut)_
  -
    type: text
    title: 'Outil d''inspection'
    level: h2
    body: |
      Remarquez en haut à gauche de l'inspecteur l'icône de l'outil&nbsp;d'inspection ![](/assets/articles/inspecteur-icone-inspection.png). 
      
      En cliquant sur cette icône, elle deviendra bleue et vous permettra de cibler un élément en particulier. Elle mettra en évidence tous les éléments survolés en les surlignant, afin que vous puissiez sélectionner l'élément de votre choix dans la&nbsp;page.
  -
    type: note
    intent: generic
    body: |
      L'élément est surligné en bleu&thinsp;🟦
      Son `padding` en jaune&thinsp;🟨
      Son `margin` en&nbsp;orange&thinsp;🟧
  -
    type: text
    body: |
      Lorsque l'élément souhaité est surligné, il suffit de cliquer sur celui-ci pour le&nbsp;sélectionner.
      
      Par exemple, inspecter la boite&nbsp;suivante:
      
      <span class="demo-inspecteur">Inspectez moi</span>
      
      Vous devriez voir dans la partie gauche de l'inspecteur la structure HTML de la page. Cette structure est communément appelée le _DOM tree_. Si vous portez attention, vous remarquerez qu'une balise dans cette structure est surlignée. Cette balise correspond à l'élément&nbsp;inspecté.
  -
    type: image
    image: /assets/articles/dom-tree-inspecteur.jpg
  -
    type: text
    title: 'DOM Tree'
    level: h2
    body: 'Lorsque vous êtes dans le _DOM Tree_, vous pouvez utiliser les flèches sur votre clavier&thinsp;⬇️&thinsp;⬆️ pour inspecter l''élément précédent ou suivant ou tout simplement votre souris pour cliquer sur un élément en particulier. Vous remarquerez que dès que vous sélectionnez un nouvel élément, celui-ci se surligne dans le _DOM Tree_ **ET** dans la page&nbsp;simultanément.'
  -
    type: image
    image: /assets/articles/dom-tree-sync.gif
  -
    type: text
    body: 'Au bas de la fenêtre du _DOM Tree_, toutes les balises englobant l''élément sélectionné sont listées. Allant de l''élément lui-même jusqu''à la balise `html`. Il est possible de cliquer sur chacune de ces balises pour les inspecter directement si&nbsp;désirées.'
  -
    type: image
    image: /assets/articles/dom-tree-breadcrumb.jpg
  -
    type: text
    title: 'Rechercher dans le DOM'
    level: h3
    body: |
      Lorsque le focus est dans le _DOM Tree_, il est possible de rechercher un élément en utilisant un raccourci clavier&thinsp;⌨️
      
      - **Windows**: <kbd>ctrl</kbd>+<kbd>f</kbd>
      - **Mac**: <kbd>command</kbd>+<kbd>f</kbd>
      
      L'élément recherché peut être du texte, une balise, une classe, un sélecteur&nbsp;CSS,&nbsp;etc.
  -
    type: image
    image: /assets/articles/dom-tree-search.gif
  -
    type: text
    title: 'Modification du DOM'
    level: h3
    body: |
      Vous pouvez modifier le DOM directement dans l'inspecteur afin de prévisualiser l'impact d'une modification. Pour ce faire, il suffit de faire un double-clic sur l'élément que vous désirez modifier _(texte, balise, classe, ID, style, attribut, etc.)_ ou de faire un clic droit sur l'élément en question et sélectionner l'option _Edit text_ pour du texte ou _Edit as HTML_ pour les&nbsp;autres.
      
      L'élément devrait alors se surligner pour indiquer que vous pouvez le&nbsp;modifier. Lorsque vous avez terminé votre modification, vous pouvez appuyer sur la touche&nbsp;<kbd>↵</kbd> pour confirmer votre changement ou simplement cliquer à l'extérieur du dit&nbsp;élément.
      
      Par exemple, pour modifier un&nbsp;texte:
  -
    type: image
    image: /assets/articles/dom-tree-modification.gif
  -
    type: text
    body: 'Ou encore, modifiez une&nbsp;classe:'
  -
    type: image
    image: /assets/articles/dom-tree-modification-class.gif
  -
    type: text
    body: 'Vous pouvez aussi déplacer un élément dans le dom. Pour ce faire, il suffit de faire un glisser-déposer de votre élément _(Drag and drop)_&thinsp;↕️'
  -
    type: image
    image: /assets/articles/dom-tree-move-element.gif
  -
    type: text
    body: 'Vous pouvez même supprimer un élément en cliquant simplement sur la touche&nbsp;<kbd>delete</kbd>'
  -
    type: image
    image: /assets/articles/dom-tree-delete.gif
  -
    type: note
    intent: generic
    body: 'Tout comme dans un éditeur, il est possible de revenir en arrière si une modification  ne donne pas les résultats escomptés en utilisant le raccourci clavier <kbd>ctrl</kbd>+<kbd>z</kbd> sur Windows ou <kbd>command</kbd>+<kbd>z</kbd> sur&nbsp;Mac.'
  -
    type: note
    intent: exercice
    body: 'Allez sur le [site d''Urbania](https://urbania.ca/) et modifiez le titre de l''article en vedette en utilisant&nbsp;l''inspecteur.'
  -
    type: text
    title: Styles
    level: h2
    body: 'L''onglet _Styles_ permet de voir les règles CSS ayant un impact sur l''apparence de l''élément&nbsp;sélectionner.'
  -
    type: text
    title: 'Ordre d''affichage des règles'
    level: h3
    body: |
      L'ordre d'affichage des règles dépend de la priorité de chacune d'entre elles. Plus une règle est spécifique, plus elle apparaitra tôt dans cette liste. Moins elle l'est, par exemple les règles de bases définies par le navigateur _(user agent stylesheet)_, plus elle sera&nbsp;basse.
      
      Par exemple:
  -
    type: image
    image: /assets/articles/inspecteur-style-priority.jpg
  -
    type: text
    body: |
      1. On peut voir que le 1<sup>er</sup> élément affiché dans la liste est la classe `.demo-inspecteur` présent sur l'élément lui-même. On voit que cette classe contrôle trois&nbsp;propriétés.
      2. Ensuite vient une règle moins prioritaire `*, :after, :before`. Cette règle dicte que tous les éléments _([Sélecteur *](../css/selecteurs#selecteur-universel))_ et tous les pseudo-éléments [:before et :after](../css/pseudo-elements#before-after) doivent avoir un `box-sizing: inherit;`.
      3. Finalement, la règle `@media (min-width: 768px) .page-article` indique que la taille de la fonte de notre élément est affectée par sont parent `.page-article` et qu'à partir de 768px et plus, cette taille doit-être de&nbsp;`22px`.
  -
    type: text
    title: 'Priorité des styles'
    level: h3
    body: |
      Une propriété d'un élément ne peut avoir qu'une valeur à la fois. Ainsi, lorsque deux règles définissent une même propriété sur un même élément, le navigateur détermine quelle règle est prioritaire et favorise sa valeur. Celle de la règle moins prioritaire continue d'exister, mais n'est simplement pas prise en&nbsp;compte.
      
      Dans notre exemple précédent, nous avons vu que la règle `.demo-inspecteur` a priorité sur la règle `*, :after, :before`. Donc si cette dernière définit une propriété aussi définit dans `.demo-inspecteur`, cette propriété apparaitra <del>raturée</del> pour nous indiquer que bien qu'elle n'est pas&nbsp;appliquée.
  -
    type: image
    image: /assets/articles/inspecteur-styles-override.jpg
  -
    type: text
    body: |
      Une propriété peut aussi être <del>raturée</del> et avoir une icône ⚠️ à sa gauche lorsqu'elle n'est pas reconnue par le navigateur. Généralement, ceci est signe que la propriété ou sa valeur n'est pas écrite&nbsp;correctement.
      
      Un exemple classique pourrait être `height` qui est régulièrement mal orthographié&nbsp;`heigth`
  -
    type: image
    image: /assets/articles/styles-invalid.jpg
  -
    type: text
    title: 'Filtrer les propriétés'
    level: h3
    body: |
      Il arrive parfois que plusieurs règles affectent un élément ou que plusieurs propriétés soient définies, rendant ainsi la recherche d'une propriété en particulier&nbsp;ardue. 
      
      Heureusement, il est possible d'utiliser le champ _Filter_ afin de filtrer les propriétés affichées. 
      
      Par exemple, si je ne désire voir que les propriétés affectant le&nbsp;`font-size`:
  -
    type: image
    image: /assets/articles/styles-filter.gif
  -
    type: text
    title: 'Voir les pseudo-classes (:hover, :focus, etc.)'
    level: h3
    body: |
      Il est parfois nécessaire d'examiner les styles d'un élément lorsqu'il est survolé _(hover)_, focusé _(focus)_, actif _(active)_, visité _(visited)_, &nbsp;etc.
      
      Pour ce faire, il est possible de cliquer sur le bouton `:hov` dans l'onglet _Styles_ de l'inspecteur afin de forcer leur&nbsp;affichage.
      
      Par exemple, si j'examine un lien sur cette page, je remarquerai qu'il a un `background-size: 100% 40%;` par défaut, mais qu'il est remplacé par un `background-size: 100% 100%;` lorsque&nbsp;survolé.
  -
    type: image
    image: /assets/articles/styles-hov.gif
  -
    type: note
    intent: generic
    body: 'Remarquez comment la règle de style `.wysiwyg a:hover` est prioritaire sur la règle `.wysiwyg a`. La propriété `background-size` et sa valeur par défaut sont donc <del>raturés</del> puisqu''ils sont remplacés par une nouvelle définition dans `.wysiwyg a:hover`.'
  -
    type: text
    title: 'Ajout de propriétés'
    level: h3
    body: 'Il est possible de tester rapidement des styles sur un élément en lui ajoutant des propriétés. Pour ce faire, il suffit de cliquer dans la zone `element.style` situé dans le haut de l''onglet Styles et de définir notre&nbsp;propriété.'
  -
    type: image
    image: /assets/articles/styles-add.gif
  -
    type: note
    intent: good
    body: 'Lorsqu''une propriété ou valeur apparait en suggestion semi-transparente, vous pouvez appuyer sur la touche <kbd>tab</kbd> pour qu''elle se complète&nbsp;automatiquement.'
  -
    type: text
    title: 'Désactivation/réactivation d''une propriété'
    level: h3
    body: 'Lorsqu''une règle de style est survolée, les boites à cochée de chacune des propriétés deviennent visibles vous permettant de désactiver/réactiver chaque propriété à votre&nbsp;guise.'
  -
    type: image
    image: /assets/articles/styles-toggle.gif
  -
    type: text
    title: 'Modification d''une valeur'
    level: h3
    body: |
      Il est possible de modifier une valeur simplement en cliquant sur&nbsp;celle-ci.
      
      Par exemple, si je désire voir comment réagirait mon élément en `display: block;` plutôt qu'en&nbsp;`inline-block`:
  -
    type: image
    image: /assets/articles/styles-modification.gif
  -
    type: text
    body: 'Dans le cadre d''une valeur numérique, il est même possible d''augmenter/diminuer une valeur simplement positionnant le curseur sur la valeur en question et en utilisant les flèches ⬆️ et ⬇️ du&nbsp;clavier.'
  -
    type: image
    image: /assets/articles/styles-modify-number.gif
  -
    type: note
    intent: generic
    body: 'Lors de la modification d''une valeur numérique avec les flèches du clavier, la valeur fluctue de 1 unité par défaut. Cependant, il est possible en tenant la touche <kbd>alt</kbd> enfoncée de modifier la valeur de 0.1 pour plus de précision ou encore de 10 avec la touche de <kbd>shift&nbsp;↑</kbd> pour aller plus rapidement à une valeur&nbsp;éloignée.'
  -
    type: note
    intent: warning
    body: 'Tous les changements effectués sont temporaires. Recharger la page restaure les styles&nbsp;originaux.'
  -
    type: text
    title: 'Outil de simulation d''appareil'
    level: h2
    body: |
      Remarquez en haut à gauche de l'inspecteur l'icône de l'outil de simulation d'appareil ![](/assets/articles/simulation-appareil.png).
      
      En cliquant sur cette icône, elle deviendra bleue et vous permettra de sélectionner dans un menu déroulant, se trouvant au sommet de votre page, la résolution de l'appareil à&nbsp;simuler. Cette liste contient certaines des résolutions les plus populaires, par&nbsp;exemple:
      
      - iPhone
      - iPad
      - iPad Pro
      - Pixel
      - Galaxy
      - Etc.
      
      Il est aussi possible de choisir l'option _Responsive_ afin de modifier librement la résolution de l'écran à l'aide des poignées || et = se trouvant respectivement sur le côté droit et en bas de la&nbsp;fenêtre.
fieldset: page-article
id: ce5c69d6-96f1-40c3-a06f-88ab53c8bc9a
