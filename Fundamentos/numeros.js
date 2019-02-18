//Number
const peso1 = 1.0;
const peso2 = Number('2.5');

console.log(peso1, peso2);

//Verificar se o número é inteiro
/*
 *Se o ponto flutuante for sem valor (1.0, 2.0 etc) o JS reconhece como inteiro
*/
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871 * peso1
const avaliacao2 = 8.871 * peso2
const media = (avaliacao1+avaliacao2)/2
console.log(media)

//Fixar casas decimais
console.log(media.toFixed(2))

//Converte para string e o parâmetro 2 coloca a string em binário.
console.log(media.toString(2))

console.log(typeof Number)

//CUIDADOS COM OS NÚMEROS

console.log(7/0)

//Funciona
console.log("10"/2)
//Não Funciona
//console.log("10,1"/2)

console.log("EOQ" * 3) //NaN - Not a Number

//Operações com pontos flutuantes possuem problemas
console.log(0.1*0.7)

//toString Não dá, pois funciona apenas para o tipo e não para o valor literal
//console.log(10.toString())

//to Fixed Funciona para valor literal
console.log(10.5262.toFixed(3))