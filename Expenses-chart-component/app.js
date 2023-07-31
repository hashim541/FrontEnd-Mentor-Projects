var jsonDayData=['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const eChart=document.querySelector('.e-chart');
var loadTimes=0;
loadData();

document.querySelector('.rand').addEventListener('click',function(){
    var randomData=randoms();
    var displayValue=document.querySelectorAll('.disp');
    for(var k=0;k<displayValue.length;k++){
        displayValue[k].innerText='$'+randomData[k];
    }
    const barsss=document.querySelectorAll('.bar');
    document.querySelector('.this-month>p').innerText='Total this week';
    document.querySelector('.this-month>h1').innerText='$'+sum(randomData).toFixed(2);
    
    document.querySelector('.my-b>h2').innerText='$'+(2500-sum(randomData)).toFixed(2);

    display(randomData,jsonDayData,barsss);
    
});

async function loadData(){
    const data=await fetch('./data.json')
    const mdata=await data.json();
    var jsonamountData=[];
    for(var i in mdata){
        jsonamountData[i]=mdata[i].amount;
    }
    
    display(jsonamountData,jsonDayData);
}

function display(value,day,barsss){
    const sumVal=sum(value);
    const maxVal=max(value,day);
    const percentage=inPercent(value,sumVal);
    const hei=95/maxvalu(percentage);
    loadTimes+=1;
    
    if(loadTimes<=1){
        for(var i=0;i<value.length;i++){
            renderBar(percentage[i],day[i],maxVal,hei,value[i]);
            
        }
        $('.bar').hover(function(){
            $(this)[0].parentElement.firstElementChild.classList.toggle('dontdisplay');
        });
    }else{
        var show=document.querySelectorAll('.show')
        for(var i=0;i<value.length;i++){
            renderBarAgain(percentage[i],day[i],maxVal,hei,barsss[i],show[i]);
        }   
    }
}

function renderBar(perc,day,maxv,h,val){
    const barDiv=document.createElement('div');
    const bar=document.createElement('div');
    const show=document.createElement('div');
    const sharp=document.createElement('div');
    const h3=document.createElement('h3');

    barDiv.classList.add('bar-div');
    show.classList.add('show');
    show.classList.add('dontdisplay')
    sharp.classList.add('sharp');
    h3.classList.add('disp');
    bar.classList.add('bar');
    if(day==maxv){
        bar.style.backgroundColor='hsl(186, 34%, 60%)';
        bar.style.height=(perc*h)+'%';   
    }else{
        bar.style.backgroundColor='hsl(10, 79%, 65%)';
        bar.style.height=(perc*h)+'%';
    }
    
    h3.innerText='$'+val;
    show.appendChild(h3);
    show.appendChild(sharp);
    show.style.top=(100-(perc*h))+'%';

    barDiv.appendChild(show);
    barDiv.appendChild(bar);
    
    eChart.appendChild(barDiv);
    
}
function renderBarAgain(perc,day,maxv,h,bar,show){
    show.style.top=(100-(perc*h))+'%';
    if(day==maxv){
        bar.style.backgroundColor='hsl(186, 34%, 60%)';
        bar.style.height=(perc*h)+'%';
        
    }else{
        bar.style.backgroundColor='hsl(10, 79%, 65%)';
        bar.style.height=(perc*h)+'%';
        
    }
}

function randoms(){
    var arr=[];
    for(var i=0;i<7;i++){
        var roundedValue = Math.round((Math.random()*500) * 100) / 100;
        arr[i]= roundedValue;
    }
    console.log(arr);
    return arr;
}

function inPercent(v,s){
    var arr=[];
    for(var i=0;i<v.length;i++){
        arr[i]=(v[i]/s)*100;
    }
    return arr;
}
function maxvalu(v){
    var max=0;
    for(var i=0;i<v.length;i++){
        if(max <v[i]){
            max=v[i];
        }
    }
    return max;
}
function max(v,d){
    var max=0;
    var day='';
    for(var i=0;i<v.length;i++){
        if(max <v[i]){
            max=v[i];
            day=d[i];
        }
    }
    return day;
}
function sum(v){
    var sum=0;
    for(var i=0;i<v.length;i++){
        sum+=v[i];
    }
    return sum;
}


