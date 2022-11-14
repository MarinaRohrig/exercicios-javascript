// Recebe um número natural (número inteiro não negativo) N e retorna o somatório de todos os números de 1 até N


function somInt(number) {
    let som = 0;
    for (i = 0; i <= number; i++) {
        som += i;
    }
    console.log(som);
}

somInt(5);