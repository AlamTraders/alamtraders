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
