// This is where you can add any interactive JavaScript you might need.
document.querySelectorAll('.expand-btn').forEach(button => {
    button.addEventListener('click', function() {
        const tile = this.parentElement;
        tile.classList.toggle('expanded');
        if (tile.classList.contains('expanded')) {
            tile.querySelector('p').innerText += ' - Detailed information goes here.';
        } else {
            tile.querySelector('p').innerText = tile.querySelector('p').innerText.split(' - ')[0];
        }
    });
});
