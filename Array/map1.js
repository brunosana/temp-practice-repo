const nums = [1, 2, 3, 4, 5]
//Map faz a transformação de cada elemento do array para outro array do mesmo tamanho

let resultado = nums.map(function (e) {  //Pode receber o valor atual, o índice ou o array completo
    return e*2
})

console.log(resultado)

const soma10 = e => e+10
const triplo = e => 3*e
const paraDinheiro = e => `R$${parseFloat(e).toFixed(2).replace('.', ',')}`


resultado = nums.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado)
