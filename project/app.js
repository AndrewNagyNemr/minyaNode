const mongoose = require("mongoose");
const express = require("express");
const userRouter = require("./routes/users")

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
app.use("/users", userRouter);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
