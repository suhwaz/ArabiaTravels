document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const serviceID = 'service_0z1klrr';
    const templateID = 'template_k13gcwd';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert('Message sent successfully!');
            this.reset();
        }, (err) => {
            alert('Failed to send message: ' + JSON.stringify(err));
        });
});