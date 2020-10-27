//This will hold the functions and classes that get the bookDetails and Movie info; also handles finding the book that the user inputs

//key to use the api of Movie Database
// apiKey= "be0a41f9413fd3b245db2c906807e659";


//This function finds the book the user inputs and puts all that it finds in the output Div
function findBooks(){
    document.getElementById("output").innerHTML="<p3>Book Search Results</p3><br>";
    fetch("http://openlibrary.org/search.json?q="+document.getElementById("bookSearchInput").value)//gets the results for the book search
    .then(a => a.json())
    .then(Response =>{
        for(var i=0; i < Response.docs.length; i++){//this is the formating of the information gotten from openlibraries
            document.getElementById("output").innerHTML+=
            "<div class='column' id='bookSearchResults'>"+
            "<img id='searchBookCover' src='http://covers.openlibrary.org/b/isbn/"+Response.docs[i].isbn[0]+"-M.jpg' /><br>"+
            "<p2>Title: "+Response.docs[i].title+"</p2>"+
            "<p>Author: "+Response.docs[i].author_name[0]+"</p>"+
            "<p>Published: "+ Response.docs[i]["publish_date"][i]+"</p>"+
            "<p>Pages: "+Response.docs[i]["number_of_pages"]+"</p>"+
            "<p>ISBN Number: "+Response.docs[i].isbn[0]+"</p>"+
            "</div>";
        }
    });
}

//this function finds any result for the input and displays them in output
async function findMovie(){
    let movieList = "";
    let movieName = document.getElementById("movieSearchInput").value;
    //let movieName = "The Hobbit";
    movieList = await getMovieList(movieName);
    document.getElementById("output").innerHTML = "Movie Search Results <br>";
    for(let x = 0; x < movieList['results'].length; x++){//formatting for the movie information
        document.getElementById("output").innerHTML+=
            "<div class='column' id='bookSearchResults'>"+
            "<img id='moviePoster' src='http://image.tmdb.org/t/p/w200/"+movieList['results'][x]['poster_path']+"' />"+
            "<p2>"+movieList['results'][x]['title']+"</p2>"+
            "<p>Amount of votes: "+movieList['results'][x]['vote_count']+"</p>"+
            "<p>Average Review: "+movieList['results'][x]['vote_average']+"</p>"+
            "<p>Release Date: "+movieList['results'][x]['release_date']+"</p>"+
            "</div>";
    }

}

//this handles getting the cover to the book for book detail
class getBookCover{
    //Returns the correct image Html for the given isbn number

    constructor(isbn, size="S", key="isbn"){
        this.isbn = isbn;
        this.size = "-"+size;
        this.key = key.toLowerCase()+"/";
        this.url_a = "<img id='BookdetailsBookcover' src='http://covers.openlibrary.org/b/";
        this.url_b = ".jpg' />";
    }

    //sets the size if not given one
    size(val = "S"){
        this.size = "-"+val
    }

    display() {
        //returns the html directory in correct format
        return this.url_a + this.key + this.isbn + this.size + this.url_b;
    }
}

//this class gets the movie details
class movieDetail {
    //handles getting all the information on a movie

    constructor(name){
        this.name = name;
        this.api_key = "be0a41f9413fd3b245db2c906807e659";
        this.url_a = "https://api.themoviedb.org/3/search/movie?api_key=";
        this.url_b = "&language=en-US&query=";
        this.url_c = "&page=1&include_adult=false";
        this.poster_url_a = "<img id='moviePoster' src='http://image.tmdb.org/t/p/w200/";
        this.poster_url_b = "' />";
        this.detail = "";
    }

    async getDetail(){
        let dets = await getMovieDetail(this.url_a, this.api_key, this.url_b, this.name, this.url_c);
        this.detail = dets;
    }

    getName(){
        return this.name
    }

    getReleaseDate(){
        return this.detail['release_date']
    }

    getPosterImage(){
        return this.poster_url_a+this.detail['poster_path']+this.poster_url_b
    }

    getAverageRating(){
        return this.detail['vote_average']
    }
}

//This class gets the book details
class bookDetail {
    //Handles getting all the infomation on a book

    constructor(isbn, size = 'S', key='isbn'){
        this.isbn = isbn;
        this.key = key.toUpperCase()+ ":";
        this.bc = new getBookCover(isbn, size, key);
        this.url_a = "https://openlibrary.org/api/books?bibkeys=";
        this.url_b = "&format=json&jscmd=data";
        this.detail = "";
    }

    size(val = 'S'){
        this.bc.size(val);
    }

    cover(){
        return this.bc.display();
    }

    async getDetail(){

        let dets = await getBookDetails(this.url_a, this.key, this.isbn, this.url_b);
        this.detail = dets[this.key + this.isbn];
    }

    getAuthor(){
        //get author from the json object
        return this.detail['authors'][0]['name']
    }

    getTitle(){
        //get title from json object
        //this also handles catching bad isbn numbers
        try{
            return this.detail['title']
        } catch(err){
            return undefined
        }

    }

    getExerpt(){
        //get exerpt from json object
        return this.detail['exerpts'][0]['text']
    }

    getPublishDate(){
        return this.detail['publish_date']
    }

    getPageAmount(){
        //get amount of pages from json object
        return this.detail['number_of_pages']
    }
}

//this class gets movie details

//get book details in the form of a json file
async function getBookDetails(url_a, key, isbn, url_b){
    //put the details in a this.details property
    let url = url_a + key + isbn + url_b;

    try {
        const resp = await fetch(url);
        const jres = await resp.json();
        return jres
    } catch (err){
        throw err;
    }
}

//gets a list of movies and finds the movie with the same name
async function getMovieDetail(url_a, api_key,url_b, name, url_c){
    //puts them in a this.detail file
    let url = url_a+api_key+url_b+name+url_c;
    try{
        const resp = await fetch(url);
        const jres = await resp.json();
        let movie = "";
        for(let x = 0; x < jres.results.length; x++){
            let title = jres.results[x]["title"];
            if(title.toLowerCase() == name.toLowerCase()){
                movie = jres.results[x];
                break;
            }
        }
        return movie
    } catch(err){

        throw err;
    }
}

//gets a list of movies
async function getMovieList(name){
    //puts them in a movieList file
    let api_key = "be0a41f9413fd3b245db2c906807e659";
    let url_a = "https://api.themoviedb.org/3/search/movie?api_key=";
    let url_b = "&language=en-US&query=";
    let url_c = "&page=1&include_adult=false";

    let url = url_a+api_key+url_b+name+url_c;
    try{
        const resp = await fetch(url);
        const jres = await resp.json();
        return jres
    } catch(err){

        throw err;
    }
}