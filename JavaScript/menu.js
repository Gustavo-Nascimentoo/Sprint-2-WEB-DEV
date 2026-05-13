alert (`Bem vindo ao site, tenha uma boa estadia.`);

const slides = document.querySelectorAll('.slide');
let atual = 0;

function mostrarSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

document.getElementById('proximo').addEventListener('click', () => {
    atual = (atual + 1) % slides.length;
    mostrarSlide(atual);
});

document.getElementById('anterior').addEventListener('click', () => {
    atual = (atual - 1 + slides.length) % slides.length;
    mostrarSlide(atual);
});