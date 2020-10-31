/* Lea Jehanno W9
Exercise 3 week 9 - OOP */

//This is the same function as the one made in the exercise 2 week 9
var book2 = {
    name:"Homo Deus",
    author:"Yuval_Noah_Harari",
    year:"2016",
    published:"UK",
    startbook: function() {
        return this.author + " " + this.name + " read page ";
    }
};
//the return function = sends something back
        //it's going to send back the author and name of an object called this

// for loop for usinf objects in simple loops
// this for loop is a little bit different than the other for loops we've used so far
//this is a special type of for loop that is looking for all the properties in book2 : it's going to return them one by one
//each time you go through them, it's going to go through the property values/name store in x

    //This is what you are suppose to see :
    //Homo Deus
    //Yuval_Noah_Harari
    //2016
    //UK
    //function() { return this.author + " " + this.name + " read page "; }
for (x in book2) {
    document.write(book2[x] + "<br/>");
}

// You can add new properties as you go - but be careful with the spelling
// create property (variables)
book2.colour = "black" + "<br/>";
    document.write(book2.colour)

    //You should get the "black" colour cming just after the function() 

// This removes properties
delete book2.year;

//Now you should see the same thing as before except the year
for (x in book2) {
    document.write(book2[x] + "<br/>");
}

//create methods (functions) 
book2.stopread = function () {
    return this.author + " " + this.name + " stops reading";
};

document.write(book2.stopread() + "<br/>");




