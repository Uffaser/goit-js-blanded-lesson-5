import { loadFromLS, saveToLS, TASKS_LS_KEY } from './local-storage-api';
import { tasksTemplate } from './render-tasks';

let tasks = loadFromLS(TASKS_LS_KEY) || [];

export const addTask = task => {
    tasks.push(task);

    tasksTemplate(tasks);

    saveToLS(TASKS_LS_KEY, tasks);
};

export const initTasks = () => {
    tasksTemplate(tasks);
};

export const deleteTask = title => {
    tasks = tasks.filter(task => task.title !== title);

    tasksTemplate(tasks);

    saveToLS(TASKS_LS_KEY, tasks);
};
