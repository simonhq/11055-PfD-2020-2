/* Always write a comment at the top of your file saying what is for
you might even include your name and the date */

// Object orientation

/* writing a class

*/

/* requires the p5 library */

function setup() {
    // Sets the screen to be 720 pixels wide and 400 pixels high
    createCanvas(720, 400);
    background(255);
}

function draw() {
    var flA = new aFloor(100, 100, 4, 200, 3, false);
    flA.drawFloor();
    
}








