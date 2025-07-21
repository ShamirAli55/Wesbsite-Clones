var crsr = document.querySelector("#cursor");
document.addEventListener("mousemove",(dets)=>{
    crsr.style.left = dets.x - 30 + "px";
    crsr.style.top = dets.y + "px";
})