// Premitive Data type
// string (text), anything that somes between single ('') or double ("") quote is called string
// 'hello', '10', "world", "1000.99"
// number, any number or integer with decimle or without decimal that comes without double or single qoute is called number  
90, 100, 1, 200.65
// boolean,  ture/false
// true , false
// undefined, undefined
// null, error : null == we got something empty,


// Referrence data type
// object, ek aysa data jiske andar mujhe methods bhi hain and kuch properties bhi hain
// array == a list of similer items, a collection of similer items, list
// date == date


// Variable Defining
let val;

// Initialization
// val = 10;
// Reassigning
// val = 300;
// Reassining
// val = 400;
// val = true
// val = false
// val = undefined;
// val = null
val = {
    name: 'imran',
    email: 'imran@gmial.com',
    address: 'okhla',
    phone: '1234567890',
    printName: function () {
        console.log('Hello my name is ' + this.name);
    }
}
// array 
val = ['imran', 'rahul', 'waseem', 'qamar', 'omar'];
let registereCar = ['Ford', 'XUV', 'thar', 'BMW'];

let date = new Date();

console.log(registereCar)