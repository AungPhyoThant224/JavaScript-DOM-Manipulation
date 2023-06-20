/**
 * Event Delegation
 * 
 * It allows users to append a SINGLE event listener to a parent element
 * that adds it to all of its parent AND future descendants that match
 * a selector.
 */

document.querySelector('#sports').addEventListener(
    'click', (e) => {
        console.log(e.target.getAttribute('id') + ' is Clicked.');

        const target = e.target;
        if (target.matches('li')) {
            target.style.backgroundColor = 'lightgrey';
        }
    }
)

const sports = document.querySelector('#sports');
const newSport = document.createElement('li');

newSport.innerText = "E-sport";
newSport.setAttribute('id', 'e-sport');

sports.appendChild(newSport);
