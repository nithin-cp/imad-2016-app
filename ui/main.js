// counter code

var button = document.getElementById('counter');
var counter = 0;

button.onclick = function () {
    
    //create a request object
    
    var request = new XMLHttpRequest();
    // Capture the response and store it as a variable
    
    request.onreadystatechange = function () {
        
        if(request.readyState === XMLHttpRequest.DONE) {
            //take some action
            if (request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innnerHTML = counter.toString();
            }
        }
        //not done yet
    };
    // make a request
    request.open('GET', 'http://nithin-cp.imad.hasura-app.io/counter', true);
    request.send(null); 
    
};