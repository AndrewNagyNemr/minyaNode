const express = require("express");
const User = require("../models/users")

const router = express.Router();

router.get("/", async (req, res)=>{
    const users = await User.getAll(); // Model
    res.render("users", {title:"Users", users }) //View
})

router.get("/add", (req, res)=>{
    res.render("add-user", {title:"add-user" }) 
})

router.post("/add", async (req, res)=>{
    await User.add(req.body);
    res.redirect("/users")
})

router.get("/del/:id", async (req, res)=>{
    await User.remove(req.params.id);
    res.redirect("/users")
})

router.get("/edit/:id", async (req, res)=>{
    const user = await User.getOne(req.params.id);
    res.render("edit-user", {title:"edit-user", user})
})

router.post("/edit/:id", async (req, res)=>{
    await User.edit(req.params.id, req.body);
    res.redirect("/users")
})

module.exports = router;