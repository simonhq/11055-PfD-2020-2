/*
Created by Seth and Taylor
Info: This javascript file is the classes for the
book information and book cover.
*/ 


//The class recive the book cover from the open libary using the isbn number that has been given
class bookCover {
    //contrastor seting the isbn number, the size of cover
   constructor(isbn, size = 'S', key = 'isbn') {
        this.isbn = isbn; //set the current isbn to be isbn
        this.size = '-' + size;
        this.key = key + "/";
        this.url_a = '<img src="http://covers.openlibrary.org/b/' //first section of the link
        this.url_b = '.jpg" />'//end section, using jpg becuase of the book cover is a image
    }

    size(val = "S") {
        this.size = '-' + val;
    }

    display() {
        //combine the cover link with the key and the isbn number and size
        return this.url_a + this.key + this.isbn + this.size + this.url_b;
        
    }

}

//The class return the information of the book source from the open libary
class bookDetail {

  
    constructor(isbn, size = 'S', key = 'isbn') {
        this.isbn = isbn; //set current isbn to be use
        this.key = key.toUpperCase() + ":"; //set the key to be upcase (lowcase become upcase) and add colum (:)
        this.bc = new bookCover(isbn, size, key);//create new bookcover for this class
        this.url_a = 'https://openlibrary.org/api/books?bibkeys=';
        this.url_b = '&format=json&jscmd=data';
        this.detail = "";
    }
//set size of cover, defult set to Small
    size(val = "S") {
        this.bc.size(val);
    }
//calls the cover
    cover() {
        return this.bc.display();
    }
    //getdetail, combining all the different parts of the url and adding the isbn number that was picked
    async getDetail() {

        let dets = await getBookDetail(this.url_a, this.key, this.isbn, this.url_b); //getting book info from the link
        this.detail = dets[this.key + this.isbn];

    }
//This section is for all catgory of infmation that is get recive for the html and inclueding the 
//html tags
   gettitle(){
       //the if and else statement is checking if the bookinfo contains it, if it doesn't contain it  return nothing
    if (!this.detail['title'])
    return "";
  else{
       return "<br>"+"<h3>"+this.detail['title']+ "</h3>" + "<br>";
  }  
   }
   getsubtitle(){
       if (!this.detail['subtitle'])
         return "";
       else{
       return this.detail['subtitle'] +"<br> ";
         
       }
   }
   getabstract(){
       if(!this.detail['excerpts'])
        return "";
      else{
        return  "<p> <b>"+"Summary: </b><br>" +this.detail['excerpts'][0]['text']+"</p>";
      } 
   }
    getAuthor() {
        if(!this.detail['authors'])
            return "";
      else{
        return "<p><b>Author:</b><br> " + this.detail['authors'][0]['name'] +"</p>";
        }
    }
    getpublisher(){
        if(!this.detail['publishers'] && !this.detail['publish_date'] )
        return "";
  else{
        return  "<p><br> <b> Publisher and date: </b> <br>"+ this.detail['publishers'][0]['name'] +"<br>" +this.detail['publish_date'] +"</p>";
  }
    }
    getsubject(){
        
        if(!this.detail['subjects'])
        return "";
  else{
        return "<p><br><b>Subject: </b><br>"+ this.detail['subjects'][0]['name'] +"</p>"+ "<br>";
        
    }
    }

    getpages(){
        if(!this.detail['number_of_pages'])
        return "";
  else{
        return  "<p><b>Number Pages in Book: </b><br>"+ this.detail['number_of_pages']+"</p>"+ "<br>";
  }
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

}