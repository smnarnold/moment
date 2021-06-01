body:
  -
    type: text
    body: |
      Pour cet examen, nous allons recréer un paysage constitué de formes géométriques en HTML et&nbsp;CSS.
      
      Pour réaliser cet exercice, vous devrez modifier le HTML _(lorsque spécifié)_ et le CSS. Il n'est pas nécessaire de faire les étapes dans l'ordre, donc si vous bloquez sur l'une d'elles n'hésitez pas à passer à l'étape suivante, quitte à y revenir plus&nbsp;tard.
      
      Aperçu du résultat:
  -
    type: image
    image: /assets/articles/paysage-apercu.mp4
  -
    type: text
    title: Matériel
    body: '[Dossier de départ](https://t.smnarnold.com/paysage/depart.zip)'
  -
    type: text
    title: Couleurs
    level: h3
    body: |
      Mauve pâle <span style="background: #615D6C; color: #fff; font-family: courier;">#615D6C</span>
      Mauve foncé <span style="background: #272635; color: #fff; font-family: courier;">#272635</span>
      Orange rosé <span style="background: #EE6355; font-family: courier;">#EE6355</span>
      Bleu-turquoise <span style="background: #119CAA; color: #fff; font-family: courier;">#119CAA</span>
      Jaune-orange <span style="background: #FFB058; color: #000; font-family: courier;">#FFB058</span>
  -
    type: text
    title: Images
    level: h3
    body: 'Arbre 1'
  -
    type: code
    lang: html
    body: 'https://t.smnarnold.com/paysage/arbre-1.png'
  -
    type: text
    body: 'Arbre 2'
  -
    type: code
    lang: html
    body: 'https://t.smnarnold.com/paysage/arbre-2.png'
  -
    type: text
    body: 'Arbre 3'
  -
    type: code
    lang: html
    body: 'https://t.smnarnold.com/paysage/arbre-3.png'
  -
    type: text
    title: Requis
    level: h2
  -
    type: text
    title: Globaux
    level: h3
    body: |
      1. Créez-vous une variable CSS pour la couleur jaune-orange&thinsp;🟡. Utilisez toujours cette variable à lorsque cette couleur est&nbsp;invoquée.
      2. La page doit avoir un fond mauve pâle par défaut. Lorsque la page est plus large que haute, un dégradé de haut en bas&thinsp;⬇️ partant de mauve pâle vers mauve&nbsp;foncé doit couvrir le fond de la&nbsp;page.
  -
    type: image
    image: /assets/articles/paysage-degrade.png
  -
    type: note
    intent: warning
    body: 'Attention le dégradé doit couvrir toute la hauteur de la&nbsp;page.'
  -
    type: text
    body: |
      3. Importez la police [Google - Abril Fatface](https://fonts.google.com/specimen/Abril+Fatface) dans votre projet. Tous les textes dans la page doivent utiliser cette police, être affichés en blanc, avoir une taille de&nbsp;30px et être centrés&nbsp;horizontalement.
      4. Ajoutez en CSS _(sans modifier le HTML)_ l'émoji ☀️ au début du libellé _Jour_. Faites de même avec l'émoji 🌙, mais à la fin du libellé&nbsp;_Nuit_.
      5. Lorsque le libellé _Jour_ est survolé, faites-le devenir orange rosé&thinsp;🟠. Lorsque le libellé _Nuit_ est survolé, faites-le devenir bleu turquoise&thinsp;🔵.
      6. Ajoutez les attributs nécessaires aux boutons radio afin qu'un seul puisse être coché à la fois et que celui _Jour_ soit coché par&nbsp;défaut&thinsp;✅.
  -
    type: image
    image: /assets/articles/paysage-radio-buttons.mp4
  -
    type: text
    title: Scène
    level: h3
    body: |
      1. La scène doit avoir une bordure blanche&thinsp;⚪️ de&nbsp;20px de tous les côtés, une dimension totale de 800x450px _(incluant les bordures)_, un fond orange rosé&thinsp;🟠, être centrée horizontalement&thinsp;↔️ et avoir un espace de 30px en haut et en bas&nbsp;d'elle.
      2. Lorsque le bouton radio _Nuit_ est coché, changez la couleur de fond de la scène à bleu turquoise&thinsp;🔵 en l'espace d'une demi-seconde&thinsp;⏱.
  -
    type: image
    image: /assets/articles/paysage-fond.mp4
  -
    type: note
    intent: generic
    body: 'N''hésitez pas à revenir plus tard sur ce requis si vous éprouvez des&nbsp;ennuis.'
  -
    type: text
    body: '3. Les éléments avec les classes `.partie-du-haut` et `.partie-du-bas` doivent prendre toute la largeur de la scène et la moitié de la hauteur de celle-ci. Évidemment, la partie du haut du afficher dans le haut, tandis que celle du bas doit afficher en&nbsp;bas.'
  -
    type: text
    title: 'Partie du haut'
    level: h3
    body: '1. Affichez l''image de texture fournie dans le dossier de départ&thinsp;📁 en arrière-plan de la partie du haut. Cette image devra être redimensionnée afin de mesurer 150px de haut et devra se répéter horizontalement&thinsp;↔️ seulement. Ceci devrait afficher les lignes diagonales de cette&nbsp;partie.'
  -
    type: image
    image: /assets/articles/paysage-diagonales.png
  -
    type: note
    intent: warning
    body: 'Attention, il est interdit de déplacer l''image de son dossier&nbsp;d''origine.'
  -
    type: text
    body: |
      2. Les 4 montagnes&thinsp;🏔 sont en fait des carrés noirs avec une opacité de 5% auxquels une rotation de 45° a été appliquée. Celles aux extrémités devraient avoir une dimension de 150x150px et celles au centre de 120x120px.
      3. Le point central des 2 premières montagnes devrait-être à 15% et 30% de la gauche de la scène&thinsp;⬅️, tandis que les 2 dernières devraient-être à 30% et 15% de la&nbsp;droite&thinsp;➡️.
      4. Le point central de chaque montagne doit-être placé au bas complètement de la partie du&nbsp;haut.
  -
    type: image
    image: /assets/articles/oaysage-carre-rotation.mp4
  -
    type: note
    intent: generic
    body: 'Il n''y a pas de transition/animation sur le carré, la référence visuelle ne sert qu''à démontrer le principe de rotation&nbsp;expliqué.'
  -
    type: text
    body: |
      5. Masquez tout ce qui dépasse de cette partie, seul l'équivalent d'un triangle devrait alors rester visible pour chacun des&nbsp;carrés.
      6. Le soleil doit être jaune-orange&thinsp;🟡, mesurer 150x150px, être arrondi de sorte à former un cercle, être parfaitement centré horizontalement et être placé à 103px du haut de sa partie. Ajoutez-lui une ombre jaune-orange de 100px égale de tous les côtés afin de lui donner un subtil&nbsp;rayonnement.
      7. Lorsque le bouton radio _Nuit_ est coché, le soleil doit se déplacer d'une hauteur équivalente à lui-même plus bas. Ajoutez une transition d'une demi-seconde sur cette propriété afin que le soleil monte et descende doucement lorsque le bouton radio coché est&nbsp;modifié.
  -
    type: note
    intent: generic
    body: 'Cette étape est probablement la plus complexe de l''examen, n''hésitez pas y revenir plus tard si vous éprouvez des&nbsp;difficultés.'
  -
    type: text
    body: |
      8. L'élément `.nuage` doit avoir une largeur de 100px et être positionné à 40px du haut et à gauche complètement de sa&nbsp;partie.
      9. À l'intérieur de l'élément `.nuage`, faites en sorte que chaque ligne aille une hauteur de 20px, un fond blanc&thinsp;⚪️, une opacité de 10% et des coins arrondis de&nbsp;10px. La 1<sup>ère</sup> ligne doit prendre toute la largeur du nuage, tandis que la 2<sup>e</sup> doit prendre la moitié et avoir un espace vide de 5px verticalement&thinsp;↕️ et de 15px horizontalement&thinsp;↔️.
      10. Le nuage doit démarrer à l'extérieur gauche de la scène et la traverser complètement à vitesse constante à l'infini en l'espace de 15&nbsp;secondes&thinsp;⏱.
  -
    type: text
    title: 'Partie du bas'
    level: h3
    body: |
      1. Chaque vague doit prendre toute la largeur de la partie, avoir un fond blanc, une opacité de 5% et être affichée en haut complètement de sa partie. La superposition des vagues créera des lignes plus pâles et plus&nbsp;foncées.
      2. Sans modifier le HTML, sélectionnez chaque vague et attribuez-leur des grandeurs différentes. 1</sup>re</sup> = 75%, 2</sup>e</sup> = 50% et 3</sup>e</sup> =&nbsp;25%.
  -
    type: image
    image: /assets/articles/paysage-vagues.png
  -
    type: text
    body: |
      3. Faites-en sorte que le bateau soit de couleur blanche&thinsp;⚪️, aille une opacité de 25%, soit placé à 50px de la gauche et 100px du bas de sa&nbsp;partie.
      4. Le bateau&thinsp;⛵️ doit se déplacer de 450px vers la droite en l'espace de 20 secondes et revenir à sa position initiale en répétant ce cycle à&nbsp;l'infini.
  -
    type: text
    title: Arbre
    level: h3
    body: '1. Dans la scène, après les 2 parties ajoutez une balise `<picture>`. Cette balise devra être affichée en bas à 20px de la droite. Par défaut, affichez l''image de l''arbre 1&thinsp;🌳. Si la page mesure 850px ou moins, affichez l''arbre 2&thinsp;🌲 et si la page mesure 1300px et plus, affichez l''arbre&nbsp;3&thinsp;🌳.'
  -
    type: image
    image: /assets/articles/paysage-arbre.mp4
  -
    type: text
    title: Remise
    level: h2
    body: |
      M'envoyer un message privé sur Teams contenant un fichier zip&thinsp;🗜 sous le format suivant:
      
      `[prénom]-[nom de famille].zip`
      ex: simon-arnold.zip
is_hidden: false
title: Paysage
template: page-exercice
color_scheme: auto
preview_color: '#000'
preview: /assets/previews/paysage.png
fieldset: page-article
id: d4fa18f1-ab4d-4659-9196-55ab4e7fbb60
