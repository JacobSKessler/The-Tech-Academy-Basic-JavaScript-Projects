function myFunction(a, b) {
    document.getElementById("Math").innerHTML = -(a%b);
}

function myFunction2(a, b) {
    document.getElementById("Math2").innerHTML = a/b+a*b;
}

var x = 0;
var y = 0;
function myFunction3(){
    document.getElementById("Math3").innerHTML = x++;
    document.getElementById("Math4").innerHTML = y--;
}

function myFunction5(){
    window.alert(Math.round(Math.random()*100));
}