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
      
      Théoriquement, nous pouvons donner n'importe quel nom à nos classes sans affecter le fonctionnement de notre&nbsp;code. 
      
      Cependant, imaginez si vous deviez embarquer sur un projet. _(Écrit par quelqu'un d'autre ou par vous-même il y a longtemps.)_ Vous fait un survole du CSS et vous voyez ces classes `.truc`, `.patente`,&nbsp;`.chose`...
  -
    type: image
    image: /assets/articles/what-happened.gif
  -
    type: text
    body: |
      Bonne chance pour comprendre! 
      
      Si à l'opposé ces classes étaient nommées: `.grille`, `.carte` et `.titre` leur rôle et relation, serait soudainement plus évident. D'où l'importance de donner des noms représentatifs de&nbsp;qualité.
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
      Un code bien formaté est un code facile à lire et surtout facile à&nbsp;déboguer!
      
      Voici quelques règles de base.
  -
    type: text
    title: Accolades
    level: h3
    body: |
      Un espace entre le sélecteur et l'accolade ouvrante devrait toujours être présent et elle devrait être suivi d'un retour de chariot _(Enter&nbsp;↵)_ afin de simplifier la lisibilité du&nbsp;code. 
      
      Qu'en t'a elle, l'accolade fermante devrait être seule sur la ligne suivant la dernière propriété et sont indentation devrait correspondre à celle de son sélecteur. Une ligne vide devrait ensuite la suivre afin de délimiter proprement chaque&nbsp;bloc.
      
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
      Lorsque vous écrivez vos propriétés elles devraient normalement êtres indentés à l'intérieurs de vos accolades
      
      👌
  -
    type: code
    lang: css
    body: |
      sélecteur {
        propriété: valeur;
      }
  -
    type: text
    body: 🚫
  -
    type: code
    lang: css
    body: |
      sélecteur {
      propriété: valeur;
      }
  -
    type: note
    intent: good
    body: 'Actuellement, deux espaces est l''indentation la plus&nbsp;répandue.'
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
    intent: tool
    body: '[codebeautify.org/css-beautify-minify](https://codebeautify.org/css-beautify-minify) ainsi que plusieurs outils en ligne peuvent corriger le formatage d''un fichier pour&nbsp;vous.'
fieldset: page-article
id: 8224978b-3efa-4386-a85e-9b7fdff4605d
