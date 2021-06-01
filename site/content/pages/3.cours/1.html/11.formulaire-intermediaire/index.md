body:
  -
    type: text
    title: Radio
    body: |
      Les boutons radio permettent de choisir <u>une seule</u> option parmi un&nbsp;groupe&thinsp;🔘. Leur usage est approprié lorsque peu d'options sont disponibles ou qu'il est important que l'usager puisse voir toutes les options&nbsp;disponibles.
      
      Par exemple, si seulement une option de pizza&thinsp;🍕 peut-être&nbsp;sélectionnée:
  -
    type: codepen
    id: c4c9dbc40040b480a040aa775154c78a
    ratio: 34
    tabs: 'html,result'
  -
    type: text
    title: 'Attributs de radio'
    level: h3
    body: |
      - `name` tous les boutons radio partageant le même `name` font partie d'un même groupe. Seul une option/un bouton radio parmi ce groupe peut être sélectionnée à la&nbsp;fois. 
      
      Par exemple, il est <u>impossible</u> de sélectionner les options _Végétarienne_ et _Toute garnie_ en même temps, puisqu'elles font toutes deux partie du groupe&nbsp;`pizza`.
      
      - `checked` permet de spécifier à l'aide d'un booléen _(true/false)_ si l'élément doit-être sélectionné. Si aucune valeur n'est attribuée, la simple présence de l'attribut suffit à sélectionner&nbsp;l'élément.
  -
    type: note
    intent: generic
    body: |
      La présence ou absence de cet attribut est aussi utilisée en CSS afin d'appliquer des styles différents en fonction du statut de&nbsp;l'élément.
      
      Par exemple: `.radio:checked { outline: solid 5px green; }`
  -
    type: text
    body: |
      - `value` indique la valeur associée au bouton radio. Ainsi lorsque le formulaire est soumis, la valeur associée au `name` est celle de l'élément&nbsp;`checked`. 
      
      Par exemple, si le formulaire est soumis sans que les boutons radio soient touchés, la valeur reçue sera `pizza: "toute-garnie"`.
      
      - `disabled` permet d'afficher en lecture seule une option afin d'indiquer que bien qu'elle soit normalement disponible, celle-ci ne l'est pas en ce&nbsp;moment.
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos de input&nbsp;radio](https://developer.mozilla.org/fr/docs/Web/HTML/Element/input/radio).'
  -
    type: text
    title: Checkbox
    body: |
      Les boîtes à cocher permettent de définir individuellement un statut booléen _(true/false)_ pour une option&thinsp;☑. Leur usage est approprié lorsque des choix optionnels sont&nbsp;disponibles.
      
      Par exemple, si des options en extra sont offertes sur une&nbsp;pizza&nbsp;🍕
  -
    type: codepen
    id: d397b4eeccd117e328cf112f3641e4e6
    ratio: 34
    tabs: 'html,result'
  -
    type: text
    title: 'Attributs de checkbox'
    level: h3
    body: |
      - `name` nom de référence lorsque le formulaire est&nbsp;soumis. 
      - `checked` permet de spécifier à l'aide d'un booléen _(true/false)_ si l'option devrait être cochée ou non. Si aucune valeur n'est attribuée, la simple présence de l'attribut suffit à cocher&nbsp;l'élément.
  -
    type: note
    intent: generic
    body: |
      Lorsqu'une boite à cocher est cochée, la pseudo-classe `:checked` est ajoutée à l'élément, permettant ainsi de modifier l'apparence de l'élément en fonction de son&nbsp;statut.
      
      Par exemple: `.checkbox:checked { outline: solid 5px green; }`
  -
    type: text
    body: |
      - `value` cet attribut est optionnel. S'il n'est pas spécifié et que l'option _Olives_ est cochée, la soumission du formulaire retourne `olives: "on"`. Si une `value` est spécifiée, comme dans le cas de l'option _Oignons_, le formulaire retourne `oignons: "oui svp"`.
      - `disabled` permet d'afficher en lecture seule une boite à cochée afin d'indiquer que bien qu'elle soit normalement disponible, elle ne l'est pas en ce&nbsp;moment.
  -
    type: note
    intent: warning
    body: 'Contrairement aux autres `<input>`, les boîtes à cocher ne sont incluses dans les soumissions du formulaire uniquement si celles-ci sont&nbsp;cochées&thinsp;✅.'
  -
    type: note
    intent: exercice
    body: '[Exercice de menu hamburger](https://smnarnold.com/exercice/css/menu-hamburger)&thinsp;🍔'
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos de input&nbsp;checkbox](https://developer.mozilla.org/fr/docs/Web/HTML/Element/input/checkbox).'
  -
    type: text
    title: Select
    body: |
      Les `<select>` permettent de choisir une seule option parmi un groupe&thinsp;🔽. Leur usage est approprié lorsque plusieurs options sont disponibles et qu'il n'est pas nécessaire pour l'usager de tous les&nbsp;voir.
      
      Par exemple, pour choisir une plage horaire de livraison, il n'est pas nécessaire une fois sa plage trouvée de voir les autres&nbsp;options:
  -
    type: codepen
    id: 5c3aa8c94ee5179bfe1d0500f2f415b2
    ratio: 34
    tabs: 'html,result'
  -
    type: text
    title: 'Attributs de select'
    level: h3
    body: |
      - `name` nom de référence lorsque le formulaire est&nbsp;soumis.
      - `multiple` permet la sélection de plusieurs&nbsp;options.
      - `disabled` permet d'afficher en lecture seule le&nbsp;`<select>`.
  -
    type: text
    title: 'Attributs d''option'
    level: h3
    body: |
      - `value` indique la valeur associée au `<select>`. Ainsi lorsque le formulaire est soumis, la valeur associée au `name` est celle de l'option&nbsp;sélectionnée.
      - `selected` permet de spécifier à l'aide d'un booléen _(true/false)_ si l'option devrait être sélectionnée. Si aucune valeur n'est attribuée, la simple présence de l'attribut suffit à sélectionner&nbsp;l'élément.
      - `disabled` permet d'afficher en lecture seule une option en particulier. Par exemple, la page horaire 15h dans l'exemple précédent est visible, mais n'est pas&nbsp;sélectionnable.
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos de&nbsp;select](https://developer.mozilla.org/fr/docs/Web/HTML/Element/select).'
  -
    type: text
    title: Textarea
    level: h2
    body: 'Similaire au champ texte de base, `<textarea>` permet de définir une zone de texte sur plusieurs lignes, permettant ainsi à l''usager d''inscrire un contenu plus long. Au besoin, cette boite de texte peut être redimensionée grâce à sa poignée dans le coin inférieur&nbsp;droit.'
  -
    type: codepen
    id: 15377ab5bee253bf311375f3a71f24ed
    ratio: 34
    tabs: 'html,result'
  -
    type: text
    title: 'Attributs de textarea'
    level: h3
    body: |
      - `cols` définit la largeur de base du&nbsp;textarea.
      - `rows` définit la hauteur de base du&nbsp;textarea.
      - Cette balise accepte aussi les mêmes attributs qu'un champ texte régulier, tel que: `readonly`, `placeholder`, `required`, `minlength`, `maxlength`,&nbsp;etc.
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos de&nbsp;textarea](https://developer.mozilla.org/fr/docs/Web/HTML/Element/textarea).'
  -
    type: note
    intent: exercice
    body: '[Exercice Dragonball](https://smnarnold.com/exercice/css/radio-dragonball)&thinsp;🐉'
is_hidden: false
title: 'Formulaire intermédiaire'
subtitle: 'radio, checkbox, select, textarea'
template: page-article
color_scheme: auto
preview_color: '#35c9d6'
preview_abbr: B
preview: /assets/previews/formulaire-b.png
fieldset: page-article
id: 9d0490f4-3a0d-47af-bad1-c815bc30f4b5
