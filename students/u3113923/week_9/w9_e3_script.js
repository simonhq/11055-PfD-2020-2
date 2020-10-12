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



// using objects in simple loops
for (x in car3) {
    document.write(car3[x]);
}

// you can add new properties as you go - thus you must be careful with your spelling
car3.colour = "blue";

document.write(car3.colour)

// or remove properties
delete car3.year;


// you can also add in functions as you go
car3.stopcar = function () {
    return this.brand + " " + this.name + " goes silent";
};

document.write(car3.stopcar())


