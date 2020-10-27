var isbnarr = ['0261102214', '9780547773704'];
var bookarr = [];


document.getElementById("button1").innerHTML = x.gettitle();

// we need to be able to wait for processing to happen - so we need to make our function asynchronis
async function main() {

    // this is the list of isbn numbers we want information for
  
    // this is the list of books we are going to create
   
   

    // the normal for loop we have looked at so far

    let book = new bookDetail(isbnarr[0], "M");
    await book.getDetail();
    bookarr.push(book);


// the for (variable of iterable) will loop through each item in an array
for (x of bookarr) {
    document.getElementById("coverimg").innerHTML = x.cover();
    document.getElementById("bookinfo").innerHTML = 
        "<br>"+"<h3>"+x.gettitle() +"<br> "+ x.getsubtitle() + "</h3>" + "<br>"+
        "<p>Author: " +x.getAuthor() +
        "<br>"+ x.getpublisher() +
        "<br>"+ x.getsubject() + "</p>"+ "<br>";
    
      

    
}

   
}
//fuction to add search isbn to the array list
function addisbn(){
    //setting the variable of the textbox
    var ISBNsearch = document.getElementById('searchbar');
    //check if the lenght of the number and if its not 10 or 13, return a alert
   if (ISBNsearch.value.length != 10 && ISBNsearch.value.length != 13)
   {
       return alert("Your Number is lest than 10 or 13");
   } 
   //if the value is 13 or 10, the ISbN is added to the array list and ready
   if (ISBNsearch.value.length == 13 || ISBNsearch.value.length ==10 )
   {
    isbnarr.push(ISBNsearch.value);

    for(let i = 0; i < isbnarr.length; i++) {
        document.write(isbnarr[i] + "<br>");
    }
   }
   
   
   
}

/*
Refernce
https://stackoverflow.com/questions/54796122/how-to-access-an-array-stored-in-a-different-js-file
https://stackoverflow.com/questions/11104439/how-do-i-check-if-an-input-contains-an-isbn-using-javascript
*/