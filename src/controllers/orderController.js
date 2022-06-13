
const mongoose = require("mongoose")
const { count } = require("console")
const UserModel = require("../models/userModel")
const OrderModel = require("../models/orderModel")
const ProductModel = require("../models/productModel")

      const placeOrder= async function (req, res) {
        const{userId,productId}=req.body
        let value=req.headers.isfreeappuser
          
        const userValid=await UserModel.findById(userId)
        const productValid=await ProductModel.findById(productId)
        
        
        if(!userValid){
            return res.send({msg:" User is Not valid, Please Enter correct Userid"})
        }
        if(!productValid){
            return res.send({msg:" Product is not valid, Please Enter correct ProductId"})
        }
        let userAmount=userValid.balance
        let ProductPrice=productValid.price
        console.log("user ammount: ",userAmount)
        console.log("product price: ",ProductPrice)
        if(value=="true"){
            let orderDetail=await OrderModel.create({
                userId:userId,
                productId:productId,
                amount: 0,
                isFreeAppUser: value, 
                date: new Date()
            })
            return res.send({msg:orderDetail})
        
        }else{
            if(userValid.balance<=productValid.price){
                return res.send({msg:"user has insufficient balance, please try next time"})  
            }
            let orderDetail=await OrderModel.create({
                userId:userId,
                productId:productId,
                amount: productValid.price,
                isFreeAppUser: value, 
                date: new Date()
            })
            let amountDeduct=userValid.balance-productValid.price;
            UserModel.findByIdAndUpdate(userId, { balance:amountDeduct },function (err, docs) {
                if (err){
                    console.log(err)
                }
                })
    
    
                return res.send({msg:orderDetail})
              }  
            }
        
    module.exports.placeOrder =placeOrder
    


    const createOrder = async function (req, res) {
      const{userId,productId}=req.body
      let value=req.headers.isfreeappuser
        
      const userValid=await UserModel.findById(userId)
      const productValid=await ProductModel.findById(productId)
      
    
      let header = req.headers
      let appType = header["isFreeAppUser"] 
       if(!appType)  appType = header["isfreeappuser"];
   
   if(!appType){
   
       res.send({msg: " the request is missing a mandatory header"})  
   }
      
      if(!userValid) return res.send({msg:" User is Not valid Enter correct Userid"})
      
      if(!productValid) return res.send({msg:" Product is not valid Enter correct ProductId"})
     
      let userAmount=userValid.balance
      let ProductPrice=productValid.price
      console.log("user ammount: ",userAmount)
      console.log("product price: ",ProductPrice)
      if(appType=="true"){
          let orderDetail=await OrderModel.create({
              userId:userId,
              productId:productId,
              amount: 0,
              isFreeAppUser: appType, 
              date: new Date()
          })
          return res.send({msg:orderDetail})
      
      }else{
          if(userValid.balance<=productValid.price){
              return res.send({msg:"user has insufficient balance, please try next time"})  
          }
          let orderDetail=await OrderModel.create({
              userId:userId,
              productId:productId,
              amount: productValid.price,
              isFreeAppUser: appType, 
              date: new Date()
          });
          let amountDeduct=userValid.balance-productValid.price;
          UserModel.findByIdAndUpdate(userId, { balance:amountDeduct },function (err, docs) {
              if (err){
                  console.log(err)
              }
              })
  
  
              return res.send({msg:orderDetail})
            }  
          }
      
  module.exports.createOrder =createOrder
    // const createOrder= async function (req, res) {
    //     let data2= req.body
    //     let user= req.userId
    //     let product= req.productId
    //     let header  = req.headers
    //     //let isFreeAppUser = headers["isFreeAppUser"==false]
    
    //          if (!header.isfreeappuser) { 
    //         console.log(header.isfreeappuser)
    //         res.send ({msg:"the request is missing a mandatory header! "})
    //     }
    //     else {
    //         let savedData3= await OrderModel.create( data2)
    //         res.send({msg: savedData3})
    //     }
        
       
    
    // }
    // module.exports.createOrder= createOrder
    
    
    

























// const getBooksData = async function (req, res) {
//     let allBooks = await BookModel.find({ authorName: "HO" })
//     console.log(allBooks)
//     if (allBooks.length > 0) res.send({ msg: allBooks, condition: true })
//     else res.send({ msg: "No books found", condition: false })
// }


// const updateBooks = async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks = await BookModel.findOneAndUpdate(
//         { authorName: "ABC" }, //condition
//         { $set: data }, //update in data
//         { new: true, upsert: true } ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT
//     )

//     res.send({ msg: allBooks })
// }

// const deleteBooks = async function (req, res) {
//     // let data = req.body 
//     let allBooks = await BookModel.updateMany(
//         { authorName: "FI" }, //condition
//         { $set: { isDeleted: true } }, //update in data
//         { new: true } ,
//     )

//     res.send({ msg: allBooks })
// }



// const totalSalesPerAuthor = async function (req, res) {
//     // let data = req.body 
//     let allAuthorSales = await BookModel.aggregate(
//         [
//             { $group: { _id: "$authorName", totalNumberOfSales: { $sum: "$sales" } } },
//             { $sort: { totalNumberOfSales: -1 } }
//         ]
//     )

//     res.send({ msg: allAuthorSales })
// }




// // CRUD OPERATIONS:
// // CREATE
// // READ
// // UPDATE
// // DELETE



// module.exports.createBook = createBook
// module.exports.getBooksData = getBooksData
// module.exports.updateBooks = updateBooks
// module.exports.deleteBooks = deleteBooks
// module.exports.totalSalesPerAuthor = totalSalesPerAuthor
