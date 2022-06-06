function inputCapture() {
  const input = prompt("Informe um número a partir de 20 para o tamanho da ampulheta:");

  inputValidation(input);

  return input
}

function inputValidation(value) {
  if (value < 20) {
    alert("O número digitado deve ser a partir de 20");
    inputCapture();
  }
}

let inputValue = inputCapture();

function CreateHourglassExtremities(value) {
  character = "#";

  characters = character.repeat(value);
  string = ("#" + characters + "#");

  return string;
}

const hourglassExtremities = CreateHourglassExtremities(inputValue);

function CreateHourglassTop(value) {

  let firstHalfHourglass = [];
  for (let i = 0; i < value; i++) { //quantidade inserida pelo usuário

    character = "#";
    space = " ";

    for (let j = 0; j <= i; j++) { //ocorre a quantidade de vezes do i atual

      numberOfSpace = j; //quantidade de espaços em branco recebe o valor atual do j
      numberOfCharacter = value - numberOfSpace * 2; //quantidade de #

      if (numberOfCharacter > 0) {
        characters = character.repeat(numberOfCharacter);
        spaces = space.repeat(numberOfSpace);
        string = ("#" + spaces + characters + spaces + "#");
      }
    }

    if (numberOfCharacter > 0) { // quanto das as linhas foram preenchidas imprime a string/matriz
      firstHalfHourglass.push(string)
    }
  }
  return firstHalfHourglass;
}

const hourglassTop = CreateHourglassTop(inputValue);

function CreateHourglassBottom(value) {
  let secondHalfHourglass = [];

  for (let i = 0; i < value; i++) {

    no_character = " ";
    space = " ";

    for (let j = 0; j <= i; j++) {

      numberOfSpaces = value - j; //aqui muda
      numberOfNoCharacter = value - numberOfSpaces * 2;

      if (numberOfNoCharacter > 0) { //aqui muda

        no_characters = no_character.repeat(numberOfNoCharacter); //aqui muda
        spaces = space.repeat(numberOfSpaces - 1); //aqui muda
        string = ("#" + spaces + "#" + no_characters + "#" + spaces + "#");// aqui muda
      }
    }
    if (numberOfNoCharacter > 0) {
      secondHalfHourglass.push(string)
    }
  }
  return secondHalfHourglass;
}

const hourglassBottom = CreateHourglassBottom(inputValue);


function printHourglass() {
  console.log(hourglassExtremities)
  hourglassTop.map(line => {
    console.log(line)
  })

  hourglassBottom.map(line => {
    console.log(line)
  })
  console.log(hourglassExtremities)

}

printHourglass();