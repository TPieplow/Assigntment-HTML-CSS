const slider = document.getElementById('slider');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const maxSlide = 9;
let currentSlide = 1;

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

function updateSlider() {
    slider.innerHTML = '';
    let slidesHTML = '';
    
    const numVisibleSlides = 4;
    
    let startSlide = currentSlide;
    let endSlide = currentSlide + numVisibleSlides - 1;
    
    if (endSlide > maxSlide) {
        endSlide = maxSlide;
        startSlide = endSlide - numVisibleSlides + 1;
    }
    
    for (let i = startSlide; i <= endSlide; i++) {
        slidesHTML += `<div class="slide ${i === currentSlide ? 'current' : ''}">${i}</div>`;
    }
    
    //Får inte riktigt rätt på den här delen
    //Lägg till "..." före nummer 6 om det finns fler tal efter det
    // if (currentSlide <= 6) {
    //     slidesHTML += `<div class="slide">...</div>`;
    // }
    
    // Lägg till 9 som sista sida om det inte är tal 6 och inte om det är sista sidan
    // if (currentSlide !== 6) {
    //     slidesHTML += `<div class="slide">${maxSlide}</div>`;
    // }
    
    slider.innerHTML = slidesHTML;
}

updateSlider();




