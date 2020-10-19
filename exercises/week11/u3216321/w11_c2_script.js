//Class 2
//Writing aWindow and aFloor classes for Exercise 2

    /*
    x = position from the left
    y = position from the top
    size = the size of the window 1 = 25 pixel window, 2 = 45 pixel window
    colour = a number from 0-255 for grey scale
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

    /*
    x = position from the left
    y = position from the top
    size = the size of the window 1 = 100 pixel x 50 pixel floor
    colour = either a string name or a number from 0-255 for grey scale
    windows = the number of windows on this floor
    ground = true or false;
    relxsize = 100
    relysize = 100
    */

class aFloor{

    constructor(x, y, size, colour, windows, ground = true, relxsize = 100, relysize = 50) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.colour = colour;
        this.windows = windows;
        this.ground = ground;
        this.relxsize = relxsize;
        this.relysize = relysize;
    }

    drawFloor() {


        // use the provided colour
        fill(this.colour);
        // draw the floor
        rect(this.x, this.y, this.size * this.relxsize, this.size * this.relysize)

        var col = this.colour;
        var w = new aWindow(this.x, this.y, this.size, this.colour);


        if (this.windows < (this.size * 4)) {

            for (let i = 0; i < this.windows; i++) {
                if(this.colour < 130) {
                    col = this.colour + 50;
                } else {
                    col = this.colour - 50;
                }

                let xset = ((this.size * this.relxsize)/this.windows)
                let xpos = (this.x/2) + 5 + (((i + 1) * xset) - xset/2);
                let ypos = this.y + 5;
                if (this.ground == false) {
                    ypos = this.y + ((this.size * this.relysize)/4) 
                }

                w.setPos(xpos, ypos);
                w.setOptions(this.size, col);
                w.drawWindow();
                
            }

        } 

    }

}