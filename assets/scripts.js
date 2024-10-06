document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_0z1klrr', 'template_k13gcwd', this)
    .then(function() {
        alert('Message sent successfully!');
    }, function(error) {
        alert('Failed to send the message. Please try again later.');
    });
});

// Scroll Animation for Tiles and Testimonials
const tiles = document.querySelectorAll('.tile');
const testimonials = document.querySelectorAll('.testimonial');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

// Observe each tile
tiles.forEach(tile => {
    observer.observe(tile);
});

// Observe each testimonial
testimonials.forEach(testimonial => {
    observer.observe(testimonial); // Add testimonials to the observer
});

// Carousel Functionality
let currentIndex = 0;
const totalTestimonials = testimonials.length;

function showTestimonials(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.transform = `translateX(${(i - index) * 100}%)`;
    });
}

function nextTestimonial() {
    currentIndex = (currentIndex + 1) % totalTestimonials;
    showTestimonials(currentIndex);
}

function prevTestimonial() {
    currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
    showTestimonials(currentIndex);
}

// Initialize the carousel
showTestimonials(currentIndex);

// Add event listeners to the buttons
document.querySelector('.next').addEventListener('click', nextTestimonial);
document.querySelector('.prev').addEventListener('click', prevTestimonial);
