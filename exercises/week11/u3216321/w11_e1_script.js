//Exercise 1
//Drawing using classes

function setup() {
    createCanvas(720, 400);
    background(255);
}

function draw() {
    var winA = new aWindow(100, 100, 5, 'red');
    winA.drawWindow();
    
    winA.setPos(300, 10);
    winA.setOptions(15, 'purple');
    winA.drawWindow();
}








