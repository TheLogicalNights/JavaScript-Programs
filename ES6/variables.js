// Variable creating using let and const

// 1) The let keyword allows ud to declare a variable with block scope.
// 2) The const keyword allows us to declare a constant (a JavaScript variable with a constant value).

let iNo = 10;
{
    let iNo = 5;
    console.log(iNo);
}
console.log(iNo);

const iNumber = 15;
console.log(iNumber);
// iNumber = 80;  Reassigning is not allowed