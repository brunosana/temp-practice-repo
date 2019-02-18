/*Contexto Léxico - Local no qual a sua variável foi definida fisicamente no código. */

const saudacao = 'ola'; //Contexto Léxico 1

function exec(){
    const saudacao = 'Hello' //Contexto Léxico 2
    return saudacao
    //Embora tenham o mesmo nome, como estão em contextos diferentes, não haverá conflito, no caso, durante o return
    //ele procura a variável no escopo da função, caso não ache, irá procurar fora.
}

//Objetos são grupos aninhados de chave/valor (key/value)

const cliente ={
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua A',
        numero: 123
    }
}


console.log(saudacao)
console.log(exec())

console.log(cliente)