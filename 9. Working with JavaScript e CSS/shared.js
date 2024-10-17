

var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal__action--negative');
var selectPlanButtons = document.querySelectorAll('.plan button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');


console.dir(selectPlanButtons);

for (i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function () {
        // backdrop.style.display = 'block';
        // modal.style.display = 'block';
        // modal.className = 'open';

        modal.classList.add('open');
        backdrop.classList.add('open');
    });
}

backdrop.addEventListener('click', function () {
    mobileNav.classList.remove('open');
    closeModal();
});
modalNoButton.addEventListener('click', closeModal);
toggleButton.addEventListener('click', openSideBar);

// function modalView() {
//     backdrop.style.display = 'block';
//     modal.style.display = 'block';
// }

function closeModal() {
    // backdrop.style.display = 'none';
    // modal.style.display = 'none';
    modal.classList.remove('open');
    backdrop.classList.remove('open');
}

function openSideBar() {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
}