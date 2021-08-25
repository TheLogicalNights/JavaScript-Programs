// Problem Statement : Program to divide two numbers

const prompt = require('prompt-sync')({sigint: true});

function divide(iNo1,iNo2)
{
    var iAns = 0;

    if(iNo2==0)
    {
        return false;
    }
    else
    {
        iAns = iNo1/iNo2;
    }

    return iAns;
}

var iNo1 = prompt("Enter first number : ");
var iNo2 = prompt("Enter second number : ");

iRet = divide(iNo1,iNo2);

if(iRet)
{
    console.log("Division is : "+iRet);
}
else
{
    console.error("Unable to divide with zero !!");
}