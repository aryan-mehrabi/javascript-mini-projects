var colors=["red", "blue", "black", "green", "pink", "lime", "yellow", "purpule", "brown"];
var backBody = document.body.style;
function changingColor() {
    backBody.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}