
let jwt =require("jsonwebtoken")

const authenticate = async function(req,res,next){
  try{
    let token = req.headers["x-Auth-token"] || req.headers["x-auth-token"];

  if (!token) return res.status(400).send({ status: false, msg: "token must be present" });

  // console.log(token);

  jwt.verify(token,"functionup-radon",function (err, data) {

    if(err) return res.status(500).send({ status: false, message: err.message})
   } )
        
  }catch(err){
    res.status(500).send({msg:err.msg})
  }
  next()
    }

  
  // let decodedToken = jwt.verify(token, "functionup-radon")
  // if (!decodedToken)
  //   return res.send({ status: false, msg: "incorrect token"});
  
//     next();
// }
module.exports.authenticate =authenticate


const authorise = function(req, res, next) {
  try{
    let token = req.headers["x-Auth-token"] || req.headers["x-auth-token"]
    // if (!token) token = req.headers["x-auth-token"]
    
    let decodedToken = jwt.verify(token, "functionup-radon");
    
    // comapre the logged in user's id and the id in request
    let userToBeModified = req.params.userId
    //userId for the logged-in user
    let userLoggedIn = decodedToken.userId

    //userId comparision to check if the logged-in user is requesting for their own data
    if(userToBeModified != userLoggedIn) return res.status(401).send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
  }catch(err){
    res.status(500).send({msg:err.msg})
  }
    
    next()
}


module.exports.authorise =authorise

























// const authenticate = function(req, req, next) {
//     //check the token in request header
//     //validate this token

//     next()
// }


// const authorise = function(req, res, next) {
//     // comapre the logged in user's id and the id in request
//     next()
// }