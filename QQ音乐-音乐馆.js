var gd=document.getElementsByClassName("gd")[0];
var xg=document.getElementsByClassName("xg")[0];
var tj=document.getElementsByClassName("tj")[0];
var xd=document.getElementsByClassName("xd")[0];
var MV=document.getElementsByClassName("MV")[0];


gd.onmouseover=function(){
	document.querySelector(".gd .jiantz").style.display="block";
    document.querySelector(".gd .jianty").style.display="block";
}
gd.onmouseout=function(){
	document.querySelector(".gd .jiantz").style.display="none";
    document.querySelector(".gd .jianty").style.display="none";
}

xg.onmouseover=function(){
    document.querySelector(".xg .jiantz").style.display="block";
    document.querySelector(".xg .jianty").style.display="block";
}
xg.onmouseout=function(){
    document.querySelector(".xg .jiantz").style.display="none";
    document.querySelector(".xg .jianty").style.display="none";
}

tj.onmouseover=function(){
    document.querySelector(".tj .jiantz").style.display="block";
    document.querySelector(".tj .jianty").style.display="block";
}
tj.onmouseout=function(){
    document.querySelector(".tj .jiantz").style.display="none";
    document.querySelector(".tj .jianty").style.display="none";
}

xd.onmouseover=function(){
    document.querySelector(".xd .jiantz").style.display="block";
    document.querySelector(".xd .jianty").style.display="block";
}
xd.onmouseout=function(){
    document.querySelector(".xd .jiantz").style.display="none";
    document.querySelector(".xd .jianty").style.display="none";
}

MV.onmouseover=function(){
    document.querySelector(".MV .jiantz").style.display="block";
    document.querySelector(".MV .jianty").style.display="block";
}
MV.onmouseout=function(){
    document.querySelector(".MV .jiantz").style.display="none";
    document.querySelector(".MV .jianty").style.display="none";
}


var next=document.getElementsByClassName("jiantz")[0];
var last=document.getElementsByClassName("jianty")[0];

var i=0;
var j=1;
next.onclick=function(){
    var timer=window.setInterval(function(){
        i++;
        document.querySelector(".gd_1").style.left="-"+i+"%";
        if(i==(100*j)){
            clearInterval(timer);
            j++;
            if(j==3){
                j=1;
                i=0;
                document.querySelector(".gd_1").style.left="0";
            }
        }

    },10);
}
last.onclick=function(){
    var timer=window.setInterval(function(){
        i++;
        document.querySelector(".gd_1").style.left="-"+i+"%";
        if(i==(100*j)){
            clearInterval(timer);
            j++;
            if(j==3){
                j=1;
                i=0;
                document.querySelector(".gd_1").style.left="0";
            }
        }

    },10);
}



var next1=document.querySelectorAll(".xg .jiantz")[0];
var last1=document.querySelectorAll(".xg .jianty")[0];

var a=0;
var b=1;
next1.onclick=function(){
    var qwe=window.setInterval(function(){
        a++;
        document.querySelector(".xg_1").style.left="-"+a+"%";
        if(a==(100*b)){
            clearInterval(qwe);
            b++;
            if(b==5){
                b=1;
                a=0;
                document.querySelector(".xg_1").style.left="0";
            }
        }

    },10);
}
last1.onclick=function(){
    var qwe=window.setInterval(function(){
        a++;
        document.querySelector(".xg_1").style.left="-"+a+"%";
        if(a==(100*b)){
            clearInterval(qwe);
            b++;
            if(b==5){
                b=1;
                a=0;
                document.querySelector(".xg_1").style.left="0";
            }
        }

    },10);
}

var next2=document.querySelectorAll(".tj .jiantz")[0];
var last2=document.querySelectorAll(".tj .jianty")[0];
next2.onclick=function(){
    var asd=window.setInterval(function(){
        a++;
        document.querySelector(".tj_1").style.left="-"+a+"%";
        if(a==(100*b)){
            clearInterval(asd);
            b++;
            if(b==5){
                b=1;
                a=0;
                document.querySelector(".tj_1").style.left="0";
            }
        }

    },10);
}
last2.onclick=function(){
    var asd=window.setInterval(function(){
        a++;
        document.querySelector(".tj_1").style.left="-"+a+"%";
        if(a==(100*b)){
            clearInterval(asd);
            b++;
            if(b==5){
                b=1;
                a=0;
                document.querySelector(".tj_1").style.left="0";
            }
        }

    },10);
}

var next3=document.querySelectorAll(".xd .jiantz")[0];
var last3=document.querySelectorAll(".xd .jianty")[0];
next3.onclick=function(){
    var zxc=window.setInterval(function(){
        a++;
        document.querySelector(".xd_2").style.left="-"+a+"%";
        if(a==(100*b)){
            clearInterval(zxc);
            b++;
            if(b==5){
                b=1;
                a=0;
                document.querySelector(".xd_2").style.left="0";
            }
        }

    },10);
}
last3.onclick=function(){
    var zxc=window.setInterval(function(){
        a++;
        document.querySelector(".xd_2").style.left="-"+a+"%";
        if(a==(100*b)){
            clearInterval(zxc);
            b++;
            if(b==5){
                b=1;
                a=0;
                document.querySelector(".xd_2").style.left="0";
            }
        }

    },10);
}

var next4=document.querySelectorAll(".MV .jiantz")[0];
var last4=document.querySelectorAll(".MV .jianty")[0];
next4.onclick=function(){
    var mnb=window.setInterval(function(){
        a++;
        document.querySelector(".MV_1").style.left="-"+a+"%";
        if(a==(100*b)){
            clearInterval(mnb);
            b++;
            if(b==5){
                b=1;
                a=0;
                document.querySelector(".MV_1").style.left="0";
            }
        }

    },10);
}
last4.onclick=function(){
    var mnb=window.setInterval(function(){
        a++;
        document.querySelector(".MV_1").style.left="-"+a+"%";
        if(a==(100*b)){
            clearInterval(mnb);
            b++;
            if(b==5){
                b=1;
                a=0;
                document.querySelector(".MV_1").style.left="0";
            }
        }

    },10);
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


