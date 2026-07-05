// Non-Primitive
// string
let name = "uvesh"
console.log(typeof name);

// Number 
let num = 12;
let num2 = 12.5;
console.log(typeof num,typeof num2);

// Boolean
let isPass = true;
let isFail = false;
console.log(typeof isPass);

// undefined
let carName;
console.log(typeof carName);

// Null
let carPrice = null;
console.log(typeof carPrice);

// bigNum
let price = 123n;
console.log(typeof price);

// symbol
let oval = Symbol(); 
console.log(typeof oval);


// Primitive
// Object
const Obj = {
    name : "uvesh",
    rollNum : 4
};
console.log(typeof Obj);

// Array
const Arr = [1, 2, 3];
console.log(typeof(Arr));

// Function
function print()
{
    console.log("Hello");
}
console.log(typeof print);


