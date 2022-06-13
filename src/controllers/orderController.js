
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
   