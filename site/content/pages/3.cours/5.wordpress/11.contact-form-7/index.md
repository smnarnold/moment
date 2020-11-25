title: 'Contact Form 7'
template: page-article
color_scheme: auto
body:
  -
    type: text
    body: 'Le formulaire de contact est l''une des fonctionnalités clé du site web. Heureusement, plusieurs extensions WordPress permettent de simplifier leur création. _Contact Form&nbsp;7_ est l''une de ces extensions, étant donné son aspect gratuit et son immense popularité, elle sera montré dans ce&nbsp;cours.'
  -
    type: text
    title: Installation
    level: h2
    body: |
      Dans l'onglet extensions _(plugins)_ du tableau de bord, recherchez _Contact Form&nbsp;7_ et repérez l'extension créée par Takayuki&nbsp;Miyoshi.
      
      Installez et activez&nbsp;là.
  -
    type: image
    image: /assets/articles/contact7-preview.jpg
  -
    type: text
    title: 'Création d''un formulaire'
    level: h2
    body: |
      Une fois installée, un onglet _Contact_ devrait être visible dans le menu&nbsp;latéral.
      
      À partir de cet onglet, il est possible de créer de nouveaux formulaire en cliquant sur Ajouter _(Add&nbsp;New)_.
  -
    type: image
    image: /assets/articles/contact7-ajouter.jpg
  -
    type: text
    body: 'Une boite contenant du code HTML devrait s''afficher contenant des champs de&nbsp;base.'
  -
    type: code
    lang: html
    body: |
      <label> Your name
          [text* your-name] </label>
      
      <label> Your email
          [email* your-email] </label>
      
      <label> Sujet
          [text* your-subject] </label>
      
      <label> Your message (optional)
          [textarea your-message] </label>
      
      [submit "Submit"]
  -
    type: text
    body: |
      Il est possible de modifier ce code afin d'ajouter une structure HTML ou des classes précises selon ses&nbsp;besoins.
      
      Les éléments entre crochets `[...]` correspondent à des&nbsp;champs.
      
      Par exemple:
  -
    type: code
    lang: html
    body: '[text* your-name]'
  -
    type: text
    body: |
      La première partie `*text` indique qu'il s'agit d'un champs texte de base. La deuxième `your-name` correspond à l'attribut `name` sur le&nbsp;champ. Cet attribut sert aussi à indiquer où afficher cette information lors de l'envois au&nbsp;client.
      
      Il est possible d'ajouter autant de champs que désiré. Pour ce faire il est possible de les écrire à la main ou simplement de cliquer sur les boutons situés en haut de la boite&nbsp;HTML.
      
      <kbd>texte</kbd><kbd>courriel</kbd><kbd>Adresse web</kbd><kbd>tel</kbd><kbd>nombre</kbd><kbd>date</kbd><kbd>zone de texte</kbd><kbd>menu déroulant</kbd><kbd>Cases à cocher</kbd><kbd>Boutons radio</kbd><kbd>confirmation</kbd><kbd>quiz</kbd><kbd>fichier</kbd><kbd>envoyer</kbd>
  -
    type: text
    title: 'Envois de courriels'
    level: h2
    body: |
      Dans le deuxième onglet intitulé _Courriel_ il est possible de configurer à qui les courriels soumis sont envoyés. Par défaut, ils sont envoyés à l'administrateur du site, soit l'adresse courriel entrée lors de la configaration de&nbsp;WordPress.
      
      La majorité de ces options peuvent garder leur configuration de base. Cependant, si des attributs de nom ont étés modifiés dans le formulaire, il sera nécessaire de les modifier également dans cet&nbsp;onglet. 
      
      Par exemple, dans la section _Corp du message_ une référence à `[your-name]` indique que l'information entrée dans ce champs sera affiché à cet endroit. Si cet attribut a été modifié à `[votre-nom]`, il faudra aussi le modifié dans l'onglet&nbsp;_Courriel_.
  -
    type: note
    intent: warning
    body: 'Les serveurs locaux ne supportent pas l''envois de courriels. Soumettre un message devrait donc retourner une erreur tant que vos coder sur votre machine, mais devrait être fonctionnel sur votre environnement en&nbsp;ligne.'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir le [site de Contact Form&nbsp;7](https://contactform7.com/).'
fieldset: page-article
id: 0634d384-32a6-4f39-a8c9-7851b3778e6f
