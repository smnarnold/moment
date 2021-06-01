body:
  -
    type: text
    body: |
      Pour cet exercice, nous allons recréer l'interface en mode galerie de l'application de vidéoconférence&nbsp;[Zoom](https://fr.wikipedia.org/wiki/Zoom_Video_Communications).
      
      Un [Pen de départ](https://codepen.io/smnarnold/pen/eYgXBXp?editors=0010) vous est fourni. Vous n'avez qu'à écrire du JS _(nul besoin de modifier le HTML ou le&nbsp;CSS)_.
      
      Aperçu du résultat:
  -
    type: image
    image: /assets/articles/fetch-interface-zoom.jpg
  -
    type: note
    intent: generic
    body: 'Les personnes affichées seront différentes dans votre exercice puisqu''elles sont&nbsp;aléatoires.'
  -
    type: text
    title: Requis
    level: h2
    body: '1. Il faut préalablement récupérer les informations des personnes participant à la réunion. Pour ce faire, il faut utiliser `fetch` afin d''accéder à l''API de [randomuser.me](https://randomuser.me) à l''adresse&nbsp;suivante:'
  -
    type: code
    lang: html
    body: 'https://randomuser.me/api?results=9'
  -
    type: note
    intent: generic
    body: 'Le paramètre `results=9` permet d''indiquer le nombre d''usagers&nbsp;désiré.'
  -
    type: text
    body: |
      2. Une fois le résultat reçu, convertissez-le en&nbsp;JSON.
      3. Faites un `console.log()` du JSON obtenu afin de voir ce qu'il contient&nbsp;exactement.
      4. Bouclez sur toutes les personnes dans le JSON afin de générer leur aperçu HTML dans l'élément&nbsp;`.zoom`.
      5. Affichez l'image large, le prénom et le nom de chaque&nbsp;personne.
      6. Basez-vous sur les classes CSS déjà présentes afin de déterminer la structure HTML à&nbsp;reproduire.
  -
    type: text
    title: 'Notes de cours'
    level: h2
    body: '- [JSON](https://smnarnold.com/cours/javascript/json)'
is_hidden: false
title: 'Fetch - Interface Zoom'
template: page-exercice
color_scheme: auto
preview_color: '#000'
preview: /assets/previews/fetch-interface-zoom-preview.jpg
fieldset: page-article
id: ddb33042-4e3d-4afd-a7fd-9fe2e6fdb7ba
