/**
 * Event Probagation
 */

/**
 * If third parameters are true bubbling downward
 * If third parameters are false bubbling upward
 */
window.addEventListener('click', () => console.log('Window'), true);

document.addEventListener('click', () => console.log('Document'), true);

document.querySelector('.div-2').addEventListener(
    'click', (e) => {
        e.stopPropagation(); // probagation will stop here.
        console.log('Div-2');
    },
    { once: true } // probagation work for first time
);

document.querySelector('.div-1').addEventListener('click', () => console.log('Div-1'), true);

document.querySelector('.click').addEventListener(
    'click', (e) => console.log(e.target.innerText = "Clicked!"), true);

document.querySelector('.click-link').addEventListener(
    'click', (e) => {
        e.preventDefault(); //cancels the event if it is cancelable (Eg. Clicking on a link, prevent the link from following the URL)
        console.log(e.target.innerText = "Link Clicked!");
    }, true);