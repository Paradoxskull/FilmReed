//This is  the function for the sliderShow 
//Using for loop to make the slider move from one to another till the end 
var counter = 1;
setInterval(function(){
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if(counter > 10){
        counter = 1;
    }
}, 5000);