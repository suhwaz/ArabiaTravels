// Simple expand and collapse for packages
document.querySelectorAll('.expand').forEach(button => {
    button.addEventListener('click', function() {
        const packageTile = this.closest('.package-tile');
        const expandedContent = document.createElement('div');
        expandedContent.innerHTML = `<p>Details about this package...</p><button>Book Now</button>`;
        packageTile.appendChild(expandedContent);
        this.style.display = 'none'; // Hide "More Info" button after click
    });
});
