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

//Question 12 starting testing phase line item 1 //

function isVowel(input=false) {
    let vowel = 'a' || 'e'
    return (input.toString().toLowerCase() === vowel);
}

//question 13//

function add(num, num1){
    return (Number(num) + Number(num1));
}