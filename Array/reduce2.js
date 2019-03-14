const alunos = [
    {nome: 'Joao', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]
let bolsista = alunos.map(a => a.bolsista)
//Todos os alunos são bolsistas?
// Algum aluno é bolsista?

console.log(bolsista)

let todosbolsistas = bolsista.reduce(function (acumulador, atual){
    return acumulador && atual
})

console.log(todosbolsistas)

//FORMA RAPIDA
const todos_rapido = (resultado, bolsista) => resultado && bolsista

console.log(alunos.map(a => a.bolsista).reduce(todos_rapido))

const algum = (acumulador, resultado) => acumulador || resultado

const algumbolsista = alunos.map(a => a.bolsista).reduce(algum)

console.log(algumbolsista)