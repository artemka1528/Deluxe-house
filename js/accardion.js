let accardionTitle = document.querySelectorAll('.accardion__title'),
accardionContent = document.querySelectorAll('.accardion-content');


for(let i = 0; i<accardionTitle.length; i++) {
    accardionTitle[i].addEventListener('click', ()=> {
        accardionContent[i].classList.toggle('activ-content');
        accardionTitle[i].classList.toggle('accardion__title-activ');
    });
}
