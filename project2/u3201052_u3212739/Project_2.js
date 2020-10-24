/*

Author: Zanya Nadelle Bendebel & Claire McAuliffe
Date Created: 14/10/2020
*/
//Define Global Variables
var isbnLength;
var pageNum = 0;
var jresBook;
var isbnListKey = [];


function onLoad(){
    document.getElementById('nextButton').onclick = function changePage(){
        pageNum ++;
        console.log(pageNum);
        displayBook();
        window.scrollTo(0, 0);
    }
    document.getElementById('backButton').onclick = function changePage(){
        pageNum --;
        console.log(pageNum);
        displayBook();
        window.scrollTo(0, 0);
    }
    expandISBN();
}
window.onload = onLoad;





pageQty = isbnlist.length;
// console.log(pageQty)

fetchDetails()
async function fetchDetails(){
    var bookURL = "https://openlibrary.org/api/books?bibkeys=ISBN:"+ isbnlist +"&format=json&jscmd=data";
    const respBook = await fetch(bookURL);
    jresBook = await respBook.json();
    console.log(jresBook);


    movieURL = "https://api.themoviedb.org/3/search/movie?api_key=58ab3248432c80d6ffd196da87c220a3&query=" + "Tales+from+EarthSea"
    const respMovie = await fetch(movieURL);
    const jresMovie = await respMovie.json();
    console.log(jresMovie)
    
    displayBook();
    

}

function expandISBN(){
    for (i = 0; i < isbnlist.length; i++) {                     // For all provided ISBN numbers
        if (isbnlist[i].toString().length === 10) {       // Check if ISBN number is 10 digits
            isbnListKey[i] = "ISBN:" + isbnlist[i];
        } else {
            isbnListKey[i] = isbnlist[i];
        }
    }
}

function displayButton(){
    let displayNext = document.getElementsByClassName("nextButton");
    displayNext[0].style.display = "block"
    let displayBack = document.getElementsByClassName("backButton");
    displayBack[0].style.display = "block"
}

function displayBookAttribute(className, classVariable){
    let displayAttribute = document.getElementsByClassName(className);
    displayAttribute[0].style.display = "block"
    displayAttribute[0].innerHTML = "<p>" + classVariable + "</p>";
}
function displayBookCover(className,imgISBN){
    let displayAttribute = document.getElementsByClassName(className);
    displayAttribute[0].style.display = "block"
    displayAttribute[0].innerHTML = "<img src= https://covers.openlibrary.org/b/isbn/" + imgISBN + "-M.jpg >";
}
function hideBookAttribute(className){
    let displayAttribute = document.getElementsByClassName(className);
    displayAttribute[0].style.display = "none"
}
function hideBookCover(className){
    let displayAttribute = document.getElementsByClassName(className);
        displayAttribute[0].style.display = "none"
}

// jresBook[isbnListKey[pageNum]] === isbnlist[pageNum]

function displayBook(){
    if(pageQty <= pageNum){
        hideBookCover("bookCover");
        displayBookAttribute("bookTitle", "No more books in your list, go to the home page to add more.");
        hideBookAttribute("bookAuthor");
        hideBookAttribute("bookPublisher");
        hideBookAttribute("bookPublishDate");
        hideBookAttribute("nextButton");
    } else {
        if (!(isbnListKey[pageNum] in jresBook)){
            hideBookCover("bookCover");
            displayBookAttribute("bookTitle", "This book is not available. Please check the ISBN and try again.");
            displayBookAttribute("bookAuthor", "");
            displayBookAttribute("bookPublisher", "");
            displayBookAttribute("bookPublishDate", "");
            displayButton();
        } else if(pageNum == 0){
            if (isbnlist[pageNum].toString().length === 10) {        // Check if ISBN number is 10 digits
                isbnListKey[pageNum] = "ISBN:" + isbnlist[pageNum];
                displayBookCover("bookCover", isbnlist[pageNum]);
                displayBookAttribute("bookTitle", jresBook["ISBN:" + isbnlist[pageNum]].title);
                displayBookAttribute("bookAuthor", jresBook["ISBN:" + isbnlist[pageNum]].authors[0].name);
                displayBookAttribute("bookPublisher", jresBook["ISBN:" + isbnlist[pageNum]].publishers[0].name);
                displayBookAttribute("bookPublishDate", jresBook["ISBN:" + isbnlist[pageNum]].publish_date);
                hideBookAttribute("backButton");
            } else {                                                // ISBN number is 13 digits
                isbnListKey[pageNum] = isbnlist[pageNum];
                displayBookCover("bookCover", isbnlist[pageNum]);
                displayBookAttribute("bookTitle", jresBook[isbnlist[pageNum]].title);
                displayBookAttribute("bookAuthor", jresBook[isbnlist[pageNum]].authors[0].name);
                displayBookAttribute("bookPublisher", jresBook[isbnlist[pageNum]].publishers[0].name);
                displayBookAttribute("bookPublishDate", jresBook[isbnlist[pageNum]].publish_date);
                hideBookAttribute("backButton");
            }
        } else {
            if (isbnlist[pageNum].toString().length === 10) {        // Check if ISBN number is 10 digits
                displayBookCover("bookCover", isbnlist[pageNum]);
                displayBookAttribute("bookTitle", jresBook["ISBN:" + isbnlist[pageNum]].title);
                displayBookAttribute("bookAuthor", jresBook["ISBN:" + isbnlist[pageNum]].authors[0].name);
                displayBookAttribute("bookPublisher", jresBook["ISBN:" + isbnlist[pageNum]].publishers[0].name);
                displayBookAttribute("bookPublishDate", jresBook["ISBN:" + isbnlist[pageNum]].publish_date);
                displayButton();
            } else {                                                // ISBN number is 13 digits
                displayBookCover("bookCover", isbnlist[pageNum]);
                displayBookAttribute("bookTitle", jresBook[isbnlist[pageNum]].title);
                displayBookAttribute("bookAuthor", jresBook[isbnlist[pageNum]].authors[0].name);
                displayBookAttribute("bookPublisher", jresBook[isbnlist[pageNum]].publishers[0].name);
                displayBookAttribute("bookPublishDate", jresBook[isbnlist[pageNum]].publish_date);
                displayButton();
            }
        }
    }
}


