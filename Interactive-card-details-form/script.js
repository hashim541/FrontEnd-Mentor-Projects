var cName=false;
var cNumber=false;
var cMonth=false;
var cYear=false;
var cCVC=false;
$("input").keyup(function(){
    var ptag=$(this).parent().children().last();
    if($(this).val()!=""){
        var ids=$(this).attr("id");
        ptag.addClass("none");
        $(this).removeClass("error-brd");
        checkingValidity(ids,$(this).val());
    }else{
        ptag.removeClass("none");
        $(this).addClass("error-brd");
    }
})
$("input").click(function(){
    $("input").removeClass("click-input");
    $(this).addClass("click-input");
});

$(".btn1").click(function(){
    if(cCVC && cMonth && cName && cNumber && cYear){
        $(".inner-content1").addClass("none");
        $(".inner-content2").removeClass("none");
    }else{
        $("input").removeClass("click-input");
       
    }
    
});
$(".btn2").click(function(){
    setInterval(function(){
        window.location.reload();
    },500);
    
});


function checkingValidity(ids,value){
    switch(ids){
        case "name":
            var newName=$("#"+ids).parent().children().last();
            if(value%1!=0){
                $("#"+ids).removeClass("error-brd");
                document.querySelector("."+ids).innerHTML=value.toUpperCase();
                cName=true;
                newName[0].innerHTML="Can't be blank";
            }else if(value==""){
                $("#"+ids).addClass("error-brd");
                newName[0].innerHTML="Can't be blank";
                newName.removeClass("none");
            }else{
                $("#"+ids).addClass("error-brd");
                newName[0].innerHTML="Please enter your name";
                newName.removeClass("none");
            }
            break;
            
        case "number":
            var newNumber=$("#"+ids).parent().children().last();
            if (value.length<=16){
                $("#"+ids).removeClass("error-brd");
                value=value.toString();         
                cNumber=true;
                var newvalue=numberSlice(value);
                document.querySelector("."+ids).innerHTML=newvalue;
                
            }else if(value==""){
                $("#"+ids).addClass("error-brd");
                newNumber[0].innerHTML="Can't be blank";
                newNumber.removeClass("none");
            }else{
                $("#"+ids).addClass("error-brd");
                newNumber[0].innerHTML="Please enter 16 numbers only";
                newNumber.removeClass("none");
            }
            break;

        case "month":
            var newMonth=$("#"+ids).parent().children().last();
            if(value < 13 && value > 0){
                $("#"+ids).removeClass("error-brd");
                cMonth=true;
                newMonth[0].innerHTML="Can't be blank";
                document.querySelector("."+ids).innerHTML=correctVal(Number(value));
            }else if(value==""){
                $("#"+ids).addClass("error-brd");
                newMonth[0].innerHTML="Can't be blank";
                newMonth.removeClass("none");
            }else{
                $("#"+ids).addClass("error-brd");
                newMonth[0].innerHTML="invalid month";
                newMonth.removeClass("none")
            }
            break;

        case "year":
            var newYear=$("#"+ids).parent().children().last();
            if(value>=1){
                $("#"+ids).removeClass("error-brd");
                cYear=true;
                document.querySelector("."+ids).innerHTML=correctVal(Number(value));
            }else{
                $("#"+ids).addClass("error-brd");
                newYear.removeClass("none");
            }
            break;

        case "cvc":
            var newcvc=$("#"+ids).parent().children().last();
            if (value.length <= 4){
                $("#"+ids).removeClass("error-brd");
                cCVC=true;
                newcvc[0].innerHTML="Can't be blank";
                document.querySelector("."+ids).innerHTML=value;
            }else if(value==""){
                $("#"+ids).addClass("error-brd");
                newcvc[0].innerHTML="Can't be blank";
                newcvc.removeClass("none");
            }else{
                $("#"+ids).addClass("error-brd");
                newcvc[0].innerHTML="must be less than 4 numbers"
                newcvc.removeClass("none");
            }
}
}

function numberSlice(v){
    if(v.length<=4){
        return v;
    }else if(v.length <=5){
        return v.slice(0,4)+" "+v.slice(4,);
    }else if(v.length <=9){
        return v.slice(0,4)+" "+v.slice(4,8)+" "+ v.slice(8,);
    }else if(v.length >=10){
        return v.slice(0,4)+" "+v.slice(4,8)+" "+ v.slice(8,12)+" "+v.slice(12,);
    }else{
        return NaN;

    }
}
function correctVal(v){
    if(v<10 && v>-1){
        return "0"+v;
    }
    else{
        return v;
    }
}