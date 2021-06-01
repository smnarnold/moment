body:
  -
    type: text
    body: 'Par défaut, le choix de [polices natives compatibles sur tous les appareils est relativement limité](https://www.cssfontstack.com/). Heureusement, il est possible d''importer des polices externes afin de contourner cette&nbsp;limitation.'
  -
    type: text
    title: '@font-face'
    level: h2
    body: 'La règle `@font-face` permet d''importer une police sur une page en spécifiant où la police est située et sous quel nom y faire&nbsp;référence.'
  -
    type: code
    lang: css
    body: |
      @font-face {
        src: url("/polices/bebas.woff2") format("woff2");
        font-family: "Bebas";
      }
  -
    type: note
    intent: generic
    body: 'Placer ses règles `@font-face` en début de fichier CSS permet de s''assurer que la police soit importée avant qu''un style y fasse&nbsp;référence.'
  -
    type: text
    title: src
    level: h3
    body: 'La propriété `src` dans cet exemple indique au navigateur que la police se nomme `bebas.woff2` et se trouve dans un dossier intitulé&nbsp;`polices`.'
  -
    type: text
    title: format
    level: h3
    body: |
      `format` est un complément à `src`. Il permet au navigateur de connaître le format de la police et de savoir s'il est en mesure de le&nbsp;supporter.
      
      Voici une liste des extensions de polices les plus fréquentes et leur format&nbsp;associés:
      
      | Fichier      | Format          |
      | ------------ | --------------- |
      | bebas.woff2  | format('woff2') |
      | bebas.woff   | format('woff')  |
      | bebas.ttf    | format('truetype') |
      | bebas.otf    | format('opentype') |
      | bebas.eot    | format('eot')   |
      | bebas.svg    | format('svg')   |
  -
    type: note
    intent: tool
    body: 'Convertir une fonte dans un format spécifique avec&nbsp;[onlinefontconverter.com](https://onlinefontconverter.com/)'
  -
    type: text
    title: font-family
    level: h3
    body: |
      La propriété `font-family`, <u>à l'intérieur d'une règle @font-face</u>, permet de spécifier le nom attribué à la police importée. Ce nom sera ensuite utilisé afin de faire référence à la&nbsp;police. 
      
      Il est conseillé d'utiliser le nom de la police afin d'éviter toute confusion, comme dans l'exemple précédent, la police est simplement nommée _"Bebas"_ comme son fichier _(bebas.woff2)_. Néanmoins, ce nom pourrait théoriquement être n'importe&nbsp;quoi.
      
      Par exemple _"Super&nbsp;police"_:
  -
    type: code
    lang: html
    body: |
      @font-face {
        src: url("/polices/bebas.woff2") format("woff2");
        font-family: "Super Police";
      }
  -
    type: text
    title: Utilisation
    level: h3
    body: |
      Une fois importée, la police peut être utilisée sur différents&nbsp;éléments.
      
      Par exemple:
  -
    type: code
    lang: css
    body: |
      @font-face {
        src: url("/polices/bebas.woff2") format("woff2");
        font-family: "Bebas";
      }
      
      ...
      
      .title {
        font-family: "Bebas";
      }
  -
    type: text
    body: 'Dans cet exemple, les éléments avec la classe `.title` utilisent la police&nbsp;_Bebas_.'
  -
    type: note
    intent: generic
    body: '`font-family` est utilisée dans `@font-face` pour attribuer un nom à la police. Dans `.title`, `font-family` est utilisé afin de spécifier la police à&nbsp;utiliser.'
  -
    type: text
    body: |
      Puisque les navigateurs ne supportent pas tous les mêmes formats de police, il est courant que plusieurs sources soient fournies. Dans ce cas, le navigateur utilisera le premier format de police compatible&nbsp;rencontré.
      
      Par exemple:
    title: Substitution
    level: h3
  -
    type: code
    lang: css
    body: |
      @font-face {
        font-family: "Ma police";
        src: url("/polices/bebas.woff2") format("woff2"),
             url("/polices/bebas.otf") format("opentype");
      }
  -
    type: text
    body: |
      Si une police contient plusieurs fichiers, chacun de ces fichiers correspond à une variation de la police. Par exemple, normal, italique, gras _(bold)_, etc. Dans ce cas, il est nécessaire de définir une règle `@font-face` pour chacun des&nbsp;fichiers. 
      
      Pour chacune de ces règles, la propriété `font-family` doit être la même puisqu'il s'agit de la même police. Cependant, une propriété supplémentaire, telle que: `font-style` ou `font-weight` doit être ajoutée afin d'indiquer la variation en&nbsp;question. Si aucune propriété supplémentaire n'est spécifiée, le navigateur conclura qu'il s'agit du style par défaut _(normal)_, de la&nbsp;police.
      
      Par exemple:
    title: Variations
    level: h3
  -
    type: code
    lang: css
    body: |
      @font-face {
        src: url("/polices/bebas-400.woff2") format("woff2");
        font-family: "Bebas";
      }
      
      @font-face {
        src: url("/polices/bebas-700.woff2") format("woff2");
        font-family: "Bebas";
        font-weight: bold; /* 👈 Variation spécifiée */
      }
  -
    type: note
    intent: warning
    body: 'Une police importée via @font-face devrait être fonctionnelle même si elle n''est pas installée sur votre ordinateur.'
  -
    type: note
    intent: tool
    body: '[DaFont, une collection de polices&nbsp;web](https://www.dafont.com/fr/).'
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article MDN à propos de&nbsp;@font-face](https://developer.mozilla.org/fr/docs/Web/CSS/@font-face).'
  -
    type: text
    title: 'Google fonts'
    level: h2
    body: |
      Depuis 2010, le site [Google fonts](https://fonts.google.com/) offre plusieurs centaines de polices _(+ de 850)_ gratuitement, hébergées directement en ligne et prêtes à être&nbsp;utilisées.
      
      Lorsqu'une police intéressante est trouvée, il suffit de cliquer sur le lien bleu _"+ Select this style"_ afin de l'ajouter à la liste des polices qui seront importées. Plusieurs fontes peuvent être ajoutées dans une même liste. Il n'est pas nécessaire d'importer chacune d'entre elles&nbsp;séparément.
      
      Lorsque toutes les polices désirées sont sélectionnées, le bouton <svg _ngcontent-drj-c8="" height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-drj-c8="" d="M0,0h24v24H0V0z" fill="none"></path><g fill="var(--secondary)"><path d="M3,11h8V3H3V11z"></path><path d="M13,3v8h8V3H13z"></path><path d="M3,21h8v-8H3V21z"></path><polygon points="18,13 16,13 16,16 13,16 13,18 16,18 16,21 18,21 18,18 21,18 21,16 18,16"></polygon></g></svg> en haut à droite permet d'ouvrir le panneau&nbsp;d'importation.
  -
    type: text
    title: 'Importation standard'
    level: h3
    body: |
      La méthode standard est la méthode la plus performante et celle recommandée. Elle consiste à ajouter une balise `<link>` dans le `<head>` d'un fichier&nbsp;HTML.
      
      Par exemple:
  -
    type: code
    lang: html
    body: |
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="/styles/main.css">
      </head>
  -
    type: note
    intent: warning
    body: 'Les balises `<link>` de la police doivent apparaître <u>avant</u> celle de votre feuille de styles. Ainsi la police sera déjà importée quand vous y ferez&nbsp;référence.'
  -
    type: text
    body: |
      La méthode @import consiste à ajouter une balise `<style>` dans le `<head>` du fichier&nbsp;HTML. Cependant, cette méthode est moins performante que la [méthode&nbsp;standard](#importation-standard).
      
      Par exemple:
    title: 'Importation @import'
    level: h3
  -
    type: code
    lang: html
    body: |
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
      </style>
  -
    type: text
    body: |
      Et voilà, les fontes sont maintenant prêtes à être utilisées comme toute police normale simplement en utilisant leurs noms spécifiés dans le bas du panneau&nbsp;d'importation.
      
      Par exemple:
  -
    type: code
    lang: html
    body: |
      .title {
        font-family: 'Roboto', sans-serif;
      }
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article de Google à propos de Google&nbsp;fonts](https://developers.google.com/fonts/docs/getting_started).'
is_hidden: false
title: 'Fonte externe'
subtitle: '@font-face, google fonts'
template: page-article
color_scheme: auto
preview_color: '#f4f672'
preview: /assets/previews/fonte-externe.png
fieldset: page-article
id: 4dfbe81a-b10a-47b7-8cf2-6ba7e3edf7b9
