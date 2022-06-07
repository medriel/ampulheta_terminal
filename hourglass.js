function inputCapture() {
  input = prompt("Informe um número a partir de 20 para o tamanho da ampulheta:");

  if (input < 20) {
    alert("O número digitado deve ser a partir de 20");
    inputCapture();
  }
  return input;
}

const inputValue = inputCapture();

function CreateHourglassExtremities(value) {
  character = "#";

  characters = character.repeat(value);
  string = ("#" + characters + "#");

  return string;
}

const hourglassExtremities = CreateHourglassExtremities(inputValue);

function divider(value) {
  character = "-";

  characters = character.repeat(value);
  string = ("-" + characters + "-");

  return string;
}

let dividerHourglass = divider(inputValue);

function CreateHourglassTop(value) {

  let firstHalfHourglass = [];
  for (let i = 0; i < value; i++) {

    character = "#";
    space = " ";

    for (let j = 0; j <= i; j++) {

      numberOfSpace = j;
      numberOfCharacter = value - numberOfSpace * 2;

      if (numberOfCharacter > 0) {
        characters = character.repeat(numberOfCharacter);
        spaces = space.repeat(numberOfSpace);
        string = ("#" + spaces + characters + spaces + "#");
      }
    }

    if (numberOfCharacter > 0) {
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

      numberOfSpaces = value - j;
      numberOfNoCharacter = value - numberOfSpaces * 2;

      if (numberOfNoCharacter > 0) {

        no_characters = no_character.repeat(numberOfNoCharacter);
        spaces = space.repeat(numberOfSpaces - 1);
        string = ("#" + spaces + "#" + no_characters + "#" + spaces + "#");
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
  });

  hourglassBottom.map(line => {
    console.log(line)
  });
  console.log(hourglassExtremities);
  console.log(`n=${inputValue}`);
}

function printFilledHourglass() {
  let filledHourglassBottom = hourglassTop.reverse();
  let filledHourglassTop = hourglassBottom.reverse();

  console.log(hourglassExtremities)
  filledHourglassTop.map(line => {
    console.log(line)
  });

  filledHourglassBottom.map(line => {
    console.log(line)
  });
  console.log(hourglassExtremities)
  console.log(`n=${inputValue}`);
}

printHourglass();
console.log(dividerHourglass);
printFilledHourglass();