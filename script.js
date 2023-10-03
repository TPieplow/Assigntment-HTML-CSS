// Är medveten om att den inte ser ut precis som den skulle göra enligt mock-up men
// jag valde att få den att fungera istället för att ha med ...9
// Det ligger kod längre ner som är bortkommenterad som får det att se ut precis som designfilen
// Men då fungerar inte koden korrekt. 

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
    
    // if (currentSlide !== 6) {
    //     slidesHTML += `<div class="slide">${maxSlide}</div>`;
    // }
    
    slider.innerHTML = slidesHTML;
}

updateSlider();




