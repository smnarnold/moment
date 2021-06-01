body:
  -
    type: text
    body: |
      Le pied de page n'utilise pas une composante Bootstrap en particulier. Cependant, la grille Bootstrap sera un outil précieux afin de réaliser la mise en page&nbsp;demandée.
      
      Aperçu du résultat final en&nbsp;`xs`:
  -
    type: image
    image: /assets/articles/megazord-footer-mobile.png
  -
    type: text
    body: 'Aperçu du résultat final en&nbsp;`lg`:'
  -
    type: image
    image: /assets/articles/megazord-footer-desktop.png
  -
    type: text
    title: Requis
    level: h2
    body: |
      - Insérez le pied de page à la fin de chacune de vos&nbsp;pages.
      - Utilisez la balise sémantique adéquate afin d'englober votre pied de&nbsp;page.
      - Le pied de page doit se démarquer du contenu principal du site en ayant une couleur de fond&nbsp;différente.
      - Un espace de 20px minimum doit être ajouté en haut à l'extérieur du pied de page afin que celui-ci ne touche pas au contenu précédent dans la&nbsp;page.
      - Un espace vertical de 20px minimum doit être ajouté à l'intérieur du pied de page afin que son contenu ne touche pas ses&nbsp;extrémités.
      - Un conteneur Bootstrap doit être utilisé afin de positionner les éléments à l'intérieur de&nbsp;celui-ci.
      - Le texte doit être centré par défaut dans le pied de&nbsp;page.
      - Faites en sorte que par défaut les informations suivantes apparaissent une en dessous de l'autre dans l'ordre suivant:
      	
      	1. Noms des artisans du&nbsp;site.
      	2. Un lien vers répertoire GitHub du&nbsp;projet.
          3. La mention _"©2021"_.
  -
    type: note
    intent: warning
    body: 'Malgré que l''url du répertoire GitHub soit un lien, ce texte ne doit pas être bleu et ne doit pas avoir de ligne en&nbsp;dessous.'
  -
    type: text
    body: |
      - Le lien vers le répertoire de GitHub doit changer de couleur au&nbsp;survole.
      - À partir du breakpoint `lg`, le nom des artisans doit être aligné à gauche et apparaitre à gauche du pied de page, tandis que le lien vers le répertoire GitHub et la mention _"©2021"_ doivent être alignés à droite et apparaitre à droite du pied de&nbsp;page.
  -
    type: note
    intent: generic
    body: 'N''hésitez pas à personnaliser votre pied de page en ajoutant une image de fond, un dégradé, des couleurs de texte,&nbsp;etc.'
is_hidden: false
title: 'Pied de page'
template: page-exercice
color_scheme: auto
preview_color: '#d68324'
preview_abbr: 👞
fieldset: page-article
id: 2d99ef6b-1c5e-4278-8ad8-dbef6eba5f76
