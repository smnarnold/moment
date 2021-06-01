body:
  -
    type: text
    body: 'La propriété `margin` définit un espace vide devant être respecté autour d''un élément, bref une marge. Par défaut, cette propriété à une valeur de 0 permettant aux éléments de s''afficher un à la suite de l''autre sans espace vide _(collés un à l''autre)_, mais elle accepte l''ensemble des [unités de mesure&nbsp;CSS](unites-de-mesure).'
  -
    type: note
    intent: generic
    body: 'Contrairement à [padding](padding), margin accepte les valeurs&nbsp;négatives.'
  -
    type: text
    body: |
      Lorsqu'une seule valeur est fournie, celle-ci est appliquée aux 4 côtés de&nbsp;l'élément.
      
      Dans l'exemple suivant, remarquez comment le changement de margin affecte l'espace autour du carré&nbsp;🟦.
  -
    type: codepen
    id: a4e62856863bdf08252ccfdd05432219
    theme: light
    ratio: 34
    tabs: chromeless
  -
    type: note
    intent: warning
    body: 'Les éléments de type inline _(span, a, etc.)_ ne sont pas affectés par les marges verticales&thinsp;↕️'
  -
    type: note
    intent: emmet
    body: 'Raccourci Emmet: m'
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir l''[article MDN à propos de&nbsp;margin](https://developer.mozilla.org/fr/docs/Web/CSS/margin).'
  -
    type: text
    title: Sous-propriétés
    level: h2
    body: |
      Pour plus de contrôle, il est possible d'attribuer une valeur différente à chaque côté en utilisant les sous-propriétés&nbsp;suivantes:
      
      - `margin-top`
      - `margin-right`
      - `margin-bottom`
      - `margin-left`
      
      Par exemple:
  -
    type: codepen
    id: 54ad3feeeb2c3cf7ef6078e4833d7d11
    theme: light
    ratio: 34
    tabs: chromeless
  -
    type: note
    intent: warning
    body: 'L''option margin-right de l''exemple ci-dessus peut donner l''impression de ne pas fonctionner, mais la marge est bel et bien ajouté, elle est simplement combinée avec celle de son parent. [Plus sur les combinaisons de marges plus&nbsp;bas&thinsp;👇](#combinaison-de-marges)'
  -
    type: note
    intent: emmet
    body: 'Raccourcis Emmet: mt = `margin-top`, mr&nbsp;=&nbsp;`margin-right`, mb&nbsp;=&nbsp;`margin-bottom` et ml&nbsp;=&nbsp;`margin-left`'
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir ces articles MDN à propos de [margin-top](https://developer.mozilla.org/fr/docs/Web/CSS/margin-top), [margin-right](https://developer.mozilla.org/fr/docs/Web/CSS/margin-right), [margin-bottom](https://developer.mozilla.org/fr/docs/Web/CSS/margin-bottom) et&nbsp;[margin-left](https://developer.mozilla.org/fr/docs/Web/CSS/margin-left).'
  -
    type: text
    title: 'Syntaxe courte'
    level: h2
    body: |
      Il est aussi possible d'attribuer les 4&nbsp;côtés avec la syntaxe courte en les spécifiant un après l'autre en commençant par le haut et en tourant dans le sens des aiguilles d'une montre&thinsp;⌚️ _(top, right, bottom et left)_.
      
      Par exemple:
  -
    type: codepen
    id: 0455e83f9cecddb3ea378ca9bee07c62
    theme: light
    ratio: 34
    tabs: chromeless
  -
    type: text
    title: 'Syntaxe courte à deux valeurs'
    level: h3
    body: |
      Lorsque seulement deux valeurs sont spécifiées la première est utilisée afin de déterminer la marge verticale&nbsp;↕️ _(top et bottom)_ et la deuxième la marge horizontale&thinsp;↔️ _(left et&nbsp;right)_.
      
      Par exemple:
  -
    type: codepen
    id: cec68a5aa9102cf55575587952078c71
    theme: light
    ratio: 34
    tabs: chromeless
  -
    type: text
    title: 'Alignement horizontal'
    level: h2
    body: 'Les marges sont régulièrement utilisées afin de centrer horizontalement&thinsp;↔️ des éléments dans leurs parents. Pour ce faire, il suffit d''attribuer la valeur `auto` aux marges de gauche et de&nbsp;droite.'
  -
    type: codepen
    id: c3ac6d02f85ac7dd24f03e8cf1d2d33f
    theme: light
    ratio: 34
    custom_ratio: '17'
    tabs: 'css,result'
  -
    type: note
    intent: generic
    body: 'Cette technique de centrage est généralement utilisée avec la syntaxe à deux valeurs, soit `margin: 0 auto;`'
  -
    type: note
    intent: warning
    body: 'Pour centrer horizontalement un élément avec la valeur `auto`, un élément doit être en `display: block`'
  -
    type: text
    title: 'Combinaison de marges'
    level: h2
    body: |
      À l'occasion certaines marges sont combinées. C'est ce que les anglophones appellent _"margin collapse"_. Ce comportement peut paraitre étrange à première vue, mais il respecte le concept de marge qui est de générer un espace vide entre un élément et ceux l'entourant.
      
      L'exemple le plus commun est celui des paragraphes _(p)_ qui ont un `margin-top` et un `margin-bottom` équivalent à la hauteur d'une lettre _(1em)_, soit une ligne. Si une image est insérée après un paragraphe, le `margin-bottom` de ce dernier s'assuere qu'un espace équivalent à une ligne les sépare. Cependant, que se passe-t-il lorsque deux paragraphes se&nbsp;suivent?
      
      Un espace équivalent à une seule ligne les sépare, car leurs marges sont combinées plutôt&nbsp;qu'additionnées.
      
      Cependant, ce ne sont pas toutes les marges qui sont combinée. Seulement celles verticales&thinsp;↕️
  -
    type: note
    intent: good
    body: 'Pour en savoir plus sur ce comportement, je vous suggère l''excellent [billet de Josh W Comeau expliquant le _margin collapse_](https://www.joshwcomeau.com/css/rules-of-margin-collapse/) en&nbsp;détail.'
is_hidden: false
title: Margin
subtitle: 'espace à l''extérieur'
template: page-article
color_scheme: auto
preview_color: '#72f6b0'
preview: /assets/previews/margin.png
fieldset: page-article
id: c6f842bf-a424-46fc-85b9-45d6191ff76d
