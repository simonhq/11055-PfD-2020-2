/*Week 11 Excerise 2 Class 2 Script
u3201052*/

//this one is a lil' different to the c1 script, you can only change via a number (greyscale colours using numbers)

// Object orientation

/* writing a class

*/

/* requires the p5 library */


class aWindow { 
    
    /*
    x = position from the left
    y = position from the top
    size = the size of the window 1 = 25 pixel window, 2 = 45 pixel window
    colour = a number from 0-255 for grey scale
    */

    constructor(x, y, size, colour) { 
        this.x = x; 
        this.y = y;
        this.size = size;
        this.colour = colour;
    }

    setPos(x, y) { //remember that in object world (class aWindow), functions are called methods and variables are called properties
        this.x = x;
        this.y = y;
    }

    setPosX(){
        return this.x; 
    }

    setOptions(size, colour) {
        this.size = size;
        this.colour = colour;
    }

    //you could split these properties into 4

    //this method does not draw parameters
    //everything referenced in here starts with "this" keyword. Therefore, when these are being run for winA, it uses all the properties assigned to winA (vice versa with winB)
    //the following uses p5 functions
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


class aFloor{

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

    //some info is constructed - e.g. in the following, you must accept the default x, y, etc. from exercise script (w11_e2_script.js)


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

    drawFloor() { //does not take any variables or properties, but uses other properties which belongs to this object (floor constructor)

        // use the provided colour
        fill(this.colour);
        // draw the floor
        rect(this.x, this.y, this.size * this.relxsize, this.size * this.relysize) //uses variables from inside object (constructor)

        var col = this.colour; //which holds value of color
        var w = new aWindow(this.x, this.y, this.size, this.colour); //new w variable is created, which is a window variable and passes in the default values which are provided by constructor
        //notice you can use a class within other programs^
        //^these can be used anywhere inside of drawFloor (the following)

        //floor class asks for how many windows you want, in this case only 3
        if (this.windows < (this.size * 4)) {

            for (let i = 0; i < this.windows; i++) { //use let command, instead of var, so that when you start for loop, it can be recreated
                if(this.colour < 130) { //make sure color is differnt to background color
                    col = this.colour + 50;
                } else {
                    col = this.colour - 50;
                }

                //the following (xset, yset, etc.) can only be used in this forloop
                //keep this structure to avoid failure
                let xset = ((this.size * this.relxsize)/this.windows) 
                let xpos = (this.x/2) + 5 + (((i + 1) * xset) - xset/2); //making sure object is placed in right position
                let ypos = this.y + 5;
                if (this.ground == false) { //making sure window is right position, whether ground floor or not
                    ypos = this.y + ((this.size * this.relysize)/4) 
                }

                //setting window positions and options, drawing window each time
                w.setPos(xpos, ypos);
                w.setOptions(this.size, col);
                w.drawWindow();
                
            }

        } 

    }

}