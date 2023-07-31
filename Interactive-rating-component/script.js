var number,number2;
var con1=document.querySelector(".container1");
var con2=document.querySelector(".container2");
var btns=document.querySelectorAll(".btn");
$(".btn").click(function(){
    number=$(this).attr("id");
    $(".btn").removeClass("onClick")
    $(this).addClass("onClick");
});
document.querySelector(".submit").addEventListener("click",function(){
    con1.classList.add("hidden");
    if(number>0){
        document.querySelector(".final").innerText=number;
    }else{
        document.querySelector(".final").innerText="0";
    }
    
    con2.classList.add("visible");
});