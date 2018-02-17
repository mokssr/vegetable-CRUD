//importing mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//declaring schema
let VegetableSchema = new Schema({
    name: String,
    image: String
});

//exporting module
let Vegetable = module.exports = mongoose.model('vegetables', VegetableSchema);
