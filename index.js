const form = document.getElementById('add-todo');
const input = form.querySelector('input');
const todolist = document.getElementById('todo-list');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const todoText = input.value.trim();
    if (todoText === '') return;

    const li = document.createElement('li');
    const button = document.createElement('button');
    button.textContent = todoText;
    li.appendChild(button);
    todolist.appendChild(li);
    input.value = '';

    button.addEventListener('click', function () {
        if (button.classList.contains('done')) {
            button.parentElement.remove();
        } else {
            button.classList.add('done');
            button.style.textDecoration = 'line-through';
        }
    })
})