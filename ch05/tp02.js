const express = require("express");
const userRouter = require("./routes/userRouter")

const app = express();

// Import the mongoose module
const mongoose = require("mongoose");
// Set up default mongoose connection
const mongoDB = "mongodb://localhost/test02";
mongoose.connect(mongoDB, { useNewUrlParser: true});  
// useNewUrlParser pour utiliser la version recent du format de connexion. 
const db = mongoose.connection;

app.use(express.json());
app.use('/users', userRouter)

app.listen(3000, () => console.log("server started"));
db.on('error', (error) => console.error(error));
db.once('open', () => console.log("connected to database"));