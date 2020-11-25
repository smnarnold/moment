title: Promise
template: page-article
color_scheme: auto
body:
  -
    type: text
    body: |
      Une promesse, ou en anglais _promise_, consiste en un engagement à faire quelque chose. Par exemple, un collègue peut promettre de remettre sa partie d’un travail d’ici la fin de la&nbsp;semaine. 
      
      Le résultat d’une telle promesse n’est pas immédiatement disponible. Il faut se montrer patient et attendre que la promesse soit complétée. Par exemple, attendre que le collègue remette sa partie, soit: jeudi, vendredi, samedi ou encore&nbsp;dimanche.
      
      Une promesse est faite dans le but d’être respectée. Donc si le collègue en question promet de remettre sa partie pour une date X, c’est qu’il est confiant de pouvoir respecter son engagement et lorsque ce sera chose faite, vous pourrez alors jumeler vos&nbsp;parties.
      
      Dans de rares occasions, une promesse peut être brisée. Un contretemps pourrait par exemple empêcher ledit collègue de remettre sa partie. Vous, vous tournerez alors vers un plan&nbsp;B.
  -
    type: text
    title: 'En JavaScript'
    level: h2
    body: |
      Les `Promises` en JavaScript fonctionnent sur le même principe. À défaut de pouvoir répondre immédiatement une fonction peut retourner une promesse. Cette approche est particulièrement utile lorsque la fonction en question contacte un serveur externe, puisque son délai de réponse peut&nbsp;varier.
      
      Si la promesse est respectée, la méthode `.then()` est ensuite appelée et la valeur de la réponse lui est passée en&nbsp;paramètre.
      
      Si la promesse est brisée et qu’une méthode `.catch()` est présente, elle est appelée et un message d’erreur lui est&nbsp;passé.
      
      Bien qu’il soit possible de faire et de recevoir des promesses en JavaScript, il est plus fréquent d’en&nbsp;recevoir.
  -
    type: text
    title: Création
    level: h2
    body: |
      Une promesse est un objet contenant une fonction acceptant deux&nbsp;paramètres. 
      
      1. Le premier correspond au nom d'une fonction à appeler lorsque la promesse est&nbsp;respectée.
      2. Le deuxième au nom de la fonction à appeler lorsqu'elle est&nbsp;brisée.
      
      Par exemple, la promesse suivante&thinsp;👇 appelle la fonction `resolve` lorsqu'elle est respectée et `reject` lorsqu'elle est brisée. La valeur du retour dans les deux cas est passée en&nbsp;paramètre.
  -
    type: code
    lang: js
    body: |
      const promesse = new Promise((resolve, reject) => {
        const respectPromesse = true;
      
        if (respectPromesse === true) {
          resolve("Promesse respectée");
        } else {
          reject("Promesse brisée");
        }
      });
  -
    type: text
    body: |
      Dans le cadre de cette démonstration, la promesse sera toujours&nbsp;respectée. 
      
      Cependant, un exemple plus concret serait le cas d'un service tentant de répondre à une demande d'informations. Si les informations sont trouvées, la fonction assignée au respect de la promesse est appelée. Si le délai imparti avant de trouver la réponse est dépassé, la fonction assignée au bris de promesse est&nbsp;appelée.
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article MDN🦖 sur les&nbsp;Promises](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).'
  -
    type: text
    title: Consommation
    level: h2
    body: 'Pour obtenir le résultat d''une promesse, il est impossible d''appeler directement la promesse. Par exemple, le code&nbsp;suivant:'
  -
    type: code
    lang: js
    body: |
      console.log(promesse)
      // [objet Promise] {}
  -
    type: text
    body: 'Retournerait un message indiquant qu''il s''agit d''un objet de type `Promise` et non la&nbsp;valeur.'
  -
    type: text
    title: 'Promesse respectée ✅'
    level: h3
    body: |
      Si la promesse est respectée, une méthode `.then()` est appelée et la valeur lui est passée en&nbsp;paramètre. 
      
      Par exemple:
  -
    type: code
    lang: js
    body: |
      promesse
        .then(valeur => console.log(valeur));
      // "Promesse respectée"
  -
    type: text
    body: |
      Une méthode `.then()` retourne elle aussi une promesse. Cette promesse peut donc à son tour avoir un `.then()` et ainsi enchainer de multiple `.then()` un à la suite de&nbsp;l'autre.
      
      Par exemple:
  -
    type: code
    lang: js
    body: |
      promesse
        .then(valeur => `${valeur}, oh oui!!!`)
        .then(nouvelleValeur => console.log(nouvelleValeur));
      // "Promesse respectée, oh oui!!!"
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article MDN🦖 sur&nbsp;then()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise/then).'
  -
    type: text
    title: 'Promesse brisée 🚫'
    level: h3
    body: |
      Si la promesse est brisée et qu'une méthode `.catch()` est présente, cette dernière est appelée et la valeur lui est passée en&nbsp;paramètre.
      
      Par exemple:
  -
    type: code
    lang: js
    body: |
      promesse
        .catch(erreur => console.log(erreur));
      // "Promesse brisée"
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article MDN🦖 sur&nbsp;catch()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise/catch).'
  -
    type: text
    title: 'Promesse complétée'
    level: h3
    body: |
      Si une méthode `.finally()` est présente, celle-ci est appelée dès que la promesse est complétée, peu importe son statut qu'elle soit respectée ou&nbsp;brisée.
      
      Par exemple:
  -
    type: code
    lang: js
    body: |
      promesse
        .finally(() => console.log("La promesse est complétée"));
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article MDN🦖 sur&nbsp;finally()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise/finally).'
  -
    type: text
    title: 'Exemple complet'
    level: h3
    body: 'Le tout mis ensemble donnerait&nbsp;ceci:'
  -
    type: code
    lang: js
    body: |
      promesse
        .then(valeur => console.log(valeur))
        .catch(erreur => console.log(erreur))
        .finally(() => console.log("La promesse est complétée"));
      // "Promesse respectée"
      // "La promesse est complétée"
  -
    type: text
    title: Combinaisons
    level: h2
    body: |
      La relation entre des promesses peut variée. Parfois certaines sont interchangeables, alors qu'à d'autres moments elles sont toutes requises avant de pouvoir passer à l'étape&nbsp;suivante.
      
      Afin de gérer ces relations, l'objet `Promise` est doté de plusieurs méthodes permettant de retourner à son tour des promesses&nbsp;_(promise)_. Voici deux de ces méthodes les plus&nbsp;communes.
  -
    type: text
    title: All
    level: h3
    body: 'La méthode `Promise.all()` retourne une promesse respectée lorsque l''ensemble des promesses lui étant passées en paramètres sont respectées. Sa valeur de résultat contient un tableau populé par le résultat de chacune de ses&nbsp;sous-promesses.'
  -
    type: code
    lang: js
    body: |
      const p1 = new Promise((resolve) => resolve("Promesse 1"));
      const p2 = new Promise((resolve) => resolve("Promesse 2"));
      const p3 = new Promise((resolve) => resolve("Promesse 3"));
      
      Promise.all([p1, p2, p3]).then((valeurs) => {
        console.log(valeurs);
      });
      // ["Promesse 1", "Promesse 2", "Promesse 3"]
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article de MDN🦖 sur&nbsp;Promise.all()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise/all).'
  -
    type: text
    title: Any
    level: h3
    body: 'Contrairement à la méthode [Promise.all()](#all), la méthode `Promise.any()` retourne une promesse respectée dès qu''une promesse lui étant passées en paramètres est respectée. Sa valeur de résultat contient le résultat de la sous-promesses la plus rapide à&nbsp;répondre.'
  -
    type: code
    lang: js
    body: |
      //👇 lente
      const p1 = new Promise((resolve) => resolve("Promesse 1")); 
      //👇 rapide
      const p2 = new Promise((resolve) => resolve("Promesse 2")); 
      //👇 moyenne
      const p3 = new Promise((resolve) => resolve("Promesse 3")); 
      
      Promise.any([p1, p2, p3]).then((valeur) => {
        console.log(valeur);
      });
      // "Promesse 2"
  -
    type: note
    intent: good
    body: 'Pour en savoir plus, voir cet [article de MDN🦖 sur&nbsp;Promise.any()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise/any).'
fieldset: page-article
id: 682303eb-bd5f-4454-929d-5da972098b82
