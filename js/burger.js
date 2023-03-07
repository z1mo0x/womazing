const burger = document.querySelector('.header__burger');
const list = document.querySelector('.header__burger-list');
const html2 = document.documentElement;
const body = document.body;
const header2 = document.querySelector('.header');

burger.addEventListener('click', () => {
    burger.classList.toggle('burger-active');
    list.classList.toggle('list-active');
    header.classList.toggle('scrolled')
    body.classList.toggle('scroll_off');
    html2.classList.toggle('scroll_off');
});