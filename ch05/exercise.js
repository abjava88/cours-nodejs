const express = require('express');
const app = express();
const mongoose = require('mongoose');
const employeesRouter = require('./routes/employeeRouter');

const port = 3000
const mongoDB = "mongodb://localhost/exercise"
mongoose.connect(mongoDB, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());

app.use('/employees', employeesRouter);

app.listen(port, () => console.log('Server Started'));