
(document).ready(libraryRequest());

// This function is called when a status update is requested.
function libraryRequest(){    
    $.ajax({
        type: 'GET',
        //url: "/orders/" + order_id,
        //AccessControlAllowOrigin: "https://openlibrary.org", 
        crossDomain: true,
        url: "https://openlibrary.org/works/isbn/" + isbnlist,
        // data: {
        //         order: {
        //                     status: newStatus,
        //                 },
        //         id: order_id,
        //         },
        dataType: 'json',
        success: function(data){
            console.log("Request fulfilled");
            var parsedJSON =jQuery.parseJSON(data);
            alert(parsedJSON);
            console.log(data)
        },
        error: function(){
            console.log("Failed to fulfill request!!!");
            alert("Failed to fulfill request!!!");
        }
    });
}
