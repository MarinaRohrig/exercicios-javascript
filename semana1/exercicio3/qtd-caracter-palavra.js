// Captura um array de palavras e imprime no console a com maior número de letras
// e também a com menor número de letras

let array = ['java', 'javascript', 'python', 'html', 'css'];
let bigWord = "";
let smallWord = "21412541232141283192731731297831479812738912471248314198247918247918";

for (i = 0; i < array.length; i++) {
    if (bigWord.length < array[i].length) {
        bigWord = array[i];
    }
    if (smallWord.length > array[i].length) {
        smallWord = array[i];
    }
}
console.log("A palavra com o maior número de letras é: " + bigWord + ", que possuí " + bigWord.length + " letras.");
console.log("A palavra com o menor número de letras é: " + smallWord + ", que possuí " + smallWord.length + " letras.");
