const ProductModel = require("../models/productModel");

const createProduct = async function(req,res){
    let body = req.body;

    let saveData = await ProductModel.create(body)
    res.send({msg: saveData})
};
module.exports.createProduct =createProduct;