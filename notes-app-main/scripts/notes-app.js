
if (localStorage.getItem("notez") === null) {
    localStorage.setItem("notez", JSON.stringify([]));
}

const createButton = document.querySelector("#create-note"),
allNotes = JSON.parse(localStorage.getItem("notez")),
noteContainer = document.querySelector("#notes"),
selection = document.querySelector("#filter-by");


const createNotes = (id, title = "", content = "", creationDate, editionDate) => {
    id = Math.floor(Math.random() * (999999999999999 + 1) );
    creationDate = new Date().getTime();
    editionDate = new Date().getTime();
    allNotes.push({id: id, "title": title, "content": content, "creationDate": creationDate, "editionDate": editionDate});
    localStorage.setItem("notez", JSON.stringify(allNotes));
    window.location.href = `edit.html#${id}`;
}
createButton.addEventListener("click", createNotes);

const timeDiffer = (timee = 0) => {
    let differ = (new Date().getTime() - parseFloat(timee)) /60000;
    console.log(differ);
    if (differ <= 1) {return "Last edited a few seconds ago"}
    else if (1 < differ && differ <= 2) {return `Last edited a minute ago`}
    else if (2 < differ && differ <= 60) {return `Last edited ${Math.floor(differ) + 1} minutes ago`}
    else if (60 < differ && differ <= 1440) {return `Last edited ${Math.floor(differ/ 60) } hours ago`}
    else {return `Last edited ${Math.floor(differ/ 1440) } days ago`}
}


const rendering = (arr) => {
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        noteContainer.insertAdjacentHTML("beforeend", `<a href="./edit.html#${element["id"]}" class="list-item"><p class="list-item__title">${element["title"]}</p><p class="list-item__subtitle">${timeDiffer(element["editionDate"])}</p></a>`)
    }
}

rendering(allNotes);

selection.addEventListener("change", () => {
    let newArr;
    if(selection.value === "byEdited") {
        newArr = allNotes.slice().sort((a, b) => {
            return a["editionDate"] - b["editionDate"];
        })
    }
    else if(selection.value === "byCreated") {
        newArr = allNotes.slice();
    }
    else if(selection.value === "alphabetical") {
        newArr = allNotes.slice().sort((a, b) => {
            if(a["title"].charAt(0) > b["title"].charAt(0)) {return -1}
            else {return 1}
        })
    }
    rendering(newArr);
})