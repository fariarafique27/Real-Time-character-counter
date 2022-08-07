const textAreaEl=document.getElementById("textarea")
const totalcharEl=document.getElementById("totalchar")
const remainingcharEl=document.getElementById("remainingchar")
textAreaEl.addEventListener("keyup" ,  ()=>{
    
    update();
})
function  update(){
    totalcharEl.innerHTML=  textAreaEl.value.length;
    remainingcharEl.innerHTML= textAreaEl.getAttribute("maxlength")-textAreaEl.value.length;
}
