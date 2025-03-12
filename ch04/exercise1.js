const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const userRoutes = require("./exercise/routes/userRouter");

const port = 3000;

// use json middleware to parse http body
app.use(bodyParser.json());

app.use("/users", userRoutes);

app.listen(port, () => {
  console.log("Example app listening on port ", port);
});
