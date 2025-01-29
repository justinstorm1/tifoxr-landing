const copyright = document.getElementById('copyright');
const date = new Date();
const year = date.getFullYear();
copyright.innerHTML = `Website Designed by Justin Storm<br>Copy &copy; All Rights Reserved<br>TifoXR - ${year}`;

const form = document.getElementById('contact-form');
form.addEventListener('submit', e => {
    e.preventDefault();

    fetch(form.action, {
        method: "POST",
        body: new FormData(document.getElementById("contact-form")),
    })
    .then(response => response.json());

    const formHeader = document.getElementById('form-header');
    formHeader.style.fontSize = '30px';
    formHeader.innerHTML = 'Thank you for your submission!';

    const inputs = document.querySelectorAll('.container.form form .row input, .container.form form .row textarea');
    inputs.forEach(input => {
        input.disabled = true;
    });

    const formButton = document.getElementById('form-button');
    formButton.style.display = 'none';
});