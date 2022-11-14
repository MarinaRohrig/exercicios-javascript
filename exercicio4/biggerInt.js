// Recebe um array de inteiros e retorna o índice do maior valor

function smallerInt(intArray) {
    let bigInt = 0;
    for (i = 0; i < intArray.length; i++) {
        if (intArray[i] >= bigInt) {
            bigInt = i;
        }
    }
    return bigInt;
}

let intArray = [2, 3, 6, 7, 10, 1];
console.log("O indíce do maior inteiro do array informado é o número: " + smallerInt(intArray) + ".");

