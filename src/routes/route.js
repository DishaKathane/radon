const express = require('express');
const router = express.Router();

const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const commonMW = require ("../middlewares/commonMiddlewares")

router.get("/test-me-1", function (req, res) {
    res.send("Hello im  test-me-1!")
})

router.get("/test-me-2", function (req, res) {
    res.send("Hello im  test-me-2!")
})

router.get("/test-me-3", function (req, res) {
    res.send("Hello im  test-me-3!")
})

router.get("/test-me-4", function (req, res) {
    res.send("Hello im  test-me-4!")
})








router.post("/createBook", BookController.createBook  )




// router.post("/createUser", UserController.createUser  )
// router.get("/getUsersData", UserController.getUsersData)

module.exports = router;