class bookDetail {

    constructor(isbn){ //Creates URL from ISBN to send an API request
        this.isbn = isbn;
        this.url_start = 'https://openlibrary.org/api/books?bibkeys=ISBN:';
        this.url_end = '&format=json&jscmd=data'
        this.info = "";
    }

    async getInfo(){
       let details = await getBookDetail(this.url_start,this.isbn,this.url_end);
       this.info = details['ISBN:' + this.isbn]; //loads the data specific to the ISBN
    }
    getAuthor(){
        return this.info['authors'][0]['name']; //returns author of book
    }
    getPages() {
        return this.info['number_of_pages']; //returns the amount of pages in the book
    }
    getTitle(){
        this.title = this.info['title']; //returns the title of the book
        return this.title;
    }
    getPublishers(){
        return this.info['publishers'][0]['name']; //returns the publishers of the book
    }
    getDate(){
        return this.info['publish_date']; //returns date book was published
    }
    getNotes(){
        return this.info['notes'];
    }
    /*getBookUrl(){ This function works its just problematic creating linkable text in p5js
        return this.info['url'];
    }*/

}
async function getBookDetail(url_start,isbn,url_end){ //Sends fetch request to get book information from API using url created above
    let url = url_start + isbn + url_end;
    try{
        const request = await fetch(url);
        const reqinfo = await request.json();
        console.log(reqinfo);
        return reqinfo;
    } catch(err){
        console.log(err);
        throw err;
    }
}

class movieDetail{ //Creates a class for movie details
    constructor(title2){
      this.title2 = title2;
      this.Minfo = "";
    }
    async getInfo(){ //unlike the book class all information that needs to be displayed is set here as the movies aren't stored on an array but instead accessed on demand via a button
      let Minfo = await getMovieDetail(title2); //waits for fetch request to get data
      if ((Minfo.results).length<1){
        movieTrue = "Sorry we could not find a movie with that name"; //error handling in case no movie is found
      }
      if ((Minfo.results).length>0){ //sets all the data to be displayed
        movieTrue = "Yes!";
        this.info = Minfo.results[0]['title'];
        this.lan = Minfo.results[0]['original_language'];
        this.rate = Minfo.results[0]['vote_average'];
        this.vote = Minfo.results[0]['vote_count'];
        this.summ = Minfo.results[0]['overview'];
        movieTitle = 'Movie Title: '+ this.info; 
        language = "Language: "+ this.lan;
        rating = "Rating: "+this.rate+'/10';
        votes = "Out of: "+this.vote +' votes';
        summary ="Overview: "+this.summ;
      }
    }
}
  
  async function getMovieDetail(title2){ //Fetch request to find movie information using a URL
    url_Mstart = 'https://api.themoviedb.org/3/search/movie?api_key=91d66e53371172dea447a7a6d50a7ca1&language=en-US&query=';
    url_Mend ='&page=1&include_adult=false'; 
    url2 =url_Mstart+title2+url_Mend;
    try{
        const Mrequest = await fetch(url2);
        const Minfo = await Mrequest.json();
        console.log(Minfo);
        return Minfo;
        
    }
    catch(err){
        console.log(err);
        throw err;
    }
  }




