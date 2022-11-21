//Escreva uma função chamada juntarObjetos que aceita como 
//parametro dois objetos e retorna um novo objeto que contém todas as chaves e valores do primeiro objeto e do segundo objeto.

function juntarObjetos (object1, object2){
    const object = Object.assign(object1,object2);
    return object;
}


let obj1 = {
    nome: "Marina",
    sobrenome: "Röhrig",
    hobbies: ["jogar","estudar","escutar música"]
}
let obj2 ={
    idade: "25 anos",
    altura: "1.58",
    'usa óculos': true
}

console.log(juntarObjetos(obj1,obj2));