const button =document.getElementById("buttonName");
const text =document.getElementById("textName");
const doNotTouch =document.getElementById("doNotTouch");

z=0;x=0;
button.addEventListener("click", () => {
    if(z==0){
    text.textContent = "吐司機";
    button.textContent ="被你發現了";
    z=1;
   }
   else{
    text.textContent = "......";
    button.textContent ="商業機密";
    z=0;
   }
});
doNotTouch.addEventListener("click", () => {
    if(x==0){
    doNotTouch.textContent = "我說了不要按";
    x++;
   }
   else{
    x++;
    doNotTouch.textContent = "Sad";
   }
});
