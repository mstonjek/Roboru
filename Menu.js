const iconToggle = document.querySelector("#OnClick");
const showBg2 = document.querySelector("#bg2");

iconToggle.addEventListener("click", () => {
    showBg2.classList.toggle("show");
});