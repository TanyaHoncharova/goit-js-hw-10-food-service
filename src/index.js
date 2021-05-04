import './styles.css';
import menu from './menu.json';
import createMenu from './templates/menu-cards.hbs';

const refs = {
    body: document.body,
    ulMenu: document.querySelector('.js-menu'),
    switchTheme: document.querySelector('#theme-switch-toggle')
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menuMarkup = createMenu(menu);

refs.ulMenu.insertAdjacentHTML("beforeend",  menuMarkup);

refs.switchTheme.addEventListener('click', themeChange);


function saveTheme() {
    if (localStorage.getItem("theme") === Theme.DARK) {
        refs.body.classList.add(Theme.DARK);
        refs.switchTheme.checked = true;
    }
    else {
        refs.body.classList.add(Theme.LIGHT)
    }
}
saveTheme();

function toggleTheme (add, rem) {
    refs.body.classList.add(add);
    refs.body.classList.remove(rem);
    localStorage.setItem("theme", add);
}

function themeChange(e) {
    if (e.target.checked) {
    toggleTheme(Theme.DARK, Theme.LIGHT)
    }
    else {
        toggleTheme(Theme.LIGHT, Theme.DARK)
    }
}

