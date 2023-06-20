const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

addTask.addEventListener('click', () => {
    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkButton = document.createElement('button');
    checkButton.innerHTML = `<i class="fa-solid fa-check" id="check"></i>`;
    checkButton.classList.add('check-task');
    task.appendChild(checkButton);

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = `<i class="fa-solid fa-trash-can" id="trash-can"></i>`;
    deleteButton.classList.add('delete-task');
    task.appendChild(deleteButton);

    if (inputTask.value === "") {
        alert('Please Enter Task');
    } else {
        taskContainer.appendChild(task);
    }
    inputTask.value = "";

    checkButton.addEventListener('click', () => {
        checkButton.parentElement.style.textDecoration = 'line-through';
    })

    deleteButton.addEventListener('click', (e) => {
        let target = e.target;
        target.parentElement.parentElement.remove();
    })
})