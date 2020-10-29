
 
/*main()*/

// wait for the process happens before adding the book detail into the collection of books 
async function primary() {

    // the list of ISBN are required to get information from Open Library 
    var isbnarr = ['0261102214', '9780547773704'];
    // create collection of books 
    var bookarr = []

    // the first loop to  add the book detail into the collection of books 
    for (let i = 0; i < isbnarr.length; i++) {
        let book = new bookDetail(isbnarr[i], "M");
        await book.getDetail();
        bookarr.push(book);
    }

    // the second loop will loop through each array and display all information on the HTML
    for (x of bookarr) {
        document.write( x.cover() + "<br>");
        document.write("Authors: " +  x.getAuthor()+"<br>");
        document.write("Pages: " + x.getPages()+"<br>");
        document.write("Title: " + x.getTitle()+"<br>");
        document.write("Date Publish: " + x.getPublishDate() + "<br>");


}
    

}


// click the button to activate the loop with break - the break statement will exit the loop when ISBNpara of getBookInfor is equal to the list of given ISBN 

// var isbnarr = ['0261102214', '9780547773704'];
// var bookarr = [];

// for (let i = 0; i < isbnarr.length; i++) {
//     let book = new bookDetail(isbnarr[i], "M");
//     await book.getDetail();
//     bookarr.push(book);
// }
 
// wait for the process happens before adding the book detail into the collection of books 

 async function getBookInfor(ISBNpara){

 
    // the list of ISBN are required to get information from Open Library 
    var isbnarr = ['0261102214', '9780547773704'];
    // create collection of books 
    var bookarr = []

     // the first loop to  add the book detail into the collection of books 
    for (let i = 0; i < isbnarr.length; i++) {
        let book = new bookDetail(isbnarr[i], "M");
        await book.getDetail();
        bookarr.push(book);
    }

//  list the book information on HTML - the break statement will exit the loop when ISBNpara is equal to isbanarr 
    for (let i = 0; i < isbnarr.length; i++) {
        if (ISBNpara == isbnarr[i]) {
            var x = bookarr[i];

            document.write( x.cover() + "<br>");
            document.write("Authors: " +  x.getAuthor()+"<br>");
            document.write("Pages: " + x.getPages()+"<br>");
            document.write("Title: " + x.getTitle()+"<br>");
            document.write("Date Publish: " + x.getPublishDate() + "<br>");
         break;
        }
        
    }


    // for (x of bookarr) {
    //     document.write( x.cover() + "<br>");
    //     document.write("Authors: " +  x.getAuthor()+"<br>");
    //     document.write("Pages: " + x.getPages()+"<br>");
    //     document.write("Title: " + x.getTitle()+"<br>");
    //     document.write("Date Publish: " + x.getPublishDate() + "<br>");

    // }
}











