//Exercise 3
//Drawing using classes

function setup() {
    // Sets the screen to be 720 pixels wide and 400 pixels high
    createCanvas(720, 400);
    background(255);
}

function draw() {
    
    var flA = new aFloor(100, 100, 4, 70, 3, false);
    flA.drawFloor();

    var drA = new aDoor(250, 150, 1, 200, true);
    drA.drawDoor();

}








