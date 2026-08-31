/* =========================================================
   THUBA WEBSITE
   JavaScript
   ========================================================= */


/* =========================
   MOBILE MENU
   ========================= */

const menuButton = document.getElementById("menu-button");
const navLinks = document.querySelector(".nav-links");


menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("mobile-active");

});


/* Close mobile menu when a link is clicked */

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("mobile-active");

    });

});


/* =========================
   WHATSAPP ORDER
   ========================= */

/*
   IMPORTANT:
   Replace this number with the client's
   WhatsApp number.

   Format:
   Country code + number
   WITHOUT +, spaces or brackets.

   Example:
   260971234567
*/

const whatsappNumber = "260XXXXXXXXX";


function orderProduct(productName) {

    const message =
        `Hello Thuba, I am interested in the ${productName} listed on your website. Is it still available?`;

    const encodedMessage = encodeURIComponent(message);

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");

}


/* =========================
   SCROLL EFFECT
   ========================= */

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================
   SIMPLE REVEAL ANIMATION
   ========================= */

const revealElements =
    document.querySelectorAll(
        ".service-card, .product-card, .contact-card, .about-text"
    );


const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach(function (element) {

    element.classList.add("reveal");

    observer.observe(element);

});

