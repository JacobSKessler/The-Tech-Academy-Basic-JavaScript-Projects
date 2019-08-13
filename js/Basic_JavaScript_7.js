var x = 8;

function myFunction() {
    var y = 9;
    console.log(x+y)
}

function myFunction2() {
    console.log(x+y)
}

function myFunction3() {
    if (new Date().getHours() < 16) {
        document.getElementById("target").innerHTML = "how are you today?";
    } else {
        document.getElementById("target").innerHTML = "goodnight!";
    }
}

var myOwn = "Statment";

function myFunction4() {
    var x = document.getElementById("nums").value;
    if (x<1) {
        document.getElementById("response").innerHTML = "Your number is too small!";
    } else if (x>10) {
        document.getElementById("response").innerHTML = "Your number is too big!";
    } else {
        document.getElementById("response").innerHTML = "Your number is just right!";
    }
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "it is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}