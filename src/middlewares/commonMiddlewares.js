const express = require('express');

const midF= function ( req, res, next) {

    let header = req.headers
   let appType = header["isFreeAppUser"] 
    if(!appType)  appType = header["isfreeappuser"];

if(!appType){

    res.send({msg: " the request is missing a mandatory header"}) ;
}else{
    next()
}
}


module.exports.midF= midF
