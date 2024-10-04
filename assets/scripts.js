document.querySelectorAll('.expand-button').forEach(button => {
    button.addEventListener('click', () => {
        const details = button.nextElementSibling;
        if (details.style.display === 'block') {
            details.style.display = 'none';
        } else {
            details.style.display = 'block';
        }
    });
});
