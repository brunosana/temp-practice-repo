//Recurso novo do ES 2015
const pessoa = {
    nome: 'Ana',
    idade: 25,
    endereco: {
        logradouro: 'Rua A',
        numero: 1000
    }
}
//Sintaxe
const {nome, idade} = pessoa //Está tirando do objeto pessoa os atributos nome e idade
console.log(nome, idade)

//Criando Variáveis personalizadas
const {nome: n, idade: i} = pessoa
console.log(n, i)

//Caso a variavel do objeto não exista ele retorna Undefined, é possível criar padrões como Default

const {nome: no = null, bosta = true} = pessoa
console.log(nome, bosta)

const {endereco: {logradouro}} = pessoa
console.log(logradouro)

//Parte 2

const [a] = [10]
console.log(a)

const [n1, , n3, ,  n5, n6 = 0] = [10, 7, 9, 8]

console.log(n1, n3, n5, n6)

//Ignorando elementos de um vetor
const [, [, nota]] = [[0, 8, 8], [5, 6, 9]]
console.log(nota)


//Parte 3

//Destructuring como parâmetro de função, ao invés de ser usado o  objeto.min ou objeto.max, usamos o nome da variável
function rand({min = 0, max = 1000}){
const valor = Math.random() * (max-min) + min
return Math.floor(valor)
}

const obj = {max: 100, min: 0}
console.log(rand(obj))

//Parte 4 -> Destructuring em Array

function rand2([min = 0, max = 1000]){
    if (min>max) [min, max] = [max, min]
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

//É possível passar apenas um valor ou valor nenhum, pois assumimos valores padrões na função
console.log(rand2([50, 40]));


