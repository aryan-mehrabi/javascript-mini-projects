  (function() {
    var i,x;
  i = 0;
  x = document.getElementById("counter");
      document.getElementsByClassName("nextBtn")[0].addEventListener("click", function() {
      i++;
     x.innerHTML = i;
       if(i > 0){
    x.style.color = "green";
  }
  else if(i < 0){
    x.style.color = "red";
  }
  });
  document.getElementsByClassName("prevBtn")[0].addEventListener("click", function() {
    i--;
   x.innerHTML = i;
     if(i > 0){
  x.style.color = "green";
}
else if(i < 0){
  x.style.color = "red";
}
});
  })() 