/**
 * Child to Parent Traversal
 */
const ul = document.querySelector('ul');
console.log(ul.parentNode); // Parents
console.log(ul.parentElement); // Parents
console.log(ul.parentNode.parentNode); // Grand-Parents
console.log(ul.parentElement.parentElement); // Grand-Parents

// const html = document.documentElement;
// console.log(html.parentNode);
// console.log(html.parentElement); // return null

/**
 * Parent to Child Traversal
 */
// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);
// ul.childNodes[1].style.backgroundColor = 'red';

console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

/**
 * Sibling Node Traversal
 */
// const div = document.querySelector('div');
// console.log(div.childNodes);

// console.log(ul.previousSibling);
// console.log(ul.nextSibling);

console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);