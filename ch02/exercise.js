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

async function additionner1(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b); // Résoudre la Promise après 10 secondes avec le résultat
    }, 10000);
  });
}

// Exemple d'utilisation avec then/catch
additionner(5, 15)
  .then((resultat) => {
    console.log("Résultat avec then/catch:", resultat);
  })
  .catch((erreur) => {
    console.error("Erreur:", erreur.message);
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

console.log("Fin du programme");

// Exemple fetch asynchrone

async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

fetchData();
console.log("Find du programme");
