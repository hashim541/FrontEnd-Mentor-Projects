var check="";
var prevp,prevh5s,previmgs;
$(".content").click(function(){
    
    var a=$(this).attr("id");
    var ptag=document.querySelector("."+a);
    var b=$(this)[0];
    
    
    var h5s=b.firstElementChild.firstElementChild;
    var imgs=b.firstElementChild.lastElementChild;

    ptag.classList.add("ans");
    h5s.classList.add("h5s");
    imgs.classList.add("rotate");

    if(check!=""){
        removeCss();
    }
    
    prevptag=ptag;
    prevh5s=h5s;
    previmgs=imgs;
    
    check=b;
});
function removeCss(){
    prevptag.classList.remove("ans");
    prevh5s.classList.remove("h5s");
    previmgs.classList.remove("rotate");
}