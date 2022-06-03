const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: String, // String is shorthand for {type: String}
    lastName: String,
    mobile: {
        type: String,
        unique: true,
        required: true
    },
    emailId: String, 
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"]  //"falna" will give an error
    },
    age: Number,
    isIndian: Boolean,
    parentsInfo:{
        motherName:String,
        fatherName:String,
        siblingName:String
    },
cars:[String]    

}, {timestamps:true} );
 
module.exports = mongoose.model('User', userSchema); //User is name of collection in mongodB will convert to users

            

//schema me String, Number,array ,obje/json , Boolean ho skta h


