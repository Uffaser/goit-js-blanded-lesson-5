import { refs } from './refs';

export const taskTemplate = ({ title, description }) => {
    return `<li class="task-list-item">
                <button class="task-list-item-btn js-task-list-item-btn">Delete</button>
                <h3>${title}</h3>
                <p>${description}</p>
            </li>`;
};

export const tasksTemplate = tasks => {
    const markup = tasks.map(taskTemplate).join('');

    refs.tasksList.innerHTML = markup;
};
