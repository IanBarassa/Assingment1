document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const input = document.getElementById('todo-input');
    const newTask = input.value.trim();

    if (newTask) {
        addTaskToList(newTask);
        input.value = '';
    }
});

function addTaskToList(task) {
    const todoList = document.getElementById('todo-list');
    const listItem = document.createElement('li');
    listItem.textContent = task;
    todoList.appendChild(listItem);
}