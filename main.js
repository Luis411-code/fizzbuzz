"use strict";

const $ = (id) => document.getElementById(id);

const $input = $("numero");
const $form = $("fizzbuzz");
const $lista = $("lista");

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  $lista.innerHTML = ""; 
  const numero = validarNumero($input.value);
  if (numero === null) return;
  generarFizzBuzz(numero);
});

function validarNumero(valor) {
  const numero = parseInt(valor);
  if (isNaN(numero) || numero < 1) {
    console.error("Error escribe un número valido por favor");
    return null;
  }
  console.log("Número Válido", numero);
  return numero;
}

const isMultipleOf = (num, divisor) => num % divisor === 0;
const isMultipleOf3 = (num) => isMultipleOf(num, 3);
const isMultipleOf5 = (num) => isMultipleOf(num, 5);

const getFizzBuzzValue = (num) => {
  if (isMultipleOf3(num) && isMultipleOf5(num)) return "FizzBuzz";
  if (isMultipleOf3(num)) return "Fizz";
  if (isMultipleOf5(num)) return "Buzz";
  return num;
}

function generarFizzBuzz(numero) {
  for (let i = 1; i <= numero; i++) {
    const fizzBuzzValue = getFizzBuzzValue(i);
    console.log(fizzBuzzValue);
    const $li = document.createElement("li");
    $li.textContent = fizzBuzzValue;
    $lista.appendChild($li);
  }
}