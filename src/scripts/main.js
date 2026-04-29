'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = input.name;
  input.parentElement.appendChild(label);
});

inputs.forEach((input) => {
  input.setAttribute(
    'placeholder',
    input.name.charAt(0).toUpperCase() + input.name.slice(1),
  );
});
