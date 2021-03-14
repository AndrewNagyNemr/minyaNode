const express = require("express");

const app = express();

//middleware
app.use(express.json());

const users = [
  { id: 1, name: "Andrew" },
  { id: 2, name: "Mahdy" },
  { id: 3, name: "Mohamed" },
];

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === +id);
  res.json(user);
});

app.post("/users", (req, res) => {
  const id = users[users.length - 1].id + 1;
  const { name } = req.body;
  const user = { id, name };
  users.push(user);
  res.json(user);
});

app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const user = users.find((user) => user.id === +id);
  user.name = name;
  res.json(user);
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((user) => user.id === +id);
  const user = users.splice(index, 1);
  res.json(user[0]);
});

app.listen(3000);
