function setup() {
    // Sets the screen to be 720 pixels wide and 400 pixels high
    createCanvas(720, 400);
    background(255);
}

function draw() {
    
    var aDoor = new Door(100, 100, 4, 0);
    Door.drawDoor();
    
}