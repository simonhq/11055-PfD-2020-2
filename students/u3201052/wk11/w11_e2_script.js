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

    //complications are taken out from this program into the templates w11_c2_script
    var flA = new aFloor(100, 100, 4, 200, 3, false); //true/false that its a ground or upper floor window
    flA.drawFloor();
    
}








