// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Basic hover effect (Pro version has animations)
document.querySelector('.project-card').addEventListener('mouseenter', function() {
    this.style.opacity = '1';
});

document.querySelector('.project-card').addEventListener('mouseleave', function() {
    this.style.opacity = '0.7';
});

// Console message
console.log('Like this free version? Check out the Pro template: https://kaivixv.gumroad.com/l/Cyberwave');