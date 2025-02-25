//Select element function
const selectElement = function (element) {
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');
});

// Scroll reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600
});





// Form validation for inline reservation
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('reservationForm');
    const inputs = form.querySelectorAll('input, select, textarea');

    // Form validation
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        // Reset error messages
        document.querySelectorAll('.error').forEach(error => error.style.display = 'none');

        // Validate name
        const name = document.getElementById('name').value.trim();
        if (!name) {
            document.getElementById('nameError').style.display = 'block';
            isValid = false;
        }

        // Validate email
        const email = document.getElementById('email').value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            document.getElementById('emailError').style.display = 'block';
            isValid = false;
        }

        // Validate phone (10 digits)
        const phone = document.getElementById('phone').value.trim();
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phone)) {
            document.getElementById('phoneError').style.display = 'block';
            isValid = false;
        }

        // Validate date (must be in the future)
        const date = new Date(document.getElementById('date').value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (date <= today) {
            document.getElementById('dateError').style.display = 'block';
            isValid = false;
        }

        // Validate package
        const packageSelect = document.getElementById('package').value;
        if (!packageSelect) {
            document.getElementById('packageError').style.display = 'block';
            isValid = false;
        }

        // Validate guests (minimum 1)
        const guests = document.getElementById('guests').value;
        if (guests < 1 || isNaN(guests)) {
            document.getElementById('guestsError').style.display = 'block';
            isValid = false;
        }

        if (isValid) {
            alert('Reservation submitted successfully! We will contact you soon.');
            form.reset();
        }
    });

    // Real-time input validation
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            const error = input.nextElementSibling;
            if (error && error.classList.contains('error')) {
                error.style.display = 'none';
            }
        });
    });

    // Set minimum date dynamically
    const dateInput = document.getElementById('date');
    if (dateInput) {
        dateInput.min = new Date().toISOString().split('T')[0];
    }
});

// ScrollReveal animations (update existing code in main.js)
window.sr = ScrollReveal({
    reset: false,
    distance: '25rem',
    duration: 1000,
    easing: 'cubic-bezier(.5, 0, 0, 1)'
});

sr.reveal('.animate-left', { origin: 'left', delay: 300 });
sr.reveal('.animate-right', { origin: 'right', delay: 600 });
sr.reveal('.animate-top', { origin: 'top', delay: 600 });
sr.reveal('.animate-bottom', { origin: 'bottom', delay: 600 });
// Add animation for form elements
sr.reveal('.culinary-delight .restaurant-description .form-group, .culinary-delight .restaurant-description .body-btn', { 
    origin: 'left', 
    delay: 400, 
    duration: 800 
});