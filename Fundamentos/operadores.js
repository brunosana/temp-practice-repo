//Aritiméticos
const [a, b, c, d] = [3, 5, 1, 15]

var soma = a + b + c + d
soma = a/b
soma = a*b
soma = a % b

//Relacionais

//COmo o javascript é uma linguagem fracamente tipada, existem algumas técnicas para verificar
//Ele está comparando valores
console.log('1 - ', '1' ==1)
//Com 3 iguais nós ESTRITAMOS a relação, então os tipos também entram como critério
console.log('2 - ', '1' ===1)

//Assim como operadores de negação
console.log('3 - ', '1' !=1)

console.log('4 - ', '1' !==1)

//Com números

console.log('5 - ', 5>3)
console.log('6 - ', 5 >=1)


const d1 = new Date(0)
const d2 = new Date(0)

console.log('7 - ', d1 === d2)
console.log('8 - ', d1 == 2)
console.log('9 - ', d1.getTime() == d2.getTime())


console.log('10 - ', undefined == null)
console.log('11 - ', undefined === null)


//Lógicos

function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv = trabalho1 && trabalho2
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete

/*Modo 1 - Explicitando o nome da chave e o valor
    return {
        comprarSorvete: comprarSorvete,
        comprarTv: comprarTv,
        comprarTv32: comprarTv32,
        manterSaudavel: manterSaudavel
*/
//Forma mais simples
return {comprarSorvete, comprarTv, comprarTv32, manterSaudavel}

}

console.log(compras(true,true))


//Operadores Unários


let num1 = 1
let num2 = 2
 num1 ++
 ++num1


 //Operadores Ternários

 //FUnção Arrow
 //A primeira parte é a expressão
 //A segunda parte é o resultado entre o verdadeiro e o falso
 const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

 console.log(resultado(7.1))
 console.log(resultado(6))