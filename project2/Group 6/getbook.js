// Object orientation

/* writing a class
This script builds the classes for book cover and book details. It is then called in teh addBook.js script
*/

class bookCover {           //THis class builds the cover web address to download the cover image

    /* this class returns the bookcover for an isbn number in correct html using the openlibrary api
    The constructor build the correct web address, including the key and ISBN number. This allows each ISBN JSON to be accessed
    */

    constructor(isbn, size = 'S', key = 'isbn') {
        this.isbn = isbn;                                           //sets the current ISBN to the variable ISBN
        this.size = '-' + size;                                     //adds the current Siz plus the "-" character to build the web address
        this.key = key + "/";                                       //Adds the current Key and the "/" character to build the address
        this.url_a = '<img src="http://covers.openlibrary.org/b/'
        this.url_b = '.jpg" />'
    }

    size(val = "S") {                                               //This variable selects the size of the image (S, M, or L)
        this.size = '-' + val;                                      //Add the current siz to a variable to use in the constructor
    }

    display() {                                                     // This function will be called in the addbook.js

        return this.url_a + this.key + this.isbn + this.size + this.url_b;  // return the correct html for this book cover
        
    }
}

class bookDetail {                                                  /* this class returns the book details for an isbn number in correct html using the openlibrary api*/
 
    constructor(isbn, size = 'S', key = 'isbn') {
        this.isbn = isbn;
        this.key = key.toUpperCase() + ":";                         //This sets the key variable to uppercase. This is to create the correct web address
        this.bc = new bookCover(isbn, size, key);                   //This uses the current details to create a new book class, which included the ISBN, size and key
        /* visit https://openlibrary.org/dev/docs/api/books */
        this.url_a = 'https://openlibrary.org/api/books?bibkeys=';  //First part of the web address - part A
        this.url_b = '&format=json&jscmd=data';                     //last part of the web address - Part B
        /* 'https://openlibrary.org/api/books?bibkeys=ISBN:0201558025&format=json' */
        this.detail = "";

        
    }

    size(val = "M") {
        this.bc.size(val);
    }

    cover() {
        return this.bc.display();                                   //This function adds the book cover
    }
    
    async getDetail() {                                             //Async means that the code runs asyncryonously, meaning elements dont have to wait to load

        let dets = await getBookDetail(this.url_a, this.key, this.isbn, this.url_b); //this is the construction of the web address. It waits til all elements have loaded. The address is made of Address A, the key in uppercase, the ISBN then the final address segment-part B
        this.detail = dets[this.key + this.isbn];

    }

    getAuthor() {
        // get the author from the json object. The construction is author, then element 0, the name.
        return this.detail['authors'][0]['name'];
        
    }

    getTitle() {                                                    //This function gets the book title from the JSON to send to the addBook.js
        return this.detail['title'];
    }

    getNumberOfPages(){                                             //This function gets the number of pages from the JSON to send to the addBook.js
        return this.detail['number_of_pages'];
    }

    getPublishers(){
        return this.detail['publishers'][0]['name'];                //This function gets the number of pages from the JSON to send to the addBook.js            
    }

}


async function getBookDetail(url_a, key, isbn, url_b) {
    // get the url and put it into the this.detail property
    let url = url_a + key + isbn + url_b;

    try {                                                   //this element is for error catching. If there are any issues it will thro an error. This makes sure the program does not crash if there are issues
        const resp = await fetch(url);
        const jres = await resp.json();
        console.log(jres);                                  //This logs the runtime to the log file

        return jres    
        
    } catch (err) {
        throw err;
    }

}