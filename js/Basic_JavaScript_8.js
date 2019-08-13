var wholename = "default name";
function myFunction() {
    var fname = "Jacob";
    var mname = " Scott ";
    var lname = "Kessler";
    wholename = fname.concat(mname, lname)
    document.getElementById("target").innerHTML = wholename;
}

function myFunction2() {
    var Chunk = wholename.slice(0,5);
    document.getElementById("target").innerHTML = Chunk.toUpperCase();
}

function myFunction3(){
    var nums = 123456.58956124;
    document.getElementById("target").innerHTML = nums.toString();
}

function myFunction4(){
    var nums = 123456.58956124;
    document.getElementById("target").innerHTML = nums.toPrecision(8) + " or " + nums.toFixed(4);
}