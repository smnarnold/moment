body:
  -
    type: text
    body: |
      La propriété `box-shadow` permet d'ajouter une ombre à un&nbsp;élément. Par défaut, la couleur de l'ombre correspond à la couleur du texte de l'élément en&nbsp;question.
      
      Afin d'être visible, une ombre nécessite d'être décalée de son parent. Pour ce faire, il faut lui attribuer une valeur de décalage sur les X, les Y ou les&nbsp;deux.
      
      Par exemple:
  -
    type: codepen
    id: 517ac747b9a7335b4df21aab5e9aa8ce
    ratio: 34
    tabs: chromeless
  -
    type: text
    title: Couleur
    level: h2
    body: 'Pour spécifier la couleur d''ombrage, il suffit d''ajouter une unité de couleur à la&nbsp;fin.'
  -
    type: codepen
    id: 9f57bfc6a5e79cd7dd14c20cdf30fd74
    ratio: 34
    tabs: chromeless
  -
    type: text
    title: Flou
    level: h2
    body: 'Normalement, une ombre n''est pas nettement découpée. Heureusement, il est possible de la flouter grâce à une 3<sup>e</sup> valeur insérée avant la couleur. En anglais, cette valeur est nommée le&nbsp;_"blur"_.'
  -
    type: codepen
    id: dcbad852f4c750c74a65a09c17157edf
    ratio: 34
    tabs: chromeless
  -
    type: text
    title: Étendu
    level: h2
    body: 'En ajoutant une 4<sup>e</sup> valeur, il est possible d''augmenter/diminuer la taille d''une ombre afin que sa dimension ne soit pas identique à celle de son élément référent. En anglais, cette valeur est nommée le&nbsp;_"spead"_.'
  -
    type: codepen
    id: 294938144f50fd845d0dc04061852965
    ratio: 34
    tabs: chromeless
  -
    type: text
    title: Direction
    level: h2
    body: |
      Par défaut, les ombres sont projetées vers l'extérieur de leurs éléments, donnant ainsi l'impression	qu'ils sont surélevés. Cependant, il est possible de changer la direction des ombres afin qu'elles soient projetées vers l'intérieur de leurs éléments, créant ainsi une illusion de&nbsp;profondeur.
      
      Pour ce faire, il faut ajouter le mot-clé `inset` comme premier argument au&nbsp;`box-shadow`.
      
      Par exemple:
  -
    type: codepen
    id: 6741e3dee4df57c9d864b8e753938f2a
    ratio: 34
    tabs: chromeless
  -
    type: note
    intent: tool
    body: |
      Générateur&nbsp;d'ombres:
      
      - [Brumm.af](https://brumm.af/shadows)
      - [keyframes.app/shadows](https://keyframes.app/shadows/)
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos de&nbsp;box-shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow).'
is_hidden: false
title: Box-shadow
template: page-article
color_scheme: auto
preview_color: '#b708b1'
preview: /assets/previews/box-shadow.png
fieldset: page-article
id: 1288bf56-2691-467e-a719-1715438cc1ac
