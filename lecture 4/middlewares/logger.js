const logger = (req, res, next) => {
  console.log("request to the server");
  // next();
  //   if (req.url === "/") res.send("un-authorized");
  //   else next();
  
  console.log(req.method, req.url);
  next();
};

module.exports = logger;
