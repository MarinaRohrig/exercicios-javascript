// Inverte a palavra da variável word e imprime no console


var word = "marina";
var drow = "";

for (var i = word.length; i >= 0; i--) {
    var drow = drow + word.charAt(i);
}

console.log(drow);
