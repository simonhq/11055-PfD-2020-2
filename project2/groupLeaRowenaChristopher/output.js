/* Always write a comment at the top of your file saying what is for
you might even include your name and the date */

// Object orientation

/* writing a class

*/


// run the application
main();



// we need to be able to wait for processing to happen - so we need to make our function asynchronis
async function main() {

    var isbnPos = window.location.search.indexOf("isbn=") + 5; // searches the URL for the isbn number and adds 5 so we get the number and not 'isbn='
    var isbnNum = window.location.search.substring(isbnPos); // grabs the isbn from URL
    // this is the list of isbn numbers we want information for
    var isbnarr = [isbnNum]; // story isbn in array
    console.log(isbnNum);
    // this is the list of books we are going to create
    var bookarr = [];

    // this loop gets the isbn array and cycles through the amount of items in the array. in each cycle it creates a book detail object and calls getDetail and 
    // finally pushes the object to book array
    for (let i = 0; i < isbnarr.length; i++) {
        let book = new bookDetail(isbnarr[i], "L");
        await book.getDetail();
        bookarr.push(book);
    }

    var bookContainerStart = "<div style='margin: 0 auto;'>";
    var coverStart =
        "<div style='border: 6px solid goldenrod; width: 17%; display: inline-block; margin-left: 10%; '>";
    var coverEnd = 
        "</div>";
    var detailStart = "<div style='border: 6px solid goldenrod; width: 17%; display: inline-block; color: goldenrod; padding: 20px;'>";
    var detailEnd = "</div>"

    // the for (variable of iterable) will loop through each item in an array
    for (x of bookarr) {
        document.getElementById("book").innerHTML += (coverStart + x.cover() + coverEnd);
        document.getElementById("book").innerHTML += (detailStart + x.getAuthor() +"<br>" + x.getPublisher() +"<br>" + x.getTitle() + "<br>" + x.getNotes() +"<br>" + detailEnd);
        // document.getElementById("book").innerHTML += ();
        // document.getElementById("book").innerHTML += ();
    }

    /*
        function main

        ACCEPT url

        SET isbnPos, isbnNum, isbnArr, bookArr

        FOR item in isbnArr
            CREATE book = CALL bookDetail(isbnArr, Size)
            CALL book.getDetail(item)
            CALL bookArr.push(book)
        END

        CREATE bookContainerStart, coverStart, coverEnd
        */
}













