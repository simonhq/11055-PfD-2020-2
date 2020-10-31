/* Always write a comment at the top of your file saying what is for
you might even include your name and the date */

// Object orientation

/* writing a class

*/


// run the application
main();



// we need to be able to wait for processing to happen - so we need to make our function asynchronis
async function main() {

    // this is the list of isbn numbers we want information for
    var isbnarr = ['0261102214', '9780547773704'];
    // this is the list of books we are going to create
    var bookarr = []

        // this loop gets the isbn array and cycles through the amount of items in the array. in each cycle it creates a book detail object and calls getDetail and 
    // finally pushes the object to book array
    for (let i = 0; i < isbnarr.length; i++) {
        let book = new bookDetail(isbnarr[i], "L");
        await book.getDetail();
        bookarr.push(book);
    }

    var coverStart =
        "<div style='border: 6px solid goldenrod; width: 17%; display: inline-block; margin-left: 10%; margin-bottom: 10px;'>";
    var coverEnd = 
        "</div></div>";
    // var bookContainerEnd = "</div>"


    // the for (variable of iterable) will loop through each item in an array
    
    for (x of bookarr) {
        document.getElementById("book").innerHTML += (coverStart + x.cover() + coverEnd);
    }
}













