/*  Programming for Design
    Project 1 - Self Portrait
    Keir Herbert (u3211239)
    September 2020
*/

/*  This function creates an equilateral triangle based on only a centre position and a height value.
    Normally you'd need to pass 3 points to the standard triangle function so that it could draw 3
    lines between them. This function will generate those points itself (relative to the centre
    point). It doesn't even use trigonometry ... which is nice for the CPU.
*/
function createTriangle(x, y, height) {

//  Break the triangle's height into 3 equal segments.
    var segment = height / 3

//  Determine the position of the first point relative to the centre.
    var xPoint1 = x;
    var yPoint1 = (y - segment * 2);    //  The top of the triangle is 2 segments above the centre.

//  Determine the position of the second point (moving clockwise) relative to the centre.
    var xPoint2 = (x + segment * 2);
    var yPoint2 = (y + segment);        //  The base of the triangle is 1 segment below the centre.

//  Determine the position of the third point relative to the centre.
    var xPoint3 = (x - segment * 2);
    var yPoint3 = yPoint2;

//  Draw the triangle.
    triangle(xPoint1, yPoint1, xPoint2, yPoint2, xPoint3, yPoint3)
}