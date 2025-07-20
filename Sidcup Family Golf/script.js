gsap.to("#nav", {
  backgroundColor: "black",
  height: "23%",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub:2
  }
});

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -75%",
        scrub:2
    }
})

var crsr = document.querySelector("#cursor");
var bl =  document.querySelector("#cursor-blur");
document.addEventListener("mousemove",(dets)=>
{
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";

    bl.style.left = dets.x - 200 + "px";
    bl.style.top = dets.y  - 200 + "px";
})

