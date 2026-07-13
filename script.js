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
/*=========================
 Hero Mouse Effect
==========================*/

const imageCard = document.querySelector(".image-card");

document.addEventListener("mousemove",(e)=>{

    if(!imageCard) return;

    const x = (window.innerWidth/2 - e.clientX)/40;
    const y = (window.innerHeight/2 - e.clientY)/40;

    imageCard.style.transform =
    `rotateY(${x}deg) rotateX(${-y}deg)`;

});
/*=========================================
      EXPERIENCE SCROLL ANIMATION
=========================================*/

const timelineItems = document.querySelectorAll(".timeline-item");

const timelineObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.35
});

timelineItems.forEach(item=>{

    timelineObserver.observe(item);

});
/*=========================================
      TIMELINE LINE ANIMATION
=========================================*/

const timeline = document.querySelector(".timeline");

window.addEventListener("scroll",()=>{

    if(!timeline) return;

    const rect = timeline.getBoundingClientRect();

    const windowHeight = window.innerHeight;

    const start = windowHeight * 0.85;

    let progress = (start - rect.top) / rect.height;

    progress = Math.max(0, Math.min(progress,1));

    timeline.style.setProperty("--lineHeight",(progress*100)+"%");

});
/*=========================================
        REAL 3D CARD TILT
=========================================*/

const cards = document.querySelectorAll(".timeline-card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;

const y = e.clientY - rect.top;

const rotateY = ((x / rect.width)-0.5)*18;

const rotateX = ((y / rect.height)-0.5)*-18;

card.style.transform=
`perspective(1200px)
 rotateX(${rotateX}deg)
 rotateY(${rotateY}deg)
 translateY(-10px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=
"perspective(1200px) rotateX(0) rotateY(0) translateY(0)";

});

});
/*=========================================
      MOUSE GLOW + ACTIVE CARD
=========================================*/

const experienceCards = document.querySelectorAll(".timeline-card");

experienceCards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x",`${x}px`);
        card.style.setProperty("--mouse-y",`${y}px`);

    });

});

const activeObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            experienceCards.forEach(card=>card.classList.remove("active"));

            entry.target.querySelector(".timeline-card").classList.add("active");

        }

    });

},{
    threshold:0.6
});

document.querySelectorAll(".timeline-item").forEach(item=>{

    activeObserver.observe(item);

});
/*=========================================
    3D TESTIMONIAL CAROUSEL
=========================================*/

const reviewCards = document.querySelectorAll(".review-card");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const carousel = document.querySelector(".testimonial-carousel");

let current = 0;
let autoPlay = null;

/*=========================================
    UPDATE CAROUSEL
=========================================*/

function updateCarousel() {

    reviewCards.forEach((card, index) => {

        card.classList.remove(
            "active",
            "left",
            "right",
            "hidden"
        );

        if (index === current) {

            card.classList.add("active");

        } else if (index === (current - 1 + reviewCards.length) % reviewCards.length) {

            card.classList.add("left");

        } else if (index === (current + 1) % reviewCards.length) {

            card.classList.add("right");

        } else {

            card.classList.add("hidden");

        }

    });

    dots.forEach((dot, index) => {

        dot.classList.toggle("active", index === current);

    });

}

/*=========================================
    NEXT
=========================================*/

function nextSlide() {

    current++;

    if (current >= reviewCards.length) {

        current = 0;

    }

    updateCarousel();

}

/*=========================================
    PREVIOUS
=========================================*/

function prevSlide() {

    current--;

    if (current < 0) {

        current = reviewCards.length - 1;

    }

    updateCarousel();

}

/*=========================================
    AUTOPLAY
=========================================*/

function startAutoPlay() {

    stopAutoPlay();

    autoPlay = setInterval(() => {

        nextSlide();

    }, 4000);

}

function stopAutoPlay() {

    if (autoPlay) {

        clearInterval(autoPlay);

    }

}

/*=========================================
    BUTTON EVENTS
=========================================*/

if (nextBtn) {

    nextBtn.addEventListener("click", () => {

        nextSlide();

        startAutoPlay();

    });

}

if (prevBtn) {

    prevBtn.addEventListener("click", () => {

        prevSlide();

        startAutoPlay();

    });

}

/*=========================================
    DOT EVENTS
=========================================*/

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        current = index;

        updateCarousel();

        startAutoPlay();

    });

});

/*=========================================
    PAUSE ON HOVER
=========================================*/

if (carousel) {

    carousel.addEventListener("mouseenter", stopAutoPlay);

    carousel.addEventListener("mouseleave", startAutoPlay);

}

/*=========================================
    MOUSE GLOW
=========================================*/

reviewCards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", x + "px");
        card.style.setProperty("--mouse-y", y + "px");

    });

});

/*=========================================
    DRAG / SWIPE SUPPORT
=========================================*/

let startX = 0;
let endX = 0;

if (carousel) {

    carousel.addEventListener("touchstart", (e) => {

        startX = e.touches[0].clientX;

    });

    carousel.addEventListener("touchend", (e) => {

        endX = e.changedTouches[0].clientX;

        if (startX - endX > 50) {

            nextSlide();
            startAutoPlay();

        }

        if (endX - startX > 50) {

            prevSlide();
            startAutoPlay();

        }

    });

    let isDragging = false;

    carousel.addEventListener("mousedown", (e) => {

        isDragging = true;

        startX = e.clientX;

    });

    window.addEventListener("mouseup", (e) => {

        if (!isDragging) return;

        isDragging = false;

        endX = e.clientX;

        if (startX - endX > 80) {

            nextSlide();
            startAutoPlay();

        }

        if (endX - startX > 80) {

            prevSlide();
            startAutoPlay();

        }

    });

}

/*=========================================
    INIT
=========================================*/

if (reviewCards.length > 0) {

    updateCarousel();

    startAutoPlay();

}
/*=========================================
      CONTACT MOUSE GLOW
=========================================*/

const contactElements = document.querySelectorAll(".contact-card, .contact-form");

contactElements.forEach(item => {

    item.addEventListener("mousemove", (e) => {

        const rect = item.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        item.style.setProperty("--mouse-x", `${x}px`);
        item.style.setProperty("--mouse-y", `${y}px`);

    });

});
/*=========================================
        LUXURY SPLASH SCREEN
=========================================*/

const splash = document.getElementById("splash");

if (splash) {

    setTimeout(() => {

        splash.classList.add("hide");

        setTimeout(() => {

            splash.remove();

        }, 800);

    }, 1000);

}
