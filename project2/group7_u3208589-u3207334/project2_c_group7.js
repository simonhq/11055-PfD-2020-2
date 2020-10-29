

class bookCover {

    /* this class will show the book covers of the given ISBN on the HTML- the data or information are downloaded from openlibrary api*/

    constructor(isbn, size = 'S', key = 'isbn') {
        this.isbn = isbn;
        this.size = '-' + size;
        this.key = key + "/";
        /* visit https://openlibrary.org/dev/docs/api/covers */
        this.url_a = '<img src="http://covers.openlibrary.org/b/'
        this.url_b = '.jpg" />'
    }
    //  size of the book covers
    size(val = "S") {
        this.size = '-' + val;
    }

    display() {

        // display the correct HTML of books covers
        return this.url_a + this.key + this.isbn + this.size + this.url_b;
        
    }

}


class bookDetail {

    /* this class will show the book details of the given ISBN on the HTML - the data or information are from Open library bibkeys*/

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
    // size of the book
    size(val = "L") {
        this.bc.size(val);
    }
    // display the covers
    cover() {
        return this.bc.display();
    }
    // return book detail after connecting the open library source 
    async getDetail() {

        let dets = await getBookDetail(this.url_a, this.key, this.isbn, this.url_b);
        this.detail = dets[this.key + this.isbn];

    }
    // get authors' name from json object
    getAuthor() {
        
        return this.detail['authors'][0]['name'];
        
    }
    // get the number of page from json object
    getPages(){
        return this.detail['number_of_pages'];
    }
    // get the titles of the books from json object
    getTitle(){
        return this.detail['title'];
    }
    // get the published date of the book from json object 
    getPublishDate(){
        return this.detail ['publish_date'];
    }

    
}


async function getBookDetail(url_a, key, isbn, url_b) {
    // after getting the url, place it into html 
    let url = url_a + key + isbn + url_b;

    try {
        const resp = await fetch(url);
        const jres = await resp.json();
        console.log(jres);

        return jres    
        
    } catch (err) {
        throw err;
    }

}