// Function to toggle package tile details
function toggleDetails(tile) {
    tile.classList.toggle('expanded');
    const description = tile.querySelector('p');
    if (description.style.display === "block") {
        description.style.display = "none";
    } else {
        description.style.display = "block";
    }
}

// EmailJS integration
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Send email
    emailjs.sendForm('service_0z1klrr', 'template_k13gcwd', this)
        .then(function () {
            alert('Message sent successfully!');
        }, function (error) {
            alert('Failed to send message: ' + JSON.stringify(error));
        });
});

// Initialize EmailJS
(function () {
    emailjs.init('Ib3347M_GbhwVWh7p'); // Replace with your EmailJS public API key
})();
