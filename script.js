const slider = document.getElementById('slider');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const maxSlide = 9;
let currentSlide = 1;

const numVisibleSlides = 3;

next.addEventListener('click', () => {
    if (currentSlide < maxSlide) {
        currentSlide++;
        updateSlider();
    }
});

prev.addEventListener('click', () => {
    if (currentSlide > 1) {
        currentSlide--;
        updateSlider();
    }
});

// Funktion innehållande logik till karusell.
function updateSlider() {
    slider.innerHTML = '';
    let slidesHTML = '';

    // Lägger '...' före talen om currentSlide är större eller lika med två, men såg inte snyggt ut. 
    // if (currentSlide >= 2) {
    //     slidesHTML += `<div class="slide">...</div>`;
    // }

    // Räknar ut hur många tal som ska visas, max 5 och minst 3 om vi är nära slutet
    const numTalToShow = Math.min(maxSlide - currentSlide + 1, 3);
    

    // Lägg till talen i slider
    for (let i = currentSlide; i <= currentSlide + numTalToShow - 1; i++) {
        slidesHTML += `<div class="slide ${i === currentSlide ? 'current' : ''}">${i}</div>`;
    }

    // Lägg till "..." före nummer 6 om det finns fler tal efter det
    if (currentSlide <= 6) {
        slidesHTML += `<div class="slide">...</div>`;
    }

    // Lägg till 9 som sista sida om det inte är tal 6 och inte om det är sista sidan
    // Får inte riktigt rätt på den här delen
    // if (currentSlide !== 6) {
    //     slidesHTML += `<div class="slide">${maxSlide}</div>`;
    // }

    slider.innerHTML = slidesHTML;
}

updateSlider();