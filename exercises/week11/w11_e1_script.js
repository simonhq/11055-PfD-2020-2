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
    var winA = new aWindow(100, 100, 5, 'red');
    winA.drawWindow();
    
    winA.setPos(250, 80);
    winA.setOptions(10, 'blue');
    winA.drawWindow();

    var winB = new aWindow(200,400, 3, 255);
    winB.drawWindow();

}








