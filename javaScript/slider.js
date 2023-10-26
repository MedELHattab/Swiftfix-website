const testimonialsContainer = document.querySelector('.card-testimonials');
const cardTestimonials = document.querySelectorAll('.testimonial-left');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentSlide = 0;
const cardWidth = cardTestimonials[0].clientWidth;

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        moveSlide();
    }
}

function nextSlide() {
    if (currentSlide < cardTestimonials.length - 1) {
        currentSlide++;
        moveSlide();
    }
}
function moveSlide() {
    if(currentSlide === cardTestimonials.length){
        currentSlide = 0;
    }
    const translateX = -currentSlide * cardWidth;
    testimonialsContainer.style.transform = `translateX(${translateX}px)`;
}
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
