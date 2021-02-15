body:
  -
    type: text
    body: 'Les cartes Bootstrap permettent, comme leur nom l''indique, de générer rapidement et facilement des cartes comme&nbsp;celle-ci:'
  -
    type: codepen
    id: a5a5104505211fcfd0878383bb2db3b0
    ratio: 34
    tabs: chromeless
  -
    type: text
    body: 'Les cartes prennent la dimension de leur parent. Il est donc important de les inclure dans une colonne Bootstrap aillant la dimension&nbsp;souhaitée.'
  -
    type: text
    title: Image
    level: h2
    body: |
      Il est possible d'insérer une image dans une carte Bootstrap en ajoutant une balise `<img>` et en lui attribuant la classe `.card-img-top` ou `.card-img-bottom` afin d'indiquer où cette image doit afficher, soit en haut ou en bas de la&nbsp;carte.
      
      Par exemple pour l'afficher en&nbsp;haut:
  -
    type: code
    lang: html
    body: |
      <div class="card">
        <img src="image.jpg" class="card-img-top">
      </div>
  -
    type: text
    title: Corps
    level: h2
    body: 'Le corps de la carte contient son texte principal. Pour le définir, il suffit d''ajouter la classe `.card-body` à l''intérieur de la carte comme&nbsp;ceci:'
  -
    type: code
    lang: html
    body: |
      <div class="card">
        <div class="card-body">Description</div>
      </div>
  -
    type: text
    body: 'Le corps définit un espace à l''intérieur de la carte empêchant sont contenu de toucher à l''image où aux bordures de&nbsp;celle-ci.'
  -
    type: text
    title: Titre
    level: h3
    body: 'À l''intérieur du corps, il est possible d''ajouter un titre en utilisant la balise de titre adéquate et la classe&nbsp;`.card-title` comme&nbsp;suit:'
  -
    type: code
    lang: html
    body: |
      <div class="card">
        <div class="card-body">
          <h3 class="card-title">Titre</h3>
          Description
        </div>
      </div>
  -
    type: text
    title: 'Entête et pied'
    level: h2
    body: |
      L'entête et le pied d'une carte Bootstrap permettent de définir une zone séparée du reste de la carte afin de les mettre en évidence.
      
      Pour définir de telles zones, il suffit d'ajouter des balises avec les classes `.card-header` ou `.card-footer`.
      
      Par exemple:
  -
    type: code
    lang: html
    body: |
      <div class="card">
        <div class="card-header">Entête</div>
      </div>
  -
    type: codepen
    id: e420946f20d8994ea3e0fd67269f162c
    ratio: 34
    tabs: chromeless
  -
    type: text
    title: Liste
    level: h2
    body: |
      Il est aussi possible d'inclure des listes en utilisant la composante de liste de Bootstrap `.list-group` et en y ajoutant le modificateur `.list-group-flush`.
      
      Par exemple:
  -
    type: code
    lang: html
    body: |
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Fait 1</li>
          <li class="list-group-item">Fait 2</li>
          <li class="list-group-item">Fait 3</li>
        </ul>
      </div>
  -
    type: codepen
    id: e2007f11c3f2254c79581a29043bd46e
    ratio: 34
    tabs: chromeless
  -
    type: text
    title: Horizontal
    level: h2
    body: |
      Il est possible de changer la direction verticale d'une carte à horizontale en insérant une nouvelle rangée Bootstrap à l'intérieur de&nbsp;celle-ci.
      
      Par exemple:
  -
    type: code
    lang: html
    body: |
      <div class="card">
        <div class="row">
          <div class="col-5">
            <img src="image.jpg" class="img-fluid">
          </div>
          <div class="col-7">
            <div class="card-body">Description</div>
          </div>
        </div>
      </div>
  -
    type: codepen
    id: a55624bdd02102c01b6f0af926b6755d
    ratio: 56
    custom_ratio: '10'
    tabs: chromeless
  -
    type: note
    intent: warning
    body: 'Remarquez comment la class `.card-img-top` a été remplacée par `.img-fluid` afin de faire en sorte que l''image s''ajuste sur la largeur à sa&nbsp;colonne.'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir ce [billet sur les cartes&nbsp;Bootstrap](https://getbootstrap.com/docs/5.0/components/card/).'
is_hidden: false
title: Cartes
template: page-article
color_scheme: auto
preview_color: '#7356ae'
fieldset: page-article
id: cecf2e2e-f00c-4d38-91c6-3eba1053ae75
