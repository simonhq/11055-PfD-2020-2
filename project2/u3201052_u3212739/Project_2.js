/*

Author: Zanya Nadelle Bendebel & Claire McAuliffe
Date Created: 14/10/2020
*/
function displayBooks(){
    var myBooks = document.getElementsByClassName("header");
    myBooks[0].innerHTML = "<h1>This is a Test!</h1>";
    console.log(myBooks);
}











pageQuantity = isbnlist.length;


fetchDetails()

async function fetchDetails(){
    url = "https://openlibrary.org/api/books?bibkeys=ISBN:"+ isbnlist +"&format=json&jscmd=data";
    const resp = await fetch(url);
    const jres = await resp.json();
    console.log(jres);
    displayBooks();
}