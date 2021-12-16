var lightBox = document.getElementsByClassName("lightbox-item")[0],
    btns = document.getElementsByClassName("lightbox-control"),
    imageItem = document.getElementsByClassName("store-img");
for (let index = 0; index < imageItem.length; index++) {
  const element = imageItem[index];
  
  
  element.addEventListener("click", function(){
    lightBox.style.background = "url(" + element.src + ") center/cover fixed no-repeat";
    lightBox.parentElement.parentElement.style.display = "block";
    let havij = index;
    for (let index = 0; index < btns.length; index++) {
      const elementt = btns[index];
      elementt.addEventListener("click", function(){
        if(elementt.classList.contains("btnLeft")) {
          havij--;
          if(havij < 0) {havij = 11;}
          lightBox.style.background = "url(" + imageItem[havij].src + ") center/cover fixed no-repeat";
        }
        else if(elementt.classList.contains("btnRight")) {
          havij++;
          if(havij == imageItem.length) {havij = 0;}
          lightBox.style.background = "url(" + imageItem[havij].src + ") center/cover fixed no-repeat";
        }
      })
    }
    lightBox.previousElementSibling.addEventListener("click", function(){
      lightBox.parentElement.parentElement.style.display = "none";
    })
  })
}

