/* Always write a comment at the top of your file saying what is for
you might even include your name and the date */

// Object orientation

/* writing a class

*/

// this is the list of isbn numbers we want information for
var isbnarr = ['0261102214', '9780547773704'];
// this is the list of books we are going to create
var bookarr = []

// the normal for loop we have looked at so far
for (let i = 0; i < isbnarr.length; i++) {
    bookarr.push(new bookCover(isbnarr[i], "M"));
}

// the for (variable of iterable) will loop through each item in an array
for (x of bookarr) {
    document.write(x.display());
}