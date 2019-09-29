title: Box-sizing
template: page-article
color_scheme: auto
body:
  -
    type: text
    title: 'Content-box vs Border-box'
    level: h2
    body: |
      La propriété box-sizing définit si la dimension réelle d'un élément doit-être calculée de façon additive ou&nbsp;soustractive.
      
      Par exemple, j'ai trois éléments dotés d'une largeur de 33.33% et d'un léger padding. Si nous sommes en `box-sizing: content-box;`, comme à gauche, ses valeurs s'additionnent, tandis qu'à droite, en `box-sizing: border-box;`, elles se soustraient.
  -
    type: codepen
    id: PoYBGab
    theme: light
    ratio: 34
  -
    type: text
    title: Content-box
    level: h3
    body: |
      **Valeur par défaut**. 
      
      Si on définit une largeur à un élément comme si-dessus ⬆️, la largeur de la bordure et du padding sera alors ajoutée pour constituer la largeur réelle de l'élément. Dans ce cas, puisqu'il y a un padding de 4% sur l'élément, sa largeur réelle est de 4% + 33.33% + 4% = 41.33%.
  -
    type: text
    title: Border-box
    level: h3
    body: 'Indique au navigateur d''inclure la bordure et le padding dans le calcul de la dimension réel de l''élément. Toujours dans notre exemple, les éléments à droite sont compressés pour absorber la valeur padding. Leur largeur réelle reste donc 33.33% malgré la présence du padding de 4%.'
  -
    type: note
    intent: good
    body: |
      Il est fréquent que des développeurs choisissent d'appliquer cette propriété à tous les éléments d'une page via le code suivant: 
      
      `* { box-sizing: border-box; }` 
      
      Ceci leur permet de simplifier grandement la réalisation de leur mise en page.
fieldset: page-article
id: b92b383a-7fad-44c0-8e99-7638c75aeb31
