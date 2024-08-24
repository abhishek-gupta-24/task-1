let taskInput = document.getElementById('newTask');
let addButton = document.getElementById('addBtn');
let taskList = document.getElementById('tasks');

function createTask() {
    let taskText = taskInput.value.trim();
    if (!taskText) return;

    let task = document.createElement('li');
    task.className = 'task';

    let taskContent = document.createElement('span');
    taskContent.textContent = taskText;

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete';

    deleteBtn.onclick = function() {
        taskList.removeChild(task);
    };

    task.appendChild(taskContent);
    task.appendChild(deleteBtn);
    taskList.appendChild(task);

    taskInput.value = '';
}

addButton.onclick = createTask;

taskInput.onkeypress = function(e) {
    if (e.which === 13) createTask();
};