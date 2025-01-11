const navbar = document.querySelector(".nav");

window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 20) {
        navbar.classList.add("sticky");
    }
    else {
        navbar.classList.remove("sticky");
    }
})

// SLIDE SHOW
const slideIndex = {
    c0: 1,
    c1: 1,
    c2: 1,
    c3: 1,
};
showSlide(slideIndex, "c0", "dot-c0");

// let slideIndexC1 = 2;
// showSlide(slideIndexC1, "c1", "dot-c1");

// let slideIndexC2 = 3;
// showSlide(slideIndexC2, "c2", "dot-c2");

// let slideIndexC3 = 4;
// showSlide(slideIndexC3, "c3", "dot-c3");

// Next/previous controls
function plusSlide(n, carousel, dot) {
    showSlide(slideIndex[carousel] += n, carousel, dot);
}

// Thumbnail image controls
function currentSlide(n, carousel, dot) {
    showSlide(slideIndex[carousel] = n, carousel, dot);
}

function showSlide(n, carousel, dot) {
    let i;
    let slides = document.getElementsByClassName(carousel);
    let dots = document.getElementsByClassName(dot);
    slideIndex[carousel]

    if (n > slides.length) {
        slideIndex[carousel] = 1;
    }
    if (n < 1) {
        slideIndex[carousel] = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex[carousel] - 1].style.display = "block";
    dots[slideIndex[carousel] - 1].className += " active";
    console.log(slideIndex[carousel]);
}