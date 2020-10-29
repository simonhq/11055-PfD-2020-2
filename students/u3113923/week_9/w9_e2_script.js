/* Always write a comment at the top of your file saying what is for
you might even include your name and the date */

// Object Oriented

/* 

Object oreintation lets you create objects that hold state over time.

It starts as a similar concept to arrays that you have a variable with many variables inside.
But it is much more than that.

*/

// Object functions are call methods

var car3 = {
    name:"Carnival", 
    brand:"Kia", 
    year:"2012", 
    kms:23000,
    startcar: function() {
        return this.brand + " " + this.name + " goes vroom";
    }
};

// NOTE the use of 'this' keyword - it always refers to the properties of the object it belongs to


// then you can call it - see how it looks the same as document.write()...
document.write(car3.startcar())

// also try this to see inside the function...
document.write(car3.startcar)



