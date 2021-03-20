const express = require("express");
const User = require("../models/users")

const router = express.Router();

router.get("/", async (req, res)=>{
    const users = await User.getAll(); // Model
    res.render("users", {title:"Users", users }) //View
})

module.exports = router;