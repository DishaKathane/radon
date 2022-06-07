const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type:String,
        required:true,
        unique:true
    },
    authortName:{
        type: String,
        required:true
    },
    tags: [String],
    year: {type: String, default:2021},

    prices: {
        indianPrice: String,
        europePrice:String,
    },
    totalPages:Number,
    stockAvailable: Boolean,

   }, { timestamps:true});

module.exports = mongoose.model('Book1k', bookSchema) //users


