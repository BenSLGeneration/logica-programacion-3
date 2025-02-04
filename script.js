function calcularFactorial() {
  const numeroInput = document.getElementById("numeroInput").value.trim();
  const errorMessage = document.getElementById("mensajeError");
  const resultado = document.getElementById("resultado");

  if (numeroInput === "" || isNaN(numeroInput)) {
    errorMessage.textContent = "Error Ingresa un número valido";
    resultado.textContent = "";
    return;
  }

  const numero = Number(numeroInput);

  if (!Number.isInteger(numero) || numero < 0) {
    errorMessage.textContent = "Error Ingresa un numero entero positivo";
    resultado.textContent = "";
    return;
  }

  errorMessage.textContent = "";

  let factorial = 1;
  for (let index = numero; index >= 1; index--) {
    factorial *= index;
  }

  resultado.textContent = `El factorial de ${numero} es = ${factorial}`;
}

document.getElementById("calcularBtn").addEventListener("click", calcularFactorial);
