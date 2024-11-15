// Smooth Scroll
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission with Validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const statusMessage = document.getElementById('status-message');

    if (name && email && message) {
        statusMessage.textContent = 'Thank you for your message!';
        statusMessage.style.color = 'green';
        this.reset();
    } else {
        statusMessage.textContent = 'Please fill out all fields.';
        statusMessage.style.color = 'red';
    }
});
