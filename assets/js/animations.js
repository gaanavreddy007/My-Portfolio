
const sections = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));


const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.classList.add('hover-effect');
    });
    button.addEventListener('mouseleave', () => {
        button.classList.remove('hover-effect');
    });
});


const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.classList.add('neon-glow');
    });
    link.addEventListener('mouseleave', () => {
        link.classList.remove('neon-glow');
    });
});


document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.querySelectorAll(".fade-load").forEach(el => {
            el.classList.add("show");
        });
    }, 300);
});
