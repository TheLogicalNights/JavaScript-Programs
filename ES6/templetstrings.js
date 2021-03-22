// Template strings in ES6 provides new features to create a string that gives more control over dynamic strings. 
// Template literal is created using the backtick (`) character.

let string = "Swapnil";

var greetings = (name) =>{
    return `Hello ${name}`;
}

console.log(greetings(string));