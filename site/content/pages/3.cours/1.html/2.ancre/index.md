body:
  -
    type: text
    body: 'La balise d''ancre `<a>` permet de connecter différentes ressources entre elles. Elle est généralement utilisée afin d''établir un lien vers un autre site web ou encore vers une section d''une page, mais elle peut aussi déclencher l''ouverture d''une fenêtre de courriel, un appel téléphonique, le téléchargement de fichiers,&nbsp;etc.'
  -
    type: text
    title: href
    level: h2
    body: 'L''attribut `href` est l''attribut principal de la balise `<a>`. Il permet de définir la cible d''une&nbsp;ancre. Voyons cibles les plus&nbsp;courantes.'
  -
    type: text
    title: 'Vers un site externe'
    level: h3
    body: 'Pour faire un lien vers un site externe, il suffit de spécifier l''url du site en question dans le `href`. Par exemple:'
  -
    type: code
    lang: html
    body: '<a href="https://google.ca">Google</a>'
  -
    type: text
    title: 'Vers une section de la page courante'
    level: h3
    body: |
      Pour pointer vers une section de la page courante, il est possible de faire référence à l'id d'un élément en le préfixant par un&nbsp;`#`.
      
      Par exemple, afin de pointer vers l'élément ayant un id `section2`, il serait possible de faire une ancre de la&nbsp;sorte:
  -
    type: code
    lang: html
    body: |
      <a href="#section2">Lien vers la section 2</a>
      
      <div id="section1">Section 1</div>
      <div id="section2">Section 2</div>
      <div id="section3">Section 3</div>
  -
    type: note
    intent: warning
    body: 'Seul les id permettent de pointer vers un élément puisque les autres sélecteurs peuvent théoriquement faire référence à plusieurs&nbsp;éléments.'
  -
    type: note
    intent: generic
    body: 'Pour faire en sorte que la page défile vers la section en particulier plutôt que d''y sauter directement, il est possible de spécifier la propriété `scroll-behavior: smooth` sur la balise&nbsp;HTML.'
  -
    type: codepen
    id: abmPMLr
    ratio: 34
    tabs: chromeless
  -
    type: text
    title: 'Vers une section d''un site externe'
    level: h3
    body: |
      Il est possible de combiner les deux options précédentes afin de pointer sur une section particulière d'un site externe. Pour ce faire, il suffit de spécifier l'url du site souhaité, lui ajouter un `#` et le id de la section&nbsp;visée. 
      
      Par exemple:
  -
    type: code
    lang: html
    body: '<a href="https://google.ca#section2">Google</a>'
  -
    type: text
    title: 'Courriel ✉️'
    level: h3
    body: |
      L'attribut `href` peut aussi contenir une adresse courriel préfixée par: `mailto:` afin d'indiquer que le service de courrielleur par défaut de l'usager _(Outlook, Gmail, etc.)_ devrait générer une nouvelle ébauche de message prêt à l'attention du courriel&nbsp;spécifié.
      
      Par exemple:
  -
    type: code
    lang: html
    body: '<a href="mailto:exemple@gmail.com">Écrivez-moi!</a>'
  -
    type: text
    title: 'Téléphone 📞'
    level: h3
    body: |
      L'attribut `href` peut aussi contenir un numéro de téléphone préfixée par: `tel:` afin d'indiquer que le système d'exploitation devrait devrait déclencher un appel au numéro mentionné si cette fonctionnalité est supportée par celui-ci _(pratique surtout pour les appareils&nbsp;mobiles&#8239;📱)_.
      
      Par exemple:
  -
    type: code
    lang: html
    body: '<a href="tel:5551234567">Appelez-moi!</a>'
  -
    type: text
    title: Target
    level: h2
    body: |
      - `_self` _(par défaut)_ ouvre le lien dans la même&nbsp;page.
      - `_blank` ouvre le lien dans une nouvelle&nbsp;page.
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos des&nbsp;ancres](https://developer.mozilla.org/fr/docs/Web/HTML/Element/a).'
is_hidden: false
title: Ancre
template: page-article
color_scheme: auto
preview_color: '#1901ee'
preview: /assets/previews/anchor.png
fieldset: page-article
id: ff011fe9-282d-4b09-abd1-9b5cbfb805fb
