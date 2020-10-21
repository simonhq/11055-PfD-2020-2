/*

Author: Zanya Nadelle Bendebel & Claire McAuliffe
Date Created: 14/10/2020
*/




pageQuantity = isbnlist.length;


fetchDetails()

async function fetchDetails(){
    var bookURL = "https://openlibrary.org/api/books?bibkeys=ISBN:"+ isbnlist +"&format=json&jscmd=data";
    const respBook = await fetch(bookURL);
    const jresBook = await respBook.json();
    console.log(jresBook);
    return jresBook

    movieURL = "https://api.themoviedb.org/3/search/movie?api_key=58ab3248432c80d6ffd196da87c220a3&query=" + "Tales+from+EarthSea"
    const respMovie = await fetch(movieURL);
    const jresMovie = await respMovie.json();
    console.log(jresMovie)
    // displayBooks();
    // document.write(jresBook[isbnlist[1]].title);
}


listNumber = 0

function displayBooks(){
    var displayTitle = document.getElementsByClassName("bookTitle");
    displayTitle[listNumber].innerHTML = "<h1>" + jresBook[isbnlist[listnumber+1]].title + "</h1>";
}



displayBooks()
