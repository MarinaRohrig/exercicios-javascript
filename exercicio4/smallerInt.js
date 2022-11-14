// Função que recebe um array de inteiros e retorna o índice do menor valor.

function smallerInt(intArray) {
    let smallInt = 124092104841221;
    for (i = 0; i < intArray.length; i++) {
        if (intArray[i] <= smallInt) {
            smallInt = i;
        }
    }
    return smallInt;
}

let intArray = [2, 4, 6, 7, 10, 0, -3];
console.log("O indíce do menor inteiro do array informado é o número: " + smallerInt(intArray) + ".");