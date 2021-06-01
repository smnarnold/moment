body:
  -
    type: text
    body: |
      La propriété `padding` définit l'espace entre le contenu et ses &nbsp;extrémités. Par défaut, cette propriété à une valeur de&nbsp;0 permettant au contenu de s'afficher a même les extrémités de&nbsp;l'élément, mais elle accepte l'ensemble des [unités de mesure&nbsp;CSS](unites-de-mesure).
      
      Lorsqu'une seule valeur est fournie, celle-ci est appliquée aux 4&nbsp;côtés de&nbsp;l'élément.
      
      Par exemple:
  -
    type: codepen
    id: 7241465f2f305314d6f3504d67df6d54
    theme: light
    ratio: 34
    tabs: chromeless
  -
    type: note
    intent: warning
    body: '`padding` n''accepte pas les valeurs&nbsp;négatives.'
  -
    type: note
    intent: emmet
    body: 'Raccourci Emmet: p'
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir l''[article MDN à propos de&nbsp;padding](https://developer.mozilla.org/fr/docs/Web/CSS/padding).'
  -
    type: text
    title: Sous-propriétés
    level: h2
    body: |
      Pour plus de contrôle, il est possible d'attribuer une valeur différente à chaque côté en utilisant les sous-propriétés&nbsp;suivantes:
      
      - `padding-top`
      - `padding-right`
      - `padding-bottom`
      - `padding-left`
      
      Par exemple:
  -
    type: codepen
    id: a5e54b9318d0c3dd90e95796238ab140
    theme: light
    ratio: 34
    tabs: chromeless
  -
    type: note
    intent: emmet
    body: 'Raccourcis Emmet: pt = `padding-top`, pr&nbsp;=&nbsp;`padding-right`, pb&nbsp;=&nbsp;`padding-bottom` et pl&nbsp;=&nbsp;`padding-left`'
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir ces articles MDN à propos de [padding-top](https://developer.mozilla.org/fr/docs/Web/CSS/padding-top), [padding-right](https://developer.mozilla.org/fr/docs/Web/CSS/padding-right), [padding-bottom](https://developer.mozilla.org/fr/docs/Web/CSS/padding-bottom) et&nbsp;[padding-left](https://developer.mozilla.org/fr/docs/Web/CSS/padding-left).'
  -
    type: text
    title: 'Syntaxe courte'
    level: h2
    body: |
      Il est aussi possible d'attribuer les 4&nbsp;côtés avec la syntaxe courte en les spécifiant un après l'autre en commençant par le haut et en tourant dans le sens des aiguilles d'une montre&thinsp;⌚️ _(top, right, bottom et left)_.
      
      Par exemple:
  -
    type: codepen
    id: 91649c892c3c8f86acbe2e80e5c7fb60
    theme: light
    ratio: 34
    tabs: chromeless
  -
    type: text
    title: 'Syntaxe courte à deux valeurs'
    level: h3
    body: |
      Lorsque seulement deux valeurs sont spécifiées la première est utilisée afin de déterminer le padding verticale ↕️ _(top et bottom)_ et la deuxième le padding horizontale ↔️ _(left et&nbsp;right)_.
      
      Par exemple:
  -
    type: codepen
    id: 90bcfbec887c3ed3b2206f2e614e2930
    theme: light
    ratio: 34
    tabs: chromeless
  -
    type: text
    title: 'Utilisation avec les pourcentages'
    level: h2
    body: |
      Lorsqu'une valeur de `padding` est définie en pourcentage&thinsp;_(%)_, que ce soit à l'horizontale _(left/right)_&thinsp;↔️ ou vertical _(top/bottom)_&thinsp;↕️, celle-ci <u>se base toujours sur la largeur</u> de&nbsp;l'élément.
      
      Autrement dit, si un élément mesure 100x20px et que `padding-bottom: 100%` lui est ajouté, sa hauteur finale sera de 120px _(20x&nbsp;de&nbsp;haut +&nbsp;100px de padding-bottom)_.
      
      Cette particularité est souvent exploitée afin de créer des éléments ayant un ratio spécifique. Par exemple, afin d'obtenir un format 16/9 il suffit de ramener la valeur de hauteur de cette fraction en pourcentage, soit `9 ÷ 16 x 100% = 56.25%`.
  -
    type: code
    lang: css
    body: |
      .element {
        width: 100%;
        height: 0;
        padding-bottom: 56.25%; // 16/9
      }
  -
    type: text
    body: 'Cet élément serait donc toujours dans un format&nbsp;16/9, peu importe la largeur de son&nbsp;parent.'
is_hidden: false
title: Padding
subtitle: 'espace à l''intérieur'
template: page-article
color_scheme: auto
preview_color: '#72f6b0'
preview: /assets/previews/padding.png
fieldset: page-article
id: be50b7d5-f8d9-40d4-80e1-5f3a168f4f97
