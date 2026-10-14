
/* =========================
   1. LIGHT AND DARK MODE
   ========================= */

const themeButton = document.getElementById("themeToggle");

if (themeButton) {
    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        // Change the button text
        if (document.body.classList.contains("dark-mode")) {
            themeButton.textContent = "Light Mode";
        } else {
            themeButton.textContent = "Dark Mode";
        }
    });
}


/* =========================
   2. DROPDOWN NAVIGATION
   ========================= */

const menuButton = document.getElementById("menuToggle");
const navigation = document.getElementById("navLinks");

if (menuButton && navLinks) {
    menuButton.addEventListener("click", function () {
        navigation.classList.toggle("show");

        // Update the accessibility state
        const isOpen = navLinks.classList.contains("show");
        menuButton.setAttribute("aria-expanded", isOpen);
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            navigation.classList.remove("show");
            menuButton.setAttribute("aria-expanded", "false");
        }
    });
}

/* =========================
   3. SKILLS PAGE
   ========================= */

const skillButtons = document.querySelectorAll(".skill-toggle");

skillButtons.forEach(function (button) {
    button.addEventListener("click", function () {

        // Find the list immediately after the button
        const skillDetails = button.nextElementSibling;

        if (skillDetails) {
            // Show or hide the list
            skillDetails.hidden = !skillDetails.hidden;

            // Update the button's accessibility state
            button.setAttribute(
                "aria-expanded",
                !skillDetails.hidden
            );
        }
    });
});


/* =========================
   5. CONTACT PAGE
   Validate required fields
   ========================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        if (!contactForm.checkValidity()) {
            event.preventDefault();
            contactForm.reportValidity();
        } else {
            // This demo does not send the message.
            event.preventDefault();
            alert("Your form is complete! ");
        }
    });
}
