const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController");

router.get("/test-me", function(req,res){
    res.send("my first schema")
})

router.post("/createUser",UserController.createUser)


router.get("/getUserData",UserController.getUsersData )




module.exports = router;