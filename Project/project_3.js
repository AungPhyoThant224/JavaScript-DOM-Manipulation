const accordion = document.getElementsByClassName('content-container');

for (let items of accordion) {
    items.addEventListener('click', () => {
        items.classList.toggle('active');
    })
}