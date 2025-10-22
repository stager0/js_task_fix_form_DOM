'use strict';

// write code here
const inputsArr = document.querySelectorAll('input');

for (const inputElement of inputsArr) {
  const tagToAdd = document.createElement('label');
  tagToAdd.classList.add('field-label');
  tagToAdd.setAttribute('for', inputElement.id);
  tagToAdd.textContent = inputElement.name;

  inputElement.parentElement.appendChild(tagToAdd);
  inputElement.placeholder = inputElement.name.charAt(0).toUpperCase() + inputElement.name.slice(1);
}
