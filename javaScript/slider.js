const testimonialsContainer = document.querySelector('.testimonial-container');
const cardTestimonials = document.querySelector('.card-testimonials');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentSlide = 0;
const cardWidth = cardTestimonials.offsetWidth;

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        moveSlide();
    }
}

function nextSlide() {
    if (currentSlide < cardTestimonials.children.length - 1) {
        currentSlide++;
        moveSlide();
    }
}
function moveSlide() {
    const translateX = -currentSlide * cardWidth;
    cardTestimonials.style.transform = `translateX(${translateX}px)`;
}
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
