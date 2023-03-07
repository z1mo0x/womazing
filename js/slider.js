var slideIndex = 1;
var timer = null;
var title = document.querySelector('.hero__title');
var description = document.querySelector('.hero__descr');
var delay = 5000;
var fadeDelete = null;
const titles = [
    'Новые поступления в этом сезоне',
    'Что-то новенькое. Мы заждались тебя.',
    'Включай новый сезон с WOMAZING',
]
const phrases = [
    'Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.',
    'Мы обновили ассортимент - легендарные коллекции и новинки от отечественных дизайнеров',
    'Надоело искать себя в сером городе? Настало время новых идей, свежих красок и вдохновения с Womazing!'
]
showSlides(slideIndex);

afterTime2(delay);

function currentSlide(n) {
    showSlides(slideIndex = n);
}



function showSlides(n) {
    var i;
    var slides = document.querySelectorAll('.mySlide');
    var dots = document.querySelectorAll('.hero__dots > span');

    if (n && n > slides.length) {
        slideIndex = 1;
    }
    if (n && n < 1) {
        slideIndex = slides.length;
    }

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    if (slideIndex < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        dots[i].classList.remove('active_dot');
        slides[i].classList.remove('slide');
        setTimeout(() => {
            description.classList.add('fade');
            title.classList.add('fade');
        },)
    }

    fadeDelete = setInterval(() => {
        title.classList.forEach((element) => {
            if (element == 'fade') {
                description.classList.remove('fade');
                title.classList.remove('fade');
            }
        })
    }, delay - 1000);

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active_dot');
    slides[slideIndex - 1].classList.add('slide');
    title.textContent = titles[slideIndex - 1];
    description.textContent = phrases[slideIndex - 1];
    dots.forEach((element) => {
        element.addEventListener('click', () => {
            description.classList.remove('fade');
            clearInterval(fadeDelete);
            title.classList.remove('fade');
        })
    })
    clearInterval(fadeDelete);
    afterTime2(delay);
}

function afterTime2(delay) {
    clearInterval(timer);
    timer = setInterval(() => {
        title.classList.forEach((element) => {
            if (element == 'fade') {
                description.classList.remove('fade');
                title.classList.remove('fade');
            }
        })
        // console.log(Object.entries(title.classList).forEach((e) => {
        //     console.log(e);
        // }));
        slideIndex++;
        showSlides();
    }, delay)
}
