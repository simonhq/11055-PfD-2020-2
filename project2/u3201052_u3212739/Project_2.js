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
    expandISBN();
    if (document.getElementById("bookListTitle")){
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
        document.getElementById('deleteButton').onclick = function deleteISBN(){
            isbnlist.splice(pageNum,1);
            isbnListKey.splice(pageNum,1);
            displayBook();
            window.scrollTo(0, 0);
        }
        fetchDetails()
    }
    var newISBN = document.getElementById("addISBN");
    if (newISBN){
        newISBN.addEventListener('change', (event) => {
            newISBN = document.getElementById("addISBN");
            alert(newISBN.value);
            isbnlist.unshift(newISBN.value);
            
        });
    }

    
}
window.onload = onLoad;





pageQty = isbnlist.length;
// console.log(pageQty)


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

function displayButton(buttonName){
    let displayButton = document.getElementsByClassName(buttonName);
    displayButton[0].style.display = "block"
}
function hideButtons(){
    let hideHome = document.getElementsByClassName("homeButton");
    hideHome[0].style.display = "none"
    let hideDelete = document.getElementsByClassName("deleteButton");
    hideDelete[0].style.display = "none"
    let hideNext = document.getElementsByClassName("nextButton");
    hideNext[0].style.display = "none"
    let hideBack = document.getElementsByClassName("backButton");
    hideBack[0].style.display = "none"
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
    let hideAttribute = document.getElementsByClassName(className);
    hideAttribute[0].style.display = "none"
}
function hideBookCover(className){
    let hideAttribute = document.getElementsByClassName(className);
        hideAttribute[0].style.display = "none"
}

// jresBook[isbnListKey[pageNum]] === isbnlist[pageNum]

function displayBook(){
    if(pageQty <= pageNum){
        hideBookCover("bookCover");
        displayBookAttribute("bookTitle", "No more books in your list, go to the home page to add more.");
        hideBookAttribute("bookAuthor");
        hideBookAttribute("bookPublisher");
        hideBookAttribute("bookPublishDate");
        hideButtons();
        displayButton("backButton");
        displayButton("homeButton");
    } else if (!(isbnListKey[pageNum] in jresBook)){
        hideBookCover("bookCover");
        displayBookAttribute("bookTitle", "This book is not available. Please check the ISBN and try again.");
        displayBookAttribute("bookAuthor", "");
        displayBookAttribute("bookPublisher", "");
        displayBookAttribute("bookPublishDate", "");
        hideButtons();
        displayButton("nextButton");
        displayButton("backButton");
        displayButton("deleteButton");
    } else if(pageNum == 0){
        displayBookCover("bookCover", isbnlist[pageNum]);
        displayBookAttribute("bookTitle", jresBook[isbnListKey[pageNum]].title);
        displayBookAttribute("bookAuthor", jresBook[isbnListKey[pageNum]].authors[0].name);
        displayBookAttribute("bookPublisher", jresBook[isbnListKey[pageNum]].publishers[0].name);
        displayBookAttribute("bookPublishDate", jresBook[isbnListKey[pageNum]].publish_date);
        hideButtons();
        displayButton("nextButton");
    } else {
        displayBookCover("bookCover", isbnlist[pageNum]);
        displayBookAttribute("bookTitle", jresBook[isbnListKey[pageNum]].title);
        displayBookAttribute("bookAuthor", jresBook[isbnListKey[pageNum]].authors[0].name);
        displayBookAttribute("bookPublisher", jresBook[isbnListKey[pageNum]].publishers[0].name);
        displayBookAttribute("bookPublishDate", jresBook[isbnListKey[pageNum]].publish_date);
        hideButtons();
        displayButton("nextButton");
        displayButton("backButton");
    }
}


