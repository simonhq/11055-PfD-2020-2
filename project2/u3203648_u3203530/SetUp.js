//set up document to define varibales to be used in working document 

//Create class for Book Cover
class bookCover {
    //define varriables for book cover link 
    constructor(isbn, size = 'S', key = 'isbn') {
        this.isbn = isbn;
        this.url_a = '<img src="http://covers.openlibrary.org/b/'
        this.key = key + "/";
        this.size = '-' + size;
        this.url_b = '.jpg"'
    }
    size(val = "S") {
        this.size = '-' + val;
    }
    //Create the Cover link from the variables 
    display() {
        return this.url_a + this.key + this.isbn + this.size + this.url_b;
    }
}

//Create class for Book Detail 
class bookDetail {
    //define varriables for book detail link
    constructor(isbn, size = 'S', key = 'isbn') {
        this.isbn = isbn;
        this.url_a = 'https://openlibrary.org/api/books?bibkeys=';
        this.key = key.toUpperCase() + ":";
        this.bc = new bookCover(isbn, size, key);
        this.url_b = '&format=json&jscmd=data';
        this.detail = "";
    }
    //book cover size
    size(val = "S") {
        this.bc.size(val);
    }
    //book cover key 
    cover() {
        return this.bc.display();
    }
    //Create the Detail link from the variables 
    async getDetail() {

        let dets = await getBookDetail(this.url_a, this.key, this.isbn, this.url_b);
        this.detail = dets[this.key + this.isbn];
    }
    //information keys 
    getTitle() {
        return this.detail['title'];
    }
    getAuthor(){
        return this.detail['authors'][0]['name'];
    }
    getPageNumbers(){
        return this.detail['number_of_pages'];
    }
    getPublishDate(){
        return this.detail['publish_date'];
    }
    getPublishers(){
        return this.detail['publishers'][0]['name'];
    }
    getSubjects(){
        return this.detail['subjects'][0]['name']
    }
    //will link to a page in the open library site 
    getSubURL(){
        return this.detail['subjects'][0]['url']
    }
}

//Create Async function for errors 
async function getBookDetail(url_a, key, isbn, url_b) {
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