document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('add-btn');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    addBtn.addEventListener('click', addTodo);
    todoList.addEventListener('click', toggleTodo);
    todoList.addEventListener('click', deleteTodo);

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            const li = document.createElement('li');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'todo-checkbox';
            li.appendChild(checkbox);

            const span = document.createElement('span');
            span.textContent = todoText;
            li.appendChild(span);

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete-btn');
            li.appendChild(deleteBtn);

            todoList.appendChild(li);
            todoInput.value = '';
            todoInput.focus();
        }
    }

    function toggleTodo(e) {
        if (e.target.classList.contains('todo-checkbox')) {
            const item = e.target.parentElement;
            item.classList.toggle('completed');
        }
    }

    function deleteTodo(e) {
        if (e.target.classList.contains('delete-btn')) {
            const item = e.target.parentElement;
            todoList.removeChild(item);
        }
    }
});
