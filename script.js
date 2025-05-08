document.addEventListener('DOMContentLoaded', function() {
    // Carousel functionality
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);
    
    // Initialize first slide
    showSlide(currentSlide);
    
    // Mobile menu toggle functionality (if needed in the future)
    // This can be uncommented and used if you add a mobile menu button
    /*
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    */
    
    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Form validation and submission logic can be added here
            alert('Thank you for your message. We will get back to you soon!');
            contactForm.reset();
        });
    }
});

// Add this to the end of your existing DOMContentLoaded event handler
// Detect when sections come into view
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.25
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});
