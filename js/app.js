var hoveronElement = document.getElementById("hover");
hoveronElement.addEventListener("mouseover",function(){
    hoveronElement.style.color = "red";
    hoveronElement.style.fontSize = "50px";
});

var hoveroffElement = document.getElementById("hover");
hoveroffElement.addEventListener("mouseout",function(){
    hoveroffElement.style.fontSize = "20px";
    hoveroffElement.style.color = "black";

});


var clickonElement = document.getElementById("click");
clickonElement.addEventListener("click",function(){
    clickonElement.style.color = "red";
    clickonElement.style.fontSize = "50px";
});

var spaceElement = document.getElementById("body");
spaceElement.addEventListener("keypress",function(eventDetails){
   if (eventDetails.code == "Space") {
    document.getElementById("space").style.color = "purple";
    document.getElementById("space").style.fontSize ="50px";
   }
});


