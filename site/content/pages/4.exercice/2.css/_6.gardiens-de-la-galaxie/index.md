body:
  -
    type: text
    body: 'Pour cet examen, nous allons recréer une affiche minimaliste du film [Les gardiens de la&nbsp;galaxie](https://www.imdb.com/title/tt2015381/).'
  -
    type: note
    intent: warning
    body: 'Le HTML est déjà fourni. Vous ne devez en aucun cas le&nbsp;modifier.'
  -
    type: image
    image: /assets/articles/les-gardiens-de-la-galaxie.png
  -
    type: text
    title: Matériel
    level: h2
    body: '[Dossier de départ](http://t.smnarnold.com/gardiens-de-la-galaxie/depart.zip)'
  -
    type: text
    title: Couleurs
    level: h3
    body: |
      Blanc cassé: <span style="background:#efefef; color: black;">#efefef</span>
      Brun: <span style="background:#210e0a; color: white;">#210e0a</span>
      Rouge: <span style="background:#e33e2a; color: white;">#e33e2a</span>
      Orange brulé: <span style="background:#dc4c34; color: white;">#dc4c34</span>
      Orange: <span style="background:#e47f2d; color: white;">#e47f2d</span>
      Jaune: <span style="background:#eec96e; color: black;">#eec96e</span>
  -
    type: text
    title: 'Requis de base'
    level: h2
    body: |
      - Le couleur de fond de la page doit être blanc&nbsp;cassé.
      - L'affiche _(poster)_, doit mesurer 400x590px, être brune, avoir une bordure blanche de 10px de tous les côtés et être parfaitement centrée&nbsp;horizontalement.
      - L'affiche doit avoir une ombre de 20px, égale de tous les côtés. Cette ombre doit être noire, mais ce noir doit avoir une opacité de&nbsp;50%.
  -
    type: text
    title: 'Bandes de couleur'
    level: h2
    body: 'Chaque bande _(stripe)_ doit avoir une hauteur totale de&nbsp;40px. Le texte doit-être en 12px, être centré horizontalement et être de couleur&nbsp;brune.'
  -
    type: text
    title: '1re bande'
    level: h3
    body: |
      - La bande doit être de couleur orange brulé et se situer à 20px du haut de&nbsp;l'affiche. 
      - Le texte doit utiliser la police Helvetica, si cette dernière n'est pas disponible, le navigateur devra utiliser Arial comme police de substitution _(ces fontes sont natives sur Mac et Windows)_.
      - Utilisez la propriété CSS permettant de transformer le texte en&nbsp;majuscules.
      - Centrez verticalement le texte dans la&nbsp;bande.
  -
    type: text
    title: '2e bande'
    level: h3
    body: |
      - La bande doit être de couleur&nbsp;orange. 
      - Le texte doit-être utiliser la police `guardians.woff2` se trouvant dans le dossier `fonts` du dossier de&nbsp;départ.
  -
    type: text
    title: '3e bande'
    level: h3
    body: '- La bande doit être de couleur&nbsp;jaune.'
  -
    type: text
    title: Cassette
    level: h2
    body: |
      - La zone de la cassette _(tape)_ doit prendre toute la largeur de l'affiche et mesurer 130px de haut.
      - L'image `tape.png` doit-être utilisé comme image d'arrière-plan. Elle doit prendre un maximum d'espace tout en étant entièrement visible _(ne pas être coupée)_ et être positionnée horizontalement dans&nbsp;l'espace.
  -
    type: image
    image: /assets/articles/guardians-tape.png
  -
    type: text
    body: '- La fenêtre _(window)_ doit être rouge, mesurer 180x50px, avoir des coins arrondis de 5px, être centrée horizontalement et alignée verticalement avec la première ligne rouge de la&nbsp;cassette.'
  -
    type: image
    image: /assets/articles/guardians-window.png
  -
    type: text
    body: '- Les bobines _(reel)_ sont déjà de la bonne dimension. Il suffit de les positionner dans la fenêtre afin qu''elles soient partiellement tronquées comme sur la référence&nbsp;visuelle.'
  -
    type: image
    image: /assets/articles/guardians-reels.png
  -
    type: text
    title: Gardiens
    level: h2
    body: |
      - Positionnez les gardiens dans le bon ordre au bas de la page. Faites attention à ce qu'ils soient précisément alignés avec le début de la bordure&nbsp;blanche. 
      - Faites attention à l'arme de Gamora qui doit passer par-dessus les jambes de&nbsp;Groot.
  -
    type: text
    title: Remise
    level: h2
    body: |
      M'envoyez un message privé sur Teams contenant un fichier zip&thinsp;🗜 sous le format&nbsp;suivant:
      
      `[prénom]-[nom de famille].zip`
      ex: simon-arnold.zip
is_hidden: false
title: 'Gardiens de la galaxie'
template: page-exercice
color_scheme: auto
preview_color: '#000'
fieldset: page-article
id: b2127695-1acf-4f70-92c5-3659cbd890b6
