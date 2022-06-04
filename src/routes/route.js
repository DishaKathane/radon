const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")


const UserController= require("../controllers/userController");
const bookController= require("../controllers/bookController");

router.post("/createBook",bookController.createBook)

router.get("/getAllBooks",bookController.getBooksData )


// router.post("/createUser",UserController.createUser)


// router.get("/getUserData",UserController.getUsersData )




module.exports = router;