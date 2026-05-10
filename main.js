"use strict";

const $ = (id) => document.getElementById(id);

const $input = $("numero");
const $form = $("fizzbuzz");
const $lista = $("lista");
const $mensaje = $("mensaje");

let procesando = false;


$form.addEventListener("submit", (e) => {
  e.preventDefault();
  const boton = e.submitter;
  if (procesando) {
    $mensaje.textContent = "Espera que termine..."
    return;
  }
  procesando = true;
  boton.disabled = true;
  boton.textContent = "⏳ Procesando...";

  $lista.innerHTML = ""; 
  const numero = validarNumero($input.value);
  if (numero === null){
    procesando = false;
    boton.disabled = false;
    boton.textContent = "Aceptar";
    return;
  }
  generarFizzBuzz(numero, boton);
});

function validarNumero(valor) {
  const numero = parseInt(valor);
  if (isNaN(numero) || numero < 1) {
    $mensaje.textContent = "Error escribe un número valido Por Favor";
    return null;
  }
  const LIMITE_MAXIMO = 5000;
  if (numero > LIMITE_MAXIMO) {
    $mensaje.textContent = `❌ Error: El número máximo permitido es ${LIMITE_MAXIMO}. Escribiste ${numero}.`;
    return null;
  }
  $mensaje.textContent = `✅ Número Válido: ${numero}`;
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

function generarFizzBuzz(numero, boton) {
  const fragment = document.createDocumentFragment();
    for (let i = 1; i <= numero; i++) { 
    const fizzBuzzValue = getFizzBuzzValue(i);
    const $li = document.createElement("li");
    $li.textContent = fizzBuzzValue;
    fragment.appendChild($li);    }
  $lista.appendChild(fragment);
  procesando = false;
  boton.disabled = false;
  boton.textContent = "Aceptar";
}