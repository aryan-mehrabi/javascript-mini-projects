let expTitle = document.getElementById("expense-input"),
    expValue = document.getElementById("amount-input"),
    expContainer = document.getElementById("expense-list"),
    expSubmit = document.getElementById("expense-submit"),
    expenses = [],
    feedback = document.getElementsByClassName("expense-feedback")[0],
    showBudget = document.getElementById("budget-amount"),
    showExpenses = document.getElementById("expense-amount"),
    showBalance = document.getElementById("balance-amount"),
    balanceValue = document.getElementById("budget-input"),
    budSubmit = document.getElementById("budget-submit"),
    totalBud = 0,
    totalExp = 0,
    totalBal = 0,
    colors = ["showRed", "showGreen", "showBlack"];
expSubmit.addEventListener("click", function(e){
    e.preventDefault();
    if(expTitle.value == "" || expValue.value < 1) {
        feedback.classList.add("showItem");
        feedback.innerHTML = "No Empty Field or Negative Value."
        setTimeout(function() {feedback.classList.remove("showItem");}, 5000)
    } else {expContainer.insertAdjacentHTML("beforeend", `<div class="expense"><div class="expense-item d-flex justify-content-between align-items-baseline"><h6 class="expense-title mb-0 text-uppercase list-item">-` + expTitle.value + `</h6><h5 class="expense-amount mb-0 list-item">` + expValue.value + `</h5><div class="expense-icons list-item"><a href="#" class="edit-icon mx-2" data-id="${expenses.length}"><i class="fas fa-edit"></i></a><a href="#" class="delete-icon" data-id="${expenses.length}"><i class="fas fa-trash"></i></a></div></div></div>`);
            let fas =  document.querySelectorAll(".fas");
            fas.forEach(function(item){
                item.addEventListener("click", function(e){
                    e.preventDefault();
                    for (let index = 0; index < expenses.length; index++) {
                        const element = expenses[index];
                        if("-" + element.title == item.parentElement.parentElement.parentElement.children[0].innerHTML && element.value == item.parentElement.parentElement.parentElement.children[1].innerHTML) {
                            if(item.classList.contains("fa-edit")) {
                                expTitle.value = element.title;
                                expValue.value = element.value;
                            }    
                            expenses.splice(index,1);
                            item.parentElement.parentElement.parentElement.parentElement.remove();
                            calculator();
                        }
                    }
                })
            })
            const exp = {
            title: expTitle.value,
            value: Number(expValue.value)
        };
        expenses.push(exp);
        expTitle.value = "";
        expValue.value = "";
        calculator();
    }
})
function calculator(){
    totalExp = 0;
    for (let index = 0; index < expenses.length; index++) {
        const element = expenses[index];
        totalExp += element.value;
    }
    totalBal = totalBud - totalExp;
    if(totalBal > 0) {
        showBalance.parentElement.classList.add(colors[1]);
        showBalance.parentElement.classList.remove(colors[0]);
        showBalance.parentElement.classList.remove(colors[2]);
    }
    else if(totalBal < 0) {
        showBalance.parentElement.classList.add(colors[0]);
        showBalance.parentElement.classList.remove(colors[1]);
        showBalance.parentElement.classList.remove(colors[2]);
    }
    else {
        showBalance.parentElement.classList.add(colors[2]);
        showBalance.parentElement.classList.remove(colors[1]);
        showBalance.parentElement.classList.remove(colors[0]);
    }
    showBalance.innerHTML = totalBal;
    showBudget.innerHTML = totalBud;
    showExpenses.innerHTML = totalExp;
}
budSubmit.addEventListener("click", function(e){
    e.preventDefault();
    totalBud = Number(balanceValue.value);
    calculator();
    balanceValue.value = "";
})