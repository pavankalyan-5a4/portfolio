// Select all navigation links
const navLinks = document.querySelectorAll(".nav-link");

// Function to remove active class from all links
function removeActiveClasses() {
    navLinks.forEach(link => link.classList.remove("active"));
}

// Function to add active class to the clicked link
navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        
        // Remove active class from all links
        removeActiveClasses();

        // Add active class to the clicked link
        this.classList.add("active");

        // Get target section id from href
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        // Scroll smoothly to the target section
        targetSection.scrollIntoView({ behavior: "smooth" });

        // Highlight the target section temporarily
        targetSection.classList.add("active");
        setTimeout(() => targetSection.classList.remove("active"), 2000);
    });
});