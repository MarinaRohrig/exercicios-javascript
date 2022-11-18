// Recebe uma string e retorna true se ela é um palíndromo 

function isPalindrome(word) {
    var drow = "";
    for (var i = word.length; i >= 0; i--) {
        var drow = drow + word.charAt(i);
    }
    if (word == drow) {
        console.log("A palavra " + word + " é um palíndromo.")
    } else {
        console.log("A palavra " + word + " não é um palíndromo.")
    }
}

isPalindrome("arara");
isPalindrome("desenvolvimento");