const express = require("express");
const User = require("../models/users");

const router = express.Router();

router.post("/", async (req, res) => {
  const user = await User.add(req.body);
  res.send(user);
});

router.delete("/:id", async (req, res) => {
  const result = await User.remove(req.params.id);
  res.send(result);
});

module.exports = router;
