AOS.init({
    duration: 1000, // duração da animação em milissegundos
    easing: 'ease-in-out', // tipo de easing
    once: true, // se a animação deve acontecer apenas uma vez
});

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu a'); 



hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('show');
    });
});