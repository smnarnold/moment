body:
  -
    type: text
    body: |
      Pour cet examen, nous allons recréer un _"spinoff"_ de la page de la série québécoise [Entre deux draps de&nbsp;novoo.ca](https://noovo.ca/emissions/entre-deux-draps).
      
      Les propriétés CSS `position` et `transform` seront inutiles. La mise en page sera réalisée entièrement grâce à&nbsp;Bootstrap.
  -
    type: image
    image: /assets/articles/noovo-apercu.png
  -
    type: note
    intent: generic
    body: 'Fiez-vous aux fichiers xs.png et lg.png dans le dossier de départ à titre de références&nbsp;visuelles.'
  -
    type: text
    body: |
      - [Dossier de départ](https://i.smnarnold.com/tests/entre-deux-draps/entre-deux-draps.zip).
      - Ajoutez la [fonte Google Poppins Semi-bold 600](https://fonts.google.com/specimen/Poppins?preview.text_type=custom&preview.text=Vous%20%C3%AAtes%20capable,%20vous%20allez%20r%C3%A9ussir!) au projet. Cette fonte sera utilisée pour les titres et le logo textuel du&nbsp;site. 
      - Le texte par défaut doit avoir une taille de&nbsp;16px.
  -
    type: text
    title: Navbar
    level: h2
    body: |
      - Utilisez une [navbar Bootstrap](https://smnarnold.com/cours/bootstrap/navbar) avec la balise&nbsp;appropriée.
      - Le fond doit-être un [dégradé](https://smnarnold.com/cours/css/linear-gradient) vers la droite partant de la couleur <span style="background:#082e7f; color:#fff;">#082e7f</span> vers&nbsp;<span style="background:#082e7f; color:#fff;">#343bff</span>.
      - [Ajustez le thème de couleur](https://smnarnold.com/cours/bootstrap/navbar#theme-de-couleur) de la navbar de sorte que le texte soit facilement&nbsp;lisible.
      - [Changez d'affichage](https://smnarnold.com/cours/bootstrap/navbar#changement-daffichage) vers la navigation complète à partir du breakpoint&nbsp;`lg`.
      - Ajoutez le [logo textuel](https://smnarnold.com/cours/bootstrap/navbar#logo) _"noovo"_. Ce logo doit utiliser la fonte Poppins et avoir une taille de&nbsp;22px.
      - Ajoutez les liens suivants afin de constituer [la&nbsp;navigation](https://smnarnold.com/cours/bootstrap/navbar#navigation):
      	- Émissions
          - Horaire
          - En direct
          - Films
          - Concours
          - Plus
  -
    type: note
    intent: generic
    body: 'Dans le cadre de l''exercice, faites pointer tous les href vers&nbsp;"#"'
  -
    type: text
    body: |
      - Transformez le dernier lien _"Plus"_ en [menu déroulant](https://smnarnold.com/cours/bootstrap/navbar#menu-deroulant) permettant d'avoir accès aux liens&nbsp;suivants:
      	- Articles
          - Recettes
          - Quiz
  -
    type: text
    title: 'Bandeau Équipe de production'
    level: h2
    body: |
      - Le bandeau doit avoir une hauteur de&nbsp;50px.
      - Le texte _"Équipe de production"_ doit-être centré&nbsp;verticalement.
      - La couleur de fond doit-être&nbsp;<span style="background: #343bff; color: #fff;">#343bff</span> et le texte&nbsp;blanc.
  -
    type: text
    title: Héros
    level: h2
    body: |
      - Le fond doit-être un [dégradé](https://smnarnold.com/cours/css/linear-gradient) vers le bas partant de la couleur <span style="background:#082E98; color:#fff;">#082E98</span> vers&nbsp;<span style="background:#2A39E2; color:#fff;">#2A39E2</span>.
      - Par défaut, l'image `noovo.webp`&thinsp;🌄 dans le dossier `img` doit prendre toute la largeur.
      - Par défaut, le texte suivant doit prendre toute la largeur:
      	- Titre: _"Entre deux draps"_
          - Description: _"ENTRE DEUX DRAPS est une comédie à sketchs de 10 épisodes de 30 minutes présentant le quotidien de quatre couples et deux colocs d’âges et de milieux différents."_
      - Un espace de 20px doit être présent en haut du titre afin qu'il ne touche pas à&nbsp;l'image.
      - Le titre doit avoir une taille de&nbsp;22px.
      - À partir du breakpoint `lg` le texte et l'image doivent être juxtaposés un à côté de l'autre. Le texte doit prendre un tiers de la largeur et afficher en premier tandis que l'image doit afficher en second et prendre le reste de la&nbsp;largeur.
  -
    type: text
    title: 'Présenté par'
    level: h2
    body: |
      - Doit avoir un fond&nbsp;blanc.
      - Le texte _¨Présenté par:¨_ doit être en majuscule, avoir une taille de 12px et être de couleur&nbsp;<span style="background: #757580">#757580</span>.
      - Utilisez une balise picture afin d'afficher par défaut l'image `college-logo-vertical.png`&thinsp;🌄. À partir de 576px de large, la source de cette image doit-être remplacé par l'image&nbsp;`college-logo-horizontal.png`.
  -
    type: text
    title: Épisodes
    level: h2
    body: |
      - Cette [section](https://smnarnold.com/cours/html/semantique#section) doit avoir un fond de couleur <span style="background: #242526; color: #fff;">#242526</span> et avoir un espace vide de 30px dans le haut et le&nbsp;bas.
      - Le titre de la section _"Épisodes"_ doit être blanc, avoir une taille de 22px et être en&nbsp;majuscules.
      - Chaque [carte](https://smnarnold.com/cours/bootstrap/cartes) doit prendre toute la largeur par défaut. À partir du breakpoint `md` elles doivent prendre la moitié et à partir de `lg` le&nbsp;tier.
      - Les cartes ne doivent pas avoir de couleur de fond ni de&nbsp;bordure.
      - Chaque image doit prendre toute la largeur de sa&nbsp;carte.
      - Les titres doivent être blancs et avoir une taille de&nbsp;18px.
      - Les descriptions avoir cette couleur <span style="background: #8d8d99;">#8d8d99</span> et une taille de&nbsp;14px.
      - Les pieds de carte doivent avoir la couleur de fond&nbsp;<span style="background: #18181A; color: #fff;">#18181A</span>
      - Contenu:
      	- Carte 1:
          	- Titre: _"Le flash qui tue"_
              - Description: _"Tout le monde a des projets. Simon, fortement intoxiqué, a le flash du siècle. Un mort pourrait nuire au rêve de Luc et Virginie se demande comment se débarrasser d'un corps."_
              - Pied de carte: _"S1E6 | Mercredi 17 février 2021"_
          - Carte 2:
          	- Titre: _"Entre le fantasme et la déception"_
              - Description: _"Thomas rencontre son fantasme de jeunesse, alors que Simon veut retrouver la sienne. Marco espère avoir une deuxième chance comme acteur pendant que Lydia soupçonne Antoine d'avoir une double vie."_
              - Pied de carte: _"S1E5 | Mercredi 10 février 2021"_
          - Carte 3:
          	- Titre: _"Le regard des autres"_
              - Description: _"Tout le monde a peur. Pour Florence, ce sont les monstres. Marie-Ève c'est ce qu'elle trouve dans ses draps. Thomas a peur d'être un salaud et Lydia d'avoir tué Antoine."_
              - Pied de carte: _"S1E4 | Mercredi 3 février 2021"_
  -
    type: text
    title: 'Pied de page'
    level: h2
    body: |
      - Le pied de page doit utiliser la [balise&nbsp;appropriée](https://smnarnold.com/cours/html/semantique), avoir une couleur de fond <span style="background: #18181A; color: #fff;">#18181A</span> et se garder un espace vide de 15px dans le haut et le&nbsp;bas.
      - Le texte doit être blanc.
      - Par défaut les textes _"TIM Montmorency"_ et _"© 2021"_ doivent être centrés un au-dessus de l'autre. À partir du breakpoint `sm`, ils doivent être affichés un à côté de l'autre. Le 1<sup>er</sup> aligné complètement à gauche et le 2<sup>e</sup> complètement à&nbsp;droite.
  -
    type: text
    title: Remise
    level: h2
    body: |
      M'envoyer un message privé sur Teams contenant un fichier zip&thinsp;🗜 sous le format&nbsp;suivant:
      
      `[prénom]-[nom de famille].zip`
      ex: simon-arnold.zip
is_hidden: false
title: 'Entre deux draps'
template: page-exercice
color_scheme: auto
preview_color: '#000'
fieldset: page-article
id: 83312c75-1b77-43ca-9469-02dc6e94b842
