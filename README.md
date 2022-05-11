# Проект: Место

Учебный проект студенки Яндекс.Практикума 39 потока Валерии Кожевниковой. Цель работы - портирование проекта с vanilla js на React.

### Обзор

- Интро
- Функционал
- React
- Figma
- БЭМ
- Картинки

**Интро**

Страница сверстана по макету из Фигмы. На сайте есть шапка с логотипом, профиль с аватаркой и информацией, галерея с карточками красивых мест, подвал и pop-up окно. Проект представляет собой сервис Mesto: интерактивную страницу, где можно редактировать информацию в профиле, а также добавлять фотографии, удалять их и ставить лайки.

**Функционал**

- Загрузка карточек и профиля
- Редактирование профиля (имя, о себе, аватар)
- Добавление карточки
- Просмотр карточки
- Удаление своих карточек <!--с подтверждением-->
<!-- - JS валидация форм -->

**React**

На сайте реализована интерактивность:

- реализована js-валидация;
- подключение API (загрузка данных профиля и карточек, редактирование профиля и аватара, добавление новых карточек).
- все компоненты являются функциональными;
- используются хуки: useEffect, useState, useContext;
- испозьзуется ref;

**Figma**

- [Ссылка на макет в Figma](https://www.figma.com/file/2cn9N9jSkmxD84oJik7xL7/JavaScript.-Sprint-4?node-id=0%3A1)

**БЭМ**

Сайт сделан с использованием [БЭМ](https://ru.bem.info/). Структура сайта представляет собой независимые блоки, которые легко редактировать.

**Картинки**

Картинки оптимизированы. Это позволяет сайту быстро загружаться и не тратить трафик пользователя.

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
