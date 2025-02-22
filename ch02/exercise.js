// Fonction qui reçoit un message et appelle un callback après réception
function traiterMessage(message, callback) {
  console.log("Message reçu :", message);
  callback(message); // Appel du callback pour traiter le message
}

// Fonction callback qui affiche le message en majuscules
function afficherMajuscules(texte) {
  console.log("Message transformé :", texte.toUpperCase());
}

// Appel de la fonction avec le callback pour transformer le message en majuscules
traiterMessage("Bonjour, comment ça va ?", afficherMajuscules);

// fonction asynchrone additionner
async function additionner(a, b) {
  return a + b;
}

// Exemple d'utilisation avec then/catch
additionner(5, 10)
  .then((resultat) => {
    console.log("Résultat avec then/catch:", resultat);
  })
  .catch((erreur) => {
    console.error("Erreur:", erreur);
  });

// Exemple d'utilisation avec async/await
async function utiliserAdditionner() {
  try {
    const resultat = await additionner(7, 3);
    console.log("Résultat avec async/await:", resultat);
  } catch (erreur) {
    console.error("Erreur:", erreur);
  }
}

utiliserAdditionner();

