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
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navItems = document.querySelectorAll(".nav-item");
const sections = document.querySelectorAll("section");

/* Header Scroll */

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

/* Mobile Menu */

menuToggle.addEventListener("click",()=>{

    navMenu.classList.toggle("active");

    const icon=menuToggle.querySelector("i");

    if(navMenu.classList.contains("active")){

        icon.classList.replace("ri-menu-3-line","ri-close-line");

    }else{

        icon.classList.replace("ri-close-line","ri-menu-3-line");

    }

});

/* Close Menu */

navItems.forEach(item=>{

    item.addEventListener("click",()=>{

        navMenu.classList.remove("active");

        const icon=menuToggle.querySelector("i");

        icon.classList.replace("ri-close-line","ri-menu-3-line");

    });

});

/* Active Menu on Scroll */

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-140;

        if(window.scrollY>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

/* Smooth Scroll */

navItems.forEach(link=>{

    link.addEventListener("click",(e)=>{

        e.preventDefault();

        const target=document.querySelector(link.getAttribute("href"));

        if(target){

            window.scrollTo({

                top:target.offsetTop-90,

                behavior:"smooth"

            });

        }

    });

});
