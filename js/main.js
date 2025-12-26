// main.js update

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

// Toggle Mobile Menu
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Select both the old contact form and the new booking form
const contactForm = document.querySelector("#contact-form");
const bookingForm = document.querySelector("#booking-form");

// Handling the Booking Form
if(bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        // Example of capturing the dropdown value
        const selectedProgram = document.querySelector("#program-select").value;
        
        alert(`Success! You have requested the ${selectedProgram} package. Our team will contact you within 12 hours.`);
        bookingForm.reset();
    });
}

// Keeping the general contact form logic for the home page
if(contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you! Your message has been sent.");
        contactForm.reset();
    });
}

// Simple Reveal Effect for Tutors
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.tutor-card').forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.6s ease-out";
    observer.observe(card);
});