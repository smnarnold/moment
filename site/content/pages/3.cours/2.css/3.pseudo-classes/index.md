title: Pseudo-classes
template: page-article
color_scheme: auto
body:
  -
    type: text
    level: h2
    body: |
      Les pseudo-classes sont matière courantes sur le web, il est probable que vous en ayez déjà utilisé sans même le savoir. L'un des exemples les plus fréquents est&nbsp;`:hover`.
      
      Leur utilité principale est de permettre d'ajouter ou de redéfinir des styles à un élément lorsqu'il respecte une condition&nbsp;particulière.
      
      Par exemple, si un élément est survolé par la souris, sa condition est&nbsp;`:hover`
  -
    type: codepen
    id: xxbPWMv
    theme: light
    ratio: 34
    tabs: 'css,result'
  -
    type: note
    intent: generic
    body: 'Remarquez comment les deux points `:` servent à séparer le sélecteur de base de la&nbsp;pseudo-classe.'
  -
    type: text
    title: Liens
    level: h2
    body: |
      Les pseudo-classes sont particulièrement utiles pour gérer l'apparence des&nbsp;liens en fonction de leur&nbsp;état. 
      
      Par exemple, voici les états d'un lien sur&nbsp;[Wikipedia](https://fr.wikipedia.org/wiki/(274301)_Wikip%C3%A9dia) 
      
      - `:link` lorsque le lien n'a pas encore été&nbsp;visité ![](/assets/articles/pseudo-link-1578083525.png)
      - `:hover` lorsqu'il est&nbsp;survolé ![](/assets/articles/pseudo-hover.png)
      - `:active` lorsque le bouton de la souris est&nbsp;enfoncé ![](/assets/articles/pseudo-active.png)
      - `:visited` lorsqu'il a déjà été&nbsp;visité ![](/assets/articles/pseudo-visited.png)
      - `:focus` lorsque le lien reçoit le focus ![](/assets/articles/pseudo-focus.png)
  -
    type: note
    intent: exercice
    body: '[codepen.io/smnarnold/pen/BaNygVz](https://codepen.io/smnarnold/pen/BaNygVz)'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet article sur&nbsp;[MDN🦖](https://developer.mozilla.org/fr/docs/Learn/CSS/Styling_text/Mise_en_forme_des_liens)'
fieldset: page-article
id: ac069b9b-e847-45cb-ad11-cbdf0c9f7fb3
