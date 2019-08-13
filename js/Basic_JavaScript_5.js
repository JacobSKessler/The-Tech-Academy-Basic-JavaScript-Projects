function myFunction() {
    var posNum = 1E333;
    document.getElementById("target1").innerHTML = posNum;
}
function myFunction2() {
    var negNum = -1E333;
    document.getElementById("target2").innerHTML = negNum;
}

function myFunction3(x,y) {
    document.write(x>y);
    console.log(x+y);
    console.log(x<y);
}

function myFunction4() {
    document.getElementById("target4").innerHTML = "13" + 4;
}

function myFunction5() {
    document.getElementById("target5").innerHTML = 4==4;
}

function myFunction6() {
    document.getElementById("target6").innerHTML = 4==5;
}

function myFunction7() {
    document.getElementById("target7").innerHTML = 4===4;
}
function myFunction8() {
    document.getElementById("target8").innerHTML = 4==="3";
}
function myFunction9() {
    document.getElementById("target9").innerHTML = 4==="4";
}
function myFunction10() {
    document.getElementById("target10").innerHTML = 4===3;
}

function myFunction11() {
    document.getElementById("target11").innerHTML = 4>3 && 5>4;
}
function myFunction12() {
    document.getElementById("target12").innerHTML = 4>3 && 5<4;
}
function myFunction13() {
    document.getElementById("target13").innerHTML = 4>3 || 5<4;
}
function myFunction14() {
    document.getElementById("target14").innerHTML = 4<3 || 5<4;
}

function myFunction15() {
    document.getElementById("target15").innerHTML = !(5==5);
}
function myFunction16() {
    document.getElementById("target16").innerHTML = !(4==5);
}