// Smooth Scrolling Effect
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Project Hover Animation
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('mouseenter', () => {
        project.style.transform = 'scale(1.05)';
        project.style.transition = 'transform 0.3s ease-in-out';
    });
    project.addEventListener('mouseleave', () => {
        project.style.transform = 'scale(1)';
    });
});

// Contact Form Validation (Optional)
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('Please fill out all fields.');
            } else {
                alert('Message sent successfully!');
                contactForm.reset();
            }
        });
    }
});
