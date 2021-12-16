let titleInput = document.querySelector("#note-title"),
contentInput = document.querySelector("#note-body"),
removeButton = document.querySelector("#remove-note"),
timeStamp = document.querySelector("#time-stamp"),
id = window.location.href.split("#")[1],
arr = JSON.parse(localStorage.getItem("notez")),
objIndex,
myObj;

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element["id"] == id) {
        myObj = element;
        objIndex = index;
    }
}
const timeDiffer = (timee = 0) => {
    let differ = (new Date().getTime() - parseFloat(timee)) /60000;
    console.log(differ);
    if (differ <= 1) {return "Last edited a few seconds ago"}
    else if (1 < differ && differ <= 2) {return `Last edited a minute ago`}
    else if (2 < differ && differ <= 60) {return `Last edited ${Math.floor(differ) + 1} minutes ago`}
    else if (60 < differ && differ <= 1440) {return `Last edited ${Math.floor(differ/ 60) } hours ago`}
    else {return `Last edited ${Math.floor(differ/ 1440) } days ago`}
}

timeStamp.innerHTML = timeDiffer(myObj["editionDate"]);
titleInput.value = myObj["title"];
contentInput.value = myObj["content"];

const editNotes = () => {
    myObj["content"] = contentInput.value;
    myObj["title"] = titleInput.value;
    myObj["editionDate"] = new Date().getTime();
    localStorage.setItem("notez", JSON.stringify(arr));
    timeStamp.innerHTML = timeDiffer(myObj["editionDate"]);
}

titleInput.addEventListener("input", editNotes);
contentInput.addEventListener("input", editNotes);

const removeNotes = () => {
    arr.splice(objIndex, 1);
    localStorage.setItem("notez", JSON.stringify(arr));
    window.location.href = "index.html"
}

removeButton.addEventListener("click", removeNotes);

