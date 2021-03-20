const mongoose = require("mongoose");
const express = require("express");
const userRouter = require("./routes/users");
const viewUserRouter = require("./routes/viewUsers");

mongoose
  .connect("mongodb://localhost/db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

//middleware
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use("/api/users", userRouter);
app.use("/users", viewUserRouter);
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { title: "My App" });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
