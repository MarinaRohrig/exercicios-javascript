function calc(num){
    let op = num.value;
    let param1=parseFloat(document.getElementById("number1"));
    let param2=parseFloat(document.getElementById("number2"));
    return (eval(param1+op+param2));
}

