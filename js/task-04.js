"use strict";

let counterValue = 0;

const displeyCounter = document.querySelector('#value');
const btnMinus = document.querySelector('button[data-action="decrement"]');
const btnPlus = document.querySelector('button[data-action="increment"]');

btnMinus.addEventListener('click',
() => {
counterValue --
displeyCounter.textContent = counterValue
});

btnPlus.addEventListener('click',
() => {
    counterValue ++
    displeyCounter.textContent = counterValue
});

