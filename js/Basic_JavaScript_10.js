var count = 0;
var txt = "this string is short"; // this var is here so several functions can make use of it
var nums = [4,3,6,2,1];

function Call_Loop() {
    let digit = "";
    count = 0;
    while (count < 5) {

        digit += "<br>" + count;
        count++;
    }
    return document.getElementById("Loop").innerHTML = digit;
}

function myFunction() {
    document.getElementById("target").innerHTML = txt.length;
}

function for_Loop() {
    let digit = "";
    for (i=0; i < txt.length; i++){
        if (i === 10) {break;}
        
        digit += "<br>" + txt.slice(i,i+1);
    }
    document.getElementById("List_of_Instruments").innerHTML = digit;
}

function array_Function() {
    let digit = "";
    for (i=0; i < nums.length; i++){
        if (i === 3) { continue; }
        
        digit += "<br>" + nums[i];
    }
    document.getElementById("Array").innerHTML = digit;
}

function constant_function() {
    const game = {name: "fire emblem", rating:"5/5", price:"$60"};
    game.edition = "standard";
    game.rating = "4/5";
    document.getElementById("Constant").innerHTML = "The cost of " + game.name + " " + game.edition + " edition is " + game.price + " and is ratted " + game.rating;
}

function let_function() {
    let game = {name: "fire emblem", rating:"5/5", price:"$60"};
    game.edition = "standard";
    game.rating = "4/5";
    document.getElementById("Lets").innerHTML = "The cost of " + game.name + " " + game.edition + " edition is " + game.price + " and is ratted " + game.rating;
}