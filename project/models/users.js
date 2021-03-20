const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
});

const User = mongoose.model("User", schema);

const add = (user)=>{
    return new User(user).save();
}

const getAll = ()=>{
    return User.find();
}

const getOne = (id)=>{
    return User.findById(id)
}

const remove = (_id)=>{
    return User.deleteOne({_id})
}

const edit = (_id, user)=>{
    return User.updateOne({_id}, user)
}

module.exports = {
    add, edit, getAll, getOne, remove
}
