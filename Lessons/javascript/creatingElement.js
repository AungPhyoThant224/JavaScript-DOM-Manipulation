/**
 * Creating Element
 */
const ul = document.querySelector('ul');
const li = document.createElement('li');

/**
 * Adding Element
 */
ul.append(li);

/**
 * Modify Element
 */
// const firstListItem = document.querySelector('.list-items');
// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);
li.innerHTML = "MNO";

/**
 * Modifying Attribute & Classes
 */
// li.setAttribute('id', 'main-heading');
// li.removeAttribute('id');

// const title = document.querySelector('#main-heading');
// console.log(title.getAttribute('id'));

li.classList.add('list-items');
// li.classList.remove('list-items');
console.log(li.classList.contains('list-items'));

/**
 * Remove Element
 */
li.remove();