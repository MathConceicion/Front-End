const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

console.log(taskInput, addTaskButton, taskList);

let tasks = [];

// tasks.push('Comprar leite');
// console.log(tasks);

// addTaskButton.addEventListener('click', () => {
//     console.log('Botão clicado');
// });

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Por favor, insira uma tarefa válida.');
        return;
    }

    tasks.push(taskText);

    taskInput.value = '';
    renderTasks();
});

function renderTasks() {
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Excluir';

        removeButton.addEventListener('click', () => {
            removeTask(index);
        });

        li.appendChild(removeButton);
        taskList.appendChild(li);
    });
}

function removeTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}