const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
navLinks.classList.toggle("active");
});


/* Close mobile menu after clicking a navigation link */

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach((link) => {
link.addEventListener("click", () => {
    navLinks.classList.remove("active");
});
});


/* Contact form */

const contactForm = document.querySelector("#contactForm");

contactForm.addEventListener("submit", (event) => {
event.preventDefault();

const name = document.querySelector("#name").value.trim();
const email = document.querySelector("#email").value.trim();
const message = document.querySelector("#message").value.trim();

if (name === "" || email === "" || message === "") {
    alert("Please fill in all the fields.");
    return;
}

alert(`Thank you, ${name}! Your message has been received.`);

contactForm.reset();
});