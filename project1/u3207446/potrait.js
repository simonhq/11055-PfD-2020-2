//CREATE canvasWidth, canvasHeight
//SET canvasWidth = 800
//SET canvasHeight = 800
var canvasWidth = 800;
var canvasHeight = 800;


// A0
function setup() {
    // CREATE Canvas : Variables (canvasWidth and canvasHeight)
    createCanvas(canvasWidth, canvasHeight);
}


function draw() {

    // A1 - CALL Background
    drawBackground();

    // A2 - CALL Portrait
    drawPortrait();

}


// A1 - FUNCTION Background
function drawBackground() {

    // CREATE rValue, gValue
    // SET rValue = Calculation using MouseX and canvasWidth
    // SET gValue = Calculation using MouseY and canvasHeight
    var rValue = map(mouseX, 0, canvasWidth, 0, 255);
    var gValue = map(mouseY, 0, canvasHeight, 0, 255);
    
    // DRAW Background using rValue and gValue
    background(rValue, gValue, 255-rValue);

};

// A2 - FUNCTION Portrait
function drawPortrait() {

    // A2.1 - CALL drawBody
    drawBody();
    // A2.2 - CALL drawFace
    drawFace();
    // A2.3 - CALL drawTshirt
    drawTshirt();
    // A2.4 - CALL drawJacket
    drawJacket();
    // A2.5 - CALL drawHair
    drawHair();
    // A2.6 - CALL drawEyes
    drawEyes();
    // A2.7 - CALL drawNose
    drawNose();
    // A2.8 - CALL drawMouth
    drawMouth();

};

// A2.1 - FUNCTION drawBody
function drawBody() {

    // USE Vertices to draw body shape
    fill(255, 229, 204);
    beginShape();    
    vertex(0, 770);
    vertex(260, 690);
    vertex(300, 660);
    vertex(294, 458);
    vertex(500, 460);
    vertex(500, 660);
    vertex(540, 690);
    vertex(798, 770);
    endShape(CLOSE);

}

// A2.2 - FUNCTION drawFace
function drawFace() {

    // USE Vertices to draw face
    stroke(229, 206, 183);
    strokeWeight(4);
    beginShape();
    curveVertex(399, 0);
    curveVertex(220, 70);
    curveVertex(160, 200);
    curveVertex(230, 520);
    curveVertex(300, 600);
    curveVertex(370, 640);
    curveVertex(420, 640);
    curveVertex(500, 600);
    curveVertex(570, 520);
    curveVertex(640, 200);
    curveVertex(556, 70);
    endShape(CLOSE);

}

// A2.3 - FUNCTION drawTshirt
function drawTshirt() {

    // USE vertices to draw tshirt
    // Draw Tshirt Whitepart
    fill(255, 255, 255);
    beginShape();
    vertex(130, 799);
    vertex(250, 700);
    vertex(400, 760);
    vertex(560, 700);
    vertex(682, 799);
    endShape(CLOSE);

    // USE vertices to draw tshirt
    // Draw Tshirt Border
    fill(220, 220, 220);
    strokeWeight(4);
    stroke(128, 128, 128);
    beginShape();    
    vertex(230, 700);
    vertex(400, 780);
    vertex(560, 700);
    vertex(560, 680);
    vertex(400, 760);
    vertex(230, 680);
    endShape(CLOSE);

}

// A2.4 - FUNCTION drawJacket
function drawJacket() {
    
    strokeWeight(2);
    stroke(47, 79, 79);
    fill(63, 130, 164);

    // USE vertices to draw left shoulder
    beginShape();
    vertex(0, 760);
    vertex(260, 680);
    vertex(210, 730);
    vertex(220, 799);
    vertex(0, 799);
    endShape(CLOSE);

    // USE vertices to draw right shoulder
    beginShape();
    vertex(799, 760);
    vertex(580, 680);
    vertex(600, 720);
    vertex(600, 799);
    vertex(799, 799);
    endShape(CLOSE);


    // USE vertices to draw left collar
    beginShape();
    curveVertex(300, 600);
    vertex(140, 750);
    vertex(180, 798);
    vertex(250, 798);
    vertex(240, 720);
    vertex(300, 660);
    endShape(CLOSE);

    // USE vertices to draw right collar
    beginShape();
    curveVertex(500, 600);
    vertex(670, 750);
    vertex(620, 798);
    vertex(550, 798);
    vertex(570, 720);
    vertex(500, 660);
    endShape(CLOSE);

}

// A2.5 - FUNCTION drawHair
function drawHair() {

    beginShape();
    curveVertex(205, 440);
    curveVertex(198, 260);
    curveVertex(260, 130);
    curveVertex(408, 200);  // Tip of front hair
    curveVertex(550, 130);
    curveVertex(606, 254);
    curveVertex(598, 428);
    curveVertex(652, 274);
    curveVertex(656, 174);
    curveVertex(616, 84);
    curveVertex(562, 34);
    curveVertex(508, 10);
    curveVertex(400, 2);
    curveVertex(302, 2);
    curveVertex(240, 28);
    curveVertex(200, 72);
    curveVertex(146, 162);
    curveVertex(142, 284);
    endShape(CLOSE);

}

// A2.6 - FUNCTION drawEyes
function drawEyes() {

    // Draw Eye Outline
    fill(255,255,255);
    strokeWeight(2);

    // DRAW ellipse for left eye
    ellipse(310, 300, 80, 50);
    // DRAW eppipse for right eye
    ellipse(500, 300, 80, 50); 
    
    // CALL drawEye for left eye
    drawEye(312,300);
    // CALL drawEye for right eye
    drawEye(500,300);

}

// A2.6.1 - FUNCTION drawEye
function drawEye(x, y) {
    
    noStroke();
    fill(87, 107, 168, 200);

    // DRAW Circle for Iris
    circle(x, y, 48);

    
    fill(0,100);

    // DRAW Circle for Pupil
    circle (x, y, 20);
}



// A2.7 - FUNCTION drawNose
function drawNose() {

    noFill();
    stroke(47, 79, 79);
    strokeWeight(2);

    // USE vertices to draw nose
    beginShape();
    curveVertex(388, 369);
    curveVertex(388, 369);
    curveVertex(379, 440);
    curveVertex(365, 469);
    curveVertex(375, 489);
    curveVertex(382, 493);
    curveVertex(382, 493);
    endShape();

    beginShape();
    curveVertex(410, 367);
    curveVertex(410, 367);
    curveVertex(420, 441);
    curveVertex(440, 464);
    curveVertex(440, 479);
    curveVertex(432, 491);
    curveVertex(426, 496);
    curveVertex(426, 496);
    endShape();

    beginShape();
    curveVertex(373, 480);
    curveVertex(386, 489);
    curveVertex(397, 499);
    curveVertex(412, 500);
    curveVertex(425, 488);
    curveVertex(434, 483);
    endShape();

}

// A2.8 - FUNCTION drawMouth
function drawMouth() {

    strokeWeight(4);
    
    // USE vertices to draw Mouth
    beginShape();
    curveVertex(345, 543);
    curveVertex(345, 543);
    curveVertex(369, 545);
    curveVertex(390, 544);
    curveVertex(406, 547);
    curveVertex(431, 544);
    curveVertex(455, 542);
    curveVertex(468, 539);
    curveVertex(468, 539);
    endShape();

    fill(229, 206, 183);
    stroke(229, 206, 183);
    strokeWeight(1);

    // DRAW arc to draw shadow below mouth
    arc(405, 555, 30, 30, 0, PI, OPEN);

}







