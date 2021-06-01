body:
  -
    type: text
    body: |
      La propriété `overflow` pourrait se traduire en québécois par _"ce&nbsp;qui&nbsp;dépasse"_. Cette propriété permet de spécifier comment un élément devrait se comporter lorsqu'un enfant dépasse son&nbsp;cadre. 
      
      Examinons les valeurs les plus&nbsp;courantes:
      
      - `visible` _(valeur par défaut)_ même si un enfant dépasse, celui-ci reste entièrement&nbsp;visible.
      - `hidden` si une partie d'un enfant dépasse, celle-ci est&nbsp;masquée.
      - `auto` si une partie d'un enfant dépasse, le parent la masquera, mais affiche des barres de défilement permettant de le voir en&nbsp;entier.
      - `scroll` identique à `auto`, mais affiche toujours les barres de défilement, peu importe si un enfant dépasse ou&nbsp;non.
      
      Comparons l'impact de cette propriété lorsqu'un enfant, le carré&thinsp;🟦, dépasse verticalement de son parent, le&nbsp;carré&thinsp;🟩.
  -
    type: codepen
    id: 2f7c6811ce9eee0a5ce0e6f89fc3f053
    ratio: 34
    tabs: chromeless
  -
    type: note
    intent: warning
    body: 'La propriété `overflow` ne fonctionne que sur les parents aillant une position autre que&nbsp;`static`.'
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos&nbsp;d''overflow](https://developer.mozilla.org/fr/docs/Web/CSS/overflow).'
  -
    type: text
    title: 'overflow-x et overflow-y'
    level: h2
    body: 'Ces propriétés fonctionnent de façon identique à `overflow`. Cependant, elles n''affectent qu''un seul axe, x ou y, comme leur nom&nbsp;l''indique.'
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus voir cet [article à propos d''overflow-x](https://developer.mozilla.org/fr/docs/Web/CSS/overflow-x) et celui-ci à propos [d''overflow-y](https://developer.mozilla.org/fr/docs/Web/CSS/overflow-y).'
is_hidden: false
title: Overflow
template: page-article
color_scheme: auto
preview_color: '#8872f6'
preview: /assets/previews/overflow.png
fieldset: page-article
id: b80566ff-ff4f-478e-96f6-a8d21fd78991
