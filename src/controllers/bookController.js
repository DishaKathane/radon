const { count } = require("console")
const BookModel= require("../models/bookModel")
const authorModel= require("../models/authorModel")
const bookModel = require("../models/bookModel")



const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    // let author = req.body.author_id
    let author = await authorModel.find({author_name:"chetan bhagat"}).select("author_id")
    console.log(author);
    // let id = author[0].author_id
    let allBooks= await BookModel.find( { author_id:author[0].author_id }  )
    res.send({msg: allBooks})
}

const findAuthor =  async function (req, res) {

   let savedData= await BookModel.findOneAndUpdate({name:"Two States"}, {$set: { price:100 }}, {new:true, upsert:true})
//    console.log(savedData.author_id)

   
   let authorName =await authorModel.find({author_id:savedData.author_id}).select({author_name:1 , _id:0 })
   let UpdatedPrice=savedData.price
//    console.log(UpdatedPrice)
    res.send({msg: authorName , UpdatedPrice})
}


let findBookWithAuthor = async function (req, res) {

    let savedData= await BookModel.find({price:{$gte:50, $lte:100}}).select({author_id:1, _id:0})  //it is the array in res
    // res.send({msg: savedData})

    let id = savedData.map(price =>price.author_id)
    console.log(id) //here we obtained array with ids[2,4,3,1]
     let arr = []
     for (let i=0; i<id.length; i++){
         let result= id[i]
         let IdWithBook = await authorModel.find({author_id:result}).select({author_name:1, _id:0})

         arr.push(IdWithBook)
        //  console.log(arr)  it gives us array with reapeted authorname
     }
     const authorname= arr.flat()
     console.log(authorname)

    
res.send({msg: authorname})
}

let booksbBy_authorid =  async function (req, res) {
    let id= req.params.author_id

let savedData= await BookModel.find({author_id:id}).select({name:1, author_id:1})
    console.log(savedData)
    res.send({msg: savedData})
    
  }

    


let authorsName= async function(req, res){

    let result = await authorModel.find({age:{$gt:50}}).select({author_name:1,author_id:1,age:1, _id:0})
      let authArr= result.map(obj=>obj.author_id)
    // console.log(result)
    let bookResult = await BookModel.find({$and:[{author_id:{$in:authArr}},{ratings:{$gt:4}}] })
    bookResult =bookResult.map(obj=>obj.author_id)
    result=await authorModel.find({author_id:{$in:bookResult}}).select({author_name:1, age:1,_id:0})
    res.send({msg:result})
}

// let getNameAge=async(req,res)=>{
//     let data=await authorModel.find({age:{$gt:50}}).select({ author_id:1,author_name:1,age:1,_id:0})
//     let autIdArr=data.map((obj)=>obj.author_id)
//     let bookdata=await BookModel.find({$and:[{author_id:{$in:autIdArr}},{ratings:{$gt:4}}]})
//     bookdata=bookdata.map((obj)=>obj.author_id)
//     data=await AuthorModel.find({author_id:{$in:bookdata}}).select({author_name:1,age:1,_id:0})
//     res.send({msg:data})
// }

module.exports.createBook= createBook;
module.exports.getBooksData= getBooksData
module.exports.findAuthor = findAuthor
module.exports.findBookWithAuthor=findBookWithAuthor

module.exports.booksbBy_authorid =booksbBy_authorid
module.exports.authorsName= authorsName
