var button = document.getElementById("submitBtn");
function onC() {
    var x = document.getElementById("message");
    var hfive = document.getElementsByTagName("h5")[0];
    if(x.value == ""){
       hfive.classList.add("show");
       setTimeout(function() {hfive.classList.remove("show")}, 2000);
    }
    else {
        document.getElementsByClassName("message-content")[0].innerHTML = x.value;
        x.value = "";
    }
}
button.addEventListener("click", function(event){
    event.preventDefault()});
button.addEventListener("click", onC);