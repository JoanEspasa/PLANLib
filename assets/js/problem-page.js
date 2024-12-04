document.addEventListener("DOMContentLoaded", () => {
    const variations = document.querySelectorAll(".list-group");
    const prevButton = document.getElementById("prev-variation");
    const nextButton = document.getElementById("next-variation");

    let currentIndex = 0;
    const updateVariations = () => {
        variations.forEach((variation, index) => {
            variation.style.display = index === currentIndex ? "block" : "none";
        });
    };
    prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateVariations();
        }
    });
    nextButton.addEventListener("click", () => {
        if (currentIndex < variations.length - 1) {
            currentIndex++;
            updateVariations();
        }
    });

    updateVariations();
});
