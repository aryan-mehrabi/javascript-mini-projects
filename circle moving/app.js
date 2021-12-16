var angle =90 ,
    radius =100 ,
    x =200 ,
    y =200 ,
    pos = document.getElementById("mydiv");
function circle(){
    angle += 3;
    pos.style.top = Math.sin(angle * Math.PI / 180) * radius + y + "px";
    pos.style.left = Math.cos(angle * Math.PI / 180) * radius + x + "px";
}
setInterval(circle, 20);