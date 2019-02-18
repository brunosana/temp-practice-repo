console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bora Brasil!'
//Linha de cima equivalente a Linha de baixo
obj1['nome'] = 'Bora São Paulo!'

console.log(obj1.nome)

function Obj(nome){
    this.nome = nome; //Conceito de OO
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)

//Curiosidade

let nome = 2 %= 8
