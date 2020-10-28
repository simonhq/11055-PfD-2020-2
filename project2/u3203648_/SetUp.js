class bookCover {

    constructor(isbn, size = 'S', key = 'isbn') {
        this.isbn = isbn;
        this.size = '-' + size;
        this.key = key + "/";
        this.url_a = '<img src="http://covers.openlibrary.org/b/'
        this.url_b = '.jpg"'
    }

    size(val = "S") {
        this.size = '-' + val;
    }

    display() {
        return this.url_a + this.key + this.isbn + this.size + this.url_b;
    }

}


class bookDetail {

    constructor(isbn, size = 'S', key = 'isbn') {
        this.isbn = isbn;
        this.key = key.toUpperCase() + ":";
        this.bc = new bookCover(isbn, size, key);
        this.url_a = 'https://openlibrary.org/api/books?bibkeys=';
        this.url_b = '&format=json&jscmd=data';
        this.detail = "";
    }

    size(val = "S") {
        this.bc.size(val);
    }

    cover() {
        return this.bc.display();
    }
    
    async getDetail() {

        let dets = await getBookDetail(this.url_a, this.key, this.isbn, this.url_b);
        this.detail = dets[this.key + this.isbn];
    }

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

    getSubURL(){
        return this.detail['subjects'][0]['url']
    }


}


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