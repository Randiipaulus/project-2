const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema(
{
    book: {type: String, require: true,},
    price: {type: String, require: true,},
    author: {type: String, require:true,},
});

module.exports = mongoose.model('Book', bookSchema);




 