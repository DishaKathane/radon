const { count } = require("console")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const giveAllBooks =async function(req, res){
    let allBooks = await BookModel.find().select({bookName:1 , authortName:1, _id:0})//.count()
    res.send({msg:allBooks})
}

const getBooksInYear =async function(req, res){
    
    let allBooks = await BookModel.find({year:{$eq:2020}})
    res.send({msg:allBooks})
}

const getPartiCularBook = async function(req, res){
    let condition = req.body
    let allBooks = await BookModel.find(condition)
    res.send({msg:allBooks})
}

const getXINRBooks = async function(req, res){
   
    let allBooks = await BookModel.find({ "prices.indianPrice":{$in:["100","200","500"]}})
    res.send({msg:allBooks})
}

const getRandomBooks = async function(req, res){
   
    let allBooks = await BookModel.find( { $and:[ {stockAvailable:true} , {totalPages:{$gt:500}} ] } )//.select({stockAvailable:1,totalPages:1, _id:0})
    res.send({msg:allBooks})
}




module.exports.createBook= createBook
module.exports.giveAllBooks = giveAllBooks
module.exports.getBooksInYear =getBooksInYear
module.exports.getPartiCularBook =getPartiCularBook
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks= getRandomBooks