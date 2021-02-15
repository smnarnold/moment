body:
  -
    type: text
    body: |
      L'échafaudage, plus connu sous son nom anglophone _"scaffolding"_, consiste à créer une arborescence de dossiers et de fichiers qui seront utilisés afin de créer un site web. Le terme a été emprunté au domaine de la construction, où avant même de poser la première brique, un échafaudage est monté afin de simplifier la tâche à&nbsp;accomplir.
      
      Cette tâche devrait être accomplie par le membre de votre équipe ayant le moins contribué au GitHub du projet jusqu'à présent. Cette spécificité n'est en aucun cas une punition, mais plutôt une occasion de se faméliariser plus amplement avec cette technologie alors que le projet en est encore à ses premiers balbutiements. Si vous rencontrez des problèmes, dites vous qu'ils seront facilement réglables à ce stade-ci. Il vaut donc mieux vivre ses premières accrochages GitHub dès maintenant si vous êtes pour en&nbsp;avoir.
  -
    type: text
    title: Requis
    level: h2
    body: |
      1. Créez à la racine de votre projet les dossiers suivant:
      	- `img`
          - `styles`
          - `scripts`
      2. Allez sur l'[accueil de Bootstrap](https://getbootstrap.com/), dans la section JsDelivr et copier les liens CSS et JavaScript permettant d'inclure Bootstrap sur chacune des pages HTML de votre&nbsp;projet.
  -
    type: note
    intent: generic
    body: 'Ces liens pointent sur des fichiers en ligne hébergés par des CDN _(Content Delivery Network)_. Ces services permettent d''inclure rapidement et facilement des libraries dans un projet et de maximiser la cache des navigateurs afin d''offrir une performance optimale à&nbsp;l''utilisateur.'
  -
    type: text
    body: |
      3. Créez ensuite une feuille de styles globale nommée `main.css` dans le dossier `styles`. Cette feuille de style contiendra tous les styles de base partagés par les différentes pages de votre site _(famille de fonte, taille de fontes, variables de couleur,&nbsp;etc.)_. 
      4. Dans le dossier `styles`, créez une feuille de styles par&nbsp;page:
      	- `accueil.css`
          - `discographie.css`
          - `palmares.css` _(Uniquement pour les équipes de&nbsp;3)_
          
      Ces feuilles de styles contiendront les styles unique de chaque&nbsp;page.
      
      5. À la fin de la feuille de styles globale _(Après tous les styles communs)_, utilisez la fonctionnalitée CSS `@import` afin d'importer toutes les sous-feuilles de styles propre à chaque&nbsp;pages.
  -
    type: note
    intent: mdn
    body: 'Pour en savoir, voir cet [article MDN à propos de&nbsp;@import](https://developer.mozilla.org/fr/docs/Web/CSS/@import).'
  -
    type: text
    body: |
      6. Sur chacune des pages HTML, importez la feuille de style globale _(Elle contient maintenant toutes les autres grâce à&nbsp;`@import`)_.
      7. Créez un fichier JavaScript intitulé `main.js` dans le dossier `scripts` et incorporez le sur chacune des pages. Ce fichier contiendra les scripts globaux devant être disponibles sur toutes les&nbsp;pages.
      8. Dans le dossier `scripts` , créez ensuite un fichier Javascript par page:
      	- accueil.js
          - discographie.js
          - parlmares.js _(Uniquement pour les équipes de&nbsp;3)_
          
      Incorporez chacun de ces fichiers dans leur page HTML&nbsp;respective.
  -
    type: image
    image: /assets/articles/pas-plus-complique-que-ca.jpeg
is_hidden: false
title: Scaffolding
subtitle: Échafaudage
template: page-exercice
color_scheme: auto
preview_color: '#000'
preview: /assets/previews/scaffolding.jpg
fieldset: page-article
id: 322e9182-0fa4-421e-aaff-e8a5d31f7a35
