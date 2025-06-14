var link1 = document.getElementById("home")
var link2 = document.getElementById("GorillazLink")
var link3 = document.getElementById("ArcticMonkeysLink")
var link4 = document.getElementById("RareAmericansLink")
var link5 = document.getElementById("CosmoSheldrakeLink")
var link6 = document.getElementById("SIAMÉSLink")
var link7 = document.getElementById("IDKHowButTheyFoundMeLink")
var link8 = document.getElementById("CaravanPalaceLink")
var link9 = document.getElementById("TheLivingTombstoneLink")

var Text1 = document.getElementById("homeText")
var Text2 = document.getElementById("GorillazText")
var Text3 = document.getElementById("ArcticMonkeysText")
var Text4 = document.getElementById("RareAmericansText")
var Text5 = document.getElementById("CosmoSheldrakeText")
var Text6 = document.getElementById("SIAMÉSText")
var Text7 = document.getElementById("IDKHowButTheyFoundMeText")
var Text8 = document.getElementById("CaravanPalaceText")
var Text9 = document.getElementById("TheLivingTombstoneText")

var a =1
var video21 = document.getElementById("video21");var video22 = document.getElementById("video22")
var video23 = document.getElementById("video23");var video24 = document.getElementById("video24")
var video31 = document.getElementById("video31");var video32 = document.getElementById("video32")
var video33 = document.getElementById("video33");var video34 = document.getElementById("video34")
var video41 = document.getElementById("video41");var video42 = document.getElementById("video42")
var video43 = document.getElementById("video43");var video44 = document.getElementById("video44")
var video51 = document.getElementById("video51");var video52 = document.getElementById("video52")
var video53 = document.getElementById("video53");var video54 = document.getElementById("video54")
var video61 = document.getElementById("video61");var video62 = document.getElementById("video62")
var video63 = document.getElementById("video63");var video64 = document.getElementById("video64")
var video71 = document.getElementById("video71");var video72 = document.getElementById("video72")
var video73 = document.getElementById("video73");var video74 = document.getElementById("video74")
var video81 = document.getElementById("video81");var video82 = document.getElementById("video82")
var video83 = document.getElementById("video83");var video84 = document.getElementById("video84")
var video91 = document.getElementById("video91");var video92 = document.getElementById("video92")
var video93 = document.getElementById("video93");var video94 = document.getElementById("video94")
function acheck(){
    if(a==1){
        Text1.style.display="none";
    }
    else if(a==2){
        Text2.style.display="none";
    }
    else if(a==3){
        Text3.style.display="none";
    }
    else if(a==4){
        Text4.style.display="none";
    }
    else if(a==5){
        Text5.style.display="none";
    }
    else if(a==6){
        Text6.style.display="none";
    }
    else if(a==7){
        Text7.style.display="none";
    }
    else if(a==8){
        Text8.style.display="none";
    }
    else if(a==9){
        Text9.style.display="none";
    }
}
link1.addEventListener("click",function(){
    acheck();
    a=1;
    Text1.style.display="block";
})
link2.addEventListener("click",function(){
    acheck();
    a=2;
    Text2.style.display="block";
    video21.src="https://www.youtube.com/embed/E5yFcdPAGv0";
    video22.src="https://www.youtube.com/embed/S03T47hapAc";
    video23.src="https://www.youtube.com/embed/1V_xRb0x9aw";
    video24.src="https://www.youtube.com/embed/WXR-bCF5dbM";
})
link3.addEventListener("click",function(){
    acheck();
    a=3;
    Text3.style.display="block";
    video31.src="https://www.youtube.com/embed/bpOSxM0rNPM"
    video32.src="https://www.youtube.com/embed/VQH8ZTgna3Q"
    video33.src="https://www.youtube.com/embed/qU9mHegkTc4"
    video34.src="https://www.youtube.com/embed/ma9I9VBKPiw"
})
link4.addEventListener("click",function(){
    acheck();
    a=4;
    Text4.style.display="block";
    video41.src="https://www.youtube.com/embed/wiifCAd3_uk"
    video42.src="https://www.youtube.com/embed/uCyp5IKjrxU"
    video43.src="https://www.youtube.com/embed/zRY81RvJz90"
    video44.src="https://www.youtube.com/embed/0lBNlD29hnw"
})
link5.addEventListener("click",function(){
    acheck();
    a=5;
    Text5.style.display="block";
    video51.src="https://www.youtube.com/embed/bIyl9bCp6W4"
    video52.src="https://www.youtube.com/embed/62RvnXZgHwQ"
    video53.src="https://www.youtube.com/embed/VpQhVl-WkHo"
    video54.src="https://www.youtube.com/embed/cbQyFZmuA58"
})
link6.addEventListener("click",function(){
    acheck();
    a=6;
    Text6.style.display="block";
    video61.src="https://www.youtube.com/embed/lX44CAz-JhU"
    video62.src="https://www.youtube.com/embed/dYgrDcXHLwA"
    video63.src="https://www.youtube.com/embed/6tjIzCojsaA"
    video64.src="https://www.youtube.com/embed/W3OMX9J_rLs"
})
link7.addEventListener("click",function(){
    acheck();
    a=7;
    Text7.style.display="block";
    video71.src="https://www.youtube.com/embed/85Z3iwpFQeg"
    video72.src="https://www.youtube.com/embed/mvJjmWTg7Qo"
    video73.src="https://www.youtube.com/embed/6vYwys2e_FA"
    video74.src="https://www.youtube.com/embed/hXzPxBhhmY8"
})
link8.addEventListener("click",function(){
    acheck();
    a=8;
    Text8.style.display="block";
    video81.src="https://www.youtube.com/embed/A7lxd7RL1To"
    video82.src="https://www.youtube.com/embed/fBGSJ3sbivI"
    video83.src="https://www.youtube.com/embed/TbsBEb1ZxWA"
    video84.src="https://www.youtube.com/embed/imCd-m32oAs"
})
link9.addEventListener("click",function(){
    acheck();
    a=9;
    Text9.style.display="block";
    video91.src="https://www.youtube.com/embed/9Zj0JOHJR-s"
    video92.src="https://www.youtube.com/embed/weZKm1kTrpc"
    video93.src="https://www.youtube.com/embed/2_ZhBy9tnpE"
    video94.src="https://www.youtube.com/embed/kMX3PHut8Hs"
})

