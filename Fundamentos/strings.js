const escola = "Sana Academy"

//Retorna o índice da string
console.log(escola.charAt(0))

//Quando o índice não existe ela simplesmente retorna vazio
console.log(escola.charAt(50))

//Retorna o valor da tabela ASCII
console.log(escola.charCodeAt(0))

//Retorna o índice do caractere
console.log(escola.indexOf('A'))

console.log(escola.substring(1))

console.log(escola.substring(0,5))

console.log("Escola: ".concat(escola.concat("!")))
console.log("Escola: " + escola + "!")

//Está dando erro nessa bosta
console.log(escola.replace(2, 50))

console.log("Ana,Sana,Bruno,Santos".split(','))