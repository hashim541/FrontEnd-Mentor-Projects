

document.querySelector(".btn").addEventListener("click",function(){
    var years=document.querySelector(".year");
    var months=document.querySelector(".month");
    var days=document.querySelector(".day");   

    var i_years=document.querySelector("#year");
    var i_months=document.querySelector("#month");
    var i_days=document.querySelector("#day");
    var dd,mm,yyyy;
    
    if(inputDate(i_years.value,i_months.value,i_days.value) <= todayDate()){
        
        i_years.classList.remove("inp-vis");
        document.querySelector(".invalid-year").classList.add("hidden");
        console.log("valid-year");
        yyyy=i_years.value;
    
        if(currMonth(i_months.value)){
            i_months.classList.remove("inp-vis");
            document.querySelector(".invalid-month").classList.add("hidden");
            console.log("valid-month");
            mm=i_months.value;
        }else{
            visiblity(i_years,i_months,i_days);
            console.log("invalid-month");
            document.querySelector(".invalid-month").classList.remove("hidden");
        }

        MonthOfArray={
            1:31,
            2:leapOrNot(yyyy),
            3:31,
            4:30,
            5:31,
            6:30,
            7:31,
            8:31,
            9:30,
            10:31,
            11:30,
            12:31
        };
        
        if(currDay(Number(i_days.value),Number(mm),MonthOfArray)){
            
            console.log(todayDate()+"  "+inputDate(Number(yyyy),Number(mm),Number(i_days.value)))
            if(todayDate()-inputDate(Number(yyyy),Number(mm),Number(i_days.value))>=0){
                dd=i_days.value;
                i_days.classList.remove("inp-vis");
                document.querySelector(".invalid-date").classList.add("hidden");
                calculateYourAge(yyyy,mm,dd,years,months,days );
            }else{  
                visiblity(i_years,i_months,i_days);
                document.querySelector(".invalid-date").classList.remove("hidden");
            }
            
        }else{
            console.log("hiiii");
            visiblity(i_years,i_months,i_days);
            document.querySelector(".invalid-date").classList.remove("hidden");
        }


    }else{
        visiblity(i_years,i_months,i_days);
        console.log("invalid-year");
        document.querySelector(".invalid-year").classList.remove("hidden");
    }
});
function visiblity(i_years,i_months,i_days){
    i_years.classList.add("inp-vis");
    i_months.classList.add("inp-vis");
    i_days.classList.add("inp-vis");
}
function currMonth(m){
    m=Number(m);
    if(m != ""){
        if(m%1==0){
            if(((m < 13) &&(m > 0))){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }else{
        return false;
    }
}
function currDay(d,mon,MonthOfArray){
    if(d != ""){
        if(d%1==0){
            if( d <= MonthOfArray[mon]){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }else{
        return false;
    }
}
function leapOrNot(year){
    if(( year%4 == 0 && year%100 != 0) || (year%400 == 0)){
        return 29;
    }else{
        return 28;
    }
}
function todayDate(){
    var y =new Date().getFullYear();
    var m= new Date().getUTCMonth()+1;
    var d = new Date().getDate();
    if(m<10){
        m="0"+m;
    }
    if(d<10){
        d="0"+d;
    }
    return Number(y+m+d);
}
function inputDate(y,m,d){
    m=Number(m);
    if(m<10){
        m="0"+m;
    }
    if(d<10){
        d="0"+d;
    }
    return Number(y+m+d);
}
function calculateYourAge(yy,mm,dd,years,months,days){
    var today=slicer(todayDate());
    var dateOfBirth=slicer(inputDate(yy,mm,dd));
    var final=claculate_the_age(dateOfBirth,today)

    years.innerHTML=final[0];
    months.innerHTML=final[1];
    days.innerHTML=final[2];
}

function slicer(result){
    var YEARS,MONTHS,DAYS;
    YEARS=result.toString().slice(0,-4);
    DAYS=result.toString().slice(-2,);
    MONTHS=result.toString().slice(-4,-2);
    return YEARS+"-"+MONTHS+"-"+DAYS;
}

function claculate_the_age(startDate,endDate){
    const start = new Date(startDate);
    const end = new Date(endDate);

    const yearDiff = end.getFullYear() - start.getFullYear();
    const monthDiff = (end.getMonth()+1) - (start.getMonth()+1);
    const dayDiff = end.getDate() - start.getDate();

    let years = yearDiff;
    let months = monthDiff;
    let days = dayDiff;
    
    if (months < 0 || (months === 0 && days < 0)) {
        years--
        months += 12
    }

    if (days < 0) {
        const daysInPreviousMonth = new Date(end.getFullYear(),end.getMonth(),0)
        days += daysInPreviousMonth.getDate()
        console.log(daysInPreviousMonth.getDate())
        months--
    }
    
    return [years,months,days];
}


                            /*--END--*/