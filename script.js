const prompt = require("prompt-sync")({ sigint: true });

function calcularFactorial(numero) {
  let factorial = 1;

  for (let index = numero; index >= 1; index--) {
    factorial = factorial * index;
  };
  
  return `El factorial de: ${numero} es = ${factorial}`;
};

console.log(calcularFactorial(Number(prompt("Dime tu numero: "))));