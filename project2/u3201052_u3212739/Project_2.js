/*

Author: Zanya Nadelle Bendebel & Claire McAuliffe
Date Created: 14/10/2020
*/

//Define Global Variables
var isbnLength;
var pageNum = 0;
var jresBook;
var isbnListKey = [];
var pageQty = isbnlist.length;


/* When the site is first loaded, this function sets up the properties of the buttons needed for the 
page, calls the function that gets the data from the databse and calls the function that turns the list 
of isbn numbers into the format used to access the json object sent back from the database. */
window.onload = onLoad;   
function onLoad(){
    expandISBN();
    if (document.getElementById("bookListTitle")){                  // This function only loads if it is on the page that needs these buttons
        document.getElementById('nextButton').onclick = function changePage(){
            pageNum ++;                                             // This button increases the page number
            displayBook();
            window.scrollTo(0, 0);
        }
        document.getElementById('backButton').onclick = function changePage(){
            pageNum --;                                             // This button decreases the page number
            displayBook();
            window.scrollTo(0, 0);
        }
        document.getElementById('deleteButton').onclick = function deleteISBN(){
            isbnlist.splice(pageNum,1);                             // This button deletes an entry from the isbnlist array
            isbnListKey.splice(pageNum,1);
            displayBook();
            window.scrollTo(0, 0);
        }
        document.getElementById('homeButton').onclick = function changePage(){
            pageNum = 0;                                            // This button returns to the first page
            displayBook();  
            window.scrollTo(0, 0);
        }
        fetchDetails();                                             // Runs the function that retrieves the necissary information from the database
    }
}

  

/* This function will allow the rest of the program to run while it uses the ISBN numbers that have been 
inputted to go and get information about those books from the OpenLibraries API and then calls the function
which displays those books on the webpage. */
async function fetchDetails(){
    var bookURL = "https://openlibrary.org/api/books?bibkeys=ISBN:"+ isbnlist +"&format=json&jscmd=data";   //creates a URL that is based on the ISBNs provided
    const respBook = await fetch(bookURL);                          // Uses that URL to get the information from OpenLibraries and waits till that is done
    jresBook = await respBook.json();                               // Converts the information from Openlibraires into a json object for ease of use
    console.log(jresBook)

    // for (i = 0; i < pageQty; i++) {
    //     movieURL = "https://api.themoviedb.org/3/search/movie?api_key=58ab3248432c80d6ffd196da87c220a3&query=" + jresBook[isbnListKey[i]].title
    //     const respMovie = await fetch(movieURL);
    //     const jresMovie = await respMovie.json();
    //     console.log(jresMovie)
    // }
    displayBook();                                                  // Displays the book information on the webpage
    

}

/* This function will go through each ISBN in the array and add 'ISBN:' to the front of any 10 digit ISBN's
so that they match the name sent back in the json object. */
function expandISBN(){
    for (i = 0; i < isbnlist.length; i++) {                     // For all provided ISBN numbers
        if (isbnlist[i].toString().length === 10) {             // Check if ISBN number is 10 digits
            isbnListKey[i] = "ISBN:" + isbnlist[i];             // If it is, add 'ISBN:'
        } else {
            isbnListKey[i] = isbnlist[i];                       // If not, stay the same
        }
    }
}

/* The following four functions were made to condense the quanity of code within the 'displayBook' function. 
There are functions to hide and show buttons and change the display of book attributes and cover images. */
function displayButton(buttonName){
    let displayButton = document.getElementsByClassName(buttonName);                                    // Finds the element on the HTML page
    displayButton[0].style.display = "block"                                                            // Makes that element visible
}
function displayBookAttribute(className, classVariable, textType = "p"){    
    let displayAttribute = document.getElementsByClassName(className);                                  // Finds the element on the HTML page
    displayAttribute[0].style.display = "block";                                                        // Makes that element visible
    displayAttribute[0].innerHTML = "<" + textType + ">" + classVariable + "</" + textType + ">";       // Changes the text in that element to display the corresponding value for that book from the database, using the element type wanted
}
function displayBookCover(){
    let imgURL = "<img src= https://covers.openlibrary.org/b/isbn/" + isbnlist[pageNum] + "-M.jpg >"    // Creates an image URL with the ISBN numbers
    let displayAttribute = document.getElementsByClassName("bookCover");                                // Finds the element on the HTML page
    displayAttribute[0].style.display = "block";                                                        // Makes that element visible
    displayAttribute[0].innerHTML = imgURL;                                                             // Changes the image to correspond to the value for that book from the database
}
function hideElement(elementName){                                                                        // Finds the element on the HTML page
    let hideElement = document.getElementsByClassName(elementName);                                       // Makes that element disappear
    hideElement[0].style.display = "none";
}

// jresBook[isbnListKey[pageNum]] === isbnlist[pageNum]


/* This function will display a book cover, title, author, publisher and publishing date of whichever book
the 'isbnlist' array is currently up to. It has buttons to navigate between book pages (isbnlist array 
index number). On the last page there is a button to go back to the start and if there is an invaild ISBN
there is a button to delete it from the list. 
Note: The deletion of the invaild ISBN is not permanent and can be retrived by reloading the page. */
function displayBook(){
    if(pageQty <= pageNum){                                         // When the page number is higher than the number of books
        hideElement("bookCover");
        displayBookAttribute("bookTitle", "No more books in your list.", "h1");
        hideElement("bookAuthor");
        hideElement("bookPublisher");                               // Clears the book information
        hideElement("bookPublishDate");                             // Shows the back and home buttons only
        hideElement("nextButton");
        hideElement("deleteButton");
        displayButton("backButton");
        displayButton("homeButton");
    } else if (!(isbnListKey[pageNum] in jresBook)){                // When the page number is not in the json object sent back from the database
        hideElement("bookCover");
        displayBookAttribute("bookTitle", "This book is not available. Please check the ISBN and try again.", "h1");
        hideElement("bookAuthor");
        hideElement("bookPublisher");                               // Clears the book information, displays error message
        hideElement("bookPublishDate");                             // Shows the back, next and delete buttons
        displayButton("nextButton");
        displayButton("deleteButton");
        displayButton("backButton");
        hideElement("homeButton");
    } else if(pageNum == 0){                                        // When the page number is the first page
        displayBookCover();
        displayBookAttribute("bookTitle", jresBook[isbnListKey[pageNum]].title, "h1");
        displayBookAttribute("bookAuthor", jresBook[isbnListKey[pageNum]].authors[0].name);
        displayBookAttribute("bookPublisher", jresBook[isbnListKey[pageNum]].publishers[0].name);
        displayBookAttribute("bookPublishDate", jresBook[isbnListKey[pageNum]].publish_date);
        displayButton("nextButton");                                // Fills the page with information on the book related to that page number
        hideElement("deleteButton");                                // Shows the next button
        hideElement("backButton");
        hideElement("homeButton");
    } else {                                                        // Any other page number
        displayBookCover();
        displayBookAttribute("bookTitle", jresBook[isbnListKey[pageNum]].title, "h1");
        displayBookAttribute("bookAuthor", jresBook[isbnListKey[pageNum]].authors[0].name);
        displayBookAttribute("bookPublisher", jresBook[isbnListKey[pageNum]].publishers[0].name);
        displayBookAttribute("bookPublishDate", jresBook[isbnListKey[pageNum]].publish_date);
        displayButton("nextButton");                                // Fills the page with information on the book related to that page number
        hideElement("deleteButton")                                 // Shows the next and back buttons
        displayButton("backButton");
        hideElement("homeButton")
    }
}


// MULTIPLE AUTHORS CHECK