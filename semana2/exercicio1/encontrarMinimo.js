

function encontrarMinimo (array){
    let arrayOrd = array.sort();
    return Math.min(...arrayOrd);
}

let arrayTest = [2,5,9,10,20,50,3,1,25,11,-5];

console.log("O menor número do array é: "+ encontrarMinimo(arrayTest));