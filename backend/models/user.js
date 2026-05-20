const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    mobilno: String,
    email: String,
    address: String,
    city: String,
    password: String,
    confirmpassword: String
});

module.exports = mongoose.model("User", userSchema);