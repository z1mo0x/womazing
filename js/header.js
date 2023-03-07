const header = document.querySelector('header');
const html = document.documentElement;

["DOMContentLoaded", 'scroll'].forEach((event) => {
    window.addEventListener(event, () => {
        if (scrollY >= 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
})

