var index=1;
var time;
var pic=document.getElementById("pic");
var num=0;

time=setInterval("show()",2000);

function show(id) {
    if( Number(id) ){
        index=id;
        clearInterval(time);
    }else{
        index++;
        if(index==7){
            index=1;
        }
    }

    pic.src="images/con_"+index+".jpg";

    var lis=document.getElementsByClassName("wyd");
    lis[num].style.backgroundColor="";
    num++;
    num%=lis.length;
    lis[num].style.backgroundColor="#999";
}
function start() {
    time=setInterval("show()",2000);
}



var xs=document.getElementById("xs");

window.onscroll=function () {
    if(document.documentElement.scrollTop+document.body.scrollTop>250){
        xs.style.display="block";
    }else{
        xs.style.display="none";
    }
}

onscroll();



var box=document.getElementById("ycdl");
var dl=document.getElementById("wydl");
var lz=document.getElementById("lzhhb");
var ffb=document.getElementById("ffb");
var dldiv=document.getElementById("dldiv");
var closer=document.getElementById("close");
var spa=document.getElementById("sp_a");
var dlqq=document.getElementById("dlqq");
var dlwx=document.getElementById("dlwx");
var qqdl=document.getElementById("qqdl");
var wxdl=document.getElementById("wxdl");
var zhdl=document.getElementById("zhdl");
var wdform=document.getElementById("wdform");

dlwx.onclick=function () {
    wxdl.style.display="block";
    qqdl.style.display="none";
    dlwx.style.color="#31C27C";
    dlqq.style.color="#333";
}
dlqq.onclick=function () {
    wxdl.style.display="none";
    qqdl.style.display="block";
    dlwx.style.color="#333";
    dlqq.style.color="#31C27C";
}

closer.onclick=function () {
    box.style.display="none";
}
dl.onclick=function () {
    box.style.display="block";
}
lz.onclick=function () {
    box.style.display="block";
}
ffb.onclick=function () {
    box.style.display="block";
}
zhdl.onclick=function () {
    wdform.style.display="block";
    dldiv.style.display="none";
    zhdl.innerHTML="<a href=''>忘了密码？</a>";
}
spa.onclick=function () {
    dldiv.style.display="block";
    wdform.style.display="none";
}


