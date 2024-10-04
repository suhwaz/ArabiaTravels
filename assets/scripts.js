// Initialize EmailJS with your public API key
emailjs.init("YOUR_PUBLIC_API_KEY"); // Replace with your public API key

// Function to handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Send email using EmailJS
    emailjs.send("Ib3347M_GbhwVWh7p", "template_k13gcwd", {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert("Your message has been sent successfully!"); // Alert on success
    }, function(error) {
        console.log('FAILED...', error);
        alert("There was an error sending your message. Please try again."); // Alert on failure
    });
});
