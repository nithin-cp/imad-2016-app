console.log('Loaded!');

//change the text of the main-text
var element = document.getElementById('main-text');

element.innerHTML = "New Value";

//for move the image

var img = document.getElementById('img');
img.onclik = function(){
    img.style.marginLeft = "100 px";
};