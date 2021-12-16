var pics=["contBcg-0", "contBcg-1", "contBcg-2", "contBcg-3", "contBcg-4"];
var i = 0;
var pic = document.getElementsByClassName("img-container")[0];
document.getElementsByClassName("btn-left")[0].addEventListener("click", function() {
    i--;
    if (i < 0){i = pics.length - 1;}
    pic.style.background = "url('img/" + pics[i] + ".jpeg') center/cover fixed no-repeat";
});
document.getElementsByClassName("btn-right")[0].addEventListener("click", function() {
  i++;
  if (i > pics.length - 1){i = 0;}
  pic.style.background = "url('img/" + pics[i] + ".jpeg') center/cover fixed no-repeat";
});