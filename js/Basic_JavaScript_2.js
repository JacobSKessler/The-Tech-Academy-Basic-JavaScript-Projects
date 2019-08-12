function testFunction (col) {
    var elem = document.getElementById('target')
    elem.style.color = col;
    
}

function testConcat() {
    var sentance;
    sentance = "this is a";
    sentance += " string of text";
    document.getElementById("target2").innerHTML = sentance;
}