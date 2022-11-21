import * as mod from './util/util.js';
// imprime as funções
//console.log (mod);

// configura para moeda
console.log(mod.currencyFormat(28888883));
// adiciona 0(x) antes do número informado(y)
console.log(mod.addLeadingZeros(22222,10));
 //adiciona 0 se não for um número válido de cpf inteiro 
console.log(mod.convert_to_cpf('2039'));
//converte para cpf , exige string, ajusta a pontuação
console.log(mod.cpfMask('03707984060'));
//organiza o array 
let array=[1,2,5,42,6,1,10];
console.log(mod.sortArray(array));