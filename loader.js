// Show loader, then hide after site loads
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");

    // Small delay for effect
    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.transition = "opacity 0.5s ease";
        setTimeout(() => {
            loader.style.display = "none";
            content.style.display = "block";
        }, 500);
    }, 1500); // loader duration before fade
});
