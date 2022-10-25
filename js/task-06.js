"use strict";

const input = document.querySelector('#validation-input');
console.log(input.getAttribute('data-length'))

input.addEventListener('blur', event => {
    if (event.currentTarget.value.length == input.getAttribute('data-length')) {
		input.classList.add('valid')
        input.classList.remove('invalid')
	
	} else {
		input.classList.remove('valid')
		input.classList.add('invalid')
		
	}
})