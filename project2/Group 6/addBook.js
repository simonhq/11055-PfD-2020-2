/* Project 2 book display for students U3189665, U103850 and U3211959
This script adds new books to the book constructor created in getBook.js and displays them in teh web page.
*/

// run the application
main();

// we need to be able to wait for processing to happen - so we need to make our function asynchronis
async function main() {

    /* this next section of code was to create and read the array from within this script.
    We made the script call the isbn.js once we declared the array in that file as a const, rather than a var.
    If there are issues this code can be uncommented to run the array locally
    
    //var isbnarr = ['0261102214', '9780547773704', '9780261103252'];   //this is the array of ISBN numbers. Due to the loop, it can be as big or as small as
                                                                        // this is the list of books we are going to create
    */
        var bookarr = []    

    // This section adds the new books to the bookarr aray. This is calling from the global array ISBNLIST in isbn.js
    if (isbnlist.length > 0)                        //This if statement is an error catch if there are no values in the isbnarr. 
    for (let i = 0; i < isbnlist.length; i++) {     //This loop creates new additions to the isbn array. It continues for all elements in the array.
        let book = new bookDetail(isbnlist[i], "M");
        await book.getDetail();                     //this waits for all details to be brought down before starting the next element
        bookarr.push(book);                         //this pushes the BOOK variable into the Array
    }
    
    else {
      document.write("The array is empty");         //Resulting message if the array is empty  (i.e isbnlist.length = 0)
    
    }
    document.write('<link rel="stylesheet" href="style.css">');
    document.write("<H1>This is the Book Database for Students U3189665, U103850 and U3211959 </H1>");
        
    document.write("<table BORDER = 1>"); //These are the table headings. Each one appears indepentant of the rows that are created below.
    document.write("<th> Cover </th>");
    document.write("<th> Author </th>");
    document.write("<th> Title </th>");
    document.write("<th> Number of Pages </th>");
    document.write("<th> Publisher </th>");
    

    for (x of bookarr) {            //This for loop iterateds for each entry in the book array.
       //The next line adds all teh elements to the HTML table.
        document.write("<tr><td>" + x.cover(), "</td> <td>" + x.getAuthor(), "</td> <td>" + x.getTitle(), "</td> <td>" + x.getNumberOfPages(), "</td> <td>" + x.getPublishers(), "</td> </TR>" );
       

        /* this section was playing around with the formatting of the HTML to see if there were better ways of creating the element.
        We could nto get it to work correctly in time, but has been left here if we ever revisit this.

        This code does not need to be run
        */
        

        /*
        var tbl = document.createElement("TABLE");
    // the for (variable of iterable) will loop through each item in an array
    for (x = 0; x < isbnlist.length; x++) {
        
        // document.write(x.cover());
        // document.write(x.getAuthor());
        // document.write(x.getTitle());
        // document.write(x.getNumberOfPages());
        // document.write(x.getPublishers());

        
        var row = document.createElement("TR");
        for (e = 0; e < 5; e++) {

            var cell = document.createElement("TD");
            //first column
            if (e == 0) {
                var calltext = document.createTextNode("isbn is " + isbnlist[x]);
                cell.appendChild(calltext);
            }
            //seccond column
            else if (e==1){
                var calltext = document.createTextNode(bookarr[x].getAuthor());
                cell.appendChild(calltext);
            }
            //third column
            else if (e==2){
                var img = document.createElement('img'); 
            img.src = 'https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png'; 
            document.getElementById('cell').appendChild(img);
            down.innerHTML = "Image Element Added.";
                    }
            

            //fourth column
            else if (e==3){
                var heyo = document.createTextNode("I don't know");
                cell.appendChild(heyo);
            }
            //fifth column
            else if (e==4){
                var heyo = document.createTextNode("made with memematic");
                cell.appendChild(heyo);
            }
            row.appendChild(cell);
        }
        tbl.appendChild(row);
    }
    document.body.appendChild(tbl);
    } 
        */
}

}








