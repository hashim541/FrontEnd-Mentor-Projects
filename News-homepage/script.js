function clicked(){
    var show=document.querySelector(".show-div");
    show.classList.add("visible");
    document.querySelector(".opacitys").classList.add("opacitys-vis");
    
}
function hide(){
    var show=document.querySelector(".show-div");
    show.classList.remove("visible");
    
    document.querySelector(".opacitys").classList.remove("opacitys-vis");
}