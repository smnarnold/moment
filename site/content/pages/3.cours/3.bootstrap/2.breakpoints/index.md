body:
  -
    type: text
    body: 'Afin de bien comprendre la grille Bootstrap, il est impératif de connaitre ses&nbsp;breakpoints.'
  -
    type: text
    title: Breakpoints
    level: h2
    body: |
      Pour bien comprendre la grille Bootstrap et être en mesure de déboguer facilement une mise en page l'utilisant, il est important de bien comprendre ses différents&nbsp;_breakpoints_. Soit les points où Bootstrap permet de changer la disposition des éléments sur une&nbsp;page.
      
      Par défaut les breakpoints Bootstrap&nbsp;sont:
      
      | Breakpoint             | Abbréviation  | Dimension           |
      | ---------------------- |:-------------:| --------------------|
      | X-Small _(par défaut)_ | -             | moins de 576px      |
      | Small                  | `sm`          | 576px et&nbsp;+     |
      | Medium                 | `md`          | 768px et&nbsp;+     |
      | Large                  | `lg`          | 992px et&nbsp;+     |
      | Extra large            | `xl`          | 1200px et&nbsp;+    |
      | Extra extra large      | `xxl`         | 1400px et&nbsp;+    |
  -
    type: note
    intent: generic
    body: 'Afin de faciliter le débogage, il est <u>fortement</u> suggéré d''ajouter ces breakpoints à l''inspecteur de votre&nbsp;navigateur.'
  -
    type: text
    body: |
      Ces breakpoints ne font pas référence à des résolutions d'écrans d'appareils en particulier, mais plutôt à des groupes&nbsp;d'appareils. 
      
      Par exemple: 
      
      - `X-small` vise les appareils mobiles en mode&nbsp;portrait&thinsp;📱. 
      - `Small` les appareils mobiles en mode&nbsp;landscape. 
      - `Medium` les tablettes en mode&nbsp;portrait.
      - `Large` les tablettes en mode&nbsp;landscape.
      - `X-large` les&nbsp;laptops&thinsp;💻.
      - `XX-large` les moniteurs&nbsp;externes&thinsp;🖥.
  -
    type: note
    intent: good
    body: 'Afin d''en savoir, voir ce [billet de Bootstrap à propos de ses&nbsp;breakpoints](https://getbootstrap.com/docs/5.0/layout/breakpoints/).'
is_hidden: false
title: Breakpoints
template: page-article
color_scheme: auto
preview_color: '#7356ae'
fieldset: page-article
id: 47360d70-0dc6-4458-bf3e-be09189c6e79
