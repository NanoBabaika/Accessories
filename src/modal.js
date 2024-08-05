console.log('Hi from script!');


let modal = document.getElementById('modal__send');
let btn = document.getElementById('form__btn-submit');
let btnClose = document.getElementById('closeBtn');

btn.addEventListener('click', function(e){
    e.preventDefault();    
    modal.style.display = "block";

});

btnClose.addEventListener('click', function(e) {
    modal.style.display = "none";    
});

window.addEventListener('click', function(e) {
    if(e.target == modal) {
        modal.style.display = "none";    
    }
})

// Модалка на рассылку почты
const modalInfo = document.getElementById('info');
const infoBtn = document.getElementById('infoBtn'); 
const clsBtnInfo= document.getElementById('clsBtnInfo');

infoBtn.addEventListener('click', function(e) {
    e.preventDefault();

    modalInfo.style.display = "block";
}) 


clsBtnInfo.addEventListener('click', function(e) {
    modalInfo.style.display = "none";    
});

window.addEventListener('click', function(e) {
    if(e.target == modalInfo) {
        modalInfo.style.display = "none";    
    }
})