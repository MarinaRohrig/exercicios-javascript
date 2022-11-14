const visor = document.getElementById('visor');
//busca qualquer elemento que tenha parte do id como "tecla"
const numeros = document.querySelectorAll('[id*=tecla]');

const inserirNumero = (evento) => display.textContent = evento.target.textContent;

numeros.forEach(numero => numero.addEventListener('click',inserirNumero));