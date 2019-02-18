/*
As funções podem ou não ter parâmetros, mas caso não seja explicitado, é possível capturar argumentos que não são
declarados na função pelo Arguments:
*/

function soma() {
    let soma = 0
    //Arguments são os elementos que foram passados como argumentos da funçãp
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma(4,5,6,7,8,9,10))
