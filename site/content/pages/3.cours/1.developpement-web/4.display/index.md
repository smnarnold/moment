title: Display
template: page-article
body:
  -
    type: text
    body: |
      Chaque élément possède une propriété display qui dicte son&nbsp;affichage. 
      
      Par exemple, les balises `<div>`, `<p>` ou `<ul>` prennent toute la largeur disponible et s'affichent l'une au dessus de l'autre, car par défaut, leur propriété display est à&nbsp;block. 
      
      Tandis que les balises `<span>`, `<img>` ou `<a>` s'affichent l'une à la suite de l'autre, comme une suite de mots, car leur propriété display est à inline par&nbsp;défaut.
    title: 'Block vs inline'
    level: h2
  -
    type: image
    image: /assets/articles/block-vs-inline.png
  -
    type: text
    title: Block
    level: h3
    body: |
      Les éléments `display: block;` par défaut
      
      - Prennent toute la&nbsp;largeur 
      - S'affichent sur une nouvelle ligne
      - Peuvent avoir une largeur/hauteur _(width/height)_ de&nbsp;définies
      - Peuvent contenir d'autres éléments _(block ou inline)_
  -
    type: text
    title: Inline
    level: h3
    body: |
      Les éléments `display: inline;`  par&nbsp;défaut
      
      - Ne prennent strictemment que l'espace&nbsp;nécessaire
      - S'affichent un à la suite de&nbsp;l'autre
      - N'acceptent pas d'avoir une largeur/hauteur _(width/height)_ ou de marges verticales _(margin-top/margin-bottom)_
      - Peuvent contenir d'autres éléments inline, mais pas&nbsp;block.
  -
    type: text
    title: Inline-block
    level: h2
    body: |
      Les éléments en `display: inline-block;` sont en quelque sorte des hybrides entre inline et&nbsp;block.
      
      Par exemple, les balises `<button>`, `<select>` ou `<input>` s'affichent l'une à la suite de l'autre, mais peuvent avoir une largeur/hauteur _(width/height)_ de définies, car leur propriété display est à inline-block par&nbsp;défaut.
      
      - Ne prennent à la base que l'espace nécessaire
      - S'affichent un à la suite de l'autre
      - Peuvent avoir une largeur/hauteur _(width/height)_ et des marges verticales _(margin-top/margin-bottom)_ de définit
  -
    type: text
    title: None
    level: h2
    body: |
      Parfois il est préférable de ne pas afficher un élément. 
      
      Par exemple, un _"popup"_ ne devrait pas être affiché tant qu'un utilisateur n'a pas déclencher un certain évènement. D'où l'utilité de la propriété `display: none;` qui indique au navigateur de faire abstraction d'un&nbsp;élément.
  -
    type: code
    body: |
      .fear {
        display: none;
      }
    lang: css
fieldset: page-article
id: 4a2826b2-df43-4e16-9226-452673df1562
