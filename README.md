# Webpack starter kit &middot; [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)

## Зависимости

На компьютере должена быть установлена LTS-версия
[Node.js](https://nodejs.org/en/).

### Разработка

Для быстрого старта необходимо склонировать репозиторий.

```shell
git clone https://github.com/luxplanjay/webpack-starter-kit.git
```

Переименовать папку сборки именем вашего проекта.

```shell
mv webpack-starter-kit имя_проекта
```

Затем перейти в папку проекта.

```shell
cd имя_проекта
```

Находясь в папке проекта удалить папку `.git` связанную с репозиторием сборки
выполнив следующую команду.

```shell
npx rimraf .git
```

Установить все зависимости.

```shell
npm install
```

И запустить режим разработки.

```shell
npm start
```

Во вкладке браузера перейти по адресу
[http://localhost:4040](http://localhost:4040).

### Сборка в продакшен

Для того чтобы создать оптимизированные файлы для хостинга, необходимо выполнить
следующую команду. В корне проекта появится папка `build` со всеми
оптимизированными ресурсами.

```shell
npm run build
```

### Deploying/Publishing

Сборка может автоматически деплоить билд на GitHub Pages удаленного (remote)
репозитория. Для этого необходимо в файле `package.json` отредактировать поле
`homepage`, заменив имя пользователя и репозитория на свои.

```json
"homepage": "https://имя_пользователя.github.io/имя_репозитория"
```

После чего в терминале выполнить следующую команду.

```shell
npm run deploy
```

Если нет ошибок в коде и свойство `homepage` указано верно, запустится сборка
проекта в продакшен, после чего содержимое папки `build` будет помещено в ветку
`gh-pages` на удаленном (remote) репозитории. Через какое-то время живую
страницу можно будет посмотреть по адресу указанному в отредактированном
свойстве `homepage`.


**Читать на других языках: [Русский](README.md), [Українська](README.ua.md).**

# Критерии приема

- Создан репозиторий `goit-js-hw-10-food-service`.
- При сдаче домашней работы есть две ссылки: на исходные файлы и рабочую
  страницу на GitHub Pages.
- При посещении рабочей страницы (GitHub Pages) задания, в консоли нету ошибок и
  предупреждений.
- Имена переменных и функций понятные, описательные.
- Проект собран с помощью `Webpack` или `Parceljs`.
- Код отформатирован `Prettier`.

# Задание

Создай страницу меню с возможностью выбора темы для сервиса заказа еды.
[Ссылка на демо видео](https://take.ms/RxIlv).

![Превью страницы](preview.jpg)

- Обязательно используй `Webpack` или `Parceljs` для сборки и деплоя (
  [ссылка на готовую сборку Webpack](https://github.com/luxplanjay/webpack-starter-kit))
- В папке [src](./src) ты найдешь стартовую разметку, стили и данные
- Массив объектов блюд лежит в [menu.json](./src/menu.json)

## Тема

Добавь функционал изменения темы при нажатии (событие `change`) на чекбокс
`#theme-switch-toggle` в тулбаре.

- По умолчанию тема светлая.
- При изменении темы, необходимо добавлять на элемент `body` класс `light-theme`
  или `dark-theme`.
- Выбранная тема должна сохраняться между перезагрузками страницы. Для хранения
  темы используй `localStorage`.
- Если при загрузке страницы тема тёмная, не забудь поставить свойство `checked`
  у чекбокса `#theme-switch-toggle` в `true`, чтобы ползунок сдвинулся в
  правильное положение.

Для удобства хранения списка тем используй такое перечисление.

```js
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
```

## Шаблонизация

Используя шаблонизатор [Handlebars](https://handlebarsjs.com/) создай шаблон
одного элемента меню. После чего, используя шаблон, создай разметку всего меню

по данным из [menu.json](./src/menu.json) и добавь в DOM в `ul.js-menu`.

Для иконок используется библиотека `Material Icons`, линк на веб-фонт уже есть в
исходном HTML.

Ниже указана разметка элемента меню которая должна получаться по шаблону (данные
будут разные для каждого объекта).

```html
<li class="menu__item">
  <article class="card">
    <img
      src="https://s1.eda.ru/StaticContent/Photos/140812180013/140820212258/p_O.jpg"
      alt="Картофель, запеченный в мундире"
      class="card__image"
    />
    <div class="card__content">
      <h2 class="card__name">Картофель, запеченный в мундире</h2>
      <p class="card__price">
        <i class="material-icons"> monetization_on </i>
        100 кредитов
      </p>

      <p class="card__descr">
        Ароматный, сытный, шипящий домашний картофель, фаршированный
        сметанно-беконной начинкой, — это очень простой и очень эффектный способ
        накормить большое количество человек, практически не потратив на готовку
        ни сил, ни времени. Обычную картошку при желании тут можно заменить на
        сладкий батат, а в начинку добавить, к примеру, кукурузу или сладкий
        красный перец.
      </p>

      <ul class="tag-list">
        <li class="tag-list__item">Картофель</li>
        <li class="tag-list__item">Чеснок</li>
        <li class="tag-list__item">Сметана</li>
        <li class="tag-list__item">Бекон</li>
        <li class="tag-list__item">Твердый сыр</li>
        <li class="tag-list__item">Зеленый лук</li>
      </ul>
    </div>

    <button class="card__button button">
      <i class="material-icons button__icon"> shopping_cart </i>
      В корзину
    </button>
  </article>
</li>
```

