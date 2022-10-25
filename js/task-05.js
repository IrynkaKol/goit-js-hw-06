"use strict";
const input = document.querySelector('#name-input');

const output = document.querySelector('#name-output');

input.addEventListener("input", handleInput);

function handleInput (event) {
    //event.preventDefault();
    output.textContent = event.target.value

	if (event.target.value === '') {
		output.textContent = 'Anonymous'
	}
}
    
