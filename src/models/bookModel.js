const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    bookName: {
        type:String,
        required:true,
        unique:true
    },
    authortName:{
        type: String,
        required:true
    },
   category:[String],
   year:String

}, {timestamps:true} );
 
module.exports = mongoose.model('Book', bookSchema);