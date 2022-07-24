const openMenu = document.querySelector('.menu-1');
const navContainer = document.querySelector('.nav-container');
const closeMenu = document.querySelector('.close-menu');
const mainSection = document.querySelector('.container');
const headerSection = document.querySelector('.navigation');



openMenu.addEventListener('click', () => {
   navContainer.style.right = "0";
});



closeMenu.addEventListener('click', () => {
    navContainer.style.right = '-250px';
})



