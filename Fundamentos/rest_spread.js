/*
Quando queremos passar vários parâmetros numa função usamos os ...

O Rest ele Junta os argumentos

E o Spread ele espalha
*/

const funcionario = {nome: 'Maria', salario: 1200}
const clone = {ativo: true, ...funcionario} //Espalha todos os atributos do funcionário no objeto clone

// Contexto Array

const grupoA = ['Bruno', 'João', 'Marcos']

const grupoB = ['Maria', 'Rafaela', ...grupoA] //Espalha todos oos atributos do grupoA no grupoB

console.log(grupoB)