const express = require("express");
const app = express();
// Import the mongoose module
const mongoose = require("mongoose");
// Set up default mongoose connection
const mongoDB = "mongodb://localhost/test01";
mongoose.connect(mongoDB, { useNewUrlParser: true});  
// useNewUrlParser pour utiliser la version recent du format de connexion. 
// useUnifiedTopology pour utiliser la nouvelle version de gestion des connexion de l'engin mongodb driver. 
const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log("connected to database"));

app.listen(3000, () => console.log("server started"));
