document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('Ib3347M_GbhwVWh7p', 'template_k13gcwd', this)
        .then(function() {
            alert('Your inquiry has been sent successfully!');
        }, function(error) {
            alert('Failed to send your inquiry. Please try again later.');
        });
});