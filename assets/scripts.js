// Toggle visibility of package details
function toggleDetails(packageId) {
    const details = document.getElementById(packageId);
    if (details.style.display === "block") {
        details.style.display = "none";
    } else {
        details.style.display = "block";
    }
}
