let billAmount = document.getElementById("input-bill"),
    people = document.getElementById("input-users"),
    service = document.getElementById("input-service"),
    feedback = document.getElementsByClassName("feedback")[0],
    tipAmount = document.getElementById("tip-amount"),
    totalAmount = document.getElementById("total-amount"),
    personAmount = document.getElementById("person-amount"),
    submitBtn = document.getElementsByClassName("submitBtn")[0],
    loader = document.getElementsByClassName("loader")[0],
    results = document.getElementsByClassName("results")[0];
let optionGreat = document.createElement("option"),
    optionGood = document.createElement("option"),
    optionBad = document.createElement("option");
optionGreat.innerHTML = "Great - 20%";
optionGreat.value = "20";
optionGood.innerHTML = "Good - 10%";
optionGood.value = "10";
optionBad.innerHTML = "Bad - 2%";
optionBad.value = "2";
service.add(optionGreat);
service.add(optionGood);
service.add(optionBad);
feedback.innerHTML = ""
submitBtn.addEventListener("click", function(e){
    e.preventDefault();
    if(billAmount.value <= 0 || people.value <= 0 || service.value == 0){
        feedback.style.display = "block";
        feedback.classList.add("alert-danger");
        if(billAmount.value <= 0) {feedback.innerHTML += "Enter The Right Amount For Bill<br />"};
        if(people.value <= 0) {feedback.innerHTML += "Enter The Number Of People<br />"};
        if(service.value == 0) {feedback.innerHTML += "Enter Your Service Quality"};
        setTimeout(function(){
            feedback.innerHTML = "";
            feedback.style.display = "none";
        },2000)
    } else {
        let tip = (parseFloat(service.value)/100) * parseFloat(billAmount.value),
            total = parseFloat(billAmount.value) + tip,
            person = total / parseFloat(people.value);
        tipAmount.innerHTML = tip;
        totalAmount.innerHTML = total;
        personAmount.innerHTML = person;
        loader.style.display = "block";
        setTimeout(function(){
            loader.style.display = "none";
            results.style.display = "block";
            setTimeout(function(){results.style.display = "none";},5000)
        },2000)
    }
})