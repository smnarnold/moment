title: 'Nommage et formatage du CSS'
template: page-article
color_scheme: auto
body:
  -
    type: quote
    body: 'There are only two hard things in Computer Science: cache&nbsp;invalidation and naming things'
    firstname: Phil
    lastname: Karlton
    title: 'Développeur chez Netscape et solide moustachu'
    source: 'http://www.karlton.org/2017/12/naming-things-hard/'
    picture: /assets/persons/karlton.jpg
  -
    type: text
    body: |
      À priori, nommer des éléments peut sembler facile. Par exemple, voici trois noms de classes: `.truc`, `.patente` et `.chose`. Pourquoi c'est noms? 🤷‍♂️
      
      Théoriquement, nous pouvons donner n'importe quel nom à nos classes sans affecter le fonctionnement de notre code. 
      
      Cependant, imaginez si vous deviez embarquer sur un projet. _(Écrit par quelqu'un d'autre ou par vous-même il y a lontemps.)_ Vous fait un surevole du CSS et vous voyez ces classes `.truc`, `.patente`, `.chose`...
  -
    type: image
    image: /assets/articles/what-happened.gif
  -
    type: text
    body: |
      Bonne chance pour comprendre! 
      
      Si à l'opposé ces classes étaient nommées: `.grille`, `.carte` et `.titre` leur rôle et relation, serait soudaiement plus évident. D'où l'importance de donner des noms représentatifs de qualité.
  -
    type: text
    title: Cohérence
    level: h3
    body: |
      Il existe plusieurs façon de nommer ses classes.
      
      Par exemple:
      
      - .MaClasse
      - .maClasse
      - .ma-classe
      - .ma_classe
      - etc
      
      Le tout devient rapidement mélangeant si l'on se met à jongler avec ces différentes possibilités. Il est donc fortement encouragé de s'en tenir à une seule approche.
  -
    type: note
    intent: good
    body: |
      Au moment d'écrire ces lignes, le modèle le plus répandu est celui en miniature où les espaces sont remplacés par des tirets. 
      ex: `.ma-classe { ... }`
  -
    type: text
    title: Formatage
    level: h2
    body: |
      Un code bien formaté est un code facile à lire et surtout facile à&nbsp;débuguer!
      
      Voici quelques règles de base.
  -
    type: text
    title: Accolades
    level: h3
    body: |
      Un espace entre le sélecteur et l'accolade ouvrante devrait toujours être présent et elle devrait être suivi d'un retour de chariot _(Enter&nbsp;↵)_ afin de simplifier la lisibilité du code. 
      
      Qu'en t'a elle, l'accolade fermante devrait être seule sur la ligne suivant la dernière propriété et sont indentation devrait correspondre à celle de son selecteur. Une ligne vide devrait ensuite la suivre afin de délimiter proprement chaque block.
      
      👌
  -
    type: code
    lang: css
    body: |
      .carte {
        display: block;
        width: 100%;
      }
  -
    type: text
    body: 🚫
  -
    type: code
    lang: html
    body: |
      .carte{display: block;
        width: 100%;}
  -
    type: text
    title: Espaces
    level: h3
    body: |
      Lorsque vous écrivez vos propriétés elles devraient normallement êtres indentés à l'intérieurs de vos accolades
      
      👌
  -
    type: code
    lang: css
    body: |
      selecteur {
        propriété: valeur;
      }
  -
    type: text
    body: 🚫
  -
    type: code
    lang: css
    body: |
      selecteur {
      propriété: valeur;
      }
  -
    type: note
    intent: good
    body: 'Acutellement, deux espaces est l''indentation la plus répandue.'
  -
    type: text
    body: |
      L'important est de garder une indentation et qu'elle soit cohérente d'une ligne à l'autre.
      
      👌
  -
    type: code
    lang: css
    body: |
      .carte {
        display: block;
        width: 100%;
        padding: 20px;
      }
  -
    type: text
    body: 🚫
  -
    type: code
    lang: css
    body: |
      .carte {
        display: block;
      width: 100%;
          padding: 20px;
      }
  -
    type: note
    intent: good
    body: 'Plusieurs outils en ligne peuvent corriger le formatage d''un fichier pour vous. Par exemple: [codebeautify.org/css-beautify-minify](https://codebeautify.org/css-beautify-minify)'
fieldset: page-article
id: 8224978b-3efa-4386-a85e-9b7fdff4605d
