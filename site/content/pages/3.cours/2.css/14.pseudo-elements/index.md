title: Pseudo-éléments
template: page-article
color_scheme: auto
body:
  -
    type: text
    body: |
      Les pseudo-éléments sont utilisés pour ajouter du contenu ou des styles à un sélecteur de façon uniforme. 
      
      Par exemple, un client pourrait demander d'ajouter l'emoji 🔗 à tous les liens sur son site. Bien qu'il serait possible de manuellement copier/coller l'émoji partout, ceci consommerait du temps, comporterait un risque d'erreur et si de nouveaux liens étaient ajoutés par la suite, rien ne garantirait que la personne penserait à copier ledit&nbsp;émoji. 
      
      Heureusement, les pseudo-éléments peuvent&nbsp;aider!
  -
    type: text
    title: 'Before & After'
    level: h2
    body: |
      Les pseudo-éléments `::before` et `::after` permettent d'ajouter du contenu à l'intérieur d'un élément via la propriété&nbsp;`content`. 
      
      Comme leurs noms l'indiquent: 
      
      - `::before` ajoute un contenu au&nbsp;début&thinsp;⬅️ 
      - `::after` ajoute un contenu à la&nbsp;fin&thinsp;➡️
  -
    type: codepen
    id: yLyPqmR
    theme: light
    ratio: 34
    tabs: result
  -
    type: note
    intent: generic
    body: 'Remarquez comment le double deux points `::` sert à séparer le sélecteur de base de son&nbsp;pseudo&#8209;élément.'
  -
    type: note
    intent: warning
    body: 'Anciennement, il était possible d''écrire ses pseudo-éléments avec un seul&nbsp;`:`, comme les [pseudo-classes](./pseudo-classes). Cependant, depuis l''arrivée de CSS3, cette pratique est&nbsp;désuète.'
  -
    type: text
    body: |
      `::before` et `::after` acceptent les mêmes propriétés CSS qu'un sélecteur normal. Il est donc courant de les voir utilisés pour jouer un rôle similaire à celui d'un tag HTML normal. 
      
      Par exemple, il est possible d'afficher une image personnalisée via la propriété background-image plutôt qu'un&nbsp;emoji.
  -
    type: codepen
    id: YzPEOwp
    theme: light
    ratio: 34
    tabs: 'css,result'
  -
    type: text
    body: 'Ils sont aussi souvent utilisés en combinaisons avec les [pseudo-classes](./pseudo-classes) et les [transitions](./transition) afin de créer des effets de&nbsp;survole.'
  -
    type: codepen
    id: vYOoXGo
    theme: light
    ratio: 34
    tabs: 'css,result'
  -
    type: text
    title: 'Autres pseudo-éléments'
    level: h2
    body: 'Il existe évidemment d''autres pseudo-éléments. Cependant puisque leur usage est moins répandu. Nous ne nous attarderons&nbsp;pas.'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir l''[article MDN🦖 sur l''ensemble des&nbsp;pseudo-éléments](https://developer.mozilla.org/fr/docs/Web/CSS/Pseudo-%C3%A9l%C3%A9ments#Liste_des_pseudo-%C3%A9l%C3%A9ments)'
  -
    type: note
    intent: generic
    body: 'Psssst! Tous les émojis affichés au début des boites de texte comme celle-ci sont ajoutés via le pseudo-élément `::before`'
fieldset: page-article
id: 8274b16d-5d23-4978-a3c8-73183f9a94ad
