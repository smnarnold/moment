title: 'Assurance Qualité'
template: page-article
color_scheme: auto
body:
  -
    type: text
    body: 'L''assurance qualité, souvent abrégé QA en anglais, permet de valider qu''un site correspond aux exigences attendues et de qu''il ne contient pas de bogues&thinsp;🐛. À l''aide de tests manuels ou automatisés, différents aspects du site sont mis à l''épreuve. Le but est d''identifier les erreurs, oublies ou mauvaises interprétations des&nbsp;requis.'
  -
    type: text
    title: 'Pourquoi est-ce important?'
    level: h2
    body: |
      Le plus tôt un bogue est identifié, le plus tôt il peut être réglé. Lorsqu'un site est bien testé, il est  fiable, sécuritaire et performant. Ces qualités évitent les mauvaises surprises, permettent de réduire les coûts d'entretiens et contribuent à augmenter le taux de satisfaction/confiance des utilisateurs envers le&nbsp;site.
      
      Par exemple, une assurance qualité adéquate permet d'éviter ce type de&nbsp;situations:
  -
    type: image
    image: /assets/articles/cybertruck-fail.webp
  -
    type: text
    title: 'Types de tests'
    level: h2
  -
    type: text
    title: 'Test visuel'
    level: h3
    body: |
      Les designers font attention au moindre petit détail. Il est donc normal qu'ils soient exigeants lorsque vient le moment de traduire leurs maquettes en page web. Malheureusement, étant humain, il est courant que certains éléments ne soient pas parfaits du premier&nbsp;coup: 
      
      - Est-ce la bonne&nbsp;fonte? 
      - Est-ce que ce bouton est trop&nbsp;petit? 
      - Est-ce vraiment la bonne&nbsp;couleur? 
      
      La liste peut s'allonger rapidement, surtout après un certain temps à travailler sur un projet où certains éléments deviennent presque imperceptibles tellement nous sommes habitués de les voir, d'où l'importance d'avoir un regard frais d'une personne externe afin de comparer le résultat produit aux maquettes originales afin de s'assurer que la vision du designer est&nbsp;respectée.
  -
    type: text
    title: 'Test de bout en bout'
    level: h3
    body: |
      Du point de vue d'un utilisateur, si j'utilise un site de façon cohérente afin d'accéder à un résultat spécifique, suis-je en mesure de le&nbsp;faire? 
      
      Par exemple, pour tester si un système de commandes en ligne fonctionne, si j'ajoute un élément dans le panier, que j'accède au panier, que je confirme mon achat, que j'entre mes informations de livraison et mes informations bancaires, est-ce que la transaction est traitée et si oui, est-ce qu'une page de confirmation me résumant mon achat m'est&nbsp;affichée?
  -
    type: text
    title: 'Monkey testing'
    level: h3
    body: |
      Le _"Monkey testing"_ consiste à utiliser un site web comme un singe le ferait. C'est à dire sans compréhension particulière du site, en agissant de façon parfois aléatoire et&nbsp;inattendue. 
      
      Par exemple, que ce passe-t-il si je quitte à la troisième page d'un formulaire en cinq étapes? Que ce passe-t-il si j'appuie trois fois rapidement sur le bouton soumettre d'un formulaire d'inscription? Est-ce que trois comptes seront créés? Si je redimensionne ma page après la fin de son chargement, est-ce que son affichage brisera? Ainsi de&nbsp;suite.
  -
    type: text
    title: 'Test de compatibilité'
    level: h3
    body: |
      Ces tests garantissent que le site web fonctionne tel que spécifié sur différent type d'appareils, systèmes d'exploitation et navigateurs. Généralement, la personne en charge de ces tests a accès à plusieurs appareils en fonctions de la liste établie d'appareils supportés par le&nbsp;projet. 
      
      Il est aussi possible que cette personne est recours à des logiciels permettant de démarrer des machines virtuelles, comme: [Browserstack](https://www.browserstack.com/) ou encore [Cross Browser Testing](https://crossbrowsertesting.com/) afin de tester une liste d'appareils très&nbsp;large.
      
      Par exemple: Sur un iPad mini de 3e génération, si l'utilisateur utilise Safari, est-ce que le comportement du site correspond aux&nbsp;attentes?
  -
    type: text
    title: 'Test de performance'
    level: h3
    body: 'Un site peut fonctionner, mais avoir des performances décevantes. Il est donc important d''établir des exigences de base et de s''assurer que le résultat est conforme à celles-ci. Par exemple, une exigence pourrait-être qu''un site charge en moins de deux secondes ou encore qu''il obtienne un pointage de 90 ou plus sur un outil permettant de l''évaluer, tel que:&nbsp;[Lighthouse](https://developers.google.com/web/tools/lighthouse).'
  -
    type: text
    title: 'Dans un système de gestion de projet'
    level: h2
    body: |
      Dans un système de gestion de projet, par exemple [Trello](trello), l'assurance qualité se traduit généralement par l'ajout de&nbsp;colonnes. 
      
      Par exemple, dans un projet Kanban classique _("To do", "In progress", "Done")_ lorsqu'un développeur termine une tâche, il peut la placer à _"Done"_. Indiquant ainsi qu'il a terminé son développement. Cependant, comment savoir si le résultat est visible en ligne ou uniquement sur son poste? L'ajout d'une colonne _"Ready to QA"_ permet d'indiquer que non seulement que la tâche a été complétée, mais qu'elle est aussi disponible en&nbsp;ligne.
      
      Lorsqu'un billet se retrouve dans cette colonne, il devient possible pour une deuxième personne, n'ayant pas été impliqué dans son développement, de valider sa conformité. Il peut donc changer le billet dans la colonne _"QA in progress"_ afin de signaler qu'il entame sa&nbsp;validation. 
      
      S'il respecte les exigences, le billet peut finalement être glissé dans une colonne intitulée _"Production ready"_ ou un terme équivalent. Si au contraire la personne remarque que certains éléments ont étés oubliés ou ne fonctionnent pas comme souhaité, le billet est alors remis au sommet de la colonne _"To do"_ avec des commentaires détaillant le ou les problèmes rencontrés. Pour éviter toute confusion, le billet est généralement bonifié d'un libellé, par exemple <span style="display: inline-block; background: #f00; color: #fff; padding: 0 0.5em;">Bug</span> indiquant la raison de son retour soudain dans la colonne _"To&nbsp;do"_. 
      
      Il est aussi possible de créer un nouveau billet pour expliquer spécifiquement un bogue. Cette approche est particulièrement utile si plus d'un bogue est découvert en lien avec un billet. Ainsi, il est plus facile de suivre la progression de la résolution de chaque bogue et éviter de confondre certaines&nbsp;informations.
  -
    type: text
    title: 'Rédaction d''un bogue'
    level: h2
    body: |
      Lorsqu'un bogue est rencontré et que nous ne somme pas la personne en charge de le corriger il est impératif d'être le plus précis possible dans sa&nbsp;description. 
      
      Par exemple, si un problème est rencontré à La Presse et que son descriptif se limite&nbsp;à:
      
      _"La page d'article n'affiche pas comme il&nbsp;faut."_
      
      Beaucoup de temps risque d'être investi une deuxième fois à cerner le&nbsp;problème.
      
      **Où le problème est-il&nbsp;visible?**
      
      - L'application mobile, La Presse+, le site&nbsp;web?
      - PC ou Mac?
      - Sur tous les&nbsp;navigateurs?
      - Dans une résolution d'écran en&nbsp;particulier?
      - Etc.
      
      **Qu'est-ce qui pose&nbsp;problème?**
      
      - La mise en page est&nbsp;brisée?
      - Une faute d'orthographe est&nbsp;présente?
      - Une image est hors propos ou mal&nbsp;recadrée?
      - La mauvaise personne est&nbsp;créditée?
      - Etc.
  -
    type: text
    title: 'Exemple de rédaction'
    level: h3
    body: |
      **Environnement:** Site web
      **Sévérité:** Moyenne
      **Url:** [https://www.lapresse.ca/mon-article](https://www.lapresse.ca/mon-article)
      **Système d'exploitation:** MAC
      **Navigateur:** Safari
      **Résolution:** 1200 x 700px
      **Description:** Le pied de page est tronqué.
      **Étapes de reproduction:**
      
      1. Ouvrir la page en 992px de large ou&nbsp;moins.
      2. Descendre en bas de la page complètement.
      3. Agrandir la page pour atteindre 1200px de large ou&nbsp;plus.
      4. Une partie du pied de page devient&nbsp;inaccessible.
      
      Et idéalement une capture d'écran montrant clairement le&nbsp;problème.
  -
    type: note
    intent: exercice
    body: |
      Télécharger les [maquettes du&nbsp;projet](https://ex.smnarnold.com/qa/insoapropriate/maquettes.zip)
      Créez-vous une copie du [tableau Trello](https://trello.com/b/CdivA2RL/insoapropriate) du projet [Menu > ...More > Copy&nbsp;board]
      Comparez les requis [au site](http://ex.smnarnold.com/qa/insoapropriate/) et entrez les bugs&nbsp;trouvés
fieldset: page-article
id: 8355fc25-385e-41e1-8d1c-cc6a9b7b03db
