// Desafio 11 - Crie a função generatePhoneNumber
function generatePhoneNumber(arrayNumerico) {
    if (arrayNumerico.length != 11) {
        return 'Array com tamanho incorreto.' ;
    }
    let arrayAux = [0,0,0,0,0,0,0,0,0,0];
    let result = "(";
    for (let i = 0; i < 11; i++) {
        let number = arrayNumerico[i];
        if (number < 0 || number > 9) {
            return 'não é possível gerar um número de telefone com esses valores';
        }
        arrayAux[number] += 1;
        if (arrayAux[number] >= 3) {
            return 'não é possível gerar um número de telefone com esses valores';
        }
        result += number;

        // Formatando número
        if (i == 1) {
            result += ") ";
        }
        if (i == 6) {
            result += "-";
        }
    }
    return result;
}

// Desafio 12 -  Crie a função triangleCheck
function triangleCheck(lineA, lineB, lineC) {
    if (lineA >= lineB + lineC){
        return false;
    }
    if (lineB >= lineA + lineC){
        return false;
    }
    if (lineC >= lineB + lineA){
        return false;
    }
    return true;
}

// Desafio 13 - Crie a função hydrate
function hydrate(frase) {
    let regex = /\d+/g;
    let matches = frase.match(regex);
    let count = 0;
    for(match of matches){
        count += parseInt(match);
    }
    let sufix = " copos de água";
    if (count <= 1) {
        sufix = " copo de água"; // Singular
    }
    return count + sufix;
}
