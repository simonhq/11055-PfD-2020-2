/* Always write a comment at the top of your file saying what is for
you might even include your name and the date */

// Object orientation

/* writing a class

*/

class bookCover {

    /* this class returns the bookcover for an isbn number in correct html using the openlibrary api*/

    constructor(isbn, size = 'L', key = 'isbn') {
        this.isbn = isbn;
        this.size = '-' + size;
        this.key = key + "/";
        /* visit https://openlibrary.org/dev/docs/api/covers */
        this.url_a = '<form action="output.html" method="GET" target="_blank"><input type="image" name="submit" src="http://covers.openlibrary.org/b/'
        this.url_b = '.jpg" style="width:100%;" /> <input type="text" name="isbn" style="display: none;" value="' + isbn + '" /> </form>'; // we put a hidden isbn number here as well
        /*  The url is transformed into a form to make into a clickable 'submit' button. this is done so when thumbnail is clicked on
            isbn is passed into the url of the new page. we can then parse the url and grab the isbn from there. this method is needed
            to pass a variable from one page to the next. this is only done for the book cover as the cover needs to be clickable.
        
            bookCover constructor

            ACCEPT isbnNum, size, key

            SET url_a, url_b, key, isbn

            CREATE bookCover(isbn, size, key, url_a, url_b)

            END
        */

    }

    size(val = "L") {
        this.size = '-' + val;

        /*
        function bookCover.size

        ACCEPT val

        size = val

        END
        */
    }

    display() {

        // return the correct html for this book cover
        return this.url_a + this.key + this.isbn + this.size + this.url_b;
        
        /*
        function bookCover.display

        ACCEPT url_a, key, isbn, size, url_b variables

        CALL url_a + key + isbn + size + url_b

        END
        */

    }

}


class bookDetail {

    /* this class returns the book details for an isbn number in correct html using the openlibrary api*/

    constructor(isbn, size = 'S', key = 'isbn') {
        this.isbn = isbn;
        this.key = key.toUpperCase() + ":";
        this.bc = new bookCover(isbn, size, key);
        /* visit https://openlibrary.org/dev/docs/api/books */
        this.url_a = 'https://openlibrary.org/api/books?bibkeys=';
        this.url_b = '&format=json&jscmd=data';
        /* 'https://openlibrary.org/api/books?bibkeys=ISBN:0201558025&format=json' */
        this.detail = "";
    }

    /*
    bookDetail constructor

            ACCEPT isbnNum, size, key

            SET url_a, url_b, key, isbn, detail, bc

            CREATE bookDetail(isbn, size, key, url_a, url_b, bc)

            END
        */
    

    size(val = "S") {
        this.bc.size(val);
    }
    /*
        function bookDetail.size

        ACCEPT val

        size = val

        END
        */

    cover() {
        return this.bc.display();
    }

     /*
        function bookDetail.cover

        ACCEPT val

        size = val

        END
        */
    
    async getDetail() {

        let dets = await getBookDetail(this.url_a, this.key, this.isbn, this.url_b);
        this.detail = dets[this.key + this.isbn];

    }

    /*
        function bookDetail.getDetail

        ACCEPT url_a, key, isbn, url_b, detail
        SET dets

        dets = CALL getBookDetail(url_a, key, isbn, url_b)
        detail = dets

        END
        */

    getAuthor() {
        // get the author from the json object
        return "Author: " + this.detail['authors'][0]['name'];
/*
        function bookDetail.getAuthor

        ACCEPT detail

        CALL detail

        END
        */

        
    }

    getTitle() {
        // get the title from the json object
        return "Title: " + this.detail['title'];
        /*
        function bookDetail.getTitle

        ACCEPT detail

        CALL detail

        END
        */
    }
    
    getPublisher() {
        // get the publisher from the json object
        return "Publisher: " + this.detail["publishers"][0]["name"];
        /*
        function bookDetail.getPublisher

        ACCEPT detail

        CALL detail

        END
        */
    }
    
    getNotes() {
        return "Notes: " + this.detail["notes"];
    }

}


async function getBookDetail(url_a, key, isbn, url_b) {
    // get the url and put it into the this.detail property
    let url = url_a + key + isbn + url_b;

    try {
        const resp = await fetch(url);
        const jres = await resp.json();
        console.log(jres);

        return jres    
        
    } catch (err) {
        throw err;
    }

    /*
        function bookDetail.getAuthor

        ACCEPT url_a, key, isbn, url_b
        TRY
            CREATE url, resp, jres
            SET resp
            SET jres
            CALL jres
        CATCH err

        END
        */

}
