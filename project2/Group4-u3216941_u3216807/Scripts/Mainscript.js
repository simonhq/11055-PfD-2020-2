/*
Created by Seth and Taylor
Info: This javascript file is the main script for the program.
Which all the main parts that makes the program run.
*/ 


//The  ISBN array, store all the number
var isbnarr = ['0261102214', '9780547773704'];
//bookarr adds the book info into here
var bookarr = [];


//new function to build the array into the dropdown menu
function buildArray(isbnarr){    
//create variable for the dropdown menu
    var select = document.getElementById("selcetarr");
    //create variable for the length of dropdown
    var o, L = select.options.length - 1;
    //for loop to remove the current items in dropdown, so no dupcation when repoplulated
    for(o = L; o >= 0; o--) {
        select.remove(o);
    }
    //for loop to repoplulated the dropdown
    for(var i = 0; i < isbnarr.length; i++) {
        //create a variable for option, and create otion element in select on html
        var opt = document.createElement('option');
        //adding the array to the option using innerhtml
        opt.innerHTML = isbnarr[i];
        //setting the vaule of added array to array index value
        opt.value = i;
        //adding the option child to the drop down menu
        select.appendChild(opt);
    }
}
//new fuction for search and selcting item in dropdown
function getFormElementISBN(){
    //setting variable isbn to be empty and creating variable for textboxs
    var isbn=""
    var ISBNsearch=document.getElementById("searchbar");
    //trimming the result of textbox of any unessary values like dash, so it only numbers
    var isbn= ISBNsearch.value.trim();
    //checking if the lenght is either 10 or 13 and if nothing in textbox goes striaght to dropdown
    if (isbn.length == 10 || isbn.length == 13)
    {
        //checks if the value in textbox is inclued in the array list, if not
        //add the new value to array and builds the dropdown
        if(!isbnarr.includes(isbn)){
            isbnarr.push(isbn);
            buildArray(isbnarr);
        }
        //returns the isbn and gives information about book
        return isbn;
    }
    //create varable for the dropdown
    var ISBNDropDown=document.getElementById("selcetarr");
    //if the option in the dropdown is selected, it return the  value and then the book display
    if(ISBNDropDown && ISBNDropDown.options && ISBNDropDown.options[ISBNDropDown.selectedIndex].value)
    {
        return isbnarr[ISBNDropDown.options[ISBNDropDown.selectedIndex].value]
    }
  return null
}
async function search() {
    //calls the getformelementsISBN
     var isbn= getFormElementISBN()

    //check if the lenght of the number and if its not 10 or 13, return a alert
   if (!isbn && isbn!="")
   {
       //check dropdown has value
        return alert("Your ISBN number is incorrect - please enter a valid 11 or 13 digit ISBN number or select from the drop down");
   } 
   //if the value is 13 or 10, the ISbN is added to the array list and ready
  
       
   //waits for the buildbook to be called     
  await buildBook(isbn)
       
}



async function buildBook(isbn){
//letting the book been new bookdetail that contains the isbn number and the size of cover
    let book = new bookDetail(isbn, "M");
    //waits for detail be runned
    await book.getDetail();
    //pushes the book info into a seprate array
    bookarr.push(book);
    
    // for invalid ISBN numbers
    if (book.detail === undefined){
        // removes error from array list
          isbnarr.pop();
          return alert("Your ISBN number is invalid - please enter a new number");
      }


    for (x of bookarr) 
    {
        //writes the book infomation into seprate css div
        document.getElementById("coverimg").innerHTML = x.cover();
        document.getElementById("bookinfo").innerHTML = 
            x.gettitle() + x.getsubtitle() + x.getabstract()+x.getAuthor() + x.getpublisher() + x.getsubject() + x.getpages() ;

    } 
}
//a intinal fuction which loads and calls fuction when program is first loaded
function init(){
    buildArray(isbnarr);
}




/*
Refernce
https://stackoverflow.com/questions/54796122/how-to-access-an-array-stored-in-a-different-js-file
https://stackoverflow.com/questions/11104439/how-do-i-check-if-an-input-contains-an-isbn-using-javascript
*/