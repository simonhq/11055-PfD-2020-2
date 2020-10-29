//this file will activate anything that does not require user input

//runs the application and any of the functions inside it once
main();
function main() {
    
    
    findIsbnCorrelation();

    // tellIsbnKeys();
    // getBooksMovies();
}

//this function gets any bookDetail given for the ISBN numbers, then outputs to isbnResults
//dosn't like being in the same file as what it's calling since it's called first before activating the classes
async function findIsbnCorrelation(){
    var bookarr = [];
    var moviearr = [];
    
    try{
        if(isbnlist.length != 0){
            for(let i = 0; i < isbnlist.length; i++){
                let book = new bookDetail(isbnlist[i], "M");
                await book.getDetail();
                if(book.getTitle() != undefined){
                    let movie = new movieDetail(book.getTitle());
                    await movie.getDetail();
                    bookarr.push(book);
                    moviearr.push(movie);
                }
            }
            document.getElementById("isbnResultsBooks").innerHTML +="<h1>The Results for the Books</h1>";
            for(x of bookarr){
                document.getElementById("isbnResultsBooks").innerHTML +=
                "<div class='column' id='bookDetails'>"+
                x.cover()+
                "<p2>Title: "+x.getTitle()+"</p2>"+
                "<p>Author: "+x.getAuthor()+"</p>"+
                "<p>Published: "+ x.getPublishDate()+"</p>"+
                "<p>Pages: "+x.getPageAmount()+"</p>"+
                "</div>";
                
            }
            document.getElementById("isbnResultsMovies").innerHTML +="<h1>The Results for Movies of the Books</h1>"
            for (x of moviearr){
                if(x.getReleaseDate() != undefined){
                    document.getElementById("isbnResultsMovies").innerHTML +=
                    "<div class='column' id='movieDetails'>"+
                    x.getPosterImage()+
                    "<p2>"+x.getName()+"</p2>"+
                    "<p>Released: "+x.getReleaseDate()+"</p>"+
                    "<p>Average Rating: "+x.getAverageRating()+"</p>"+
                    "</div>";
                }
            }
        } else{
            document.getElementById("isbnResults").innerHTML = "There are no elements in the isbnList try with a new file."
        }
    } catch(err){
        document.getElementById("isbnResults").innerHTML = "WOW! there is no isbnlist. you're not meant to see this."
    }
}