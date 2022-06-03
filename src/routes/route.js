const express = require('express');


const router = express.Router();
//Write an api which gives the missing number in an array of integer starting from 1.... . eg- [1,2,3,5,6,7]: 4 is missing

router.get('/missingNo', function (req, res) {
    let arr =[1,2,3,5,6,7]
    let sum = 0 ;
    for(let i in arr){
        sum += arr[i];
    }
    let Lastdig = arr.pop();
    let consicutativeSum = Lastdig *(Lastdig + 1)/2;
    let missingNo =consicutativeSum -sum;
   
    res.send({ missingNo});
});

router.get('/missingNo1', function (req, res) {
    let arr =[33,34,35,37,38];
    let len =arr.length;
    let sum = 0 ;
    for(let i in arr){
        sum += arr[i];
    }
    firstDig = arr[0];
    let Lastdig = arr.pop();
    let consicutativeSum = (len +1) *(Lastdig + firstDig)/2;
    let missingNo =consicutativeSum -sum;
   
    res.send({ missingNo});
});


module.exports = router;
// adding this comment for no reason