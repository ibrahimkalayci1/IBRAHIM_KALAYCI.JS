export function setGlobalClickEvents() {
    document.addEventListener("click", (event) => {
        if (event.target.matches(".carousel-item img")) {
            window.open(event.target.dataset.url, "_blank");
        }
    });
}
