/* Lea Jehanno w9
exercise 2 week 9 : OOP */

//This exercise is about creating functions (called "methods") for objects

var book2 = {
    name:"Homo Deus",
    author:"Yuval_Noah_Harari",
    year:"2016",
    published:"UK",
    startbook: function() {
        //the return function = sends something back
        //it's going to send back the author and name of an object called "this"
        return this.author + " " + this.name + " read page ";
    }
};

// the use of "this" keyword always refers to the properties inside of the object
//Because the function is inside book2, "this" refers to book 2

//then you call the function in a document.write so it appears on screen
document.write(book2.startbook() + "<br/>")

//if you want the function to show up on the screen, write the same but with the the ()
// document.write(book2.startbook + "<br/>")