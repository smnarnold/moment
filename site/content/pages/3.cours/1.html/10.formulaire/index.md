body:
  -
    type: text
    title: 'Input text'
    level: h2
    body: |
      Génère un champ texte sur une seule ligne. Ce champ est parfait pour les informations textuelles à caractère généralistes.
      
      Le type `text` est le type par défaut de la balise `<input>`. Si aucun type n'est spécifié ou que le `type` utilisé n'est pas reconnu par le navigateur, celui-ci assumera automatiquement qu'il s'agit d'un champ texte.
  -
    type: codepen
    id: b94ca93083fc0e13f9797692e068f8ad
    ratio: 34
    tabs: 'html,result'
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos d''input&nbsp;text](https://developer.mozilla.org/fr/docs/Web/HTML/Element/input/text).'
  -
    type: text
    body: 'Plusieurs attributs sont disponibles sur les champs texte. Voyons quelques-uns des plus&nbsp;populaires.'
  -
    type: text
    title: Value
    level: h3
    body: |
      L'attribut `value` permet de définir la valeur par défaut d'un&nbsp;champ.
      
      Par exemple, si des répondants doivent indiquer leur pays de résidence, mais que la majorité répondront Canada &thinsp;🇨🇦, il est possible de prépopuler le formulaire avec cette&nbsp;valeur.
  -
    type: codepen
    id: 6530740a69010457bbfd83c410d1621a
    ratio: 34
    tabs: 'html,result'
  -
    type: text
    title: Placeholder
    level: h3
    body: |
      L'attribut `placeholder` permet d'afficher un exemple de valeur possible à saisir dans le champ. Bien que visible, cette valeur n'est pas réellement présente dans le champ contrairement à l'attribut `value`. Qui plus est, cette valeur disparaitra dès que l'utilisateur commencera à inscrire une nouvelle&nbsp;valeur.
      
      Par exemple, pour indiquer que le nom du pays est requis et que le nom complet est désiré _(Canada)_ et non l'abréviation _(Can)_, il est possible d'utiliser cet&nbsp;attribut.
  -
    type: codepen
    id: ea9bf4bec3e8def45cac2a70cb76a6f7
    ratio: 34
    tabs: 'html,result'
  -
    type: text
    body: |
      Le style du placeholder est modifiable via le pseudo-élément `::placeholder`. Dans l'exemple précédent, afin de différencier le placeholder du texte normal, la couleur bleue lui est&nbsp;attribuée.
      
      Tant que le `placeholder` est visible _(que l'usager n'a pas inscrit de nouvelle valeur)_, le champ aura la pseudo-classe `:placeholder-shown` permettant de changer l'apparence du champ. Dans l'exemple précédent, le champ à une bordure bleue tant qu'une nouvelle valeur n'est pas inscrite grâce à cette&nbsp;pseudo-classe.
  -
    type: text
    title: Readonly
    level: h3
    body: |
      L'attribut `readonly` permet d'indiquer à l'aide d'un booléen _(true/false)_ si un champ est en lecture seule _(impossible à modifier)_. Si l'attribut `readonly` est ajouté sans booléen, le navigateur considèrera que le champ est en lecture seule, soit un équivalent de `readonly="true"`.
      
      Par exemple, un formulaire de modification de profil permettant de mettre à jour ses informations personnelles et de voir son nom d'usager, mais ne permettant pas de modifier ce&nbsp;dernier.
  -
    type: codepen
    id: c1ce8ab7cec2aed84fb3aec23ce35dd0
    ratio: 34
    tabs: 'html,result'
  -
    type: text
    body: 'Dès qu''un champ à l''attribut `readonly`, la pseudo-classe `:read-only` lui est attribuée. Permettant ainsi de fournir une indication visuelle en CSS à l''usager que ce champ ne peut être modifié. Comme dans l''exemple précédent où le fond grisâtre est ajouté via à cette&nbsp;pseudo-classe.'
  -
    type: note
    intent: mdn
    body: 'Pour en savoir voir cet [article MDN à propos de&nbsp;readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).'
  -
    type: text
    title: Required
    level: h3
    body: |
      L'attribut `required` permet d'indiquer à l'aide d'un booléen _(true/false)_ si un champ est requis. Si l'attribut `required` est ajouté sans booléen, le navigateur considèrera que le champ est requis, soit un équivalent de `required="true"`.
      
      Par exemple, un champ non requis vs un champ&nbsp;requis:
  -
    type: codepen
    id: 1cfbbd2f41c6a5da5c407f76183618cf
    ratio: 34
    tabs: 'html,result'
  -
    type: text
    body: |
      Dès qu'une valeur est saisie dans le champ requis la pseudo-classe `:valid` est ajoutée au champ. Cette pseudo-classe est régulièrement utilisée en CSS afin de fournir une rétroaction positive à l'utilisateur. Comme dans l'exemple précédent, une bordure verte indique que l'information entrée est valide 🟢.
      
      À l'opposée, la pseudo-classe `:invalid` est ajoutée, tant que le champ est vide, permettant ainsi d'attirer l'attention de l'utilisateur à l'aide d'une rétroaction négative, telle qu'une bordure rouge&thinsp;🔴.
  -
    type: note
    intent: generic
    body: 'Puisque le premier champ n''est pas requis, il est automatiquement valide et donc reçoit la pseudo-classe `:valid` lui donnant sa bordure&nbsp;verte.'
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos de&nbsp;required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).'
  -
    type: text
    title: 'Minlength & Maxlength'
    level: h3
    body: |
      Les attributs `minlength` & `maxlength` permettent de définir un nombre minimal et maximal de caractères pouvant-être inscrit dans un&nbsp;champ.
      
      Par exemple, un champ de code postal acceptant de 3 à 6&nbsp;caractères:
  -
    type: codepen
    id: e21f565ac431ed48defdfaca35798935
    ratio: 34
    tabs: 'html,result'
  -
    type: text
    body: 'Si le nombre minimal et maximal sont respectés, la pseudo-classe `:valid` est ajoutée au&nbsp;champ. À l''opposée, si le nombre minimal n''est pas respecté, la pseudo-classe `:invalid` est&nbsp;ajoutée.'
  -
    type: note
    intent: warning
    body: 'La longueur maximale ne déclenche jamais la pseuso-classe `:invalid` puisque tout texte est tronqué à partir de la longueur maximale&nbsp;permise.'
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir ces articles MDN à propos de [minlength](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/minlength) et&nbsp;[maxlength](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/maxlength).'
  -
    type: text
    title: Label
    level: h2
    body: |
      Les libellés ou `<label>` permettent d'indiquer le rôle d'un élément _(ex: un champ texte)_ au sein d'un formulaire. Le libellé peut être associé à un élément de formulaire via l'attribut `for` ou encore en plaçant l'élément de formulaire à l'intérieur même de la balise&nbsp;`<label>`. 
      
      Par exemple, les deux méthodes suivantes de définition de libellé sont&nbsp;valides:
  -
    type: codepen
    id: e218d8bb9e2fea0fb31da335365f8e30
    ratio: 34
    tabs: 'html,result'
  -
    type: text
    title: 'Attributs de label'
    level: h3
    body: '- `for` permet d''associer un élément avec son libellé. Pour se faire, la valeur de l''attribut `for` doit correspondre au `id` de l''élément qu''il&nbsp;désigne.'
  -
    type: note
    intent: generic
    body: 'Lorsqu''un libellé est cliqué, le focus est automatiquement attribué à l''élément qu''il&nbsp;désigne.'
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos de&nbsp;label](https://developer.mozilla.org/fr/docs/Web/HTML/Element/Label).'
  -
    type: text
    title: Form
    level: h2
    body: 'La balise `<form>` regroupe tous les éléments d''un&nbsp;formulaire.'
  -
    type: codepen
    id: cc3f019dc628a2a1f805d6ce9ba9fe79
    ratio: 34
    tabs: 'html,result'
  -
    type: text
    title: 'Attributs de form'
    level: h3
    body: |
      - `action` permets de spécifier l'url où les informations du formulaire doivent être&nbsp;soumises.
      - `method` <u>méthode http</u> utilisée par le navigateur afin de soumettre le formulaire. Ses valeurs peuvent-être
      	- `GET` _(par défaut)_ stock les informations du formulaire dans l'URL après le symbole&nbsp;`?`.
          - `POST` envois les informations du formulaire dans la requête soumise à la page. Les informations ne sont donc pas&nbsp;visibles.
  -
    type: note
    intent: warning
    body: 'Il est impossible d''avoir un formulaire à l''intérieur d''un autre&nbsp;formulaire.'
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos de&nbsp;form](https://developer.mozilla.org/fr/docs/Web/HTML/Element/Form).'
  -
    type: text
    title: 'Input submit'
    level: h2
    body: 'Génère un bouton permettant de soumettre un formulaire.'
  -
    type: codepen
    id: 563285df1784433ef8a136dad84acb4d
    ratio: 34
    tabs: 'html,result'
  -
    type: text
    title: 'Attribut de submit'
    level: h3
    body: '- `value` définit le texte à l''intérieur du bouton&nbsp;généré.'
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos d''input&nbsp;submit](https://developer.mozilla.org/fr/docs/Web/HTML/Element/Input/submit).'
is_hidden: false
title: Formulaire
subtitle: 'text, label, form, submit'
template: page-article
color_scheme: auto
preview_color: '#35c9d6'
preview_abbr: A
preview: /assets/previews/formulaire-a.png
fieldset: page-article
id: f6619828-9a54-4324-b51d-02d7e8649ce0
