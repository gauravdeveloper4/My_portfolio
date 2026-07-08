/* ==========================================
   PORTFOLIO JAVASCRIPT
========================================== */

// ======================
// Mobile Menu
// ======================

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {

    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};

// ======================
// Scroll Events
// ======================

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let header = document.querySelector('.header');

window.onscroll = () => {

    // Active Navbar

    sections.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){

            navLinks.forEach(link=>{
                link.classList.remove('active');
            });

            let activeLink = document.querySelector('header nav a[href*=' + id + ']');

            if(activeLink){
                activeLink.classList.add('active');
            }

        }

    });

    // Sticky Header

    header.classList.toggle('sticky', window.scrollY > 100);

    // Close Menu

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // Scroll Top Button

    let scrollBtn = document.getElementById("scrollTop");

    if(scrollBtn){

        if(window.scrollY > 300){

            scrollBtn.classList.add("active");

        }

        else{

            scrollBtn.classList.remove("active");

        }

    }

};

// ======================
// Typed JS
// ======================

var typed = new Typed(".multiple-text",{

    strings:[

        "Aspiring Software Engineer",

        "Full Stack Developer"

    ],

    typeSpeed:100,

    backSpeed:60,

    backDelay:1200,

    loop:true

});

// ======================
// Scroll To Top
// ======================

let scrollBtn = document.getElementById("scrollTop");

if(scrollBtn){

    scrollBtn.onclick = ()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    }

}

// ======================
// Reveal Animation
// ======================

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},
{
    threshold:0.2
});

document.querySelectorAll(

".about-content,.about-image,.education-card,.skill-card,.project-card,.contact-container"

).forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});


// ======================
// Smooth Button Scroll
// ======================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

    e.preventDefault();

    let target=document.querySelector(this.getAttribute("href"));

    if(target){

        target.scrollIntoView({

            behavior:"smooth"

        });

    }

});

});

// ======================
// Loading Animation
// ======================

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});

// ======================
// Current Year
// ======================

const year=document.getElementById("year");

if(year){

    year.textContent=new Date().getFullYear();

}

emailjs.init("29NmtLd58HqtRve8q");

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_nqazlwm",
        "template_1q6h75o",
        this
    ).then(() => {
        alert("Message sent successfully!");
        this.reset();
    }).catch((error) => {
        alert("Failed to send message!");
        console.log(error);
    });
});