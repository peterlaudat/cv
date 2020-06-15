//adds a listener that executes after the DOM loads
//note that the html in my folder didn't change -- the html that the browser receives changes
document.addEventListener("DOMContentLoaded", function(event){ //part of the object for the browser and the DOM. this code fires when the document is loaded into the browser
    document.getElementById("div2").textContent = "Document DOMContentLoaded event happened";
});


window.onload = function() {
    document.getElementById("div1").textContent = "Windows.onload event happened";
}

//after all of document has been loaded,
$(document).ready(function(){
    console.log("This will work because jquery is loaded");

    $(document).click(function(){
        $("#events").append("<li>You clicked somewhere</li>");
    });

    $(".foo").click(function(){
        $("#events").append("<li>You clicked the foo div</li>");
    });

    $(".bar").click(function(){
        $("#events").append("<li>You clicked the bar div</li>");
    });

// sets up listener for when the reddio div gets clicked
    $(".reddio").click(function(e){
        // console.log(e);
        if(e.button === 0){
            $(".flibgibbet").text("You left clicked the pink part!")
        }    
    $('<p/>', { //this part worked in Chrome, but not Firefox. Why?
        text: 'You have probably not clicked ' + Math.floor(Math.random() * 100) + ' times!'
            }).appendTo.appendTo(this);
    });
});