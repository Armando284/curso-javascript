"use strict";

function isValidString(str) {
  return (!!str && typeof str === 'string' && str !== '');
}

function $(element) {
  if (!isValidString(element)) throw new Error('Invalid element selector!');
  return document.querySelector(element) || null;
}

const maxNumberForm = $('#maxNumberForm'),
  maxNumber = $('#maxNumber'),
  results = $('#results');

function addToList(value) {
  if (!isValidString(value)) throw new Error('Invalid element value!');
  results.innerHTML += `<li>${value}</li>`;
}

function fizzbuzz(maxNumber) {
  // Tu código aquí ...
  // Valida que maxNumber sea un valor valido
  // Cada numero multiplo de 3 debe ser substituido por 'Fizz'
  // Cada multiplo de 5 debe ser sustituido por 'Buzz'
  // Cada multiplo de 3 y de 5 debe ser sustituido por 'FizzBuzz'
  // Debes mostrar en el elemento results una lista de números desde 0 hasta maxNumber
  // Pasa a la funcion addToList el valor correcto para añadirlo a la lista
}

maxNumberForm.onsubmit = (e) => {
  e.preventDefault();
  e.stopPropagation();
  fizzbuzz(maxNumber.value);
  maxNumberForm.reset();
}