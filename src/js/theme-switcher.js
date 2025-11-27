import { loadFromLS, saveToLS } from './local-storage-api';
import { refs } from './refs';

export const isDarkTheme = loadFromLS('themeColor');

export function changeTheme() {
    const darkTheme = refs.body.className === 'theme-dark';

    if (darkTheme) {
        refs.body.classList.replace('theme-dark', 'theme-light');
    } else {
        refs.body.classList.replace('theme-light', 'theme-dark');
    }

    saveToLS('themeColor', darkTheme);
}
