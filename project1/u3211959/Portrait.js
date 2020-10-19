// Self portrait as a simpsons character
// Clicking makes glasses fall down


  //create canvas size 
function setup() {
  createCanvas(400,400);
}
function draw() { 
  drawABackground();
  drawAPortrait();
}
//Function draw Background
function drawABackground() {
  background ('cyan'); //changing the colour
}

//Function drawAPortrait

function drawAPortrait() {
  //CALL drawHead
  drawHead();

  //CALL drawChin
  drawChin();

  //CALL drawEyes
  drawEyes();

  //CALL drawEar
  drawEar();
  
  //CALL drawMouth
  drawMouth();

  //CALL drawHair
  drawHair();

  //CALL drawGlasses
  drawGlasses();
}

// function drawHead
function drawHead () {
  strokeWeight(1)//change stroke size
  fill('yellow')//chaning colour to yellow
  rect(100, 50, 200, 200, 25);//size of characters head

}
//CALL drawChin
function drawChin () {
  fill('yellow')//chaning colour to yellow
  rect(160, 210, 140, 100, 20);//size of characters chin
  rect(100, 50, 200, 200, 25);//second chin to cover the line between the head and chin
  noStroke(); //remove black lines
  fill('yellow')//chaning colour to yellow
  rect(160, 210, 140, 100, 20);//third chin to keep lines underneath

}

function drawMouth () {
  stroke(51);//stroke colour
  line(160, 250, 200, 240);//mouth
}

function drawEyes () {
  //Left eye
  stroke(51);//stroke colour
  strokeWeight(1)//weight of stroke
  fill('white');//colour of eye
  ellipse(120, 120, 80, 80);

  //Right eye
  ellipse(170, 120, 80, 80);//position and size

  //Left pupil
  fill('black');//colour of pupil
  ellipse(120, 120, 10, 10);//position and size

  //Right pupil
  ellipse(170, 120, 10, 10);//position and size

}

function drawEar() {
  fill('yellow')
  ellipse(280, 190, 40, 40); //outer ear
  line(280, 190, 270, 180); //inner ear
  strokeWeight(2)//weight of strokes
  line(290, 185, 267, 180);//position and size
}

function drawHair() {
  noStroke();//to remove strokes
  fill(144, 93, 4);//colour of hair
  rect(220, 50, 80, 100, 25);//position and size, main hair
  rect(90, 50, 160, 30, 25);//position and size, main hair
  triangle(85, 80, 100, 30, 120, 80);//spikes at the front
  triangle(105, 80, 120, 30, 140, 80);//spikes at the front
}

function drawGlasses () {
  //clicking mouse creates the glasses
  if(mouseIsPressed) {

    //Right Lens
    fill('silver')//colour of glasses
    stroke(54);//stroke colour
    strokeWeight(6);//weight of stroke
    rect(70, 80, 70, 80, 25);//position and size

    //Left Lens
    fill('silver')//colour of glasses
    stroke(54);//stroke colour
    strokeWeight(6);//weight of stroke
    rect(130, 80, 80, 80, 25);//position and size

    //Glasses bar
    fill(0);//colour of bar
    stroke(0);//stroke colour
    strokeWeight(6);//weight of stroke
    rect(215, 106, 82, 15);//position and size



  } else {
    print(mouseIsPressed)//to remove glasses if not pressed
  }
}
