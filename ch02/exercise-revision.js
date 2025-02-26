// Fonction coûteuse qui simule un traitement long (52 secondes)
function calculCouteux(n) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(n * n); // Simule un calcul et renvoie le résultat
    }, 5000); // 5 secondes
  });
}

async function appelAsynchrone(n) {
    console.log("Calcul en cours...");
    const result = await calculCouteux(n); // Attend le résultat de la fonction coûteuse
    console.log(result);
    return result;
}

const reponse = appelAsynchrone(10);
console.log(reponse);
console.log("Une aure requette http arrive");

