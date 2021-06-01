body:
  -
    type: text
    body: 'La balise `<iframe>` _(inline frame)_ permet d''afficher une page HTML à l''intérieur d''une autre page. Bien que visible à l''écran, cette page imbriquée bénéficie de son propre contexte d''exécution. Ainsi, les styles et scripts de la page parent n''ont aucun effet sur la page enfant et vice&nbsp;versa.'
  -
    type: text
    title: Src
    level: h2
    body: 'Seul l''attribut `src` est obligatoire puisqu''il spécifie le chemin vers la page à afficher.'
  -
    type: code
    lang: html
    body: '<iframe src="https://site.com"></iframe>'
  -
    type: text
    title: Title
    level: h2
    body: 'L''attribut `title`, bien que non obligatoire, est fortement recommandé puisqu''il permet de fournir une description du contenu du iFrame aux personnes utilisant une assistance vocale afin de naviguer sur la&nbsp;page.'
  -
    type: code
    lang: html
    body: '<iframe src="https://site.com" title="Démo iFrame"></iframe>'
  -
    type: text
    title: 'Width & Height'
    level: h2
    body: 'Les attributs `width` et `height` permettent de spécifier la dimension du iFrame. Par défaut si ces attributs ne sont pas spécifiés un iFrame aura une dimension de&nbsp;300x150px. Ces attributs ne doivent pas spécifier d''unité de mesure. Le navigateur assumera automatiquement que ces valeurs sont exprimées en pixels&nbsp;_(px)_.'
  -
    type: code
    lang: html
    body: '<iframe src="https://site.com" width="600" height="450"></iframe>'
  -
    type: text
    title: 'Classe et ID'
    level: h2
    body: 'Comme toute balise HTML, il est possible d''attribuer une classe ou un id à un iFrame afin de pouvoir le manipuler en CSS ou JavaScript par la&nbsp;suite.'
  -
    type: code
    lang: html
    body: '<iframe src="https://site.com" class="demo"></iframe>'
  -
    type: text
    title: Loading
    level: h2
    body: |
      L'attribut `loading` permet d'indiquer la priorité de chargement d'un iFrame. Par défaut, le navigateur tente de charger tous les iFrames en accordant une légère priorité à ceux visibles au chargement de la page dans la fenêtre. Cependant il est possible de lui spécifier différentes valeurs:
      
      - `auto` comportement normal, soit l'équivalent de ne pas mettre&nbsp;l'attribut.
      - `lazy` attendre que le iFrame soit sur le point d'être visible avant de le chargé. Donc si un usager ne fait jamais défiler la page jusqu'à celui-ci, le iFrame ne sera jamais chargé. Cette option permet d'accélérer le chargement de la&nbsp;page&thinsp;🏁.
      - `eager` indique de charger le iFrame le plus rapidement possible, peu importe sa position dans la&nbsp;page.
  -
    type: code
    lang: html
    body: '<iframe src="https://site.com" loading="lazy"></iframe>'
  -
    type: text
    title: Utilisation
    level: h2
    body: |
      Les iFrames sont particulièrement utiles afin d'incorporer certains éléments appartenant à d'autres sites. Par exemple:
      
      - Les cartes Google&nbsp;Map&thinsp;📍
      - Les vidéos Youtube et&nbsp;Viméo&thinsp;🎬
      - Les aperçus de page de plusieurs réseaux sociaux _(Facebook, Twitter,&nbsp;etc.)_ 
      
      Par exemple, le code suivant imbrique une carte situant le collège&nbsp;Montmorency:
  -
    type: code
    lang: html
    body: |
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.5485899861956!2d-73.72064708431346!3d45.559405635106366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9223815890e79%3A0xe7408a77564697c4!2sColl%C3%A8ge%20Montmorency!5e0!3m2!1sfr!2sca!4v1617136763120!5m2!1sfr!2sca" 
              width="600" 
              height="450" 
              loading="lazy"></iframe>
  -
    type: text
    body: |
      <div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;">
      	<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.5485899861956!2d-73.72064708431346!3d45.559405635106366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9223815890e79%3A0xe7408a77564697c4!2sColl%C3%A8ge%20Montmorency!5e0!3m2!1sfr!2sca!4v1617136763120!5m2!1sfr!2sca" width="600" height="450" style="border:0; position: absolute; top: 0; left: 0; width: 100%; height: 100%;" allowfullscreen="" loading="lazy"></iframe>
      </div>
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos des&nbsp;iFrames](https://developer.mozilla.org/fr/docs/Web/HTML/Element/iframe).'
is_hidden: false
title: iFrame
subtitle: 'youtube, vimeo, google map, etc.'
template: page-article
color_scheme: auto
preview_color: '#a7f672'
preview: /assets/previews/iframe.png
fieldset: page-article
id: 95aaa6ce-1c21-45fc-a904-7a2b9e2e8ca9
