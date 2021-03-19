const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
    console.log("successfully connected to the database");
})

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
