'use strict';

const btn = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const toggleModal = ()=>{
    modal.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
}

btn.forEach(e=>e.addEventListener('click',toggleModal))

closeModalBtn.addEventListener('click',toggleModal)

overlay.addEventListener('click',toggleModal)

document.addEventListener('keydown',(e)=>{
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        toggleModal()
    }
})


