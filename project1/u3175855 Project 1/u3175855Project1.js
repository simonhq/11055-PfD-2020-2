//Creating variables that will determine the colour of the background dots
let r;
let g;
let b;

let spot = {
  x: 50,
  y: 50,
  size: 20
};

let col = {
  r: 233,
  g: 21,
  b: 21
};

// Creates the Canvas, sets framerate to 3 and generates a random background colour
function setup() {
  createCanvas(400,400);
  frameRate(3);
  background(random(225), random(225), random(225));
}

function draw() {
  //mouse circle
  fill(255, 192, 203, 70)
  noStroke();
  circle(mouseX, mouseY, 30)

  //dots
  spot.x = random(0, width);
  spot.y = random(0, 350);
  spot.size = random(5, 30);
  col.r = random(233, 15);
  col.g = random(21, 53);
  col.b = random(21, 53);
  fill(col.r, col.g, col.b);
  noStroke();
  circle(spot.x, spot.y, spot.size);
  
  //Variables which determine colour of shapes 
  var mouth = color(0,0,0);
  var head = color(249, 199, 169);
  var neck = color(249, 199, 169);
  var shadow = color(239, 182, 148);
  var hair = color(81, 58, 38);
  var shirt = color(random(255), random(255), random(255));
  var black = color(0, 0, 0);
  var eye = color(255,255,255);
  
 //drawing the length of the neck
  noStroke();
  fill(neck);
  rect(165, 200, 70, 100);

  //draws the rectangle that makes up most of the shirt
  fill(shirt);
  rect(115, 275, 170, 130);

  //two ellipses make up the shoulders of the shirt
  fill(shirt);
  ellipse(120, 395, 120, 240);
  
  fill(shirt);
  ellipse(280, 395, 120, 240);

  //base of the neck can now be added
  fill(neck);
  ellipse(199, 275, 70, 60);
  
  //shadow for the head
  fill(shadow);
  ellipse(199, 210, 80, 100);
  
  //draw head, plus two ellipses for ears
  fill(head);
  ellipse(199, 170, 120, 160);  
  ellipse(138, 173, 20, 40);
  ellipse(260, 173, 20, 40);

  //Draw Mouth
  fill(mouth);
  ellipse(199, 225, 25, 12);
  
  //Draw Hair
  fill(hair);
  quad(255, 180, 230, 115, 251, 100, 257, 150);
  ellipse(240, 108, 25, 30);
  ellipse(190, 100, 100, 45);
  quad(145, 180, 155, 115, 141, 100, 137, 150);
 
  //Draw Eye
  fill(eye);
  ellipse(175,173,20,12);
  ellipse(225, 173,20,12);
  noStroke();
  
  //Draw Pupil
  fill(black);
  ellipse(175, 173, 6, 6);
  ellipse(225, 173, 6, 6);
  
  //Draw Eyebrows
  stroke(black);
  strokeWeight(5);
  line(182, 159, 160, 160);
  line(213, 159, 233, 160);
  
}

//This allows the background to change colour when mouse is pressed
 function mousePressed() {
   background(random(225), random(225), random(225));
  }

