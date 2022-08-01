'use strict';

//! Получить элемент по id
// const box = document.getElementById('box');
// console.log(box);

//! Получить элементы по tag
// const btns = document.getElementsByTagName('button');
// console.log(btns);

//! Получить элементы по class
// const circles = document.getElementsByClassName('ball');
// console.log(circles);

//! Получить элементы по селекторам
const header = document.querySelector('.header');
const box = document.querySelector('#box');
const btns = document.querySelectorAll('button');
const circles = document.querySelectorAll('.ball');
const ballBlock = document.querySelector('.ball__block');
const hearts = document.querySelectorAll('.heart');

// console.log(header);
// console.log(box);
// console.log(btns);
// console.log(circles);
// console.log(hearts);

//! Получить элемент по селектору
// const x = document.querySelector('.heart');
// console.log(x);

//! Применяем стили
//? Меняем цвет фона
header.style.backgroundColor = '#666';

//? Меняем цвет текста
document.querySelector('.main-title').style.color = '#fff';

//? В переменной храним значение стиля border-radius
let boxBorderRadius = '8px';
box.style.cssText = `border-radius: ${boxBorderRadius}`;

//? Обращаемся к элементу в псевдомассиве nodelist
// btns[0].style.backgroundColor = 'blue';

//! Способы применить стили всем элементам
//? 1. Меняем цвет каждой кнопки с помощью цикла for
for (let i = 0; i < btns.length; i++) {
   // console.log(btns[i]);
   btns[i].style.backgroundColor = 'blue';
}
//? 2. Меняем цвет каждого круга с помощью цикла forEach
circles.forEach((item) => {
   // console.log(item);
   item.style.backgroundColor = 'purple';
});

//! Создаем элементы
//? Создаем элемент c тегом footer
//* Но они в данный момент будут находися в JS а на странице его не будет
const footer = document.createElement('footer');

//? Добавляем класс нашему тегу и силизуем его на style.css
footer.classList.add('footer');

//? Теперь добавляем блок который был создан на страницу
document.body.append(footer);

//? блок можео добавить и к родительскому тегу
const newBox = document.createElement('div');
newBox.classList.add('newBox');
newBox.style.borderRadius = '8px';
//* Можно вывести в отдельную переменную
ballBlock.append(newBox);
// document.querySelector('.ball__block').append(newBox);

//? Добавить блок ДО или ПЕРЕД каким то блоком
// circles[0].before(newBox);
// circles[0].after(newBox);

//! Удаляем блок с страницы
// newBox.remove();

//! Замена блока другим блоком
// circles[0].replaceWith(box);

//! Добавляем текст
// newBox.textContent = 'Hello World!';

//! Находим первый div или любой тег
// console.log(document.querySelector('div'));

//! Добавляем тег внутри блока (innerHTML)
//? Если внутри блока что то было то она перезаписывает а если нет то добавляет
newBox.style.display = 'flex';
newBox.style.alignItems = 'center';
newBox.style.justifyContent = 'center';
newBox.style.color = '#FFF';
newBox.innerHTML = "<h3>JavaScript</h3>";

//! События и обработчики
//? Событие при клике
// btns.forEach((item) => {
//    item.addEventListener('click', (e) => {
//       e.target.style.cssText = `background-color: #000`;
//    });
// });

//? Событие при наведении
// btns[0].addEventListener('mouseenter', (e) => {
   // console.log(e);
   // console.log('hover!');
   // e.target.remove();
// });

//! Копирует документ элемент 
document.querySelector('.section .container').append(newBox.cloneNode(true));

//! Навигация по DOM
const darkThemeBtn = document.createElement('button');
darkThemeBtn.classList.add('dark-theme');
document.querySelector('section .container').append(darkThemeBtn);
document.querySelector('.dark-theme').style.cssText = `
   padding: 12px 40px;
   background-color: #000;
   color: #fff;
   border: none;
   border-radius: 8px;
   margin-bottom: 40px;
   cursor: pointer;
`; 

darkThemeBtn.textContent = 'dark theme'.toUpperCase();

// btns.forEach((item) => {
//    item.addEventListener('click', () => {
//       document.querySelector('.ball__block').innerHTML += newBox;
//    });
// });

const userProducts = {
   cpu: 'i9 12900k',
   gpu: 'rtx 3080 ti',
   motherBoard: 'asus rog strix z690 pro',
   ram: 'hyperX ddr5 4800mhz',
   os: 'windows 11 official key',
};

for (let keys in userProducts) {
   localStorage.setItem(keys, userProducts[keys]);
}
const productInfoDiv = document.createElement('div');
productInfoDiv.classList.add('productInfoDiv');
document.querySelector('section .container').append(productInfoDiv);
document.querySelector('.productInfoDiv').innerHTML = `
   <h2>Количество товаров на вашей корзине <span class="cartLengthInfo">${localStorage.length}</span></h2>
`;

let darkThemeIsActive = false;
darkThemeBtn.addEventListener('click', () => {
   if (darkThemeIsActive === false) {
      document.body.style.cssText = `background: #333; color: #fff`;
      document.querySelector('.cartLengthInfo').style.cssText = `color: yellow`;
      darkThemeIsActive = !darkThemeIsActive;
      console.log('press!');
   } else {
      document.body.style.cssText = `background: #fff; color: #000`;
      document.querySelector('.cartLengthInfo').style.cssText = `color: red`;
      darkThemeIsActive = !darkThemeIsActive;
      console.log('press!');
   }
});