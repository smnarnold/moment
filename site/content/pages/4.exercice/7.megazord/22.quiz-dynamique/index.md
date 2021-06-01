body:
  -
    type: text
    body: 'Pour cette partie du projet, nous allons rendre dynamique le quiz de notre site. C''est à dire, faire en sorte qu''un usager qui ne serait pas familier avec la programmation puisse, via l''interface de WordPress, ajouter, modifier ou encore retirer des&nbsp;questions.'
  -
    type: text
    title: Requis
    level: h2
    body: |
      - Ajoutez les extensions Advanced Custom Fields et ACF to Rest API à votre WordPress en&nbsp;ligne.
      - Dans ACF, créez-vous un nouveau groupe de champs intitulé _Quiz_. Ce groupe doit-être présent uniquement sur les billets et non les&nbsp;pages.
      - Toujours dans votre groupe, créer un champ texte intitulé `q`. Ce champ contiendra vos&nbsp;questions. 
      - Créez des champs texte intitulés `o1`, `o2`, `o3` et `o4`. Ces champs contiendront les options de réponses&nbsp;disponibles.
      - Finalement, créez-vous un dernier champ de type nombre intitulé `r` contenant le numéro de l'option correspondant à la bonne&nbsp;réponse.
      - Assurez-vous d'effacer tous les billets par défaut présent dans votre instance de WordPress. Créez ensuite un billet par&nbsp;question.
      - Accédez à vos billets via le Rest API de WordPress dans votre&nbsp;navigateur, ex: `site.com/groupe-api/wp-json/wp/v2/posts`
  -
    type: note
    intent: warning
    body: 'Lors de certaines installations, l''URL de l''API est modifiée. Si vous ne la trouvez pas. Essayer cette URL à la&nbsp;place `site.com/groupe-api/index.php/wp-json/`'
  -
    type: note
    intent: generic
    body: 'Vous devriez être en mesure de voir vos questions apparaitre en format&nbsp;JSON.'
  -
    type: note
    intent: warning
    body: 'Remarquez bien les différences de structure entre l''API et votre fichier&nbsp;JSON.'
  -
    type: text
    body: |
      - Dans votre branche `quiz dynamique`, remplacez l'URL de votre fichier JSON par l'URL du Rest API de votre site WordPress. Par exemple: `site.com/groupe-api/wp-json/wp/v2/posts`
      - Apportez les ajustements nécessaires dans la structure de votre code afin de récupérer chaque question, option et réponse&nbsp;correctement.
  -
    type: note
    intent: generic
    body: 'Ces ajustements ne devraient être&nbsp;minimes.'
is_hidden: false
title: 'Quiz - Dynamique'
template: page-exercice
color_scheme: auto
preview_color: '#ffd014'
preview_abbr: Q
fieldset: page-article
id: 1319b946-5639-45a9-bc8d-cd3e523841b5
