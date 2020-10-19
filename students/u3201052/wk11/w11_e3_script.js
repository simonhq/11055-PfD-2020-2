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
    
    var flA = new aFloor(100, 100, 5, 100, 2, false);
    flA.drawFloor();

    var doA = new aDoor(310, 150, 2, 200, false, 50, 100);
    doA.drawDoor();
    // call your new class correctly
    
}








