// EmailJS Contact Form
(function() {
    emailjs.init("Ib3347M_GbhwVWh7p");  // Replace with your EmailJS user ID
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_0z1klrr', 'template_kyql5f3', this)
        .then(function() {
            document.getElementById('response-message').style.display = 'block';
        }, function(error) {
            console.log('FAILED...', error);
        });
});

// Testimonial Carousel
let testimonialIndex = 0;
showTestimonialSlides();

function showTestimonialSlides() {
    let slides = document.getElementsByClassName("testimonial-slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    testimonialIndex++;
    if (testimonialIndex > slides.length) {testimonialIndex = 1}    
    slides[testimonialIndex - 1].style.display = "block";  
    setTimeout(showTestimonialSlides, 2500);  // Slide every 2.5 seconds
}

// Carousel Arrows
document.querySelector('.prev').addEventListener('click', function() {
    testimonialIndex = (testimonialIndex - 1 + slides.length) % slides.length;
    showTestimonialSlides();
});

document.querySelector('.next').addEventListener('click', function() {
    testimonialIndex = (testimonialIndex + 1) % slides.length;
    showTestimonialSlides();
});

// Image Carousel for Hero Section
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("hero-image");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 4000);  // Change image every 4 seconds
}
