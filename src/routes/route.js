const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController");
const weatherController = require("../controllers/weather");
const memesController = require("../controllers/memesController");


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.post("/cowin/getOtp", CowinController.getOtp)
router.get("/cowin/getsessions", CowinController.getsessionsByDistrict)


router.get("/getweather",weatherController.getweather )
router.get("/getTempOfCity",weatherController.getTempOfCity)
router.get("/getTemp",weatherController.getTemperature);


router.post("/allMemes",memesController.allMemes );
router.post("/memes",memesController.memes)

module.exports = router;