// The rest parameter (...) allows a function to treat an indefinite number of arguments as an array.

const sum = (...args) => {
    let summation = 0;
    for(var i=0;i<args.length;i++)
    {
        summation += args[i];
    }
    return summation;
}

var result = sum(1,2,3,4,5,6,7,8,9);
console.log(result);