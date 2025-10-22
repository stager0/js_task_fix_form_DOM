'use strict';

// write code here
const inputsArr = document.querySelectorAll('form input');

for (const inputElement of inputsArr) {
  const tagToAdd = document.createElement('label');
  tagToAdd.classList.add('field-label');

  tagToAdd.setAttribute('for', (inputElement.id || 'input-without-for'));
  tagToAdd.textContent = inputElement.name || 'no-name';

  inputElement.parentElement.appendChild(tagToAdd);

  if (inputElement.name) {
    inputElement.placeholder = (inputElement.name.charAt(0).toUpperCase() + inputElement.name.slice(1));
  } else {
    inputElement.placeholder = "no-name";
  }

}
