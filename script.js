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
// Typing Effect

const words = [
"Shopify Developer",
"Shopify Expert",
"Ecommerce Specialist",
"Frontend Developer"
];

let wordIndex = 0;
let letterIndex = 0;

const typing = document.getElementById("typing");

function type(){

if(letterIndex < words[wordIndex].length){

typing.innerHTML += words[wordIndex].charAt(letterIndex);

letterIndex++;

setTimeout(type,100);

}else{

setTimeout(erase,1800);

}

}

function erase(){

if(letterIndex>0){

typing.innerHTML=words[wordIndex].substring(0,letterIndex-1);

letterIndex--;

setTimeout(erase,50);

}else{

wordIndex++;

if(wordIndex>=words.length){

wordIndex=0;

}

setTimeout(type,300);

}

}

type();
/* Mouse Glow */

const glow=document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";

});
const testimonials = document.querySelectorAll(".testimonial-card");

let testimonialIndex = 0;

function showTestimonial(){

    testimonials.forEach(card=>{
        card.classList.remove("active");
    });

    testimonials[testimonialIndex].classList.add("active");

    testimonialIndex++;

    if(testimonialIndex >= testimonials.length){
        testimonialIndex = 0;
    }

}

setInterval(showTestimonial,5000);
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
/*=========================================
    PREMIUM NAVBAR
=========================================*/

const header = document.getElementById("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 40){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});
/*=========================================
    ACTIVE NAVIGATION
=========================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

function activeMenu(){

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;

        if(window.scrollY >= sectionTop &&
           window.scrollY < sectionTop + sectionHeight){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll",activeMenu);

activeMenu();
