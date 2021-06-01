body:
  -
    type: text
    body: |
      Il arrive qu'il soit nécessaire d'insérer ou de modifier le contenu d'un élément dans une page ou plus précisément dans le DOM. Heureusement, JavaScript offre plusieurs fonctions permettant d'y&nbsp;arriver.
      
      Afin de démontrer les différentes options, un élément avec la classe `.element` et le texte `1` sera utilisé dans l'ensemble des exemples&nbsp;suivants.
  -
    type: code
    lang: html
    body: '<div class="element">1</div>'
  -
    type: text
    title: InnerText
    level: h2
    body: |
      La fonction `innerText` permet de récupérer ou de définir le <u>contenu texte</u> d'un&nbsp;élément. 
      
      Par exemple, pour récupérer le contenu texte de l'élément `.element`, il est possible de&nbsp;faire:
  -
    type: code
    lang: js
    body: 'console.log(element.innerText); // 1'
  -
    type: text
    body: |
      Si une valeur lui est attribuée, le texte existant est&nbsp;remplacé.
      
      Par exemple, dans le code ci-dessous&thinsp;👇 le contenu texte `1` est remplacé par le chiffre&nbsp;`2`;
  -
    type: codepen
    id: 1d0047f24af69225380c1e95ab1b5a55
    theme: light
    ratio: 34
    tabs: 'js,result'
  -
    type: note
    intent: warning
    body: 'Si du code HTML était attribué comme nouvelle valeur via `innerText`, les balises afficheraient textuellement  dans la&nbsp;page'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article MDN🦖 sur&nbsp;innerText](https://developer.mozilla.org/fr/docs/Web/API/Node/innerText).'
  -
    type: text
    title: InnerHTML
    level: h2
    body: |
      Similaire à innerText, la fonction `innerHTML` permet de récupérer ou de définir le <u>contenu HTML</u> d'un&nbsp;élément.
      
      Par exemple, pour récupérer le contenu HTML de `.element`, il est possible de faire:
  -
    type: code
    lang: js
    body: 'console.log(element.innerHTML); // 1'
  -
    type: text
    body: |
      Si une balise HTML avait été présente à l'intérieur de `.element`, par exemple une balise span enrobant le chiffre `1`, la fonction retournerait plutôt&nbsp;`<span>1</span>`.
      
      Si contenu HTML est attribué à `innerHTML`, le contenu HTML existant est remplacé par le&nbsp;nouveau.
      
      Par exemple, dans le code ci-dessous 👇 le contenu texte `1` est remplacé par `<em>2</em>`, ce qui nous donne le chiffre `2` en&nbsp;italique.
  -
    type: codepen
    id: 5f5b65e0cef134ce05ae696f36bc8723
    theme: light
    ratio: 34
    tabs: 'js,result'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article MDN🦖 sur&nbsp;innerHTML](https://developer.mozilla.org/fr/docs/Web/API/Element/innertHTML).'
  -
    type: text
    title: insertAdjacentText
    level: h2
    body: |
      Contrairement à [innerText](#innertext), la fonction `insertAdjacentText` permet d'insérer un contenu texte à une position précise dans un&nbsp;élément, sans effacé le contenu&nbsp;original.
      
      Soit:
      
      - `beforebegin` avant l'élément
      - `afterbegin` au début de l'élément
      - `beforeend` à la fin de l'élément
      - `afterend` après l'élément
  -
    type: text
    title: beforebegin
    level: h3
  -
    type: codepen
    id: b7c59aa68c1b2231559bb02e417e154c
    theme: light
    ratio: 34
    tabs: 'js,result'
  -
    type: text
    title: afterbegin
    level: h3
  -
    type: codepen
    id: ffa61aa279cc0718d8266bd65cc2f6ea
    theme: light
    ratio: 34
    tabs: 'js,result'
  -
    type: note
    intent: warning
    body: 'Si du code HTML était attribué comme valeur via `insertAdjacentText`, les balises afficheraient textuellement dans la&nbsp;page.'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article MDN🦖 sur&nbsp;insertAdjacentText()](https://developer.mozilla.org/fr/docs/Web/API/Element/insertAdjacentText).'
  -
    type: text
    title: insertAdjacentHTML
    level: h2
    body: |
      Similaire à [insertAdjacentText](#insertadjacenttext), la fonction `insertAdjacentHTML`permet d'insérer un contenu HTML à une position précise dans un élément, sans effacé son contenu&nbsp;original.
      
      Soit:
      
      - `beforebegin` avant l'élément
      - `afterbegin` au début de l'élément
      - `beforeend` à la fin de l'élément
      - `afterend` après l'élément
  -
    type: text
    title: beforeend
    level: h3
  -
    type: codepen
    id: e5dd9f0ff0e468a47f992d82e08e3550
    theme: light
    ratio: 34
    tabs: 'js,result'
  -
    type: text
    title: afterend
    level: h3
  -
    type: codepen
    id: dcd4c1005769b628f46e39ac30abad91
    theme: light
    ratio: 34
    tabs: 'js,result'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article MDN🦖 sur&nbsp;insertAdjacentHTML()](https://developer.mozilla.org/fr/docs/Web/API/Element/insertAdjacentHTML).'
is_hidden: false
title: 'Modification du DOM'
subtitle: 'innerText, innerHTML, insertAdjacent'
template: page-article
color_scheme: auto
preview_color: '#000'
fieldset: page-article
id: dcf4501d-67bb-4c3b-951f-d22ae8ae869b
