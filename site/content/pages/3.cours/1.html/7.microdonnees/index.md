body:
  -
    type: text
    body: |
      En tant qu'humains🧍, lorsque nous parcourons une page web il nous est possible d'effectuer des corrélations entre différentes informations afin de mieux les comprendre et les interpréter dans leur contexte. Cependant, les moteurs de recherche&thinsp;🤖 n'ont pas encore atteint ce niveau de sophistication. Il est donc important de les aider avec des balises et attributs supplémentaires.
      
      Par exemple, si un article est intitulé _"Avatar"_, est-ce un article à propos des [icônes utilisées afin de représenter une personne](https://fr.wikipedia.org/wiki/Avatar_(informatique)) ou encore du [film de James Cameron](https://fr.wikipedia.org/wiki/Avatar_(film,_2009))?&thinsp;🤔
  -
    type: image
    image: /assets/articles/travolta-avatar-small.gif
  -
    type: text
    body: |
      Sans même y réfléchir, une image répondra probablement à notre question, mais pour le moteur de recherche qui n'est pas en mesure d'analyser l'image, la question restera&nbsp;entière.
      
      D'où l'importance de pouvoir lui spécifier qu'une information est à propos d'un film&thinsp;🎥, un lieu, une personne,&nbsp;etc. Ainsi, le moteur de recherche pourra déterminer avec plus de précision quand afficher notre page, comment gérer son aperçu sur la page de&nbsp;résultats, comment l'utiliser avec des assistants vocaux _(Alexa, Google Home, Siri,&nbsp;etc.)_, gérer son affichage en mode lecture _(Reader mode)_,&nbsp;etc.
  -
    type: text
    title: Schema.org
    level: h2
    body: |
      [Schema.org](https://schema.org/docs/schemas.html) est une communauté visant à créer, maintenir et promouvoir les microdonnées. Le site fut originalement fondé&nbsp;par:
      
      - Google
      - Microsoft
      - Yahoo
      - Yandex&thinsp;🇷🇺
      
      Il recense les microdonnées disponibles et reconnues par les moteurs de recherche les plus&nbsp;communs.
  -
    type: text
    title: Utilisation
    level: h2
    body: 'Reprenons l''exemple du film Avatar. Une partie du code sur notre page pourrait ressembler à&nbsp;ceci:'
  -
    type: code
    lang: html
    body: |
      <div>
       <h1>Avatar</h1>
       <span>Directeur: James Cameron</span>
       <span>Science fiction</span>
       <img src="https://ex.smnarnold.com/microdata/avatar.jpeg">	
      </div>
  -
    type: text
    title: itemscope
    level: h3
    body: 'Afin d''indiquer que ces informations ont un lien, il est possible de leur spécifier un contexte commun via `itemscope`:'
  -
    type: code
    lang: html
    body: |
      <div itemscope>
       <h1>Avatar</h1>
       <span>Directeur: James Cameron</span>
       <span>Science fiction</span>
       <img src="https://ex.smnarnold.com/microdata/avatar.jpeg">	
      </div>
  -
    type: text
    body: 'Ainsi, le contenu enfant de la balise ayant l''attribut `itemscope` est à propos d''un item en&nbsp;particulier.'
  -
    type: text
    title: itemtype
    level: h3
    body: 'Afin d''être plus précis, il est possible de spécifier le type d''item abordé en ajoutant l''attribut `itemtype` après&nbsp;`itemscope`.'
  -
    type: code
    lang: html
    body: |
      <div itemscope itemtype="https://schema.org/Movie">
       <h1>Avatar</h1>
       <span>Directeur: James Cameron</span>
       <span>Science fiction</span>
       <img src="https://ex.smnarnold.com/microdata/avatar.jpeg">	
      </div>
  -
    type: text
    body: |
      Dans ce cas, il s'agit d'un item de type&nbsp;_Movie_. 
      
      Le type est spécifié en utilisant une URL pointant vers une définition de&nbsp;[schema.org](https://schema.org/).
  -
    type: note
    intent: good
    body: 'Pour savoir en savoir plus, voir cette [liste de tous les types de schema.org](https://schema.org/docs/full.html)'
  -
    type: text
    title: itemprop
    level: h3
    body: |
      Il est ensuite possible de spécifier des propriétés propres à l'item. Ces propriétés sont définies dans la page schema.org correspondant au type d'item en&nbsp;question. 
      
      Dans cet exemple, toutes les propriétés disponibles afin de décrire un film se trouvent à l'adresse suivante: [schema.org/Movie](https://schema.org/Movie).
  -
    type: code
    lang: html
    body: |
      <div itemscope itemtype="https://schema.org/Movie">
       <h1 itemprop="name">Avatar</h1>
       <span>Directeur: <span itemprop="director">James Cameron</span></span>
       <span itemprop="genre">Science fiction</span>
       <img itemprop="image" src="https://ex.smnarnold.com/microdata/avatar.jpeg">	
      </div>
  -
    type: text
    body: |
      Ainsi, les moteurs de recherches comprendront qu'un film de science-fiction, appelé Avatar et dirigé par James Cameron est mentionné sur cette&nbsp;page. 
      
      Une image de référence du film est même fournie au cas où le moteur de recherche déciderait d'afficher un aperçu de la page sur sa page de&nbsp;résultats.
  -
    type: text
    title: Meta
    level: h3
    body: 'Il est possible que certaines informations soient pertinentes pour un moteur de recherche, mais non désirables pour le lecteur. Ainsi, il est possible d''utiliser la balise `<meta>` afin de transmettre  l''information de n''importe quelle `itemprop` sans toutefois&nbsp;l''afficher.'
  -
    type: code
    lang: html
    body: |
      <div itemscope itemtype="https://schema.org/Movie">
       <h1 itemprop="name">Avatar</h1>
       <span>Directeur: <span itemprop="director">James Cameron</span></span>
       <span itemprop="genre">Science fiction</span>
       <img itemprop="image" src="https://ex.smnarnold.com/microdata/avatar.jpeg">
       <meta itemprop="sameAs" content="https://www.imdb.com/title/tt0499549/">
      </div>
  -
    type: text
    body: |
      Dans ce cas&thinsp;👆, la propriété `sameAs` indique que le sujet de l'item est le même que celui de l'url spécifiée _(page IMDb d'Avatar)_. Le but de cette propriété est d'offrir une référence connue au moteur de recherche afin qu'il comprenne exactement le sujet&nbsp;traité.
      
      Cependant, pour des raisons esthétiques, il est possible de cacher cette&nbsp;information.
  -
    type: text
    title: Emboitage
    level: h2
    body: |
      Nous avons vu comment définir un item de base. Néanmoins, il est fréquent que des items en contiennent&nbsp;d'autres. 
      
      Dans l'exemple précédent, il n'y avait qu'un item de type _Movie_. Cependant, il aurait été possible d'avoir un item enfant de type _Person_, afin de décrire plus amplement James&nbsp;Cameron.
      
      Pour ce faire, un élément `itemprop` doit-être bonifié avec son propre contexte `itemscope` et propre type&nbsp;`itemtype`.
  -
    type: code
    lang: html
    body: |
      <div itemscope itemtype="https://schema.org/Movie">
       <h1 itemprop="name">Avatar</h1>
       <span>Directeur: 
         <span itemprop="director" itemscope itemtype="https://schema.org/Person">
           <span itemprop="givenName">James</span>
           <span itemprop="familyName">Cameron</span>
         </span>
       </span>
       <span itemprop="genre">Science fiction</span>
       <img itemprop="image" src="https://ex.smnarnold.com/microdata/avatar.jpeg">	
      </div>
  -
    type: text
    body: 'Ainsi, il est spécifié aux moteurs de recherche que le directeur du film est une personne, que son prénom _(givenName)_ est James et que son nom de famille _(familyName)_ est&nbsp;Cameron.'
  -
    type: note
    intent: tool
    body: 'Pour tester ses microdonnées, voir le site [test des résultats enrichis](https://search.google.com/test/rich-results) de&nbsp;Google.'
  -
    type: note
    intent: exercice
    body: 'Ajouter les microdonnées requises&thinsp;⚽ [codepen.io/smnarnold/pen/bGemJXO](https://codepen.io/smnarnold/pen/bGemJXO?editors=1000)'
  -
    type: note
    intent: good
    body: 'Un grand merci au [Getting started de schema.org](https://schema.org/docs/gs.html) qui a grandement contribué à la rédaction de ce&nbsp;billet.'
title: Microdonnées
template: page-article
color_scheme: auto
preview_color: '#990000'
fieldset: page-article
id: 94180c9d-b914-4f8b-b75f-ecdd10a289c2
