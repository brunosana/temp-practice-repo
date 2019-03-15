console.log(this === global) //Falso

console.log(this === module.exports) //Verdadeiro
console.log(this === exports) //Verdadeiro

function logThis(){
    console.log("Dentro da função...")
    console.log(this === exports) //Falso
    console.log(this === global) //Verdadeiro
    this.perido = 'Ola' //Colocando no escopo global
}

logThis()