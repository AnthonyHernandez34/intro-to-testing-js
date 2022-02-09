// helloWorld function
const helloWorld = function() {
    return "Hello, World!";
}
const sayHello = function(name) {
    if(typeof name !== "string"){
        return "Hello, World";
    }
    return "Hello, " + name;
}

function isFive(input){
    if(typeof input === "number"){
        return (Number(input)===5)
    }else return false;
}

function isEven(){
    return "function"
}