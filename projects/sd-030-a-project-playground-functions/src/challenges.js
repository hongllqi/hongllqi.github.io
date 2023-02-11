// Desafio 1 - Crie a função compareTrue
const compareTrue = (param1, param2) => param1 && param2;

// Desafio 2 - Crie a função splitSentence
const splitSentence = frase => frase.split(' ');

// Desafio 3 - Crie a função concatName
const concatName = arrayDeStrings => `${arrayDeStrings[arrayDeStrings.length - 1]}, ${arrayDeStrings[0]}`;

// Desafio 4 - Crie a função footballPoints
const footballPoints = (wins, ties) => (wins * 3) + ties;

// Desafio 5 - Crie a função highestCount
function highestCount(arrayNumerico) {
    let count = 0;
    let maior = arrayNumerico[0];
    for (let i = 0; i < arrayNumerico.length; i++){
        if (maior === arrayNumerico[i]){
            count += 1;
        }
        if (arrayNumerico[i] > maior){
            maior = arrayNumerico[i];
            count = 1;
        }
    }
    return count;
}

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
const calcTriangleArea = (base, height) => (base * height) / 2;
const calcRectangleArea = (base, height) => base * height;
function calcAllAreas(base, height, form) {
    let message = "Não foi possível fazer o cálculo, insira uma forma geométrica válida";
    switch (form){
        case 'triângulo':
          message =  `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
            break;
        case 'retângulo':
          message =  `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`;
          break;
    }
    return message;
}

// Desafio 7 - Crie a função catAndMouse
function catAndMouse(mouse, cat1, cat2) {
    let dist1 = Math.abs(cat1 - mouse);
    let dist2 = Math.abs(cat2 - mouse);
    let message = "os gatos trombam e o rato foge";
    if (dist1 > dist2) {
        message = "cat2";
    } else if (dist1 < dist2) {
        message = "cat1";
    }
    return message;
}

// Desafio 8 - Crie a função fizzBuzz
function fizzBuzz(arrayNumerico) {
    let arrayResultado = [];
    for(let i = 0; i < arrayNumerico.length; i++) {
        let mod3 = arrayNumerico[i] % 3;
        let mod5 = arrayNumerico[i] % 5;
        if (mod3 === 0 && mod5 === 0) {
            arrayResultado.push('fizzBuzz');
        } else if (mod3 === 0) {
            arrayResultado.push('fizz');
        } else if (mod5 === 0) {
            arrayResultado.push('buzz');
        } else {
            arrayResultado.push('bug!');
        }
    }
    return arrayResultado;
}

// Desafio 9 - Crie a função encode e a função decode
function encode(frase) {
    let result = "";
    for (character of frase){
        let characterEncoded = character;
        switch (character) {
            case 'a':
              characterEncoded = '1';
              break;
            case 'e':
              characterEncoded = '2';
              break;
            case 'i':
              characterEncoded = '3';
              break;
            case 'o':
              characterEncoded = '4';
              break;
            case 'u':
              characterEncoded = '5';
              break;
        }
        result += characterEncoded;
    }
    return result;
}
function decode(frase) {
  let result = "";
  for (character of frase){
      let characterEncoded = character;
      switch (character) {
          case '1':
            characterEncoded = 'a';
            break;
          case '2':
            characterEncoded = 'e';
            break;
          case '3':
            characterEncoded = 'i';
            break;
          case '4':
            characterEncoded = 'o';
            break;
          case '5':
            characterEncoded = 'u';
            break;
      }
      result += characterEncoded;
  }
  return result;
}

// Desafio 10 - Crie a função techList
function techList(tech, name) {
    tech.sort();
    let result = [];
    for (techName of tech) {
        result.push({'tech': techName, 'name': name});
    }
    return result;
}
