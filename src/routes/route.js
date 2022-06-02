const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();

router.get('/movies', function (req, res) {
    let arrMovies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins'];
   console.log("program runs successfully");
    res.send(arrMovies);
});

router.get('/movies/:indexNumber', function (req, res) {
    let movieArr = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins','Thor','Ironman'];

    let id = req.params.indexNumber;

    if(id<movieArr.length){

        res.send({data:movieArr[id]})
    }else{
        res.send({Result :"send a proper index"})
    }
      // res.send(movieArr[id];
    });

router.get('/film', function (req, res) {
   let movieObj= [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       },{
           "id":5,
           "name":"Harry Potter",
       },{
           "id":6,
           "name":"Big City"
       }]
       
    res.send(movieObj)
});

router.get('/film/:filmId', function (req, res) {
    let movieObj= [ {
         "id": 1,
         "name": "The Shining"
        }, {
         "id": 2,
         "name": "Incendies"
        }, {
         "id": 3,
         "name": "Rang de Basanti"
        }, {
         "id": 4,
         "name": "Finding Nemo"
        },{
            "id":5,
            "name":"Harry Potter",
        },{
            "id":6,
            "name":"Big City"
        }]

        let filmIndex =req.params.filmId;
        if(filmIndex<movieObj.length){
            res.send(movieObj[filmIndex])
        }else{
            res.send({Result : "No movie exists with this id"})
        }
        
     
 });
module.exports = router;
