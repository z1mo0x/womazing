const overlay = document.querySelectorAll('.overlay');
const popup = document.querySelectorAll('.popup');
const popupClose = document.querySelectorAll('.popup__close');
const popupCall = document.getElementById('#call').querySelector('.popup');
const popupThx = document.getElementById('#thanks').querySelector('.popup');
var nameInp = document.getElementById('name');
var emailInp = document.getElementById('email');
var telephoneInp = document.getElementById('telephone');
var nameError = document.getElementById('nameError');
var emailError = document.getElementById('emailError');
var telephoneError = document.getElementById('telephoneError');
const overlayCall = document.getElementById('#call');
const overlayThx = document.getElementById('#thanks');
const buttonPhone = document.querySelector('.header__phone > a');
const buttonCall = document.getElementById('#call').querySelector('.popup__button');
const buttonThx = document.getElementById('#thanks').querySelector('.popup__button');
buttonPhone.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    overlayCall.style.opacity = '1';
    overlayCall.style.pointerEvents = 'all';
    popupCall.style.transform = 'translate(-50%, -50%) scale(1)';
    document.documentElement.classList.toggle('scroll_off');
});

popup.forEach((pop) => {
    pop.addEventListener('click', (e) => {
        e.stopPropagation();
    })
})

popupClose.forEach((element) => {
    element.addEventListener('click', (e) => {
        overlayThx.style.opacity = '0';
        overlayThx.style.pointerEvents = 'none';
        popupThx.style.transform = 'translate(-50%, -50%) scale(0)';
        overlayCall.style.opacity = '0';
        overlayCall.style.pointerEvents = 'none';
        popupCall.style.transform = 'translate(-50%, -50%) scale(0)';
        document.documentElement.classList.toggle('scroll_off');
    });
});

buttonThx.addEventListener('click', (e) => {
    overlayThx.style.opacity = '0';
    overlayThx.style.pointerEvents = 'none';
    popupThx.style.transform = 'translate(-50%, -50%) scale(0)';
    overlayCall.style.opacity = '0';
    overlayCall.style.pointerEvents = 'none';
    popupCall.style.transform = 'translate(-50%, -50%) scale(0)';
    document.documentElement.classList.toggle('scroll_off');
});

overlay.forEach((over) => {
    over.addEventListener('click', (e) => {
        e.stopPropagation();
        overlayThx.style.opacity = '0';
        overlayThx.style.pointerEvents = 'none';
        popupThx.style.transform = 'translate(-50%, -50%) scale(0)';
        overlayCall.style.opacity = '0';
        overlayCall.style.pointerEvents = 'none';
        popupCall.style.transform = 'translate(-50%, -50%) scale(0)';
        document.documentElement.classList.toggle('scroll_off');
    });
});

buttonCall.addEventListener('click', function () {
    if (nameInp.value != "") {
        nameError.textContent = '';
        if (emailInp.value != "") {
            emailError.textContent = '';
            if (telephoneInp.value != "") {
                telephoneError.textContent = '';
                popupCall.style.transform = 'translate(-50%, -50%) scale(0)';
                overlayThx.style.opacity = '1';
                overlayThx.style.pointerEvents = 'all';
                popupThx.style.transform = 'translate(-50%, -50%) scale(1)';
                document.documentElement.classList.toggle('scroll_off');
            } else { telephoneError.textContent = 'Заполните поле Телефон!'; }
        } else { emailError.textContent = 'Заполните поле E-mail!'; }
    } else { nameError.textContent = 'Заполните поле Имя!'; }
});
