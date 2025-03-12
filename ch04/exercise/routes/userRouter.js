const express = require("express");
const router = express.Router();
const { uuid } = require("uuidv4");

let users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 30,
  },
];
router.get("/", (req, res) => {
  console.log(users);
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuid() });
  res.send(
    `User with first name ${user.firstName} added to the in-memory database succesfully`
  );
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  if (!foundUser) {
    res.status(404).send("User not found");
  }
  res.send(foundUser);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const result = users.filter((user) => user.id !== id);

  if(result.length === users.length){
    res.status(404).send("User not found");
  }

  users = result;

  res.send(`User with id ${id} has been deleted`);
});

module.exports = router;
