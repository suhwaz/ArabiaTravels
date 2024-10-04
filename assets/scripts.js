// Toggle package details on click
const packageTiles = document.querySelectorAll('.package-tile');

packageTiles.forEach(tile => {
    tile.addEventListener('click', () => {
        tile.classList.toggle('active');
    });
});
