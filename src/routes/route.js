const express = require('express');
const router = express.Router();

const ProductController =  require("../controllers/productController")
const UserController= require("../controllers/userController")
const CommonMW = require ("../middlewares/commonMiddlewares")
const OrderController= require("../controllers/orderController")



router.post("/product",ProductController.createProduct);
router.post("/user",CommonMW.midF,UserController.createUser)
router.post("/order", CommonMW.midF, OrderController.placeOrder)
router.post("/users",UserController.createUser1)
router.post("/orders", OrderController.createOrder);

module.exports = router;