//Recebe um array de nomes e retorna o nome com a maior quantidade de caracteres.

function biggerWord(array) {
    let bigWord = "";
    for (i = 0; i < array.length; i++) {
        if (bigWord.length < array[i].length) {
            bigWord = array[i];
        }
    }
    return bigWord;
}

let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log("A palavra com o maior número de letras é: " + biggerWord(array) + ", que possuí " + biggerWord(array).length + " letras.");

