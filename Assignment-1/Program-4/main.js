// Problem Statement : Accept one number and check whether is is divisible by 5 or not.

// required for prompt in nodejs
const prompt = require('prompt-sync')({sigint: true});

function chkDivisibility(iNo)
{
    if(iNo%5==0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

var iNo = prompt('Enter a number : ');

iRet = chkDivisibility(iNo);

if(iRet)
{
    console.log(iNo+" is divisible by 5");
}
else
{
    console.log(iNo+" is not divisible by 5");
}