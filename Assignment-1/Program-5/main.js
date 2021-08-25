// Problem Statement : Accept one number from user and print that number of * on screen.

const prompt = require('prompt-sync')({sigint:true});

function display(iNo)
{
    for(i=0;i<iNo;i++)
    {
        console.log('*');
    }
}

var iNo = prompt("Enter a number : ");

display(iNo);