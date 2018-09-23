var qwe0=document.getElementById("qwe0");
var sxy0=document.getElementById("sxy0");
var qwe1=document.getElementById("qwe1");
var sxy1=document.getElementById("sxy1");
var qwe2=document.getElementById("qwe2");
var sxy2=document.getElementById("sxy2");
var qwe3=document.getElementById("qwe3");
var sxy3=document.getElementById("sxy3");
var qwe4=document.getElementById("qwe4");
var sxy4=document.getElementById("sxy4");


qwe0.onmouseover=function(){
    sxy0.style.display="block";
}
qwe0.onmouseout=function(){
    sxy0.style.display="none";
}
qwe1.onmouseover=function(){
    sxy1.style.display="block";
}
qwe1.onmouseout=function(){
    sxy1.style.display="none";
}
qwe2.onmouseover=function(){
    sxy2.style.display="block";
}
qwe2.onmouseout=function(){
    sxy2.style.display="none";
}
qwe3.onmouseover=function(){
    sxy3.style.display="block";
}
qwe3.onmouseout=function(){
    sxy3.style.display="none";
}
qwe4.onmouseover=function(){
    sxy4.style.display="block";
}
qwe4.onmouseout=function(){
    sxy4.style.display="none";
}




var box=document.getElementById("ycdl");
var kt=document.getElementById("ljkt");
var dl=document.getElementById("wydl");
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
kt.onclick=function () {
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