title: 'Connexion FTP ICD Soft'
template: page-article
color_scheme: auto
body:
  -
    type: vimeo
    video: 'https://vimeo.com/373807021'
    ratio: 56
  -
    type: text
    title: Connexion
    level: h2
    body: |
      Il vous faut premièrement votre lien vers votre Control Panel _(Cpanel)_.
      Ensuite vous aurez besoin de&nbsp;votre:
      
      - Username
      - Password
  -
    type: note
    intent: generic
    body: 'Toutes ces information devrait-être dans un courriel que vous avez reçu d''ICD&nbsp;Soft.'
  -
    type: text
    title: 'Informations FTP'
    level: h2
    body: |
      Une fois connecté, vous devriez voir une collection d'outils&nbsp;_(Tools)_.
      
      - Sélectionner **FTP&nbsp;Manager**
      - Cliquer sur le bouton **Config&nbsp;file**
      - Cliquer sur le bouton **Download config&nbsp;file**
      
      Voilà, un fichier XML contenant les informations de connexion à votre FTP devrait être téléchargé dans votre&nbsp;navigateur.
  -
    type: text
    title: FileZilla
    level: h2
    body: |
      Lancer le logiciel [FileZilla](https://filezilla-project.org/).
      
      - Aller dans l'onglet **Fichier**.
      - Sélectionner l'option **Importer les&nbsp;paramètres...**
      - Choisissez le XML que vous venez de&nbsp;télécharger.
      - Cliquer sur **Ok** à la question pour l'Entrée du gestionnaire de&nbsp;site.
      - Cliquer en haut à gauche de FileZilla sur l'icône du **gestionnaire de&nbsp;site**.
      - Sélectionner le site que vous venez&nbsp;d'importer et appuyer sur&nbsp;**Connexion**.
      - Entrer votre mot de passe. À moins que vous l'aillez changé, il s'agit probablement du même mot de passe que pour vous [connecter au&nbsp;CPanel](#connexion).
      - Accepter le certificat du serveur en appuyant sur **Ok**.
      
      Vous avez maintenant accès à vos fichiers sur votre&nbsp;serveur.
  -
    type: text
    title: 'Mise à jours du thème'
    level: h2
    body: |
      Naviguer dans l'arborescence de FileZilla
      
      _wp-content_ ➡️ _themes_ ➡️ _Nom de votre thème_
      
      En sélectionnant dans la fenêtre de gauche de FileZilla les fichiers de votre thème locaux et en les glissant dans la fenêtre de droite, vous pourrez écraser vos fichiers en ligne par ceux que vous avez en&nbsp;local.
  -
    type: note
    intent: warning
    body: 'Attention de ne pas faire l''inverse et de ne pas écraser vos fichiers locaux par ceux en ligne. Par mesure préventive, faite une copie de votre dossier avant de procéder. Au&nbsp;cas.'
fieldset: page-article
id: fd2820f0-a109-4f3f-b1ca-54fefb980d2b
