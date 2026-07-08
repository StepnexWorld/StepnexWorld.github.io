// Initialize Animation
AOS.init({
    duration:1000,
    once:true
});

// Smooth Button Animation

const buttons = document.querySelectorAll(".btn1,.btn2");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.08)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});
