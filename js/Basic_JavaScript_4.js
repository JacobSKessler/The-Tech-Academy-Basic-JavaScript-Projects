function myFunction() {
    var Game = {
        Name: "Fire Emblem",
        Players: 1,
        System: "Switch"
    }
    delete Game.Name;
    document.getElementById("Dictionary").innerHTML = Game.Name;
}