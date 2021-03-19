const express = require("express");
const mongoose = require("mongoose");

const usersRouter = require("./routes/users");
const logger = require("./middlewares/logger");

const app = express();

//middleware
app.use(express.json());
// app.use(logger);

app.use((req, res, next)=>{
    console.log("here");
    next();
})

app.use( "/users" ,usersRouter);
// app.use( "/posts" ,postsRouter);

mongoose
  .connect("mongodb://localhost", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("successfully connected to the database");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, ()=>{
    console.log("listening on port 3000");
});

// mongoose.connect(
//   "mongodb://localhost",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   () => {
//     console.log("successfully connected to the database");
//   }
// );

// (async () => {
//   const connection = await mongoose.connect("mongodb://localhost", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
//   console.log("successfully connected to the database");
// })();
