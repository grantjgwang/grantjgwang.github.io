// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function () {
        for (let i = 0; i < pages.length; i++) {
        if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
            pages[i].classList.add("active");
            navigationLinks[i].classList.add("active");
            window.scrollTo(0, 0);
        } else {
            pages[i].classList.remove("active");
            navigationLinks[i].classList.remove("active");
        }
        }
    });
}

const buttons = document.querySelectorAll("[data-nav-link");
buttons.forEach(button => {
    button.addEventListener("click", function() {
        buttons.forEach(btn => btn.classList.remove("selected"));
        this.classList.add("selected");
    });
});



const toggleButton = document.getElementById('toggle-mode');
        const body = document.body;
// Add event listener for toggle button
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    // Update button text based on current mode
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Switch to Light Mode';
    } else {
        toggleButton.textContent = 'Switch to Dark Mode';
    }
});

// Initialize with light mode
body.classList.add('light-mode');