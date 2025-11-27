export const saveToLS = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};

export const loadFromLS = key => {
    const savedData = localStorage.getItem(key);

    if (savedData) {
        return JSON.parse(savedData);
    }
    return null;
};

export const TASKS_LS_KEY = 'tasks';
