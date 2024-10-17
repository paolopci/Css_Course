

var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal__action--negative');
var selectPlanButtons = document.querySelectorAll('.plan button');


console.dir(selectPlanButtons);

for (i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function () {
        backdrop.style.display = 'block';
        modal.style.display = 'block';
    });
}

backdrop.addEventListener('click', closeModal);
modalNoButton.addEventListener('click', closeModal);

// function modalView() {
//     backdrop.style.display = 'block';
//     modal.style.display = 'block';
// }

function closeModal() {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
}