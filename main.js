const openMenu = document.querySelector('.menu-1');
const navContainer = document.querySelector('.nav-container');
const closeMenu = document.querySelector('.close-menu');



openMenu.addEventListener('click', () => {
   navContainer.style.right = "0";
});



closeMenu.addEventListener('click', () => {
    navContainer.style.right = '-250px';
})



