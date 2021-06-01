body:
  -
    type: text
    body: |
      Pour cet exercice, vous devrez partir d'un [Pen existant](https://codepen.io/smnarnold/pen/99a14a34ee84764fb028855ee27cbab3). Swiper, ainsi que certains éléments HTML de base sont déjà&nbsp;fournis.
      
      Pour chaque mise en situation à réaliser lors de cet exercice, vous&nbsp;devrez:
      
      - Faire un `fork` d'un Pen précédent afin d'avoir les éléments HTML de base, mais ne pas effacer la mise en situation&nbsp;précédente.
      - Nommer chacune de ces copies en fonction du nom de l'étape actuelle. Par exemple, pour l'étape 1, nommer votre pen: `Swiper - Étape 1`
      - Pour chaque étape, configurer swiper de la façon&nbsp;demandé.
  -
    type: text
    title: 'Étape 1'
    level: h2
    body: |
      - Incorporez chacune des images dans une _slide_&nbsp;Swiper et faites en sorte en CSS qu'elles prennent la largeur complète de leur _slide_ _(ni&nbsp;plus, ni&nbsp;moins)_.
      - Vous ne devez pas avoir de flèches ou points de&nbsp;navigation&thinsp;🚫.
      - Le carrousel devrait défiler à l'horizontale lorsque vous essayez de faire glisser des&nbsp;_slides_&thinsp;↔️.
  -
    type: image
    image: /assets/articles/swiper-1.mp4
  -
    type: text
    title: 'Étape 2'
    level: h2
    body: |
      - Donnez la hauteur de 300px à votre carrousel ainsi qu'à toutes les images à l'intérieur de&nbsp;celui-ci.
      - Les _slides_ du carrousel doivent se déplacer verticalement&thinsp;↕️ plutôt&nbsp;qu'horizontalement.
      - Le carrousel doit changer de _slide_ automatiquement à toute les 1.5&nbsp;secondes&nbsp;⏱.
  -
    type: image
    image: /assets/articles/swiper-2.mp4
  -
    type: text
    title: 'Étape 3'
    level: h2
    body: |
      - Le carrousel doit tourner à l'infini horizontalement&nbsp;↔️ _(possibilité de swiper à l'infini dans une&nbsp;direction)_.
      - À partir de 768px, deux _slides_ 🏙🌄 doivent être visibles en même temps plutôt qu'une&nbsp;seule et un espace de 25px doit-être ajouté entre chacune des&nbsp;_slides_.
      - À partir de 992px, trois _slides_ 🏙🌄🌉 doivent être visibles en même temps plutôt que&nbsp;deux et un espace de 25px doit-être ajouté entre chacune des&nbsp;_slides_.
  -
    type: image
    image: /assets/articles/swiper-4.mp4
  -
    type: text
    title: 'Étape 4'
    level: h2
    body: |
      - Initialiser votre carrousel avec une classe différente que&nbsp;`.swiper-container`.
      - L'usager doit avoir la liberté d'arrêter entre deux _slides_ s'il le&nbsp;désire.
      - La carrousel doit avoir un effet de transition de type&nbsp;cube.
  -
    type: image
    image: /assets/articles/swiper-3.mp4
  -
    type: text
    title: 'Étape 5'
    level: h2
    body: |
      - Le carrousel doit avoir des flèches de&nbsp;navigation.
      - Ajoutez deux balises `button` avec les classes `.btn-prev` & `.btn-next` et les textes `Précédent` &&nbsp;`Suivant`.
      - Remplacez les flèches de navigation par défaut de Swiper _(flèches bleues)_ par les boutons que vous venez de créer _(cliquer sur ces boutons devrait permettre de changer de&nbsp;slide)_.
      - Modifiez le CSS de vos nouveaux boutons pour qu'ils aient un padding de 20px et la couleur de fond rose. Le bouton précédent doit afficher sous les _slides_ à gauche et le bouton suivant sous les _slides_ à&nbsp;droite.
  -
    type: text
    title: 'Étape 6'
    level: h2
    body: '- Ajoutez un élément de pagination sous forme de fraction sous le carrousel. Par exemple: `2 / 6`, indiquant que nous sommes à la deuxième _slide_ de 6. Évidemment, ce nombre doit se mettre à jour lorsque la _slide_ affichée&nbsp;change.'
is_hidden: false
title: 'Swiper - Introduction'
template: page-exercice
color_scheme: auto
preview_color: '#000'
fieldset: page-article
id: e3039317-918a-4e13-8c82-361555d37d27
