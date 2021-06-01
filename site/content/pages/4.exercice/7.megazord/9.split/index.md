body:
  -
    type: text
    body: |
      Le _split_ n'est pas en une composante Bootstrap en soi, mais plutôt une technique de mise en page fréquemment utilisée afin de combiner un contenu texte et une image.
      
      Aperçu du résultat&nbsp;final:
  -
    type: image
    image: /assets/articles/megazord-album-discographie.jpg
  -
    type: text
    title: Requis
    level: h2
    body: |
      - Commencez par créer une `<section>` correspondant au premier album dans la zone du contenu principal de la&nbsp;page. Celle-ci servira de gabarit aux autres albums plus&nbsp;tard.
      - Ajouter un espace vertical de 20px en haut et en bas de cette section.
      - Insérez dans cette section une nouvelle rangée Bootstrap vous permettant de gérer le positionnement des éléments qui en feront&nbsp;partie.
  -
    type: note
    intent: warning
    body: 'Une rangée définit toujours un nouveau contexte de 12&nbsp;colonnes, peu importe son&nbsp;parent.'
  -
    type: text
    body: |
      - Par défaut le split doit afficher en mode vertical, donc chaque colonne doit prendre toute la&nbsp;largeur.
      - Insérez dans la première colonne les informations suivantes:
      	- Le titre de&nbsp;l'album.
          - Une liste ordonnée des&nbsp;chansons.
          - Un lien _"En savoir plus"_ ayant l'apparence d'un bouton vers un site externe donnant plus d'information sur l'album. Par exemple, sa page&nbsp;Wikipédia.
      - Insérez une image de l'album dans la deuxième colonne. Cette image doit prendre toute la largeur de sa colonne et avoir un espace de 20px vers le haut afin de ne pas toucher au bouton situé en haut de&nbsp;lui.
      
      Aperçu du split en&nbsp;`xs`:
  -
    type: image
    image: /assets/articles/megazord-album-mobile-1613093256.
  -
    type: text
    body: |
      - À partir du breakpoint `sm`, le split doit afficher en format horizontal. La colonne du contenu texte doit avoir une largeur équivalente à 5&nbsp;colonnes et celle de l'image de 7&nbsp;colonnes.
      - L'espace vertical de la section doit passer de 20px à 40px à partir du breakpoint&nbsp;`sm`.
      - Toujours à partir du breakpoint `sm`, l'espace en haut de l'image doit-être&nbsp;retirée.
      
      Aperçu du split en&nbsp;`sm`:
  -
    type: image
    image: /assets/articles/megazord-album-desktop.jpeg
  -
    type: text
    body: |
      - Recopiez cette `<section>` afin de créez les autres albums et mettez leurs informations à&nbsp;jour.
      - À partir du breakpoint `sm`, les `<section>` d'albums impairs doivent afficher l'image de l'album avec le contenu&nbsp;texte.
    title: 'Mise en page'
    level: h2
  -
    type: note
    intent: generic
    body: 'Si votre groupe à plusieurs albums à son actif, vous pouvez vous limiter à trois albums&nbsp;seulement.'
is_hidden: false
title: Split
template: page-exercice
color_scheme: auto
preview_color: '#0c852e'
preview_abbr: 🖖
fieldset: page-article
id: b656c680-1004-421e-970a-ca95bcdd08bf
