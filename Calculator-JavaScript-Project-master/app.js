let allBtns = document.getElementsByClassName("btn"),
    equalBtn = document.getElementsByClassName("btn-equal")[0],
    clearBtn = document.getElementsByClassName("btn-clear")[0],
    screen = document.getElementsByClassName("screen")[0];
for (let index = 0; index < allBtns.length; index++) {
  const element = allBtns[index];
  element.addEventListener("click", function(){
    screen.value += element.dataset.num;
  })
}
equalBtn.addEventListener("click", function(){
 let result = eval(screen.value);
 screen.value = result;
})
clearBtn.addEventListener("click", function(){
  screen.value = "";
})