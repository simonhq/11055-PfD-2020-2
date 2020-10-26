main();



// we need to be able to wait for processing to happen - so we need to make our function asynchronis
async function main() {


    // this is the list of isbn numbers we want information for
    var isbnarr = ['0261102214', '9780547773704', '9782012814141'];
    // this is the list of books we are going to create
    var bookarr = []

    // the normal for loop we have looked at so far
    for (let i = 0; i < isbnarr.length; i++) {
        let book = new bookDetail(isbnarr[i], "M");
        await book.getDetail();
        bookarr.push(book);
    }

    document.write('<h1 style="text-align:center;background-color:white;font-family:typewriter;border:2px solid blue;">Pretty Books</h1>')
    document.write('<body style="background-color:grey;">')
    document.write('<style>')
    document.write('div {margin-top:30px;padding:40px;border-radius:50px;border:20px solid black; background-color: lightgrey;}')
    document.write('</style>')

    // the for (variable of iterable) will loop through each item in an array
    for (x of bookarr) {
        document.write('<div>');
        document.write('<p style="background-color:lightgrey; font-family:americantypewriter;"</p>');
        document.write("&nbsp;&nbsp;" + x.cover() + "<br></br>");
        document.write(x.getTitle() + "<br></br>" );
        document.write(x.getAuthor() + "<br></br>");
        document.write('</div>')

        
        
    }
}











