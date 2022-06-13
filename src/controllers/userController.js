const UserModel= require("../models/userModel")

const createUser= async function(req, res) {
      let body = req.body
    
let saveData = await UserModel.create(body)
      res.send({msg : saveData})   

        
        }
module.exports.createUser = createUser




const createUser1= async function(req, res) {
      let header = req.headers
let appType = header["isFreeAppUser"] 
 if(!appType)  appType = header["isfreeappuser"];

if(!appType){

 res.send({msg: " the request is missing a mandatory header"})  
}
      let body = req.body
    
let saveData = await UserModel.create(body)
      res.send({msg : saveData})    
        
        }
module.exports.createUser1 = createUser1

