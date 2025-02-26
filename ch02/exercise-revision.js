// Fonction coûteuse qui simule un traitement long (52 secondes)
function calculCouteux(n) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(n * n); // Simule un calcul et renvoie le résultat
    }, 52000); // 52 secondes
  });
}


// fonction asynchrone en utilisant async await qui appelle calculCouteux avec le nombre 10
