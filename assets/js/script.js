document.addEventListener("DOMContentLoaded", () => {
    // Navbar Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });

    // Theme Switcher
    const themeToggle = document.querySelector("#theme-toggle");
    const body = document.body;
    
    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
    });
    
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
    }

    // Smooth Scrolling
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Button Hover Animation
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.addEventListener("mousemove", e => {
            let rect = button.getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;
            button.style.setProperty("--x", `${x}px`);
            button.style.setProperty("--y", `${y}px`);
        });
    });
});
