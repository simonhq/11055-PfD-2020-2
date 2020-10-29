//////////////////////////////////////////////////////////////////////////////
//  Book.js                                                                 //
//  Contains the book class to store book info                              //
//                                                                          //
//  Website by Olly Hills u3218519 & Shane Ducksbury u3113923               //
//                                                                          //
//  Last Edited on 26 October 2020                                          //
//                                                                          //
//  Changelog                                                               //
//  Update the checkMovie to only get first result.                         //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////

class Book {
    constructor(title, author, publishedDate, publisher, isbn) {
        this.title = title;
        this.author = author;
        this.publishedDate = publishedDate;
        this.publisher = publisher ? publisher : "No Publisher Information Available";
        this.isbn = isbn;
        this.cover = "assets/images/No_Cover.jpg";
        this.description = "No Description Available";
        this.genres;
        this.movieObject;
        this.hasMovie = false;
        this.movieDetails = null;
    }

    setCoverArt(url) {
        this.cover = url;
    }

    setGenres(bookSubjects) {
        this.genres = bookSubjects;
    }

    setDescription(bookDesc) {
        this.description = bookDesc;
    }

    async checkForMovie() {
        // checks for a movie of the book.
        // just returns the first movie if there is a movie
        // search on omdb works well to return the right result, there is a risk it could get the wrong movie though.
        // Matching the movie title was too specific (i.e. the hobbit vs the hobbit desolation of smague).
        const omdbAPIKey = "93e4e253"
        const omdbAPIURL = `http://www.omdbapi.com/?apikey=${omdbAPIKey}&`
        const omdbSearch = "s="
        const omdbIMDBSearch = "i="

        const movieTitle = this.title.toLowerCase();

        // create a URL to query the omdb with, replacing spaces with + as required in the search function
        const movieURLToCheck = omdbAPIURL + omdbSearch + movieTitle.replace(/ /gi, "+");

        // Query the omdb and wait for the result
        const movie = await fetchURL(movieURLToCheck);
        // console.log(movieURLToCheck)

        // API json includes a response key with a string True or False. If its true then check if the movie name matches the title of the book
        if (movie.Response === "True") {
            this.movieObject = movie;

            const mov = movie.Search[0];

            this.hasMovie = true;
            const imdbSearchURL = omdbAPIURL + omdbIMDBSearch + mov.imdbID;
            // console.log("OMDB Search: " + imdbSearchURL); // logs the omdb search
            const movieReturn = await fetchURL(imdbSearchURL);

            // create a book object
            if (movieReturn.Response === "True"){
                this.movieDetails = {
                    title: movieReturn.Title, 
                    year: movieReturn.Year, 
                    poster: movieReturn.Poster, 
                    director: movieReturn.Director,
                    imdbID: movieReturn.imdbID
                    }
                }
            }    
        }
    }