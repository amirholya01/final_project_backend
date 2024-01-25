const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    username: {type: String, required: true, lowercase: true, unique: true},
    email: {type: String, required: true, lowercase: true, unique: true},
    password: {type: String, required: true}
})

module.exports = {
    UserModel : mongoose.model("user", Schema)
}