document.querySelector(".btn").addEventListener("click",function(){
    var Email=document.querySelector(".email");
    var email=document.querySelector(".email").value;
    var result=document.querySelector(".results");
    var error =document.querySelector(".error");
    
    if(!validateEmail(email)){
        result.innerHTML="Please provide a valid email";
        result.classList.add("result-color");
        error.classList.add("error-vis");
        Email.classList.add("email-vis");
    }else{
        error.classList.remove("error-vis");
        Email.classList.remove("email-vis");
        result.classList.remove("result-color");
    }
    
});

function validateEmail(email) {
    let res = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return res.test(email);
  }