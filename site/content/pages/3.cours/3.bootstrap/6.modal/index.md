body:
  -
    type: text
    body: |
      La composante _Modal_ de Bootstrap permet de créer facilement des fenêtres contextuelles, plus communément connues sous leur nom anglophone&nbsp;_"popup"_. 
      
      Lorsqu'une de ces fenêtres est ouverte, elle s'affiche par-dessus le site, masquant partiellement le reste du contenu à l'aide d'un fond grisé semi-transparent, permettant de mettre l'emphase sur la fenêtre en question. Ces fenêtres ne réagissent pas au défilement de la page, elles restent donc prédominantes jusqu'à leur fermeture, ce qui les rend tout indiquées pour afficher certains éléments tels&nbsp;que:
      
      - Un formulaire _(connexion, quiz, abonnement à une infolettre,&nbsp;etc.)_
      - Une image en meilleure&nbsp;résolution.
      - Un avertissement. Par exemple, _"Votre session a expiré"_,&nbsp;etc.
  -
    type: note
    intent: warning
    body: 'Pour fonctionner, cette composante a besoin du fichier JS de&nbsp;Bootstrap.'
  -
    type: text
    title: Définition
    level: h2
    body: |
      Pour définir une fenêtre contextuelle de type _modal_, il faut insérer sa structure de base dans un fichier&nbsp;HTML. 
      
      Par exemple:
  -
    type: code
    lang: html
    body: |
      <div class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
          </div>
        </div>
      </div>
  -
    type: text
    body: 'Dans cet exemple, la classe `.modal` permet de créer le fond semi-transparent masquant partiellement le reste du site. La classe `.modal-dialog` se charge de créer la fenêtre de base et `.modal-content` s''occupe de gérer le positionnement des différents éléments de contenu dans la fenêtre&nbsp;_modal_.'
  -
    type: note
    intent: warning
    body: 'Bien que ce code puisse théoriquement être placé n''importe où dans le fichier HTML. Il est suggéré de le placer vers la fin du body, hors de tout parent, afin d''éviter de potentiels conflits de positionnement avec&nbsp;ceux-ci.'
  -
    type: text
    title: Contenu
    level: h2
    body: 'L''élément `.modal-content` peut contenir trois types de contenu,&nbsp;soit:'
  -
    type: text
    title: modal-header
    level: h3
    body: |
      Contiens des informations telles&nbsp;que: 
      
      - Le titre de la&nbsp;fenêtre.
      - Une croix permettant de fermer la&nbsp;fenêtre.
      - Etc.
  -
    type: code
    lang: html
    body: |
      <div class="modal-header">
        <h2 class="modal-title">Titre de ma fenêtre</h2>
        <button class="btn-close" data-bs-dismiss="modal" aria-label="Fermer la fenêtre"></button>
      </div>
  -
    type: text
    body: 'L''attribut `data-bs-dismiss="modal"` permet de spécifier à n''importe quel élément dans une fenêtre _modal_ de fermer la fenêtre en&nbsp;question.'
  -
    type: text
    title: modal-body
    level: h3
    body: |
      Permets de contenir le contenu principal de la fenêtre: son texte, son image, son formulaire,&nbsp;etc.
      
      Par exemple:
  -
    type: code
    lang: html
    body: |
      <div class="modal-body">
        <p>Message de ma fenêtre</p>
      </div>
  -
    type: text
    title: modal-footer
    level: h3
    body: |
      Contiens généralement des boutons en lien avec la&nbsp;fenêtre. 
      
      - Bouton confirmant un&nbsp;changement.
      - Bouton de soumission de&nbsp;formulaire.
      - Bouton d'annulation permettant de fermer la&nbsp;fenêtre.
      - Etc.
  -
    type: code
    lang: html
    body: |
      <div class="modal-footer">
        <button class="btn" data-bs-dismiss="modal">Annuler</button>
      </div>
  -
    type: text
    title: Déclenchement
    level: h2
    body: |
      Par défaut, les fenêtres _modal_ sont masquées. Pour les afficher, il est nécessaire d'ajouter un élément permettant de déclencher leur apparition. Ce bouton doit contenir deux attributs&nbsp;clés:
      
      - `data-bs-toggle="modal"` indiquant qu'il contrôle une fenêtre&nbsp;_"modal"_.
      - `data-bs-target="#example"` spécifiant la fenêtre _"modal"_&nbsp;contrôlée.
  -
    type: code
    lang: html
    body: |
      <button class="btn" data-bs-toggle="modal" data-bs-target="#example">
        Ouvrir
      </button>
  -
    type: note
    intent: warning
    body: 'Attention, le id doit être spécifié sur la fenêtre _modal_ et dans l''attribut du bouton pour que les deux éléments soient&nbsp;liés.'
  -
    type: text
    title: Taille
    level: h2
    body: |
      Par défaut, la fenêtre _modal_ de Bootstrap à une largeur de 500px. Cependant, il est possible de modifier cette taille en ajoutant une classe supplémentaire à l'élément `.modal-dialog`.
      
      | Classes       | Taille    |
      | ------------- | ---------:|
      | `.modal-sm`  | 300px     |
      | `.modal-lg`  | 800px     |
      | `.modal-xl`  | 1140px    |
      
      Par exemple:
  -
    type: code
    lang: html
    body: |
      <div class="modal" tabindex="-1">
        <div class="modal-dialog modal-lg">...</div>
      </div>
  -
    type: text
    title: 'Alignement vertical'
    level: h2
    body: |
      Par défaut, les fenêtres _modal_ Bootstrap sont affichées vers le haut de la page. Cependant, il est possible de centrer ces fenêtres verticalement en ajoutant la classe `.modal-dialog-centered` à l'élément `modal-dialog`.
      
      Par exemple:
  -
    type: code
    lang: html
    body: |
      <div class="modal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">...</div>
      </div>
  -
    type: text
    title: Transition
    level: h2
    body: 'Par défaut, la fenêtre _modal_ apparait brusquement lorsque déclenchée. Cependant, il est possible d''ajouter une transition afin de rendre son apparition plus élégante grâce à une transition. Pour ce faire, il suffit d''ajouter la classe `.fade` à l''élément&nbsp;`.modal`.'
  -
    type: code
    lang: html
    body: |
      <div class="modal fade" tabindex="-1">
        <div class="modal-dialog">...</div>
      </div>
  -
    type: note
    intent: warning
    body: 'Attention, contrairement aux exemples précédents, la classe doit être ajoutée sur l''élément `.modal` et non `.modal-dialog`.'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir ce [billet Bootstrap concernant les&nbsp;modals](https://getbootstrap.com/docs/5.0/components/modal/).'
is_hidden: false
title: Modal
template: page-article
color_scheme: auto
preview_color: '#7356ae'
fieldset: page-article
id: 4309a5ed-1427-400c-8acc-f764e07111bd
