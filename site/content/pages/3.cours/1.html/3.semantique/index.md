body:
  -
    type: text
    body: |
      Lors de la création d'une page, plusieurs balises HTML sont utilisées. Certaines de ces balises ont une valeur sémantique, tandis que d'autres non. On dit d'une balise qu'elle a une valeur sémantique lorsqu'elle permet de mieux comprendre son contenu ou encore son&nbsp;contexte.
      
      Par exemple, les balises `<div>` et `<span>` sont des balises non sémantiques. En les apercevant, il est impossible de deviner la nature de leur contenu ou encore leur rôle dans la page. Cependant, si une balise `<header>` est utilisée à la place d'une balise `<div>`, il devient soudainement plus évident que l'intention derrière cette balise est de regrouper les éléments constituant un&nbsp;entête.
  -
    type: text
    title: 'Pourquoi se soucier de la sémantique?'
    level: h2
  -
    type: text
    title: 'Fonctionnalités associées à la sémantique'
    level: h3
    body: |
      Une bonne sémantique permet d'améliorer l'expérience de ses usagers de plusieurs façons. 
      
      Par exemple, certaines personnes ont recours à un assistant vocal <em>([Siri](https://fr.wikipedia.org/wiki/Siri_(logiciel)), [Alexa](https://fr.wikipedia.org/wiki/Amazon_Alexa), [L'assistant Google](https://fr.wikipedia.org/wiki/Assistant_Google), etc.)</em> leur permettant de se faire narrer le contenu des pages sur lesquelles ils naviguent alors qu'ils s'adonnent à d'autres tâches <em>(cuisine, conduite, ménage, etc.)</em>. D'autres, atteints d'une déficience visuelle, utilisent pour leur part un lecteur d'écran <em>([Jaws](https://fr.wikipedia.org/wiki/JAWS_(lecteur_d%27%C3%A9cran)), [VoiceOver](https://fr.wikipedia.org/wiki/VoiceOver), [eSpeak](https://fr.wikipedia.org/wiki/ESpeak), etc.)</em> afin de leur permettre de naviguer de façon auditive le web&nbsp;🔊.
      
      Imaginons un instant que nous sommes l'une de ces personnes et que nous consultons tous les matins [LaPresse.ca](https://www.lapresse.ca/)&thinsp;📰. Heureusement pour nous, les assistants vocaux et lecteurs d'écran reconnaissent les balises `<header>` et nous offrent de les sauter. Cette option serait impossible si une balise `<div>` était utilisée. Il faudrait donc écouter en entier la narration de l'entête de La Presse à chaque fois que nous consultons un article&thinsp;😩.
      
      Cet exemple n'est que l'une des nombreuses fonctionnalités avantageuses permises par l'usage d'une sémantique&nbsp;adéquate.
  -
    type: text
    title: 'Sémantique et moteurs de recherche'
    level: h3
    body: |
      Une sémantique adéquate permet aux différents moteurs de recherche <em>([Google](https://www.google.ca/), [Bing](https://www.bing.com/?cc=ca), [Yahoo](https://ca.yahoo.com/), etc.)</em> de mieux comprendre et d'analyser le contenu d'une page afin de mieux&nbsp;l'indexer.
      
      Par exemple, il est possible de modifier l'apparence d'un texte dans un `<div>` avec du CSS afin de l'afficher en plus gros que le texte régulier. Bien que cette approche permette aux lecteurs de comprendre qu'il s'agit d'un titre, il n'en va pas de même pour les moteurs de recherche qui ne seront pas à même de faire cette nuance. Parcontre, si une balise `<h1>` est utilisée à la place d'une balise `<div>`, il devient soudainement plus évident pour ces moteurs que cet extrait de texte devrait être utilisé pour présenter cette page dans un résultat de&nbsp;recherche.
  -
    type: text
    title: 'Sémantique et le développement'
    level: h3
    body: |
      Une bonne sémantique permet de simplifier le développement pour soi et pour les individus qui pourraient être amenés à interagir avec notre code. Il est plus simple de repérer des ouverture et fermeture de balises lorsquelles correspondent à des éléments tangibles dans une&nbsp;page.
      
      Par exemple, si une dizaine de balises se ferment une à la suite de l'autre, il peut-être  ardu au premier regard de déterminer laquelle correspond à la fin de l'entête d'un site si toutes ces balises sont des `</div>`. Cependant, si dans le lot une fermeture de balise `</header>` est utilisée, il devient soudainement évident où l'entête se&nbsp;termine.
      
      À gauche&thinsp;⬅️, une page sans balises sémantiques vs à droite&thinsp;➡️, une page avec des balises&nbsp;sémantiques.
  -
    type: image
    image: /assets/articles/semantic.png
  -
    type: text
    title: Header
    level: h2
    body: |
      La balise `<header>` représente un entête dans son&nbsp;contexte. 
      
      Par exemple, si elle n'est pas utilisée à l'intérieur d'une autre balise ayant une valeur sémantique, elle représente l'entête du site. Elle pourrait contenir entre autres un logo, un titre, une barre de recherche,&nbsp;etc.
  -
    type: code
    lang: html
    body: |
      <header>
        <img src="logo-du-site.png" alt="Logo">
        <h1>Nom du site</h1>
        ...
      </header>
  -
    type: text
    body: |
      Elle pourrait aussi être utilisée pour représenter l'entête d'un article incluant le nom de l'article, son auteur, sa date de publication,&nbsp;etc.
      
      Bref, plusieurs possibilités existent. Il est donc possible d'avoir plusieurs balises `<header>` sur une même&nbsp;page. Puisqu'il s'agit d'une balise de type bloc, elle se comporte exactement comme une balise&nbsp;`<div>`.
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article sur MDN à propos de la balise&nbsp;header](https://developer.mozilla.org/fr/docs/Web/HTML/Element/header).'
  -
    type: text
    title: Footer
    level: h2
    body: |
      La balise `<footer>` représente le pied de page de son&nbsp;contexte.
      
      Par exemple, si elle n'est pas utilisée à l'intérieur d'une autre balise aillant une valeur sémantique, elle représente le pied de page du site. Elle pourrait contenir entre autre les informations de contact, la mention de droits d'auteur, le plan du site,&nbsp;etc.
  -
    type: code
    lang: html
    body: |
      <footer>
        <div class="contact">infos@site.com</div>
        <span class="copy">©2021 Nom du site</span>
        ...
      </footer>
  -
    type: text
    body: |
      Elle pourrait aussi être utilisée pour représenter le pied de page d'un article incluant des liens de partage sur les réseaux sociaux, un rappel de l'auteur,&nbsp;etc.
      
      Bref, plusieurs possibilités existent. Il est donc possible d'avoir plusieurs balises `<footer>` sur une même page. Puisqu'il s'agit d'une balise de type bloc, elle se comporte exactement comme une balise&nbsp;`<div>`.
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article sur MDN à propos de la balise&nbsp;footer](https://developer.mozilla.org/fr/docs/Web/HTML/Element/footer).'
  -
    type: text
    title: Nav
    level: h2
    body: |
      Comme son nom l'indique, la balise `<nav>` représente un élément de&nbsp;navigation. Elle contient donc un groupe de liens permettant de naviguer sur le site ou encore sur la page&nbsp;actuelle.
      
      - Un menu
      - Une table des&nbsp;matières
      - Un fil d'Ariane
      - Etc.
  -
    type: code
    lang: html
    body: |
      <nav>
        <ul>
          <li><a href="./accueil.html">Accueil</a></li>
          <li><a href="./produits.html">Produits</a></li>
          <li><a href="./contact.html">Contact</a></li>
        </ul>
      </nav>
  -
    type: text
    body: 'Il s''agit aussi d''une balise de type bloc, elle se comporte donc exactement comme une balise&nbsp;`<div>`.'
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article sur MDN à propos de la balise&nbsp;nav](https://developer.mozilla.org/fr/docs/Web/HTML/Element/nav).'
  -
    type: text
    title: Main
    level: h2
    body: |
      La balise `<main>` représente le contenu principal d'une page. Elle ne doit pas contenir les éléments qui se répètent d'une page à l'autre, par exemple l'entête et le pied de page d'un&nbsp;site. 
      
      Il est <u>impossible</u> d'avoir plus d'une balise `<main>` sur une même page, puisqu'il ne peut y avoir qu'un seul contenu&nbsp;principal.
  -
    type: code
    lang: html
    body: |
      <header>
        <h1>Nom du site</h1>
        ...
      </header>
      
      <main>
        <h2>Sujet principal du site</h2>
        <img src="sujet.png" alt="Sujet">
        ...
      </main>
      
      <footer>
        <div class="contact">infos@site.com</div>
        ...
      </footer>
  -
    type: text
    body: 'Puisqu''il s''agit d''une balise de type bloc, elle se comporte exactement comme une balise&nbsp;`<div>`.'
  -
    type: note
    intent: warning
    body: 'la balise `<main>` ne devrait pas être enfant des balises sémantique `<article>`, `<aside>`, `<footer>`, `<header>` ou&nbsp;`<nav>`.'
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article sur MDN à propos de la balise&nbsp;main](https://developer.mozilla.org/fr/docs/Web/HTML/Element/main).'
  -
    type: text
    title: Section
    level: h2
    body: |
      La balise `<section>` représente un groupe d'éléments étant liés par un&nbsp;thème.
      
      Par exemple, sur la page d'accueil d'un journal, plusieurs aperçus d'articles sont disponibles. Ces articles sont souvent regroupés en thèmes <em>(actualités, international, sports,&nbsp;etc.)</em>. Puisqu'il s'agit d'une balise de type bloc, elle se comporte exactement comme une balise&nbsp;`<div>`.
      
      Une structure comme celle-ci&thinsp;👇 serait donc&nbsp;possible.
  -
    type: code
    lang: html
    body: |
      <section>
        <h2>Actualités</h2>
        <a href="page-1.html">Québec se rectifie</a>
        <a href="page-2.html">Deux députés sanctionnés</a>
        ...
      </section>
      
      <section>
        <h2>Sports</h2>
        <a href="page-3.html">Le Canadien l'emporte</a>
        <a href="page-4.html">Le onze montréalais triomphe</a>
        ...
      </section>
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article sur MDN à propos de la balise&nbsp;section](https://developer.mozilla.org/fr/docs/Web/HTML/Element/section).'
  -
    type: text
    title: Article
    level: h2
    body: |
      La balise `<article>` représente, comme son nom l'indique, un article ou encore un billet de blog. Plus précisément, une entité qui pourrait consommée seule, sans le contexte du reste du site et néanmoins faire du&nbsp;sens.
      
      Par exemple, un billet sur les réseaux sociaux pourrait être un `<article>`, puisqu'il n'est pas nécessaire de lire les autres billets dans un fil d'actualité afin de le&nbsp;comprendre.
      
      Une structure comme celle-ci 👇 serait donc possible.
  -
    type: code
    lang: html
    body: |
      <article>
        <header>
          <h2>Le Canadien l'emporte</h2>
        </header>
        <p>Le CH a remporté une victoire in extrémis hier...</p>
      </article>
  -
    type: text
    body: 'Comme les précédentes balises, il s''agit d''une balise de type bloc, elle se comporte donc exactement comme une balise&nbsp;`<div>`.'
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article sur MDN à propos de la balise&nbsp;article](https://developer.mozilla.org/fr/docs/Web/HTML/Element/article).'
  -
    type: text
    title: Aside
    level: h2
    body: |
      La balise `<aside>` représente un groupe d'éléments ayant un lien indirect avec le sujet principal de la&nbsp;page.
      
      - Des aperçus d'articles&nbsp;similaires
      - Un bloc de commentaires
      - Des informations supplémentaires
      - Etc.
  -
    type: code
    lang: html
    body: |
      <article>
        <header>
          <h2>Le Canadien l'emporte</h2>
        </header>
        <p>Le CH a remporté une victoire in extrémis hier...</p>
        <aside>Le Canadien est une équipe fondée en 1909.</aside>
      </article>
  -
    type: text
    body: 'Il s''agit aussi d''une balise de type bloc, elle se comporte donc exactement comme une balise&nbsp;`<div>`.'
  -
    type: note
    intent: mdn
    body: 'Pour en savoir plus, voir cet [article sur MDN à propos de la balise&nbsp;aside](https://developer.mozilla.org/fr/docs/Web/HTML/Element/aside).'
is_hidden: false
title: Sémantique
template: page-article
color_scheme: auto
preview_color: '#000'
preview: /assets/img/html-5.jpg
fieldset: page-article
id: 3270be3d-3177-4bbe-906e-b69289b9a172
