'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const showModal = function (){
    console.log("btn clicked");
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

for(let i = 0 ; i<btnsOpenModal.length;i++){
  btnsOpenModal[i].addEventListener('click',showModal);
};

const hideModal =function (){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click', hideModal);
overlay.addEventListener('click', hideModal);

document.addEventListener('keydown',function (e){
    if(e.key === 'Escape'){
        if(!modal.classList.contains('hidden'))
            hideModal();
    }
})