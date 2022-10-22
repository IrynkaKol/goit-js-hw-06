"use strict";

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
console.log(list);
const liArray = [];

ingredients.forEach(ingredient => {
  const itemLi = document.createElement('li')
  itemLi.className = 'item';
  itemLi.textContent = ingredient;
  liArray.push(itemLi);

})

list.append(...liArray);
console.log(liArray);

