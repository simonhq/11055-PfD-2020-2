/* Always write a comment at the top of your file saying what is for
you might even include your name and the date */

// Object orientation

/* writing a class

*/

/* requires the p5 library */

function setup() {
    // Sets the screen to be 720 pixels wide and 400 pixels high
    createCanvas(720, 700);
    background(255);
}

function draw() {
    var winA = new aWindow(100, 100, 5, 'red'); //here we create new variable "winA" which is a window object
    winA.drawWindow(); //this is the method of this object
    
    //then we call other methods where we pass more information to it, then draw again

    winA.setPos(250, 80);
    winA.setOptions(10, 'blue');
    winA.drawWindow();

    //From here you've encapsulated the complicated stuff your program is doing, because the object is doing all the work for you
    //you can then create multiple classes

    //this is a separate window, a third one in a different position
    var winB = new aWindow(200, 400, 3, 255)
    winB.drawWindow();
}








