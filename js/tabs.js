const buttonsShop = document.querySelectorAll('.shop__button');
const cards = document.querySelectorAll('.shop__card')
const cardsTitle = document.querySelectorAll('.card__title')
const counters = document.querySelectorAll('.shop__value');
const notFound = document.querySelector('.shop__notfound');
const cardsImage = document.querySelectorAll('.card__image');

buttonsShop.forEach((element, index) => {
    element.addEventListener('click', (e) => {
        let i = 0;
        for (i; i < buttonsShop.length; i++) {
            buttonsShop[i].classList.remove('active-categories');
        }
        buttonsShop[index].classList.add('active-categories');

    })
})



buttonsShop.forEach((e) => {
    e.addEventListener('click', () => {
        let i = 0;
        let cardsCount = cards.length;
        for (i; i < cards.length; i++) {
            let firstWord = cardsTitle[i].textContent.split(' ')[0];
            if (firstWord.slice(0, 5) != e.textContent.slice(0, 5)) {
                cardsCount -= 1;
                cards[i].style.display = 'none';
                notFound.classList.add('hidden');
            } else {
                cards[i].style.display = 'flex';
                notFound.classList.add('hidden');
            }
            if (cardsCount == 0) {
                notFound.classList.remove('hidden');
            }

            if (e.textContent == 'Все') {
                cards[i].style.display = 'flex';
                cardsCount = cards.length;
            }
            counters.forEach((counter) => {
                counter.textContent = cardsCount;
            })
        }
    })
})

cardsImage.forEach((element) => {
    element.addEventListener('click', () => {
        location.href = 'one_item.html'
    })
})