let qtdLados=3;

if (qtdLados < 3){
    console.log("Valor de lados informado menor do que 3,"+
     "a figura não é um polígono.")
}else if(qtdLados == 3){
    let medidaLado1=5;
    let medidaLado2=4;
    let medidaLado3=15;

    let semiPerimetro = ((medidaLado1+medidaLado2+medidaLado3)/2);
    let area = Math.sqrt(semiPerimetro*(semiPerimetro-medidaLado1)*(semiPerimetro-medidaLado2)*
                        (semiPerimetro-medidaLado3));
    console.log("A figura é um triângulo e sua área é: "+area)


    //triangulo
}else if(qtdLados==4){
    let medidaComprimento=2;
    let medidaAltura=2;
 console.log("A figura é um quadrado e sua área é :" +(medidaAltura*medidaComprimento))
    //quadrado
}else if(qtdLados==5){
    let perimetro =2;
    let apotema=2;

    console.log("A fica é um pentágono e sua área é: " +(perimetro*apotema))
    //pentágono
}

