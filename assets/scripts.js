// Smooth scroll to sections
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// EmailJS form submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    emailjs.sendForm('service_0z1klrr', 'template_k13gcwd', this)
        .then(function () {
            alert('Message sent successfully!');
        }, function (error) {
            alert('Failed to send message. Please try again.');
        });
});

// Testimonial Animation
let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial-item');
setInterval(() => {
    testimonials.forEach((testimonial, index) => {
        testimonial.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
    });
    currentIndex = (currentIndex + 1) % testimonials.length;
}, 5000);
