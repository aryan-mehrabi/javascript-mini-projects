// var filterBtns = document.getElementsByClassName("filter-btn");
// var cupCakes = document.getElementsByClassName("cupcakes");
// var cakes = document.getElementsByClassName("cakes");
// var sweets = document.getElementsByClassName("sweets");
// var doughnuts = document.getElementsByClassName("doughnuts");
// var allTheItems = document.getElementsByClassName("store-item")
// for (let index = 0; index < filterBtns.length; index++) {
//     const element = filterBtns[index];
//     element.addEventListener("click", function(event){event.preventDefault()})
//     element.addEventListener("click", function(){
//         if (element.innerHTML == " all") {
//             for (let index = 0; index < allTheItems.length; index++) {
//                 const element = allTheItems[index];
//                 element.style.display = "block";
//             }
//         }
//         else if(element.innerHTML == "cupcakes") {
//             for (let index = 0; index < allTheItems.length; index++) {
//                 const element = allTheItems[index];
//                 element.style.display = "none";
//             }
//             for (let index = 0; index < cupCakes.length; index++) {
//                 const element = cupCakes[index];
//                 element.style.display = "block";
//             }
//         }
//         else if(element.innerHTML == "sweets") {
//             for (let index = 0; index < allTheItems.length; index++) {
//                 const element = allTheItems[index];
//                 element.style.display = "none";
//             }
//             for (let index = 0; index < sweets.length; index++) {
//                 const element = sweets[index];
//                 element.style.display = "block";
//             }
//         }
//         else if(element.innerHTML == "cakes") {
//             for (let index = 0; index < allTheItems.length; index++) {
//                 const element = allTheItems[index];
//                 element.style.display = "none";
//             }
//             for (let index = 0; index < cakes.length; index++) {
//                 const element = cakes[index];
//                 element.style.display = "block";
//             }
//         }
//         else if(element.innerHTML == "doughnuts") {
//             for (let index = 0; index < allTheItems.length; index++) {
//                 const element = allTheItems[index];
//                 element.style.display = "none";
//             }
//             for (let index = 0; index < doughnuts.length; index++) {
//                 const element = doughnuts[index];
//                 element.style.display = "block";
//             }
//         }
//     })
// }
var items = document.getElementsByClassName("store-item");
var buttons = document.getElementsByClassName("filter-btn");
for (let index = 0; index < buttons.length; index++) {
    const element = buttons[index];
    element.addEventListener("click", function(e){
        e.preventDefault()
        var filter = e.target.dataset.filter;
        for (let index = 0; index < items.length; index++) {
            const element = items[index];
            if(filter == "all"){element.style.display = "block"}
            else {
                if(element.classList.contains(filter)){element.style.display = "block"}
                else {element.style.display = "none"}
            }
        }
    });
}
var searchBox = document.getElementById("search-item");
searchBox.addEventListener("keyup", function(e){
    for (let index = 0; index < items.length; index++) {
        const element = items[index];
        var searchShit = e.target.value;
        searchShit.toLowerCase().trim();
        if(element.textContent.includes(searchShit)) {element.style.display = "block"}
        else {element.style.display = "none"}
    }
})