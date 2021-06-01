body:
  -
    type: text
    body: |
      Les formulaires sont un incontournable du web, ils sont présents sur la majorité des sites et sont constitués de plusieurs champs. Ces champs sont en fait des balises `<input>` avec différent `type`. Visuellement, ils certains se ressemblent, mais ils remplissent tout un rôle&nbsp;spécifique. 
      
      Voyons quelques-un des `type` les plus&nbsp;communs.
      
      <style>
        .wysiwyg input { display: block; margin: 0 auto; padding: 0.25em 0.5em; }
        .wysiwyg input[type="email"]:valid { border: solid 2px #00c774; }
        .wysiwyg input[type="email"]:invalid { border: solid 2px #ff8487; }
      </style>
  -
    type: text
    title: Number
    body: |
      - Parfait pour les valeurs numériques&thinsp;🔢
      - Ajoute des flèches permettant d'incrémenter/décrémenter le nombre saisi du champ&thinsp;↕️.
      - Les attributs `min` et `max` permettent de spécifier un nombre minimal et maximal à respecter. Par exemple, `min="0"` interdit les valeurs&nbsp;négatives.
      - L'attribut `step` permet de définir de combien le nombre peut-être incrémenté. Le step par défaut est de 1, mais il serait possible d'augmenter de 0.5 grâce à `step="0.5"` par&nbsp;exemple.
    level: h2
  -
    type: text
    body: |
      <input type="number" value="0">
      
      Sur mobile, un pavé numérique est affiché comme pour le champ `tel`, mais sans l'option&nbsp;`+*#`.
  -
    type: code
    lang: html
    body: '<input type="number" value="0">'
  -
    type: image
    image: /assets/articles/input-number.jpg
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos d''input&nbsp;number](https://developer.mozilla.org/fr/docs/Web/HTML/Element/input/number).'
  -
    type: text
    title: Range
    level: h2
    body: |
      Permets de choisir une valeur entre deux extrémités. Leur usage est approprié lorsqu'une valeur approximative est&nbsp;suffisante.
      
      Par exemple, choisir plus ou moins de sauce sur sa pizza est plus intuitif à l'aide de ce type de contrôle que de spécifier une quantité en&nbsp;ml:
  -
    type: codepen
    id: 11e06e1b2a2ddabfb6da4864146138e6
    ratio: 34
    tabs: 'html,result'
  -
    type: text
    title: 'Attributs de range'
    level: h3
    body: |
      - `name` nom de référence lorsque le formulaire est&nbsp;soumis.
      - `min` et `max` permettent de spécifier un nombre minimal et maximal à&nbsp;respecter.
      - `step` définit la granularité. Autrement dit, le saut entre chaque valeur. Par exemple, `step: 100` fait en sorte que les valeurs 0, 100, 200, 300 sont possibles, mais pas&nbsp;150.
      - `disabled` permet d'afficher en lecture seule un widget&nbsp;range.
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos de input&nbsp;range](https://developer.mozilla.org/fr/docs/Web/HTML/Element/input/range).'
  -
    type: text
    title: Password
    body: |
      - Conviens aux mots de&nbsp;passe&thinsp;🔑.
      - Permet d'entrer son mot de passe en toute discrétion, puisque les caractères affichés à l'écran sont remplacés par des&nbsp;`•`.
    level: h2
  -
    type: code
    lang: html
    body: '<input type="password" value="démo">'
  -
    type: text
    body: |
      <input type="password" value="démo" autocomplete="off">
      
      Sur mobile, les boutons <kbd>😀</kbd> et <kbd>🎙</kbd> sont retirés puisque les mots de passe ne supportent  pas les émojis et que d'utiliser le dictaphone pour dire à voix haute son mot de passe causerait des soucis de&nbsp;confidentialité.
  -
    type: image
    image: /assets/articles/input-password.jpg
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos d''input&nbsp;password](https://developer.mozilla.org/fr/docs/Web/HTML/Element/Input/password).'
  -
    type: text
    title: Email
    body: |
      - Conçu pour les courriels&thinsp;✉️.
      - Ajoute automatiquement les pseudo-classes `:valid` et `:invalid` en fonction du texte inséré, permettant ainsi d'ajuster le visuel du champ en CSS afin de fournir une rétroaction à&nbsp;l'utilisateur.
    level: h2
  -
    type: code
    lang: html
    body: '<input type="email">'
  -
    type: code
    lang: css
    body: |
      input:valid { border: solid 2px green; }
      input:invalid { border: solid 2px red; }
  -
    type: text
    body: |
      <input type="email">
      
      Sur mobile, le bouton <kbd>🎙</kbd> du clavier est remplacé par les boutons <kbd>@</kbd> et <kbd>.</kbd> qui sont systématiquement présent dans une adresse&nbsp;courriel.
  -
    type: image
    image: /assets/articles/input-email.jpg
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos de input&nbsp;email](https://developer.mozilla.org/fr/docs/Web/HTML/Element/input/email).'
  -
    type: text
    title: Tel
    body: |
      - Parfait pour les numéros de&nbsp;téléphone&nbsp;📞.
      - Suggère des numéros de téléphone précédemment utilisés dans le&nbsp;navigateur.
      - Ne fais aucune validation par défaut, puisque les numéros varient grandement de format d'un pays à&nbsp;l'autre.
    level: h2
  -
    type: code
    lang: html
    body: '<input type="tel">'
  -
    type: text
    body: |
      <input type="tel">
      
      Lorsque l'attribut `inputmode="decimal"` est ajouté au champs téléphone, les appareils mobiles affichent un pavé numérique agrémenté des symboles&nbsp;`+*#`.
  -
    type: image
    image: /assets/articles/input-tel.jpg
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos d''input&nbsp;tel](https://developer.mozilla.org/fr/docs/Web/HTML/Element/input/tel).'
  -
    type: text
    title: Search
    body: |
      - Parfait pour les barres de&nbsp;recherche&thinsp;🔍.
      - Ajoute automatiquement une croix permettant d'effacer rapidement le texte&nbsp;saisi&thinsp;❌.
      - Certains navigateurs proposent même une autocomplétition sur ces champs avec des valeurs précédemment&nbsp;utilisées.
    level: h2
  -
    type: code
    lang: html
    body: '<input type="search" value="démo">'
  -
    type: text
    body: |
      <input type="search" value="démo">
      
      Sur mobile, le clavier est pratiquement identique à celui par défaut outre le bouton <kbd>.</kbd> qui est&nbsp;ajouté.
  -
    type: image
    image: /assets/articles/input-search.jpg
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos d''input&nbsp;search](https://developer.mozilla.org/fr/docs/Web/HTML/Element/input/search).'
  -
    type: text
    title: Date
    body: |
      - Permets de sélectionner une date dans un&nbsp;calendrier&thinsp;📅.
      - Les attributs `min` et `max` permettent de spécifier une date minimale et maximale à respecter. Par exemple, `min="1980-01-01"` fait en sorte qu'aucune date précédent le 1<sup>er</sup> janvier 1980 puisse être&nbsp;sélectionnée.
    level: h2
  -
    type: code
    lang: html
    body: '<input type="date">'
  -
    type: text
    body: |
      <input type="date">
      
      Sur mobile, un calendrier ou une molette de date comme sur l'image suivante sera&nbsp;affiché.
  -
    type: image
    image: /assets/articles/input-date.jpg
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos d''input&nbsp;date](https://developer.mozilla.org/fr/docs/Web/HTML/Element/input/date).'
  -
    type: text
    title: Time
    body: |
      - Permets de saisir une&nbsp;heure&thinsp;🕰.
      - Les attributs `min` et `max` permettent de spécifier une heure minimale et maximale à respecter. Par exemple, `min="09:00"` fait en sorte qu'aucune heure avant 9am ne puisse être&nbsp;sélectionnée.
    level: h2
  -
    type: code
    lang: html
    body: '<input type="time">'
  -
    type: text
    body: |
      <input type="time">
      
      Sur mobile, une horloge ou une molette d'heures comme sur l'image suivante sera&nbsp;affichée.
  -
    type: image
    image: /assets/articles/input-time.jpg
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos d''input&nbsp;time](https://developer.mozilla.org/fr/docs/Web/HTML/Element/input/time).'
  -
    type: text
    title: Color
    level: h2
    body: 'Permet de choisir une couleur à l''aide d''un sélecteur de couleurs _(colors picker)_&thinsp;🎨, plutôt que d''avoir a entrer un code hexadécimal, rgb ou&nbsp;autre.'
  -
    type: codepen
    id: f7b2e2671a9328f1ba12807955df8c25
    ratio: 34
    tabs: 'html,result'
  -
    type: text
    title: 'Attributs de color'
    level: h3
    body: |
      - `name` nom de référence lorsque le formulaire est&nbsp;soumis.
      - `value` code de la couleur par défaut. Si cet attribut est omis, la couleur utilisée par défaut sera&nbsp;_(noir&nbsp;⬛️)_.
      - `disabled` permet d'afficher en lecture seule l'outil de sélection de&nbsp;couleur.
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos d''input&nbsp;color](https://developer.mozilla.org/fr/docs/Web/HTML/Element/input/color).'
is_hidden: false
title: 'Formulaire avancé'
subtitle: 'number, password, email, tel, date, etc.'
template: page-article
color_scheme: auto
preview_color: '#35c9d6'
preview_abbr: C
preview: /assets/previews/formulaire-c.png
fieldset: page-article
id: b1955917-f3b2-4c87-b247-857be83d59d4
