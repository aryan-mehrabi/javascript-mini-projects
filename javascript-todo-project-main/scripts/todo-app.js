let todozCont = document.querySelector("#todos"),
inputObt = document.querySelectorAll(".input"),
subBtn = document.querySelector(".button"),
checkHide = document.querySelector('input[type="checkbox"]');

subBtn.addEventListener("click", function(e){
    e.preventDefault();
    todozCont.insertAdjacentHTML("beforeend", `<label class="list-item"><div class="list-item__container"><input class="cbox" type="checkbox"><span>${inputObt[1].value}</span></div><button class="button button--text">remove</button></label>`);
    inputObt[1].value = ""
    calcTodo();
    let rBtn = document.querySelectorAll(".button--text")
    rBtn[rBtn.length - 1].addEventListener("click", function() {
        rBtn[rBtn.length - 1].parentElement.remove();
    })
    let cbox = document.querySelectorAll(".cbox")
    cbox[cbox.length - 1].addEventListener("change" , calcTodo)
})

function calcTodo(e) {
    let markedCheckbox = document.querySelectorAll('input[class="cbox"]:checked');
    let allCheckbox = document.querySelectorAll('.cbox');
    document.querySelector(".list-title").innerHTML = `You have ${allCheckbox.length - markedCheckbox.length} todos left`;
    if(checkHide.checked === true) {
        this.parentElement.parentElement.style.display = "none";
    }
}

function toggleHide() {
    let markedCheckbox = document.querySelectorAll('input[class="cbox"]:checked');
    if(checkHide.checked === true) {
        for (let index = 0; index < markedCheckbox.length; index++) {
            const element = markedCheckbox[index];
            element
            .parentElement
            .parentElement
            .style
            .display = "none";
        }
    } else {
        for (let index = 0; index < markedCheckbox.length; index++) {
            const element = markedCheckbox[index];
            element
            .parentElement
            .parentElement
            .style
            .display = "flex";
        }
    }
}
checkHide.addEventListener("change", toggleHide);
inputObt[0].addEventListener("keyup", function() {
    let alltext;
    if (checkHide.checked) {
        alltext = document.querySelectorAll('input[class="cbox"]:not(:checked)');
    } else {
        alltext = document.querySelectorAll(".cbox");
    }
    for (let index = 0; index < alltext.length; index++) {
        const element = alltext[index].parentElement;
        console.log(element.textContent);
        if (element.textContent.includes(inputObt[0].value)) {
            element.parentElement.style.display = "flex";
        } else {
            element.parentElement.style.display = "none";
        }
    }
})