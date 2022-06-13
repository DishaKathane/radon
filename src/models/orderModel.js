const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema( {
    userId:{
            type:ObjectId,
            ref:"User13june"
        },
    productId: {
            type:ObjectId,
            ref:"Product"
        },
    amount:Number ,
    isFreeAppUser: {
            type:Boolean,
            required:true
        }, 
    date:String
}, { timestamps: true });


module.exports = mongoose.model('Order', orderSchema) //users
