body:
  -
    type: text
    body: 'Par défaut, le flux de la page, ou en anglais _page flow_, fait en sorte qu''une balise HTML se positionne  toujours par-dessus celles qui la précède. Ainsi, dans le cas où deux balises se superposent, celle apparaissant en dernier dans le code affichera par-dessus la&nbsp;première.'
  -
    type: codepen
    id: d29dd144b022b049977de0e491720018
    ratio: 34
    tabs: chromeless
  -
    type: text
    body: |
      Il est cependant possible de modifier l'ordre d'empilement des balises en spécifiant une valeur de `z-index`. Attention, seules les balises ayant la propriété CSS `position` de défini à une valeur autre que `static` sont impactés par&nbsp;`z-index`.
      
      Dans l'exemple ci-dessous, `z-index: 1` est ajouté à l'élément vert&thinsp;🟩. Remarquez cependant comment cette propriété n'a aucun effet tant qu'une position n'est pas&nbsp;définie.
  -
    type: codepen
    id: 312e721102046e3d9843525421c1869b
    ratio: 34
    tabs: chromeless
  -
    type: text
    title: 'Contexte d''empilement'
    level: h2
    body: |
      Les éléments partageant un même parent peuvent être déplacés en avant ou en arrière les uns des autres grâce à `z-index`, c'est ce que l'on appelle le contexte&nbsp;d'empilement.
      
      Cependant, quand un parent à une position autre que `static` de défini, il créer un nouveau contexte d'empilement pour ses enfants. Ce contexte limite la portée du `z-index` des enfants à ce parent. Autrement dit, si le carré bleu&thinsp;🟦 est par-dessus le carré vert&thinsp;🟩 et que ce dernier contient un carré rouge&thinsp;🟥, même si ce carré avait un z-index d'un million, celui-ci resterait sous le carré bleu&thinsp;🟦 puisque son contexte d'empilement est limité à son parent, soit le carré vert&thinsp;🟩.
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos de&nbsp;z-index](https://developer.mozilla.org/fr/docs/Web/CSS/z-index).'
is_hidden: false
title: Z-Index
template: page-article
color_scheme: auto
preview_color: '#7297f6'
preview: /assets/previews/z-index.png
fieldset: page-article
id: 96c2e626-9d24-46eb-8864-df5e34228926
