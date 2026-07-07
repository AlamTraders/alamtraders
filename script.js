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
