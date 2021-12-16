var input = document.getElementById("itemInput");
function addingItem(sth) {
    let container = document.getElementsByClassName("item-list")[0],
        div1 = document.createElement("div"),
        item = document.createElement("h5"),
        div2 = document.createElement("div"),
        completeIcon = document.createElement("a"),
        editIcon = document.createElement("a"),
        deleteIcon = document.createElement("a"),
        icon1 = document.createElement("i"),
        icon2 = document.createElement("i"),
        icon3 = document.createElement("i"),
        classDiv1 = ["item", "my-3"],
        classItem = ["item-name", "text-capitalize"],
        classDiv2 = ["item-icons"],
        classComplete = ["complete-item", "mx-2", "item-icon"],
        classEdit = ["edit-item", "mx-2", "item-icon"],
        classDelete = ["delete-item", "item-icon"],
        classIcon1 = ["far", "fa-check-circle"],
        classIcon2 = ["far", "fa-edit"],
        classIcon3 = ["far", "fa-times-circle"];
    classDiv1.forEach(function(e){div1.classList.add(e)});
    classItem.forEach(function(e){item.classList.add(e)});
    classDiv2.forEach(function(e){div2.classList.add(e)});
    classComplete.forEach(function(e){completeIcon.classList.add(e)});
    classEdit.forEach(function(e){editIcon.classList.add(e)});
    classDelete.forEach(function(e){deleteIcon.classList.add(e)});
    classIcon1.forEach(function(e){icon1.classList.add(e)});
    classIcon2.forEach(function(e){icon2.classList.add(e)});
    classIcon3.forEach(function(e){icon3.classList.add(e)});
    item.innerHTML = input.value;
    container.appendChild(div1);
    div1.appendChild(item);
    div1.appendChild(div2);
    div2.appendChild(completeIcon);
    div2.appendChild(editIcon);
    div2.appendChild(deleteIcon);
    completeIcon.appendChild(icon1);
    editIcon.appendChild(icon2);
    deleteIcon.appendChild(icon3);
    icon1.addEventListener("click", function(){
        item.classList.toggle("completed");
        icon1.classList.toggle("visibility");
    });
    icon2.addEventListener("click", function(){
        input.value = item.innerHTML;
        div1.remove();
    });
    icon3.addEventListener("click", function(){div1.remove()});
    input.value = "";
}
let btns = document.querySelectorAll(".btn-green");
for (let index = 0; index < btns.length; index++) {
    const element = btns[index];
    if(element.classList.contains("my-3")) {
        element.addEventListener("click", function(){
            let container = document.querySelectorAll(".item");
            container.forEach(function(e){e.remove()})
        })
    } else {
        element.addEventListener("click", function(e){
            e.preventDefault();
            if(input.value == "") {
                let feedback = document.getElementsByClassName("feedback")[0];
                feedback.classList.add("alert-danger");
                feedback.classList.add("showItem");
                feedback.innerHTML = "Please Enter Valid Value";
                setTimeout(function(){
                    feedback.classList.remove("alert-danger");
                    feedback.classList.remove("showItem");
                },3000)
            }
            else {addingItem();}
        });
    }
}