const navbar = document.querySelector(".nav");

window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 20) {
        navbar.classList.add("sticky");
    }
    else {
        navbar.classList.remove("sticky");
    }
})