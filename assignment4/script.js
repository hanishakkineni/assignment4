document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const taskList = document.getElementById('task-list');
        const listItem = document.createElement('li');

        listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="remove-btn">X</button>
        `;

        listItem.addEventListener('click', function() {
            listItem.classList.toggle('completed');
        });

        listItem.querySelector('.remove-btn').addEventListener('click', function(e) {
            e.stopPropagation();
            taskList.removeChild(listItem);
        });

        taskList.appendChild(listItem);
        taskInput.value = '';
        taskInput.focus();
    }
});
