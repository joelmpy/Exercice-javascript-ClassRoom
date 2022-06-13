const menuHaumburger = document.querySelector('.menu-hamburger');
const navLinks = document.querySelector('.nav-links')

menuHaumburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu')
})