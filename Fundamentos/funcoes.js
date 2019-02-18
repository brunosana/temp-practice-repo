//Definição
function imprimirSoma(a,b){
    console.log(a+b)
}

imprimirSoma(2,3) //Ok
imprimirSoma(2) // NaN - Porque vai somar 2 + Undefined que não foi passado por parâmetro
imprimirSoma(1, 2, 3, 4, 5, 6) //Funciona mas é incorreto
imprimirSoma() // NaN 
 //É o valor padrão
function Soma(a, b=0){
    return a+b
} 

console.log(Soma(2, 3))

console.log(Soma(2)) //Usa o valor padrão


//Armazenando função em uma variável
//Função anônima
const imprimir = function (a, b){
    console.log(a,b)
}

imprimir(2, 3)

//Armazenando uma função arrow em uma variável

const somar = (a,b) => {
    return a+b
}

console.log(somar(2,3))

//Retorno implícito

//Quando não tem as chaves ele é uma função de uma única linha
const subtrair = (a,b) => a-b

console.log(subtrair(5,4))