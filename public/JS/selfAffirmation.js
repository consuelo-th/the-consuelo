'use strict';


const saveBtn = document.querySelector('.save-btn');
const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');
const displayModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden'); 
}
const hideModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
saveBtn.addEventListener('click', displayModal)

overlay.addEventListener('click', hideModal)

closeModalBtn.addEventListener ('click', hideModal)

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        hideModal();
    }
})
