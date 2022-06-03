const UserModel = require("../models/userModel")


let createUser =async function(req,res){
    let data =req.body;
    console.log(data);
   
    let saveData = await UserModel.create(data)
    res.send({msg :saveData})
}

let getUsersData =async function(req,res){
    let allUsers = await UserModel.find()
    res.send({msg: allUsers})
}


module.exports.createUser =createUser;
module.exports.getUsersData=getUsersData;

