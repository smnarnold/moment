body:
  -
    type: text
    title: Interpolation
    level: h2
    body: |
      Les littéraux de gabarits _(ou en anglais: Template string/Template literal)_ permettent d'incorporer des variables et/ou expressions simples à l'intérieur d'une chaîne de&nbsp;caractères.
      
      Par&nbsp;exemple:
  -
    type: code
    lang: js
    body: |
      const nom = "Harold";
      const age = 2;
      const phrase = "Mon chien " + nom + " a " + age * 7 + "ans.";
  -
    type: text
    body: 'N''est pas la plus facile à lire. Cependant, grâce aux littéraux de gabarits, il est possible&nbsp;d''écrire:'
  -
    type: code
    lang: js
    body: |
      const nom = "Harold";
      const age = 2;
      const phrase = `Mon chien ${nom} a ${age * 7}ans.`;
  -
    type: text
    body: 'Remarquez l''usage de _backticks_ `` `...` `` plutôt que d''apostrophes `"..." ou ''...''` pour déclarer la chaîne de&nbsp;caractères.'
  -
    type: note
    intent: generic
    body: 'Le _backtick_ est aussi connu chez les francophones sous le nom de _accent&nbsp;grave_'
  -
    type: text
    body: 'On remarque aussi que les extraits de code entre `${...}` sont&nbsp;interprétés.'
  -
    type: text
    title: Multilignes
    level: h2
    body: |
      Une chaîne de caractères classique en JavaScript ne permet pas par défaut d'écrire sur plusieurs lignes. Cette restriction complique les choses dans les cas où la chaîne de caractères contient du code&nbsp;HTML.
      
      Par&nbsp;exemple:
  -
    type: code
    lang: js
    body: 'const html = "<div class=''chien''><h2>Mon chien " + name + "</h2><p>a " + age * 7 +"</p></div>";'
  -
    type: text
    body: 'Heureusement, il est possible d''écrire la même ligne avec les littéraux de gabarits sur plusieurs lignes&nbsp;ainsi:'
  -
    type: code
    lang: js
    body: |
      const html = `
      <div class='chien'>
        <h2>Mon chien ${name}</h2>
        <p>a ${age * 7}</p>
      </div>`;
  -
    type: note
    intent: good
    body: 'Pour en savoir [plus sur les littéraux de gabarits, voir&nbsp;MDN🦖](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Litt%C3%A9raux_gabarits)'
is_hidden: false
title: 'Littéraux de gabarits'
template: page-article
color_scheme: auto
preview_color: '#000'
preview: /assets/img/litteraux.jpg
fieldset: page-article
id: 50054c5d-d930-4f34-8078-baeb749dd3e5
