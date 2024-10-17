

var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
//console.dir(backdrop);

//backdrop.style.display = 'block';

var selectPlanButton = document.querySelectorAll('.plan button');
console.dir(selectPlanButton);

for (i = 0; i < selectPlanButton.length; i++) {
    selectPlanButton[i].addEventListener('click', function () {
        backdrop.style.display = 'block';
        modal.style.display = 'block';
    });
}



// function modalView() {
//     backdrop.style.display = 'block';
//     modal.style.display = 'block';
// }