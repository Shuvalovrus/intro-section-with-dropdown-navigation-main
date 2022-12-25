const menuButton = document.querySelector('.icon-controls');
const menu = document.querySelector('.header__controls');
const menuItem = document.querySelectorAll('.navbar__dropdowns');
const lockLayer = document.querySelector('.lock-layer');

menuItem.forEach((item) => {
    item.addEventListener('click', (e) => {
        item.classList.toggle('navbar__dropdowns_active');
        e.target.preventDefault;
    })
})

menuButton.addEventListener('click', (event) => {
    menuButton.classList.toggle('icon-controls_active');
    menu.classList.toggle('header__controls_active');
    lockLayer.classList.toggle('lock-layer_active')
    document.body.classList.toggle('_lock');
})