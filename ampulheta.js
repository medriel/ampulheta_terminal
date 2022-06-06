function inputCapture() {
  const inputValue = prompt("Informe um número a partir de 20 para o tamanho da ampulheta:");
  inputValidation(inputValue);
}

function inputValidation(value) {
  if (value < 20) {
    alert("O número digitado deve ser a partir de 20");
    inputCapture();
  }
}

inputCapture();