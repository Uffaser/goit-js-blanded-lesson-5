import { refs } from './js/refs';
import { addTask, deleteTask, initTasks } from './js/tasks';
import { changeTheme, isDarkTheme } from './js/theme-switcher';

if (isDarkTheme) {
    refs.body.classList.replace('theme-dark', 'theme-light');
}

initTasks();

refs.headerForm.addEventListener('submit', newTask);

function newTask(e) {
    e.preventDefault();

    const form = e.target.elements;
    const taskName = form.taskName.value.trim();
    const taskDescription = form.taskDescription.value.trim();

    if (taskName === '' || taskDescription === '') {
        alert('Enter all fields!');
        return;
    }

    const task = {
        title: taskName,
        description: taskDescription,
    };

    addTask(task);

    refs.headerForm.reset();
}

refs.tasksList.addEventListener('click', e => {
    if (e.target.nodeName !== 'BUTTON') return;

    const titleToDelete = e.target.nextElementSibling.textContent;

    deleteTask(titleToDelete);
});

refs.toggleTheme.addEventListener('click', e => {
    changeTheme();
});
