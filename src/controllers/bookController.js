const { count } = require("console")
const BookModel= require("../models/bookModel")
const authorModel= require("../models/authorModel")



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




module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.findAuthor = findAuthor
module.exports.findBookWithAuthor=findBookWithAuthor


  