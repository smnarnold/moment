body:
  -
    type: text
    title: Mots-clés
    level: h2
    body: |
      Il est possible de spécifier certaines couleurs en CSS en utilisant leur nom _(en anglais)_&nbsp;directement.
      
      Par exemple, `yellow` pour du jaune&thinsp;🟨, `orange` pour du orange&thinsp;🟧 et ainsi de suite. Malheureusement, il est difficile de retenir la majorité de ces noms et de se limiter à 147 couleurs. L'usage des mots-clés est donc peu fréquent à l'exception de classiques tels que: `black`, `white`,&nbsp;etc.
  -
    type: note
    intent: tool
    body: 'Pour [visualiser les 147 noms de couleurs&nbsp;disponibles](http://www.colors.commutercreative.com/grid/).'
  -
    type: note
    intent: generic
    body: 'En 2014, [une 148<sup>e</sup> couleur CSS fut été ajoutée](https://codepen.io/trezy/post/honoring-a-great-man) afin de rendre un hommage à Eric&nbsp;Meyer.'
  -
    type: text
    title: Hexadécimal
    level: h2
    body: |
      Un code hexadécimal est constitué d'un dièse&nbsp;_(#)_ suivi de 6&nbsp;caractères compris entre 0&nbsp;et&nbsp;F. Les chiffres couvrent les valeurs de 0&nbsp;à&nbsp;9 et les lettres de 10&nbsp;à&nbsp;15 _(a=10, b=11 ... f=15)_.
      
      - Les 2 premiers caractères représentent le&nbsp;rouge&thinsp;🟥
      - Les 2 du milieu le&nbsp;vert&thinsp;🟩
      - Les 2 derniers le&nbsp;bleu&thinsp;🟦
      
      Plus une valeur est élevée, plus la couleur est présente. À l'opposée, plus une valeur est basse, plus la couleur est&nbsp;absente. 
      
      Par exemple, le code suivant `#ff0000` indique un maximum de rouge&thinsp;💯🟥 et une absence totale de vert&thinsp;🚫🟩 et de bleu&thinsp;🚫🟦, donnant ainsi un <span style="color: #ff0000;">rouge&nbsp;pur</span>.
  -
    type: text
    title: 'Hex 3 caractères'
    level: h3
    body: |
      Lorsque chaque couleur d'un code hexadécimal est constituée de deux caractères identiques, il est possible d'inscrire chaque caractère de façon&nbsp;unique.
      
      Dans l'exemple précédent `#ff0000` se déconstruit&nbsp;ainsi:
      
      - 🟥 = `ff`
      - 🟩 = `00`
      - 🟦 = `00`
      
      Puisque chaque valeur est un doublé, il est possible d'abréger le code&nbsp;`#f00`.
  -
    type: text
    title: 'Hex 8 caractères'
    level: h3
    body: |
      Il est possible d'ajouter deux caractères supplémentaires à la fin d'un code hexadécimal régulier afin de spécifier son&nbsp;alpha. 
      
      - `00` = complètement transparent.
      - `ff` = complètement opaque.
      - Toute valeur comprise entre ces deux extrêmes représente un niveau d'alpha allant de faible à&nbsp;fort.
  -
    type: note
    intent: warning
    body: 'Puisque calculer une valeur d''alpha avec une unité constituée de chiffres et de lettres n''est pas évident, cette approche n''est pas particulièrement&nbsp;répandue.'
  -
    type: text
    title: 'rgb et rgba'
    level: h2
    body: |
      RGB est l'acronyme des couleurs _red_&thinsp;🟥, _green_&thinsp;🟩 et _blue_&thinsp;🟦. Pour définir une couleur `rgb()`il suffit de spécifier ces 3&nbsp;couleurs avec une valeur comprise entre 0&nbsp;et&nbsp;255. Plus la valeur est élevée plus la couleur est&nbsp;présente.
      
      Par exemple, le <span style="color: #ff0000;">rouge&nbsp;pur</span> de l'exemple précédent s'écrirait ainsi `rgb(255, 0, 0)` dans ce&nbsp;format.
      
      Les couleurs `rgba()` fonctionnent sur le même principe, mais une 4<sup>e</sup> valeur comprise entre 0&nbsp;et&nbsp;1 permet de spécifier l'alpha de la&nbsp;couleur.
      
      Par exemple, pour obtenir un <span style="color: rgba(255, 0, 0, 0.5);">rouge pur semi-transparent</span>, il est possible d'écrire `rgba(255, 0, 0, 0.5)`.
  -
    type: text
    title: 'hsl et hsla'
    level: h2
    body: |
      HSL est l'acronyme de `hue`, `saturation` et `lightness` _(teinte, saturation et luminosité)_. Pour définir une couleur `hsl()` il faut&nbsp;spécifier:
      
      - Une teinte entre 0&nbsp;et&nbsp;255
        - 0 = 🟥
        - 255 = 🟦
      - Une saturation entre 0&nbsp;et&nbsp;100%
        - 0 = La couleur est désaturée comme sur une photo noir et&nbsp;blanc.
        - 100% = Couleur pure
      - Une luminosité entre 0&nbsp;et&nbsp;100%
        - 0 = Absence de lumière, tout est&nbsp;noir.
        - 50% = Lumière normale.
        - 100% = Lumière au maximum, tout est&nbsp;blanc.
        
      Par exemple, le <span style="color: #ff0000;">rouge&nbsp;pur</span> de l'exemple précédent s'écrirait ainsi `hsl(0, 100%, 50%)` dans ce&nbsp;format.
      
      Les couleurs `hsla()` fonctionnent sur le même principe, mais une 4<sup>e</sup> valeur comprise entre 0&nbsp;et&nbsp;1 permet de spécifier l'alpha de la&nbsp;couleur.
      
      Par exemple, pour obtenir un <span style="color: rgba(255, 0, 0, 0.5);">rouge pur semi-transparent</span>, il est possible d'écrire `hsla(0, 100%, 50%, 0.5)`.
  -
    type: note
    intent: tool
    body: 'Outil de&nbsp;[conversion de couleurs](https://convertacolor.com/)'
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos des unités de&nbsp;couleurs](https://developer.mozilla.org/fr/docs/Web/CSS/Type_color).'
is_hidden: false
title: 'Unités de couleur'
subtitle: 'hex, rgb, hsl'
template: page-article
color_scheme: auto
preview_color: '#000'
preview: /assets/previews/unite-couleurs.png
fieldset: page-article
id: b354af17-f061-4016-ac29-9b96ea5294ae
