const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


const createUser = async function(req,res){
    let data =req.body;
    let createData = await userModel.create(data);
    res.send({msg:createData});
}
module.exports.createUser = createUser



const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });

  
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "Radon",
      organisation: "FunctionUp",
    },
    "functionup-radon"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, token: token });
};
module.exports.loginUser = loginUser;


const getUserData = async function (req, res) {

let userId = req.params.userId;
if (!userId) return res.send("No such user exists");
  let userDetails = await userModel.findById(userId);
 
  res.send({ status: true, data: userDetails });
};

module.exports.getUserData =getUserData;


const updateUser = async function (req, res) {

 let userId = req.params.userId;
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, {new:true});
  res.send({ status: true, data: updatedUser });
};

module.exports.updateUser = updateUser;


const deleteUser = async function (req, res) {

      let userId = req.params.userId;
     let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, {$set:{isDeleted:true}}, {new:true});
      res.send({ status: true, data: updatedUser });
    };

module.exports.deleteUser =deleteUser


const postMessage = async function(req, res){
   
  let userId = req.params.userId;
  let user =await userModel.findById(userId)
// if(!user) return res.send({status:false, msg:"no such user exist"})
console.log(user)
    let message = req.body
    let updatedPosts = user.posts
    //add the message to user's posts
    updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})

    //return the updated user document
    return res.send({status: true, data: updatedUser})

}

module.exports.postMessage=postMessage
