// ================================
// BUSCANDO ELEMENTOS DO DOM
// ================================
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

console.log(taskInput, addTaskButton, taskList);

let tasks = [];

// ================================
// LOCAL STORAGE
// ================================
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const storedTasks = localStorage.getItem('tasks');

    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
    }
}
loadTasks();

// ================================
// EVENTO DE CLIQUE (ADICIONAR)
// ================================
addTaskBtn.addEventListener('click', () => {

    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Digite uma tarefa!');
        return;
    }

    // Agora guardamos um objeto com text e concluida
    tasks.push({
        text: taskText,
        concluida: false
    });

    saveTasks();
    taskInput.value = '';

    renderTasks();
});

// ================================
// FUNÇÃO DE RENDERIZAÇÃO
// ================================
function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {

        const li = document.createElement('li');

        // Adiciona classe 'concluida' se a tarefa foi marcada
        if (task.concluida) {
            li.classList.add('concluida');
        }
        // Checkbox para marcar como concluído (sempre à esquerda)
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('task-checkbox');
        checkbox.checked = task.concluida;

        checkbox.addEventListener('change', () => {
            toggleConcluido(index);
        });

        // Texto da tarefa
        const textSpan = document.createElement('span');
        textSpan.classList.add('task-text');
        textSpan.textContent = task.text;

        // Botão de deletar à direita
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Excluir';
        deleteBtn.classList.add('btn-delete');

        deleteBtn.addEventListener('click', () => {
            removeTask(index);
        });

        li.appendChild(checkbox);
        li.appendChild(textSpan);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

// ================================
// MARCAR COMO CONCLUÍDO
// ================================
function toggleConcluido(index) {
    tasks[index].concluida = !tasks[index].concluida;
    saveTasks();
    renderTasks();
}

// ================================
// REMOVER TAREFA
// ================================
function removeTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}
renderTasks();