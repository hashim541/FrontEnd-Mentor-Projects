var num=3;
document.querySelector(".mark-all").addEventListener("click",function(){
    var dot=document.querySelectorAll(".special");
    for(var i=0;i<dot.length;i++){
        dot[i].classList.add("without");
    }
    num=0;
    document.querySelector(".number>p").innerHTML=num;
});
$(".unread").click(function(){
    var clickedDiv=$(this);
    var ptag=clickedDiv[0].children[1].children[0].children[0].classList.add("without");
    if(num<=0){
        num=0;
    }else{
        num-=1;
    }
    document.querySelector(".number>p").innerHTML=num;
});