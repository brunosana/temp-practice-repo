const saudacoes = require('./passandoParametros')('Ana', 'Lucas', 'Joao', 'Johny', 'Dayran', 'Tarsis')
const produtos = require('./passandoParametro2')({nome: 'Bola', preco: 10}, {nome: 'Notebook', preco: 1200},
{nome: 'Caneta', preco: 3.99})
//console.log(saudacoes)
console.log(produtos)