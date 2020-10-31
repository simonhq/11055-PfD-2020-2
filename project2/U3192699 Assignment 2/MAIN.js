var books = [] //preloads array to push into
var z = 1; //This variable is used to resize the screen based on how many ISBNS are inputted should therefore cater to an infinte amount of ISBNS
var title2 = ""; 
main(); //executes main program

//Pre creating variables to display book information
var currentbook = 0; //the current book being displayed, at default this wont display anything until a cover is clicked
var title = "Click a book to get started!";
var author = "";
var publisher = "";
var pages = "";
var date = "";
var notes = "";
var bookurl = "";
var ismovie = false;
var movieTitle = "";
var movieTrue = "";
var language = "";
var rating = "";
var votes = "";
var summary ="";


async function main(){ //This is the main program (That isn't object orientated), everything else is executed through buttons. This function creates an array of book classes to store information from the API
    for (let i =0; i< isbnlist.length; i++){
        let book = new bookDetail(isbnlist[i]);
        await book.getInfo();
        books.push(book);
    }

}


var buttons = []; //preloads an array where the buttons will be pushed into
function setup(){
    createCanvas(1920,1080); //creates screen
    background('white');
    var a = 19; //default starting position from where book covers will be displayed
    var b = 19;
    x = 0;
    y = 0;
    while (x < isbnlist.length){ //creates a button for every ISBN thats been input
        url_start ="http://covers.openlibrary.org/b/isbn/";
        url_end = "-M.jpg";
        url = url_start.concat(isbnlist[x],url_end);
        button = createImg(url,"Cover not found"); //The button image will be the cover of the book, if no image is found it displays a message
        button.size(180,290);
        button.position(a,b);
        buttons.push(button);
        a = a + 180; 
        y ++;
        x ++;
        
        if (y ==6){ //ends the row and starts a new one once 6 buttons are placed
            b = b + 290;
            a = 19;
            y= 0;
            z ++;
        }

    }

    if (z<4){ 
        z =4;
    }
    resizeCanvas(1920,(z*300));
    background('white'); //Resizes canvas based on the amount of books input, at minimum it will be the equivalent of 4 rows, this stops information displayed on the righthand side from being cut.
}


///ALL THE DETAILS FOR THE DISPLAYED TEXT
function draw(){
background('white');
fill('black');
line(1480,0,1480,500);
textSize(width/80);
text(title,1100,50);
text(author,1100,100,400,300);
text(publisher,1100,150,400,300);
text(pages,1100,300);
text(date,1100,350);
text(notes,1100,400,400,400);
text(movieTrue,1640,30,200,100);
text(movieTitle,1500,100,400,200);
text(language,1500,200);
text(rating,1500,250);
text(votes,1500,300);
text(summary,1500,350,400)

}



function mousePressed(){ //when mouse is pressed it clears all current movie information and checks which button was clicked to show what information
    Movinfo = "";
    language = "";
    rating = "";
    votes = "";
    summary ="";
    a = 19
    b = 19
    x = 0
    y = 0;
        for(let j = 0; j<buttons.length; j++){
            if(mouseX>a && mouseX<(a+171)){
                if(mouseY>b && mouseY<(b+290)){
                    currentbook = x; 
                    
                    break;                    
                }
            }
            a = a + 180;
            x ++;
            y ++;
            
            if (y ==6){
                b = b + 290;
                a = 19;
                y= 0;
            }

    }
    
title = books[currentbook].getTitle(); //Using the currentbook index it displays the information of the cover thats been clicked
author = "Author: "+ books[currentbook].getAuthor();
pages = "Pages: "+ books[currentbook].getPages();
publisher ="Publisher(s); "+books[currentbook].getPublishers();
date = "Date published: "+books[currentbook].getDate();
notes = "Notes: "+books[currentbook].getNotes();
movieTrue ="";
movieTitle= "";
movButton = createButton('Is there a movie?'); //creates a button that allows the user to check if there's a movie related to the book
movButton.position(1500,40);
movButton.mousePressed(displayMov);
}
async function displayMov(){ //The website only searches for a movie if the user clicks the button, then it launches the relevant subprogram to fetch from API, all display choices are made in that function
    title2 = title.replace(' ','%20');//JS DID not like me putting this within the api subprogram so its here instead, the API requires no spaces in the url which are to be replaced with '%20'
    movie = new movieDetail(title2);
    await movie.getInfo();
}



