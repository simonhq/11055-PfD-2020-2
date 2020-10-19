//Class 1
//Writing the bookCover class for Exercise 1

//visit: https://openlibrary.org/dev/docs/api/covers

class bookCover {

    constructor(isbn, size = 'S', key = 'isbn') {
        this.isbn = isbn;
        this.size = '-' + size;
        this.key = key + "/";
        this.url_a = '<img src="http://covers.openlibrary.org/b/'
        this.url_b = '.jpg" />'
    }

    display() {

        //construct image URL
        return this.url_a + this.key + this.isbn + this.size + this.url_b;
        
    }

}
