//Class 1
//Writing aWindow class for Exercise 1

    /*
    x = position from the left
    y = position from the top
    size = the size of the window 1 = 25 pixel window, 2 = 45 pixel window
    colour = either a string name or a number from 0-255 for grey scale
    */

class aWindow {
    
    constructor(x, y, size, colour) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.colour = colour;
    }

    setPos(x, y) {
        this.x = x;
        this.y = y;
    }

    setOptions(size, colour) {
        this.size = size;
        this.colour = colour;
    }

    drawWindow() {
        
        // use the provided colour
        fill(this.colour);
        // this draws 4 squares based upon the x & y position with a 5 pixel gap to draw a window
        rect(this.x, this.y, this.size * 10, this.size * 10);
        rect(this.x + this.size * 10 + 5, this.y, this.size * 10, this.size * 10);
        rect(this.x, this.y + this.size * 10 + 5, this.size * 10, this.size * 10);
        rect(this.x + this.size * 10 + 5, this.y + this.size * 10 + 5, this.size * 10, this.size * 10);

    }

}

