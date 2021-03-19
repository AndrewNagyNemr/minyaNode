const express = require("express");
const usersRouter = require("./routes/users")

const app = express();

//middleware
app.use(express.json()); // parse req body // req.body
app.use("/users" ,usersRouter); 
// app.use("/posts" ,postsRouter); 

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.listen(3000);
