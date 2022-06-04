const bookModel = require("../models/bookModel")


let createBook =async function(req,res){
    let data =req.body;
    console.log(data);
   
    let saveData = await bookModel.create(data)
    res.send({msg :saveData})
}

let getBooksData =async function(req,res){
    let allBooks = await bookModel.find()
    res.send({msg: allBooks})
}


module.exports.createBook =createBook;
module.exports.getBooksData=getBooksData;