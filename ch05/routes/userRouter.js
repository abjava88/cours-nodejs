const express = require("express");
const User = require("../models/user");

const router = express.Router();

// Getting all users
router.get("/", (req, res) => {
  User.find({})
    .then((users) => res.status(200).send(users))
    .catch((error) => console.error(error));
});

module.exports = router;
