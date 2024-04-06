"use strict";

//FORM VALIDATION

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        let errors = false;
        const nameInput = document.getElementById('fname');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const phoneInput = document.getElementById('phone');

        // Name validation
        if (nameInput.value.trim() === '') {
            document.getElementById('nameError').textContent = 'Name is required';
            errors = true;
        } else {
            document.getElementById('nameError').textContent = '';
        }

        // Email validation
        if (emailInput.value.trim() === '') {
            document.getElementById('emailError').textContent = 'Email is required';
            errors = true;
        } else {
            document.getElementById('emailError').textContent = '';
        }

        // Message validation
        if (messageInput.value.trim() === '') {
            document.getElementById('messageError').textContent = 'Message is required';
            errors = true;
        } else {
            document.getElementById('messageError').textContent = '';
        }

        // Phone validation if checkbox is checked
        if (document.getElementById('contactPhone').checked && phoneInput.value.trim() === '') {
            document.getElementById('phoneError').textContent = 'Phone is required';
            errors = true;
        } else {
            document.getElementById('phoneError').textContent = '';
        }

        if (errors) {
            event.preventDefault(); // Prevent form submission if there are errors
        } else {
            // If no errors, show success prompt
            alert('Submission successful!');
        }
    });
});
