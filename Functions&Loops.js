// function
let button = document.querySelector('button')
let a = 100;
let b = 300;
let c = a + b;

// alert(c) function execution, function calling
// function printValue(x, y) {
//     alert('this function is running after click on button element');
// }
function chaiwala(numberOfCup) {
    console.log(numberOfCup + ' Cup chai ready hain')
}
chaiwala(10);
chaiwala(1)
chaiwala(12)
chaiwala(19)

// printValue();
// there are 2 types of functions ,, pre defined function, defined function
// alert, prompt, confirm, console.log(), console.table(), console.error(), console.warn(),
// chaiwala, printVsalue, 

// there are 4 type in both types of functions
// take somthing, return something
function sum(x, y) {
    let result = x + y;
    return result;
}
function subtract(x, y) {
    let result = x - y;
    return result;
}
function multiply(x, y) {
    let result = x * y;
    return result;
}
function devide(x, y) {
    let result = x / y;
    return result;
}


// take somthing, return nothing
function sub(x, y) {
    let result = x - y;
    alert(result);
}

function sayMyName(name) {
    let result = 'Good Morning ' + name;
    alert(result);
}
sayMyName('Afaque Zia');


// take nothing, return something
let score = 100;
function Staged() {
    score += 1;
    return 'Congrats, now your current score is ' + score;
}
console.log(Staged());
console.log(Staged());
console.log(Staged());
console.log(Staged());
console.log(Staged());

// take nothing, return nothing
function gameOver() {
    score = 0;
}
// console.log(gameOver());

// button.addEventListener('click', printValue)
//     functionKeyword functionName(parameters, data){

//     console.log(parameters + data);
// }


function calculate(a, b, operator) {
    let plus = sum(a, b);
    let minus = subtract(a, b);
    let multiple = multiply(a, b);
    let devided = devide(a, b);
    console.log(plus, minus, multiple, devided);
}

calculate(40, 100)






