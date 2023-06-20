let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: `"Vision is very Important"`,
        person: "Wanna Ko Ko"
    },
    {
        quote: `"I do the very best I know how - the very best I can: and I mean to
        keep on doing so until the end."`,
        person: "Abraham Lincoln"
    },
    {
        quote: `"One of the best programming skills you can have is knowing when to walk away for a while."`,
        person: "Oscar Godson"
    }
]

btn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})