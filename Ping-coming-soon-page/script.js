document.querySelector(".btns").addEventListener("click",function(){
    var email=document.querySelector("#email");
    var vm=document.querySelector(".valid-email")
    if(!validateEmail(email.value)){
        email.classList.add("inp-vis");
        vm.classList.add("vis");
    }else{
        email.classList.remove("inp-vis");
        vm.classList.remove("vis");
    }

});

function validateEmail(email) {
    let res = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return res.test(email);
}