var slideIndex2 = 1;
var delay2 = 5000;
var timer2 = null;
showSlides2(slideIndex2);

afterTime(delay2);

function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

function plusSlide(n) {
    showSlides2(slideIndex2 += n);
    afterTime(delay2);
}

function showSlides2(n) {
    var i;
    var slides2 = document.querySelectorAll('.mySlide-2');
    var dots2 = document.querySelectorAll('.team__dots > span');

    if (n && n > slides2.length) {
        slideIndex2 = 1;
    }
    if (n && n < 1) {
        slideIndex2 = slides2.length;
    }

    if (slideIndex2 > slides2.length) {
        slideIndex2 = 1;
    }

    if (slideIndex2 < 1) {
        slideIndex2 = slides2.length;
    }

    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = 'none';
        dots2[i].classList.remove('active_dot2');
        slides2[i].classList.remove('down');
    }


    slides2[slideIndex2 - 1].style.display = 'block';
    dots2[slideIndex2 - 1].classList.add('active_dot2');
    slides2[slideIndex2 - 1].classList.add('down');
    afterTime(delay2);
}

function afterTime(delay) {
    clearInterval(timer2);
    timer2 = setInterval(() => {
        slideIndex2++;
        showSlides2();
    }, delay)
}
