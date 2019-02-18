const prod1 = {}
//Criação de chaves dinâmicas
//Precisa ser áspas simples
prod1.nome = 'Produto 1';
prod1.preco = 59.99;


//Criação de chaves com espaços
prod1['Chave com Espaco'] = 50

console.log(prod1)

const prod2 = {
    nome: 'Produto 2',
    preco: 79.90
}

console.log(prod2)

//É passado o valor por referência


const a = {name: 'Bora BRASIL'}

console.log(a)

const b = a;
b.name = 'Bora Alemanha'

console.log(a)


//Porém com tipos primitivos isso não acontece

let c = 50;
let d = c;
d = 30
console.log(c)
console.log(d)
