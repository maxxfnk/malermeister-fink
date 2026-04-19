console.log("JS funktioniert");

const toggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");});

    document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
    const trigger = window.innerHeight * 0.85;

    cards.forEach(card => {
         const top = card.getBoundingClientRect().top;

         if(top < trigger){
            card.classList.add("show");
         }
    });
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const top = section.offsetTop;
        if (scrollY >= top - 100) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm('service_imog2la', 'template_ycjgsqb', this)
        .then(() => {
            form.innerHTML = "<p style='color:green;'>Nachricht erfolgreich gesendet!</p>";
            form.reset();
        }, () => {
            form.innerHTML = "<p style='color:red;'>Fehler beim Senden. Bitte erneut versuchen.</p>";
        });
});