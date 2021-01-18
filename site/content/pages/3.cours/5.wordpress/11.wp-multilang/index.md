title: 'WP Multilang'
template: page-article
color_scheme: auto
body:
  -
    type: text
    body: |
      Wordpress possède plusieurs extensions permettant de traduire du&nbsp;contenu. 
      
      - [TranslatePress](https://translatepress.com/) _(Payant $$$)_
      - [WPML](https://wpml.org/) _(Payant $$$)_
      - [Polylang](https://wordpress.org/plugins/polylang/)
      - [WP Multilang](https://wordpress.org/plugins/wp-multilang/)
      - Etc.
      
      Pour sa gratuité, sa compatibilité avec [ACF](./acf#advanced-custom-fields) et sa facilité d'utilisation, nous regarderons&nbsp;WP&nbsp;Multilang.
  -
    type: text
    title: 'WP Multilang'
    level: h2
    body: 'Si votre installation a été faite en Canadien français&nbsp;🇨🇦, le simple fait d''activer l''extension donnera l''option d''entrer du contenu soit en français ou en&nbsp;anglais&nbsp;🇺🇸.'
  -
    type: image
    image: /assets/articles/wp-mulilang.jpg
  -
    type: text
    body: |
      Si l'option n'est pas immédiatement disponible après l'activation de l'extension ou si vous désirez ajouter une autre langue, il suffit d'accéder&nbsp;à:
      
      _Réglages_ ➡️ _WP Multilang_ ➡️ _Langages_
      
      Pour contrôler les langages&nbsp;disponibles.
  -
    type: text
    title: 'Gestion du contenu'
    level: h3
    body: 'Dans le tableau de bord, sur la page listant les articles et/ou pages un libellé sera ajouté indiquant la disponibilité du post dans les différents langages supportés. Par exemple, la page d''exemple par défaut n''existe à priori qu''en Canadien&nbsp;français.'
  -
    type: image
    image: /assets/articles/wp-post-lang-flag.jpg
  -
    type: text
    body: 'Simplement en activant le tab _English US_ en haut de page, il est possible de changer de contexte&nbsp;d''édition.'
  -
    type: image
    image: /assets/articles/wpm-tabs.jpg
  -
    type: text
    body: 'Dès lors, si la page en question est modifiée, par exemple si son titre est traduit _"Example page"_, elle sera dorénavant listée du côté anglophone sous ce titre et un drapeau américain 🇺🇸s''ajoutera pour indiquer sa disponibilité dans cette&nbsp;langue.'
  -
    type: image
    image: /assets/articles/wpm-us-flag.jpg
  -
    type: text
    title: 'Compatibilité avec les post personnalisés'
    level: h2
    body: |
      Si un site offre l'option de traduire ses publications de base, il est généralement souhaitable que les posts personnalisés offrent la même option. Cependant, il est possible que WordPress n'affiche pas l'option par&nbsp;défaut.
      
      Pour remédier à ce problème, il suffit de créer un fichier _wpm-config.json_ à la racine de son thème. Ce fichier devra contenir un objet JavaScript indiquant les posts personnalisés qui devraient-êtres&nbsp;traduit.
      
      Par exemple, si un seul type de posts personnalisés intitulé _projet_ devait-être traduit, le contenu de ce fichier ressemblerait à&nbsp;ceci:
  -
    type: code
    lang: js
    body: |
      {
        "post_types": {
          "projet": {}
        }
      }
  -
    type: text
    body: 'Si vous avez plusieurs types de posts personnalisés, par exemple: _projet_ et _personne_, le fichier aurait alors l''air de&nbsp;ceci:'
  -
    type: code
    lang: js
    body: |
      {
        "post_types": {
          "projet": {},
          "personne": {}
        }
      }
  -
    type: note
    intent: warning
    body: 'Attention de ne pas faire d''erreur dans votre JSON, sinon il ne sera pas pris en compte. Pour vous assurer qu''il est bien formaté, vous pouvez le valider avec un&nbsp;[linter](https://jsonlint.com/).'
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir la [page officielle de l''extension WP&nbsp;Multilang](https://wordpress.org/plugins/wp-multilang/)'
fieldset: page-article
id: f5cfc34f-1b4b-47ab-9e5d-db5b4a676c3b
