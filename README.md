Відповідно до макету реалізувати картку оголошення про здачу кампера в оренду.
На першій сторінці каталогу має рендеритися 4 оголошення, а їх решта - по кліку на кнопку Load more.
У разі кліку по кнопці у вигляді “серця” на картці оголошення воно має додаватися до списку улюблених, а колір кнопки змінюватися.
При оновленні сторінки має фіксуватись кінцевий результат дій користувача. Тобто, якщо додати оголошення в улюблені та оновити сторінку - то кнопка все одно залишається в стані “улюбленого оголошення” із відповідним кольором.
У разі повторного кліку по кнопці у вигляді “серця” оголошення повинно бути видалене зі списку улюблених, а колір кнопки змінитись до початкового стану.
У разі кліку по кнопці Show more має відкриватись модальне вікно з детальною інформацією про кампер.
Модальне вікно повинно закриватись по кліку на кнопку у вигляді “хрестика”, по кліку на backdrop та натисканню на клавішу Esc.
В модальному вікні міститься інформація щодо особливостей кампера і відгуків про нього. Відмалювання інформації має залежати від стану активної таби.
В модальному вікні також міститься форма для оформлення бронювання камперу, що складається з полів name, email, booking date і comment. Поля name, email, booking date є обовʼязковими до заповнення і мають проходити перевірку на валідність введених значень.(У випадку невалідних даних форма не відправляється, у випадку валідної форми - сторінка оновлюється).
Ціна оренди має бути прописана одним значенням (наприклад, 8000). В UI - виведено через кому (8000,00).


Для роботи зі списком оголошень створiть свій персональний бекенд для розробки за допомогою UI-сервісу https://mockapi.io/. Створiть ресурс adverts. Використайте конструктор ресурсу та опишiть об'єкт оголошення згiдно опису нижче.



Advert

1. Створіть advert в Mockapi з наступними полями: _id, name, price, rating, location, adults, children, engine, transmission, form, length, width, height, tank, consumption, description, details, gallery, reviews (див. скріншот нижче). Для наповнення колекції можна взяти adverts.json




2. Зображення камперу можете підібрати самостійно.

3. В базі має бути від 13 оголошень з різними значеннями (на ваш розсуд). Реалізована пагінація, де одна сторінка пагінації повинна вміщувати 4 оголошення.



Створiть маршрутизацію, використовуючи React Router

У застосунку повинні бути такі маршрути:

“/” - домашня сторінка з загальним описом послуг, що надає компанія
“/catalog” - сторінка, що містить каталог камперів різної комплектації
“/favorites” - сторінка з оголошеннями(оформлення на ваш розсуд), які були додані користувачем в улюблені
Якщо користувач зайшов за маршрутом, якого не існує, його необхідно перенаправляти на домашню сторінку.





Додаткове завдання

Додайте фільтрацію:

Текстовий input, за наявності значення якого користувачеві слід показати оголошення з камперами, що знаходяться у відповідній локації
Чекбокси з відповідним обладнанням - показати оголошення з камперами, що містять обране обладнання
Радіо-кнопки з типами камперів - показати оголошення з камперами, що належать до відповідного типу


Критерії виконання

Верстка фіксована в рх, семантична та валідна
Немає помилок в консолі браузера
Обов’язкове використання Redux
Для запитів використовується бібліотека Axios
Робота виконана на нативному JS з використанням бандлеру (Vite, Parcel або ін.) або на React
Інтерактивність працює відповідно до технічного завдання
Код відформатований та без коментарів
В репозиторії має бути описаний README.md
Проєкт задеплоєний на github pages або netlify.com


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
