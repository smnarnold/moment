title: 'Partiels (Parts)'
template: page-article
color_scheme: auto
body:
  -
    type: text
    body: 'Les partiels, ou _parts_ en anglais, sont utiles pour gérer la situation où un extrait de code est répété dans plus d''un modèle. Ainsi, plutôt que de copier/coller le code dans chaque modèle, le même fichier partiel est importé dans plusieurs&nbsp;modèles.'
  -
    type: text
    title: Emplacement
    level: h2
    body: |
      Il faut déterminer les endroits dans les différents modèles où l'on désire que le partiel soit affiché et ajouter un script permettant de&nbsp;l'inclure.
      
      Par exemple, pour inclure `metas.php` il faudra&nbsp;faire:
  -
    type: code
    lang: php
    body: '<?php get_template_part(''metas''); ?>'
  -
    type: note
    intent: generic
    body: 'Afin d''éviter toute confusion avec les modèles de base, il est encouragé de garder ses partiels dans un dossier distinct. Pour inclure ces partiels, il faudra par la suite préfixer le nom du fichier par celui de son dossier. Ex: `<?php get_template_part(''partials/metas''); ?>`'
  -
    type: note
    intent: good
    body: 'Pour plus d''informations sur les partiels [developer.wordpress.org/reference/functions/get_template_part](https://developer.wordpress.org/reference/functions/get_template_part/)'
fieldset: page-article
id: add6a80b-5c7e-403a-9c54-d555de1eee02
