body:
  -
    type: text
    body: |
      Pour cet exercice nous allons créer un formulaire permettant de générer un personnage du célèbre jeu Among&nbsp;Us.
      
      
      Aucun fichier de départ ne vous est fourni. Vous allez devoir créer votre propre fichier&nbsp;HTML.
      
      Aperçu du résultat:
  -
    type: image
    image: /assets/articles/formulaire-among-us.jpg
  -
    type: text
    title: Materiel
    level: h2
    body: |
      - Couleurs
          - Bleu <span style="background-color: #75DBF4; color: #000;">#75DBF4</span>
          - Rouge <span style="background-color: #F21717; color: #fff;">#F21717</span>
      - [Google font](https://fonts.google.com/specimen/VT323)
      - Image d'arrière-plan
  -
    type: code
    lang: html
    body: 'https://ex.smnarnold.com/formulaires/among-us/sky.jpg'
  -
    type: text
    title: Requis
    level: h2
  -
    type: text
    title: Apparence
    level: h3
    body: |
      - Utilisez l'image d'arrière-plan de ciel étoilé comme fond pour votre&nbsp;page&thinsp;✨
      - Le formulaire doit utiliser la police Google VT323 avec une taille de police de 20px, avoir une largeur de 400px, avoir un espace de 50px entre le sommet de la page et lui et être parfaitement centré dans la&nbsp;page.
      - Le formulaire doit avoir un fond noir, une bordure blanche de 2px, des coins arrondis de&nbsp;15px et se garder un espace vide à l'intérieur de 20px de tous les côtés afin que son contenu ne touche jamais aux&nbsp;bordures.
      - Affichez le titre _"Among Us"_ en 40px. Ce titre ne doit pas avoir de graisse, ni de margin vers le haut, uniquement une marge de 20px vers le&nbsp;bas.
      - Le champ de nom doit prendre toute la largeur du formulaire, se garder un espace vide à l'intérieur de 10px de tous les côtés, avoir des coins arrondis de 10px, avoir une bordure bleue de 2px lorsque son contenu est valide et rouge lorsqu'invalide.
      - Affichez une option de couleur&thinsp;🎨 afin de permettre la sélection de la couleur du&nbsp;personnage.
      - Affichez un choix de chapeau parmi les options suivantes&thinsp;🎩:
      	- Aucun
          - Banane
          - Oeuf
          - Papier de toilette
      - Ajoutez une boite à cocher avec la mention _"Imposteur 🗡"_ permettant de sélectionner si notre personnage est un imposteur&thinsp;✅.
      - Ajoutez un bouton avec la mention _"Créer mon personnage"_. Ce bouton doit prendre toute la largeur du formulaire, avoir un fond bleu, des coins arrondis de 10px et une taille de texte de&nbsp;20px.
  -
    type: text
    title: Fonctionnel
    level: h3
    body: '- Lorsque le formulaire est soumis ses informations doivent-être envoyés en utilisant la méthode `get` à l''adresse&nbsp;suivante:'
  -
    type: code
    lang: html
    body: 'https://ex.smnarnold.com/formulaires/among-us'
  -
    type: text
    body: |
      - La page de résultat s'attend à recevoir les informations suivantes: `name`, `color`, `hat` et `impostor`.
      - Créez un champ de nom. Ce champ est obligatoire et doit contenir un texte de 2 à 20 caractères. À titre indicatif, affichez la mention `Red` en attendant que l'usager insère le nom de son&nbsp;choix.
      - Les choix de chapeaux&thinsp;🎩 doivent avoir les valeurs suivantes:
      	- Aucun | `none`
          - Banane | `banana`
          - Oeuf | `egg`
          - Papier de toilette | `toilet`
      
      Par défaut, l'option _Aucun_ doit-être&nbsp;sélectionné.
      
      - Un bouton avec la mention `Créer mon personnage` doit permettre de soumettre le&nbsp;formulaire.
      
      Vous devriez maintenant être capable de créer des personnages similaires à ceux-ci en soumettant votre&nbsp;formulaire:
  -
    type: image
    image: /assets/articles/formulaire-among-us.mp4
  -
    type: text
    title: 'Notes de cours'
    body: |
      - [Formulaire](https://smnarnold.com/cours/html/formulaire)
      - [Formulaire intermédiaire](https://smnarnold.com/cours/html/formulaire-intermediaire)
      - [Formulaire avancé](https://smnarnold.com/cours/html/formulaire-avance)
    level: h2
is_hidden: false
title: 'Formulaire - Among Us'
template: page-exercice
color_scheme: auto
preview_color: '#000'
fieldset: page-article
id: 4946c37a-9116-4d64-b0cf-a17bfd6101d5
