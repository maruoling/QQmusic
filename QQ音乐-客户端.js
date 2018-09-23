var xz1=document.getElementsByClassName("xz_1")[0];
var xz2=document.getElementsByClassName("xz_2")[0];
var xz3=document.getElementsByClassName("xz_3")[0];
var xz4=document.getElementsByClassName("xz_4")[0];
var pc=document.getElementById("pc");
var mac=document.getElementById("mac");
var iphone=document.getElementById("iphone");
var android=document.getElementById("android");

function showLi(y){
    if(y=="xz1"){
        xz1.style.borderTop="1px solid #fff";
        xz2.style.borderTop="0px solid #fff";
        xz3.style.borderTop="0px solid #fff";
        xz4.style.borderTop="0px solid #fff";
        xz1.style.opacity="1";
        xz2.style.opacity="0.5";
        xz3.style.opacity="0.5";
        xz4.style.opacity="0.5";
        pc.style.display="block";
        mac.style.display="none";
        iphone.style.display="none";
        android.style.display="none";
    }
    if(y=="xz2"){
        xz1.style.borderTop="0px solid #fff";
        xz2.style.borderTop="1px solid #fff";
        xz3.style.borderTop="0px solid #fff";
        xz4.style.borderTop="0px solid #fff";
        xz2.style.opacity="1";
        xz1.style.opacity="0.5";
        xz3.style.opacity="0.5";
        xz4.style.opacity="0.5";
        pc.style.display="none";
        mac.style.display="block";
        iphone.style.display="none";
        android.style.display="none";
    }
    if(y=="xz3"){
        xz1.style.borderTop="0px solid #fff";
        xz2.style.borderTop="0px solid #fff";
        xz3.style.borderTop="1px solid #fff";
        xz4.style.borderTop="0px solid #fff";
        xz3.style.opacity="1";
        xz1.style.opacity="0.5";
        xz2.style.opacity="0.5";
        xz4.style.opacity="0.5";
        pc.style.display="none";
        mac.style.display="none";
        iphone.style.display="block";
        android.style.display="none";
    }
    if(y=="xz4"){
        xz1.style.borderTop="0px solid #fff";
        xz2.style.borderTop="0px solid #fff";
        xz3.style.borderTop="0px solid #fff";
        xz4.style.borderTop="1px solid #fff";
        xz4.style.opacity="1";
        xz1.style.opacity="0.5";
        xz2.style.opacity="0.5";
        xz3.style.opacity="0.5";
        pc.style.display="none";
        mac.style.display="none";
        iphone.style.display="none";
        android.style.display="block";
    }
}