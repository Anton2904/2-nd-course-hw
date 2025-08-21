// smooth-scroll.js
function smoothScrollTo(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - 80; // 80px offset

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}


document.addEventListener('DOMContentLoaded', function() {
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            smoothScrollTo(targetId);
        });
    });
});


