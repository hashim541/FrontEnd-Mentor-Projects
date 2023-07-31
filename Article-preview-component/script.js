var clickbox=document.querySelector(".click-box");
var desktop=document.querySelector(".desktop");
var down=document.querySelector(".down");
document.querySelector(".btn1").addEventListener("click",function(){
    clickbox.classList.toggle("check-box-toggle");
    desktop.classList.toggle("desktop-toggle");
    down.classList.toggle("visible")
});
document.querySelector(".btn").addEventListener("click",function(){
    clickbox.classList.toggle("check-box-toggle");
});