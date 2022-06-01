let string = "          FunctionUp is Indias Best Cooding Bootcamp    ";
const trim = () =>{
    console.log(`the trim() string is:-  ${string.trim()} \n` );
}

module.exports.trim =trim;


const lowerCase = function(){
    console.log(`the string in lowercase is:- ${string.toLocaleLowerCase()} \n `)
};

module.exports.lowerCase = lowerCase;


const upperCase = function(){
    console.log(`the string in lowercase is:- ${string.toUpperCase()} \n `)
};

module.exports.upperCase = upperCase;