var isbnarr = ['0261102214', '9780547773704'];
var bookarr = [];
var select = document.getElementById("selcetarr");
var optionselected = select[select.selectedIndex];
var arrvalue = select.value;
var arrayx = 0;

for(var i = 0; i < isbnarr.length; i++) {
    var opt = document.createElement('option');
    opt.innerHTML = isbnarr[i];
    opt.value = i;
    select.appendChild(opt);
}


//document.getElementById("button1").innerHTML = x.gettitle();

async function search() {
  
 

    //just getting the ISNBN in this case via a dropdown
    //just need to change these two to check search.
    var obj=document.getElementById("selcetarr");
    var index= obj.options[obj.selectedIndex].value

  
    await buildBook(isbnarr[index])
       
}



async function buildBook(isbn){

    let book = new bookDetail(isbn, "M");
    await book.getDetail();
    bookarr.push(book);

    for (x of bookarr) 
    {
        document.getElementById("coverimg").innerHTML = x.cover();
        document.getElementById("bookinfo").innerHTML = 
            "<br>"+"<h3>"+x.gettitle() +"<br> "+ x.getsubtitle() + "</h3>" + "<br>"+
            "<p> <b>"+"Summary: </b><br>"+ x.getabstract() + "<br>"+
            "<b>Author:</b><br> " +x.getAuthor() +
            "<br> <b> Publisher: </b> <br>"+ x.getpublisher() +
            "<br><b>Subject: </b><br>"+ x.getsubject() + "</p>"+ "<br>"+
            "<b>Number Pages in Book: </b><br>"+ x.getpages() +"</p>"+ "<br>";

    } 
}

function ISBNSelected(obj)
{ 
    var arrayIndex = obj.options[obj.selectedIndex].value;
   buildBook(arrayIndex)
}

//fuction to add search isbn to the array list
function addisbn()
{
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