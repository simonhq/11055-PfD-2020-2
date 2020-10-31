/* This is exercise 4 of week  9 in OOP 
Lea Jehanno */


/* write the following in a object oriented way

ask the user of the program for a number, store it
check that if the sum of both numbers is under 10, tell the user 'too small'
check that if the sum of both numbers is over 10, tell the user 'too big'
check that if the sum of both numbers is 10, tell the user 'perfect'

*/

// ask the user of the program for a number, store it
number1 = prompt("Enter a number");
if (number1)
{ 
   number2 = prompt("Enter another number");
}

if (number1 + number2 < 10)
{
    alert("Your number is too small");
}

else (number1 + number2 > 10)
{
    alert("Your number is too big");
}

if (number1 + number2 == 10)
{
    alert("Perfect");
}
