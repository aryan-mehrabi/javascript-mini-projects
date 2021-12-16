var letters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

var body = document.body.style;
function hexmaking() {
    var max = letters.length;
    var hex="#";
    for(var i = 1; i < 7;i++){
    hex += letters[Math.floor(Math.random() * max )];
    }
    body.backgroundColor = hex;
    document.getElementById("hex-value").innerHTML = hex;
}
