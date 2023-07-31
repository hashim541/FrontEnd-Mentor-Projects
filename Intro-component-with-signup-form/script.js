document.querySelector(".btn").addEventListener("click",function(){
    var fn=document.querySelector(".fn");
    var ln=document.querySelector(".ln");
    var em=document.querySelector(".em");
    var pw=document.querySelector(".pw");
    check(fn);
    check(ln);
    
    if(!validateEmail(em.value)){
        em.parentElement.children[0].classList.add("inp-vis");
        em.parentElement.children[0].classList.add("em-text");
        em.parentElement.children[1].classList.add("error-vis");
        em.parentElement.children[2].classList.add("error-vis");
    }else{
        em.parentElement.children[0].classList.remove("inp-vis");
        em.parentElement.children[0].classList.remove("em-text");
        em.parentElement.children[1].classList.remove("error-vis");
        em.parentElement.children[2].classList.remove("error-vis");
    }
    check(pw);
    
});

function check(fn){
    if(fn.value==""){
        fn.parentElement.children[0].classList.add("inp-vis");
        fn.parentElement.children[1].classList.add("error-vis");
        fn.parentElement.children[2].classList.add("error-vis");
    }else{
        fn.parentElement.children[0].classList.remove("inp-vis");
        fn.parentElement.children[0].classList.add("bac-col");
        fn.parentElement.children[1].classList.remove("error-vis");
        fn.parentElement.children[2].classList.remove("error-vis");
    }
}
function validateEmail(email) {
    let res = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return res.test(email);
}