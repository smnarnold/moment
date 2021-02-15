body:
  -
    type: text
    body: 'Bootstrap est le cadriciel _(framework)_ de mise en page le plus populaire au monde. Il permet de simplifier et d''accélérer la réalisation de sites web&nbsp;responsives.'
  -
    type: text
    title: Histoire
    level: h2
    body: |
      Ce projet doit son origine à [Twitter&thinsp;🐦](https://twitter.com/) qui, dans le but de simplifier la réalisation et l'évolution de ses différents sites, a décidé de créer une base commune de mise en page entre celles-ci. Le résultat fut Bootstrap qui fut partagé gratuitement avec le reste de la communauté web et qui rencontra immédiatement un immense&nbsp;succès!
      
      Si vous faites des recherches sur le web, vous trouverez plusieurs informations à propos de Bootstrap. Cependant, faites attention de bien valider la version dont l'article traite. Au moment d'écrire ces lignes, la version 5 est la plus récente et est celle qui sera enseignée en classe.
  -
    type: text
    title: Installation
    level: h2
    body: |
      Comme pour tout cadriciel _(framework)_, afin d'avoir accès à ses fonctionnalités, il est nécessaire de l'inclure dans son&nbsp;projet. Dans le cas de Bootstrap il s'agit d'un cadriciel axé sur la mise en page, il est donc impératif d'importer sa feuille de style afin de bénéficier de ses fonctionnalités de base. Cependant, certains modules bonifiés requièrent aussi du JavaScript. L'importation de fichiers JS est donc optionnelle, mais suggérée afin de permettre à ces modules de fonctionner&nbsp;adéquatement.
      
      Pour importer Bootstrap, il est possible:
      
      - De [télécharger Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/) à partir du site web officiel ou encore via&nbsp;[GitHub](https://github.com/twbs/bootstrap). Afin d'avoir une copie locale des fichiers. Cette approche offre l'avantage d'avoir accès aux fichiers sources et donc de pouvoir modifier certains paramètres de base de Bootstrap si&nbsp;désiré.
      - D'utiliser un service de CDN, permettant simplement de [pointer vers une URL](https://getbootstrap.com/docs/5.0/getting-started/introduction/#css). Cette approche est probablement la plus simple et plus rapide et offre d'excellentes&nbsp;performances.
  -
    type: text
    title: Particularités
    level: h2
    body: |
      Notez qu'afin de mieux gérer les dimensions en CSS, Bootstrap définit le `box-sizing` de base à `border-box` ce qui s'appliquera sur l'ensemble de votre&nbsp;projet.
      
      Il inclut aussi un Reboot, une feuille de style permettant de standardiser l'aspect par défaut des balises, afin de s'assurer que le résultat obtenu soit le même sur tous les&nbsp;navigateurs. Par exemple, une balise `<h1>` pourrait avoir normalement une taille de 32px sur Chrome et de 30px sur Firefox. Afin de standardiser cette taille, le fichier reboot définirait une taille de base pour tous les&nbsp;navigateurs.
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir la [page d''introduction officielle de&nbsp;Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction).'
is_hidden: false
title: Introduction
template: page-article
color_scheme: auto
preview_color: '#7356ae'
fieldset: page-article
id: 2c14f497-77a8-435e-a69a-5496074e76ad
