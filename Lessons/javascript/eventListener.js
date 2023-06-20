/**
 * Event Listener
 * element.addEventListener(click, function);
 */

const btn2 = document.querySelector('.btn-2');

function btnAlert() {
    alert('I also Love JS.');
}
btn2.addEventListener('click', btnAlert);

/**
 * Mouse Over
 */

const box_3 = document.querySelector('.box-3');

function changeBgColor() {
    box_3.style.backgroundColor = 'blue';
}

box_3.addEventListener('mouseover', changeBgColor);

/**
 * Reveal More
 */

const revealBtn = document.querySelector('.reveal-btn');
const hiddenContent = document.querySelector('.hidden-content');
const classList = hiddenContent.classList;
function revealContent() {
    if (classList.contains('reveal-btn')) {
        classList.remove('reveal-btn');
    }
    else {
        classList.add('reveal-btn');
    }
}
revealBtn.addEventListener('click', revealContent);