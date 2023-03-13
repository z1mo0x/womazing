const buttonSize = document.querySelectorAll('.button-categories');
const buttonColor = document.querySelectorAll('.button-color');
const counter = document.querySelectorAll('input[type="number"]');
const cartButton = document.querySelector('.button-cart');


buttonSize.forEach((element) => {
    element.addEventListener('click', () => {
        let i = 0;
        for (i; i < buttonSize.length; i++) {
            buttonSize[i].classList.remove('active-categories');
        }
        element.classList.add('active-categories')
    })
})

buttonColor.forEach((element) => {
    element.addEventListener('click', () => {
        let i = 0;
        for (i; i < buttonColor.length; i++) {
            buttonColor[i].classList.remove('color-active');
        }
        element.classList.add('color-active')
    })
})

cartButton.addEventListener('click', () => {
    counter.forEach((element) => {
        if (element.value > 5) {
            element.value = element.max;
        } else if (element.value <= 0) {
            element.value = element.min;
        }
        if (element.value > element.max) {
            element.value[1] = '';
        }
    })
})

counter.forEach((element) => {
    ['keydown', 'click'].forEach((event) => {
        element.addEventListener(event, () => {
            // element.value = '';
            if (element.value > 5) {
                element.value = element.max;
            } else if (element.value <= 0) {
                element.value = element.min;
            }
            if (element.value > element.max) {
                element.value[1] = '';
            }
        })
    })
})

cartButton.addEventListener('click', () => {
    let i = 0;
    let selected = [];
    [buttonColor, buttonSize].forEach((array) => {
        array.forEach((element) => {

            if (element.classList.contains('color-active') || element.classList.contains('active-categories')) {
                selected.push(element.value);
            }
        })

    })

    console.log(JSON.stringify(selected));
})