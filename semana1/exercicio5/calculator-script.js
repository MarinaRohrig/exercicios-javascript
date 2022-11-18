const finalNumber = document.querySelector(' .result ');
const equal = document.querySelector(' .igual ');

function insert( valor ){
    finalNumber.innerHTML += valor;
}

function clean() {
    finalNumber.innerHTML = ' ';
}

function calc() {
    if(finalNumber.textContent != 'Erro') {
        document.getElementById("finalNumber").innerHTML = eval(finalNumber.innerHTML)
    }
}