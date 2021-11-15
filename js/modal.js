let modal = document.querySelector('.modal');
let openModal = document.querySelectorAll('.open-modal');
let closeModal = document.querySelectorAll('.modal-close');
let modalNext = document.querySelector('.modal-next');
let modalContent = document.querySelector('.modal-content');
let  modalContentTwo = document.querySelector('.modal-content-two');
console.log(modal,openModal);




for(let i = 0; i< openModal.length; i++) {
    openModal[i].addEventListener('click', ()=> {
        modal.classList.toggle('modal-activ');
    });
}
for(let i = 0; i < closeModal.length; i++) {
    closeModal[i].addEventListener('click', ()=> {
        modal.classList.toggle('modal-activ');
    });
}
modalNext.addEventListener('click', ()=> {
    modalContent.style.display = 'none';
    modalContentTwo.style.display = 'flex';
});