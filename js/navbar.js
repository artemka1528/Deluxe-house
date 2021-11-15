let gamburger = document.querySelector('.gamburger'),
    menu = document.querySelector('.menu');

gamburger.addEventListener('click',()=> {
    menu.classList.toggle('activ-menu');
});