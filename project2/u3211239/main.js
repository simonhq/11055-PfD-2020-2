/*  Programming for Design
    Project 2 - Book Information Website
    Keir Herbert (u3211239)
    October 2020
*/

//  For the group - Keir Herbert, Michael Coward, & Sujith Kumar.

main();

async function main() {                                             //  Create the asynchronous function allowing the 'await' keyword to be used.
    
    const tableOfBooks = document.getElementById("tableBody");      //  Create a constant which points to the HTML table element's ID.
    var bookDetails = [];                                           //  Dimension an array to hold all of the book's details.
    var movieDetails = [];                                          //  Dimension an array to hold all of the movie's details.
    
    for (index = 0; index < isbnlist.length; index++) {             //  Setup an array index and loop until reaching the end of the ISBN array. Increment the index with each pass.
        
        let book = new bookDetail(isbnlist[index], "M");            //  Create a variable to hold all of the object data to be collected by getDetail.
        await book.getDetail();                                     //  Wait to collect all of the book details but don't tie up the CPU.
        bookDetails.push(book);                                     //  Push the collected details into the new array.
        
        let movie = new movieInfo(book.getTitle());                 //  Create a variable to hold all of the object data to be collected by getInfo.
        await movie.getInfo();                                      //  Wait to collect all of the movie info but don't tie up the CPU.
        console.log(movie.getMovieTitle());
        movieDetails.push(movie);                                   //  Push the collected details into the new array;

        let row = tableOfBooks.insertRow();                         //  Insert a new row into the HTML table and link it to variable 'row'.
        let cover = row.insertCell(0);                              //  Insert a new cell into the row at column 0 and link it to variable 'cover'.
        let title = row.insertCell(1);                              //  Insert a new cell into the row at column 1 and link it to variable 'title'.
        let author = row.insertCell(2);                             //  Insert a new cell into the row at column 2 and link it to variable 'author'.
        let publisher = row.insertCell(3);                          //  Insert a new cell into the row at column 3 and link it to variable 'publisher'.
        let publishDate = row.insertCell(4);                        //  Insert a new cell into the row at column 4 and link it to variable 'publishDate'.
        let pageCount = row.insertCell(5);                          //  Insert a new cell into the row at column 5 and link it to variable 'pageCount'.
        let filmTV = row.insertCell(6);                             //  Insert a new cell into the row at column 6 and link it to variable 'filmTV'.
        filmTV.href = "http://google.com";   

        cover.innerHTML = book.cover();                             //  Place the book cover image into the cell called 'cover'.
        title.innerHTML = book.getTitle();                          //  Place the book title into the cell called 'title'.
        author.innerHTML = book.getAuthor();                        //  Place the author into the cell called 'author'.
        publisher.innerHTML = book.getPublisher();                  //  Place the publisher into the cell called 'publisher'.
        publishDate.innerHTML = book.getPublishedDate();            //  Place the date of publication into the cell called 'publishDate'.
        pageCount.innerHTML = book.getPageCount();                  //  Place the page count into the cell called 'pageCount'
        filmTV.innerHTML = movie.getMovieTitle();                   //  Place the possible movie connection into the cell called 'filmTV'.
    }
}