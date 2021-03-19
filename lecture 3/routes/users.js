const express = require("express");

const router = express.Router();

const users = [
  { id: 1, name: "Andrew" },
  { id: 2, name: "Mahdy" },
  { id: 3, name: "Mohamed" },
];

router.get("/", (req, res) => {
  res.json(users);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === +id);
  res.json(user);
});

router.post("/", (req, res) => {
  const id = users[users.length - 1].id + 1;
  const { name } = req.body;
  const user = { id, name };
  users.push(user);
  res.json(user);
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const user = users.find((user) => user.id === +id);
  user.name = name;
  res.json(user);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((user) => user.id === +id);
  const user = users.splice(index, 1);
  res.json(user[0]);
});

module.exports = router;
