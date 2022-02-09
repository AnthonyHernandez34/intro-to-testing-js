// helloWorld function //
const helloWorld = function() {
    return "Hello, World!";
}
// SayHello test function //
const sayHello = function(name) {
    if(typeof name !== "string"){
        return "Hello, World";
    }
    return "Hello, " + name;
}
// IsFive all Green see tests.js to confirm //
function isFive(input){
    if(typeof input === "number"){
        return (Number(input)===5)
    }else return false;
}
// isEven input should be opened with no fixed structured input //
function isEven(input) {
    if (typeof input === "number" && (input) % 2 === 0){
        return true
    }else
     return false
}

//