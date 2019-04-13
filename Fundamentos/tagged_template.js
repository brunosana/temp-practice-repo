//Tagged Template - Necessidade de processar um template string dentro de uma função

function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'Outra String'
}

const aluno = 'Marcos'
const situacao = 'Aprovado'

console.log(`${aluno} está ${situacao}`)
console.log(tag `${aluno} está ${situacao}`)
/*
Essa função captura as partes (Separadas pelas variaveis) e os valores são os valores das variáveis

*/

// Criando um tipo monetário

function real(partes, ...valores){
    const resultado = []
    valores.forEach((valor, indice)=> {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

const preco = 20.0
const Parcela = 11

console.log(`Você paga ${preco} em até 3x de ${Parcela} reais`)
console.log(real `Você paga ${preco} em até 3x de ${Parcela} reais`)

