/* Always write a comment at the top of your file saying what is for
you might even include your name and the date */

// Object Oriented

/* write the following in a object oriented way

ask the user of the program for a number, store it
ask the user of the program for a number, store it
check that if the sum of both numbers is under 10, tell the user 'too small'
check that if the sum of both numbers is over 10, tell the user 'too big'
check that if the sum of both numbers is 10, tell the user 'perfect'

*/

const number1Input = document.getElementById("number1");
const number2Input = document.getElementById("number2");
const submitButton = document.getElementById("submit-button");

let inputNumbers;

const checkValues = (num1, num2) => {
    if (num1 + num2 < 10) {
        alert("Too small");
    } else if (num1 + num2 > 10) {
        alert("Too large");
    } else if (num1 + num2 === 10){
        alert("Perfect");
    }
};

const addValues = () => {
    let num1 = parseInt(number1Input.value);
    let num2 = parseInt(number2Input.value);

    inputNumbers = {
        value1: num1,
        value2: num2
    };

    checkValues(num1, num2);
};






submitButton.addEventListener("click", addValues)






