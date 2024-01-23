const mongoose = require('mongoose');
const { Schema } = mongoose;

let animalSchema = new Schema({
    name: String,
    email: String,
    password : String,
})

module.exports = mongoose.model("Animal",animalSchema)