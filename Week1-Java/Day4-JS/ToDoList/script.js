const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(event)
{
    event.preventDefault();
    const newTask = todoInput.value;

    if (newTask === '')
    {
        alert("please enter a task!!")
        return;
    }

    addTask(newTask);

    todoInput.value = '';
})

function addTask(task)
{
    // creates the li tag
    const listItem = document.createElement('li');
    
    const taskText = document.createElement('span');
    taskText.textContent = task;
    listItem.appendChild(taskText);

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    listItem.appendChild(checkbox);

    checkbox.addEventListener('change', function()
        {
            if (this.checked)
            {
                taskText.style.textDecoration = 'line-through';
            }
            else
            {
                taskText.style.textDecoration = 'none';
            }
        }
    );

    const delBtn = document.createElement('button');
    delBtn.textContent = 'DELETE';
    listItem.appendChild(delBtn);

    delBtn.addEventListener('click', function()
    {
        todoList.removeChild(listItem);
    });

    const editBtn = document.createElement('button');
    editBtn.textContent = 'EDIT';
    listItem.appendChild(editBtn);

    editBtn.addEventListener('click', function()
    {
        const isEditing = listItem.classList.contains('editing');

        if (isEditing)
        {
            const input = listItem.querySelector('input[type="text"]');
            taskText.textContent = input.value;
            listItem.replaceChild(taskText, input);
            listItem.classList.remove('editing');
            editBtn.textContent = 'EDIT';
        }
        else
        {
            const input = document.createElement('input');
            input.type = 'text';
            input.value = taskText.textContent;
            listItem.replaceChild(input, taskText);
            listItem.classList.add('editing');
            editBtn.textContent = 'SAVE';
        }
    });

    // adds the parameter to the list
    todoList.appendChild(listItem);
}