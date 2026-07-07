/*==================================================

ALAM TRADERS PVT. LTD.
Premium Industrial Website
main.js

==================================================*/





/*====================================
        DOM READY
=====================================*/

document.addEventListener("DOMContentLoaded", () => {

    stickyHeader();

    mobileMenu();

    backToTop();

    smoothScroll();

    activeNavigation();

});





/*====================================
        STICKY HEADER
=====================================*/

function stickyHeader() {

    const header = document.querySelector(".header");

    if (!header) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

}





/*====================================
        MOBILE MENU
=====================================*/

function mobileMenu() {

    const menuButton = document.querySelector(".menu-toggle");

    const nav = document.querySelector(".navbar");

    if (!menuButton || !nav) return;

    menuButton.addEventListener("click", () => {

        nav.classList.toggle("active");

        menuButton.classList.toggle("active");

    });

    document.querySelectorAll(".navbar a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");

            menuButton.classList.remove("active");

        });

    });

}





/*====================================
        BACK TO TOP
=====================================*/

function backToTop() {

    const button = document.getElementById("backToTop");

    if (!button) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            button.style.opacity = "1";

            button.style.visibility = "visible";

        } else {

            button.style.opacity = "0";

            button.style.visibility = "hidden";

        }

    });

    button.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}





/*====================================
        SMOOTH SCROLL
=====================================*/

function smoothScroll() {

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        });

    });

}





/*====================================
        ACTIVE NAVIGATION
=====================================*/

function activeNavigation() {

    const sections = document.querySelectorAll("section[id]");

    const navLinks = document.querySelectorAll(".navbar a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 150;

            const height = section.offsetHeight;

            if (window.scrollY >= top &&
                window.scrollY < top + height) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (href === "#" + current) {

                link.classList.add("active");

            }

        });

    });

}
/*====================================
        SCROLL REVEAL
=====================================*/

function scrollReveal() {

    const elements = document.querySelectorAll(

        ".section-heading, .product-card, .gallery-item, .video-card, .testimonial-card, .value-card, .industry-card, .process-card, .strength-card, .office-card, .info-card, .certificate-card"

    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

            }

        });

    }, {

        threshold: 0.15

    });

    elements.forEach(element => {

        element.style.opacity = "0";

        element.style.transform = "translateY(40px)";

        element.style.transition = "all .7s ease";

        observer.observe(element);

    });

}

scrollReveal();





/*====================================
        COUNTER ANIMATION
=====================================*/

function counterAnimation() {

    const counters = document.querySelectorAll(".counter");

    if (!counters.length) return;

    counters.forEach(counter => {

        const target = parseInt(counter.dataset.target);

        let current = 0;

        const speed = target / 120;

        const update = () => {

            current += speed;

            if (current < target) {

                counter.innerText = Math.ceil(current);

                requestAnimationFrame(update);

            } else {

                counter.innerText = target + "+";

            }

        };

        update();

    });

}

counterAnimation();





/*====================================
        FAQ ACCORDION
=====================================*/

function faqAccordion() {

    const items = document.querySelectorAll(".faq-item");

    if (!items.length) return;

    items.forEach(item => {

        const answer = item.querySelector("p");

        if (!answer) return;

        answer.style.display = "none";

        item.addEventListener("click", () => {

            const opened = answer.style.display === "block";

            document.querySelectorAll(".faq-item p").forEach(p => {

                p.style.display = "none";

            });

            answer.style.display = opened ? "none" : "block";

        });

    });

}

faqAccordion();





/*====================================
        GALLERY LIGHTBOX
=====================================*/

function galleryLightbox() {

    const images = document.querySelectorAll(".gallery-item img");

    if (!images.length) return;

    const overlay = document.createElement("div");

    overlay.id = "lightbox";

    overlay.style.cssText = `
        position:fixed;
        inset:0;
        background:rgba(0,0,0,.9);
        display:none;
        align-items:center;
        justify-content:center;
        z-index:9999;
        cursor:pointer;
    `;

    const image = document.createElement("img");

    image.style.cssText = `
        max-width:90%;
        max-height:90%;
        border-radius:12px;
    `;

    overlay.appendChild(image);

    document.body.appendChild(overlay);

    images.forEach(img => {

        img.addEventListener("click", () => {

            image.src = img.src;

            overlay.style.display = "flex";

        });

    });

    overlay.addEventListener("click", () => {

        overlay.style.display = "none";

    });

}

galleryLightbox();





/*====================================
        PAGE LOADER
=====================================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});
/*====================================
        VIDEO POPUP
=====================================*/

function videoPopup() {

    const cards = document.querySelectorAll(".video-card");

    if (!cards.length) return;

    cards.forEach(card => {

        card.addEventListener("click", () => {

            const video = card.dataset.video;

            if (!video) return;

            window.open(video, "_blank");

        });

    });

}

videoPopup();





/*====================================
        CONTACT FORM VALIDATION
=====================================*/

function contactFormValidation() {

    const form = document.querySelector(".contact-form form");

    if (!form) return;

    form.addEventListener("submit", function(e){

        e.preventDefault();

        const name = form.querySelector('input[type="text"]');

        const phone = form.querySelector('input[type="tel"]');

        const email = form.querySelector('input[type="email"]');

        if(name.value.trim().length < 3){

            alert("Please enter your full name.");

            name.focus();

            return;

        }

        if(phone.value.trim().length < 10){

            alert("Please enter a valid mobile number.");

            phone.focus();

            return;

        }

        if(email.value.trim() !== "" &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){

            alert("Please enter a valid email address.");

            email.focus();

            return;

        }

        alert("Thank you! Your enquiry has been submitted.");

        form.reset();

    });

}

contactFormValidation();





/*====================================
        QUOTE FORM VALIDATION
=====================================*/

function quoteFormValidation(){

    const form = document.querySelector(".quote-form");

    if(!form) return;

    form.addEventListener("submit",function(e){

        e.preventDefault();

        const phone=form.querySelector('input[type="tel"]');

        if(phone.value.trim().length<10){

            alert("Please enter a valid mobile number.");

            phone.focus();

            return;

        }

        alert("Quotation request submitted successfully.");

        form.reset();

    });

}

quoteFormValidation();





/*====================================
        BUTTON CLICK EFFECT
=====================================*/

document.querySelectorAll(".btn-primary,.btn-secondary").forEach(button=>{

    button.addEventListener("click",function(){

        this.classList.add("loading");

        setTimeout(()=>{

            this.classList.remove("loading");

        },700);

    });

});





/*====================================
        CLOSE MOBILE MENU
=====================================*/

document.addEventListener("click",function(e){

    const nav=document.querySelector(".navbar");

    const toggle=document.querySelector(".menu-toggle");

    if(!nav || !toggle) return;

    if(!nav.contains(e.target) && !toggle.contains(e.target)){

        nav.classList.remove("active");

        toggle.classList.remove("active");

    }

});





/*====================================
        ESC KEY SUPPORT
=====================================*/

document.addEventListener("keydown",function(e){

    if(e.key==="Escape"){

        const nav=document.querySelector(".navbar");

        const toggle=document.querySelector(".menu-toggle");

        const lightbox=document.getElementById("lightbox");

        if(nav) nav.classList.remove("active");

        if(toggle) toggle.classList.remove("active");

        if(lightbox) lightbox.style.display="none";

    }

});
/*====================================
        COUNTER ON SCROLL
=====================================*/

function startCountersOnScroll() {

    const counters = document.querySelectorAll(".counter");

    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;

            const target = Number(counter.dataset.target);

            let current = 0;

            const step = Math.ceil(target / 100);

            const timer = setInterval(() => {

                current += step;

                if (current >= target) {

                    counter.textContent = target + "+";

                    clearInterval(timer);

                } else {

                    counter.textContent = current;

                }

            }, 20);

            observer.unobserve(counter);

        });

    }, {

        threshold: 0.5

    });

    counters.forEach(counter => observer.observe(counter));

}

startCountersOnScroll();





/*====================================
        CURRENT PAGE ACTIVE MENU
=====================================*/

function currentPageActive() {

    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".navbar a").forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage) {

            link.classList.add("active");

        }

    });

}

currentPageActive();





/*====================================
        IMAGE LAZY LOADING
=====================================*/

function lazyImages() {

    const images = document.querySelectorAll("img[data-src]");

    if (!images.length) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const img = entry.target;

            img.src = img.dataset.src;

            img.removeAttribute("data-src");

            observer.unobserve(img);

        });

    });

    images.forEach(img => observer.observe(img));

}

lazyImages();





/*====================================
        COPY EMAIL
=====================================*/

function copyEmail(email) {

    navigator.clipboard.writeText(email);

    alert("Email copied successfully.");

}





/*====================================
        COPY PHONE
=====================================*/

function copyPhone(number) {

    navigator.clipboard.writeText(number);

    alert("Phone number copied successfully.");

}





/*====================================
        WHATSAPP MESSAGE
=====================================*/

function openWhatsApp() {

    const message = encodeURIComponent(

        "Hello Alam Traders, I need information regarding wooden pallets."

    );

    window.open(

        "https://wa.me/919967186786?text=" + message,

        "_blank"

    );

}





/*====================================
        SCROLL PROGRESS BAR
=====================================*/

const progressBar = document.createElement("div");

progressBar.style.position = "fixed";

progressBar.style.left = "0";

progressBar.style.top = "0";

progressBar.style.width = "0";

progressBar.style.height = "4px";

progressBar.style.background = "#c62828";

progressBar.style.zIndex = "99999";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

    const scroll = window.scrollY;

    const height = document.documentElement.scrollHeight -

                   window.innerHeight;

    const progress = (scroll / height) * 100;

    progressBar.style.width = progress + "%";

});





/*====================================
        PERFORMANCE
=====================================*/

window.addEventListener("pageshow", () => {

    document.body.classList.remove("loading");

});
/*====================================
        PRELOADER
=====================================*/

function hidePreloader() {

    const loader = document.querySelector(".preloader");

    if (!loader) return;

    window.addEventListener("load", () => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

        setTimeout(() => {

            loader.remove();

        }, 500);

    });

}

hidePreloader();





/*====================================
        IMAGE ERROR FALLBACK
=====================================*/

function imageFallback() {

    document.querySelectorAll("img").forEach(image => {

        image.addEventListener("error", function () {

            this.src = "images/placeholder.webp";

        });

    });

}

imageFallback();





/*====================================
        EXTERNAL LINKS
=====================================*/

function externalLinks() {

    document.querySelectorAll('a[href^="http"]').forEach(link => {

        link.setAttribute("target", "_blank");

        link.setAttribute("rel", "noopener noreferrer");

    });

}

externalLinks();





/*====================================
        DISABLE EMPTY LINKS
=====================================*/

document.querySelectorAll('a[href="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

    });

});





/*====================================
        BUTTON RIPPLE EFFECT
=====================================*/

document.querySelectorAll(".btn-primary,.btn-secondary").forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        const rect = this.getBoundingClientRect();

        const size = Math.max(rect.width, rect.height);

        ripple.style.width = ripple.style.height = size + "px";

        ripple.style.left = (e.clientX - rect.left - size / 2) + "px";

        ripple.style.top = (e.clientY - rect.top - size / 2) + "px";

        ripple.className = "ripple";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});





/*====================================
        PAGE VISIBILITY
=====================================*/

document.addEventListener("visibilitychange", () => {

    if (document.hidden) {

        document.title = "Come Back | Alam Traders";

    } else {

        document.title = "Alam Traders Pvt. Ltd.";

    }

});





/*====================================
        DEVELOPER MESSAGE
=====================================*/

console.clear();

console.log("%cAlam Traders Pvt. Ltd.",
"color:#c62828;font-size:24px;font-weight:bold;");

console.log("%cIndustrial Packaging Solutions",
"color:#444;font-size:15px;");

console.log("%cWebsite Developed with HTML • CSS • JavaScript",
"color:#777;font-size:13px;");





/*====================================
        GLOBAL ERROR HANDLER
=====================================*/

window.addEventListener("error", function (event) {

    console.warn("Website Error :", event.message);

});





/*====================================
        UNHANDLED PROMISES
=====================================*/

window.addEventListener("unhandledrejection", function (event) {

    console.warn("Promise Error :", event.reason);

});





/*====================================
        GLOBAL UTILITIES
=====================================*/

const Utils = {

    qs(selector) {

        return document.querySelector(selector);

    },

    qsa(selector) {

        return document.querySelectorAll(selector);

    },

    scrollTop() {

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    }

};

window.Utils = Utils;





/*====================================
        WEBSITE READY
=====================================*/

window.addEventListener("load", () => {

    console.log("Website Loaded Successfully.");

});





/*====================================
        END OF FILE
=====================================*/
