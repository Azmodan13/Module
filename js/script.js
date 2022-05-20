window.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger'); 
        nav = document.querySelector('.nav');
        item = document.querySelector('.nav__link');
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        nav.classList.toggle('active');
    });
    item.addEventListener('click', () => {
        burger.classList.remove('active');
        nav.classList.remove('active');
    });
});