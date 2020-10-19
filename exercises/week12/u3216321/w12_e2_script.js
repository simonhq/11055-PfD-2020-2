//Exercise 2
//Generting book covers and details for each ISBN number

//run application
main();

// create asynchornis function
async function main() {

    //ISBN numbers
    var isbnarr = ['0261102214', '9780547773704'];
    //list of books
    var bookarr = []

    //generate simple list
    for (let i = 0; i < isbnarr.length; i++) {
        let book = new bookDetail(isbnarr[i], "M");
        await book.getDetail();
        bookarr.push(book);
    }

    //write out list
    for (x of bookarr) {
        document.write(x.cover());
        document.write(x.getAuthor());
    }
}











