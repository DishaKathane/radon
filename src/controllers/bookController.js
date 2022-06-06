const bookModel = require("../models/bookModel")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {

    //let  allBooks= await BookModel.find()
    // res.send({msg: allBooks})



//     let allBooks= await BookModel.find({ $or:  [{authorName : "pk" }, {isPublished :true}, {sales:808}]
// }).count()


// let allBooks= await BookModel.find({ $or:  [{authorName : "pk" }, {isPublished :true}, {sales:808}]
// }).select({_id:1 , bookName:1, authorName:1})
//     res.send({msg: allBooks})



// let allBooks= await BookModel.find().sort({sales:1})
//     res.send({msg: allBooks})


// allBooks= await BookModel.find().limit(2)
//     res.send({msg: allBooks})

// allBooks= await BookModel.find().sort({sales:-1}).limit(3)
//     res.send({msg: allBooks})


// allBooks= await BookModel.find().sort({sales:-1}).limit(3).select({sales:1, authorName:1, _id: 0})
//     res.send({msg: allBooks})

// let page =req.query.body
// allBooks= await BookModel.find().skip(2).limit(4)
//     res.send({msg: allBooks})


// let allBooks =await BookModel.find({authorName: {$eq:"pk"}})
// res.send({msg: allBooks})


// let allBooks =await BookModel.find({sales: {$gt:50}})
// res.send({msg: allBooks})


// let allBooks =await BookModel.find({sales: {$lt:80}})
// res.send({msg: allBooks})


// let allBooks =await BookModel.find({sales: {$ne:10}})
// res.send({msg: allBooks})

// let allBooks =await BookModel.find({sales: {$lte:808}})
// res.send({msg: allBooks})


// let allBooks =await BookModel.find({sales: {$gte:10}})
// res.send({msg: allBooks})



// let allBooks =await BookModel.find({ sales: {$in:[10,808,1088]}}).count()
// res.send({msg: allBooks})


// let allBooks =await BookModel.find({ sales: {$nin:[10,808,1088]}}).select({sales:1, authorName:1, _id: 0})
// res.send({msg: allBooks})


// let allBooks =await BookModel.find({$and:[{sales: {$gt:10},  sales: {$lt:808}}]})
// res.send({msg: allBooks})  //sales in  between 20-500... sales>20and sales<500


// let allBooks =await BookModel.find({$and:[{sales: {$gt:10, $lt:808}}]})  //best way
// res.send({msg: allBooks})




// let allBooks =await BookModel.find({sales: {$gt:10, $lt:808}})  //best way
// res.send({msg: allBooks})


// let allBooks =await BookModel.findById("629dc9a89bf13e008786bb07")  //we will get single book//commenly use
// console.log(allBooks)
// res.send({msg: allBooks})

// let allBooks =await BookModel.findOne({sales:808})  //we will get single book//commenly use
// console.log(allBooks)
// res.send({msg: allBooks})

//UPDATE/findbyidabdupdate
// let allBooks= await BookModel.update(
//     {sales:{$gte:10} }, //condition
//     {$set:{ isPublished:true}}  //update/change that you want
// )
// res.send({msg: allBooks})


    //REGEX
    // let allBooks =await bookModel.find({bookName :/^int/i})   //find the all books which starts from "di" or pattern matching  it is case sensitive /by using i making insensitive

    // res.send({msg: allBooks})

    // let allBooks =await bookModel.find({bookName :/$5/i})   //find the all books which starts from "di" or pattern matching  it is case sensitive /by using i making insensitive  /last me 5 hona

    // let allBooks =await bookModel.find({bookName :/.*programming.*/i}) //it includes pro in bookname
     
    
    // async await

    // AWAIT USE:= database + axios
     //await not use:- in foreach, map and many array function... BE Careful
    let a=2+4;
     a=a+10;
     console.log(a)
    let allBooks =await bookModel.find()
console.log(allBooks)
    let b=14;
    b=b+10
    console.log(b)

    res.send({msg: allBooks})




}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData