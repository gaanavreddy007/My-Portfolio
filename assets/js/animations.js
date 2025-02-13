document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    document.querySelectorAll("a, button").forEach((element) => {
        element.addEventListener("mouseenter", () => cursor.classList.add("cursor-hover"));
        element.addEventListener("mouseleave", () => cursor.classList.remove("cursor-hover"));
    });

    particlesJS("particles-js", {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#00ff99" },
            shape: { type: "circle" },
            opacity: { value: 0.7, random: true },
            size: { value: 4, random: true },
            line_linked: { enable: true, distance: 150, color: "#00ff99", opacity: 0.5, width: 1 },
            move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out" }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "grab" },
                onclick: { enable: true, mode: "push" }
            },
            modes: {
                grab: { distance: 140, line_linked: { opacity: 1 } },
                push: { particles_nb: 4 }
            }
        },
        retina_detect: true
    });
});
