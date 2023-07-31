var main1=document.querySelector(".main-container1");
var main2=document.querySelector(".main-container2");
var msgs=document.querySelector("span");
document.querySelector(".btn1").addEventListener("click",function(){

    var email=document.querySelector("#email");
    var error=document.querySelector(".error-msg");
    if(!validateEmail(email.value)){
        email.classList.add("input-vis");
        error.classList.add("visible");
    }else{
        email.classList.remove("input-vis");
        error.classList.remove("visible");
        main1.classList.add("hidden");
        main2.classList.add("visible");
        msgs.innerText=email.value;
    }
});

document.querySelector(".btn2").addEventListener("click",function(){
    document.querySelector(".btn2").classList.remove("btn");
    document.querySelector(".btn2").classList.add("btnss");
    setInterval(function(){
        window.location.reload();
    },1000);
    
});

function validateEmail(email) {
    let res = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return res.test(email);
  }