// Funções utilizando arrow functions que retorna em um novo array e em ordem crescente.
let numeros = [25, 64, 4, 9, 81, 36, 49, 1, 100, 121, 16 ];

// Ordenação 
numeros = numeros.sort((a,b) => a-b);
console.log(`O array ordenado: ${numeros}.`);

// O dobro de cada valor dentro desse array
const doubleValues = numeros.map((e) => e * 2);
console.log(`O dobro de cada valor do array: ${doubleValues}.`);

// A metade de cada valor dentro desse array
const halfValues = numeros.map((e) => e /2);
console.log("Metade de cada valor do array: "+halfValues+".");

// A raiz de cada valor dentro desse array
const sqrtValues = numeros.map((e) => Math.sqrt(e));
console.log(`A raiz quadrada de cada valor do array: ${sqrtValues}.`);