//Exercise 1
//Generting book covers for each ISBN number

//ISBN numbers
var isbnarr = ['0261102214', '9780547773704'];
//list of books
var bookarr = []

//generate simple list
for (let i = 0; i < isbnarr.length; i++) {
    bookarr.push(new bookCover(isbnarr[i], "M"));
}

//write out list
for (x of bookarr) {
    document.write(x.display());
}