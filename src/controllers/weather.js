let axios = require("axios")


let getweather = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=a2bf997473c65ee1a8bfe55f0e2847e9`
        }
        let result = await axios(options);
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getTempOfCity = async function (req, res) {

    try {

        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=a2bf997473c65ee1a8bfe55f0e2847e9`
        }
        let result = await axios(options);
        let data = result.data.main.temp
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

const getTemperature = async function (req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let arr = [];

        for (let i = 0; i < cities.length; i++) {
            let obj = { city: cities[i]}

            let options = {
                method: 'get',
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=a2bf997473c65ee1a8bfe55f0e2847e9`
            }
            let result = await axios(options);
            
            obj.temp = result.data.main.temp
            arr.push(obj)
        }
        let sortedCity = arr.sort((a, b) => {
            return a.temp - b.temp
        })
        res.status(200).send({ status: true, msg: sortedCity })

    } catch (err) {
        res.status(500).send({ msg: err.message })
    }
}

module.exports.getweather = getweather;
module.exports.getTemperature = getTemperature 
module.exports.getTempOfCity = getTempOfCity