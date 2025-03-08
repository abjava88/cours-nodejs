const express = require("express");

const app = express();
const PORT = 3000;

// Simuler une base de données d'utilisateurs
const users = [
  { id: 1, name: "Alice", role: "admin" },
  { id: 2, name: "Bob", role: "user" },
  { id: 3, name: "Charlie", role: "user" },
];

// Middleware 1 : Récupérer l'utilisateur à partir de userId
const getUser = (req, res, next) => {
  if (!req.query.userId) {
    return res.status(404).json({ message: "Utilisateur non trouvé." });
  }

  const userId = parseInt(req.query.userId, 10);
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({
      message: "Utilisateur non trouvé.",
    });
  }

  req.user = user; // Stocke l'utilisateur dans l'objet `req` pour le middleware suivant
  next();
};

// Middleware 2 : Vérifier que l'utilisateur est administrateur
const checkAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Accès interdit. Admin requis." });
  }
  next();
};

// Route protégée par les middlewares
app.get("/admin", getUser, checkAdmin, (req, res) => {
  res.json({
    message: `Bienvenue, ${req.user.name}! Vous avez accès à l'administration.`,
  });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
