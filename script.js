// Smooth scroll effect (optional enhancement)
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Only prevent default if internal link
        if (this.getAttribute("href").startsWith("#")) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href"))
                .scrollIntoView({
                    behavior: 'smooth'
                });
        }
    });
});
