const mobileMenuBtn = document.querySelector('#mobile-menu-btn');
const mobileMenu = document.querySelector('#modal-mobile-menu');
const modalCloseBtn = document.querySelector('#modal-mobile-close-btn');

mobileMenuBtn.addEventListener('click', (event) => {
    event.preventDefault();
    mobileMenu.classList.add("visible");
})

modalCloseBtn.addEventListener('click', (event) => {
    event.preventDefault();
    mobileMenu.classList.remove("visible");
})