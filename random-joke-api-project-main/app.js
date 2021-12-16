let button = document.getElementById("get-joke");
let jokeDisplay = document.getElementById("display-joke");

button.onclick = function() {
    fetch("https://api.chucknorris.io/jokes/random")
    .then(response => response.json())
    .then(data => {
        jokeDisplay.innerHTML = data.value
    })
}