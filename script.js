const slider = document.querySelector('.gallery-slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;

nextBtn.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateSlider();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

function updateSlider() {
    const translateX = -currentIndex * 100;
    slider.style.transform = `translateX(${translateX}%)`;
}

const tesslider = document.querySelector('.testimonial-slider');
const cards = document.querySelectorAll('.testimonial-card');
const tesprevBtn = document.getElementById('tesprev-btn');
const tesnextBtn = document.getElementById('tesnext-btn');

let tescurrentIndex = 0;

tesnextBtn.addEventListener('click', () => {
    if (tescurrentIndex < cards.length - 1) {
        tescurrentIndex++;
        updateSlider();
    }
});

tesprevBtn.addEventListener('click', () => {
    if (tescurrentIndex > 0) {
        tescurrentIndex--;
        updateSlider();
    }
});

function updateSlider() {
    const translateX = -tescurrentIndex * 100;
    tesslider.style.transform = `translateX(${translateX}%)`;
}
