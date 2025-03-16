document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Suppress the default form submission

    const input = document.getElementById('todo-input');
    const newTask = input.value.trim();

    if (newTask) {
        addTaskToList(newTask);
        input.value = ''; // Clear the input field
    }
});

function addTaskToList(task) {
    const todoList = document.getElementById('todo-list');
    const listItem = document.createElement('li');
    listItem.textContent = task;
    todoList.appendChild(listItem);
}