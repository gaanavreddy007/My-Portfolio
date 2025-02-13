document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60,
                    behavior: "smooth"
                });
            }
        });
    });

    window.addEventListener("scroll", function () {
        let header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    const textElement = document.querySelector(".subtitle");
    if (textElement) {
        const textArray = ["Software Developer", "IoT Enthusiast", "Web Technologies Expert"];
        let index = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeEffect() {
            let currentText = textArray[index];
            if (isDeleting) {
                textElement.textContent = currentText.substring(0, charIndex--);
            } else {
                textElement.textContent = currentText.substring(0, charIndex++);
            }

            if (!isDeleting && charIndex === currentText.length + 1) {
                isDeleting = true;
                setTimeout(typeEffect, 1000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                index = (index + 1) % textArray.length;
            }

            setTimeout(typeEffect, isDeleting ? 100 : 200);
        }

        typeEffect();
    }

    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let message = document.getElementById("message").value.trim();
            let errorMessage = "";

            if (name === "" || email === "" || message === "") {
                errorMessage = "All fields are required!";
            } else if (!/^\S+@\S+\.\S+$/.test(email)) {
                errorMessage = "Enter a valid email address!";
            }

            if (errorMessage) {
                document.querySelector(".error-message").textContent = errorMessage;
                return;
            }

            document.querySelector(".success-message").textContent = "Message sent successfully!";
            form.reset();
        });
    }
});
