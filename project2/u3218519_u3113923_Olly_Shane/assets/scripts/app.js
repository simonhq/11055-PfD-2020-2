//////////////////////////////////////////////////////////////////////////////
//  app.js                                                                 //
//  Contains the program to go out and get books and movies, and call      //
//  Functions to populate the page                                          //
//  Website by Olly Hills u3218519 & Shane Ducksbury u3113923               //
//                                                                          //
//  Last Edited on 26 October 2020                                          //
//                                                                          //
//  Changelog                                                               //
//  Update the array files                                                  //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////


// Array to store created book objects.
const bookArray = [];

// // selection of test ISBN arrays. Can be deleted before handing in
// const testISBN = "9780545582933";
// const testISBNArray = ["97803855371486546545646545", "9780385537148", "9780439136365", "9781524763282", "1455558028", "9780261103252", "9781476746586", "9780345418913"]
// const emptyTestArray = [];


//////////////
// Functions
//


// Fetches a URL and with an Error status if the request fails
// returns the error code if HTTP request is anything but 200
// fetch URL contains native promise fetch, so returns fetch and then the response depending on the HTTP code received from the API
const fetchURL = (url) => {
    return fetch(url).then(response => {
            if (response.status !== 200) {
                console.log(`Error, unable to complete request, ${response.status} received`);
                return response.status;
            };
            // need to return the response JSON else it returns undefined
            return response.json();
        })
}


// Gets the book via Open Library API. Depending on the parameter passed in, will use the ISBN API or the bibkey data API.
const getBook = (isbn, type) => {
    // create reusable constants for connecting to the APIs 
    const openLibraryAPIisbnURL = "https://openlibrary.org/isbn/";
    const openLibraryAPIisbnURLFormat = ".json";

    const openLibraryAPIbkURL = "https://openlibrary.org/api/books?bibkeys=ISBN:";
    const openLibraryAPIbkURLFormat = "&format=json&jscmd=data";
    
    let bookURL;
    if (type === "ISBN") {
        bookURL = openLibraryAPIisbnURL + isbn + openLibraryAPIisbnURLFormat;
    } else if (type === "DATA") {
        bookURL = openLibraryAPIbkURL + isbn + openLibraryAPIbkURLFormat;
    } else {
        return;
    }
    // console.log(type === "ISBN" ? "ISBN: " + bookURL : "Bibkeys: " + bookURL); // logs the book url built above
    const book = fetchURL(bookURL);
    return book;
}

// Takes a book object and adds it to the bookArray
const addBookToArray = (book, array) => {
    array.push(book);
};

// Function takes an array of ISBN numbers. If the ISBN exists then a book object will be created.
// Book object will be populated from the OpenLibrary API and if applicable, the OpenMovieDatabase API.
// this function will then call populateBooks function to output the books to the DOM.

const importPopulateBooks = async (array) => {
    
    // for loop to get each item in the ISBN array
    for (let i = 0; i < array.length; i++) {
        // show the loading results card with amount of remaining time
        loadingResults(i, array.length);

        // wait for the getBook function to reach the API before continuing.
        // Dev Note Shane: Yes, await can kind of ruin the point of using an asynchronous fetch request, but I wanted to learn to use the newer fetch function.
        const bookByISBN = await getBook(array[i], "ISBN");
        // console.log(bookByISBN);
        
        // Error checking if HTTP code is anything greater than 200
        if (bookByISBN > 200) {
            console.log(`Something went wrong when retrieving the ISBN ${array[i]}. Check it is correct.`);
            continue;
        }

        // get the books details as well from the API
        const bookByDetails = await getBook(array[i], "DATA");
        // console.log(bookByDetails);
        const book = bookByDetails["ISBN:"+array[i]];

        // create the Book object
        // check if book publisher exists
        let bookPublisher = book.publishers ? book.publishers[0].name : null;
        const bookToAdd = new Book(book.title, book.authors[0].name, book.publish_date, bookPublisher, array[i]);

        // if the book has a cover, then add that too
        if (book.cover){
            bookToAdd.setCoverArt(book.cover["medium"]);
        } else if (bookByISBN.covers) {
            // go and get the cover using the URL if the bibkeys cover isn't populated
            url = `http://covers.openlibrary.org/b/id/${bookByISBN.covers[0]}-M.jpg`
            bookToAdd.setCoverArt(url);
        }

        // currently storing the subjects as genres, not sure if we want to keep this.
        bookToAdd.setGenres(book["subjects"]);

        // check if the book has a movie using a class function.
        await bookToAdd.checkForMovie();
        
        // if the book has a description on the Open Library API, then add it as well.
        if (bookByISBN.description){
            // if the description has a kv pair, use the value, if it is just a description, use the description
            bookToAdd.setDescription(bookByISBN.description.value ? bookByISBN.description.value : bookByISBN.description);
        }


        addBookToArray(bookToAdd, bookArray);
    }
    // re populate the dom with the array of book objects
    // if bookArray is empty because of errors or no input, show the no books card
    if (bookArray.length == 0) {
        noBooksInArray();
    }

    populateBooks(bookArray);
};

const populateBooks = (array) => {
    // empty the output div before populating with the new array.
    if (pageLoaded){
        const outputDiv = document.getElementById("content-output");
        outputDiv.innerHTML = "";
    }

    for (let book of array) {
        outputBookToPage(book);
    }
}
