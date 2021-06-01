body:
  -
    type: text
    body: |
      Pour cet exercice nous allons animer une scène basée sur le mythique jeu télévisé [Roue de fortune _(Wheel of&nbsp;fortune)_](https://fr.wikipedia.org/wiki/Wheel_of_Fortune)!
      
      Un [dossier de départ](https://t.smnarnold.com/roue-de-fortune/depart.zip) vous est fourni. Vous n'avez qu'à écrire du HTML et du JavaScript _(nul besoin de modifier le CSS)_. La librairie Bootstrap est aussi déjà incorporée pour&nbsp;vous. Qui plus est, il n'est pas nécessaire de faire les étapes en ordre afin de réussir&nbsp;l'exercice.
      
      Aperçu du résultat:
  -
    type: image
    image: /assets/articles/roue-de-fortune-apercu.mp4
  -
    type: text
    title: 'Mise en page'
    level: h2
    body: '1. Créez un structure de mise en page Bootstrap standard et affichez les instructions et la scène dans deux colonnes&nbsp;distinctes.'
  -
    type: note
    intent: generic
    body: 'Le fond turquoise avec les coins arrondis et la ligne blanche devraient apparaitre si votre structure est&nbsp;complète.'
  -
    type: text
    body: '2. Faites en sorte que les deux colonnes affichent l''une en dessous de l''autre par&nbsp;défaut.'
  -
    type: image
    image: /assets/articles/roue-de-fortune-xs.png
  -
    type: text
    body: '3. À partir du breakpoint MD, les deux colonnes doivent s''afficher côte à&nbsp;côte. La colonne des instructions doit prendre le quart de la largeur de la rangée, tandis que celle de la scène doit prendre l''espace&nbsp;restant.'
  -
    type: image
    image: /assets/articles/roue-de-fortune-md.png
  -
    type: text
    body: '4. À partir du breakpoint LG, la colonne des instructions doit prendre le tiers de la largeur de la&nbsp;rangée alors que la colonne de la scène prend l''espace&nbsp;restant.'
  -
    type: image
    image: /assets/articles/roue-de-fortune-lg.png
  -
    type: text
    title: Classe
    body: |
      1. Créez une nouvelle classe intitulée&nbsp;`Play`.
      2. Lorsque l'usager appuie sur la roue, créez une nouvelle instance de votre&nbsp;classe.
      3. Créez-vous une méthode intitulée `getPrize` et appelez là dans votre constructeur. À l'intérieur de cette méthode, pigez un nombre entre 0 et 360 correspondant à la rotation qui sera éventuellement effectuée sur la&nbsp;roue. 
      4. En fonction du nombre pigé, sélectionnez le prix adéquat dans la variable `prix`&nbsp;fournie.
      	- Si ce nombre est inférieur à 90: sélectionnez le prix&nbsp;jaune&thinsp;🟡. 
          - S'il est de 90 à 179: le prix&nbsp;vert&thinsp;🟢
          - S'il est de 180 à 269: le prix&nbsp;bleu&thinsp;🔵
          - S'il est de 270 à 360: le prix&nbsp;rouge&thinsp;🔴
  -
    type: text
    title: 'Animation de la roue'
    level: h2
    body: |
      1. Importez la librairie GSAP dans votre&nbsp;projet.
      2. Créez-vous une méthode intitulée `spin`. Si vous avez complété la méthode `getPrize`, appelez la méthode `spin` à la fin de&nbsp;celle-ci.
  -
    type: note
    intent: generic
    body: 'Si ce n''est pas le cas, appelez cette méthode dans votre constructeur à la suite de `getPrize`, si cette méthode est entamée, ou seule si ce n''est pas le&nbsp;cas.'
  -
    type: text
    body: |
      3. Ajoutez la classe `.go` à l'animateur. Cette classe déclenchera l'animation de son&nbsp;bras.
      4. Créez-vous ensuite une animation GSAP. Au départ de l'animation, la roue devra toujours avoir une rotation équivalente à 0°, soit l'équivalent d'aucune&nbsp;rotation.
      5. La roue devra ensuite attendre 100 millisecondes avant d'entamer une rotation équivalente à  720° + le nombre entre 0 et 360 que vous avez pigé dans la méthode `getPrize`. Ainsi, la roue effectuera minimalement 2 tours sur elle-même avant de s'arrêter&nbsp;aléatoirement.
  -
    type: note
    intent: generic
    body: 'Si vous n''avez pas complété la méthode `getPrize`, plutôt que d''effectuer une rotation à partir du nombre aléatoire, effectuer plutôt une rotation de&nbsp;900°.'
  -
    type: text
    body: |
      6. Cette animation devra dépasser sa cible légèrement avant d'y revenir et de terminer sa course, générant ainsi un dernier suspense.
      7. Lorsque l'animation est terminée, retirez la classe `.go` à&nbsp;l'animateur.
  -
    type: text
    title: 'Animation du panneau'
    level: h2
    body: '1. Créez-vous une méthode intitulée `showPrize`. Appelez-la méthode `showPrize` lorsque l''animation de la roue est&nbsp;terminée.'
  -
    type: note
    intent: generic
    body: 'Si vous n''avez pas complété la méthode `spin` gérant l''animation de la roue, appelez plutôt cette méthode dans votre constructeur à la suite des autres&nbsp;méthodes.'
  -
    type: text
    body: '2. Sélectionnez la propriété `couleur` du prix pigé au hasard dans la méthode `getPrize` et ajoutez là à titre de classe au panneau. Ceci aura pour effet de modifier la couleur des lumières afin de refléter la couleur du prix en&nbsp;remporté.'
  -
    type: note
    intent: generic
    body: 'Si vous n''avez pas été en mesure de piger un prix préalablement, basez-vous sur le premier prix, le jaune&thinsp;🟡, afin de réaliser cette&nbsp;partie.'
  -
    type: text
    body: |
      3. Sélectionné la propriété `nom` du prix sélectionné et afficher le dans le panneau afin d'indiquer à l'usager le prix qu'il vient de&nbsp;remporter.
      4. Créez-vous une animation GSAP rendant leur taille et leur opacité à toutes les lumières à partir du centre avec un léger décalage de 0.05 seconde entre chacune d'entre elles afin de donner l'impression que les lumières s'illuminent une à la suite de&nbsp;l'autre&thinsp;💡.
  -
    type: image
    image: /assets/articles/roue-de-fortume-lumiere-on.mp4
  -
    type: text
    title: Reinitialisation
    level: h2
    body: |
      1. Créez-vous une méthode intitulée `reset` et appelée là avant toutes les autres méthodes dans votre constructeur. À l'intérieur de cette méthode, nous allons faire en sorte que tous les éléments retrouvent leur apparence initiale afin de permettre à l'usager de jouer plusieurs parties de&nbsp;suite.
      2. Effacez le texte à l'intérieur du panneau afin que le prix précédent&nbsp;disparaisse.
      3. Créez une animation GSAP ramenant toutes les lumières simultanément à une taille et une opacité de 0 en l'espace d'une&nbsp;demi-seconde&thinsp;⏱.
  -
    type: image
    image: /assets/articles/roue-de-fortune-lumiere-off.mp4
  -
    type: text
    body: '4. Lorsque l''animation est terminée, retirez les classes jaune, vert, bleu et rouge du panneau afin que les lumières retrouvent leur couleur&nbsp;d''origine.'
  -
    type: text
    title: 'Fetch des prix alternatifs'
    level: h2
    body: '1. Faites une requête fetch dans votre constructeur à l''adresse&nbsp;suivante:'
  -
    type: code
    lang: html
    body: 'https://t.smnarnold.com/roue-de-fortune/prix/'
  -
    type: note
    intent: warning
    body: 'Attention de ne pas oublier le / à la fin. Sans lui, aucune réponse ne vous sera&nbsp;retournée.'
  -
    type: text
    body: |
      2. Déplacez toutes les méthodes situées à l'intérieur du constructeur dans le contexte de réponse du fetch afin qu'elles se déclenchent uniquement lorsque la réponse est&nbsp;reçue.
      3. Plutôt que d'utiliser la variable `prix`, contenant les prix par défaut, utilisez plutôt les prix retournés dans la réponse de la&nbsp;requête.
  -
    type: note
    intent: generic
    body: 'Tout devrait continuer de fonctionner sans modifications subséquentes de votre part. Seuls les noms des prix devraient avoir&nbsp;changé&thinsp;🎁.'
  -
    type: text
    title: Remise
    level: h2
    body: |
      M'envoyer un message privé sur Teams contenant un fichier zip&thinsp;🗜 sous le format&nbsp;suivant:
      
      `[prénom]-[nom de famille].zip`
      ex: simon-arnold.zip
is_hidden: false
title: 'Roue de fortune'
template: page-exercice
color_scheme: auto
preview_color: '#000'
preview: /assets/previews/roue-de-fortune.png
fieldset: page-article
id: fef44f56-4e69-451e-a1b2-e69e11e97344
