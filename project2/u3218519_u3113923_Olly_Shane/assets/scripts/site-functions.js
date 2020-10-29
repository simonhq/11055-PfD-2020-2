//////////////////////////////////////////////////////////////////////////////
//  site-functions.js                                                       //
//  Contains the program to populate the web page                           //
//                                                                          //
//  Website by Olly Hills u3218519 & Shane Ducksbury u3113923               //
//                                                                          //
//  Last Edited on 26 October 2020                                          //
//                                                                          //
//  Changelog                                                               //
//  Remove the emoji                                                        //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////





// create JS accessible constants for the output div for cards and the search bar, as they won't change.
const outputDiv = document.getElementById("content-output");
const searchQuery = document.getElementById("search-text");

// create a global variable to determine if the page had been loaded
let pageLoaded = false;


// Output the Book to the page by inputting a book object
const outputBookToPage = (book) => {
    
    // Switch off the loading card once books start populating
    if (!pageLoaded) {
        pageLoaded = true;
        const pageLoadedCard = document.getElementById("loading-bookCard");
        pageLoadedCard.setAttribute("style", "display:none");
    }

    // console.log(book.movieDetails)
    // create the book content for the card and accordion
    const cardTitleContent = buildBookCardContent(book.title, book.author, book.publishedDate);
    const accordionContent = buildAccordionContent(book.description, book.genres, book.publisher, book.movieDetails);

    // build the card and populate the page
    buildCard(cardTitleContent, book.cover, accordionContent);
}


// Build the inner HTML for the book card using data from the book
const buildBookCardContent = (title, author, publishedDate) => {
    // perform a regex match on the publish date just to get the year. Only does year 1000 to 2050, so hopefully nothing earlier.
    // Yes I know that isn't the best solution but will work most of the time.
    return `
    <h2><span class="bookTitle">${title}</span></h2>
    <h4><span class="bookAuthor">${author}</span> | <span class="bookPublishDate">${publishedDate.match(/1[0-9]{3}|20[0-4][0-9]|2050/)}</span></h4>
    `
}

// Build the accordion HTML content using data from the book.
const buildAccordionContent = (description, subjects, publisher, movieDetails) => {
    
    let subjectsToUse;
    let movieInfo;

    let subjectString = "";
    let numberOfSubjects = subjects.length < 10 ? subjects.length : 10;
    for(i = 0; i < numberOfSubjects; i++) {
        if (subjects[i].name) {
            subjectString = subjectString + `<a href="${subjects[i].url}" target="_blank" class="chip">${subjects[i].name}</a>`
        }
    }
    subjectsToUse = `<h5><span class="accent">Subjects:</span> <span class="bookSubjects">${subjectString}</span></h5>`

    if (movieDetails) {
        movieInfo = `
        <div class="line"></div>
        <div class="break"></div> 

        <div class="movieInfo">
            <h3 class="movieHeading">It's a Movie too!</h3>
            <div class="movieLine"></div> 
            <a class="movieCard" href="https://www.imdb.com/title/${movieDetails.imdbID}" target="_blank">
                <img src="${movieDetails.poster}" alt="Movie Poster">
                <div class="movieCard-content">
                    <h3><span class="movieTitle">${movieDetails.title}</span></h3>
                    <h4><span class="director">${movieDetails.director}</span> | <span class="movieReleaseDate">${movieDetails.year}</span></h4>
                </div>
                
            </a>
        </div>
        
        `
    }
    
    return `
    <div class="line"></div>
    <div class="bookCard-detailsContents">

        <h5><span class="accent">Publisher:</span> <span class="bookPublishDate lightContent">${publisher}</span></h5>
        
        
        <h5 class="accent">Description:</h5>
        <p class="description lightContent">${description.replace(/\r\n/gi, "<br>")}</p>
        
        ${subjectsToUse ? subjectsToUse : ""}

        ${movieInfo ? movieInfo : ""}
    </div>
    `
}

// Build the Details accordion using predefined HTML content
const buildBookCardAccordion = (accordionHTMLContent) => {
    const bookCardDetailsAccordion = document.createElement("div");
    const bookCardDetailsAccordionContent = document.createElement("div");

    bookCardDetailsAccordion.setAttribute("class", "accordion");
    bookCardDetailsAccordionContent.setAttribute("class", "accordion-body");

    // automatically create the correct accordion ID for the card by counting the existing number of 
    // items in the outputDiv (breaks between cards also count as Divs hence the / 2).
    bookCardDetailsAccordion.innerHTML = `
        <input type="checkbox" id="accordion-${(outputDiv.childElementCount / 2) + 1}" name="accordion-checkbox" hidden>
        <label class="accordion-header" for="accordion-${(outputDiv.childElementCount / 2) + 1}">See Details <i class="icon icon-arrow-right mr-1"></i>
        </label>
        `

    bookCardDetailsAccordionContent.innerHTML = accordionHTMLContent;

    bookCardDetailsAccordion.appendChild(bookCardDetailsAccordionContent);

    return bookCardDetailsAccordion;
}


// Function to build cards. Cards can be reused for other functions, so don't require a coverImage or and accordion, only HTML for the interior content.
const buildCard = (cardHTMLContent, cardCoverImageURL = null, accordionHTMLContent = null) => {
    const bookCard = document.createElement("div");
    const bookContent = document.createElement("div");
    
    // only insert a cover image if the URL is populated
    if (cardCoverImageURL) {
        const bookCover = document.createElement("img");
        bookCover.setAttribute("class", "bookCard-Cover");
        bookCover.setAttribute("src", cardCoverImageURL);
        
        bookCard.appendChild(bookCover);
    }
    
    bookContent.innerHTML = cardHTMLContent;

    bookCard.setAttribute("class", "bookCard");
    bookContent.setAttribute("class", "bookCard-Content");
    bookCard.appendChild(bookContent);

    // only insert an accordion if the HTML content for accordion is populated.
    if (accordionHTMLContent) {
        const bookCardDetails = document.createElement("div");
        bookCardDetails.setAttribute("class", "bookCard-details");
        const accordion = buildBookCardAccordion(accordionHTMLContent);
        bookCardDetails.appendChild(accordion);
        bookCard.appendChild(bookCardDetails);
    }

    outputDiv.appendChild(bookCard);

    insertBreak();
}


// build a break div to go between cards
const insertBreak = () => {
    const pageBreak = document.createElement("div");
    pageBreak.setAttribute("class", "break");
    outputDiv.appendChild(pageBreak);
}


///////////////////
//  Loading Functions
///////////////////

// show the number of items to be loaded when fetching books. Is called in the importPopulateBooks function.
const loadingResults = (num, arrayLength) => {
    const loadingStatus = document.getElementById("loading-status");
    loadingStatus.innerHTML = `<h4>Book ${num + 1} of ${arrayLength} arriving now...</h4>`
}


////////
// Search Functions
///////

const searchBookArray = (searchTerm) => {
    const matchedBooks = [];
    bookArray.filter((book) => {
        if (
            book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.isbn.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
                matchedBooks.push(book);
            }
        })
        return matchedBooks;
    }
    
const searchBooks = () => {
    let result = searchQuery;
    let outputArray = searchBookArray(result.value);
    outputArray.length ? populateBooks(outputArray) : noResults(result.value);
}
    
// when the search query changes, perform a search
searchQuery.addEventListener("input", searchBooks);

// output a no results placeholder if a search fails
const noResults = (searchQuery) => {
    // clear the output div
    if (pageLoaded){
        const outputDiv = document.getElementById("content-output");
        outputDiv.innerHTML = "";
    }

    noResultsHTML = `No results found for ${searchQuery}`;
    buildCard(noResultsHTML);
}

const noBooksInArray = () => {
    // empty the output array
    const outputDiv = document.getElementById("content-output");
    outputDiv.innerHTML = "";

    // hide the navbar as it isn't needed at this point.
    const navbarDiv = document.getElementById("all-nav-elements");
    navbarDiv.setAttribute("style", "display:none")

    const content = `
    <h2><span class="bookTitle">Sorry, no books found...</span></h2>
    <h6><span class="bookAuthor">Maybe it's time to start writing that novel you've been thinking about. </h6>
    `
    buildCard(content);

    outputDiv.firstChild.setAttribute("class", "bookCard blunt");
    outputDiv.firstChild.firstChild.setAttribute("class", "bookCard-Content noBook blunt");

}
