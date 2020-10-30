//working document which will contain the html script to give the site its appearance
//as well as the links to the keys defined in the set up document 

main();
async function main() {
//isbn numbers
    var isbnarr = ['0261102214','9780547773704','9780520079779', '9782012814141'];
    var bookarr = []

    for (let i = 0; i < isbnarr.length; i++) {
        let book = new bookDetail(isbnarr[i], "M");
        await book.getDetail();
        bookarr.push(book);
    }
//header details including title and images and colours
    document.write('<h1 style="padding:10px;background-color:white;font-family:Georgia;border:2px solid #FDD578;">'
    +'&nbsp; <img src="https://i.imgur.com/DfCAmeC.jpg" alt="bookHeader" style="width:200px;">'
    +'<img src="https://i.imgur.com/DfCAmeC.jpg" alt="bookHeader" style="width:200px;">'
    +'<img src="https://i.imgur.com/DfCAmeC.jpg" alt="bookHeader" style="width:200px;">'
    + '&nbsp; Books &nbsp;'
    +'<img src="https://i.imgur.com/DfCAmeC.jpg" alt="bookHeader" style="width:200px;">'
    +'<img src="https://i.imgur.com/DfCAmeC.jpg" alt="bookHeader" style="width:200px;">'
    +'<img src="https://i.imgur.com/DfCAmeC.jpg" alt="bookHeader" style="width:200px;">'
    +'</h1>'
    + '<body style="background-color:#92908A    ;">'
    //set style parameters for the left side of the page
    +'<style>'
    + 'div {width:20%; margin-left:40px; margin-right:40px; margin-top:80px; margin-bottom: 100px;'
    +'width:360px; height:300px;padding:50px;border-radius:50px;border:20px solid black;background-color:#EBE9E4;}'
    +'</style>'
    )
    
    for (x of bookarr) {
//right side of page
        document.write('<div style= "float:right; width:30%; height: 20%; margin-top:100px; margin-bottom:1px; margin-left:40px"; margin-right: 40px; padding: 40px;>'
        + 'Published' + " "
        + x.getPublishDate() + " "
        +'By' + " "
        + x.getPublishers() + '<br></br>'
        + 'Pages:' + " " + x.getPageNumbers() + '<br></br>'
        + 'Subjects:' + " " + x.getSubjects() + '<br></br>'
        + '<a href="'+ x.getSubURL() + '" target="_blank">More books in this subject</a>'
   
        +'</div>'
        )
       //information on left side
        document.write('<div>');
        //image
        document.write(x.cover() + 'style="float:left; padding: 10px;"' + '<br></br>'  + '<br></br>'
        );
        //text
        document.write('<h2>' + x.getTitle() + '</h2>' + '<br></br>');
        document.write('<p style="background-color: #EBE9E4; font-family:arial;"</p>' + '<br></br>');
        document.write( "Written By" + " " + x.getAuthor() + '<br></br>');
        document.write('</div>');  
    }
}