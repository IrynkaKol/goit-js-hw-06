"use strict";

const input = document.querySelector('#font-size-control');
const abracadabra = document.querySelector('#text');

input.addEventListener ('change', event => {
    abracadabra.style.fontSize = `${event.target.value }px`
}
)