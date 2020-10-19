/*  Programming for Design
    Project 1 - Self Portrait
    Keir Herbert (u3211239)
    September 2020
*/

//  Declare constants, variables, and set up important environmental factors.

//  This constant refers to the size of the original pixel matrix from which coordinates were sourced.
const matrix = 200;

//  Call the getScaleFactor function and set the scaleFactor variable to an initial value related to current screen size.
var scaleFactor = getScaleFactor();

//  Utilise the scaleFactor variable to set up an appropriately sized canvas on which to plot the image, then place it in position.
function setup() {
    canvas = createCanvas(matrix * scaleFactor, matrix * scaleFactor);
    canvas.position(150, 75, 'fixed');

// Turn off the stroke so that we don't see the circle outlines.
    noStroke();

<<<<<<< HEAD
/*  Create the slider controls. Three are for the colour channels, a fourth allows for adjustment of
    the maximum circle diameter, a fifth slider controls the maximum triangle height, and the sixth
    adjusts the frame rate (how many times the image is drawn each second).
    Set the respective widths of each slider control and position them on the left side of the screen.
=======
/*  Create the slider controls. Three are for the colour channels, a fourth allows for adjustment of the maximum circle diameter, a
    fifth slider controls the maximum triangle height, and the sixth adjusts the frame rate (how many times the image is drawn each
    second). Set the respective widths of each slider control and position them on the left side of the screen.
>>>>>>> master
*/
    redSlider = createSlider(0, 255, 63);
    redSlider.style('width', '140px');
    redSlider.position(8, 255);
    greenSlider = createSlider(0, 255, 81);
    greenSlider.style('width', '140px');
    greenSlider.position(8, 292);
    blueSlider = createSlider(0, 255, 181);
    blueSlider.style('width', '140px');
    blueSlider.position(8, 329);
    heightSlider = createSlider(2, 48, 12);
    heightSlider.style('width', '140px');
    heightSlider.position(8, 366);
    diameterSlider = createSlider(2, 48, 8);
    diameterSlider.style('width', '140px');
    diameterSlider.position(8, 366);
    framerateSlider = createSlider(1, 24, 5);
    framerateSlider.style('width', '140px');
    framerateSlider.position(8, 403);

//  Create and position the radio buttons which allow selection of the shape geometry.
    shapeSelector = createRadio();
    shapeSelector.option(0, ' triangular');
    shapeSelector.option(1, ' circular');
    shapeSelector.position(24, 440);
    shapeSelector.style('width', '95px');
    shapeSelector.selected('0');
}

<<<<<<< HEAD
/*  This function is called if the browser window is resized or moved to another monitor (which is the scenario I
    want to catch), in which event it redraws the canvas in keeping with the screen resolution.
=======
/*  This function is called if the browser window is resized or moved to another monitor (which is the scenario I want to catch),
    in which event it redraws the canvas in keeping with the screen resolution.
>>>>>>> master
*/
function windowResized() {

//  Re-evaluate the scaleFactor variable in case the web page has been moved to a screen with different resolution.
    scaleFactor = getScaleFactor();

//  Resize the canvas accordingly.
    resizeCanvas(matrix * scaleFactor, matrix * scaleFactor);
}

/*  This is the main draw function loop which runs until our Sun collapses into itself, or until you close the
    web page ... whichever comes first.
*/
function draw() {

//  The screen is cleared before each new plot cycle is commenced.
    clear();

//  Set the frame rate according to the slider control value.
    frameRate(framerateSlider.value());

//  Set the fill colour to the values specified by the slider controls.    
    fill(redSlider.value(), greenSlider.value(), blueSlider.value());

/*  This loop reads the array that was dimensioned in "coordinates.js".
<<<<<<< HEAD
    It goes row by row and retrieves the x and y values before applying the getScaleFactor() multiplier,
    in order to space them out proportionally. Finally, they're passed to the circle function to be
    drawn on the canvas.
=======
    It goes row by row and retrieves the x and y values before applying the getScaleFactor() multiplier, in order to space them out
    proportionally. Finally, they're passed to the circle or triangle function to be drawn on the canvas.
>>>>>>> master
*/
     for (let row = 0; row < coordinates.length; row++) {
        x = (coordinates[row] [0]) * scaleFactor;
        y = (coordinates[row] [1]) * scaleFactor;
        switch(shapeSelector.value()) {
            case '0':
                diameterSlider.hide();
                heightSlider.show()

<<<<<<< HEAD
/*  The height of the triangles and the diameter of the circles are both random-ish.
    Values from the respective slider controls are obtained and then fed into a random process as
    maximum values. In both instances there's a hard-coded minimum value of 2.
    Inside that limited range it chooses randomly ... well, as much as computers can.
    The resulting variation in triangle height or circle diameter creates the interesting motion
    effect.
=======
/*  The height of the triangles and the diameter of the circles are both random-ish. Values from the respective slider controls are
    obtained and then fed into a random process as maximum values. In both instances there's a hard-coded minimum value of 2.
    Within that limited range it chooses randomly ... well, as much as computers can. The resulting variation in triangle height or
    circle diameter creates the interesting motion effect.
>>>>>>> master
*/
                height = Math.floor(Math.random() * heightSlider.value()) + 2;
                createTriangle(x, y, height);
                break;
            case '1':
                heightSlider.hide();
                diameterSlider.show();
                diameter = Math.floor(Math.random() * diameterSlider.value()) + 2;
                circle(x, y, diameter);
                break;
        }
    }
}