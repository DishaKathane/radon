const endpoint ="https://www.functionup.org";
const batch = "radon"

const log = function(){
    console.log('I am inside the log function');
}

module.exports.log=log
module.exports.url=endpoint
module.exports.cohort=batch