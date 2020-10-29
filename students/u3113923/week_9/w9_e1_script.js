/* Always write a comment at the top of your file saying what is for
you might even include your name and the date */

// Object Oriented

/* 

Object oreintation lets you create objects that hold state over time.

It starts as a similar concept to arrays that you have a variable with many variables inside.
But it is much more than that.

*/


// Objects variables are called properties

// this is a simple object that has different properties within it.
var car = {name:"Corolla", brand:"Toyota", year:"2004", kms:70000};

// you can also write it like this
var car2 = {
    name:"Falcon", 
    brand:"Ford", 
    year:"2010", 
    kms:30000
};


// for can then access properties either like an array
document.write(car2["name"]);

// or directly using dot notation
document.write(car2.name)
