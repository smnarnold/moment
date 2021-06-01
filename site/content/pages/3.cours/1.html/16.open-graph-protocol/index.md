body:
  -
    type: text
    body: |
      Lorsque vous partagez une page sur les réseaux sociaux, un aperçu est généré. Vous, vous êtes peut-être déjà demandé pourquoi certains sites ont un aperçu de qualité, donnant le goût de cliquer sur leur lien alors que d'autres ont un aperçu décevant avec une image, un texte et une description&nbsp;quelconque.
      
      Par défaut, ces informations sont déterminées par le réseau social les affichant. Cependant, il est possible de spécifier les informations à utiliser afin de contrôler le résultat obtenu grâce à l'[Open Graph&nbsp;Protocol](https://ogp.me/).
      
      Ce protocole est notamment utilisé&nbsp;par:
      
      - Facebook _(Créateurs du protocole)_
      - Twitter
      - LinkedIn
      - Pinterest
      - Et la majorité des applications de discussions _(Messenger, Slack,&nbsp;etc.)_
  -
    type: text
    title: 'Métadonnées de base'
    level: h2
    body: |
      Il est important de remplir certaines métadonnées de base afin d'éviter un affichage&nbsp;disgracieux. 
      
      Voici par exemple le même site, à gauche sans métadonnées et à droite avec des métadonnées de&nbsp;base.
  -
    type: image
    image: /assets/articles/og-vs.png
  -
    type: text
    title: 'og:title'
    level: h3
    body: |
      Définis le titre du site. Si la balise n'est pas renseignée, la valeur de la balise `<title>` sera&nbsp;utilisée.
      
      Idéalement, le titre devrait être attrayant et avoir une longueur variant entre 60 et 90&nbsp;caractères.
  -
    type: code
    lang: html
    body: '<meta property="og:title" content="TIM - Collège Montmorency">'
  -
    type: note
    intent: warning
    body: 'Facebook tronque les titres lorsqu''ils excèdent 88&nbsp;caractères.'
  -
    type: text
    title: 'og:type'
    level: h3
    body: |
      Définis le type de contenu partagé, notamment:
      
      - Website _(par&nbsp;défaut)_
      - Music
      - Video
      - Article
      - Book
      - Profile
      - Etc.
      
      Pour voir la [liste complète des&nbsp;options](https://ogp.me/#types).
  -
    type: code
    lang: html
    body: '<meta property="og:type" content="website">'
  -
    type: text
    title: 'og:description'
    level: h3
    body: 'Courte description du site devant tenir en une ou deux phrases. Contrairement à la balise `<meta name="description">`la balise `<meta property="og:description">` n''affecte pas le référence du site. Néanmoins, faites attention à son contenu puisqu''il sera affiché sous le titre de l''aperçu dans la majorité des réseaux sociaux.'
  -
    type: code
    lang: html
    body: '<meta property="og:description" content="Programme de Technique d''Intégration Multimédias du Collège Montmorency situé à Laval, Québec.">'
  -
    type: note
    intent: warning
    body: 'La longueur maximale ne devrait pas excéder 200 caractères afin d''éviter de voir son texte&nbsp;tronqué.'
  -
    type: text
    title: 'og:image'
    level: h3
    body: |
      Définis l'url de l'image&thinsp;🖼️ à utiliser pour l'aperçu du&nbsp;site. Cette balise est importante afin d'éviter qu'un carré noir&thinsp;⬛ ou pire une image aléatoire sur la page soit promue l'image d'aperçu officielle. Par exemple, le cas inopportun où une publicité devient l'aperçu d'une&nbsp;page&thinsp;😱.
      
      Au minimum, l'image doit avoir 600px de large, mais idéalement une largeur de 1080px ou plus est désirée afin d'afficher convenablement sur les appareils munis d'un écran de type haute définition et un ratio 16:9 est&nbsp;encouragé.
  -
    type: code
    lang: html
    body: '<meta property="og:image" content="https://tim-montmorency.com/public/img/tim-og.jpg">'
  -
    type: note
    intent: warning
    body: 'Le contenu important de l''image devrait se trouver au centre, car Facebook tend à couper les&nbsp;extrémités.'
  -
    type: text
    body: 'Idéalement, cette balise est complétée par les balises `og:image:width` et `og:image:height` afin de spécifier la dimension de l''image d''aperçu.'
  -
    type: code
    lang: html
    body: |
      <meta property="og:image:width" content="1920">
      <meta property="og:image:height" content="1008">
  -
    type: text
    title: 'og:url'
    level: h3
    body: |
      Définis l'url devant être utilisée pour les&nbsp;partages. 
      
      Ainsi, si une page répond à plus d'une adresse, par exemple: 
      
      - [https://www.tim-montmorency.com](https://www.tim-montmorency.com) 
      - [https://tim-montmorency.com](https://tim-montmorency.com)
      
      Il est possible de spécifier que lors d'un partage l'adresse utilisée devrait être [https://tim-montmorency.com](https://tim-montmorency.com)
  -
    type: code
    lang: html
    body: '<meta property="og:url" content="https://tim-montmorency.com">'
  -
    type: text
    title: 'Métadonnées supplémentaires'
    level: h2
    body: |
      - `og:audio` L'URL d'un fichier audio accompagnant la &nbsp;publication.
      - `og:locale` La langue et la culture de la publication _(Par&nbsp;défaut:&nbsp;en_US)_.
      - `og:site_name` Le nom du site&nbsp;web.
      - `og:video` L'URL d'un fichier vidéo accompagnant la &nbsp;publication.
  -
    type: note
    intent: tool
    body: 'Afin de prévisualiser ou de forcer le rafraichissement de l''aperçu d''un site, il est possible d''utiliser le [Facebook debuguer](https://developers.facebook.com/tools/debug) ou le [Twitter&nbsp;validator](https://cards-dev.twitter.com/validator).'
  -
    type: note
    intent: good
    body: 'Pour plus d''informations, voir le [site officiel de l''Open Graph Protocol](https://ogp.me/) ou encore le [guide de partage de&nbsp;Facebook](https://developers.facebook.com/docs/sharing/webmasters).'
is_hidden: false
title: 'Open Graph Protocol'
subtitle: 'type, title, description, image, url, etc.'
template: page-article
color_scheme: auto
preview_color: '#000'
preview: /assets/previews/opengraph.jpg
fieldset: page-article
id: 615d388a-cc29-438e-beff-767ccd2a394b
