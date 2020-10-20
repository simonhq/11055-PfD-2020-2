/* Always write a comment at the top of your file saying what is for
you might even include your name and the date */

// Object orientation

/* writing a class

*/

/* requires the p5 library */

//note keyword "class" which allows you to use "new" keyword in 'script' program (see w11_e1_script.js)
//contructor function is also called from this, see below, which allows information to be passed (x, y, size, colour, etc.)
class aWindow {
    
    /*
    x = position from the left
    y = position from the top
    size = the size of the window 1 = 25 pixel window, 2 = 45 pixel window
    colour = either a string name or a number from 0-255 for grey scale
    */

    //constructor is the main driver for when we use the new keyword, lets you use numbers or words interchangeably, e.g. from 'red' to '255'
    //properties are not shared, concepts are independent of each other
    //aWindow uses this constructor for its class
    constructor(x, y, size, colour) { // - contrsuctor things it must have)
        this.x = x; //here, you're passing x into this variable x (this specific instance/class)
        this.y = y;
        this.size = size;
        this.colour = colour;
    }

    setPos(x, y) { //remember that in object world (class aWindow), functions are called methods and variables are called properties
        this.x = x;
        this.y = y;
    }

    setOptions(size, colour) {
        this.size = size;
        this.colour = colour;
    }

    //you could split these properties into 4

    //this method does not draw parameters
    //everything referenced in here starts with "this" keyword. Therefore, when these are being run for winA, it uses all the properties assigned to winA (vice versa with winB)
    //the following uses p5 functions
    drawWindow() {
        
        // use the provided colour
        fill(this.colour); // = colour is set to whatever colour was set at bginning of this script
        // this draws 4 squares based upon the x & y position with a 5 pixel gap to draw a window / draws the four rectangles and maintains space between them
        //now, instead of drawing four rectangles to draw window, you just create one variable and pass what colour, zie, etc. you want, then will draw window whenever you want it to be drawn        rect(this.x, this.y, this.size * 10, this.size * 10); // object here is rectangle where you must (pass in the values)
        rect(this.x + this.size * 10 + 5, this.y, this.size * 10, this.size * 10);
        rect(this.x, this.y + this.size * 10 + 5, this.size * 10, this.size * 10);
        rect(this.x + this.size * 10 + 5, this.y + this.size * 10 + 5, this.size * 10, this.size * 10);

    }

}

